import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface QueryAddressListIncludesAddress extends ContractAddressQuery {
  address: string;
}
export interface QueryAddressListIncludesAddressResponse {
  includesAddress: {
    included: boolean;
  };
}

export const QUERY_ADDRESS_LIST_CONTAINS_ADDRESS = gql`
  query QUERY_ADDRESS_LIST_CONTAINS_ADDRESS(
    $contractAddress: String!
    $address: String!
  ) {
    addresslist(contractAddress: $contractAddress) {
      includesAddress(address: $address) {
        included
      }
    }
  }
`;

export async function queryAddressListIncludesAddress(
  contractAddress: string,
  address: string
): Promise<boolean> {
  const resp = await query<
    QueryAddressListIncludesAddress,
    QueryAddressListIncludesAddressResponse
  >(QUERY_ADDRESS_LIST_CONTAINS_ADDRESS, { address, contractAddress });

  return resp.includesAddress.included;
}
