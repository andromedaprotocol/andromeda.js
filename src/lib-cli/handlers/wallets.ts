import { Wallet, WalletStore } from "@andromeda/andromeda-js";
import { GasPrice } from "@cosmjs/stargate";
import chalk from "chalk";
import Table from "cli-table";
import inquirer from "inquirer";
import { logTableConfig } from "../common";
import config, { storage } from "../config";
import { Commands, Flags } from "../types";
import { client } from "./chain";

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
      const currentWallet = store.getDefaultWallet(config.get("chain.chainId"));
      if (currentWallet) await setCurrentWallet(currentWallet);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  } catch (error) {
    console.error(error);
  }
}

// loadWallets();

storage.addExitHandler(() => {
  const storedConfig = {
    wallets: store.getAllWallets().map(({ chainId, wallet }) => ({
      mnemonic: wallet.mnemonic,
      name: wallet.name,
      chainId,
    })),
    defaults: store.defaultWallets,
  };

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
  },
  rm: {
    handler: removeWalletHandler,
    color: chalk.red,
    description: "Remove a wallet by address",
    usage: "wallets rm <name?>",
  },
  use: {
    handler: useWalletHandler,
    color: chalk.blue,
    description: "Sets the default wallet to use",
    usage: "wallets use <name>",
  },
  list: {
    handler: listWalletsHandler,
    color: chalk.white,
    description: "Lists all added wallets",
    usage: "wallets list",
  },
};

function validateMnemonic(input: string) {
  return (
    input &&
    input.length > 0 &&
    input.split(" ").filter((str) => str.trim().length > 0).length === 24
  );
}

async function addWalletHandler(input: string[], flags: Flags) {
  let [name] = input;
  let mnemonic;
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  while (flags.recover && !validateMnemonic(mnemonic)) {
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
  }

  if (!name) {
    const nameInput = await inquirer.prompt({
      type: "input",
      message: "Input the wallet name:",
      name: "addwalletname",
      validate: (input: string) => input.trim().length > 0,
    });
    name =
      nameInput.addwalletname.trim().length > 0
        ? nameInput.addwalletname.trim()
        : undefined;
  }

  const newWallet = store.addWallet(
    config.get("chain.chainId"),
    name,
    mnemonic
  );
  console.log(chalk.green("Wallet added!"));

  if (!mnemonic || mnemonic.length === 0) {
    newWalletConfirmation(newWallet.mnemonic);
  }

  if (wallets.length === 0) {
    await setCurrentWallet(newWallet);
  }
}

function newWalletConfirmation(seed: string) {
  console.log();
  console.log("Your seed phrase is:");
  console.log(chalk.bold(seed));
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
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  if (input.length === 0) {
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
    const [walletInput] = input;
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
    store.removeWallet(input, chainId);
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

async function setCurrentWallet(wallet: Wallet) {
  const signer = await wallet.getWallet(config.get("chain.chainId"));
  const { chainId, chainUrl, registryAddress, defaultFee } =
    config.get("chain");

  store.setDefaultWallet(chainId, wallet);
  try {
    await client.connect(chainUrl, signer, registryAddress, {
      gasPrice: GasPrice.fromString(defaultFee),
    });
  } catch (error) {
    console.warn(error);
    throw new Error("Could not connect to chain, please check your config");
  }
}

export function getCurrentWallet() {
  const chainId = config.get("chain.chainId");
  const wallet = store.getDefaultWallet(chainId);

  return wallet;
}

export default commands;
