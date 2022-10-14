import pc from "picocolors";
import config from "../../config";
import { executeFlags } from "../../common";
import { Commands, Flags } from "../../types";
import { executeMessage, queryMessage } from "../wasm";
import State from "../../state";

const { client, wallets } = State;

const commands: Commands = {
  updatecodeid: {
    description: "Updates the code ID for a given ADO",
    usage: "ado factory updatecodeid <ado key?> <code id?>",
    handler: updateCodeIdHandler,
    color: pc.blue,
    flags: executeFlags,
    inputs: [
      {
        requestMessage: "Input the key for the ADO:",
      },
      {
        requestMessage: "Input the new code ID for the ADO:",
        validate: (input: string) => {
          try {
            parseInt(input);
            return true;
          } catch (error) {
            console.log();
            console.log("Not a valid code ID");
            return false;
          }
        },
      },
    ],
    disabled: async () => !(await isOperatorOrOwnerOfFactory()),
  },
  getcodeid: {
    description: "Fetches the code ID for a given ADO",
    usage: "ado factory getcodeid <ado key?>",
    handler: getCodeIdHandler,
    color: pc.green,
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
    color: pc.white,
  },
};

/**
 * Checks whether the currently selected wallet is an owner/operator of the current chain's factory contract
 * @returns Whether the current wallet is an owner or operator of the current chain's factory contract
 */
async function isOperatorOrOwnerOfFactory() {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const wallet = wallets.currentWallet;
  if (!wallet) return false;

  const walletAddr = await wallet.getFirstOfflineSigner(
    config.get("chain.chainId")
  );
  const isAuthorized = await client.ado.isOperatorOrOwner(
    client.factory.address,
    walletAddr
  );
  return isAuthorized;
}

/**
 * Updates the code ID for a given key/code ID tuple
 * @param input
 * @param flags
 */
async function updateCodeIdHandler(input: string[], flags: Flags) {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const [adoKey, codeId] = input;

  // Validate the provided code ID is an int
  let parsedCodeId: number;
  try {
    parsedCodeId = parseInt(codeId);
  } catch (error) {
    throw new Error("Invalid Code ID");
  }

  const msg = client.factory.updateCodeIdMsg(adoKey, parsedCodeId);

  await executeMessage(client.factory.address, msg, flags);
}

/**
 * Gets the code ID for a given key
 * @param input
 */
async function getCodeIdHandler(input: string[]) {
  if (!client.factory.address)
    throw new Error("No factory address for current chain");

  const [adoKey] = input;

  const msg = client.factory.getCodeIdQuery(adoKey);

  const resp = await queryMessage(client.factory.address, msg);

  console.log(`Code ID: ${pc.bold(resp)}`);
}

/**
 * Prints the current chain's factory contract address
 */
async function getAddressHandler() {
  console.log(client.factory.address ?? "<unset>");
}

export default commands;
