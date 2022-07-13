import { Msg } from "andr-js/AndromedaClient";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { executeFlags, instantiateFlags, validateOrRequest } from "../common";
import { Commands, Flags } from "../types";
import {
  executeMessage,
  instantiateMessage,
  queryMessage,
  uploadWasm,
} from "./chain";
import { parseJSONInput } from "./utils";

export const commands: Commands = {
  query: {
    handler: queryHandler,
    color: chalk.green,
    description: "Queries a contract",
    usage: "wasm query <contract address> <query object>",
  },
  execute: {
    handler: executeHandler,
    color: chalk.yellow,
    description: "Executes a wasm message",
    usage: "wasm execute <contract address> <message>",
    flags: executeFlags,
  },
  instantiate: {
    handler: instantiateHandler,
    color: chalk.magenta,
    description: "Instantiates a contract by code ID",
    usage: "wasm instantiate <codeid?> <instantiatemsg?>",
    flags: instantiateFlags,
  },
  upload: {
    handler: uploadHandler,
    color: chalk.blue,
    description: "Upload a contract wasm",
    usage: "wasm upload <wasm file> <memo?>",
  },
};

async function queryHandler(input: string[]) {
  const [contractAddr, msg] = input;
  if (!contractAddr) {
    throw new Error("Invalid contract address");
  } else if (!msg) {
    throw new Error("Invalid query message");
  }

  const parsedMsg = JSON.parse(msg);

  await queryMessage(contractAddr, parsedMsg);
}

async function executeHandler(input: string[], flags: Flags) {
  const [contractAddr, msg] = input;
  if (!contractAddr) {
    throw new Error("Invalid contract address");
  } else if (!msg) {
    throw new Error("Invalid query message");
  }
  let parsedMsg;
  try {
    parsedMsg = parseJSONInput(msg);
  } catch (error) {
    throw new Error("Invalid message JSON");
  }

  await executeMessage(contractAddr, parsedMsg, flags); //TODO: ADD FEE FLAG
}

async function uploadHandler(input: string[], flags: Flags) {
  const [wasmFile] = input;
  const filePath = path.join(process.env.PWD ?? "", wasmFile);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Could not find wasm file ${filePath}`);
  }

  const wasmBuffer = fs.readFileSync(filePath);
  const wasmBinary = new Uint8Array(wasmBuffer);

  await uploadWasm(wasmBinary, flags);
}

async function instantiateHandler(input: string[], flags: Flags) {
  let [codeIdInput, instantiateMsg] = input;
  codeIdInput = await validateOrRequest(
    "Input the contract Code ID:",
    codeIdInput
  );
  instantiateMsg = await validateOrRequest(
    "Input the contract instantiate message:",
    instantiateMsg
  );
  let codeId = -1;
  try {
    codeId = parseInt(codeIdInput);
    if (codeId <= 0) throw new Error("Invalid code ID");
  } catch (error) {
    throw new Error("Invalid code ID");
  }

  let parsedMsg: Msg;
  try {
    parsedMsg = parseJSONInput(instantiateMsg);
  } catch (error) {
    throw new Error("Invalid message JSON");
  }

  await instantiateMessage(codeId, parsedMsg, flags);
}

export default commands;
