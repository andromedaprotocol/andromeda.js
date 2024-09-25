import { generateHandler } from "../../handlers/utils";
import State from "../../state";
import { Commands } from "../../types";
import pc from "picocolors";
import dbCommands from './db'
import vfsCommands from './vfs'
import { queryMessage } from "../../handlers/wasm";
import { addressQueryExecuteInjector } from '../ado/common'


// The ADO DB has several subcommands, see `db.ts`
const dbHandler = generateHandler(dbCommands, "os adodb");
const vfsHandler = generateHandler(vfsCommands, "os vfs");

const commands: Commands = {
    address: {
        description: "Gets the current address for Kernel",
        usage: "os address",
        handler: getAddressHandler,
        color: pc.green,
    },
    adodb: {
        handler: dbHandler,
        usage: "os adodb <cmd>",
        description: "Allows querying the on chain ADO DB",
        color: pc.yellow,
    },
    vfs: {
        handler: vfsHandler,
        usage: "os vfs <cmd>",
        description: "Allows querying the on chain VFS",
        color: pc.cyan,
    },
    key: {
        handler: getKeyHandler,
        usage: "os key <key>",
        description: "Query key address from kernel",
        color: pc.yellow,
        inputs: [
            {
                requestMessage: "Input key",
            },
        ],
    },
    ...addressQueryExecuteInjector(() => State.client.os.address, "os", "Kernel")
}


/**
 * Prints the current chain's kernel contract address
 */
async function getAddressHandler() {
    console.log(State.client.os.address || "<unset>");
}


/**
 * Gets the key from kernel
 * @param input
 */
async function getKeyHandler(input: string[]) {
    if (!State.client.os?.address)
        throw new Error("No Kernel address for current chain");

    const [key] = input;

    const msg = State.client.os.getKeyAddressMessage(key);

    const resp = await queryMessage(State.client.os.address, msg);

    console.log(`Key Address: ${pc.bold(resp)}`);
}


export default commands;
