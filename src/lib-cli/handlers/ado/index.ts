import { fetchSchema, getSchemasByType } from "@andromeda/andromeda-js";
import chalk from "chalk";
import { displaySpinnerAsync, instantiateFlags } from "../../common";
import { InstantiateSchemaPrompt } from "../../schema";
import { Commands, Flags } from "../../types";
import { instantiateMessage } from "../chain";
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

export default commands;
