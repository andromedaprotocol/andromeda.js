import { parseCoins } from "@cosmjs/proto-signing";
import chalk from "chalk";
import { parseJSONInput } from ".";
import { Commands } from "../types";
import { client } from "./chain";
import { getCurrentWallet } from "./wallet";

export const commands: Commands = {
  query: {
    handler: queryHandler,
    color: chalk.green,
    description: "Queries a contract",
    usage: "wasm query <contract address> <query object>",
  },
  execute: {
    handler: executeHandler,
    color: chalk.yellow,
    description: "Executes a wasm message",
    usage: "wasm execute <contract address> <message> <memo> <funds>",
  },
};

async function queryHandler(input: string[]) {
  const [contractAddr, msg] = input;
  if (!contractAddr) {
    throw new Error("Invalid contract address");
  } else if (!msg) {
    throw new Error("Invalid query message");
  }

  const parsedMsg = JSON.parse(msg);

  const resp = await client.queryContract(contractAddr, parsedMsg);
  console.log(resp);
}

async function executeHandler(input: string[]) {
  const [contractAddr, msg, memo, funds] = input;
  if (!contractAddr) {
    throw new Error("Invalid contract address");
  } else if (!msg) {
    throw new Error("Invalid query message");
  }

  const parsedMsg = parseJSONInput(msg);
  const wallet = getCurrentWallet();
  if (!wallet) throw new Error("No wallet is currently selected");
  const signer = await wallet?.getFirstOfflineSigner();
  const messageFunds = parseCoins(funds);
  const fee = {
    amount: [
      {
        denom: "ujunox",
        amount: "2000",
      },
    ],
    gas: "500000",
  };
  const resp = await client.execute(
    signer,
    contractAddr,
    parsedMsg,
    fee,
    memo,
    messageFunds
  ); //TODO: ADD FEE FLAG
  console.log(chalk.green("Transaction executed!"));
  console.log();
  console.log(
    `https://testnet.mintscan.io/juno-testnet/txs/${resp.transactionHash}`
  );
}

export default commands;
