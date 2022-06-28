import chainCommands from "./chain";
import walletCommands from "./wallet";
import wasmCommands from "./wasm";
import adoCommands from "./ado";
import { generateHandler } from "./utils";

export * as wallet from "./wallet";
export * as wasm from "./wasm";
export * as chain from "./chain";
export { default as reload } from "./reload";
export * as ado from "./ado";
export * from "./utils";

export const walletHandler = generateHandler(walletCommands, "wallets");
export const wasmHandler = generateHandler(wasmCommands, "wasm");
export const chainHandler = generateHandler(chainCommands, "chain");
export const adoHandler = generateHandler(adoCommands, "ado");
