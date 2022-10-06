import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Table from "cli-table";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { logTableConfig, sleep } from "./common";
import config from "./config";
import { getCurrentWallet } from "./handlers/wallets";
import client from "./handlers/client";
import { Command, Commands } from "./types";
import {
  adoHandler,
  chainHandler,
  gqlHandler,
  walletHandler,
  wasmHandler,
  bankHandler,
  txHandler,
  allCommands,
} from "./handlers";

/**
 * Valid inputs to exit a prompt
 */
export const exitInputs = [".exit", ".quit", ".e", ".q", "exit"];

/**
 * Top level commands
 */
export const baseCommands: Commands = {
  exit: {
    handler: () => process.exit(0),
    description: "Exits the CLI",
    color: chalk.red,
    usage: "exit",
  },
  help: {
    handler: async () => {
      return await listCommands(baseCommands);
    },
    description: "Lists all valid commands",
    color: chalk.green,
    usage: "help",
  },
  clear: {
    handler: async () => {
      console.clear();
      await title();
    },
    description: "Clears the terminal",
    color: chalk.white,
    usage: "clear",
  },
  wallets: {
    handler: walletHandler,
    description: "Manage wallets",
    color: chalk.rgb(1, 2, 254),
    usage: "wallets <cmd>",
  },
  chain: {
    handler: chainHandler,
    description: "Manage Chain Config",
    color: chalk.yellow,
    usage: "chain <cmd>",
  },
  wasm: {
    handler: wasmHandler,
    description: "Send CosmWasm messages to the chain",
    color: chalk.rgb(0, 233, 233),
    usage: "wasm <cmd>",
    disabled: () => !client.isConnected,
  },
  tx: {
    handler: txHandler,
    description: "Query transactions",
    color: chalk.blueBright,
    usage: "tx <cmd>",
    disabled: () => !client.isConnected,
  },
  ado: {
    handler: adoHandler,
    description: "Query and execute on an ADO",
    color: chalk.rgb(23, 125, 90),
    usage: "ado <cmd>",
    disabled: () => !client.isConnected,
  },
  bank: {
    handler: bankHandler,
    description: "Send tokens or query balances",
    color: chalk.greenBright,
    usage: "bank <cmd>",
    disabled: () => !client.isConnected,
  },
  gql: {
    handler: gqlHandler,
    description: "Query using the Andromeda GraphQL service",
    color: chalk.magenta,
    usage: "gql <cmd>",
    disabled: () => !client.isConnected,
  },
};

/**
 * Prints the Andromeda CLI title
 */
export async function title() {
  console.clear();
  const msg = "Andromeda CLI";

  figlet(msg, (_err: any, data: any) => {
    console.log(gradient("blue", "purple", "red", "orange").multiline(data));
  });
  await sleep(20);
}

export async function subTitle() {
  const rainbowTitle = chalkAnimation.karaoke(
    "Andromeda Command Line Interface"
  );

  await sleep(20);
  rainbowTitle.stop();
}

/**
 * Prompt the user for input
 * @param defaultValue
 * @returns The user's input
 */
export async function ask(defaultValue: string = "") {
  const chainId = config.get("chain.chainId");
  const wallet = getCurrentWallet();
  const question: any = {
    name: "command",
    type: "command",
    message: `$${wallet ? `${wallet.name}@` : ""}${
      chainId
        ? `${chainId}${client.isConnected ? "" : chalk.red(":DISCONNECTED")}`
        : chalk.red("<DISCONNECTED>")
    }>`,
    default: defaultValue,
    context: 10,
    short: true,
    autoCompletion: (input: string) =>
      [...allCommands, ...Object.keys(baseCommands)].filter((command) => {
        const commandSplit = command.split(" ");
        if (input.length === 0) {
          return commandSplit.length === 1;
        }
        return command.includes(input);
      }),
  };
  const prompt = inquirer.prompt(question);

  const answers = await prompt;

  return answers;
}

// Alias for simpler logging
const log = console.log;

/**
 * Prints all commands in a table for a given commands object
 * @param commands
 * @param prefix The prefix for all commands, for example `ado create` would have a prefix of `ado`
 */
export async function listCommands(commands: Commands, prefix?: string) {
  const commandsArray = Object.keys(commands);
  const commandTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  //Commands are sorted alphabetically with `exit` being the last
  const sortedCommands = commandsArray.sort((a, b) =>
    a === "exit" ? -1 : a > b ? 1 : -1
  );

  //Errors produced when generating command list
  //Determining if a command is disabled may require asynchronous actions that can fail
  let errors = [];
  for (let i = 0; i < sortedCommands.length; i++) {
    const cmdName = sortedCommands[i];
    const cmd = commands[cmdName];
    try {
      const disabled = cmd.disabled && (await cmd.disabled());
      if (!disabled)
        commandTable.push(["", cmd.color(cmdName), cmd.description ?? ""]);
    } catch (error) {
      errors.push(error);
    }
  }

  log(`Usage:`);
  log(`${prefix ? `${prefix} ` : ""}[cmd]`);
  log(`Valid commands:`);
  log(commandTable.toString());
  //Log any errors produced when generating command list
  errors.forEach((error) => console.error(chalk.red(error)));
  log();
}

/**
 * Prints help information for a given command
 * @param cmd
 */
export function printCommandHelp(cmd: Command) {
  const { description, usage } = cmd;
  log(chalk.bold(description));
  log();
  log("Usage:");
  log(chalk.green(usage));
  if (cmd.flags) {
    log();
    log("Valid flags:");
    const flagTable = new Table(logTableConfig);

    const flags = Object.keys(cmd.flags);
    flags.forEach((flag) => {
      flagTable.push([
        chalk.green(flag),
        cmd.flags![flag].description,
        cmd.flags![flag].usage ?? "",
      ]);
    });
    flagTable.push([
      chalk.green("help"),
      "Displays info about the current command",
      "",
    ]);
    log(flagTable.toString());
  }
  log();
  log(
    chalk.bold(
      `Any request inputs can be exited using one of the following inputs: ${exitInputs.join(
        ", "
      )}`
    )
  );
  log();
}
