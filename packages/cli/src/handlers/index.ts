import chainCommands from "./chain";
import walletCommands from "./wallets";
import wasmCommands from "./wasm";
import adoCommands from "./ado";
import gqlCommands from "./gql";
import bankCommands from "./bank";
import txCommands from "./tx";
import { generateHandler } from "./utils";

export * as wallets from "./wallets";
export * as wasm from "./wasm";
export * as chain from "./chain";
export * as ado from "./ado";
export * as gql from "./gql";
export * as bank from "./bank";
export * as tx from "./tx";
export * from "./utils";

export const walletHandler = generateHandler(walletCommands, "wallets");
export const wasmHandler = generateHandler(wasmCommands, "wasm");
export const chainHandler = generateHandler(chainCommands, "chain");
export const adoHandler = generateHandler(adoCommands, "ado");
export const bankHandler = generateHandler(bankCommands, "bank");
export const gqlHandler = generateHandler(gqlCommands, "gql");
export const txHandler = generateHandler(txCommands, "tx");

export const allCommands = [
  ...Object.keys(chainCommands).map((cmd) => `chain ${cmd}`),
  ...Object.keys(walletCommands).map((cmd) => `wallets ${cmd}`),
  ...Object.keys(wasmCommands).map((cmd) => `wasm ${cmd}`),
  ...Object.keys(txCommands).map((cmd) => `tx ${cmd}`),
  ...Object.keys(adoCommands).map((cmd) => `ado ${cmd}`),
  ...Object.keys(gqlCommands).map((cmd) => `gql ${cmd}`),
  ...Object.keys(bankCommands).map((cmd) => `bank ${cmd}`),
];
