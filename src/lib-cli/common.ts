import { Spinner } from "cli-spinner";
import inquirer from "inquirer";
import config from "./config";
import { getTxExplorerURL } from "@andromeda/andromeda-js";
import { exitInputs } from "./cmd";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Default config for printing a table
 */
export const logTableConfig = {
  chars: {
    top: "",
    "top-mid": "",
    "top-left": "",
    "top-right": "",
    bottom: "",
    "bottom-mid": "",
    "bottom-left": "",
    "bottom-right": "",
    left: "",
    "left-mid": "",
    mid: "",
    "mid-mid": "",
    right: "",
    "right-mid": "",
    middle: " ",
  },
  style: { "padding-left": 0, "padding-right": 0 },
};

/**
 * Validates command parameters or requests them if they are not already provided
 * @param message The parameter request message
 * @param input The user's input (if any)
 * @param validate A function to validate the input
 * @param choices Used when a list of choices is required
 * @returns
 */
export async function validateOrRequest(
  message: string,
  input?: string,
  validate?: (input: string) => Promise<boolean> | boolean,
  choices?: string[],
  hiddenInput?: boolean
): Promise<string> {
  //If the user provided input then validate
  if (input) {
    if (typeof input === "string" && exitInputs.includes(input.trim()))
      throw new Error("Prompt exited");

    const valid = !validate || (await validate(input));
    if (valid) {
      return input;
    }
  }

  const prompt = await (choices
    ? inquirer.prompt({
        type: "list",
        message,
        name: `requestinput`,
        validate: (input: string) => {
          if (exitInputs.includes(input.trim()) || !validate) return true;
          return validate(input);
        },
        choices: [...choices, "exit"],
      })
    : inquirer.prompt({
        type: hiddenInput ? "password" : "input",
        message,
        name: `requestinput`,
        validate: (input: string) => {
          if (exitInputs.includes(input.trim()) || !validate) return true;
          return validate(input);
        },
      }));

  return prompt.requestinput;
}

/**
 * Displays a spinner alongside the provided text. Primarily used for asynchronous actions.
 * @param text The text to display
 * @param cb The callback to call while displaying the spinner
 * @returns The returned value from the provided callback
 */
export async function displaySpinnerAsync<T>(
  text: string,
  cb: (...args: any) => Promise<T>
) {
  const spinner = new Spinner(text);
  spinner.setSpinnerString(1);
  spinner.start();
  try {
    const resp = await cb();
    return resp;
  } catch (error) {
    throw error;
  } finally {
    spinner.stop();
    console.log();
  }
}

/**
 * Flags common to all execute handlers
 */
export const executeFlags = {
  funds: {
    description: "Funds to send with the message",
    usage: "--funds 100ujunox",
  },
  memo: {
    description: "An optional memo to attach to the message",
    usage: "--memo 'Wow what a great transaction!'",
  },
  simulate: {
    description:
      "Simulates the transaction without broadcasting it. Useful to estimate gas costs.",
  },
  print: {
    description: "Prints the constructed message before simulating.",
  },
};

/**
 * Flags common to all instantiation handlers
 */
export const instantiateFlags = {
  label: {
    description: "Used to provide a label assigned to the instantiation",
    usage: "--label 'Wow what a great label'",
  },
  admin: {
    description:
      "Used to provide an alternative admin address for the contract",
    usage: "--admin juno1...",
  },
  simulate: {
    description:
      "Simulates the transaction without broadcasting it. Useful to estimate gas costs.",
  },
  print: {
    description: "Prints the constructed message before simulating.",
  },
};

/**
 * Used to print a URL for a transaction hash. Always uses the first URL provided by the config unless otherwise provided.
 * @param hash The transaction hash
 * @param urlIdx The index of the URL to use
 */
export function printTransactionUrl(hash: string, urlIdx = 0) {
  const urls = config.get("chain.blockExplorerTxPages");
  if (urls.length === 0) return;
  const txUrls = urls.map((url) => getTxExplorerURL(hash, url));
  console.log(txUrls[urlIdx]);
}
