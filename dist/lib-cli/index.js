"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseCommands = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cmd_1 = require("./cmd");
const handlers_1 = require("./handlers");
exports.baseCommands = {
    exit: {
        handler: () => process.exit(0),
        description: "Exits the CLI",
        color: chalk_1.default.red,
        usage: "exit",
    },
    help: {
        handler: async () => {
            return (0, cmd_1.listCommands)(exports.baseCommands);
        },
        description: "Lists all valid commands",
        color: chalk_1.default.green,
        usage: "help",
    },
    clear: {
        handler: async () => {
            console.clear();
            await (0, cmd_1.title)();
        },
        description: "Clears the terminal",
        color: chalk_1.default.white,
        usage: "clear",
    },
    reload: {
        handler: async (_, flags) => {
            const { selection } = await handlers_1.reload.pick();
            if (selection !== "cancel")
                await (0, handlers_1.handle)([selection], flags, exports.baseCommands);
        },
        description: "Prints previous commands",
        color: chalk_1.default.blue,
        usage: "reload",
    },
    wallets: {
        handler: handlers_1.walletHandler,
        description: "Manage wallets",
        color: chalk_1.default.magenta,
        usage: "wallets <cmd>",
    },
    chain: {
        handler: handlers_1.chainHandler,
        description: "Manage Chain Config",
        color: chalk_1.default.yellow,
        usage: "chain <cmd>",
    },
    wasm: {
        handler: handlers_1.wasmHandler,
        description: "Send CosmWasm messages to the chain",
        color: chalk_1.default.black,
        usage: "wasm <cmd>",
    },
};
