import chalk from "chalk";
import { listCommands, title } from "./cmd";
import {
  handle,
  walletHandler,
  chainHandler,
  wasmHandler,
  reload,
} from "./handlers";
import { Commands, Flags } from "./types";

export const baseCommands: Commands = {
  exit: {
    handler: () => process.exit(0),
    description: "Exits the CLI",
    color: chalk.red,
    usage: "exit",
  },
  help: {
    handler: async () => {
      return listCommands(baseCommands);
    },
    description: "Lists all valid commands",
    color: chalk.green,
    usage: "help",
  },
  clear: {
    handler: async () => {
      console.clear();
      await title();
    },
    description: "Clears the terminal",
    color: chalk.white,
    usage: "clear",
  },
  reload: {
    handler: async (_: string[], flags: Flags) => {
      const { selection } = await reload.pick();
      if (selection !== "cancel")
        await handle([selection], flags, baseCommands);
    },
    description: "Prints previous commands",
    color: chalk.blue,
    usage: "reload",
  },
  wallets: {
    handler: walletHandler,
    description: "Manage wallets",
    color: chalk.magenta,
    usage: "wallets <cmd>",
  },
  chain: {
    handler: chainHandler,
    description: "Manage Chain Config",
    color: chalk.yellow,
    usage: "chain <cmd>",
  },
  wasm: {
    handler: wasmHandler,
    description: "Send CosmWasm messages to the chain",
    color: chalk.black,
    usage: "wasm <cmd>",
  },
};
