import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface AddresslistResponse<T> {
  addresslist: T;
}

export interface QueryAddressListIncludesAddress extends ContractAddressQuery {
  address: string;
}
export type QueryAddressListIncludesAddressResponse = AddresslistResponse<{
  includesAddress: {
    included: boolean;
  };
}>;

export const QUERY_ADDRESS_LIST_CONTAINS_ADDRESS = gql`
  query QUERY_ADDRESS_LIST_CONTAINS_ADDRESS(
    $contractAddress: String!
    $address: String!
  ) {
    addresslist(address: $contractAddress) {
      includesAddress(address: $address) {
        included
      }
    }
  }
`;

/**
 * Queries an address list contract whether it includes a given address
 * @param contractAddress
 * @param address
 * @returns
 */
export async function queryAddressListIncludesAddress(
  contractAddress: string,
  address: string
): Promise<boolean> {
  const resp = await query<
    QueryAddressListIncludesAddress,
    QueryAddressListIncludesAddressResponse
  >(QUERY_ADDRESS_LIST_CONTAINS_ADDRESS, { address, contractAddress });

  return resp.addresslist.includesAddress.included;
}
