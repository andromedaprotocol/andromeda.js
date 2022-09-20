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
  hubbleHandler,
  walletHandler,
  wasmHandler,
  bankHandler,
  allCommands,
} from "./handlers";

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
    color: chalk.magenta,
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
    color: chalk.black,
    usage: "wasm <cmd>",
    disabled: () => !client.isConnected,
  },
  ado: {
    handler: adoHandler,
    description: "Query and execute on an ADO",
    color: chalk.yellow,
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
  hubble: {
    handler: hubbleHandler,
    description: "Query using the Hubble service",
    color: chalk.magenta,
    usage: "hubble <cmd>",
    disabled: () => !client.isConnected,
  },
};

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
        const inputs = input.split(" ");
        return inputs.every((str) => command.includes(str));
      }),
  };
  const prompt = inquirer.prompt(question);

  const answers = await prompt;

  return answers;
}

const log = console.log;

export async function listCommands(commands: Commands, prefix?: string) {
  const commandsArray = Object.keys(commands);

  log(`Usage:
   ${prefix ? `${prefix} ` : ""}[cmd]

Valid commands:`);
  const commandTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  const sortedCommands = commandsArray.sort((a, b) =>
    a === "exit" ? -1 : a > b ? 1 : -1
  );
  for (let i = 0; i < sortedCommands.length; i++) {
    const cmdName = sortedCommands[i];
    const cmd = commands[cmdName];
    const disabled = cmd.disabled && (await cmd.disabled());
    commandTable.push([
      "",
      disabled ? chalk.grey(cmdName) : cmd.color(cmdName),
      disabled ? chalk.grey("Disabled") : cmd.description ?? "",
    ]);
  }
  log(commandTable.toString());
  log();
}

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
}
