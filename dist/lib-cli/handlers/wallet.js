"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentWallet = exports.commands = void 0;
const andromeda_js_1 = require("@andromeda/andromeda-js");
const chalk_1 = __importDefault(require("chalk"));
const cli_table_1 = __importDefault(require("cli-table"));
const inquirer_1 = __importDefault(require("inquirer"));
const common_1 = require("../common");
const config_1 = __importStar(require("../config"));
const chain_1 = require("./chain");
const store = new andromeda_js_1.WalletStore();
const STORAGE_FILE = "wallets.json";
function loadWallets() {
    const savedWalletsData = config_1.storage.loadStorageFile(STORAGE_FILE);
    if (!savedWalletsData)
        return;
    try {
        const savedWallets = JSON.parse(savedWalletsData.toString());
        const { wallets, defaults } = savedWallets;
        wallets.forEach(({ mnemonic, chainId, name, }) => {
            store.addWallet(chainId, name, mnemonic);
        });
        const chainIds = Object.keys(defaults);
        chainIds.forEach((chainId) => store.setDefaultWallet(chainId, defaults[chainId]));
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
loadWallets();
config_1.storage.addExitHandler(() => {
    const storedConfig = {
        wallets: store.getAllWallets().map(({ chainId, wallet }) => ({
            mnemonic: wallet.mnemonic,
            name: wallet.name,
            chainId,
        })),
        defaults: store.defaultWallets,
    };
    config_1.storage.writeStorageFile(STORAGE_FILE, JSON.stringify(storedConfig));
});
exports.commands = {
    add: {
        handler: addWalletHandler,
        color: chalk_1.default.green,
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
        color: chalk_1.default.red,
        description: "Remove a wallet by address",
        usage: "wallets rm <name?>",
    },
    use: {
        handler: useWalletHandler,
        color: chalk_1.default.blue,
        description: "Sets the default wallet to use",
        usage: "wallets use <name>",
    },
    list: {
        handler: listWalletsHandler,
        color: chalk_1.default.white,
        description: "Lists all added wallets",
        usage: "wallets list",
    },
};
async function addWalletHandler(input, flags) {
    let [name] = input;
    let mnemonic;
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (flags.recover) {
        const mnemonicInput = await inquirer_1.default.prompt({
            type: "input",
            message: "Input the wallet mnemonic:",
            name: "addwalletmnemonic",
            validate: (input) => {
                return input.trim().length > 0;
            },
        });
        mnemonic = mnemonicInput.addwalletmnemonic.trim();
    }
    if (!name) {
        const nameInput = await inquirer_1.default.prompt({
            type: "input",
            message: "Input the wallet name:",
            name: "addwalletname",
        });
        name =
            nameInput.addwalletname.trim().length > 0
                ? nameInput.addwalletname.trim()
                : undefined;
    }
    const newWallet = store.addWallet(config_1.default.get("chain.chainId"), name, mnemonic);
    console.log(chalk_1.default.green("Wallet added!"));
    if (!mnemonic || mnemonic.length === 0) {
        newWalletConfirmation(newWallet.mnemonic);
    }
    if (wallets.length === 0) {
        await setCurrentWallet(newWallet);
    }
}
function newWalletConfirmation(seed) {
    console.log();
    console.log("Your seed phrase is:");
    console.log(chalk_1.default.bold(seed));
    console.log();
    console.log(chalk_1.default.red(chalk_1.default.bold("Do not share this with anyone. Please make sure to store this for future reference, without it you cannot recover your wallet.")));
}
async function removeWalletHandler(input) {
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (input.length === 0) {
        const { selection } = await inquirer_1.default.prompt({
            name: "selection",
            type: "list",
            message: "Select a wallet to remove",
            choices: [...wallets.map((wallet) => wallet.mnemonic), "cancel"],
        });
        if (selection !== "cancel") {
            await removeWalletByNameOrAddress(selection);
        }
    }
    else {
        const [walletInput] = input;
        try {
            const idx = parseInt(walletInput);
            await removeWalletByIndex(idx);
        }
        catch (error) {
            await removeWalletByNameOrAddress(walletInput);
        }
    }
}
async function removeWalletByIndex(idx) {
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (idx >= wallets.length) {
        throw new Error(`Invalid input. Wallet index must be between 0 and ${wallets.length - 1}.`);
    }
    const wallet = wallets[idx];
    const confirmed = await inquirer_1.default.prompt({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${wallet.name ?? wallet.mnemonic.trim()}?`,
    });
    if (confirmed) {
        store.removeWalletByIndex(idx, chainId);
    }
}
async function removeWalletByNameOrAddress(input) {
    const chainId = config_1.default.get("chain.chainId");
    const wallet = store.getWallet(chainId, input.trim());
    if (!wallet) {
        throw new Error(`Could not find wallet with address ${input.trim()}`);
    }
    const confirmed = await inquirer_1.default.prompt({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${wallet.name ?? wallet.mnemonic.trim()}?`,
    });
    if (confirmed) {
        store.removeWallet(input, chainId);
    }
}
async function listWalletsHandler() {
    const chainId = config_1.default.get("chain.chainId");
    await listWallets(store.getWallets(chainId));
}
async function listWallets(wallets) {
    if (wallets.length === 0) {
        throw new Error(`No wallets to display

You can add a wallet by using the add command:
  ${chalk_1.default.green("wallet add")}
      `);
    }
    const walletTable = new cli_table_1.default({
        ...common_1.logTableConfig,
        colWidths: [2],
    });
    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i];
        const isCurrent = getCurrentWallet() && wallet.name === getCurrentWallet().name;
        const addr = await wallet.getFirstOfflineSigner();
        walletTable.push([
            isCurrent ? "*" : "",
            isCurrent ? chalk_1.default.green(wallet.name ?? i) : wallet.name ?? i,
            isCurrent ? chalk_1.default.green(addr ?? i) : addr ?? i,
        ]);
    }
    console.log(walletTable.toString());
}
async function useWalletHandler(input) {
    const [walletName] = input;
    const chainId = config_1.default.get("chain.chainId");
    const wallet = store.getWallet(chainId, walletName);
    if (!wallet) {
        throw new Error("Wallet not found");
    }
    else {
        await setCurrentWallet(wallet);
    }
}
async function setCurrentWallet(wallet) {
    const signer = await wallet.getWallet();
    const { chainId, chainUrl } = config_1.default.get("chain");
    store.setDefaultWallet(chainId, wallet);
    try {
        await chain_1.client.connect(chainUrl, signer);
    }
    catch (error) {
        throw new Error("Could not connect to chain, please check your config");
    }
}
function getCurrentWallet() {
    const chainId = config_1.default.get("chain.chainId");
    const wallet = store.getDefaultWallet(chainId);
    return wallet;
}
exports.getCurrentWallet = getCurrentWallet;
exports.default = exports.commands;
