import { GQL_URLS, queryChainConfig, setGQLSdkUri } from "@andromedaprotocol/andromeda.js";
import convict from "convict";
import convictFormatWithValidator from "convict-format-with-validator";
import { addExitHandler, CONFIG_DIRECTORY, loadRootFile, loadStorageFile, rootFileExists, storageFileExists, writeRootFile, writeStorageFile } from "./storage";
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
  }
});

export function getAllEnvs() {
  return fs.readdirSync(CONFIG_DIRECTORY).filter(env => {
    return storageFileExists(env, 'env.json');
  });
}


/**
 * Loads the config used by the CLI on startup
 */
export async function loadDefaultEnv() {
  try {
    if (!rootFileExists('env.json')) {
      writeRootFile('env.json', JSON.stringify({ default: FALLBACK_ENV }));
    }
    const envData = JSON.parse(loadRootFile('env.json').toString());
    await loadEnv(envData.default)
  } catch (error) {
  }
}


/**
 * Loads the config used by the CLI on startup
 */
export async function loadEnv(env: string) {
  const parsedEnvConfig = loadStorageFile(env, 'env.json');
  envConfig.load(JSON.parse(parsedEnvConfig.toString()));
  setGQLSdkUri(envConfig.get('gql'));
  await displaySpinnerAsync("Loading config...", loadDefaultConfig);
  loadLocalChains()
}

/**
 * Loads the config used by the CLI on startup
 */
export function createEnv(env: string, data?: Partial<ReturnType<typeof envConfig.getProperties>>, doNotThrow = false) {
  if (fs.existsSync(path.join(CONFIG_DIRECTORY, env, 'env.json'))) {
    if (doNotThrow) {
      return;
    }
    throw new Error(`Env - ${env} already exists`);
  }
  console.log("\nCreating new env")
  const newEnv = { ...envConfig.getProperties(), ...data };
  newEnv.name = env;
  writeStorageFile(env, 'env.json', JSON.stringify(newEnv));
}

/**
 * Rename env with its folder
 */
export function renameEnv(env: string, newName: string) {
  fs.renameSync(path.join(CONFIG_DIRECTORY, env), path.join(CONFIG_DIRECTORY, newName));
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
 * Saves the current config when the CLI is exited
 */
addExitHandler(() => {
  writeRootFile('env.json', JSON.stringify({ default: envConfig.get('name') }));
  writeStorageFile(envConfig.get('name'), "env.json", JSON.stringify(envConfig.getProperties()));
  writeStorageFile(envConfig.get('name'), "config.json", JSON.stringify(config.getProperties()));
});

export * as storage from "./storage";

export default config;
