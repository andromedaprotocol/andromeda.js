import {
  cleanTx,
  getAttribute,
  getTxExplorerURL,
} from "@andromeda/andromeda-js";
import chalk from "chalk";
import Table from "cli-table";
import _ from "lodash";
import { logTableConfig } from "../common";
import config from "../config";
import { Commands } from "../types";
import client from "./client";
import { validateAddressInput } from "./utils";
import { getCurrentWallet } from "./wallets";

export const commands: Commands = {
  info: {
    handler: txInfoHandler,
    color: chalk.blue,
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
    color: chalk.green,
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
    color: chalk.rgb(23, 125, 90),
    description: "Gets a history of transactions for your current wallet",
    usage: "tx history",
  },
};

async function txInfoHandler(input: string[]) {
  const [hash] = input;

  const txInfo = await client.getTx(hash);
  if (!txInfo) {
    console.log(chalk.red("Transaction info not found"));
    return;
  }
  console.log("Transaction Info:");
  console.log(JSON.stringify(cleanTx(txInfo), null, 2));
}

async function txAddressHandler(inputs: string[]) {
  const [addr] = inputs;

  const txInfo = await client.getAllTxsByAddress(addr);

  if (txInfo.length === 0) throw new Error("No transactions found");

  const urls = config.get("chain.blockExplorerTxPages");

  const txTable = new Table(logTableConfig);
  txTable.push(
    ["Hash", "Height", "Type", "Link"].map((str) => chalk.bold(str))
  );
  txInfo.map(cleanTx).forEach((tx) => {
    const [txTypeAttr] = getAttribute("message.action", tx.rawLog);
    const txType = txTypeAttr ? _.last(txTypeAttr.value.split(".")) : "";
    txTable.push([
      tx.hash,
      tx.height,
      txType,
      urls.length > 0 ? getTxExplorerURL(tx.hash, urls[0]) : "",
    ]);
  });

  console.log();
  console.log(txTable.toString());
}

async function txHistoryHandler() {
  const wallet = getCurrentWallet();
  const walletAddr = await wallet.getFirstOfflineSigner(
    config.get("chain.chainId")
  );

  await txAddressHandler([walletAddr]);
}

export default commands;
