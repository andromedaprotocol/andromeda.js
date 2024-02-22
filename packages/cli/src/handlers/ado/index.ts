import { Schema } from "jsonschema";
import pc from "picocolors";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
} from "../../common";
import {
  promptInstantiateMsg,
  promptQueryOrExecuteMessage,
} from "../../schema";
import State from "../../state";
import { Commands, Flags } from "../../types";
import gqlCommands from "../gql";
import { generateHandler, validateAddressInput } from "../utils";
import { executeMessage, instantiateMessage, queryMessage } from "../wasm";
import dbCommands from "./db";
import moduleCommands from "./modules";
import operatorCommands from "./operators";

const { client, wallets } = State;

// The ADO DB has several subcommands, see `db.ts`
const dbHandler = generateHandler(dbCommands);
// Operators have several subcommands, see 'operators.ts'
const operatorsHandler = generateHandler(operatorCommands);
// Modules have several subcommands, see 'modules.ts'
const modulesHandler = generateHandler(moduleCommands);

const commands: Commands = {
  db: {
    handler: dbHandler,
    usage: "ado db",
    description: "Allows querying the on chain ADO DB",
    color: pc.white,
  },
  create: {
    handler: createHandler,
    usage: "ado create <type>",
    description: "Creates an ADO by given type",
    flags: instantiateFlags,
    color: pc.green,
    disabled: () => typeof State.wallets.currentWallet === "undefined",
    inputs: [
      {
        requestMessage: "Input the ADO type:",
        options: async () => {
          try {
            const adoTypes = displaySpinnerAsync(
              "Fetching ADO types...",
              async () => await client!.os!.adoDB!.getAllADO()
            );

            return adoTypes ?? [];
          } catch (error) {
            return [];
          }
        },
        transform: (input: string) => input.toLowerCase(),
      },
    ],
  },
  execute: {
    handler: executeHandler,
    usage: "ado execute <address>",
    description: "Executes a message on an ADO by given address",
    flags: executeFlags,
    color: pc.blue,
    disabled: () => typeof State.wallets.currentWallet === "undefined",
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  query: {
    handler: queryHandler,
    usage: "ado query <address>",
    description: "Queries an ADO by given address",
    color: pc.magenta,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  info: {
    handler: queryInfoHandler,
    usage: "ado info <address>",
    description: "Queries the info of ADO for a given address",
    color: pc.yellow,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  list: {
    ...gqlCommands.assets,
    usage: "ado list",
    disabled: () => typeof State.wallets.currentWallet === "undefined",
    color: pc.cyan,
  },
  transfer: {
    handler: transferHandler,
    usage: "ado transfer <address> <new owner address>",
    description: "Transfers ownership of an ADO",
    color: pc.green,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input the address of the new owner:",
        validate: validateAddressInput,
      },
    ],
  },
  operators: {
    handler: operatorsHandler,
    usage: "ado operators",
    description: "Allows management of operators for an ADO",
    color: pc.blue,
  },
  modules: {
    handler: modulesHandler,
    usage: "ado modules",
    description: "Allows management of modules for an ADO",
    color: pc.yellow,
  },
  resolvepath: {
    handler: resolvePathHandler,
    color: pc.cyan,
    description: "Gets the address of the specified path",
    usage: "ado resolvepath",
    inputs: [
      {
        requestMessage: "Input the path:",
        validate: (input: string) => {
          if (input.length === 0) return false;
          return true;
        },
      },
    ],
    flags: executeFlags,
  },
  addpath: {
    handler: addPathHandler,
    color: pc.magenta,
    description: "Registers an ADO component to the path",
    usage: "ado addpath",
    inputs: [
      {
        requestMessage: "Input the ADO componet Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input the name:",
        validate: (input: string) => {
          if (input.length === 0) return false;
          return true;
        },
      },
    ],
    flags: executeFlags,
  },
  addparentpath: {
    handler: addParentPathHandler,
    color: pc.magenta,
    description: "Registers the child's path relative to the parent",
    usage: "ado addparentpath",
    inputs: [
      {
        requestMessage: "Input the Parent Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input the name:",
        validate: (input: string) => {
          if (input.length === 0) return false;
          return true;
        },
      },
    ],
    flags: executeFlags,
  },
  subdir: {
    handler: subDirHandler,
    color: pc.cyan,
    description: "Gets the sub directory of the specified path",
    usage: "ado subdir",
    inputs: [
      {
        requestMessage: "Input the path:",
        validate: (input: string) => {
          if (input.length === 0) return false;
          return true;
        },
      },
    ],
    flags: executeFlags,
  },
  paths: {
    handler: pathsHandler,
    color: pc.yellow,
    description: "Gets the paths of an ADO",
    usage: "ado paths",
    inputs: [
      {
        requestMessage: "Input the Address:",
        validate: validateAddressInput,
      },
    ],
    flags: executeFlags,
  },
};

/**
 * Creates an ADO by given type
 * @param input
 * @param flags
 */
async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const codeId = await client!.os!.adoDB!.getCodeId(type);
  const adoSchema = await displaySpinnerAsync(
    `Fetching schema for ${type} (${codeId}) ...`,
    async () => await client.os.schema!.getSchemaFromCodeId(codeId)
  );

  const msg = await promptInstantiateMsg(
    adoSchema.schema.instantiate
      ? adoSchema.schema.instantiate
      : (adoSchema.schema as Schema),
  );
  await instantiateMessage(codeId, msg, flags);
}

/**
 * Queries an ADO for its codeId by address
 * @param address The address of the ADO
 * @returns The codeId of ADO the contract is, errors if address is not a contract
 */
async function queryCodeId(address: string) {
  const { codeId } = await client.chainClient!.queryClient!.getContract(address);
  return codeId;
}

/**
 * Queries an ADO for its schema by address
 * @param address The address of the ADO
 * @returns Schema for the ado
 */
async function queryAdoSchema(address: string) {
  const codeId = await queryCodeId(address);
  const schema = await client.os.schema!.getSchemaFromCodeId(codeId);
  return schema;

}

/**
 * Executes a chosen message on an ADO by its address
 * @param input
 * @param flags
 */
async function executeHandler(input: string[], flags: Flags) {
  const [address] = input;

  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await queryAdoSchema(address).catch(() => { throw new Error(`Not a valid ADO`) })
  );

  const msg = await promptQueryOrExecuteMessage(
    adoSchema.schema.execute
      ? adoSchema.schema.execute
      : (adoSchema.schema as Schema),
  );
  await executeMessage(address, msg, flags);
}

/**
 *  Queries an ADO by its address
 * @param input
 */
async function queryHandler(input: string[]) {
  const [address] = input;

  let codeId = -1;
  try {
    codeId = await queryCodeId(address);
  } catch (error) {
    console.error(pc.red("Contract is not a valid ADO"));
    return;
  }

  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () =>
      await client!.os!.schema!.getSchemaFromCodeId(codeId)
  );

  const msg = await promptQueryOrExecuteMessage(
    adoSchema.schema.query
      ? adoSchema.schema.query
      : adoSchema.schema as Schema,
  );
  const resp = await queryMessage(address, msg);

  console.log(JSON.stringify(resp, null, 2));
}

/**
 * Queries an ADO for its info by address
 * @param input
 */
async function queryInfoHandler(input: string[]) {
  const [address] = input;
  const { type, version, owner, publisher, createdHeight } =
    await displaySpinnerAsync("Querying ADO info...", async () => {
      const info = [
        client.ado.getType(address),
        client.ado.getVersion(address),
        client.ado.getOwner(address),
        client.ado.getPublisher(address),
        client.ado.getCreatedHeight(address),
      ];
      const [type, version, owner, publisher, createdHeight] =
        await Promise.all(info);
      return {
        type,
        version,
        owner,
        publisher,
        createdHeight,
      };
    });

  console.log();
  console.log(pc.bold("ADO Info"));
  console.log(`${pc.bold("Type:")} ${type}`);
  console.log(`${pc.bold("Version:")} v${version}`);
  console.log(`${pc.bold("Owner:")} ${owner}`);
  console.log(`${pc.bold("Publisher:")} ${publisher}`);
  console.log(`${pc.bold("Created Height:")} ${createdHeight}`);
}

/**
 * Transfers ownership of an ADO
 * @param input
 * @param flags
 */
async function transferHandler(input: string[], flags: Flags) {
  const [address, recipient] = input;

  const owner = await client.ado.getOwner(address);
  const currWallet = wallets.currentWalletAddress;

  if (!currWallet || owner !== currWallet)
    throw new Error("Cannot transfer an ADO you do not own");

  const msg = client.ado.updateOwnerMsg(recipient);
  await executeMessage(address, msg, flags, "ADO Transferred!");
}

/**
 * Queries to get the address of the specified path
 * @param input
 * @param flags
 */
async function resolvePathHandler(input: string[]) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");
  const [path] = input;
  const resp = await client.os.vfs?.resolvePath(path);
  console.log(JSON.stringify(resp, null, 2));
}

/**
 * Registers an ADO to the path.
 * @param input
 * @param flags
 */
async function addPathHandler(input: string[], flags: Flags) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");

  const [address, name] = input;

  const msgAddPath = client.os.vfs?.addPathMsg(name, address);
  await executeMessage(client.os.vfs?.address, msgAddPath, flags, "Registered the given ado to the path!"); //TODO: ADD FEE FLAG
}

/**
 * Registers the child's path relative to the parent.
 * @param input
 * @param flags
 */
async function addParentPathHandler(input: string[], flags: Flags) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");

  const [parent_address, name] = input;

  const msgAddParentPath = client.os.vfs?.addParentPathMsg(name, parent_address);
  await executeMessage(client.os.vfs?.address, msgAddParentPath, flags, "Assigned name to the given parent!"); //TODO: ADD FEE FLAG
}

/**
 * Queries to get the sub directories of the specified path
 * @param input
 * @param flags
 */
async function subDirHandler(input: string[]) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");
  const [path] = input;
  const resp = await client.os.vfs?.subDir(path);
  console.log(JSON.stringify(resp, null, 2));
}

/**
 * Queries to get the paths of an ADO
 * @param input
 * @param flags
 */
async function pathsHandler(input: string[]) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");
  const [address] = input;
  const resp = await client.os.vfs?.paths(address);
  console.log(JSON.stringify(resp, null, 2));
}

export default commands;
