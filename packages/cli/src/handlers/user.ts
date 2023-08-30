import pc from "picocolors";
import _ from "lodash";
import { Commands, Flags } from "../types";
import { promptWithExit } from "cmd";
import { executeFlags } from "common";
import State from "../state";
import { executeMessage } from "./wasm";

const { client } = State;

export const commands: Commands = {
  register: {
    handler: registerHandler,
    color: pc.magenta,
    description: "Registers a username for an address",
    usage: "user register",
    flags: executeFlags,
  },
  getusername: {
    handler: async () => {
      if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");
      const walletAddr = State.wallets.currentWalletAddress;
      if (!walletAddr) throw new Error("No wallet currently assigned");

      const resp = await client.os.vfs?.getUsername(walletAddr);
      console.log(JSON.stringify(resp, null, 2));
    },
    color: pc.cyan,
    description: "Gets the username claimed to an address",
    usage: "user getusername",
  },
};

/**
 * Registers a username to an address
 * @param flags
 */
async function registerHandler(flags: Flags) {
  if (!client.os.vfs?.address) throw new Error("VFS has no assigned address");
  const walletAddr = State.wallets.currentWalletAddress;
  if (!walletAddr) throw new Error("No wallet currently assigned");

  const resp = await client.os.vfs?.getUsername(walletAddr);
  console.log(`You already have ${JSON.stringify(resp, null, 2)} registered for your account`);

  let username;
  while (!(await validateUsername(username))) {
    if (username) console.error(pc.red("The username must be alphanumeric characters"));
    const usernameInput = await promptWithExit({
      type: "input",
      message: "Input the username:",
      name: "addUsername",
      validate: (input: string) => {
        return input.trim().length > 0;
      },
    });

    username = usernameInput.addUsername.trim();
    if (username === "exit") return;
  }

  const msgReg = await client.os.vfs?.registerUserMsg(username);
  await executeMessage(client.os.vfs?.address, msgReg, flags, "Username claimed!"); //TODO: ADD FEE FLAG
}

/**
 * Validates input username
 * @param input
 * @returns boolean
 */
async function validateUsername(input: string) {
  const usernameRegex = new RegExp(/^[a-z0-9]+$/i);
  return usernameRegex.test(input ?? '');
}

export default commands;
