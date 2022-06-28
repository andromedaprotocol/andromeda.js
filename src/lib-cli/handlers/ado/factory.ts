import chalk from "chalk";
// import ora from "ora";
import { validateOrRequest } from "../../common";
import { Commands } from "../../types";
import { client, defaultFee } from "../chain";

const commands: Commands = {
  updatecodeid: {
    description: "Updates the code ID for a given ADO",
    usage: "ado factory updatecodeid <ado key?> <code id?>",
    handler: updateCodeIdHandler,
    color: chalk.blue,
  },
  address: {
    description: "Gets the current address for the factory",
    usage: "ado factory address",
    handler: getAddressHandler,
    color: chalk.white,
  },
};

async function updateCodeIdHandler(input: string[]) {
  let [adoKey, codeId] = input;
  let parsedCodeId: number;

  adoKey = await validateOrRequest("Input the key for the ADO:", adoKey);
  codeId = await validateOrRequest(
    "Input the new code ID for the ADO:",
    codeId
  );
  try {
    parsedCodeId = parseInt(codeId);
  } catch (error) {
    throw new Error("Invalid Code ID");
  }

  const { factory } = client;
  // const spinner = ora("Updating code ID").start();
  const resp = await factory.updateCodeId(adoKey, parsedCodeId, defaultFee);
  // spinner.stop();

  console.log(chalk.green("Code ID updated!"));
  console.log();
  console.log(
    `https://testnet.mintscan.io/juno-testnet/txs/${resp.transactionHash}`
  );
}

async function getAddressHandler() {
  console.log(client.factory.address);
}

export default commands;
