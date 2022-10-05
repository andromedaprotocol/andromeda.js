import { fetchSchema, getSchemaURLsByType } from "@andromeda/andromeda-js";
import chalk from "chalk";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
} from "../../common";
import {
  InstantiateSchemaPrompt,
  promptQueryOrExecuteMessage,
} from "../../schema";
import { Commands, Flags } from "../../types";
import { executeMessage, instantiateMessage, queryMessage } from "../wasm";
import client from "../client";
import { generateHandler, validateAddressInput } from "../utils";
import factoryCommands from "./factory";
import gqlCommands from "../gql";

// Factory has several subcommands, see `factory.ts`
const factoryHandler = generateHandler(factoryCommands);

const commands: Commands = {
  factory: {
    handler: factoryHandler,
    usage: "ado factory",
    description: "Allows executing and querying for a Factory ADO",
    color: chalk.rgb(23, 125, 90),
  },
  create: {
    handler: createHandler,
    usage: "ado create <type>",
    description: "Creates an ADO by given type",
    flags: instantiateFlags,
    color: chalk.green,
    inputs: [
      {
        requestMessage: "Input the ADO type:",
        validate: (input: string) => {
          try {
            getSchemaURLsByType(input);
            return true;
          } catch (error) {
            const { message } = error as Error;
            console.log();
            console.log(chalk.red(message));
            return false;
          }
        },
      },
    ],
  },
  execute: {
    handler: executeHandler,
    usage: "ado execute <address>",
    description: "Executes a message on an ADO by given address",
    flags: executeFlags,
    color: chalk.blue,
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
    color: chalk.rgb(120, 125, 30),
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
    color: chalk.yellow,
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
    color: chalk.rgb(1, 2, 254),
  },
};

/**
 * Creates an ADO by given type
 * @param input
 * @param flags
 */
async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const { instantiate } = getSchemaURLsByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate)
  );

  const prompter = new InstantiateSchemaPrompt(schema);
  const msg = await prompter.start();

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
    console.error(chalk.red("Contract is not a valid ADO"));
    return;
  }

  const { execute } = getSchemaURLsByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(execute)
  );

  const msg = await promptQueryOrExecuteMessage(schema);
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
    console.error(chalk.red("Contract is not a valid ADO"));
    return;
  }

  const { query } = getSchemaURLsByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(query)
  );

  const msg = await promptQueryOrExecuteMessage(schema);
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
