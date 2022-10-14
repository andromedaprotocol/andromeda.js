import { validateAddress } from "@andromeda/andromeda-js";
import pc from "picocolors";
import { exitInputs, listCommands, printCommandHelp } from "../cmd";
import { validateOrRequest } from "../common";
import config from "../config";
import { Command, Commands, Flags, HandlerFunc } from "../types";

const { log, error: logError } = console;

interface ReducingObject {
  inputs: string[];
  concatting: boolean;
}

/**
 * Parses input parameters
 * Reduction function inspired by: https://stackoverflow.com/a/48480895
 * @param input
 * @returns
 */
export function parseInput(input: string) {
  const splitInput = input
    .trim()
    .split(" ")
    .map((str) => str.trim())
    .filter((str) => str.length > 0);
  return splitInput.reduce(
    (accum: ReducingObject, curr) => {
      if (accum.concatting) {
        accum.inputs[accum.inputs.length - 1] += " " + curr;
      } else {
        accum.inputs.push(curr);
      }
      if (curr.split("'").length % 2 == 0) {
        accum.concatting = !accum.concatting;
      }
      return accum;
    },
    { inputs: [], concatting: false }
  ).inputs;
}

/**
 * Parses a JSON input between two single quotation marks and returns a JSON object
 * @param input
 * @returns
 */
export function parseJSONInput(input: string) {
  return JSON.parse(input.replace(/'/gm, ""));
}

/**
 * Validates that all flags input were correct
 * @param flags
 * @param cmd
 * @returns
 */
function validateFlags(flags: Flags, cmd: Command) {
  if (!cmd.flags) return;

  const passedFlags = Object.keys(flags);
  const validFlags = Object.keys(cmd.flags!);
  for (let i = 0; i < passedFlags.length; i++) {
    const flag = passedFlags[i];
    if (!validFlags.includes(flag)) {
      throw new Error(`Invalid flag passed: ${flag}`);
    }
  }
}

/**
 * Generalized handler function, parses any inputs and flags and calls the appropriate handler
 * @param input
 * @param flags
 * @param commands
 * @param prefix
 * @returns
 */
export async function handle(
  input: string[],
  flags: Flags,
  commands: Commands,
  prefix?: string
) {
  const arg = input.shift();
  let commandInput = [...input];
  const cmd = commands[arg ?? ""];

  if (!arg || !cmd) {
    if (!flags["help"]) {
      log(pc.red("Invalid command"));
      log();
    }
    await listCommands(commands, prefix);
    return;
  } else {
    if (cmd.disabled && (await cmd.disabled())) {
      log(pc.red("Command disabled"));
      return;
    }
    if (flags["help"] && (commandInput.length === 0 || cmd.inputs)) {
      printCommandHelp(cmd);
      return;
    }

    try {
      validateFlags(flags, cmd);
    } catch (error) {
      //Invalid flags, print out help text and return
      const { message } = error as Error;
      logError(pc.red(message));
      log();
      printCommandHelp(cmd);

      return;
    }

    try {
      //Check if command has expected inputs
      if (cmd.inputs) {
        for (let i = 0; i < cmd.inputs.length; i++) {
          const { requestMessage, validate, options, transform } =
            cmd.inputs[i];
          let userInput = commandInput[i];
          const inputOptions = options
            ? Array.isArray(options)
              ? options
              : await options()
            : undefined;
          userInput = await validateOrRequest(
            requestMessage,
            userInput,
            validate,
            inputOptions
          );
          if (exitInputs.includes(userInput)) throw new Error("Command exited");

          commandInput[i] = transform ? await transform(userInput) : userInput;
        }
      }
      await cmd.handler(commandInput, flags);
    } catch (error) {
      //Invalid command, print out help text
      const { message } = error as Error;
      logError(pc.red(message));
      log(pc.red(`Use the ${pc.bold("--help")} flag for help`));
    }
  }
}

/**
 * Generates a handler function given a list of commands and their prefix
 * @param commands
 * @param prefix
 * @returns A handler function
 */
export function generateHandler(
  commands: Commands,
  prefix?: string
): HandlerFunc {
  const handlerFunction: HandlerFunc = async (
    input: string[],
    flags: Flags
  ) => {
    await handle(input, flags, commands, prefix);
  };

  return handlerFunction;
}

/**
 * Validates an address input parameter for a command by attempting to decode it using bech32 and ensuring the prefix of the address matches the current config
 * @param addr The address to validate
 * @returns Whether the address is valid or not
 */
export function validateAddressInput(addr: string) {
  try {
    const isValid = validateAddress(addr, config.get("chain.addressPrefix"));
    if (!isValid) {
      throw new Error();
    }

    return isValid;
  } catch (error) {
    console.log();
    console.log(pc.red("Not a valid address"));
    return false;
  }
}
