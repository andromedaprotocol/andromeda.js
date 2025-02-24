import {
  CleanedTx,
  cleanTx,
  getAttribute,
  getTxExplorerURL,
} from "@andromedaprotocol/andromeda.js";
import pc from "picocolors";
import Table from "cli-table";
import _ from "lodash";
import { displaySpinnerAsync, logTableConfig } from "../common";
import config from "../config";
import { Commands, Flags, Flag } from "../types";
import { validateAddressInput } from "./utils";
import State from "../state";

const TX_PAGINATION_FLAGS: Record<string, Flag> = {
  'min-height': {
    description: "Minimum height of transactions to fetch. Defaults to 10000 blocks before max height.",
    usage: "--min-height 10",
  },
  'max-height': {
    description: "Maximum height of transactions to fetch. Defaults to the current height",
    usage: "--max-height 10",
  },
}

export const commands: Commands = {
  info: {
    handler: txInfoHandler,
    color: pc.blue,
    description: "Gets transaction info from provided hash",
    usage: "tx info <hash>",
    inputs: [
      {
        requestMessage: "Input Transaction Hash:",
      },
    ],
    flags: TX_PAGINATION_FLAGS,
  },
  byaddress: {
    handler: txAddressHandler,
    color: pc.green,
    description: "Gets a history of transactions for a given address",
    usage: "tx byaddress <address>",
    inputs: [
      {
        requestMessage: "Input Address:",
        validate: validateAddressInput,
      },
    ],
    flags: TX_PAGINATION_FLAGS,
  },
  history: {
    handler: txHistoryHandler,
    color: pc.magenta,
    description: "Gets a history of transactions for your current wallet",
    usage: "tx history",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
    flags: TX_PAGINATION_FLAGS,
  },
};

/**
 * Prints all info about a transaction for a given hash
 * @param input
 */
async function txInfoHandler(input: string[]) {
  const [hash] = input;

  const txInfo = await displaySpinnerAsync(
    "Fetching transaction info...",
    async () => await State.client.getTx(hash),
  );
  if (!txInfo) {
    console.log(pc.red("Transaction info not found"));
    return;
  }
  console.log("Transaction Info:");
  console.log(JSON.stringify(cleanTx(txInfo), null, 2));
}

/**
 * Prints all transactions and their types by a given address
 * @param inputs
 */
async function txAddressHandler(inputs: string[], flags: Flags) {
  const [addr] = inputs;
  const maxHeight = flags['max-height'] ? parseInt(flags['max-height']) : undefined;
  const minHeight = flags['min-height'] ? parseInt(flags['min-height']) : maxHeight ? maxHeight - 10000 : await State.client.chainClient?.queryClient?.getHeight().then(height => height - 10000).catch(() => undefined);

  const txInfo = await displaySpinnerAsync(
    "Fetching transactions...",
    async () => await State.client.getAllTxsByAddress(addr, minHeight, maxHeight),
  );



  const urls = config.get("chain.blockExplorerTxPages");

  const txTable = new Table(logTableConfig);
  txTable.push(["Hash", "Height", "Type", "Link"].map((str) => pc.bold(str)));
  txInfo.map(cleanTx).forEach((tx: CleanedTx) => {
    const [txTypeAttr] = getAttribute("message.action", tx.rawLog);
    const txType =
      (txTypeAttr ? _.last(txTypeAttr.value.split(".")) : "") ?? "";
    txTable.push([
      tx.hash,
      `${tx.height}`,
      txType,
      urls.length > 0 ? getTxExplorerURL(tx.hash, urls[0]) : "",
    ]);
  });



  console.log();
  console.log(txTable.toString());

  if (txInfo.length === 0) {
    console.log();
    console.log(pc.red("No transactions found"));
    console.log();
  }

  console.log();
  console.log(pc.gray(`Min Height - ${minHeight}, Max Height - ${maxHeight}`))

}

/**
 * Prints all transactions and their types for the current wallet
 */
async function txHistoryHandler(_inputs: string[], flags: Flags) {
  const walletAddr = await State.wallets.currentWalletAddress();
  if (!walletAddr) throw new Error("No wallet currently assigned");

  await txAddressHandler([walletAddr], flags);
}

export default commands;
