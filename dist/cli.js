#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const inquirer_1 = __importDefault(require("inquirer"));
const lib_cli_1 = require("./lib-cli");
const cmd_1 = require("./lib-cli/cmd");
const handlers_1 = require("./lib-cli/handlers");
const reload_1 = __importDefault(require("./lib-cli/handlers/reload"));
const minimist_1 = __importDefault(require("minimist"));
inquirer_1.default.registerPrompt("command", require("inquirer-command-prompt"));
async function start() {
    await (0, cmd_1.title)();
    await (0, cmd_1.subTitle)();
    while (true) {
        let input = await (0, cmd_1.ask)();
        const { _: cmd, ...flags } = (0, minimist_1.default)((0, handlers_1.parseInput)(input.command));
        await (0, handlers_1.handle)(cmd, flags, lib_cli_1.baseCommands);
        reload_1.default.newInput(input.command);
    }
}
start();
