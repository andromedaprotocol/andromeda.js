import {
  ChainConfig,
  configs,
  getConfigByChainID,
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
import { Commands, Flags } from "../types";
import client from "./client";
import { getCurrentWallet, setCurrentWallet } from "./wallets";

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
    usage: "chain use <config name>",
  },
  get: {
    handler: configGetHandler,
    color: chalk.green,
    description: "Displays current value for a given key",
    usage: "chain get <key>",
  },
  set: {
    handler: configSetHandler,
    color: chalk.black,
    description: "Displays current config",
    usage: "chain set <key> <value>",
  },
};

function getConfigDoc(key: ConfigKey): string {
  const schema = JSON.parse(config.getSchemaString());
  const properties = schema["_cvtProperties"]["chain"]["_cvtProperties"];
  if (!properties[key]) return "";

  return properties[key].doc;
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
          "config list"
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
        "config list"
      )} to see a list of valid keys`
    );
  }

  config.set(`chain.${trimmedKey}`, trimmedValue);
}

async function listConfigsHandler() {
  const configTable = new Table(logTableConfig);
  configTable.push([chalk.bold("Name"), chalk.bold("Chain ID")]);
  configs.forEach((chainConfig) =>
    config.get("chain.chainId") === chainConfig.chainId
      ? configTable.push([chalk.green(chainConfig.chainId)])
      : configTable.push([chainConfig.chainId])
  );

  console.log(configTable.toString());
}

async function useConfigHandler(input: string[]) {
  if (input.length === 0) {
    throw new Error("Invalid input");
  }
  const [chainId] = input;
  const chainConfig = getConfigByChainID(chainId);

  if (!chainConfig) {
    throw new Error(`No chain config with the name ${name}`);
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
  if (input.length === 0) {
    throw new Error(`Invalid input, usage:

    ${chalk.green("config get <key>")}`);
  } else {
    await printConfig(config.get("chain"), input[0] as ConfigKey);
  }
}

async function configSetHandler(input: string[]) {
  if (input.length !== 2) {
    throw new Error(`Invalid input, usage:

    ${chalk.green("config set <key> <value>")}`);
  } else {
    const [key, value] = input;
    await setKey(key, value);
  }
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
  const result = await client.upload(binary, fee ?? "auto");

  console.log(successMessage ?? chalk.green("Wasm uploaded!"));
  console.log();
  printTransactionUrl(result.transactionHash);
  console.log(chalk.green(`Code ID: ${result.codeId}`));
}

export async function queryMessage(address: string, msg: Record<string, any>) {
  const resp = await client.queryContract(address, msg);
  console.log(resp);
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
  const feeEstimate = await simulateInstantiationMessage(
    codeId,
    msg,
    label ?? "Instantion"
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

export default commands;
