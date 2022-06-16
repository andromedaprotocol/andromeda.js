import chalk from "chalk";
import Table from "cli-table";
import inquirer from "inquirer";
import { handle } from "../cmd";
import { logTableConfig } from "../common";
import { Commands, Wallet } from "../types";

let wallets: Wallet[] = [];
let currentWallet = 0;

export const commands: Commands = {
  recover: {
    handler: addWallet,
    color: chalk.green,
    description: "Recovers a wallet by a given mnemonic",
  },
  rm: {
    handler: removeWalletHandler,
    color: chalk.red,
    description: "Remove a wallet by address",
  },
  list: {
    handler: async () => {
      await listWallets(wallets);
    },
    color: chalk.white,
    description: "Lists all added wallets",
  },
};

async function addWallet(input: string) {
  const trimmed = input.trim();
  let mnemonic = trimmed;
  if (trimmed.length === 0) {
    const addressInput = await inquirer.prompt({
      type: "input",
      message: "Input the wallet mnemonic:",
      name: "addwalletmnemonic",
      validate: (input: string) => {
        return input.trim().length > 0;
      },
    });

    mnemonic = addressInput.addwalletmnemonic.trim();
  }
  const nameInput = await inquirer.prompt({
    type: "input",
    message: "Input the wallet name (optional):",
    name: "addwalletname",
  });
  const name =
    nameInput.addwalletname.trim().length > 0
      ? nameInput.addwalletname.trim()
      : undefined;

  wallets.push({ mnemonic, name });
  console.log(chalk.green("Wallet added!"));
}

async function removeWalletHandler(input: string) {
  if (input.trim().length === 0) {
    const { selection } = await inquirer.prompt({
      name: "selection",
      type: "list",
      message: "Select a wallet to remove",
      choices: [...wallets.map((wallet) => wallet.mnemonic), "cancel"],
    });

    if (selection !== "cancel") {
      await removeWalletByNameOrAddress(selection);
    }
  } else {
    const walletInput = input.split(" ")[0].trim();
    try {
      const idx = parseInt(walletInput);
      await removeWalletByIndex(idx);
    } catch (error) {
      await removeWalletByNameOrAddress(walletInput);
    }
  }
}

async function removeWalletByIndex(idx: number) {
  if (idx >= wallets.length) {
    console.error(
      chalk.red(
        `Invalid input. Wallet index must be between 0 and ${
          wallets.length - 1
        }.`
      )
    );
    return;
  }

  const wallet = wallets[idx];
  const confirmed = await inquirer.prompt({
    name: "rmwalletconfirm",
    type: "confirm",
    message: `Are you sure you want to remove wallet ${
      wallet.name ?? wallet.mnemonic.trim()
    }?`,
  });

  if (confirmed) {
    wallets = wallets.filter((_, i) => i !== idx);
    if (wallet.mnemonic === wallets[currentWallet].mnemonic) {
      currentWallet = 0;
    }
  }
}

async function removeWalletByNameOrAddress(input: string) {
  const wallet = wallets.find(
    (wallet) => wallet.mnemonic === input.trim() || wallet.name === input.trim()
  );
  if (!wallet) {
    console.log(
      chalk.red(`Could not find wallet with address ${input.trim()}`)
    );
    return;
  }
  const confirmed = await inquirer.prompt({
    name: "rmwalletconfirm",
    type: "confirm",
    message: `Are you sure you want to remove wallet ${
      wallet.name ?? wallet.mnemonic.trim()
    }?`,
  });
  if (confirmed) {
    wallets = wallets.filter(
      (wallet) =>
        wallet.mnemonic !== input.trim() && wallet.name !== input.trim()
    );
    if (wallet.mnemonic === wallets[currentWallet].mnemonic) {
      currentWallet = 0;
    }
  }
}

async function walletHandler(input: string) {
  return handle(input, commands);
}

async function listWallets(wallets: Wallet[]) {
  if (wallets.length === 0) {
    console.log(chalk.red("No wallets to display"));
    console.log(
      `
You can add a wallet by using the add command:
  ${chalk.green("wallet add <address> <name?>")}
      `
    );
    return;
  }
  const walletTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  wallets.forEach((wallet, idx) =>
    walletTable.push([
      idx === currentWallet ? "*" : "",
      idx === currentWallet
        ? chalk.green(wallet.name ?? idx)
        : wallet.name ?? idx,
      idx === currentWallet
        ? chalk.green(wallet.mnemonic ?? idx)
        : wallet.mnemonic ?? idx,
    ])
  );
  console.log(walletTable.toString());
}

export default walletHandler;
