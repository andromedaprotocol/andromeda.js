import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface QueryPrimitive extends ContractAddressQuery {}

export interface QueryPrimitiveResponse {
  owner: string;
}

export const QUERY_PRIMITIVE = gql`
  query QUERY_PRIMITIVE($contractAddress: String!) {
    primitive(contractAddress: $contractAddress) {
      owner
    }
  }
`;

/**
 * Queries details about a primitive given its contract address
 * @param contractAddress The contract address of the primitive
 * @returns
 */
export async function queryPrimitive(contractAddress: string) {
  return query<QueryPrimitive, QueryPrimitiveResponse>(QUERY_PRIMITIVE, {
    contractAddress,
  });
}
