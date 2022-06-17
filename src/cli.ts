#!/usr/bin/env node
require("module-alias/register");

import inquirer from "inquirer";
import { baseCommands } from "./lib-cli";
import { ask, handle, subTitle, title } from "./lib-cli/cmd";
import reload from "./lib-cli/reload";

inquirer.registerPrompt("command", require("inquirer-command-prompt"));

async function start() {
  await title();
  await subTitle();
  while (true) {
    let input = await ask();
    await handle(input.command, baseCommands);
    reload.newInput(input.command);
  }
}

start();
