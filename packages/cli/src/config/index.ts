import { queryChainConfig } from "@andromedaprotocol/andromeda.js";
import convict from "convict";
import convictFormatWithValidator from "convict-format-with-validator";
import { addExitHandler, loadStorageFile, writeStorageFile } from "./storage";

convict.addFormats(convictFormatWithValidator);

/**
 * Config used by the CLI
 * Uses convict
 */
const config = convict({
  chain: {
    name: {
      default: "",
      doc: "The name of the chain config used",
      format: String,
      env: "CHAIN_CONFIG_NAME",
      nullable: false,
    },
    chainName: {
      default: "",
      doc: "The name of the chain",
      format: String,
      nullable: false,
    },
    chainId: {
      default: "",
      doc: "The ID of the chain to use",
      format: String,
      env: "CHAIN_ID",
      nullable: false,
    },
    chainUrl: {
      default: "",
      doc: "The URL of the chain to use",
      format: "url",
      env: "CHAIN_URL",
      nullable: false,
    },
    kernelAddress: {
      default: "",
      doc: "The contract address of the Andromeda Kernel",
      format: String,
      env: "REGISTRY_ADDRESS",
      nullable: false,
    },
    addressPrefix: {
      default: "",
      doc: "The prefix for all addresses on chain",
      format: String,
      nullable: false,
    },
    defaultFee: {
      default: "0.025ujunox",
      format: String,
      doc: "The default fee amount",
      nullable: false,
    },
    blockExplorerTxPages: {
      format: Array<string>,
      nullable: false,
      doc: "URLs to block explorers for the given chain. Must include '${txHash}'",
      validate: (val: string[]) => {
        if (!Array.isArray(val))
          throw new Error("Explorer Tx pages must be an array");

        if (val.some((page) => typeof page !== "string"))
          throw new Error("Not all page URLs are a string");
        if (!val.some((page) => page.includes("${txHash}")))
          throw new Error("Tx page URLs must include '${txHash}'");
      },
      default: [""],
    },
    blockExplorerAddressPages: {
      format: Array<string>,
      nullable: false,
      doc: "URLs to block explorers for the given chain. Must include '${txHash}'",
      validate: (val: string[]) => {
        if (!Array.isArray(val))
          throw new Error("Explorer Address pages must be an array");

        if (val.some((page) => typeof page !== "string"))
          throw new Error("Not all page URLs are a string");
        if (!val.some((page) => page.includes("${address}")))
          throw new Error("Address page URLs must include '${address}'");
      },
      default: [""],
    },
    chainType: {
      default: "mainnet",
      format: ["mainnet", "testnet"],
      doc: "The chain type",
      nullable: false,
    },
  },
});

/**
 * Loads the config used by the CLI on startup
 */
export async function loadDefaultConfig() {
  try {
    const savedConfig = loadStorageFile("config.json");
    try {
      const parsedSavedConfig = JSON.parse(savedConfig.toString());
      config.load(parsedSavedConfig);
    } catch (error) {
      throw new Error("Invalid config file");
    }
  } catch (error) {
    console.error(error);
    const defaultConfig = {
      chain: await queryChainConfig("uni-5"),
    };
    config.load(defaultConfig);
  }
}

/**
 * Saves the current config when the CLI is exited
 */
addExitHandler(() => {
  writeStorageFile("config.json", JSON.stringify(config.getProperties()));
});

export * as storage from "./storage";

export default config;
