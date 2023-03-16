import pc from "picocolors";
import { executeFlags } from "../../common";
import State from "../../state";
import { Commands, Flags } from "../../types";
import { executeMessage, queryMessage } from "../wasm";

const { client, wallets } = State;

const commands: Commands = {
  updatecodeid: {
    description: "Updates the code ID for a given ADO",
    usage: "ado db updatecodeid <ado key> <code id>",
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
    disabled: async () => !(await isOperatorOrOwnerOfADODB()),
  },
  getcodeid: {
    description: "Fetches the code ID for a given ADO",
    usage: "ado db getcodeid <ado key>",
    handler: getCodeIdHandler,
    color: pc.green,
    inputs: [
      {
        requestMessage: "Input the key for the ADO:",
      },
    ],
  },
  address: {
    description: "Gets the current address for the db",
    usage: "ado db address",
    handler: getAddressHandler,
    color: pc.white,
  },
};

/**
 * Checks whether the currently selected wallet is an owner/operator of the current chain's ADO db contract
 * @returns Whether the current wallet is an owner or operator of the current chain's ADO db contract
 */
async function isOperatorOrOwnerOfADODB() {
  if (!client.adoDB.address)
    throw new Error("No ADO DB address for current chain");

  const walletAddr = wallets.currentWalletAddress;
  if (!walletAddr) return false;
  const isAuthorized = await client.ado.isOperatorOrOwner(
    walletAddr,
    client.adoDB.address
  );
  return isAuthorized;
}

/**
 * Updates the code ID for a given key/code ID tuple
 * @param input
 * @param flags
 */
async function updateCodeIdHandler(input: string[], flags: Flags) {
  if (!client.adoDB.address)
    throw new Error("No ADO DB address for current chain");

  const [adoKey, codeId] = input;

  // Validate the provided code ID is an int
  let parsedCodeId: number;
  try {
    parsedCodeId = parseInt(codeId);
  } catch (error) {
    throw new Error("Invalid Code ID");
  }

  const msg = client.adoDB.updateCodeIdMsg(adoKey, parsedCodeId);

  await executeMessage(client.adoDB.address, msg, flags);
}

/**
 * Gets the code ID for a given key
 * @param input
 */
async function getCodeIdHandler(input: string[]) {
  if (!client.adoDB.address)
    throw new Error("No ADO DB address for current chain");

  const [adoKey] = input;

  const msg = client.adoDB.getCodeIdQuery(adoKey);

  const resp = await queryMessage(client.adoDB.address, msg);

  console.log(`Code ID: ${pc.bold(resp)}`);
}

/**
 * Prints the current chain's ADO DB contract address
 */
async function getAddressHandler() {
  console.log(client.adoDB.address ?? "<unset>");
}

export default commands;
