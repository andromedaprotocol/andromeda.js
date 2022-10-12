#!/usr/bin/env node
require("module-alias/register");

import inquirer from "inquirer";
import {
  baseCommands,
  handle,
  parseInput,
  ask,
  subTitle,
  title,
  displaySpinnerAsync,
  wallets,
  loadDefaultConfig,
} from "./lib-cli";
import { connectClient } from "./lib-cli/handlers/client";
import minimist from "minimist";

// Register command type prompt
const inquirerCommandPrompt = require("inquirer-command-prompt");
inquirer.registerPrompt("command", inquirerCommandPrompt);

async function onStartup() {
  try {
    await displaySpinnerAsync("Loading config...", loadDefaultConfig);
    const signer = await displaySpinnerAsync(
      "Loading wallets...",
      async () => await wallets.loadWallets()
    );
    await connectClient(signer);
  } catch (error) {
    console.error(error);
  }
}

async function start() {
  await onStartup();
  const inputs = process.argv.slice(2);
  if (inputs.length === 0) {
    await title();
    await subTitle();
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
