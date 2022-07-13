import { query } from "../client";
import { gql } from "graphql-request";
import { ContractAddressQuery } from "./types";

export interface QueryReceiptMinter extends ContractAddressQuery {}
export interface QueryReceiptMinterResponse {
  minter: string;
}

export const QUERY_RECEIPT_MINTER = gql`
  query QUERY_RECEIPT_MINTER($contractAddress: String!) {
    receipt(contractAddress: $contractAddress) {
      minter
    }
  }
`;

export async function queryMinter(contractAddress: string): Promise<string> {
  const resp = await query<QueryReceiptMinter, QueryReceiptMinterResponse>(
    QUERY_RECEIPT_MINTER,
    { contractAddress }
  );

  return resp.minter;
}
