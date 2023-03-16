import pc from "picocolors";
import Table from "cli-table";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { logTableConfig, sleep } from "./common";
import {
  adoHandler,
  allCommands,
  bankHandler,
  chainHandler,
  gqlHandler,
  txHandler,
  walletHandler,
  wasmHandler,
} from "./handlers";
import State from "./state";
import { Command, Commands } from "./types";

// Require package.json to print version
const npmPackage = require("../package.json");

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
    color: pc.red,
    usage: "exit",
  },
  help: {
    handler: async () => {
      return await listCommands(baseCommands);
    },
    description: "Lists all valid commands",
    color: pc.green,
    usage: "help",
  },
  clear: {
    handler: async () => {
      console.clear();
      await title();
    },
    description: "Clears the terminal",
    color: pc.white,
    usage: "clear",
  },
  wallets: {
    handler: walletHandler,
    description: "Manage wallets",
    color: pc.blue,
    usage: "wallets <cmd>",
  },
  chain: {
    handler: chainHandler,
    description: "Manage Chain Config",
    color: pc.yellow,
    usage: "chain <cmd>",
  },
  wasm: {
    handler: wasmHandler,
    description: "Send CosmWasm messages to the chain",
    color: pc.cyan,
    usage: "wasm <cmd>",
    disabled: () => !State.client.isConnected,
  },
  tx: {
    handler: txHandler,
    description: "Query transactions",
    color: pc.magenta,
    usage: "tx <cmd>",
    disabled: () => !State.client.isConnected,
  },
  ado: {
    handler: adoHandler,
    description: "Query and execute on an ADO",
    color: pc.red,
    usage: "ado <cmd>",
    disabled: () => !State.client.isConnected,
  },
  bank: {
    handler: bankHandler,
    description: "Send tokens or query balances",
    color: pc.green,
    usage: "bank <cmd>",
    disabled: () => !State.client.isConnected,
  },
  gql: {
    handler: gqlHandler,
    description: "Query using the Andromeda GraphQL service",
    color: pc.magenta,
    usage: "gql <cmd>",
    disabled: () => !State.client.isConnected,
  },
  version: {
    handler: async () => {
      console.log(`Version: ${npmPackage.version}`);
    },
    description: "Prints the current CLI version",
    color: pc.cyan,
    usage: "version",
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
  console.log();
  console.log(
    pc.red(
      pc.bold(
        "The CLI is currently in beta. If you experience any issues or would like to provide feedback you can do so here: https://github.com/andromedaprotocol/andromeda.js/issues"
      )
    )
  );
  console.log(
    pc.blue(
      `Terms & Agreements: ${pc.bold(
        "https://github.com/andromedaprotocol/andromeda-core/blob/development/LICENSE/LICENSE.md"
      )}`
    )
  );
  await sleep(20);
}

/**
 * Prompt the user for input
 * @param defaultValue
 * @returns The user's input
 */
export async function ask(defaultValue: string = "") {
  const question: any = {
    name: "command",
    type: "command",
    message: `${State.CLIPrefix}>`,
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

  if (prefix) {
    log(`Usage:`);
    log(pc.green(`${prefix ? `${prefix} ` : ""}[cmd]`));
    log();
  }
  log(`Valid commands:`);
  log(commandTable.toString());
  //Log any errors produced when generating command list
  errors.forEach((error) => console.error(pc.red(error as string)));
  log();
}

/**
 * Prints help information for a given command
 * @param cmd
 */
export async function printCommandHelp(cmd: Command, commands: Commands = {}) {
  const { description, usage } = cmd;
  log(pc.bold(description));
  log();
  log("Usage:");
  log(pc.green(usage));
  if (cmd.flags) {
    log();
    log("Valid flags:");
    const flagTable = new Table(logTableConfig);

    const flags = Object.keys(cmd.flags);
    flags.forEach((flag) => {
      flagTable.push([
        pc.green(flag),
        cmd.flags![flag].description,
        cmd.flags![flag].usage ?? "",
      ]);
    });
    flagTable.push([
      pc.green("help"),
      "Displays info about the current command",
      "",
    ]);
    log(flagTable.toString());
  }
  log();
  if (Object.keys(commands).length > 0) await listCommands(commands);

  log(
    pc.bold(
      `Any request inputs can be exited using one of the following inputs: ${exitInputs.join(
        ", "
      )}`
    )
  );
  log(
    pc.bold(
      pc.cyan(
        "Documentation can be found here: https://docs.andromedaprotocol.io/andromeda/andromeda-cli/"
      )
    )
  );
  log();
}

/**
 * A wrapped around inquirer that allows the user to exit a prompt
 * @param questionDefinition
 * @returns
 */
export async function promptWithExit(
  questionDefinition: inquirer.QuestionCollection<inquirer.Answers>
) {
  const transformQuestion = (
    question: inquirer.DistinctQuestion
  ): inquirer.DistinctQuestion => {
    const mappedQuestion = {
      ...question,
      validate: async (input: string) => {
        // Always allow exit
        if (exitInputs.includes(input)) return true;
        return question.validate ? question.validate(input) : true;
      },
    };
    // If the question is multiple choice include an exit choice
    if (mappedQuestion.type === "list" || mappedQuestion.type === "rawlist") {
      mappedQuestion.choices = [
        ...(mappedQuestion.choices as Array<any>),
        { name: pc.red("exit"), value: "exit" },
      ];
    }
    return mappedQuestion;
  };

  // Map questions to include exit prompt
  const questions = (
    Array.isArray(questionDefinition)
      ? questionDefinition
      : [questionDefinition]
  ).map(transformQuestion);

  // Store all answers
  const answers: Record<string, any> = {};
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    const resp = await inquirer.prompt(question);
    // If the user selects exit then throw exit error
    if (exitInputs.includes(resp[question.name!]))
      throw new Error("Command exited");
    answers[question.name!] = resp[question.name!];
  }

  return answers;
}
