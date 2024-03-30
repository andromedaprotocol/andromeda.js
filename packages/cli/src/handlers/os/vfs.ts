import pc from "picocolors";
import State from "../../state";
import { Commands } from "../../types";
import { addressQueryExecuteInjector } from '../ado/common'
import { queryMessage } from "handlers/wasm";
import { validateAddressInput } from "handlers/utils";
const { client } = State;

const commands: Commands = {
  address: {
    description: "Gets the vfs address",
    usage: "os vfs address",
    handler: getAddressHandler,
    color: pc.white,
  },
  paths: {
    description: "Get possble vfs path for the given address",
    usage: "os vfs paths <address>",
    handler: getPathsHandler,
    color: pc.green,
    inputs: [
      {
        requestMessage: "Input address:",
        validate: validateAddressInput,
      },
    ],
  },
  ...addressQueryExecuteInjector(() => client.os.vfs?.address || "", "os vfs", "VFS")
};


/**
 * Gets the code ID for a given key
 * @param input
 */
async function getPathsHandler(input: string[]) {
  if (!client.os.vfs || !client.os.vfs.address)
    throw new Error("No VFS address for current chain");

  const [address] = input;

  const msg = client.os.vfs.pathsMsg(address);

  const resp = await queryMessage<Array<string>>(client.os.vfs.address, msg);
  console.log("Paths:");
  resp.forEach(p => {
    console.log(pc.bold(p));
  })
}

/**
 * Prints the current chain's ADO DB contract address
 */
async function getAddressHandler() {
  console.log(client.os.vfs?.address || "<unset>");
}

export default commands;
