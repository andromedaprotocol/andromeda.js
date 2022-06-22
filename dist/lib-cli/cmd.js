"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCommandHelp = exports.listCommands = exports.ask = exports.subTitle = exports.title = void 0;
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const cli_table_1 = __importDefault(require("cli-table"));
const figlet_1 = __importDefault(require("figlet"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const inquirer_1 = __importDefault(require("inquirer"));
const common_1 = require("./common");
const config_1 = __importDefault(require("./config"));
const wallet_1 = require("./handlers/wallet");
async function title() {
    console.clear();
    const msg = `Andromeda CLI`;
    (0, figlet_1.default)(msg, (_err, data) => {
        console.log((0, gradient_string_1.default)("blue", "purple", "red", "orange").multiline(data));
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
    const chainId = config_1.default.get("chain.chainId");
    const wallet = (0, wallet_1.getCurrentWallet)();
    const question = {
        name: "command",
        type: "command",
        message: `$${wallet ? `${wallet.name}@` : ""}${chainId ?? chalk_1.default.red("<Disconnected>")}>`,
        default: defaultValue,
        context: 10,
    };
    const prompt = inquirer_1.default.prompt(question);
    const answers = await prompt;
    return answers;
}
exports.ask = ask;
const log = console.log;
async function listCommands(commands, prefix) {
    const commandsArray = Object.keys(commands);
    log(`
Usage:
   ${prefix ? `${prefix} ` : ""}[cmd]

Valid commands:`);
    const commandTable = new cli_table_1.default({
        ...common_1.logTableConfig,
        colWidths: [2],
    });
    commandsArray
        .sort((a, b) => (a > b ? 1 : -1))
        .forEach((cmd) => commandTable.push([
        "",
        commands[cmd].color(cmd),
        commands[cmd].description ?? "",
    ]));
    log(commandTable.toString());
    log();
}
exports.listCommands = listCommands;
function printCommandHelp(cmd) {
    const { description, usage } = cmd;
    log(chalk_1.default.bold(description));
    log();
    log("Usage:");
    log(chalk_1.default.green(usage));
    if (cmd.flags) {
        log();
        log("Valid flags:");
        const flagTable = new cli_table_1.default(common_1.logTableConfig);
        const flags = Object.keys(cmd.flags);
        flags.forEach((flag) => {
            flagTable.push([
                chalk_1.default.green(flag),
                cmd.flags[flag].description,
                cmd.flags[flag].usage ?? "",
            ]);
        });
        flagTable.push([
            chalk_1.default.green("help"),
            "Displays info about the current command",
            "",
        ]);
        log(flagTable.toString());
    }
    log();
}
exports.printCommandHelp = printCommandHelp;
