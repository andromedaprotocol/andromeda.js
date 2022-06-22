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
  },
});

function loadDefaultConfig() {
  const savedConfig = loadStorageFile("config.json");
  if (savedConfig) {
    try {
      const parsedSavedConfig = JSON.parse(savedConfig.toString());
      config.load(parsedSavedConfig);
    } catch (error) {
      throw new Error("Invalid config file");
    }
  } else {
    const defaultConfig = {
      chain: getConfigByName("default"),
    };
    config.load(defaultConfig);
  }
}

loadDefaultConfig();

addExitHandler(() => {
  writeStorageFile("config.json", JSON.stringify(config.getProperties()));
});

export * as storage from "./storage";

export default config;
