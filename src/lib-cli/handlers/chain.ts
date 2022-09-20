import {
  ChainConfig,
  configs,
  getConfigByChainID,
  getConfigByName,
  Msg,
} from "@andromeda/andromeda-js";
import { parseCoins } from "@cosmjs/proto-signing";
import { GasPrice, StdFee } from "@cosmjs/stargate";
import chalk from "chalk";
import Table from "cli-table";
import inquirer from "inquirer";

import {
  displaySpinnerAsync,
  logTableConfig,
  printTransactionUrl,
} from "../common";
import config from "../config";
import {
  loadStorageFile,
  storageFileExists,
  writeStorageFile,
} from "../config/storage";
import { Commands, Flags } from "../types";
import client from "./client";
import { getCurrentWallet, setCurrentWallet } from "./wallets";

const STORAGE_FILE = "chainConfigs.json";

type ConfigKey = keyof ChainConfig;

const commands: Commands = {
  config: {
    handler: configPrintHandler,
    color: chalk.white,
    description: "Displays current chain config",
    usage: "chain config",
  },
  list: {
    handler: listConfigsHandler,
    color: chalk.blue,
    description: "Lists all the currently saved configs",
    usage: "chain list",
  },
  use: {
    handler: useConfigHandler,
    color: chalk.yellow,
    description: "Swap to a saved config",
    usage: "chain use <chain ID>",
    inputs: [
      {
        requestMessage: "Input the chain ID to use:",
        options: configs.map(({ chainId }) => chainId),
      },
    ],
  },
  get: {
    handler: configGetHandler,
    color: chalk.green,
    description: "Displays current value for a given key",
    usage: "chain get <key?>",
  },
  set: {
    handler: configSetHandler,
    color: chalk.black,
    description: "Sets the value for a given config key",
    usage: "chain set <key> <value>",
    disabled: () =>
      typeof getConfigByName(config.get("chain.name")) !== "undefined",
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
    color: chalk.green,
    description: "Creates a new config",
    usage: "chain new <name>",
    inputs: [
      {
        requestMessage: "Input Config Name:",
        validate: (input: string) => {
          const config = getCLIChainConfigByName(input);
          if (config) {
            console.log();
            console.log(chalk.red("Config already exists with that name"));
            return false;
          }

          return true;
        },
      },
    ],
  },
};

let localConfigs: ChainConfig[] = [];

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

function getConfigDoc(key: ConfigKey): string {
  const schema = JSON.parse(config.getSchemaString());
  const properties = schema["_cvtProperties"]["chain"]["_cvtProperties"];
  if (!properties[key]) return "";

  return properties[key].doc;
}

// Includes andromeda.js configs and locally saved configs
function getCLIChainConfigByName(name: string): ChainConfig | undefined {
  return (
    getConfigByName(name) ??
    getConfigByChainID(name) ??
    localConfigs.find(
      (config) => config.name === name || config.chainId === name
    )
  );
}

async function printConfig(config: ChainConfig, keyToPrint?: ConfigKey) {
  const configTable = new Table(logTableConfig);
  configTable.push([
    chalk.bold("Key"),
    chalk.bold("Value"),
    chalk.bold("Description"),
  ]);
  const trimmedKey = keyToPrint?.trim() as ConfigKey;
  let keys = Object.keys(config) as ConfigKey[];
  if (trimmedKey && trimmedKey.length > 0) {
    if (!keys.includes(trimmedKey)) {
      throw new Error(
        `Invalid config key, try ${chalk.white(
          "chain get"
        )} to see a list of valid keys`
      );
    }
    keys = [trimmedKey];
  }

  keys.forEach((key: ConfigKey) => {
    if ((key as any) === "nullable") return;
    const val = config[key];
    configTable.push([
      key,
      val && (typeof val !== "string" || val.length > 0) ? val : "<unset>",
      getConfigDoc(key),
    ]);
  });

  console.log(chalk.green("Current chain config"));
  console.log();
  console.log(configTable.toString());
}

async function setKey(key: string, value: string) {
  const trimmedKey: ConfigKey = key.trim() as ConfigKey;
  const trimmedValue = value.trim();
  if (!config.has(`chain.${trimmedKey}` as any)) {
    throw new Error(
      `Invalid config key, try ${chalk.white(
        "chain list"
      )} to see a list of valid keys`
    );
  }

  const name = config.get("chain.name");
  config.set(`chain.${trimmedKey}`, trimmedValue);

  const localConfig = localConfigs.find(
    ({ name: localConfigName }) => localConfigName === name
  );

  if (localConfig) {
    localConfigs = localConfigs.map((config) =>
      config.name === name ? { ...config, [trimmedKey]: trimmedValue } : config
    );
    writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));
  }
}

async function listConfigsHandler() {
  const configTable = new Table(logTableConfig);
  configTable.push([chalk.bold("Name"), chalk.bold("Chain ID")]);
  [...configs, ...localConfigs].forEach((chainConfig) =>
    config.get("chain.name") === chainConfig.name
      ? configTable.push([
          chalk.green(chainConfig.name),
          chalk.green(chainConfig.chainId),
        ])
      : configTable.push([chalk.green(chainConfig.name), chainConfig.chainId])
  );

  console.log(configTable.toString());
}

async function useConfigHandler(input: string[]) {
  if (input.length === 0) {
    throw new Error("Invalid input");
  }
  const [chainId] = input;
  const chainConfig = getCLIChainConfigByName(chainId);

  if (!chainConfig) {
    throw new Error(`No chain config for chain ID: ${chainId}`);
  }

  config.set("chain", chainConfig);
  const wallet = getCurrentWallet();
  if (wallet) {
    await setCurrentWallet(wallet);
  } else {
    const { chainUrl, registryAddress, defaultFee } = config.get("chain");
    await client.connect(chainUrl, registryAddress, undefined, {
      gasPrice: GasPrice.fromString(defaultFee),
    });
  }

  console.log(chalk.green(`Config loaded!`));
}

async function configGetHandler(input: string[]) {
  const [key] = input;

  await printConfig(config.get("chain"), key as ConfigKey);
}

async function configSetHandler(input: string[]) {
  const [key, value] = input;
  const name = config.get("chain.name");
  if (configs.some((config) => config.name === name))
    throw new Error(
      "Cannot edit this config, please create a new config if you wish to make changes"
    );
  await setKey(key, value);
}

async function configPrintHandler() {
  await printConfig(config.get("chain"));
}

export async function executeMessage(
  address: string,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { funds, memo, fee, simulate } = flags;
  const feeEstimate = await simulateMessage(address, msg, flags);
  console.log(successMessage ?? chalk.green("Transaction simulated!"));
  console.log();
  logFeeEstimation(feeEstimate);
  if (simulate) {
    return;
  }
  const confirmation = await inquirer.prompt({
    type: "confirm",
    message: `Do you want to proceed?`,
    name: "confirmtx",
  });
  if (!confirmation.confirmtx) {
    console.log(chalk.red("Transaction cancelled"));
    return;
  }

  const msgFunds = parseCoins(funds ?? "");
  const resp = await displaySpinnerAsync(
    "Executing Tx...",
    async () =>
      await client.execute(address, msg, fee ?? "auto", memo, msgFunds)
  );
  console.log();
  console.log(successMessage ?? chalk.green("Transaction executed!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
}

export async function uploadWasm(
  binary: Uint8Array,
  flags: Flags,
  successMessage?: string
) {
  const { fee } = flags;
  const result = await displaySpinnerAsync(
    "Uploading contract binary...",
    async () => await client.upload(binary, fee ?? "auto")
  );

  console.log(successMessage ?? chalk.green("Wasm uploaded!"));
  console.log();
  printTransactionUrl(result.transactionHash);
  console.log(chalk.green(`Code ID: ${result.codeId}`));
}

export async function queryMessage<T = any>(
  address: string,
  msg: Record<string, any>
): Promise<T> {
  const resp = await displaySpinnerAsync(
    "Querying contract...",
    async () => await client.queryContract<T>(address, msg)
  );
  // console.log(resp);
  return resp;
}

function logFeeEstimation(fee: StdFee) {
  console.log(chalk.bold("Cost Estimates"));
  console.log(`Gas Used: ${fee.gas}`);
  console.log("Fee estimates:");
  for (let i = 0; i < fee.amount.length; i++) {
    const feeCoin = fee.amount[i];
    console.log(`   ${chalk.green(`${feeCoin.amount}${feeCoin.denom}`)}`);
  }
  console.log();
}

export async function simulateMessage(
  address: string,
  msg: Record<string, any>,
  flags: Flags
) {
  const { funds, memo } = flags;
  const msgFunds = parseCoins(funds ?? "");
  const feeEstimate = displaySpinnerAsync(
    "Simulating Tx...",
    async () => await client.estimateExecuteFee(address, msg, msgFunds, memo)
  );
  return feeEstimate;
}

export async function simulateInstantiationMessage(
  codeId: number,
  msg: Msg,
  label: string
) {
  const feeEstimate = displaySpinnerAsync(
    "Simulating Instantiation Tx...",
    async () => await client.estimateInstantiationFee(codeId, msg, label)
  );
  return feeEstimate;
}

export async function instantiateMessage(
  codeId: number,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { label, admin, simulate } = flags;
  const feeEstimate = await displaySpinnerAsync(
    "Simulating transaction...",
    async () =>
      await simulateInstantiationMessage(codeId, msg, label ?? "Instantiation")
  );
  console.log(successMessage ?? chalk.green("Transaction simulated!"));
  console.log();
  logFeeEstimation(feeEstimate);
  if (simulate) {
    return;
  }
  const confirmation = await inquirer.prompt({
    type: "confirm",
    message: `Do you want to proceed?`,
    name: "confirmtx",
  });
  if (!confirmation.confirmtx) {
    console.log(chalk.red("Transaction cancelled"));
    return;
  }

  const resp = await displaySpinnerAsync(
    "Instantiating your contract...",
    async () =>
      await client.instantiate(
        codeId,
        msg,
        label ?? "Instantiation",
        "auto",
        admin ? { admin } : undefined
      )
  );
  console.log();
  console.log(successMessage ?? chalk.green("Contract instantiated!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
  console.log(`Address: ${chalk.bold(resp.contractAddress)}`);
}

export async function migrateMessage(
  contractAddress: string,
  codeId: number,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { memo } = flags;
  // const feeEstimate = await displaySpinnerAsync(
  //   "Simulating transaction...",
  //   async () =>
  //     await simulateInstantiationMessage(codeId, msg, label ?? "Instantiation")
  // );
  // console.log(successMessage ?? chalk.green("Transaction simulated!"));
  // console.log();
  // logFeeEstimation(feeEstimate);
  // if (simulate) {
  //   return;
  // }
  // const confirmation = await inquirer.prompt({
  //   type: "confirm",
  //   message: `Do you want to proceed?`,
  //   name: "confirmtx",
  // });
  // if (!confirmation.confirmtx) {
  //   console.log(chalk.red("Transaction cancelled"));
  //   return;
  // }

  const resp = await displaySpinnerAsync(
    "Migrating your contract...",
    async () => await client.migrate(contractAddress, codeId, msg, "auto", memo)
  );
  console.log();
  console.log(successMessage ?? chalk.green("Contract migrated!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
  console.log(`Address: ${chalk.bold(contractAddress)}`);
}

export async function newConfigHandler(input: string[]) {
  const [name] = input;
  const config = await inquirer.prompt([
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
    {
      name: "chainId",
      message: "Input the default block explorer URL (optional):",
      type: "input",
    },
  ]);

  const fullConfig: ChainConfig = { ...config, name };

  localConfigs.push(fullConfig);
  writeStorageFile(STORAGE_FILE, JSON.stringify(localConfigs));
  await useConfigHandler(input);
}

export default commands;
