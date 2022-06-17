import chalk from "chalk";
import { handle, listCommands, title } from "./cmd";
import history from "./reload";
import { Commands } from "./types";
import walletHandler from "./handlers/wallet";
import chainHandler from "./handlers/chain";
import wasmHandler from "./handlers/wasm";

export const baseCommands: Commands = {
  exit: {
    handler: () => process.exit(0),
    description: "Exits the CLI",
    color: chalk.red,
  },
  help: {
    handler: () => {
      return listCommands(baseCommands);
    },
    description: "Lists all valid commands",
    color: chalk.green,
  },
  clear: {
    handler: async () => {
      console.clear();
      await title();
    },
    description: "Clears the terminal",
    color: chalk.white,
  },
  reload: {
    handler: async () => {
      const { selection } = await history.pick();
      if (selection !== "cancel") await handle(selection, baseCommands);
    },
    description: "Prints previous commands",
    color: chalk.blue,
  },
  wallet: {
    handler: walletHandler,
    description: "Manage wallets",
    color: chalk.magenta,
  },
  chain: {
    handler: chainHandler,
    description: "Manage Chain Config",
    color: chalk.yellow,
  },
  wasm: {
    handler: wasmHandler,
    description: "Send CosmWasm messages to the chain",
    color: chalk.black,
  },
};
