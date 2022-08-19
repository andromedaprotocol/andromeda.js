import { fetchSchema, getSchemasByType } from "@andromeda/andromeda-js";
import chalk from "chalk";
import { schemaPrompt } from "../../schemas";
import { displaySpinnerAsync, instantiateFlags } from "../../common";
import { Commands, Flags } from "../../types";
import { generateHandler } from "../utils";
import factoryCommands from "./factory";
import primitiveCommands from "./primitive";
import client from "../client";
import { instantiateMessage } from "../chain";

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
};

async function createHandler(inputs: string[], flags: Flags) {
  const [type] = inputs;
  const { instantiate } = getSchemasByType(type);
  const schema = await displaySpinnerAsync(
    "Fetching schema...",
    async () => await fetchSchema(instantiate)
  );
  const msg = await schemaPrompt(schema);

  const codeId = await client.ado.factory.getCodeId(type);

  await instantiateMessage(codeId, msg, flags);
}

export default commands;
