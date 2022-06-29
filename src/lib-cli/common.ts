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
