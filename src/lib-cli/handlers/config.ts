import chalk from "chalk";
import Table from "cli-table";
import config from "../../config";
import { handle } from "../cmd";
import { logTableConfig } from "../common";
import { Commands } from "../types";

const schema = config.getProperties();

type ConfigKey = keyof typeof schema;

export const commands: Commands = {
  list: {
    handler: async () => {
      await listConfig();
    },
    color: chalk.white,
    description: "Displays current config",
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
        await listConfig(inputs[0] as ConfigKey);
      }
    },
    color: chalk.white,
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
    color: chalk.white,
    description: "Displays current config",
  },
};

function getConfigDoc(key: ConfigKey): string {
  const schema = JSON.parse(config.getSchemaString());
  const properties = schema["_cvtProperties"];

  return properties[key].doc;
}

async function listConfig(keyToPrint?: ConfigKey) {
  const configTable = new Table(logTableConfig);
  configTable.push([
    chalk.bold("Key"),
    chalk.bold("Value"),
    chalk.bold("Description"),
  ]);
  const trimmedKey = keyToPrint?.trim() as ConfigKey;
  let keys = Object.keys(config.getProperties()) as ConfigKey[];
  if (trimmedKey && trimmedKey.length > 0) {
    if (!config.has(trimmedKey)) {
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
    const val = config.get(key);
    configTable.push([
      key,
      val && val.length > 0 ? val : "<unset>",
      getConfigDoc(key),
    ]);
  });

  console.log(chalk.green("Current config"));
  console.log();
  console.log(configTable.toString());
}

async function setKey(key: string, value: string) {
  const trimmedKey: ConfigKey = key.trim() as ConfigKey;
  const trimmedValue = value.trim();
  console.log(trimmedKey);
  if (!config.has(trimmedKey)) {
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

async function configHandler(input: string) {
  return handle(input, commands);
}

export default configHandler;
