"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cli_table_1 = __importDefault(require("cli-table"));
const inquirer_1 = __importDefault(require("inquirer"));
const cmd_1 = require("../cmd");
const common_1 = require("../common");
const andromeda_js_1 = require("@andromeda/andromeda-js");
const config_1 = __importDefault(require("../config"));
const chain_1 = require("./chain");
let currentWallet = "";
const store = new andromeda_js_1.WalletStore();
exports.commands = {
    add: {
        handler: addWallet,
        color: chalk_1.default.green,
        description: "Recovers a wallet by a given mnemonic",
    },
    rm: {
        handler: removeWalletHandler,
        color: chalk_1.default.red,
        description: "Remove a wallet by address",
    },
    list: {
        handler: async () => {
            const chainId = config_1.default.get("chain.chainId");
            await listWallets(store.getWallets(chainId));
        },
        color: chalk_1.default.white,
        description: "Lists all added wallets",
    },
};
async function addWallet(input) {
    const trimmed = input.trim();
    let mnemonic = trimmed;
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (trimmed.length === 0) {
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
    const nameInput = await inquirer_1.default.prompt({
        type: "input",
        message: "Input the wallet name (optional):",
        name: "addwalletname",
    });
    const name = nameInput.addwalletname.trim().length > 0
        ? nameInput.addwalletname.trim()
        : undefined;
    const newWallet = store.addWallet(mnemonic, config_1.default.get("chain.chainId"), name);
    console.log(chalk_1.default.green("Wallet added!"));
    if (wallets.length === 0) {
        setWallet(newWallet);
    }
}
async function removeWalletHandler(input) {
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (input.trim().length === 0) {
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
        const walletInput = input.split(" ")[0].trim();
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
    var _a;
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    if (idx >= wallets.length) {
        console.error(chalk_1.default.red(`Invalid input. Wallet index must be between 0 and ${wallets.length - 1}.`));
        return;
    }
    const wallet = wallets[idx];
    const confirmed = await inquirer_1.default.prompt({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${(_a = wallet.name) !== null && _a !== void 0 ? _a : wallet.mnemonic.trim()}?`,
    });
    if (confirmed) {
        store.removeWalletByIndex(idx, chainId);
        if (wallet.name === currentWallet) {
            currentWallet = "";
        }
    }
}
async function removeWalletByNameOrAddress(input) {
    var _a;
    const chainId = config_1.default.get("chain.chainId");
    const wallets = store.getWallets(chainId);
    const wallet = wallets.find((wallet) => wallet.mnemonic === input.trim() || wallet.name === input.trim());
    if (!wallet) {
        console.log(chalk_1.default.red(`Could not find wallet with address ${input.trim()}`));
        return;
    }
    const confirmed = await inquirer_1.default.prompt({
        name: "rmwalletconfirm",
        type: "confirm",
        message: `Are you sure you want to remove wallet ${(_a = wallet.name) !== null && _a !== void 0 ? _a : wallet.mnemonic.trim()}?`,
    });
    if (confirmed) {
        store.removeWallet(input, chainId);
        if (wallet.name === currentWallet) {
            currentWallet = "";
        }
    }
}
async function walletHandler(input) {
    return (0, cmd_1.handle)(input, exports.commands);
}
async function listWallets(wallets) {
    var _a, _b, _c, _d;
    if (wallets.length === 0) {
        console.log(chalk_1.default.red("No wallets to display"));
        console.log(`
You can add a wallet by using the add command:
  ${chalk_1.default.green("wallet add")}
      `);
        return;
    }
    const walletTable = new cli_table_1.default(Object.assign(Object.assign({}, common_1.logTableConfig), { colWidths: [2] }));
    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i];
        const isCurrent = wallet.name === currentWallet;
        walletTable.push([
            isCurrent ? "*" : "",
            isCurrent ? chalk_1.default.green((_a = wallet.name) !== null && _a !== void 0 ? _a : i) : (_b = wallet.name) !== null && _b !== void 0 ? _b : i,
            isCurrent
                ? chalk_1.default.green((_c = (await wallet.getFirstOfflineSigner())) !== null && _c !== void 0 ? _c : i)
                : (_d = wallet.mnemonic) !== null && _d !== void 0 ? _d : i,
        ]);
    }
    console.log(walletTable.toString());
}
async function setWallet(wallet) {
    const signer = await wallet.getWallet();
    const chainUrl = config_1.default.get("chain.chainUrl");
    await chain_1.client.connect(chainUrl, signer);
}
exports.default = walletHandler;
