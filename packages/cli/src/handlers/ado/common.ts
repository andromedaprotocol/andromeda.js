import { displaySpinnerAsync, executeFlags } from "../../common";
import State from "../../state";
import { promptWithExit } from "../../cmd";
import { Answers } from "inquirer";
import { Commands } from "types";
import { executeHandler, queryHandler } from ".";
import pc from "picocolors";

const { client } = State;

/**
 * Validates if the given address is the owner of a given ADO address
 * @param adoAddress
 * @param address
 * @returns
 */
export async function isADOOwner(
  adoAddress: string,
  address: string
): Promise<boolean> {
  const owner = await client.ado.getOwner(adoAddress);

  return address === owner;
}

export async function promptAdoType(
  name: string,
  bread?: string[]
) {
  const adoTypes = await displaySpinnerAsync(
    "Fetching ADO types...",
    async () => await client!.os!.adoDB!.getAllADO()
  );
  const input = await promptWithExit({
    prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
    message: name,
    type: "autocomplete" as any,
    name: "adoType",
    suggestOnly: true,
    source: (_answers: Answers, input = '') => {
      if (input.trim() === '') return adoTypes;
      return adoTypes.filter(a => a.includes(input));
    },
  })
  return input.adoType as string;
}

export function addressQueryExecuteInjector(address: () => string | Promise<string>, prefix: string, label: string) {
  const commands: Commands = {
    query: {
      handler: async () => queryHandler([await address()]),
      usage: `${prefix} query`,
      description: `Query ${label}`,
      color: pc.green,
    },
    execute: {
      handler: async (_input, flags) => executeHandler([await address()], flags),
      usage: `${prefix} execute`,
      description: `Execute ${label}`,
      color: pc.magenta,
      flags: executeFlags
    },
  }
  return commands;
}
