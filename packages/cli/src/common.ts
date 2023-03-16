import { getTxExplorerURL } from "@andromedaprotocol/andromeda.js";
import { Spinner } from "cli-spinner";
import { exitInputs, promptWithExit } from "./cmd";
import config from "./config";
import State from "./state";

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
    ? promptWithExit({
        type: "list",
        message,
        name: `requestinput`,
        validate,
        choices,
      })
    : promptWithExit({
        type: hiddenInput ? "password" : "input",
        message,
        name: `requestinput`,
        validate,
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

/**
 * Prompts the user for a passphrase
 * @param walletName Optional wallet name for validation
 * @param message Override for the prompt message
 * @returns The input passphrase
 */
export async function promptPassphrase(
  walletName?: string,
  message?: string
): Promise<string> {
  const passphraseValue = await promptWithExit({
    message:
      message ??
      (walletName
        ? `Input passphrase for wallet ${walletName}:`
        : `Input passphrase:`),
    validate: async (input: string) => {
      try {
        if (walletName) {
          try {
            const wallet = State.wallets.getWallet(walletName);
            if (wallet) {
              // Validate the passphrase
              await wallet.getAddress(input);
            }
          } catch (error) {
            return "Incorrect passphrase";
          }
        }
        return input.length > 0 ? true : "Passphrase cannot be empty";
      } catch (error) {
        return false;
      }
    },
    type: "password",
    name: "passphrase",
  });

  return passphraseValue.passphrase ?? "";
}

/**
 * Removes the previous output lines
 * @param linesToClear Amount of lines to clear, defaults to 1
 */
export function clearPreviousLines(linesToClear = 1) {
  for (let i = 0; i < linesToClear; i++) {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearLine(1);
  }
}

/**
 * Attaches an ordinal suffix to a given number and returns it as a string.
 * Taken from: https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
 * @param number
 * @returns
 */
export function ordinalSuffix(number: number) {
  const j = number % 10,
    k = number % 100;
  if (j == 1 && k != 11) {
    return number + "st";
  }
  if (j == 2 && k != 12) {
    return number + "nd";
  }
  if (j == 3 && k != 13) {
    return number + "rd";
  }
  return number + "th";
}
