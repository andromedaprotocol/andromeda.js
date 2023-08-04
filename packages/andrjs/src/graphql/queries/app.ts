import { querySdk } from "../client";

/**
 * Queries details about an App given its contract address
 * @param contractAddress The contract address of the app
 * @returns
 */

export async function queryApp(contractAddress: string) {
  return (
    await querySdk.QUERYAPP({ contractAddress })
  ).ADO.app;
}
