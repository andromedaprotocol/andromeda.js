"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseCommands = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cmd_1 = require("./cmd");
const reload_1 = __importDefault(require("./reload"));
const wallet_1 = __importDefault(require("./handlers/wallet"));
const chain_1 = __importDefault(require("./handlers/chain"));
const wasm_1 = __importDefault(require("./handlers/wasm"));
exports.baseCommands = {
    exit: {
        handler: () => process.exit(0),
        description: "Exits the CLI",
        color: chalk_1.default.red,
    },
    help: {
        handler: () => {
            return (0, cmd_1.listCommands)(exports.baseCommands);
        },
        description: "Lists all valid commands",
        color: chalk_1.default.green,
    },
    clear: {
        handler: async () => {
            console.clear();
            await (0, cmd_1.title)();
        },
        description: "Clears the terminal",
        color: chalk_1.default.white,
    },
    reload: {
        handler: async () => {
            const { selection } = await reload_1.default.pick();
            if (selection !== "cancel")
                await (0, cmd_1.handle)(selection, exports.baseCommands);
        },
        description: "Prints previous commands",
        color: chalk_1.default.blue,
    },
    wallet: {
        handler: wallet_1.default,
        description: "Manage wallets",
        color: chalk_1.default.magenta,
    },
    chain: {
        handler: chain_1.default,
        description: "Manage Chain Config",
        color: chalk_1.default.yellow,
    },
    wasm: {
        handler: wasm_1.default,
        description: "Send CosmWasm messages to the chain",
        color: chalk_1.default.black,
    },
};
