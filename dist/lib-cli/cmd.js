"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = exports.listCommands = exports.splitArgs = exports.ask = exports.subTitle = exports.title = void 0;
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const cli_table_1 = __importDefault(require("cli-table"));
const figlet_1 = __importDefault(require("figlet"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const inquirer_1 = __importDefault(require("inquirer"));
const common_1 = require("./common");
// Display Functions/////////////////////////////////////////////////////////////////////////////
async function title() {
    console.clear();
    const msg = `Andromeda CLI`;
    (0, figlet_1.default)(msg, (_err, data) => {
        console.log((0, gradient_string_1.default)("red", "orange", "red").multiline(data));
    });
    await (0, common_1.sleep)(20);
}
exports.title = title;
async function subTitle() {
    const rainbowTitle = chalk_animation_1.default.karaoke("Andromeda Command Line Interface");
    await (0, common_1.sleep)(20);
    rainbowTitle.stop();
}
exports.subTitle = subTitle;
// Common Functions/////////////////////////////////////////////////////////////////////////////
async function ask(defaultValue = "") {
    const question = {
        name: "command",
        type: "command",
        message: "$ >",
        default: defaultValue,
        context: 10,
    };
    const prompt = inquirer_1.default.prompt(question);
    const answers = await prompt;
    return answers;
}
exports.ask = ask;
const log = console.log;
function splitArgs(input) {
    return input.trim().split(" ");
}
exports.splitArgs = splitArgs;
async function listCommands(commands, prefix) {
    const commandsArray = Object.keys(commands);
    log(`Andromeda CLI

Usage:
   ${prefix ? `${prefix} ` : ""}[cmd]

Valid commands:`);
    const commandTable = new cli_table_1.default(Object.assign(Object.assign({}, common_1.logTableConfig), { colWidths: [2] }));
    commandsArray
        .sort((a, b) => (a > b ? 1 : -1))
        .forEach((cmd) => {
        var _a;
        return commandTable.push([
            "",
            commands[cmd].color(cmd),
            (_a = commands[cmd].description) !== null && _a !== void 0 ? _a : "",
        ]);
    });
    log(commandTable.toString());
    log();
}
exports.listCommands = listCommands;
async function handle(input, commands) {
    if (input.trim().length === 0) {
        return listCommands(commands);
    }
    const args = splitArgs(input);
    const arg = args.shift();
    const validCommands = Object.keys(commands);
    if (!arg || !validCommands.includes(arg)) {
        log(chalk_1.default.red("Invalid command"));
    }
    else {
        await commands[arg].handler(args.join(" "));
    }
}
exports.handle = handle;
