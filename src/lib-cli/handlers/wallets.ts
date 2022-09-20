import { Wallet, WalletStore } from "@andromeda/andromeda-js";
import chalk from "chalk";
import Table from "cli-table";
import inquirer from "inquirer";
import { logTableConfig } from "../common";
import config, { storage } from "../config";
import { Commands, Flags } from "../types";
import { connectClient } from "./client";

const store = new WalletStore();
const STORAGE_FILE = "wallets.json";

export async function loadWallets() {
  try {
    const savedWalletsData = storage.loadStorageFile(STORAGE_FILE);
    try {
      const savedWallets = JSON.parse(savedWalletsData.toString());
      const { wallets, defaults } = savedWallets;
      wallets.forEach(
        ({
          mnemonic,
          chainId,
          name,
        }: {
          mnemonic: string;
          name: string;
          chainId: string;
        }) => {
          store.addWallet(chainId, name, mnemonic);
        }
      );
      const chainIds = Object.keys(defaults);
      chainIds.forEach((chainId) => {
        const walletData = defaults[chainId];
        store.setDefaultWallet(
          chainId,
          new Wallet(walletData.name, walletData.mnemonic)
        );
      });
      const chainId = config.get("chain.chainId");
      const currentWallet = store.getDefaultWallet(chainId);
      if (currentWallet) {
        await setCurrentWallet(currentWallet, false);
        const signer = await currentWallet.getWallet(chainId);
        return signer;
      }
      return;
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

storage.addExitHandler(() => {
  const storedConfig = {
    wallets: store.getAllWallets().map(({ chainId, wallet }) => ({
      mnemonic: wallet.mnemonic,
      name: wallet.name,
      chainId,
    })),
    defaults: store.defaultWallets,
  };

  const currentWallet = store.getDefaultWallet(config.get("chain.chainId"));
  if (currentWallet)
    storage.writeStorageFile(STORAGE_FILE, JSON.stringify(storedConfig));
});

export const commands: Commands = {
  add: {
    handler: addWalletHandler,
    color: chalk.green,
    description: "Adds a new wallet",
    usage: "wallets add <name?>",
    flags: {
      recover: {
        description: "Recovers a wallet by mnemonic",
      },
    },
    inputs: [
      {
        requestMessage: "Input Wallet Name:",
        transform: parseWalletName,
      },
    ],
  },
  rm: {
    handler: removeWalletHandler,
    color: chalk.red,
    description: "Remove a wallet by address",
    usage: "wallets rm <name?>",
    inputs: [
      {
        requestMessage: "Select wallet to remove:",
        options: () =>
          store.getWallets(config.get("chain.chainId")).map(({ name }) => name),
      },
    ],
  },
  use: {
    handler: useWalletHandler,
    color: chalk.blue,
    description: "Sets the default wallet to use",
    usage: "wallets use <name>",
    inputs: [
      {
        requestMessage: "Select wallet to use:",
        options: () =>
          store.getWallets(config.get("chain.chainId")).map(({ name }) => name),
      },
    ],
  },
  list: {
    handler: listWalletsHandler,
    color: chalk.white,
    description: "Lists all added wallets",
    usage: "wallets list",
  },
};

async function validateMnemonic(input: string) {
  if (
    !input ||
    input.length === 0 ||
    input.split(" ").filter((str) => str.trim().length > 0).length !== 24
  )
    return false;

  try {
    const newWallet = new Wallet("", input);
    await newWallet.getWallet(config.get("chain.chainId"));
  } catch (error) {
    console.error(chalk.red(error));
    return false;
  }

  return true;
}

function parseWalletName(name: string) {
  const parsedName = name.trim().split(" ").join("");
  if (parsedName.length === 0) {
    console.log(chalk.red("Invalid wallet name"));
    return "";
  }

  return parsedName;
}

async function addWalletHandler(input: string[], flags: Flags) {
  let [name] = input;
  let mnemonic;
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  while (flags.recover && !(await validateMnemonic(mnemonic))) {
    if (mnemonic) console.error(chalk.red("Invalid mnemonic"));
    const mnemonicInput = await inquirer.prompt({
      type: "input",
      message: "Input the wallet mnemonic:",
      name: "addwalletmnemonic",
      validate: (input: string) => {
        return input.trim().length > 0;
      },
    });

    mnemonic = mnemonicInput.addwalletmnemonic.trim();
    if (mnemonic === "exit") return;
  }

  const newWallet = store.addWallet(
    config.get("chain.chainId"),
    name,
    mnemonic
  );
  try {
    await newWallet.getWallet(config.get("chain.chainId"));
  } catch (error) {
    console.error(chalk.red(error));
    return;
  }
  console.log(chalk.green(`Wallet ${name} added!`));

  if (!mnemonic || mnemonic.length === 0) {
    newWalletConfirmation(newWallet.mnemonic);
  }

  if (wallets.length === 0) {
    await setCurrentWallet(newWallet);
  }
}

function newWalletConfirmation(_seed: string) {
  console.log();
  console.log("Your seed phrase is:");
  console.log(chalk.bold("x x x"));
  console.log();
  console.log(
    chalk.red(
      chalk.bold(
        "Do not share this with anyone. Please make sure to store this for future reference, without it you cannot recover your wallet."
      )
    )
  );
}

async function removeWalletHandler(input: string[]) {
  const [walletId] = input;
  try {
    const idx = parseInt(walletId);
    await removeWalletByIndex(idx);
  } catch (error) {
    await removeWalletByNameOrAddress(walletId);
  }
}

async function removeWalletByIndex(idx: number) {
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  if (idx >= wallets.length) {
    throw new Error(
      `Invalid input. Wallet index must be between 0 and ${wallets.length - 1}.`
    );
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
  }
}

async function removeWalletByNameOrAddress(input: string) {
  const chainId = config.get("chain.chainId");
  const wallet = await store.getWallet(chainId, input.trim());
  if (!wallet) {
    throw new Error(`Could not find wallet with name/address ${input.trim()}`);
  }
  const confirmed = await inquirer.prompt({
    name: "rmwalletconfirm",
    type: "confirm",
    message: `Are you sure you want to remove wallet ${
      wallet.name ?? wallet.mnemonic.trim()
    }?`,
  });
  if (confirmed) {
    await store.removeWallet(input, chainId);
  }
}

async function listWalletsHandler() {
  const chainId = config.get("chain.chainId");
  await listWallets(store.getWallets(chainId));
}

async function listWallets(wallets: Wallet[]) {
  if (wallets.length === 0) {
    throw new Error(`No wallets to display

You can add a wallet by using the add command:
  ${chalk.green("wallets add")}
      `);
  }
  const walletTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  for (let i = 0; i < wallets.length; i++) {
    const wallet = wallets[i];
    const isCurrent =
      getCurrentWallet() && wallet.name === getCurrentWallet().name;
    const addr = await wallet.getFirstOfflineSigner(
      config.get("chain.chainId")
    );
    walletTable.push([
      isCurrent ? "*" : "",
      isCurrent ? chalk.green(wallet.name ?? i) : wallet.name ?? i,
      isCurrent ? chalk.green(addr ?? i) : addr ?? i,
    ]);
  }
  console.log(walletTable.toString());
}

async function useWalletHandler(input: string[]) {
  const [walletName] = input;
  const chainId = config.get("chain.chainId");
  const wallet = await store.getWallet(chainId, walletName);
  if (!wallet) {
    throw new Error("Wallet not found");
  } else {
    await setCurrentWallet(wallet);
  }
}

export async function setCurrentWallet(wallet: Wallet, autoConnect = true) {
  const chainId = config.get("chain.chainId");
  const signer = await wallet.getWallet(chainId);
  store.setDefaultWallet(chainId, wallet);
  if (!autoConnect) return signer;
  try {
    await connectClient(signer);
    return signer;
  } catch (error) {
    console.warn();
    console.warn(error);
    return;
  }
}

export function getCurrentWallet() {
  const chainId = config.get("chain.chainId");
  const wallet = store.getDefaultWallet(chainId);

  return wallet;
}

export default commands;
