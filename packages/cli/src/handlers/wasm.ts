import { convertMicroToMacro, getUnitsConfigFromDenom, Msg, formatAmountToInternational } from "@andromedaprotocol/andromeda.js";
import { Coin, parseCoins } from "@cosmjs/proto-signing";
import { promptWithExit } from "../cmd";
import fs from "fs";
import path from "path";
import pc from "picocolors";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
  logTableConfig,
  printTransactionUrl,
} from "../common";
import State from "../state";
import { Commands, Flags } from "../types";
import { parseJSONInput, validateAddressInput } from "./utils";
import Table from "cli-table";
import { StdFee } from "@cosmjs/amino";

export const commands: Commands = {
  'info': {
    handler: infoHandler,
    color: pc.green,
    description: "Queries a contract info",
    usage: "wasm info <contract address>",
    inputs: [
      {
        requestMessage: "Input Contract Address:",
        validate: validateAddressInput,
      }
    ],
  },
  query: {
    handler: queryHandler,
    color: pc.green,
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
            console.log(pc.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  'query-raw': {
    handler: queryRawHandler,
    color: pc.green,
    description: "Queries a contract key",
    usage: "wasm query-raw <contract address> <key>",
    inputs: [
      {
        requestMessage: "Input Contract Address:",
        validate: validateAddressInput,
      },
    ],
    flags: {
      limit: {
        description: "Limit number of results",
        usage: "--limit 10",
      },
      offset: {
        description: "Offset number of results (This might not be supported by all chains)",
        usage: "--offset 0",
      },
      ['next-key']: {
        description: "Next key to paginate from",
        usage: "--next-key <key>",
      },
      ['next-key-bytes']: {
        description: "Next key to paginate from (bytes)",
        usage: "--next-key-bytes <key>",
      }
    }
  },
  execute: {
    handler: executeHandler,
    color: pc.yellow,
    description: "Executes a wasm message",
    usage: "wasm execute <contract address> <message>",
    flags: executeFlags,
    disabled: () => typeof State.wallets.currentWallet === "undefined",
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
            console.log(pc.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  instantiate: {
    handler: instantiateHandler,
    color: pc.magenta,
    description: "Instantiates a contract by code ID",
    usage: "wasm instantiate <codeid> <instantiatemsg>",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
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
            console.log(pc.red("Please input a valid code ID"));
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
            console.log(pc.red("Invalid JSON Input"));
            return false;
          }
        },
      },
    ],
  },
  upload: {
    handler: uploadHandler,
    color: pc.blue,
    description: "Upload a contract wasm",
    usage: "wasm upload <wasm file>",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
    inputs: [
      {
        requestMessage: "Input Wasm File Path:",
        validate: (input: string) => {
          const filePath = path.join(process.env.PWD ?? "", input);
          const exists = fs.existsSync(filePath);
          if (!exists) {
            console.log();
            console.log(pc.red(`No file found at path ${filePath}`));
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
    color: pc.cyan,
    description: "Migrate a contract",
    usage: "wasm migrate <contract address> <new code id> <migrate msg>",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
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
            console.log(pc.red("Invalid Code ID"));
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
            console.log(pc.red("Invalid JSON Input"));
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
async function infoHandler(input: string[]) {
  const [contractAddr] = input;
  const resp = await displaySpinnerAsync(
    "Querying contract info...",
    async () => await State.client.chainClient!.queryClient!.getContract(contractAddr)
  );

  console.log();
  const infoTable = new Table(logTableConfig);
  infoTable.push([pc.bold(pc.green("Creator: ")), resp.creator]);
  infoTable.push([pc.bold(pc.green("Admin: ")), resp.admin ?? "None"]);
  infoTable.push([pc.bold(pc.green("Code ID: ")), resp.codeId.toString()]);
  infoTable.push([pc.bold(pc.green("Label: ")), resp.label]);
  infoTable.push([pc.bold(pc.green("IBC Port ID: ")), resp.ibcPortId ?? "None"]);
  console.log(infoTable.toString());
  console.log();

}

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
 * Queries a contract given a query message and address
 * @param input
 */
async function queryRawHandler(input: string[], flags: Flags) {
  const [contractAddr] = input;
  const limit = BigInt(flags.limit ?? '10');
  const offset = BigInt(flags.offset ?? '0');
  const nextKey = flags['next-key'] as string | undefined;
  const nextKeyBytes = flags['next-key-bytes'] as string | undefined;

  if (nextKeyBytes && nextKey) {
    throw new Error("Cannot provide both next-key and next-key-bytes");
  }

  const key = nextKeyBytes ? Uint8Array.from(Buffer.from(nextKeyBytes, 'hex')) : nextKey ? Uint8Array.from(Buffer.from(nextKey, 'utf8')) : undefined;

  const states = await displaySpinnerAsync(
    "Querying contrac key...",
    async () => await State.client.queryContractRawAll(contractAddr, { limit, offset, key })
  );
  console.log();


  for (const state of states.states) {
    console.log(pc.blue(state.key));
    console.log(state.value);
    console.log();
  }
  console.log();
  console.log(pc.gray(`Limit - ${limit}, Offset - ${offset}, key - ${key ? Buffer.from(key).toString('utf8') : 'None'}`))
  if (states.pagination) {
    console.log(pc.gray(`Next Key - ${Buffer.from(states.pagination.nextKey).toString('utf8')}`));
    console.log(pc.gray(`Next Key Bytes - ${Buffer.from(states.pagination.nextKey).toString('hex')}`));
    console.log(pc.gray(`Total - ${states.pagination.total.toString()}`));
  }
  console.log()


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
 * Prompts a user to attach funds to their current message
 * @returns {Coin[]}
 */
async function promptForFunds() {
  const confirmationPrompt = await promptWithExit({
    type: "confirm",
    message: "Would you like to add funds to this message?",
    name: "confirm",
  });
  if (confirmationPrompt?.confirm) {
    const fundsPrompt = await promptWithExit({
      type: "input",
      message: "Input funds to attach to this message:",
      name: "funds",
      validate: (input: string) => {
        try {
          parseCoins(input);

          return true;
        } catch (error) {
          return "Invalid coin input";
        }
      },
    });
    return parseCoins(fundsPrompt.funds);
  }

  return [];
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
    console.log(pc.bold("Message:"));
    console.log(JSON.stringify(msg, null, 2));
    console.log();
  }
  const msgFunds =
    funds && funds.length > 0 ? parseCoins(funds) : await promptForFunds();
  const feeEstimate = await simulateExecuteMessage(
    address,
    msg,
    memo,
    msgFunds
  );
  console.log("Transaction simulated!");
  console.log();
  logFeeEstimation(feeEstimate);
  if (simulate) {
    return;
  }
  const confirmation = await promptWithExit({
    type: "confirm",
    message: `Do you want to proceed?`,
    name: "confirmtx",
  });
  if (!confirmation.confirmtx) {
    console.log(pc.red("Transaction cancelled"));
    return;
  }
  const resp = await displaySpinnerAsync(
    "Executing Tx...",
    async () => await State.client.execute(address, msg, fee, memo, msgFunds)
  );
  console.log();
  console.log(pc.green(successMessage ?? "Transaction executed!"));
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
  // console.log(successMessage ?? pc.green("Transaction simulated!"));
  // console.log();
  // logFeeEstimation(feeEstimate);
  // if (simulate) {
  //   return;
  // }
  // const confirmation = await promptWithExit({
  //   type: "confirm",
  //   message: `Do you want to proceed?`,
  //   name: "confirmtx",
  // });
  // if (!confirmation.confirmtx) {
  //   console.log(pc.red("Transaction cancelled"));
  //   return;
  // }

  const result = await displaySpinnerAsync(
    "Uploading contract binary...",
    async () => await State.client.upload(binary, fee)
  );
  console.log(successMessage ?? pc.green("Wasm uploaded!"));
  console.log();
  printTransactionUrl(result.transactionHash);
  console.log(pc.green(`Code ID: ${result.codeId}`));
}

/**
 * A handler for querying a contract.
 * @param address
 * @param msg
 * @returns The response data
 */
export async function queryMessage<T = any>(
  address: string,
  msg: Record<string, any>,
  loadingMessage = "Querying contract..."
): Promise<T> {
  const resp = await displaySpinnerAsync(
    loadingMessage,
    async () => await State.client.queryContract<T>(address, msg)
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
    console.log(pc.bold("Message:"));
    console.log(JSON.stringify(msg, null, 2));
    console.log();
  }
  const feeEstimate = await simulateInstantiationMessage(
    codeId,
    msg,
    label ?? "Instantiation"
  );
  console.log(successMessage ?? pc.green("Transaction simulated!"));
  console.log();
  logFeeEstimation(feeEstimate);
  if (simulate) {
    return;
  }
  const confirmation = await promptWithExit({
    type: "confirm",
    message: `Do you want to proceed?`,
    name: "confirmtx",
  });
  if (!confirmation.confirmtx) {
    console.log(pc.red("Transaction cancelled"));
    return;
  }

  const resp = await displaySpinnerAsync(
    "Instantiating your contract...",
    async () =>
      await State.client.instantiate(
        codeId,
        msg,
        label ?? "Instantiation",
        flags.fee,
        admin ? { admin } : undefined
      )
  );
  console.log();
  console.log(successMessage ?? pc.green("Contract instantiated!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
  console.log(`Address: ${pc.bold(resp.contractAddress)}`);
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
  console.log(successMessage ?? pc.green("Transaction simulated!"));
  console.log();
  logFeeEstimation(feeEstimate);

  if (simulate) {
    return;
  }

  const confirmation = await promptWithExit({
    type: "confirm",
    message: `Do you want to proceed?`,
    name: "confirmtx",
  });
  if (!confirmation.confirmtx) {
    console.log(pc.red("Transaction cancelled"));
    return;
  }

  const resp = await displaySpinnerAsync(
    "Migrating your contract...",
    async () =>
      await State.client.migrate(contractAddress, codeId, msg, flags.fee, memo)
  );
  console.log();
  console.log(successMessage ?? pc.green("Contract migrated!"));
  console.log();
  printTransactionUrl(resp.transactionHash);
  console.log(`Address: ${pc.bold(contractAddress)}`);
}

/**
 * Prints a fee estimation in human readable format.
 * @param fee
 */
function logFeeEstimation(fee: StdFee) {
  console.log(pc.bold("Cost Estimates"));
  console.log(`Gas Used: ${fee.gas}`);
  console.log("Fee estimates:");
  for (let i = 0; i < fee.amount.length; i++) {
    const feeCoin = fee.amount[i];
    const denomUnits = getUnitsConfigFromDenom(feeCoin.denom);
    const macroAmount = convertMicroToMacro(feeCoin.amount, denomUnits.units);
    console.log(`   ${pc.green(`${formatAmountToInternational(macroAmount)} ${denomUnits.macroDenom}`)}`);
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
  memo: string = "",
  msgFunds: Coin[] = []
) {
  const feeEstimate = displaySpinnerAsync(
    "Simulating Tx...",
    async () =>
      await State.client.estimateExecuteFee(address, msg, msgFunds, undefined, memo)
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
    async () => await State.client.estimateInstantiationFee(codeId, msg, label)
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
    async () => await State.client.estimateUploadFee(binary)
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
    async () => await State.client.estimateMigrateFee(address, codeId, msg)
  );
  return feeEstimate;
}

export default commands;
