import { Spinner } from "cli-spinner";
import inquirer from "inquirer";

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
