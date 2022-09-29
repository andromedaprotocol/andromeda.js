import { Msg } from "@andromeda/andromeda-js";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { executeFlags, instantiateFlags } from "../common";
import { Commands, Flags } from "../types";
import {
  executeMessage,
  instantiateMessage,
  migrateMessage,
  queryMessage,
  uploadWasm,
} from "./chain";
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

async function queryHandler(input: string[]) {
  const [contractAddr, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);

  const resp = await queryMessage(contractAddr, parsedMsg);

  console.log(JSON.stringify(resp, null, 2));
}

async function executeHandler(input: string[], flags: Flags) {
  const [contractAddr, msg] = input;
  const parsedMsg: Msg = parseJSONInput(msg);

  await executeMessage(contractAddr, parsedMsg, flags); //TODO: ADD FEE FLAG
}

async function uploadHandler(input: string[], flags: Flags) {
  const [wasmFile] = input;

  const wasmBuffer = fs.readFileSync(wasmFile);
  const wasmBinary = new Uint8Array(wasmBuffer);

  await uploadWasm(wasmBinary, flags);
}

async function instantiateHandler(input: string[], flags: Flags) {
  const [codeIdInput, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);
  const codeId = parseInt(codeIdInput);

  await instantiateMessage(codeId, parsedMsg, flags);
}

async function migrateHandler(input: string[], flags: Flags) {
  const [contractAddress, codeIdInput, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);
  const codeId = parseInt(codeIdInput);

  await migrateMessage(contractAddress, codeId, parsedMsg, flags);
}

export default commands;
