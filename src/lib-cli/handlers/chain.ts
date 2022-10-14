import {
  ChainConfig,
  queryAllChainConfigs,
  queryChainConfig,
} from "@andromeda/andromeda-js";
import pc from "picocolors";
import Table from "cli-table";
import inquirer from "inquirer";

import { displaySpinnerAsync, logTableConfig } from "../common";
import config from "../config";
import {
  loadStorageFile,
  storageFileExists,
  writeStorageFile,
} from "../config/storage";
import State from "../state";
import { Commands } from "../types";
import { setCurrentWallet } from "./wallets";

const STORAGE_FILE = "chainConfigs.json";

type ConfigKey = keyof ChainConfig;

const commands: Commands = {
  config: {
    handler: configPrintHandler,
    color: pc.white,
    description: "Displays current chain config",
    usage: "chain config",
  },
  list: {
    handler: listConfigsHandler,
    color: pc.blue,
    description: "Lists all the currently saved configs",
    usage: "chain list",
  },
  use: {
    handler: useConfigHandler,
    color: pc.yellow,
    description: "Swap to a saved config",
    usage: "chain use <chain ID>",
    inputs: [
      {
        requestMessage: "Input the chain ID to use:",
        options: async () => {
          const configs = await displaySpinnerAsync(
            "Loading configs...",
            queryAllConfigsSafe
          );
          return configs.map((conf) => conf.name);
        },
      },
    ],
  },
  get: {
    handler: configGetHandler,
    color: pc.cyan,
    description: "Displays current value for a given key",
    usage: "chain get <key?>",
  },
  set: {
    handler: configSetHandler,
    color: pc.black,
    description: "Sets the value for a given config key",
    usage: "chain set <key> <value>",
    disabled: async () =>
      typeof (await queryChainConfig(config.get("chain.name"))) !== "undefined",
    inputs: [
      {
        requestMessage: "Input Config Key:",
      },
      {
        requestMessage: "Input Value:",
      },
    ],
  },
  new: {
    handler: newConfigHandler,
    color: pc.green,
    description: "Creates a new config",
    usage: "chain new <name>",
    inputs: [
      {
        requestMessage: "Input Config Name:",
        validate: async (input: string) => {
          if (input.length === 0) return false;
          const config = await getCLIChainConfig(input);
          if (config) {
            console.log();
            console.log(pc.red("Config already exists with that name"));
            return false;
          }

          return true;
        },
      },
    ],
  },
  copy: {
    handler: copyConfigHandler,
    color: pc.magenta,
    description: "Creates a copy of a current config",
    usage: "chain copy <current config name> <new config name>",
    inputs: [
      {
        requestMessage: "Input Current Config Name:",
        validate: (input: string) => {
          const config = getCLIChainConfig(input);
          if (!config) {
            console.log();
            console.log(pc.red("Config does not exist"));
            return false;
          }

          return true;
        },
        options: async () => [
          ...localConfigs.map(({ name }) => name),
          ...(await queryAllConfigsSafe()).map(({ name }) => name),
        ],
      },
      {
        requestMessage: "Input New Config Name:",
        validate: async (input: string) => {
          if (input.length === 0) return false;
          const config = await getCLIChainConfig(input);
          if (config) {
            console.log();
            console.log(pc.red("Config already exists with that name"));
            return false;
          }

          return true;
        },
      },
    ],
  },
  rm: {
    handler: removeConfigHandler,
    color: pc.red,
    description: "Removes a config by name or chain ID",
    usage: "chain rm <config name>",
    inputs: [
      {
        requestMessage: "Select config to remove:",
        validate: (input: string) => {
          const config = getCLIChainConfig(input);
          if (!config) {
            console.log();
            console.log(pc.red(`Config ${input} not found`));
            return false;
          }

          return true;
        },
        options: async () => [...localConfigs.map(({ name }) => name)],
      },
    ],
  },
};

/**
 * A safe query for all chain configs, returns an empty array and prints a message if something went wrong fetching the chain configs
 * @returns
 */
async function queryAllConfigsSafe(): Promise<ChainConfig[]> {
  try {
    return await queryAllChainConfigs();
  } catch (error) {
    console.error(pc.red("Something went wrong fetching chain configs"));
    return [];
  }
}

// Used for when the user creates their own config
let localConfigs: ChainConfig[] = [];

/**
 * Loads all local configs from storage
 */
function loadLocalConfigs() {
  try {
    if (!storageFileExists(STORAGE_FILE)) {
      writeStorageFile(STORAGE_FILE, JSON.stringify([]));
      return;
    }

    const loadedConfigsBuffer = loadStorageFile(STORAGE_FILE);
    localConfigs = JSON.parse(loadedConfigsBuffer.toString()) as ChainConfig[];
  } catch (error) {
    console.error("Problem loading local chain configs");
    console.error(error);
  }
}

loadLocalConfigs();

/**
 * Gets the description of a given key from config
 * @param key
 * @returns The description of the given key
 */
function getConfigDoc(key: ConfigKey): string {
  const schema = JSON.parse(config.getSchemaString());
  const properties = schema["_cvtProperties"]["chain"]["_cvtProperties"];
  if (!properties[key]) return "";

  return properties[key].doc;
}

/**
 * Gets a config by a given name/chain ID.
 * Includes andromeda.js configs and locally saved configs.
 * @param identifier The config name or chain ID
 * @returns The respective config
 */
async function getCLIChainConfig(
  identifier: string
): Promise<ChainConfig | undefined> {
  try {
    const config =
      (await queryChainConfig(identifier)) ??
      localConfigs.find(
        (config) => config.name === identifier || config.chainId === identifier
      );
    return config;
  } catch (error) {
    const { message } = error as Error;
    if (message.includes("config not found"))
      throw new Error("Config not found");
    throw error;
  }
}

/**
 * Prints a config in table format. If a key is provided only the given key is printed.
 * @param config
 * @param keyToPrint Optional: Key to print
 */
async function printConfig(config: ChainConfig, keyToPrint?: ConfigKey) {
  const configTable = new Table(logTableConfig);
  configTable.push([pc.bold("Key"), pc.bold("Value"), pc.bold("Description")]);
  const trimmedKey = (keyToPrint as string)?.trim();
  let keys = Object.keys(config) as ConfigKey[];
  if (trimmedKey && trimmedKey.length > 0) {
    if (!keys.includes(trimmedKey as ConfigKey)) {
      throw new Error(
        `Invalid config key, try ${pc.white(
          "chain get"
        )} to see a list of valid keys`
      );
    }
    keys = [trimmedKey as ConfigKey];
  }

  keys.forEach((key: ConfigKey) => {
    if ((key as any) === "nullable") return;
    const val = config[key];
    configTable.push([
      key as string,
      val && (typeof val !== "string" || val.length > 0)
        ? (val as string)
        : "<unset>",
      getConfigDoc(key),
    ]);
  });

  console.log(pc.green("Current chain config"));
  console.log();
  console.log(configTable.toString());
}

/**
 * Sets the value for a given key in config
 * @param key
 * @param value
 */
async function setKey(key: string, value: string) {
  const trimmedKey = key.trim();
  const trimmedValue = value.trim();
  if (!config.has(`chain.${trimmedKey}` as any)) {
    throw new Error(
      `Invalid config key, try ${pc.white(
        "chain list"
      )} to see a list of valid keys`
    );
  }

  const name = config.get("chain.name");
  config.set(`chain.${trimmedKey}`, trimmedValue);

  const localConfig = localConfigs.find(
    ({ name: localConfigName }) => localConfigName === name
  );

  // Save any updates to local configs
  if (localConfig) {
    localConfigs = localConfigs.map((config) =>
      config.name === name ? { ...config, [trimmedKey]: trimmedValue } : config
    );
    writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));
  }
}

/**
 * Prints all available config names/chain IDs
 */
async function listConfigsHandler() {
  const configTable = new Table(logTableConfig);
  configTable.push([pc.bold("Name"), pc.bold("Chain ID")]);
  [...(await queryAllConfigsSafe()), ...localConfigs].forEach((chainConfig) =>
    config.get("chain.name") === chainConfig.name
      ? configTable.push([
          pc.green(chainConfig.name),
          pc.green(chainConfig.chainId),
        ])
      : configTable.push([chainConfig.name, chainConfig.chainId])
  );

  console.log(configTable.toString());
}

/**
 * Swaps the currently used config by name/chain ID/config index
 * @param input
 */
async function useConfigHandler(input: string[]) {
  if (input.length === 0) {
    throw new Error("Invalid input");
  }
  const [chainId] = input;
  const chainConfig = await displaySpinnerAsync(
    "Loading config...",
    async () => await getCLIChainConfig(chainId)
  );

  if (!chainConfig) {
    throw new Error(`No chain config for chain ID: ${chainId}`);
  }

  config.set("chain", chainConfig);
  console.log(pc.green(`Config loaded!`));
  const wallet = State.wallets.currentWallet;
  if (wallet) {
    // Set current wallet also connects the client
    await setCurrentWallet(wallet);
  } else {
    // If no wallet, connect the client without a signer
    await State.connectClient();
  }
}

/**
 * Prints a config or just a key within the config if it is provided
 * @param input
 */
async function configGetHandler(input: string[]) {
  const [key] = input;

  await printConfig(config.get("chain") as ChainConfig, key as ConfigKey);
}

/**
 * Sets a value within the config by a given key
 * @param input
 */
async function configSetHandler(input: string[]) {
  const [key, value] = input;
  // const name = config.get("chain.name");
  // if (configs.some((config) => config.name === name))
  //   throw new Error(
  //     "Cannot edit this config, please create a new config if you wish to make changes"
  //   );
  await setKey(key, value);
}

/**
 * Prints the entire config
 */
async function configPrintHandler() {
  await printConfig(config.get("chain") as ChainConfig);
}

/**
 * Generates a new config from several prompts
 * @param input
 */
export async function newConfigHandler(input: string[]) {
  const [name] = input;
  const config = await inquirer.prompt([
    {
      name: "chainName",
      message: "Input the chain name:",
      type: "input",
      validate: (input: string) => input.length > 0,
    },
    {
      name: "chainId",
      message: "Input the chain ID:",
      type: "input",
      validate: (input: string) => input.length > 0,
    },
    {
      name: "chainUrl",
      message: "Input the chain URL:",
      type: "input",
      validate: (input: string) => input.length > 0,
    },
    {
      name: "chainType",
      message: "Select the chain type:",
      type: "list",
      choices: ["mainnet", "testnet", "exit"],
      validate: (input: string) => input.length > 0,
    },
    {
      name: "registryAddress",
      message:
        "Input the address of the Andromeda Registry for this chain (optional):",
      type: "input",
    },
    {
      name: "addressPrefix",
      message: "Input the prefix for any addresses on this chain:",
      type: "input",
      validate: (input: string) => input.length > 0,
    },
    {
      name: "defaultFee",
      message: "Input the default fee for the chain (e.g. 0.025ujunox):",
      type: "input",
      validate: (input: string) => input.length > 0,
    },
  ]);
  if (config.chainType === "exit") return;

  const fullConfig: ChainConfig = {
    ...config,
    name,
    blockExplorerAddressPages: [],
    blockExplorerTxPages: [],
  };

  localConfigs.push(fullConfig);
  writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));
  await useConfigHandler(input);
}

/**
 * Copies a currently stored config by name/chainID
 * @param input
 */
async function copyConfigHandler(input: string[]) {
  const [oldConfigName, newConfigName] = input;
  const oldConfig = await getCLIChainConfig(oldConfigName);
  if (!oldConfig) throw new Error(`Config '${oldConfigName}' not found`);

  const newConfig = { ...oldConfig!, name: newConfigName };

  localConfigs.push(newConfig);
  writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));

  await useConfigHandler([newConfigName]);
}

/**
 * Removes a config by name/chain ID. Default configs cannot be removed.
 * @param input
 */
async function removeConfigHandler(input: string[]) {
  const [configName] = input;
  const defaultConfig = await queryChainConfig(configName);
  if (defaultConfig) throw new Error("Cannot remove a default config");

  const localConfig = localConfigs.find(
    ({ name, chainId }) => name === configName || chainId === configName
  );
  if (!localConfig) throw new Error(`Config '${configName}' not found`);

  localConfigs = localConfigs.filter(
    ({ name, chainId }) => name !== configName && chainId !== configName
  );
  writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));

  if (localConfig.name === config.get("chain.name")) {
    const replacementConfig = await inquirer.prompt({
      type: "list",
      choices: [
        ...localConfigs.map(({ name }) => name),
        ...(await queryAllConfigsSafe()).map(({ name }) => name),
      ],
      message: "Select new config to use:",
      name: "replacementconfig",
    });

    await useConfigHandler([replacementConfig.replacementconfig]);
  }
}

export default commands;
