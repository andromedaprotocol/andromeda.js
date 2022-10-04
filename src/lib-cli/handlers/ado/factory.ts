import chalk from "chalk";
import config from "../../config";
import { executeFlags } from "../../common";
import { Commands, Flags } from "../../types";
import { executeMessage, queryMessage } from "../chain";
import client from "../client";
import { getCurrentWallet } from "../wallets";

const commands: Commands = {
  updatecodeid: {
    description: "Updates the code ID for a given ADO",
    usage: "ado factory updatecodeid <ado key?> <code id?>",
    handler: updateCodeIdHandler,
    color: chalk.blue,
    flags: executeFlags,
    inputs: [
      {
        requestMessage: "Input the key for the ADO:",
      },
      {
        requestMessage: "Input the new code ID for the ADO:",
      },
    ],
    disabled: async () => !(await isOperatorOrOwnerOfFactory()),
  },
  getcodeid: {
    description: "Fetches the code ID for a given ADO",
    usage: "ado factory getcodeid <ado key?>",
    handler: getCodeIdHandler,
    color: chalk.green,
    inputs: [
      {
        requestMessage: "Input the key for the ADO:",
      },
    ],
  },
  address: {
    description: "Gets the current address for the factory",
    usage: "ado factory address",
    handler: getAddressHandler,
    color: chalk.white,
  },
};

async function isOperatorOrOwnerOfFactory() {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const wallet = getCurrentWallet();
  const walletAddr = await wallet.getFirstOfflineSigner(
    config.get("chain.chainId")
  );
  const isAuthorized = await client.ado.isOperatorOrOwner(
    client.factory.address,
    walletAddr
  );
  return isAuthorized;
}

async function updateCodeIdHandler(input: string[], flags: Flags) {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const [adoKey, codeId] = input;

  let parsedCodeId: number;
  try {
    parsedCodeId = parseInt(codeId);
  } catch (error) {
    throw new Error("Invalid Code ID");
  }

  const msg = client.factory.updateCodeIdMsg(adoKey, parsedCodeId);

  await executeMessage(client.factory.address, msg, flags);
}

async function getCodeIdHandler(input: string[]) {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const [adoKey] = input;

  const msg = client.factory.getCodeIdQuery(adoKey);

  const resp = await queryMessage(client.factory.address, msg);

  console.log(`Code ID: ${chalk.bold(resp)}`);
}

async function getAddressHandler() {
  console.log(client.factory.address ?? "<unset>");
}

export default commands;
