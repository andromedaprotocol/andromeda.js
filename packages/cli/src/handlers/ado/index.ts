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
import moduleCommands from "./modules";
// import operatorCommands from "./operators";

// Operators have several subcommands, see 'operators.ts'
// const operatorsHandler = generateHandler(operatorCommands);
// Modules have several subcommands, see 'modules.ts'
const modulesHandler = generateHandler(moduleCommands);

const commands: Commands = {
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
              async () => await State.client!.os!.adoDB!.getAllADO()
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
  // operators: {
  //   handler: operatorsHandler,
  //   usage: "ado operators",
  //   description: "Allows management of operators for an ADO",
  //   color: pc.blue,
  // },
  modules: {
    handler: modulesHandler,
    usage: "ado modules",
    description: "Allows management of modules for an ADO",
    color: pc.yellow,
  }
};

/**
 * Creates an ADO by given type
 * @param input
 * @param flags
 */
async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const codeId = await State.client!.os!.adoDB!.getCodeId(type);
  const adoSchema = await displaySpinnerAsync(
    `Fetching schema for ${type} (${codeId}) ...`,
    async () => await State.client.schema!.getSchemaFromCodeId(codeId)
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
  const { codeId } = await State.client.chainClient!.queryClient!.getContract(address);
  return codeId;
}

/**
 * Queries an ADO for its schema by address
 * @param address The address of the ADO
 * @returns Schema for the ado
 */
async function queryAdoSchema(address: string) {
  const codeId = await queryCodeId(address);

  // Try to create a fallback type from ado types query
  let fallbackType: string | undefined = undefined;
  const adoType = await State.client.ado.getType(address).catch(() => undefined);
  if (adoType) {
    // Trying to prevent unncessary call for version if type query already failed
    fallbackType = adoType && await State.client.ado.getVersion(address).then(version => `${adoType}@${version}`).catch(() => undefined);
  }
  const schema = await State.client.schema!.getSchemaFromCodeId(codeId, undefined, fallbackType);
  return schema;
}

/**
 * Executes a chosen message on an ADO by its address
 * @param input
 * @param flags
 */
export async function executeHandler(input: string[], flags: Flags) {
  const [address] = input;

  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await queryAdoSchema(address)
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
export async function queryHandler(input: string[]) {
  const [address] = input;

  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    () => queryAdoSchema(address)
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
        State.client.ado.getType(address),
        State.client.ado.getVersion(address),
        State.client.ado.getOwner(address),
        State.client.ado.getPublisher(address),
        State.client.ado.getCreatedHeight(address),
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

  const owner = await State.client.ado.getOwner(address);
  const currWallet = await State.wallets.currentWalletAddress();

  if (!currWallet || owner !== currWallet)
    throw new Error("Cannot transfer an ADO you do not own");

  const msg = State.client.ado.updateOwnerMsg(recipient);
  await executeMessage(address, msg, flags, "ADO Transferred!");
}

export default commands;
