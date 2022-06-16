import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Table from "cli-table";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { logTableConfig, sleep } from "./common";
import { Commands } from "./types";

// Display Functions/////////////////////////////////////////////////////////////////////////////
export async function title() {
  console.clear();
  const msg = `Andromeda CLI`;

  figlet(msg, (_err: any, data: any) => {
    console.log(gradient("red", "orange", "red").multiline(data));
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

// Common Functions/////////////////////////////////////////////////////////////////////////////
export async function ask(defaultValue: string = "") {
  const question: any = {
    name: "command",
    type: "command",
    message: "$ >",
    default: defaultValue,
    context: 10,
  };
  const prompt = inquirer.prompt(question);

  const answers = await prompt;

  return answers;
}

const log = console.log;

export function splitArgs(input: string): string[] {
  return input.trim().split(" ");
}

export async function listCommands(commands: Commands, prefix?: string) {
  const commandsArray = Object.keys(commands);

  log(`Andromeda CLI

Usage:
   ${prefix ? `${prefix} ` : ""}[cmd]

Valid commands:`);
  const commandTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  commandsArray
    .sort((a, b) => (a > b ? 1 : -1))
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

export async function handle(input: string, commands: Commands) {
  if (input.trim().length === 0) {
    return listCommands(commands);
  }

  const args = splitArgs(input);
  const arg = args.shift();
  const validCommands = Object.keys(commands);

  if (!arg || !validCommands.includes(arg)) {
    log(chalk.red("Invalid command"));
  } else {
    await commands[arg].handler(args.join(" "));
  }
}
