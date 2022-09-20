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

const inquirerCommandPrompt = require("inquirer-command-prompt");

inquirer.registerPrompt("command", inquirerCommandPrompt);

async function onStartup() {
  await displaySpinnerAsync("Loading config...", async () =>
    loadDefaultConfig()
  );
  const signer = await displaySpinnerAsync(
    "Loading wallets...",
    async () => await wallets.loadWallets()
  );
  if (signer) {
    try {
      await connectClient(signer);
    } catch (error) {
      console.error(error);
    }
  }
}

async function start() {
  await onStartup();
  await title();
  await subTitle();
  while (true) {
    let input = await ask();
    const { _: cmd, ...flags } = minimist(parseInput(input.command));
    await handle(cmd, flags, baseCommands);
  }
}

start();
