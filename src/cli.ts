#!/usr/bin/env node
require("module-alias/register");

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
} from "./lib-cli";

// Register command type prompt
const inquirerCommandPrompt = require("inquirer-command-prompt");
inquirer.registerPrompt("command", inquirerCommandPrompt);

async function onStartup() {
  try {
    await displaySpinnerAsync("Loading config...", loadDefaultConfig);
    await displaySpinnerAsync(
      "Loading wallets...",
      async () => await State.wallets.loadWalletsFromStorage()
    );
    await displaySpinnerAsync(
      "Connecting client...",
      async () => await State.connectClient()
    );
  } catch (error) {
    console.error(error);
  }
}

async function start() {
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

start();
