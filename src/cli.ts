#!/usr/bin/env node
require("module-alias/register");

import inquirer from "inquirer";
import { baseCommands } from "./lib-cli";
import { ask, subTitle, title } from "./lib-cli/cmd";
import { handle, parseInput } from "./lib-cli/handlers";
import reload from "./lib-cli/handlers/reload";
import minimist from "minimist";

inquirer.registerPrompt("command", require("inquirer-command-prompt"));

async function start() {
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
