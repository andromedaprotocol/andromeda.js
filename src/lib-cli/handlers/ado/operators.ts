import Table from "cli-table";
import pc from "picocolors";
import { executeFlags, logTableConfig } from "../../common";
import State from "../../state";
import { Commands, Flags } from "../../types";
import { validateAddressInput } from "../utils";
import { executeMessage, queryMessage } from "../wasm";
import { isADOOwner } from "./common";

const { client, wallets } = State;

const commands: Commands = {
  add: {
    description: "Adds an operator to an ADO",
    usage: "ado operators add <address> <new operator address>",
    handler: addOperatorHandler,
    color: pc.blue,
    flags: executeFlags,
    disabled: () => !wallets.currentWallet,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input the Operator Address:",
        validate: validateAddressInput,
      },
    ],
  },
  list: {
    description: "Lists all operators for an ADO",
    usage: "ado operators list <address>",
    handler: listOperatorsHandler,
    color: pc.cyan,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  rm: {
    description: "Removes an operator from an ADO",
    usage: "ado operators rm <address> <new operator address>",
    handler: removeOperatorHandler,
    color: pc.red,
    flags: executeFlags,
    disabled: () => !wallets.currentWallet,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
      {
        requestMessage: "Input the Operator Address:",
        validate: validateAddressInput,
      },
    ],
  },
};

/**
 * Queries all operators for a given ADO
 * @param address
 * @returns
 */
async function getADOOperators(address: string): Promise<string[]> {
  const { operators } = await queryMessage<{ operators: string[] }>(
    address,
    client.ado.operatorsQuery(),
    "Querying operators..."
  );

  return operators;
}

/**
 * Adds an operator to an ADO
 * @param input
 * @param flags
 */
async function addOperatorHandler(input: string[], flags: Flags) {
  const [address, operator] = input;
  const currWallet = wallets.currentWalletAddress;
  if (!(await isADOOwner(address, currWallet!)))
    throw new Error("Cannot add operators to an ADO you do not own");
  const operators = await getADOOperators(address);
  if (operators.includes(operator))
    throw new Error("Address is already an operator for this ADO");

  const msg = client.ado.updateOperatorsMsg([...operators, operator]);
  await executeMessage(address, msg, flags, "Operator added!");
}

/**
 * Lists all operators for an ADO
 * @param input
 */
async function listOperatorsHandler(input: string[]) {
  const [address] = input;
  const operators = await getADOOperators(address);

  const table = new Table(logTableConfig);
  table.push([pc.bold("Operator Address")]);
  operators.forEach((op) => table.push([op]));

  console.log();
  console.log(table.toString());
}

/**
 * Removes an operator from an ADO
 * @param input
 * @param flags
 */
async function removeOperatorHandler(input: string[], flags: Flags) {
  const [address, operator] = input;
  const currWallet = wallets.currentWalletAddress;
  if (!(await isADOOwner(address, currWallet!)))
    throw new Error("Cannot remove operators from an ADO you do not own");

  const operators = await getADOOperators(address);
  if (!operators.includes(operator))
    throw new Error("Address is not an operator");

  const msg = client.ado.updateOperatorsMsg(
    operators.filter((addr) => addr !== operator)
  );
  await executeMessage(address, msg, flags, "Operator removed!");
}

export default commands;
