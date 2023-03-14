import {
  ContractSchema,
  fetchSchema,
  queryADOPackageDefinition,
  queryADOTypes,
} from "@andromedaprotocol/andromeda.js";
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
        validate: async (input: string) => {
          try {
            await queryADOPackageDefinition(input.toLowerCase());
            return true;
          } catch (error) {
            const { message } = error as Error;
            if (message.includes("unknown adoType")) {
              console.log(pc.red("Invalid ADO Type"));
            } else {
              console.log(pc.red(message));
            }
            return false;
          }
        },
        options: async () => {
          try {
            const adoTypes = displaySpinnerAsync(
              "Fetching ADO types...",
              async () => await queryADOTypes()
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
};

/**
 * Creates an ADO by given type
 * @param input
 * @param flags
 */
async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const {
    schemas: { contract_schema, instantiate },
  } = await queryADOPackageDefinition(type);
  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate ?? contract_schema)
  );

  const msg = await promptInstantiateMsg(
    (adoSchema as ContractSchema).instantiate
      ? (adoSchema as ContractSchema).instantiate
      : (adoSchema as Schema),
    type
  );

  const codeId = await client.adoDB.getCodeId(type);

  await instantiateMessage(codeId, msg, flags);
}

/**
 * Queries an ADO for its type by address
 * @param address The address of the ADO
 * @returns The type of ADO the contract is, errors if the contract is not an ADO
 */
async function queryADOType(address: string) {
  const queryMsg = client.ado.typeQuery();

  const { ado_type } = await queryMessage<{ ado_type: string }>(
    address,
    queryMsg
  );

  return ado_type;
}

/**
 * Executes a chosen message on an ADO by its address
 * @param input
 * @param flags
 */
async function executeHandler(input: string[], flags: Flags) {
  const [address] = input;

  //The ADO type must be fetched before the message types can be determined
  let type = "";
  try {
    type = await queryADOType(address);
  } catch (error) {
    console.error(pc.red("Contract is not a valid ADO"));
    return;
  }

  const {
    schemas: { contract_schema, execute },
  } = await queryADOPackageDefinition(type);
  const adoSchema: ContractSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(execute ?? contract_schema)
  );

  const msg = await promptQueryOrExecuteMessage(
    (adoSchema as ContractSchema).execute
      ? (adoSchema as ContractSchema).execute
      : (adoSchema as Schema),
    type
  );
  await executeMessage(address, msg, flags);
}

/**
 *  Queries an ADO by its address
 * @param input
 */
async function queryHandler(input: string[]) {
  const [address] = input;

  let type = "";
  try {
    type = await queryADOType(address);
  } catch (error) {
    console.error(pc.red("Contract is not a valid ADO"));
    return;
  }

  const {
    schemas: { contract_schema, query },
  } = await queryADOPackageDefinition(type);
  const adoSchema = await displaySpinnerAsync(
    "Fetching schema...",
    async () =>
      await fetchSchema<ContractSchema | Schema>(query ?? contract_schema)
  );

  const msg = await promptQueryOrExecuteMessage(
    (adoSchema as ContractSchema).query
      ? (adoSchema as ContractSchema).query
      : (adoSchema as Schema),
    type
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

export default commands;
