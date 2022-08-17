import { Spinner } from "cli-spinner";
import inquirer from "inquirer";
import config from "./config";
import { getTxExplorerURL } from "@andromeda/andromeda-js";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

export async function validateOrRequest(
  message: string,
  input?: string,
  validate?: (input: string) => Promise<boolean> | boolean
): Promise<string> {
  return (
    input ??
    (
      await inquirer.prompt({
        type: "input",
        message,
        name: `requestinput`,
        validate,
      })
    ).requestinput
  );
}

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
};

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
};

export const factoryFlag = {
  factory: {
    description:
      "Used to provide an alternative factory address for the instantiation",
    usage: "--factory juno1...",
  },
};

export async function requestStringArray(
  message: string,
  validate?: (input: string) => Promise<boolean> | boolean
): Promise<string[]> {
  const input = (
    await inquirer.prompt({
      type: "input",
      message,
      name: `requestinput`,
      validate: async (input: string) => {
        return (
          input &&
          input.trim().length > 0 &&
          (!validate || (await validate(input)))
        );
      },
    })
  ).requestinput;
  const addMore = await inquirer.prompt({
    type: "confirm",
    message: "Add another?",
    name: "anotheraddprompt",
  });

  if (addMore.anotheraddprompt) {
    return [input.trim(), ...(await requestStringArray(message, validate))];
  } else {
    return [input.trim()];
  }
}

export async function requestOperators(): Promise<string[]> {
  const addOperators = await inquirer.prompt({
    type: "confirm",
    message: "Would you like to add any operators?",
    name: "addprompt",
  });

  if (addOperators.addprompt) {
    return requestStringArray("Input the address for the operator:");
  } else {
    return [];
  }
}

export function printTransactionUrl(hash: string) {
  const urls = config.get("chain.blockExplorerTxPages");
  if (urls.length === 0) return;
  const txUrls = urls.map((url) => getTxExplorerURL(hash, url));
  console.log(txUrls[0]);
}
