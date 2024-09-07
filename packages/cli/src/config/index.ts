import { GQL_URLS, queryChainConfig, setGQLSdkUri } from "@andromedaprotocol/andromeda.js";
import convict from "convict";
import convictFormatWithValidator from "convict-format-with-validator";
import { addExitHandler, CONFIG_DIRECTORY, loadStorageFile, writeStorageFile } from "./storage";
import path from "path";
import fs from 'fs';
import { getCurrentPackage } from "utils/npm";
import { displaySpinnerAsync } from "common";

convict.addFormats(convictFormatWithValidator);


export enum DEFAULT_ENVS {
  TESTNET = "testnet",
  MAINNET = "mainnet",
  DEVNET = "devnet"
}


const ROOT_ENV_PATH = path.join(CONFIG_DIRECTORY, 'env.json');

/**
 * Config used by the CLI
 * Uses convict
 */

const config = convict({
  chain: {
    name: {
      default: "",
      doc: "The name of the chain config used",
      format: String,
      env: "CHAIN_CONFIG_NAME",
      nullable: false,
    },
    chainName: {
      default: "",
      doc: "The name of the chain",
      format: String,
      nullable: false,
    },
    chainId: {
      default: "",
      doc: "The ID of the chain to use",
      format: String,
      env: "CHAIN_ID",
      nullable: false,
    },
    chainUrl: {
      default: "",
      doc: "The URL of the chain to use",
      format: "url",
      env: "CHAIN_URL",
      nullable: false,
    },
    kernelAddress: {
      default: "",
      doc: "The contract address of the Andromeda Kernel",
      format: String,
      env: "REGISTRY_ADDRESS",
      nullable: false,
    },
    addressPrefix: {
      default: "",
      doc: "The prefix for all addresses on chain",
      format: String,
      nullable: false,
    },
    defaultFee: {
      default: "0.025uandr",
      format: String,
      doc: "The default fee amount",
      nullable: false,
    },
    blockExplorerTxPages: {
      format: Array<string>,
      nullable: false,
      doc: "URLs to block explorers for the given chain. Must include '${txHash}'",
      validate: (val: string[]) => {
        if (!Array.isArray(val))
          throw new Error("Explorer Tx pages must be an array");

        if (val.some((page) => typeof page !== "string"))
          throw new Error("Not all page URLs are a string");
        if (!val.some((page) => page.includes("${txHash}")))
          throw new Error("Tx page URLs must include '${txHash}'");
      },
      default: [""] as string[],
    },
    blockExplorerAddressPages: {
      format: Array<string>,
      nullable: false,
      doc: "URLs to block explorers for the given chain. Must include '${txHash}'",
      validate: (val: string[]) => {
        if (!Array.isArray(val))
          throw new Error("Explorer Address pages must be an array");

        if (val.some((page) => typeof page !== "string"))
          throw new Error("Not all page URLs are a string");
        if (!val.some((page) => page.includes("${address}")))
          throw new Error("Address page URLs must include '${address}'");
      },
      default: [""] as string[],
    },
    chainType: {
      default: "mainnet",
      format: ["mainnet", "testnet", "devnet"],
      doc: "The chain type",
      nullable: false,
    },
  },
});

export type IChainConfig = ReturnType<typeof config.getProperties>['chain'];

/**
 * Config used by the CLI
 * Uses convict
 */
export const localChains = convict({
  chains: {
    default: [] as IChainConfig[],
    doc: "All local chain configs",
    format: Array<IChainConfig>,
    env: "CHAIN_CONFIG_NAME",
    nullable: false,
  },
});


const FALLBACK_ENV = getCurrentPackage().version.includes('beta') ? DEFAULT_ENVS.TESTNET : DEFAULT_ENVS.MAINNET;
/**
 * Env Config used by the CLI
 * Uses convict
 */
export const envConfig = convict({
  name: {
    default: FALLBACK_ENV as string,
    doc: "CLI Env name",
    format: String,
    env: "CLI_ENV",
    nullable: false,
  },
  gql: {
    default: FALLBACK_ENV === DEFAULT_ENVS.MAINNET ? GQL_URLS.MAINNET : GQL_URLS.TESTNET as string,
    doc: "Graphql url for this enviroment",
    format: String,
    env: "GQL_URL",
    nullable: false,
  },
  schema: {
    default: "https://api.andromedaprotocol.io/v1/schema",
    doc: "Schema url for this enviroment",
    format: String,
    env: "SCHEMA_URL",
    nullable: false,
  },
  envs: {
    default: [] as Array<string>,
    doc: "All available envs",
    format: Array<string>,
    nullable: false,
  },
});


/**
 * Loads the config used by the CLI on startup
 */
export async function loadDefaultEnv() {
  try {
    if (!fs.existsSync(ROOT_ENV_PATH)) {
      fs.writeFileSync(ROOT_ENV_PATH, JSON.stringify({ default: FALLBACK_ENV, envs: [FALLBACK_ENV] }));
    }
    const envData = JSON.parse(fs.readFileSync(ROOT_ENV_PATH).toString());
    envConfig.set('envs', envData.envs ?? [])
    await loadEnv(envData.default)
  } catch (error) {
  }
}


/**
 * Loads the config used by the CLI on startup
 */
export async function loadEnv(env: string, data?: Partial<ReturnType<typeof envConfig.getProperties>>) {
  const all_envs = Array.from(new Set(envConfig.get('envs').concat(env)));
  try {
    const parsedEnvConfig = loadStorageFile(env, 'env.json');
    envConfig.load(JSON.parse(parsedEnvConfig.toString()));
  } catch (error) {
    console.log("\nEnv not found")
    createEnv(env, data)
  }
  envConfig.set('envs', all_envs)
  setGQLSdkUri(envConfig.get('gql'));
  await displaySpinnerAsync("Loading config...", loadDefaultConfig);
  loadLocalChains()
}

/**
 * Loads the config used by the CLI on startup
 */
export function createEnv(env: string, data?: Partial<ReturnType<typeof envConfig.getProperties>>) {
  if (fs.existsSync(path.join(CONFIG_DIRECTORY, env, 'env.json'))) {
    throw new Error(`Env - ${env} already exists`);
  }
  console.log("\nCreating new env")
  const newEnv = { ...envConfig.getProperties(), ...data };
  newEnv.name = env;
  writeStorageFile(env, 'env.json', JSON.stringify(newEnv));
  const all_envs = Array.from(new Set(envConfig.get('envs').concat(env)));
  envConfig.set('envs', all_envs)
}

/**
 * Rename env with its folder
 */
export function renameEnv(env: string, newName: string) {
  fs.renameSync(path.join(CONFIG_DIRECTORY, env), path.join(CONFIG_DIRECTORY, newName));
  envConfig.set('envs', envConfig.get('envs').filter(name => name !== newName).concat(newName));
}


/**
 * Loads the config used by the CLI on startup
 */
export async function loadDefaultConfig() {
  try {
    const savedConfig = loadStorageFile(envConfig.get('name'), "config.json");
    const parsedSavedConfig = JSON.parse(savedConfig.toString());
    config.load(parsedSavedConfig);
  } catch (error) {
    const defaultConfig = {
      chain: await queryChainConfig(envConfig.get('gql').includes('mainnet') ? "andromeda-1" : "galileo-4").catch(_ => config.getProperties().chain),
    };
    config.load(defaultConfig);
  }
}

/**
 * Loads the config used by the CLI on startup
 */
export function loadLocalChains() {
  try {
    const savedConfig = loadStorageFile(envConfig.get('name'), "chainConfigs.json");
    const parsedSavedConfig = JSON.parse(savedConfig.toString());
    localChains.set("chains", parsedSavedConfig);
  } catch (error) {
    const defaultConfig = {
      chains: [],
    };
    localChains.load(defaultConfig);
  }
}

/**
 * Migrates previous version of cli config files
 * @deprecated will be removed in next update
 */
export function migrateLegacyEnv() {
  try {
    if (fs.existsSync(path.join(CONFIG_DIRECTORY, 'env.json'))) {
      return;
    }
    createEnv(DEFAULT_ENVS.TESTNET, {
      'gql': GQL_URLS.TESTNET,
    });
    createEnv(DEFAULT_ENVS.MAINNET, {
      'gql': GQL_URLS.MAINNET,
    });
    createEnv(DEFAULT_ENVS.DEVNET, {
      'gql': GQL_URLS.DEVNET,
    });

    fs.mkdirSync(path.join(CONFIG_DIRECTORY, 'legacy'), { recursive: true });
    const filesToMove = ['keys.json', 'config.json', 'chainConfigs.json'];
    filesToMove.forEach(f => {
      if (fs.existsSync(path.join(CONFIG_DIRECTORY, f))) {
        fs.copyFileSync(path.join(CONFIG_DIRECTORY, f), path.join(CONFIG_DIRECTORY, 'legacy', f));
        fs.rmSync(path.join(CONFIG_DIRECTORY, f))
      }
    })

    envConfig.set('envs', envConfig.get('envs').concat('legacy'))
    envConfig.set('name', 'legacy');
    createEnv('legacy', envConfig.getProperties());
    fs.writeFileSync(ROOT_ENV_PATH, JSON.stringify({ default: 'legacy', envs: envConfig.get('envs') }))
  } catch (error) {
    console.error(error);
  }
}

/**
 * Saves the current config when the CLI is exited
 */
addExitHandler(() => {
  fs.writeFileSync(ROOT_ENV_PATH, JSON.stringify({ default: envConfig.get('name'), envs: envConfig.get('envs') }));
  writeStorageFile(envConfig.get('name'), "env.json", JSON.stringify(envConfig.getProperties()));
  writeStorageFile(envConfig.get('name'), "config.json", JSON.stringify(config.getProperties()));
});

export * as storage from "./storage";

export default config;
