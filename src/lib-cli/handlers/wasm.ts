import chalk from "chalk";
import fs from "fs";
import { executeFlags } from "../common";
import path from "path";
import { parseJSONInput } from "./utils";
import { Commands, Flags } from "../types";
import { executeMessage, queryMessage, uploadWasm } from "./chain";

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
    usage: "wasm execute <contract address> <message> <memo> <funds>",
    flags: executeFlags,
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

export default commands;
