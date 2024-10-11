import inquirer from "inquirer";
import minimist from "minimist";
import {
  ask,
  baseCommands,
  createEnv,
  DEFAULT_ENVS,
  displaySpinnerAsync,
  handle,
  loadDefaultEnv,
  parseInput,
  State,
  title,
} from ".";

// Register command type prompt
const inquirerCommandPrompt = require("inquirer-command-prompt");
const InterruptedPrompt = require("inquirer-interrupted-prompt");

import AutocompletePrompt from "inquirer-autocomplete-prompt";
import { GQL_URLS } from "@andromedaprotocol/andromeda.js";
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
    createEnv(DEFAULT_ENVS.TESTNET, {
      'gql': GQL_URLS.TESTNET,
    }, true);
    createEnv(DEFAULT_ENVS.MAINNET, {
      'gql': GQL_URLS.MAINNET,
    }, true);
    createEnv(DEFAULT_ENVS.DEVNET, {
      'gql': GQL_URLS.DEVNET,
    }, true);
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
    await State.connectClient().catch(_ => { })
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
