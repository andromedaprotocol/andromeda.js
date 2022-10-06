import { Msg } from "@andromeda/andromeda-js";
import { parseCoins } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
  printTransactionUrl,
} from "../common";
import { Commands, Flags } from "../types";
import client from "./client";
import { parseJSONInput, validateAddressInput } from "./utils";

export const commands: Commands = {
  query: {
    handler: queryHandler,
    color: chalk.green,
    description: "Queries a contract",
    usage: "wasm query <contract address> <query object>",
    inputs: [
      {
        requestMessage: "Input Contract Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input query:",
        validate: (input: string) => {
          try {
            parseJSONInput(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  execute: {
    handler: executeHandler,
    color: chalk.yellow,
    description: "Executes a wasm message",
    usage: "wasm execute <contract address> <message>",
    flags: executeFlags,
    inputs: [
      {
        requestMessage: "Input Contract Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input execute message:",
        validate: (input: string) => {
          try {
            parseJSONInput(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  instantiate: {
    handler: instantiateHandler,
    color: chalk.magenta,
    description: "Instantiates a contract by code ID",
    usage: "wasm instantiate <codeid?> <instantiatemsg?>",
    flags: instantiateFlags,
    inputs: [
      {
        requestMessage: "Input Code ID:",
        validate: (input: string) => {
          try {
            parseInt(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Please input a valid code ID"));
            return false;
          }
        },
      },
      {
        requestMessage: "Input instantiate message:",
        validate: (input: string) => {
          try {
            parseJSONInput(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  upload: {
    handler: uploadHandler,
    color: chalk.blue,
    description: "Upload a contract wasm",
    usage: "wasm upload <wasm file>",
    inputs: [
      {
        requestMessage: "Input Wasm File Path:",
        validate: (input: string) => {
          const filePath = path.join(process.env.PWD ?? "", input);
          const exists = fs.existsSync(filePath);
          if (!exists) {
            console.log();
            console.log(chalk.red(`No file found at path ${filePath}`));
            return false;
          } else {
            return true;
          }
        },
        transform: (input: string) => {
          return path.join(process.env.PWD ?? "", input);
        },
      },
    ],
  },
  migrate: {
    handler: migrateHandler,
    color: chalk.rgb(23, 125, 90),
    description: "Migrate a contract",
    usage: "wasm migrate <contract address> <new code id> <migrate msg>",
    inputs: [
      {
        requestMessage: "Input Contract Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input New Contract Code ID:",
        validate: (input: string) => {
          try {
            if (input.length === 0) return false;
            parseInt(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid Code ID"));
            console.log();
            return false;
          }
        },
        transform: (input: string) => {
          return parseInt(input);
        },
      },
      {
        requestMessage: "Input Migrate message:",
        validate: (input: string) => {
          try {
            parseJSONInput(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid JSON Input"));
            console.log();
            return false;
          }
        },
      },
    ],
  },
};

/**
 * Queries a contract given a query message and address
 * @param input
 */
async function queryHandler(input: string[]) {
  const [contractAddr, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);

  const resp = await queryMessage(contractAddr, parsedMsg);

  console.log(JSON.stringify(resp, null, 2));
}

/**
 * Executes a message on a contract give an address
 * @param input
 * @param flags
 */
async function executeHandler(input: string[], flags: Flags) {
  const [contractAddr, msg] = input;
  const parsedMsg: Msg = parseJSONInput(msg);

  await executeMessage(contractAddr, parsedMsg, flags); //TODO: ADD FEE FLAG
}

/**
 * Uploads a contract given a wasm file. The path provided is relative to where the CLI was started.
 * @param input
 * @param flags
 */
async function uploadHandler(input: string[], flags: Flags) {
  const [wasmFile] = input;

  const wasmBuffer = fs.readFileSync(wasmFile);
  const wasmBinary = new Uint8Array(wasmBuffer);

  await uploadWasm(wasmBinary, flags);
}

/**
 * Instantiates a contract given a code ID and instantiation message
 * @param input
 * @param flags
 */
async function instantiateHandler(input: string[], flags: Flags) {
  const [codeIdInput, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);
  const codeId = parseInt(codeIdInput);

  await instantiateMessage(codeId, parsedMsg, flags);
}

/**
 * Migrates a contract given a contract address, code ID and migrate message
 * @param input
 * @param flags
 */
async function migrateHandler(input: string[], flags: Flags) {
  const [contractAddress, codeIdInput, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);
  const codeId = parseInt(codeIdInput);

  await migrateMessage(contractAddress, codeId, parsedMsg, flags);
}

/**
 * Handler for executing a message. Prints all cost estimates and any flag related data. Prompts the user to confirm the message before sending.
 * Logs a transaction URL upon completion.
 * @param address
 * @param msg
 * @param flags
 * @param successMessage An optional message to print if the message is a success
 */
export async function executeMessage(
  address: string,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { funds, memo, fee, simulate, print } = flags;
  if (print) {
    console.log(chalk.bold("Message:"));
    console.log(JSON.stringify(msg, null, 2));
    console.log();
  }
  const feeEstimate = await simulateExecuteMessage(address, msg, flags);
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

/**
 * Handler for uploading contract binary. Prints all cost estimates and any flag related data. Prompts the user to confirm the message before sending.
 * Logs a transaction URL upon completion.
 * @param binary
 * @param flags
 * @param successMessage An optional message to print if the message is a success
 * @returns
 */
export async function uploadWasm(
  binary: Uint8Array,
  flags: Flags,
  successMessage?: string
) {
  const { fee } = flags;

  // const feeEstimate = await simulateUploadMessage(binary);
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

  const result = await displaySpinnerAsync(
    "Uploading contract binary...",
    async () => await client.upload(binary, fee ?? "auto")
  );
  console.log(successMessage ?? chalk.green("Wasm uploaded!"));
  console.log();
  printTransactionUrl(result.transactionHash);
  console.log(chalk.green(`Code ID: ${result.codeId}`));
}

/**
 * A handler for querying a contract.
 * @param address
 * @param msg
 * @returns The response data
 */
export async function queryMessage<T = any>(
  address: string,
  msg: Record<string, any>
): Promise<T> {
  const resp = await displaySpinnerAsync(
    "Querying contract...",
    async () => await client.queryContract<T>(address, msg)
  );
  return resp;
}

/**
 * A handler for instantiating a contract. Prints all cost estimates and any flag related data. Prompts the user to confirm the message before sending.
 * Logs a transaction URL upon completion.
 * @param codeId
 * @param msg
 * @param flags
 * @param successMessage
 */
export async function instantiateMessage(
  codeId: number,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { label, admin, simulate, print } = flags;
  if (print) {
    console.log(chalk.bold("Message:"));
    console.log(JSON.stringify(msg, null, 2));
    console.log();
  }
  const feeEstimate = await simulateInstantiationMessage(
    codeId,
    msg,
    label ?? "Instantiation"
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

/**
 * A handler for migrating a contract. Prints all cost estimates and any flag related data. Prompts the user to confirm the message before sending.
 * Logs a transaction URL upon completion.
 * @param contractAddress
 * @param codeId
 * @param msg
 * @param flags
 * @param successMessage
 */
export async function migrateMessage(
  contractAddress: string,
  codeId: number,
  msg: Record<string, any>,
  flags: Flags,
  successMessage?: string
) {
  const { memo, simulate } = flags;
  const feeEstimate = await simulateMigrate(contractAddress, codeId, msg);
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
    "Migrating your contract...",
    async () => await client.migrate(contractAddress, codeId, msg, "auto", memo)
  );
  console.log();
  console.log(successMessage ?? chalk.green("Contract migrated!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
  console.log(`Address: ${chalk.bold(contractAddress)}`);
}

/**
 * Prints a fee estimation in human readable format.
 * @param fee
 */
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

/**
 * Simulates an execute message and returns a fee estimate
 * @param address
 * @param msg
 * @param flags
 * @returns A fee estimate for the message
 */
export async function simulateExecuteMessage(
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

/**
 * Simulates an instantiation message and returns a fee estimate
 * @param codeId
 * @param msg
 * @param label
 * @returns A fee estimate for the message
 */
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

/**
 * Simulates an upload message and returns a fee estimate
 * @param binary
 * @returns A fee estimate for the message
 */
export async function simulateUploadMessage(binary: Uint8Array) {
  const feeEstimate = displaySpinnerAsync(
    "Simulating Upload Tx...",
    async () => await client.estimateUploadFee(binary)
  );
  return feeEstimate;
}

/**
 * Simulates a migrate message and returns a fee estimate
 * @param address
 * @param codeId
 * @param msg
 * @returns A fee estimate for the message
 */
export async function simulateMigrate(
  address: string,
  codeId: number,
  msg: Msg
) {
  const feeEstimate = displaySpinnerAsync(
    "Simulating Migrate Tx...",
    async () => await client.estimateMigrateFee(address, codeId, msg)
  );
  return feeEstimate;
}

export default commands;
