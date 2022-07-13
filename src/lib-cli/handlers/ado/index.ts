import chalk from "chalk";
import { Commands } from "lib-cli/types";
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
};

export default commands;
