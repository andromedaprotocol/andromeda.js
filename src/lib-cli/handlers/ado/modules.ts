import { Module } from "@andromeda/andromeda-js";
import inquirer from "inquirer";
import { exitInputs } from "../../cmd";
import pc from "picocolors";
import {
  displaySpinnerAsync,
  executeFlags,
  logTableConfig,
} from "../../common";
import State from "../../state";
import { Commands, Flags } from "../../types";
import { validateAddressInput } from "../utils";
import { executeMessage, queryMessage } from "../wasm";
import Table from "cli-table";
import { isADOOwner } from "./common";

const { client, wallets } = State;

const commands: Commands = {
  list: {
    description: "Lists all modules for an ADO",
    usage: "ado modules list <address>",
    handler: listModulesHandler,
    color: pc.cyan,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  add: {
    description: "Adds a module to an ADO",
    usage: "ado modules add <address>",
    handler: addModuleHandler,
    color: pc.blue,
    flags: executeFlags,
    disabled: () => !wallets.currentWallet,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  rm: {
    description: "Removes a module from an ADO",
    usage: "ado modules rm <address>",
    handler: removeModuleHandler,
    color: pc.red,
    flags: executeFlags,
    disabled: () => !wallets.currentWallet,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
  edit: {
    description: "Edits an already added module attached to an ADO",
    usage: "ado modules edit <address>",
    handler: editModuleHandler,
    color: pc.yellow,
    flags: executeFlags,
    disabled: () => !wallets.currentWallet,
    inputs: [
      {
        requestMessage: "Input the ADO Address:",
        validate: validateAddressInput,
      },
    ],
  },
};

/**
 * Queries if an ADO implements modules
 * @param address
 * @returns
 */
async function implementsModules(address: string): Promise<boolean> {
  try {
    await queryMessage(address, client.ado.moduleIdsQuery());
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Gets modules for a given ADO address
 * @param address
 * @returns
 */
async function getADOModules(address: string): Promise<Module[]> {
  const modules = await displaySpinnerAsync(
    "Querying modules...",
    async () => await client.ado.getModules(address)
  );

  return modules;
}

/**
 * Prompts the user for details about a module, defaults are set to the module provided as the first parameter if it is provided
 * @param module
 * @returns The created Module
 */
async function promptForModule(module?: Module): Promise<Module> {
  const { module_type } = await inquirer.prompt({
    type: "input",
    default: module ? module.module_type : undefined,
    message: `Input the module type${
      module ? ` (currently: ${module.module_type})` : ""
    }:`,
    name: "module_type",
  });

  if (exitInputs.includes(module_type)) throw new Error("Prompt exited");
  const { address } = await inquirer.prompt({
    type: "input",
    default: module ? module.address.identifier : undefined,
    message: `Input the module address${
      module ? ` (currently: ${module.address.identifier})` : ""
    }:`,
    name: "address",
    validate: validateAddressInput,
  });
  if (exitInputs.includes(address)) throw new Error("Prompt exited");
  const { is_mutable } = await inquirer.prompt({
    type: "confirm",
    default: module ? module.is_mutable : undefined,
    message: `Should this module be mutable?${
      module ? ` (currently: ${module.address.identifier})` : ""
    }`,
    name: "is_mutable",
  });

  return {
    module_type,
    is_mutable,
    address: {
      identifier: address,
    },
  };
}

/**
 * Adds a module to an ADO
 * @param input
 * @param flags
 */
async function addModuleHandler(input: string[], flags: Flags) {
  const [address] = input;
  const currWallet = wallets.currentWalletAddress;
  if (!isADOOwner(address, currWallet!))
    throw new Error("Cannot add modules to an ADO you do not own");

  if (!(await implementsModules(address)))
    throw new Error("Address does not implement ADO Modules");
  const module = await promptForModule();

  const msg = client.ado.registerModuleMsg(module);
  await executeMessage(address, msg, flags, "Module registered!");
}

/**
 * Lists all current modules attached to an ADO
 * @param input
 */
async function listModulesHandler(input: string[]) {
  const [address] = input;
  const modules = await getADOModules(address);

  const table = new Table(logTableConfig);
  table.push([
    pc.bold(""),
    pc.bold("Type"),
    pc.bold("Address"),
    pc.bold("Mutable"),
  ]);

  modules.forEach((mod) =>
    table.push([
      mod.idx!.toString(),
      mod.module_type,
      mod.address.identifier,
      pc.bold(mod.is_mutable ? pc.green("✓") : pc.red("x")),
    ])
  );

  console.log();
  console.log(table.toString());
}

/**
 * Removes a module from an ADO
 * @param input
 * @param flags
 */
async function removeModuleHandler(input: string[], flags: Flags) {
  const [address] = input;
  const currWallet = wallets.currentWalletAddress;
  if (!isADOOwner(address, currWallet!))
    throw new Error("Cannot add modules to an ADO you do not own");

  if (!(await implementsModules(address)))
    throw new Error("Address does not implement ADO Modules");

  const modules = await getADOModules(address);

  const rmChoice = await inquirer.prompt({
    type: "list",
    name: "rm",
    choices: modules.map((mod) => ({
      name: `(${mod.idx}) ${mod.module_type} ${mod.address.identifier}`,
      value: mod.idx,
    })),
    message: "Choose which module to remove:",
  });
  await executeMessage(
    address,
    client.ado.deregisterModuleMsg(rmChoice.rm),
    flags,
    "Module removed!"
  );
}

/**
 * Edits a module attached to an ADO
 * @param input
 * @param flags
 */
async function editModuleHandler(input: string[], flags: Flags) {
  const [address] = input;
  const currWallet = wallets.currentWalletAddress;
  if (!isADOOwner(address, currWallet!))
    throw new Error("Cannot add modules to an ADO you do not own");

  if (!(await implementsModules(address)))
    throw new Error("Address does not implement ADO Modules");

  const modules = await getADOModules(address);

  const editChoice: { edit: Module } = await inquirer.prompt({
    type: "list",
    name: "edit",
    choices: modules
      .filter((mod) => mod.is_mutable)
      .map((mod) => ({
        name: `(${mod.idx}) ${mod.module_type} ${mod.address.identifier}`,
        value: mod,
      })),
    message: "Choose which module to edit:",
  });

  const updated = await promptForModule(editChoice.edit);

  await executeMessage(
    address,
    client.ado.alterModuleMsg(editChoice.edit.idx!, updated),
    flags,
    "Module removed!"
  );
}

export default commands;
