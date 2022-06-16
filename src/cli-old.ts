#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
let promptPath = "";
let reloadCache = [`${chalk.red("Close")}`];
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
  `${chalk.red("Close")}`,
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
  `${chalk.red("Close")}`,
  `rates`,
  `addresslist`,
  `receipt`,
];

// Display Functions/////////////////////////////////////////////////////////////////////////////
async function title() {
  console.clear();
  const msg = `Andromeda CLI`;

  figlet(msg, (_err: any, data: any) => {
    console.log(gradient("red", "orange", "red").multiline(data));
  });
  await sleep(20);
}

async function subTitle() {
  const rainbowTitle = chalkAnimation.karaoke(
    "Andromeda Command Line Interface"
  );

  await sleep(20);
  rainbowTitle.stop();
}

// Common Functions/////////////////////////////////////////////////////////////////////////////
async function ask() {
  //In cases of reloaded prompts (askAgain has a value) the process is reloaded with a data default
  if (!askAgain) {
    const answers = await inquirer.prompt({
      name: "command",
      type: "input",
      message: "$" + `${promptPath}` + ">",
    });

    reloadCache.unshift(answers.command); //Loads latest command attempt to cache for reference
    return answers;
  } else {
    const answers = await inquirer.prompt({
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
  const rCache = await inquirer.prompt({
    name: "selection",
    type: "rawlist",
    message: `Select from recent commands (or ${chalk.red("Close")} to exit)\n`,
    choices: reloadCache,
  });
  return rCache.selection;
}
// Help Functions/////////////////////////////////////////////////////////////////////////////
async function command_list() {
  console.log(`
    ${chalk.bold.gray(
      "wallet"
    )} - Specify the user wallet to use for chain interactions.
    ${chalk.bold.gray("prompt <cmd>")} - Run(${chalk.bold.blueBright(
    "create"
  )} | ${chalk.bold.cyan("execute")} | ${chalk.bold.greenBright(
    "query"
  )}) with an entry prompt format.
    ${chalk.bold.blueBright("create")} - Creates an ADO to publish to the chain.
    ${chalk.bold.hex(adoColor)(
      "publish"
    )} - Publish the created ADO to the chain.
    ${chalk.bold.cyan("execute")} - Executes a command against a published ADO.
    ${chalk.bold.greenBright("query")} - Requests data from a published ADO.
    ${chalk.bold.magenta(
      "list"
    )} - Shows a list of available ADOs to create / or your published ADOs.
    ${chalk.bold.gray("help")} - Show a list of available commands.
    ${chalk.bold.gray(
      "<cmd> --help"
    )} - Show the helper text for the specified command.
    ${chalk.bold.gray(
      "reload"
    )} - Provides a selection list of previously run commands.
    ${chalk.bold.gray("clear")} - Clears the console of current content.
    ${chalk.bold.red("exit")} - Close the terminal.
    `);
}

async function base_helper() {
  const base = await inquirer.prompt({
    name: "name",
    type: "list",
    message: `Select a listed Base ADO for more information (or ${chalk.red(
      "Close"
    )} to exit)\n`,
    choices: baseHelperSelections,
  });
  return base.name;
}

async function module_helper() {
  const module = await inquirer.prompt({
    name: "name",
    type: "list",
    message: `Select a listed module for more information (or ${chalk.red(
      "Close"
    )} to exit)\n`,
    choices: moduleHelperSelections,
  });
  return module.name;
}

// Wallet Functions/////////////////////////////////////////////////////////////////////////////
async function checkConnected() {
  if (!promptPath) {
    console.log(
      `${chalk.red(
        `You will need to load a user key in order to run publishing processes.
        ${chalk.greenBright('Try using the "')}${chalk.bold.gray(
          "wallet"
        )}${chalk.greenBright('" command to load a user key.')}`
      )}`
    );
    return "";
  } else {
    return "true";
  }
}

async function addWallet() {
  const answer = await inquirer.prompt({
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

async function processWallet(answer: string) {
  const spinner = createSpinner("Loading Key...").start();
  if (answer != "Cancel" && answer != "Add A New Key") {
    await sleep(2000);
  } else {
    spinner.error({
      text: `Action canceled.`,
    });
  }

  switch (answer) {
    case "terra89fd98fd98dds":
      spinner.error({ text: `Failed to load: ${chalk.gray(answer)}` });
      break;
    case "Unload Current Key":
      if (promptPath) {
        spinner.error({ text: `Unloaded Key: ${chalk.gray(promptPath)}` });
        promptPath = "";
      } else {
        spinner.error({
          text: `No key found to unload! ${chalk.gray(promptPath)}`,
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
        text: `Successfully loaded: ${chalk.gray(answer)}.`,
      });
      promptPath = answer;
      break;
  }
  return promptPath;
}

async function wallet_selection() {
  const answers = await inquirer.prompt({
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
  let response: any = "";
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
           ${chalk.bold.gray(
             "reload"
           )} - Provides a selection list of previously run commands.`);
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
        ${chalk.bold.gray("wallet")} - Opens the wallet selection menu

        Arguments:
        ${chalk.gray("unload | -u")} - Unloads the currently loaded user key
        `);
        break;
      case "wallet -u":
      case "wallet unload":
        const spinner = createSpinner("Loading Key...").start();
        sleep(1000);
        if (promptPath) {
          spinner.error({ text: `Unloaded Key: ${chalk.gray(promptPath)}` });
          promptPath = "";
        } else {
          spinner.error({
            text: `No key found to unload! ${chalk.gray(promptPath)}`,
          });
        }
        break;
      case "wallet":
        await wallet_selection();
        break;
      // List //////////////////////
      case "list":
        console.log(
          `${chalk.red(
            "You need to specify what you are trying to list. Try an option listed below."
          )}`
        );
      case "list --help":
        console.log(`
        ${chalk.bold.magenta(
          "list"
        )} - Provides a listing of the specified list type

        Arguments:
        ${chalk.hex(adoColor)(
          "ados"
        )} - Lists the published ADOs related to the loaded key
        ${chalk.hex(baseColor)(
          "base"
        )} - Lists the available Base ADOs to use in the ${chalk.bold.blueBright(
          "create"
        )} command 
        ${chalk.hex(moduleColor)(
          "module"
        )} - Lists the available modules to use in the ${chalk.bold.blueBright(
          "create"
        )} command 
        ${chalk.hex(primitveColor)(
          "prim"
        )} - Lists the available primitives to use in the ${chalk.bold.blueBright(
          "create"
        )} command
        ${chalk.hex(execColor)(
          "exec"
        )} - Lists the available actions for the ${chalk.bold.cyan(
          "execute"
        )} command
      `);
        break;
      // ADOs
      case "list ado":
      case "list ados":
        if (await checkConnected()) {
          console.log(`${chalk.bold.blueBright("ados")}`);
        }
        break;
      // Base
      case "list base":
        response = await base_helper();
        //Load review data of response
        switch (response) {
          case "cw20":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("cw20")}${chalk.gray(
                "(name, symbol, decimals, [initial_balances], ?<mint>, ?<marketing>)"
              )}
            ${chalk.bold.gray("<mint> = ")}${chalk.gray("[minter, ?cap]")}
            ${chalk.bold.gray("<marketing> = ")}${chalk.gray(
                "[?project, ?description, ?marketing, ?logo]"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/ado-classes/cw-20-token"
              )}
            `
            );
            break;
          case "splitter":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("splitter")}${chalk.gray(
                "(<recipient>)"
              )}
            ${chalk.bold.gray("<recipient> = ")}${chalk.gray(
                "[addr, percent]"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/ado-classes/andromeda-splitter"
              )}
            `
            );
            break;
          case "timelock":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("timelock")}${chalk.gray(
                "()"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/ado-classes/timelock"
              )}
            `
            );
            break;
        }
        break;

      case "list module":
        response = await module_helper();
        //Load review data of response
        switch (response) {
          case "rates":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("rates")}${chalk.gray(
                "(rate_type, is_additive, description, [recivers])"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/modules/rates-module"
              )}
            `
            );
            break;
          case "addresslist":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("addresslist")}${chalk.gray(
                "(is_inclusive, [operators])"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/modules/address-list-module"
              )}
            `
            );
            break;
          case "receipt":
            console.log(
              `   ${chalk.bold.hex(moduleColor)("receipt")}${chalk.gray(
                "(minter, [operators])"
              )}\n    ${chalk.blue.underline(
                "https://docs.andromedaprotocol.io/andromeda/modules/receipt-module"
              )}
            `
            );
            break;
          default:
            //console.log("Failed to find information.");
            break;
        }
        break;
      // Publish //////////////////////
      case "publish --help":
        console.log(`
        ${chalk.bold.hex(adoColor)(
          "publish"
        )} - Submit the currently created message to be published to the chain

        Arguments:
        ${chalk.gray("-proof")} - Show the currently constructed message
        ${chalk.gray("-clear")} - Clear the currently constructed message
        `);
        break;
      case "publish":
        if (await checkConnected()) {
          console.clear();
          title();
          let spinner = createSpinner("Publishing: " + publishMessage).start();
          await sleep(4500);
          console.log(publishMessage);
          // spinner.success({
          //   text: `Success: Find the transactions at ${chalk.blue.underline(
          //     "tx78ds08dsa654df"
          //   )}.`,
          // });
          spinner.error({
            text: `Failed to Publish: ${chalk.red(
              "Publishing encountered error response of 503."
            )}`,
          });
        }
        break;
      case "publish -proof":
        if (publishMessage) {
          console.log(publishMessage);
        } else {
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
            console.log(`${chalk.bold.blueBright(response.command.slice(7))}`);
            publishMessage = response.command.slice(7);
          }
          break;
        }

        console.log(
          'Unknown command: "' +
            response.command +
            `" Try "${chalk.bold.gray(
              "help"
            )}" or "--help" for a list of commands.`
        );
        break;
    }
  } while (!release);
}

main();
