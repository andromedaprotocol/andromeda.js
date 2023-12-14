import { CONFIG_DIRECTORY } from "./config/storage";
import inquirer from "inquirer";
import minimist from "minimist";
import {
  ask,
  baseCommands,
  displaySpinnerAsync,
  handle,
  loadDefaultConfig,
  parseInput,
  State,
  title,
} from ".";

// Register command type prompt
const inquirerCommandPrompt = require("inquirer-command-prompt");
const InterruptedPrompt = require("inquirer-interrupted-prompt");

import AutocompletePrompt from "inquirer-autocomplete-prompt";
class CustomAutocompletePrompt extends AutocompletePrompt<any> {
  onSubmit(line: string) {
    let selected_value = this.currentChoices.getChoice(this.selected).value;

    if (!line && selected_value) {
      line = selected_value;
    }
    
    super.onSubmit(line);
  }
}

inquirer.registerPrompt("autocomplete", CustomAutocompletePrompt);
InterruptedPrompt.fromAll(inquirer);
inquirer.registerPrompt("command", inquirerCommandPrompt);


async function onStartup() {
  try {
    await displaySpinnerAsync(`Loading config from ${CONFIG_DIRECTORY}...`, loadDefaultConfig);
    await displaySpinnerAsync(
      "Connecting client...",
      async () => await State.connectClient()
    );
  } catch (error) {
    console.error(error);
  }
}

export async function start() {
  await onStartup();
  const inputs = process.argv.slice(2);
  if (inputs.length === 0) {
    await title();
    while (true) {
      let input = await ask();
      const { _: cmd, ...flags } = minimist(parseInput(input.command));
      await handle(cmd, flags, baseCommands);
    }
  } else {
    const { _: cmd, ...flags } = minimist(parseInput(inputs.join(" ")));
    await handle(cmd, flags, baseCommands);
    process.exit();
  }
}
