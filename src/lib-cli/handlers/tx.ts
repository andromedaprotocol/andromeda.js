import {
  CleanedTx,
  cleanTx,
  getAttribute,
  getTxExplorerURL,
} from "@andromeda/andromeda-js";
import pc from "picocolors";
import Table from "cli-table";
import _ from "lodash";
import { logTableConfig } from "../common";
import config from "../config";
import { Commands } from "../types";
import { validateAddressInput } from "./utils";
import State from "../state";

const { client } = State;

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
  },
  history: {
    handler: txHistoryHandler,
    color: pc.magenta,
    description: "Gets a history of transactions for your current wallet",
    usage: "tx history",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
  },
};

/**
 * Prints all info about a transaction for a given hash
 * @param input
 */
async function txInfoHandler(input: string[]) {
  const [hash] = input;

  const txInfo = await client.getTx(hash);
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
async function txAddressHandler(inputs: string[]) {
  const [addr] = inputs;

  const txInfo = await client.getAllTxsByAddress(addr);

  if (txInfo.length === 0) throw new Error("No transactions found");

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
}

/**
 * Prints all transactions and their types for the current wallet
 */
async function txHistoryHandler() {
  const wallet = State.wallets.currentWallet;
  if (!wallet) throw new Error("No wallet currently assigned");

  const walletAddr = await wallet.getAddress(config.get("chain.chainId"));

  await txAddressHandler([walletAddr]);
}

export default commands;
