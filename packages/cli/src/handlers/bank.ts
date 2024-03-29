import { Coin, parseCoins } from "@cosmjs/amino";
import { promptWithExit } from "cmd";
import pc from "picocolors";
import { displaySpinnerAsync, printTransactionUrl } from "../common";
import State from "../state";
import { Commands } from "../types";
import { validateAddressInput } from "./utils";

const { client } = State;

export const commands: Commands = {
  send: {
    handler: handleSend,
    color: pc.green,
    description: "Send tokens to another address",
    usage: "bank send <recipient address> <amount>",
    inputs: [
      {
        requestMessage: "Input Recipient Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input Amount to Send:",
        validate: (input: string) => {
          try {
            parseCoins(input);
            return true;
          } catch (error) {
            console.log();
            console.log(pc.red("Invalid amount to send"));
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
    color: pc.blue,
    description: "Request a token balance for a given address",
    usage: "bank balance <denom> <address>",
    inputs: [
      {
        requestMessage: "Input Denom:",
      },
      {
        requestMessage: `Input Address${
          typeof State.wallets.currentWallet !== "undefined"
            ? " (Leave empty to see your balance)"
            : ""
        }:`,
        validate: (input: string) => {
          if (
            input.length === 0 &&
            typeof State.wallets.currentWallet !== "undefined"
          )
            return true;
          return validateAddressInput(input);
        },
      },
    ],
  },
};

/**
 * Sends tokens to a given recipient
 * @param input
 * @returns
 */
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

  const confirm = await promptWithExit({
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
  console.log(pc.green(`Sent ${coinsString} to ${recipient}!`));
  printTransactionUrl(resp?.transactionHash!);
}

/**
 * Queries token balance for a given address. Uses current wallet if no address is provided.
 * @param inputs
 */
async function handleBalance(inputs: string[]) {
  const [denom, addr] = inputs;

  const resp = await client.getBalance(denom, addr);
  console.log(resp);
  console.log();
  console.log(pc.bold("Balance"));
  console.log(`${denom}: ${resp ? `${pc.green(resp.amount)}` : 0}`);
}

export default commands;
