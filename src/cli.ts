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
  reload,
  displaySpinnerAsync,
  wallets,
  loadDefaultConfig,
} from "./lib-cli";
import minimist from "minimist";

inquirer.registerPrompt("command", require("inquirer-command-prompt"));

async function onStartup() {
  await displaySpinnerAsync("Loading config...", async () =>
    loadDefaultConfig()
  );
  await displaySpinnerAsync(
    "Loading wallets...",
    async () => await wallets.loadWallets()
  );
}

async function start() {
  await onStartup();
  await title();
  await subTitle();
  while (true) {
    let input = await ask();
    const { _: cmd, ...flags } = minimist(parseInput(input.command));
    await handle(cmd, flags, baseCommands);
    reload.newInput(input.command);
  }
}

start();
