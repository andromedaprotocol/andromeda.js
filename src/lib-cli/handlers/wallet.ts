import chalk from "chalk";
import Table from "cli-table";
import inquirer from "inquirer";
import { handle } from "../cmd";
import { logTableConfig } from "../common";
import { Commands } from "../types";
import { WalletStore, Wallet } from "@andromeda/andromeda-js";
import config from "../config";
import { client } from "./chain";

let currentWallet = "";
const store = new WalletStore();

export const commands: Commands = {
  add: {
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
      const chainId = config.get("chain.chainId");
      await listWallets(store.getWallets(chainId));
    },
    color: chalk.white,
    description: "Lists all added wallets",
  },
};

async function addWallet(input: string) {
  const trimmed = input.trim();
  let mnemonic = trimmed;
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  if (trimmed.length === 0) {
    const mnemonicInput = await inquirer.prompt({
      type: "input",
      message: "Input the wallet mnemonic:",
      name: "addwalletmnemonic",
      validate: (input: string) => {
        return input.trim().length > 0;
      },
    });

    mnemonic = mnemonicInput.addwalletmnemonic.trim();
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

  const newWallet = store.addWallet(
    mnemonic,
    config.get("chain.chainId"),
    name
  );
  console.log(chalk.green("Wallet added!"));

  if (wallets.length === 0) {
    setWallet(newWallet);
  }
}

async function removeWalletHandler(input: string) {
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
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
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
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
    store.removeWalletByIndex(idx, chainId);
    if (wallet.name === currentWallet) {
      currentWallet = "";
    }
  }
}

async function removeWalletByNameOrAddress(input: string) {
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
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
    store.removeWallet(input, chainId);
    if (wallet.name === currentWallet) {
      currentWallet = "";
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
  ${chalk.green("wallet add")}
      `
    );
    return;
  }
  const walletTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  for (let i = 0; i < wallets.length; i++) {
    const wallet = wallets[i];
    const isCurrent = wallet.name === currentWallet;
    walletTable.push([
      isCurrent ? "*" : "",
      isCurrent ? chalk.green(wallet.name ?? i) : wallet.name ?? i,
      isCurrent
        ? chalk.green((await wallet.getFirstOfflineSigner()) ?? i)
        : wallet.mnemonic ?? i,
    ]);
  }
  console.log(walletTable.toString());
}

async function setWallet(wallet: Wallet) {
  const signer = await wallet.getWallet();
  const chainUrl = config.get("chain.chainUrl");
  await client.connect(chainUrl, signer);
}

export default walletHandler;
