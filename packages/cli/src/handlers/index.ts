import chainCommands from "./chain";
import walletCommands from "./wallet";
import wasmCommands from "./wasm";
import adoCommands from "./ado";
import gqlCommands from "./gql";
import bankCommands from "./bank";
import txCommands from "./tx";
import userCommands from "./user";
import { generateHandler } from "./utils";

export * as wallets from "./wallet";
export * as wasm from "./wasm";
export * as chain from "./chain";
export * as ado from "./ado";
export * as gql from "./gql";
export * as bank from "./bank";
export * as tx from "./tx";
export * as vfs from "./user";
export * from "./utils";

export const walletHandler = generateHandler(walletCommands, "wallet");
export const wasmHandler = generateHandler(wasmCommands, "wasm");
export const chainHandler = generateHandler(chainCommands, "chain");
export const adoHandler = generateHandler(adoCommands, "ado");
export const bankHandler = generateHandler(bankCommands, "bank");
export const gqlHandler = generateHandler(gqlCommands, "gql");
export const txHandler = generateHandler(txCommands, "tx");
export const userHandler = generateHandler(userCommands, "user");

export const allCommands = [
  ...Object.keys(chainCommands).map((cmd) => `chain ${cmd}`),
  ...Object.keys(walletCommands).map((cmd) => `wallet ${cmd}`),
  ...Object.keys(wasmCommands).map((cmd) => `wasm ${cmd}`),
  ...Object.keys(txCommands).map((cmd) => `tx ${cmd}`),
  ...Object.keys(adoCommands).map((cmd) => `ado ${cmd}`),
  ...Object.keys(gqlCommands).map((cmd) => `gql ${cmd}`),
  ...Object.keys(bankCommands).map((cmd) => `bank ${cmd}`),
  ...Object.keys(userCommands).map((cmd) => `user ${cmd}`),
];
