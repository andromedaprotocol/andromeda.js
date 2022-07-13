import chainCommands from "./chain";
import walletCommands from "./wallets";
import wasmCommands from "./wasm";
import adoCommands from "./ado";
import hubbleCommands from "./hubble";
import { generateHandler } from "./utils";

export * as wallets from "./wallets";
export * as wasm from "./wasm";
export * as chain from "./chain";
export { default as reload } from "./reload";
export * as ado from "./ado";
export * as hubble from "./hubble";
export * from "./utils";

export const walletHandler = generateHandler(walletCommands, "wallets");
export const wasmHandler = generateHandler(wasmCommands, "wasm");
export const chainHandler = generateHandler(chainCommands, "chain");
export const adoHandler = generateHandler(adoCommands, "ado");
export const hubbleHandler = generateHandler(hubbleCommands, "hubble");
