#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const chalk_animation_1 = __importDefault(require("chalk-animation"));
const inquirer_1 = __importDefault(require("inquirer"));
const gradient_string_1 = __importDefault(require("gradient-string"));
const figlet_1 = __importDefault(require("figlet"));
const nanospinner_1 = require("nanospinner");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let promptPath = "";
let reloadCache = [`${chalk_1.default.red("Close")}`];
let askAgain = ""; // a value used to toggle a call from the reload functions
let publishMessage = "";
const adoColor = "#cccc99";
const baseColor = "#0080ff";
const moduleColor = "#b300b3";
const primitveColor = "#ff6699";
const execColor = "#279f27";
// Operating Data /////////////////////////////////////////////////////////////////////////////
let walletSelections = [
    "terra1k82...hsc",
    "terra1ls4...weh",
    "terra1m48...r2h",
    "terra1je9...6ml",
    "Unload Current Key",
    "Add A New Key",
    "Remove a Key",
    "Cancel",
];
let baseHelperSelections = [
    `${chalk_1.default.red("Close")}`,
    `cw20`,
    `cw20-staking`,
    `cw721`,
    `wrapped-cw721`,
    `cw721-offers`,
    `splitter`,
    `timelock`,
    `vault`,
    `crowdfund`,
    `auction`,
    "gumball",
    "swapper",
    "lockdrop",
    "merkle-airdrop",
    "mirror",
    `astroport`,
    `anchor-earn`,
    `anchor-lend`,
];
let moduleHelperSelections = [
    `${chalk_1.default.red("Close")}`,
    `rates`,
    `addresslist`,
    `receipt`,
];
// Display Functions/////////////////////////////////////////////////////////////////////////////
async function title() {
    console.clear();
    const msg = `Andromeda CLI`;
    (0, figlet_1.default)(msg, (_err, data) => {
        console.log((0, gradient_string_1.default)("red", "orange", "red").multiline(data));
    });
    await sleep(20);
}
async function subTitle() {
    const rainbowTitle = chalk_animation_1.default.karaoke("Andromeda Command Line Interface");
    await sleep(20);
    rainbowTitle.stop();
}
// Common Functions/////////////////////////////////////////////////////////////////////////////
async function ask() {
    //In cases of reloaded prompts (askAgain has a value) the process is reloaded with a data default
    if (!askAgain) {
        const answers = await inquirer_1.default.prompt({
            name: "command",
            type: "input",
            message: "$" + `${promptPath}` + ">",
        });
        reloadCache.unshift(answers.command); //Loads latest command attempt to cache for reference
        return answers;
    }
    else {
        const answers = await inquirer_1.default.prompt({
            name: "command",
            type: "input",
            message: "$" + `${promptPath}` + ">",
            default: askAgain,
        });
        askAgain = ""; //clear reloaded command
        reloadCache.unshift(answers.command); //Loads latest command attempt to cache for reference
        return answers;
    }
}
async function reloader() {
    const rCache = await inquirer_1.default.prompt({
        name: "selection",
        type: "rawlist",
        message: `Select from recent commands (or ${chalk_1.default.red("Close")} to exit)\n`,
        choices: reloadCache,
    });
    return rCache.selection;
}
// Help Functions/////////////////////////////////////////////////////////////////////////////
async function command_list() {
    console.log(`
    ${chalk_1.default.bold.gray("wallet")} - Specify the user wallet to use for chain interactions.
    ${chalk_1.default.bold.gray("prompt <cmd>")} - Run(${chalk_1.default.bold.blueBright("create")} | ${chalk_1.default.bold.cyan("execute")} | ${chalk_1.default.bold.greenBright("query")}) with an entry prompt format.
    ${chalk_1.default.bold.blueBright("create")} - Creates an ADO to publish to the chain.
    ${chalk_1.default.bold.hex(adoColor)("publish")} - Publish the created ADO to the chain.
    ${chalk_1.default.bold.cyan("execute")} - Executes a command against a published ADO.
    ${chalk_1.default.bold.greenBright("query")} - Requests data from a published ADO.
    ${chalk_1.default.bold.magenta("list")} - Shows a list of available ADOs to create / or your published ADOs.
    ${chalk_1.default.bold.gray("help")} - Show a list of available commands.
    ${chalk_1.default.bold.gray("<cmd> --help")} - Show the helper text for the specified command.
    ${chalk_1.default.bold.gray("reload")} - Provides a selection list of previously run commands.
    ${chalk_1.default.bold.gray("clear")} - Clears the console of current content.
    ${chalk_1.default.bold.red("exit")} - Close the terminal.
    `);
}
async function base_helper() {
    const base = await inquirer_1.default.prompt({
        name: "name",
        type: "list",
        message: `Select a listed Base ADO for more information (or ${chalk_1.default.red("Close")} to exit)\n`,
        choices: baseHelperSelections,
    });
    return base.name;
}
async function module_helper() {
    const module = await inquirer_1.default.prompt({
        name: "name",
        type: "list",
        message: `Select a listed module for more information (or ${chalk_1.default.red("Close")} to exit)\n`,
        choices: moduleHelperSelections,
    });
    return module.name;
}
// Wallet Functions/////////////////////////////////////////////////////////////////////////////
async function checkConnected() {
    if (!promptPath) {
        console.log(`${chalk_1.default.red(`You will need to load a user key in order to run publishing processes.
        ${chalk_1.default.greenBright('Try using the "')}${chalk_1.default.bold.gray("wallet")}${chalk_1.default.greenBright('" command to load a user key.')}`)}`);
        return "";
    }
    else {
        return "true";
    }
}
async function addWallet() {
    const answer = await inquirer_1.default.prompt({
        name: "id",
        type: "input",
        message: "What is the new wallet address?",
    });
    // const _tmpAnswer = await inquirer.prompt({
    //   name: "seed",
    //   type: "input",
    //   message: "What is the seeds for the address?",
    // });
    walletSelections.unshift(answer.id); //Using unshift instead of push so concatination is loaded at the begining of the list
}
async function processWallet(answer) {
    const spinner = (0, nanospinner_1.createSpinner)("Loading Key...").start();
    if (answer != "Cancel" && answer != "Add A New Key") {
        await sleep(2000);
    }
    else {
        spinner.error({
            text: `Action canceled.`,
        });
    }
    switch (answer) {
        case "terra89fd98fd98dds":
            spinner.error({ text: `Failed to load: ${chalk_1.default.gray(answer)}` });
            break;
        case "Unload Current Key":
            if (promptPath) {
                spinner.error({ text: `Unloaded Key: ${chalk_1.default.gray(promptPath)}` });
                promptPath = "";
            }
            else {
                spinner.error({
                    text: `No key found to unload! ${chalk_1.default.gray(promptPath)}`,
                });
            }
            break;
        case "Add A New Key":
            spinner.success({
                text: `Adding a New Key:`,
            });
            await addWallet();
            break;
        default:
            spinner.success({
                text: `Successfully loaded: ${chalk_1.default.gray(answer)}.`,
            });
            promptPath = answer;
            break;
    }
    return promptPath;
}
async function wallet_selection() {
    const answers = await inquirer_1.default.prompt({
        name: "wallet_key",
        type: "list",
        message: "Which key do you want to use?\n",
        choices: walletSelections,
    });
    return processWallet(answers.wallet_key);
}
// main() /////////////////////////////////////////////////////////////////////////////
async function main() {
    await title();
    await subTitle();
    let response = "";
    let release = false; //Used as an eval for exiting execution loop
    do {
        response = await ask();
        switch (response.command) {
            case "exit":
                release = true;
                //process.exit(1);
                break;
            // Reload //////////////////////
            case "reload --help":
                console.log(`
           ${chalk_1.default.bold.gray("reload")} - Provides a selection list of previously run commands.`);
                break;
            case "reload":
                askAgain = await reloader(); //Reload data to cycle on reload selection
                break;
            // clear //////////////////////
            case "clr":
            case "clear":
                console.clear();
                title();
                break;
            // Help //////////////////////
            case "help":
            case "-help":
            case "--help":
            case "-?":
                await command_list();
                break;
            // Wallet //////////////////////
            case "wallet --help":
                console.log(`
        ${chalk_1.default.bold.gray("wallet")} - Opens the wallet selection menu

        Arguments:
        ${chalk_1.default.gray("unload | -u")} - Unloads the currently loaded user key
        `);
                break;
            case "wallet -u":
            case "wallet unload":
                const spinner = (0, nanospinner_1.createSpinner)("Loading Key...").start();
                sleep(1000);
                if (promptPath) {
                    spinner.error({ text: `Unloaded Key: ${chalk_1.default.gray(promptPath)}` });
                    promptPath = "";
                }
                else {
                    spinner.error({
                        text: `No key found to unload! ${chalk_1.default.gray(promptPath)}`,
                    });
                }
                break;
            case "wallet":
                await wallet_selection();
                break;
            // List //////////////////////
            case "list":
                console.log(`${chalk_1.default.red("You need to specify what you are trying to list. Try an option listed below.")}`);
            case "list --help":
                console.log(`
        ${chalk_1.default.bold.magenta("list")} - Provides a listing of the specified list type

        Arguments:
        ${chalk_1.default.hex(adoColor)("ados")} - Lists the published ADOs related to the loaded key
        ${chalk_1.default.hex(baseColor)("base")} - Lists the available Base ADOs to use in the ${chalk_1.default.bold.blueBright("create")} command 
        ${chalk_1.default.hex(moduleColor)("module")} - Lists the available modules to use in the ${chalk_1.default.bold.blueBright("create")} command 
        ${chalk_1.default.hex(primitveColor)("prim")} - Lists the available primitives to use in the ${chalk_1.default.bold.blueBright("create")} command
        ${chalk_1.default.hex(execColor)("exec")} - Lists the available actions for the ${chalk_1.default.bold.cyan("execute")} command
      `);
                break;
            // ADOs
            case "list ado":
            case "list ados":
                if (await checkConnected()) {
                    console.log(`${chalk_1.default.bold.blueBright("ados")}`);
                }
                break;
            // Base
            case "list base":
                response = await base_helper();
                //Load review data of response
                switch (response) {
                    case "cw20":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("cw20")}${chalk_1.default.gray("(name, symbol, decimals, [initial_balances], ?<mint>, ?<marketing>)")}
            ${chalk_1.default.bold.gray("<mint> = ")}${chalk_1.default.gray("[minter, ?cap]")}
            ${chalk_1.default.bold.gray("<marketing> = ")}${chalk_1.default.gray("[?project, ?description, ?marketing, ?logo]")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/ado-classes/cw-20-token")}
            `);
                        break;
                    case "splitter":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("splitter")}${chalk_1.default.gray("(<recipient>)")}
            ${chalk_1.default.bold.gray("<recipient> = ")}${chalk_1.default.gray("[addr, percent]")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/ado-classes/andromeda-splitter")}
            `);
                        break;
                    case "timelock":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("timelock")}${chalk_1.default.gray("()")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/ado-classes/timelock")}
            `);
                        break;
                }
                break;
            case "list module":
                response = await module_helper();
                //Load review data of response
                switch (response) {
                    case "rates":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("rates")}${chalk_1.default.gray("(rate_type, is_additive, description, [recivers])")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/modules/rates-module")}
            `);
                        break;
                    case "addresslist":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("addresslist")}${chalk_1.default.gray("(is_inclusive, [operators])")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/modules/address-list-module")}
            `);
                        break;
                    case "receipt":
                        console.log(`   ${chalk_1.default.bold.hex(moduleColor)("receipt")}${chalk_1.default.gray("(minter, [operators])")}\n    ${chalk_1.default.blue.underline("https://docs.andromedaprotocol.io/andromeda/modules/receipt-module")}
            `);
                        break;
                    default:
                        //console.log("Failed to find information.");
                        break;
                }
                break;
            // Publish //////////////////////
            case "publish --help":
                console.log(`
        ${chalk_1.default.bold.hex(adoColor)("publish")} - Submit the currently created message to be published to the chain

        Arguments:
        ${chalk_1.default.gray("-proof")} - Show the currently constructed message
        ${chalk_1.default.gray("-clear")} - Clear the currently constructed message
        `);
                break;
            case "publish":
                if (await checkConnected()) {
                    console.clear();
                    title();
                    let spinner = (0, nanospinner_1.createSpinner)("Publishing: " + publishMessage).start();
                    await sleep(4500);
                    console.log(publishMessage);
                    // spinner.success({
                    //   text: `Success: Find the transactions at ${chalk.blue.underline(
                    //     "tx78ds08dsa654df"
                    //   )}.`,
                    // });
                    spinner.error({
                        text: `Failed to Publish: ${chalk_1.default.red("Publishing encountered error response of 503.")}`,
                    });
                }
                break;
            case "publish -proof":
                if (publishMessage) {
                    console.log(publishMessage);
                }
                else {
                    console.log("No message is currently constructed for submission.");
                }
                break;
            case "publish -clear":
                publishMessage = "";
                console.log("Current message cleared.");
                break;
            default:
                // Create //////////////////////
                if (response.command.startsWith("create")) {
                    if (await checkConnected()) {
                        console.log(`${chalk_1.default.bold.blueBright(response.command.slice(7))}`);
                        publishMessage = response.command.slice(7);
                    }
                    break;
                }
                console.log('Unknown command: "' +
                    response.command +
                    `" Try "${chalk_1.default.bold.gray("help")}" or "--help" for a list of commands.`);
                break;
        }
    } while (!release);
}
main();
