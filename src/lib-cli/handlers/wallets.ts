import { Wallet } from "@andromeda/andromeda-js";
import pc from "picocolors";
import Table from "cli-table";
import inquirer from "inquirer";
import { logTableConfig } from "../common";
import config from "../config";
import State from "../state";
import { Commands, Flags } from "../types";

const store = State.wallets;

const commands: Commands = {
  add: {
    handler: addWalletHandler,
    color: pc.green,
    description:
      "Adds a new wallet. Can be used with the --recover flag to add a wallet by mnemonic.",
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
    color: pc.red,
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
    color: pc.blue,
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
    color: pc.white,
    description: "Lists all added wallets",
    usage: "wallets list",
  },
};

/**
 * Validates a given mnemonic
 * @param input
 * @returns Whether the probided mnemonic is valid
 */
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
    console.error(pc.red(error as string));
    return false;
  }

  return true;
}

/**
 * Strips all whitespace from a wallet name
 * @param name
 * @returns The stripped wallet name
 */
function parseWalletName(name: string) {
  const parsedName = name.trim().split(" ").join("");
  if (parsedName.length === 0) {
    console.log(pc.red("Invalid wallet name"));
    return "";
  }

  return parsedName;
}

/**
 * Adds a wallet with given name. Can be used to recover a wallet with a mnemonic or generate a new one.
 * @param input
 * @param flags
 * @returns
 */
async function addWalletHandler(input: string[], flags: Flags) {
  let [name] = input;
  let mnemonic;
  const chainId = config.get("chain.chainId");
  const wallets = store.getWallets(chainId);
  while (flags.recover && !(await validateMnemonic(mnemonic))) {
    if (mnemonic) console.error(pc.red("Invalid mnemonic"));
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
    console.error(pc.red(error as string));
    return;
  }
  console.log(pc.green(`Wallet ${name} added!`));

  if (!mnemonic || mnemonic.length === 0) {
    newWalletConfirmation(newWallet.mnemonic);
  }

  if (wallets.length === 0) {
    await setCurrentWallet(newWallet);
  }
}

/**
 * Prompts the user to save their newly generated wallet menmonic
 * @param seed The seed phrase for the wallet
 */
function newWalletConfirmation(seed: string) {
  console.log();
  console.log("Your seed phrase is:");
  console.log(pc.bold(seed));
  console.log();
  console.log(
    pc.red(
      pc.bold(
        "Do not share this with anyone. Please make sure to store this for future reference, without it you cannot recover your wallet."
      )
    )
  );
}

/**
 * Removes a wallet by name/address/index
 * @param input
 */
async function removeWalletHandler(input: string[]) {
  const [walletId] = input;
  try {
    const idx = parseInt(walletId);
    await removeWalletByIndex(idx);
  } catch (error) {
    await removeWalletByNameOrAddress(walletId);
  }
}

/**
 * Removes a wallet by index
 * @param idx The index of the wallet to remove
 */
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

/**
 * Removes a wallet by given name or address
 * @param input
 */
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

/**
 * Prints all wallets in table format
 */
async function listWalletsHandler() {
  const chainId = config.get("chain.chainId");
  await listWallets(store.getWallets(chainId));
}

/**
 * Prints all provided wallets in table format
 * @param wallets
 */
async function listWallets(wallets: Wallet[]) {
  const chainId = config.get("chain.chainId");
  if (wallets.length === 0) {
    throw new Error(`No wallets to display

You can add a wallet by using the add command:
  ${pc.green("wallets add")}
      `);
  }
  const walletTable = new Table({
    ...logTableConfig,
    colWidths: [2],
  });
  const current = store.getDefaultWallet(chainId);

  for (let i = 0; i < wallets.length; i++) {
    const wallet = wallets[i];
    // Highlight the currently selected wallet
    const isCurrent = current && wallet.name === current.name;
    const addr = await wallet.getFirstOfflineSigner(chainId);
    walletTable.push([
      isCurrent ? "*" : "",
      isCurrent ? pc.green(wallet.name ?? i) : wallet.name ?? i,
      isCurrent ? pc.green(addr ?? i) : addr ?? i,
    ]);
  }
  console.log(walletTable.toString());
}

/**
 * Sets the default wallet for the current chain
 */
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

/**
 * Sets the currently used wallet
 * @param wallet
 * @param autoConnect
 * @returns A signer if the wallet is valid
 */
export async function setCurrentWallet(wallet: Wallet, autoConnect = true) {
  const chainId = config.get("chain.chainId");
  const signer = await wallet.getWallet(chainId);
  store.setDefaultWallet(chainId, wallet);
  if (!autoConnect) return signer;

  try {
    await State.connectClient();
    return signer;
  } catch (error) {
    console.warn();
    console.warn(error);
    return;
  }
}

export default commands;
