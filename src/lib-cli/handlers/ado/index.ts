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
import { executeMessage, instantiateMessage, queryMessage } from "../chain";
import client from "../client";
import { generateHandler } from "../utils";
import factoryCommands from "./factory";
import gqlCommands from "../gql";

const factoryHandler = generateHandler(factoryCommands);

const commands: Commands = {
  factory: {
    handler: factoryHandler,
    usage: "ado factory",
    description: "Allows executing and querying for a Factory ADO",
    color: chalk.black,
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
        requestMessage: "Input the ADO Addess:",
      },
    ],
  },
  query: {
    handler: queryHandler,
    usage: "ado query <address>",
    description: "Queries an ADO by given address",
    color: chalk.blue,
    inputs: [
      {
        requestMessage: "Input the ADO Addess:",
      },
    ],
  },
  type: {
    handler: queryTypeHandler,
    usage: "ado type <address>",
    description: "Queries the type of ADO for a given address",
    flags: executeFlags,
    color: chalk.yellow,
    inputs: [
      {
        requestMessage: "Input the ADO Addess:",
      },
    ],
  },
  list: { ...gqlCommands.assets, usage: "ado list" },
};

async function createHandler(input: string[], flags: Flags) {
  const [type] = input;
  const { instantiate } = getSchemaURLsByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate)
  );

  const prompter = new InstantiateSchemaPrompt(schema);
  const msg = await prompter.start();

  const codeId = await client.ado.factory.getCodeId(type);

  await instantiateMessage(codeId, msg, flags);
}

async function queryADOType(address: string) {
  const queryMsg = {
    andr_query: {
      type: {},
    },
  };

  const { ado_type } = await queryMessage<{ ado_type: string }>(
    address,
    queryMsg
  );

  return ado_type;
}

async function executeHandler(input: string[], flags: Flags) {
  const [address] = input;

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

async function queryTypeHandler(input: string[]) {
  const [address] = input;
  const type = await queryADOType(address);

  console.log(type);
}

export default commands;
