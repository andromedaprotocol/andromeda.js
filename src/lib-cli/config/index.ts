import convict from "convict";
import convictFormatWithValidator from "convict-format-with-validator";
import { getConfigByName } from "@andromeda/andromeda-js";
import { addExitHandler, loadStorageFile, writeStorageFile } from "./storage";

convict.addFormats(convictFormatWithValidator);

const config = convict({
  chain: {
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
    registryAddress: {
      default: "",
      doc: "The contract address of the Andromeda Registry",
      format: String,
      env: "REGISTRY_ADDRESS",
      nullable: false,
    },
    name: {
      default: "default",
      doc: "The name of the config",
      format: String,
      env: "CONFIG_NAME",
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
  },
});

export function loadDefaultConfig() {
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
      chain: getConfigByName("default"),
    };
    config.load(defaultConfig);
  }
}

addExitHandler(() => {
  writeStorageFile("config.json", JSON.stringify(config.getProperties()));
});

export * as storage from "./storage";

export default config;
