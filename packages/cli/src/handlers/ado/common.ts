import { displaySpinnerAsync } from "../../common";
import State from "../../state";
import { promptWithExit } from "../../cmd";
import { Answers } from "inquirer";

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