import State from "../../state";

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
