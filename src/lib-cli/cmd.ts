import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Table from "cli-table";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { logTableConfig, sleep } from "./common";
import config from "./config";
import { getCurrentWallet } from "./handlers/wallets";
import { Command, Commands } from "./types";

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
      chainId ?? chalk.red("<Disconnected>")
    }>`,
    default: defaultValue,
    context: 10,
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
  commandsArray
    .sort((a, b) => (a === "exit" ? -1 : a > b ? 1 : -1))
    .forEach((cmd) =>
      commandTable.push([
        "",
        commands[cmd].color(cmd),
        commands[cmd].description ?? "",
      ])
    );
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
