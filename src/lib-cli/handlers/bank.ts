import { Coin, parseCoins } from "@cosmjs/amino";
import chalk from "chalk";
import inquirer from "inquirer";
import { displaySpinnerAsync, printTransactionUrl } from "../common";
import { Commands } from "../types";
import client from "./client";

export const commands: Commands = {
  send: {
    handler: handleSend,
    color: chalk.green,
    description: "Send tokens to another address",
    usage: "bank send <recipient address?> <amount?>",
    inputs: [
      {
        requestMessage: "Input Recipient Address:",
      },
      {
        requestMessage: "Input Amount to Send:",
        validate: (input: string) => {
          try {
            parseCoins(input);
            return true;
          } catch (error) {
            console.log();
            console.log(chalk.red("Invalid amount to send"));
            return false;
          }
        },
        transform: (input: string) => {
          return parseCoins(input);
        },
      },
    ],
  },
  balance: {
    handler: handleBalance,
    color: chalk.green,
    description: "Send tokens to another address",
    usage: "bank balance <token?> <address?>",
    inputs: [
      {
        requestMessage: "Input Amount Token:",
      },
      {
        requestMessage:
          "Input Recipient Address (Leave empty to see your balance):",
      },
    ],
  },
};

async function handleSend(input: string[]) {
  const [recipient, amount] = input;
  if (!amount) {
    console.error(`Invalid amount input ${amount}`);
    return;
  }
  const coins = amount as unknown as Coin[];
  const coinsString = coins
    .map((coin) => `${coin.amount}${coin.denom}`)
    .join(", ");
  console.log(coinsString);

  const confirm = await inquirer.prompt({
    type: "confirm",
    name: "confirmsend",
    message: `Are you sure you want to send ${coinsString} to ${recipient}?`,
  });

  if (!confirm.confirmsend) return;

  const resp = await displaySpinnerAsync(
    "Sending tokens...",
    async () => await client.sendTokens(recipient, coins)
  );

  console.log();
  console.log(chalk.green(`Sent ${coinsString} to ${recipient}!`));
  printTransactionUrl(resp?.transactionHash!);
}

async function handleBalance(inputs: string[]) {
  const [denom, addr] = inputs;

  const resp = await client.getBalance(denom, addr);

  console.log();
  console.log(chalk.bold("Balance"));
  console.log(`${denom}: ${resp ? `${chalk.green(resp.amount)}` : 0}`);
}

export default commands;
