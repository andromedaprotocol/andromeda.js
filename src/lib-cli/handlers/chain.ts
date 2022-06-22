import {
  ChainConfig,
  configs,
  default as AndromedaClient,
  getConfigByName,
} from "@andromeda/andromeda-js";
import chalk from "chalk";
import Table from "cli-table";
import { logTableConfig } from "../common";
import config from "../config";
import { Commands } from "../types";

type ConfigKey = keyof ChainConfig;

export const client = new AndromedaClient();

const commands: Commands = {
  config: {
    handler: configPrintHandler,
    color: chalk.white,
    description: "Displays current chain config",
    usage: "chain config",
  },
  list: {
    handler: listConfigsHandler,
    color: chalk.blue,
    description: "Lists all the currently saved configs",
    usage: "chain list",
  },
  use: {
    handler: useConfigHandler,
    color: chalk.yellow,
    description: "Swap to a saved config",
    usage: "chain use <config name>",
  },
  get: {
    handler: configGetHandler,
    color: chalk.green,
    description: "Displays current value for a given key",
    usage: "chain get <key>",
  },
  set: {
    handler: configSetHandler,
    color: chalk.black,
    description: "Displays current config",
    usage: "chain set <key> <value>",
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
      throw new Error(
        `Invalid config key, try ${chalk.white(
          "config list"
        )} to see a list of valid keys`
      );
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
  if (!config.has(`chain.${trimmedKey}` as any)) {
    throw new Error(
      `Invalid config key, try ${chalk.white(
        "config list"
      )} to see a list of valid keys`
    );
  }

  config.set(trimmedKey, trimmedValue);
}

async function listConfigsHandler() {
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

async function useConfigHandler(input: string[]) {
  if (input.length === 0) {
    throw new Error("Invalid input");
  }
  const [name] = input;
  const chainConfig = getConfigByName(name);

  if (!chainConfig) {
    throw new Error(`No chain config with the name ${name}`);
  }

  config.set("chain", chainConfig);
  console.log(chalk.green(`Config loaded!`));
}

async function configGetHandler(input: string[]) {
  if (input.length === 0) {
    throw new Error(`Invalid input, usage:

    ${chalk.green("config get <key>")}`);
  } else {
    await printConfig(config.get("chain"), input[0] as ConfigKey);
  }
}

async function configSetHandler(input: string[]) {
  if (input.length !== 2) {
    throw new Error(`Invalid input, usage:

    ${chalk.green("config set <key> <value>")}`);
  } else {
    const [key, value] = input;
    await setKey(key, value);
  }
}

async function configPrintHandler() {
  await printConfig(config.get("chain"));
}

export default commands;
