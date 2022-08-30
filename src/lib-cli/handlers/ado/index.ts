import { fetchSchema, getSchemasByType } from "@andromeda/andromeda-js";
import chalk from "chalk";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
} from "../../common";
import { InstantiateSchemaPrompt, promptExecuteMessage } from "../../schema";
import { Commands, Flags } from "../../types";
import { executeMessage, instantiateMessage, queryMessage } from "../chain";
import client from "../client";
import { generateHandler } from "../utils";
import factoryCommands from "./factory";
import primitiveCommands from "./primitive";

const primitiveHandler = generateHandler(primitiveCommands);
const factoryHandler = generateHandler(factoryCommands);

const commands: Commands = {
  primitive: {
    handler: primitiveHandler,
    usage: "ado primitive",
    description: "Allows executing and querying for a Primitive ADO",
    color: chalk.blue,
  },
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
            getSchemasByType(input);
            return true;
          } catch (error) {
            const { message } = error as Error;
            console.log(chalk.red(message));
            return false;
          }
        },
      },
    ],
  },
  execute: {
    handler: executeHandler,
    usage: "ado execute <type> <address>",
    description: "Executes a message on an ADO by given type and address",
    flags: executeFlags,
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
};

async function createHandler(inputs: string[], flags: Flags) {
  const [type] = inputs;
  const { instantiate } = getSchemasByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate)
  );

  const prompter = new InstantiateSchemaPrompt(schema);
  // const msg = await promptInstantiateFromSchema(schema);
  const msg = await prompter.start();

  const codeId = await client.ado.factory.getCodeId(type);

  await instantiateMessage(codeId, msg, flags);
  // console.log(msg);
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

async function executeHandler(inputs: string[], flags: Flags) {
  const [address] = inputs;

  let type = "";
  try {
    type = await queryADOType(address);
  } catch (error) {
    console.error("Contract is not a valid ADO");
    return;
  }

  const { execute } = getSchemasByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(execute)
  );

  const msg = await promptExecuteMessage(schema);
  await executeMessage(address, msg, flags);
}

async function queryTypeHandler(inputs: string[]) {
  const [address] = inputs;
  const type = await queryADOType(address);

  console.log(type);
}

export default commands;
