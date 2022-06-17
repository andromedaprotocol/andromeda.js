import chalk from "chalk";
import { handle } from "../cmd";
import { Commands } from "../types";
import { client } from "./chain";

export const commands: Commands = {
  query: {
    handler: query,
    color: chalk.green,
    description: `Queries a contract. Usage: ${chalk.green(
      "wasm query <contract address> <query>"
    )}`,
  },
};

async function query(input: string) {
  const [contractAddr, msg] = input
    .trim()
    .split(" ")
    .filter((str) => str.trim().length > 0)
    .map((str) => str.trim());
  if (!contractAddr) {
    console.error(chalk.red("Invalid contract address"));
    return;
  } else if (!msg) {
    console.error(chalk.red("Invalid query message"));
    return;
  }

  try {
    const parsedMsg = JSON.parse(msg);

    const resp = await client.queryContract(contractAddr, parsedMsg);
    console.log(resp);
  } catch (error) {
    console.error(chalk.red(error));
  }
}

export default function wasmHandler(input: string) {
  return handle(input, commands);
}
