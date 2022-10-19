import {
  fetchSchema,
  queryADOPackageDefinition,
  queryADOTypes,
} from "@andromeda/andromeda-js";
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
import { Commands, Flags } from "../../types";
import gqlCommands from "../gql";
import { generateHandler, validateAddressInput } from "../utils";
import { executeMessage, instantiateMessage, queryMessage } from "../wasm";
import factoryCommands from "./factory";
import State from "../../state";

const { client } = State;

// Factory has several subcommands, see `factory.ts`
const factoryHandler = generateHandler(factoryCommands);

const commands: Commands = {
  factory: {
    handler: factoryHandler,
    usage: "ado factory",
    description: "Allows executing and querying for a Factory ADO",
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
  type: {
    handler: queryTypeHandler,
    usage: "ado type <address>",
    description: "Queries the type of ADO for a given address",
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
};

/**
 * Creates an ADO by given type
 * @param input
 * @param flags
 */
async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const {
    schemas: { instantiate },
  } = await queryADOPackageDefinition(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate)
  );

  const msg = await promptInstantiateMsg(schema, type);

  const codeId = await client.factory.getCodeId(type);

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
    schemas: { execute },
  } = await queryADOPackageDefinition(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(execute)
  );

  const msg = await promptQueryOrExecuteMessage(schema, type);
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
    schemas: { query },
  } = await queryADOPackageDefinition(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(query)
  );

  const msg = await promptQueryOrExecuteMessage(schema, type);
  const resp = await queryMessage(address, msg);

  console.log(JSON.stringify(resp, null, 2));
}

/**
 * Queries an ADO for its type by address
 * @param input
 */
async function queryTypeHandler(input: string[]) {
  const [address] = input;
  const type = await queryADOType(address);

  console.log(type);
}

export default commands;
