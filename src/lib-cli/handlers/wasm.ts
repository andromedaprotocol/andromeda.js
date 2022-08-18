import type { Msg } from "@andromeda/andromeda-js";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { cleanTx } from "../../andr-js/hubble";
import { executeFlags, instantiateFlags } from "../common";
import { Commands, Flags } from "../types";
import {
  executeMessage,
  instantiateMessage,
  queryMessage,
  uploadWasm,
} from "./chain";
import client from "./client";
import { parseJSONInput } from "./utils";

export const commands: Commands = {
  query: {
    handler: queryHandler,
    color: chalk.green,
    description: "Queries a contract",
    usage: "wasm query <contract address> <query object>",
    inputs: [
      {
        requestMessage: "Input Contract Address:",
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
  tx: {
    handler: txInfoHandler,
    color: chalk.blue,
    description: "Gets transaction info from provided hash",
    usage: "wasm tx <hash>",
    inputs: [
      {
        requestMessage: "Input Transaction Hash:",
      },
    ],
  },
};

async function queryHandler(input: string[]) {
  const [contractAddr, msg] = input;

  const parsedMsg: Msg = parseJSONInput(msg);

  await queryMessage(contractAddr, parsedMsg);
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

async function txInfoHandler(input: string[]) {
  const [hash] = input;

  const txInfo = await client.getTx(hash);
  if (!txInfo) {
    console.log(chalk.red("Transaction info not found"));
    return;
  }
  console.log("Transaction Info:");
  console.log(JSON.stringify(cleanTx(txInfo), null, 2));
}

export default commands;
