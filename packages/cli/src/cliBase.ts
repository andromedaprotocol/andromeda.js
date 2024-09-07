import inquirer from "inquirer";
import minimist from "minimist";
import {
  ask,
  baseCommands,
  displaySpinnerAsync,
  handle,
  loadDefaultEnv,
  migrateLegacyEnv,
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
    let selected_value = this.currentChoices.getChoice(this.selected)?.value;
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
    migrateLegacyEnv();
    await displaySpinnerAsync("Loading env..", loadDefaultEnv);
  } catch (error) {
    console.error(error);
  }
}

export async function start() {
  await onStartup();
  const inputs = process.argv.slice(2);
  if (inputs.length === 0) {
    await title();
    await State.connectClient()
    while (true) {
      let input = await ask();
      const { _: cmd, ...flags } = minimist(parseInput(input.command));
      await handle(cmd, flags, baseCommands);
    }
  } else {
    await State.connectClient()
    const { _: cmd, ...flags } = minimist(parseInput(inputs.join(" ")));
    await handle(cmd, flags, baseCommands);
    process.exit();
  }
}
