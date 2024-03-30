
import { querySdk } from "../client";
/**
 * Queries an address list contract whether it includes a given address
 * @param contractAddress
 * @param address
 * @returns
 */
export async function queryAddressListIncludesAddress(
  contractAddress: string,
  address: string
) {
  const resp = await querySdk.ADDRESS_LIST_CONTAINS_ADDRESS({
    address,
    contractAddress
  });

  return resp.ADO.address_list.includesAddress.included;
}
