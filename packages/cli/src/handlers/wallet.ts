import { Wallet } from "@andromedaprotocol/andromeda.js";
import pc from "picocolors";
// import Table from "cli-table";
import { Bip39, Random } from "@cosmjs/crypto";
import Table from "cli-table";
import { promptWithExit, title } from "..";
import { clearPreviousLines, displaySpinnerAsync, logTableConfig, ordinalSuffix } from "../common";
import config from "../config";
import State, { StoredWalletData } from "../state";
import { Commands } from "../types";


const commands: Commands = {
    recover: {
        handler: recoverWalletHandler,
        color: pc.green,
        description: "Add a wallet using mnemonic or private key",
        usage: "wallets recover <name> <passphrase> <mnemonic|private_key>",
        inputs: [
            {
                requestMessage: "Input Wallet Name:",
                validate: (input: string) => {
                    const wallet = State.wallets.getWallet(input);
                    return typeof wallet === "undefined"
                        ? true
                        : "Wallet name already in use for this chain";
                },
                transform: parseWalletName,
            },
            {
                requestMessage: "Input Passphrase:",
                validate: (input: string) => input.length > 0,
                hiddenInput: true,
            },
            {
                requestMessage: "Input Mnemonic or Private Key:",
                validate: (input: string) => input.trim().length > 0,
                hiddenInput: false,
            },
        ],
    },
    generate: {
        handler: generateWalletHandler,
        color: pc.green,
        description: "Generates a new wallet mnemonic",
        usage: "wallets generate <name> <passphrase>",
        inputs: [
            {
                requestMessage: "Input Wallet Name:",
                validate: (input: string) => {
                    const wallet = State.wallets.getWallet(input);
                    return typeof wallet === "undefined"
                        ? true
                        : "Wallet name already in use for this chain";
                },
                transform: parseWalletName,
            },
            {
                requestMessage: "Input Passphrase:",
                validate: (input: string) => input.length > 0,
                hiddenInput: true,
            },
        ],
    },
    rm: {
        handler: removeWalletHandler,
        color: pc.red,
        description: "Remove a wallet by address",
        usage: "wallets rm <name>",
        inputs: [
            {
                requestMessage: "Select wallet to remove:",
                options: () => State.wallets.wallets.map((wallet) => wallet.name),
            },
        ],
    },
    rename: {
        handler: renameWalletHandler,
        color: pc.white,
        description: "Remove a wallet by address",
        usage: "wallets rm <name>",
        disabled: () => !State.wallets.currentWallet,
        inputs: [
            {
                requestMessage: "New Name for wallet:",
            },
        ],
    },
    "migrate-legacy": {
        handler: migrateLegacyWalletHandler,
        color: pc.gray,
        description:
            "Migrates a legacy wallet that was created with old cli version",
        usage: "wallets migrate-legacy <name>",
        inputs: [
            {
                requestMessage: "Select wallet to migrate:",
                options: () => State.wallets.legacyWallets.wallets.map((wallet) => wallet.name),
            },
        ],
        disabled: () => State.wallets.legacyWallets.wallets.length === 0,
    },
    use: {
        handler: useWalletHandler,
        color: pc.blue,
        description: "Sets the default wallet to use",
        usage: "wallets use <name> [passphrase]",
        inputs: [
            {
                requestMessage: "Select wallet to use:",
                options: () => State.wallets.wallets.map((wallet) => wallet.name),
            }
        ],
    },
    list: {
        handler: listWalletsHandler,
        color: pc.white,
        description: "Lists all added wallets",
        usage: "wallets list",
    },
    reveal: {
        handler: revealWalletHandler,
        color: pc.red,
        description: "Reveal wallet Mnemonic or Private Key",
        usage: "wallets reveal <name> <passphrase>",
        inputs: [
            {
                requestMessage: "Select wallet:",
                options: () => State.wallets.wallets.map((wallet) => wallet.name),
            },
            {
                requestMessage: "Input Passphrase:",
                validate: (input: string) => input.length > 0,
                hiddenInput: true,
            },
        ],
    },
    'autosave': {
        handler: autosaveWalletHandler,
        color: pc.white,
        description: "Password are stored in keychain so you don't need to enter password everytime. Use this setting to disable default feature.",
        usage: "wallets autosave <enable|disable>",
        inputs: [
            {
                requestMessage: "Select wallet: ",
                options: () => State.wallets.wallets.map((wallet) => wallet.name),
            },
            {
                requestMessage: "Autosave: ",
                options: ['enable', 'disable'],
            },
        ],
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
        !(
            input.split(" ").filter((str) => str.trim().length > 0).length === 24 ||
            input.split(" ").filter((str) => str.trim().length > 0).length === 12
        )
    )
        return false;

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
 * Adds a wallet with given name and mnemonic/private_key
 * @param input
 * @param flags
 * @returns
 */
async function recoverWalletHandler(input: string[]) {
    let [name, passphrase, ...mnemonicOrPrivateKey] = input;

    let phrase = mnemonicOrPrivateKey.join(" ");

    if (mnemonicOrPrivateKey.length > 1) {
        const valid = await validateMnemonic(phrase);
        if (!valid) {
            console.error(pc.red("Invalid mnemonic"));
            const mnemonicInput = await promptWithExit({
                type: "input",
                message: "Input the wallet mnemonic:",
                name: "addwalletmnemonic",
                validate: (input: string) => {
                    return input.trim().length > 0;
                },
            });
            phrase = mnemonicInput.addwalletmnemonic.trim();
        }
    }

    if (phrase === "exit") return;
    if (!phrase.includes(" ")) {
        // If there is a space in phrase, then its probably private key
        const confirmed: boolean = await promptWithExit({
            name: "confirmprivatekey",
            type: "confirm",
            message: `Private Key are for advanced users, you will find mismatch in addresses. Do you want to proceed?`,
        }).then((res) => res.confirmprivatekey);
        if (!confirmed) {
            console.log("\nOperation Aborted!\n");
            return;
        }
    }

    if (passphrase.length > 0) {
        await promptWithExit({
            name: "repeatphrase",
            validate: (input: string) => {
                if (passphrase !== input) return "Passphrases do not match";

                return true;
            },
            message: "Repeat your passphrase:",
            type: "password",
        });
    }

    console.log("");
    try {
        const wallet = await State.wallets.generateWallet(name, passphrase, phrase);
        await setCurrentWallet(wallet, passphrase);
        console.log(pc.green(`Wallet ${name} added!`));
    } catch (error) {
        console.error(pc.red(error as string));
        return;
    }
}

/**
 * Adds a wallet with given name and mnemonic/private_key
 * @param input
 * @param flags
 * @returns
 */
async function generateWalletHandler(input: string[]) {
    let [name, passphrase] = input;

    if (passphrase.length > 0) {
        await promptWithExit({
            name: "repeatphrase",
            validate: (input: string) => {
                if (passphrase !== input) return "Passphrases do not match";

                return true;
            },
            message: "Repeat your passphrase:",
            type: "password",
        });
    }

    console.log("");
    const length = 4 * Math.floor((11 * 24) / 33);
    const entropy = Random.getBytes(length);
    const mnemonic = Bip39.encode(entropy).toString();
    await newWalletConfirmation(mnemonic);

    const newWallet = await State.wallets.generateWallet(name, passphrase, mnemonic);

    try {
        await newWallet.getWallet(passphrase);
    } catch (error) {
        console.error(pc.red(error as string));
        return;
    }
    console.log(pc.green(`Wallet ${name} added!`));
    await setCurrentWallet(newWallet, passphrase);
}

/**
 * Prompts the user to save their newly generated wallet menmonic
 * @param seed The seed phrase for the wallet
 */
async function newWalletConfirmation(seed: string) {
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

    let confirmed = false;
    while (!confirmed) {
        const confirmSaved = await promptWithExit({
            name: "confirm",
            type: "confirm",
            message: "Have you saved your seed phrase?",
        });
        confirmed = confirmSaved.confirm;
    }

    clearPreviousLines(5);
    const mnemonicLength = seed.split(" ").length;
    const inputIndices: number[] = [];
    while (inputIndices.length < 3) {
        const index = Math.floor(Math.random() * mnemonicLength);
        if (!inputIndices.includes(index)) inputIndices.push(index);
    }

    for (let i = 0; i < inputIndices.length; i++) {
        const index = inputIndices.sort((a, b) => a - b)[i];
        const answer = seed.split(" ")[index];
        await promptWithExit({
            name: "input",
            message: `Input the ${ordinalSuffix(
                index + 1
            )} word of your seed phrase:`,
            validate: (input: string) => {
                return input.trim() === answer ? true : "Incorrect answer";
            },
        });
    }
}

/**
 * Removes a wallet by name
 * @param input
 */
async function removeWalletHandler(input: string[]) {
    const [walletId] = input;
    await removeWalletByName(walletId);
}

/**
 * Removes a wallet by name
 * @param input
 */
async function renameWalletHandler(input: string[]) {
    const [newName] = input;
    if (!State.wallets.currentWallet) {
        console.log(pc.red("You need to connect to a wallet first to rename it"));
        return;
    }
    const confirmed = await promptWithExit({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${State.wallets.currentWallet?.name}?`,
    });
    if (confirmed.confirm) {
        await State.wallets.renameWallet(State.wallets.currentWallet?.name, newName);
        await title();
    }
}

/**
 * Removes a wallet by given name or address
 * @param input
 */
async function removeWalletByName(input: string) {
    const wallet = State.wallets.getWallet(input.trim());
    if (!wallet) {
        throw new Error(`Could not find wallet with name/address ${input.trim()}`);
    }
    const confirmed = await promptWithExit({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${wallet.name}?`,
    });
    if (confirmed) {
        await State.wallets.removeWallet(input);
    }
}

/**
 * Prints all wallets in table format
 */
async function listWalletsHandler() {
    await listWallets(State.wallets.wallets);
}

/**
 * Prints all provided wallets in table format
 * @param wallets
 */
async function listWallets(wallets: StoredWalletData[]) {
    if (wallets.length === 0) {
        throw new Error(`No wallets to display

You can create a new wallet by using the generate command:
  ${pc.green("wallets generate <name>")}
      `);
    }
    const walletTable = new Table({
        ...logTableConfig,
        colWidths: [2],
    });
    const current = State.wallets.currentWallet;

    const prefix = config.get("chain.addressPrefix");

    for (const wallet of wallets) {
        const data = [
            wallet.name,
            wallet.addresses[prefix] || "",
        ]
        // Highlight the currently selected wallet
        const isCurrent = current && wallet.name === current.name;

        walletTable.push(isCurrent ? ["*", ...data.map(d => pc.green(d))] : ["*", ...data]);
    }
    console.log(walletTable.toString());
}

/**
 * Sets the default wallet for the current chain
 */
async function useWalletHandler(input: string[]) {
    const [walletName, passphrase] = input;
    const wallet = State.wallets.getWallet(walletName);
    if (!wallet) {
        throw new Error("Wallet not found");
    } else {
        await setCurrentWallet(wallet, passphrase);
    }
}

/**
 * Migrate legacy a wallet by name
 * @deprecated will be removed in next update
 * @param input
 */
async function migrateLegacyWalletHandler(input: string[]) {
    const [walletId] = input;
    await migrateLegacyWallet(walletId);
}

/**
 * Removes a wallet by given name or address
 * @deprecated will be removed in next update
 * @param input
 */
async function migrateLegacyWallet(legacyName: string) {
    const name = await promptWithExit({
        name: "name",
        type: "input",
        message: "Enter new name for the wallet",
        default: legacyName,
        validate: (answer: string) => {
            const existing = State.wallets.wallets.some((w) => w.name === answer.trim());
            if (existing) {
                console.log();
                console.log(pc.red("Already have a wallet with this name"));
                return false;
            }
            return true;
        },
    });
    const updatedWallet = await State.wallets.migrateLegacyWallet(legacyName);
    if (!updatedWallet) return;
    updatedWallet.name = name.name.trim();
    State.wallets.addWallet(updatedWallet);
    State.wallets.removeLegacyWallet(legacyName);
}

/**
 * Sets the currently used wallet
 * @param wallet
 * @param autoConnect
 * @returns A signer if the wallet is valid
 */
export async function setCurrentWallet(
    wallet: Wallet,
    passphrase?: string,
) {
    passphrase = passphrase ?? (await State.wallets.getWalletPassphrase(wallet.name));
    const signer = await wallet.getWallet(passphrase);
    State.wallets.defaultWallet = wallet.name;

    try {
        await State.connectClient(passphrase);
        return signer;
    } catch (error) {
        console.warn();
        console.warn(error);
        return;
    }
}

/**
 * Removes a wallet by name
 * @param input
 */
async function revealWalletHandler(input: string[]) {
    const [walletId, passphrase] = input;
    const wallet = State.wallets.getWallet(walletId);
    if (!wallet) {
        console.log(pc.red(`No wallet with name - ${walletId}`));
        return;
    }
    const reveal = await promptWithExit({
        message: `Are you sure you want to reveal wallet - ${wallet.name}?`,
        type: "confirm",
        name: 'reveal'
    }).then(res => res.reveal);
    if (!reveal) return;
    const mnemonicOrPrivateKey = await wallet.decrypt(passphrase);
    console.log();
    if (mnemonicOrPrivateKey.includes(' ')) {
        console.log(`Wallet Mnemonic: `);
    } else {
        console.log(`Wallet Private Key: `)
    }
    console.log(pc.green(mnemonicOrPrivateKey));
    console.log()
}

/**
 * Reset keychain for selected wallet
 * @param input
 */
async function autosaveWalletHandler(input: string[]) {
    const [walletId, autosave] = input;
    const options = ["enable", "disable"];
    if (!options.includes(autosave)) {
        console.log(pc.red(`Invalid autosave option. Valid input - ${options.join(' | ')}`))
        return;
    }
    if (autosave === 'disable') {
        State.wallets.updateWallet(walletId, { storePassword: false });
        await displaySpinnerAsync("Removing keychain password...", () => State.wallets.removeKeychain(walletId));
    } else {
        State.wallets.updateWallet(walletId, { storePassword: true });
    }
}

export default commands;
