import chalk from "chalk";
import Table from "cli-table";
import config from "../config";
import { handle } from "../cmd";
import { logTableConfig } from "../common";
import { Commands } from "../types";
import {
  ChainConfig,
  configs,
  getConfigByName,
  default as AndromedaClient,
} from "@andromeda/andromeda-js";

type ConfigKey = keyof ChainConfig;

export const client = new AndromedaClient();

export const commands: Commands = {
  config: {
    handler: async () => {
      await printConfig(config.get("chain"));
    },
    color: chalk.white,
    description: "Displays current chain config",
  },
  list: {
    handler: listConfigs,
    color: chalk.blue,
    description: "Lists all the currently saved configs",
  },
  use: {
    handler: useConfig,
    color: chalk.yellow,
    description: "Swap to a saved config",
  },
  get: {
    handler: async (input: string) => {
      const inputs = input.split(" ").filter((str) => str.length > 0);
      if (inputs.length === 0) {
        console.error(chalk.red("Invalid input, please provide a key:"));
        console.log();
        console.log(chalk.green("config get <key>"));
        return;
      } else {
        await printConfig(config.get("chain"), inputs[0] as ConfigKey);
      }
    },
    color: chalk.green,
    description: "Displays current value for a given key",
  },
  set: {
    handler: async (input: string) => {
      const inputs = input.split(" ").filter((str) => str.length > 0);
      if (inputs.length !== 2) {
        console.error(chalk.red("Invalid input, example usage:"));
        console.log("");
        console.log(chalk.green("config set <key> <value>"));
      } else {
        await setKey(inputs[0] as ConfigKey, inputs[1]);
      }
    },
    color: chalk.black,
    description: "Displays current config",
  },
};

function getConfigDoc(key: ConfigKey): string {
  const schema = JSON.parse(config.getSchemaString());
  const properties = schema["_cvtProperties"]["chain"]["_cvtProperties"];
  if (!properties[key]) return "";

  return properties[key].doc;
}

async function printConfig(config: ChainConfig, keyToPrint?: ConfigKey) {
  const configTable = new Table(logTableConfig);
  configTable.push([
    chalk.bold("Key"),
    chalk.bold("Value"),
    chalk.bold("Description"),
  ]);
  const trimmedKey = keyToPrint?.trim() as ConfigKey;
  let keys = Object.keys(config) as ConfigKey[];
  if (trimmedKey && trimmedKey.length > 0) {
    if (!keys.includes(trimmedKey)) {
      console.error(
        chalk.red(
          `Invalid config key, try ${chalk.white(
            "config list"
          )} to see a list of valid keys`
        )
      );
      return;
    }
    keys = [trimmedKey];
  }

  keys.forEach((key: ConfigKey) => {
    if ((key as any) === "nullable") return;
    const val = config[key];
    configTable.push([
      key,
      val && val.length > 0 ? val : "<unset>",
      getConfigDoc(key),
    ]);
  });

  console.log(chalk.green("Current chain config"));
  console.log();
  console.log(configTable.toString());
}

async function setKey(key: string, value: string) {
  const trimmedKey: ConfigKey = key.trim() as ConfigKey;
  const trimmedValue = value.trim();
  if (!config.has(`chain.${trimmedKey}`)) {
    console.error(
      chalk.red(
        `Invalid config key, try ${chalk.white(
          "config list"
        )} to see a list of valid keys`
      )
    );
    return;
  }

  config.set(trimmedKey, trimmedValue);
}

async function listConfigs() {
  const configTable = new Table(logTableConfig);
  configTable.push([chalk.bold("Name"), chalk.bold("Chain ID")]);
  configs.forEach((chainConfig) =>
    config.get("chain.name") === chainConfig.name
      ? configTable.push([
          chalk.green(chainConfig.name),
          chalk.green(chainConfig.chainId),
        ])
      : configTable.push([chainConfig.name, chainConfig.chainId])
  );

  console.log(configTable.toString());
}

async function useConfig(input: string) {
  const trimmedInput = input.trim();
  if (trimmedInput.length === 0) {
    console.error(chalk.red("Invalid input"));
    return;
  }

  const chainConfig = getConfigByName(input);

  if (!chainConfig) {
    console.error(chalk.red(`No chain config with the name ${trimmedInput}`));
    return;
  }

  config.set("chain", chainConfig);
  console.log(chalk.green(`Config loaded!`));
}

async function configHandler(input: string) {
  return handle(input, commands);
}

export default configHandler;
