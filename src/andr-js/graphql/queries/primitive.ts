import type { PrimitiveValue } from "../../types";
import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface QueryPrimitive extends ContractAddressQuery {}

export interface QueryPrimitiveResponse {
  owner: string;
}

export const QUERY_PRIMITIVE = gql`
  query QUERY_PRIMITIVE($contractAddress: String!) {
    primitive(address: $contractAddress) {
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

//Redundant typing here (SEE PRIMITIVEAPI)
export interface QueryPrimitiveValue extends ContractAddressQuery {
  key: string;
}

export interface PrimitiveResponse {
  key: string;
  value: PrimitiveValue;
}

export interface QueryPrimitiveValueResponse {
  getValue: PrimitiveResponse;
}

export const QUERY_PRIMITIVE_VALUE = gql`
  query QUERY_PRIMITIVE_VALUE($contractAddress: String!, $key: String!) {
    primitive(address: $contractAddress) {
      getValue(key: $key) {
        key
        value
      }
    }
  }
`;

/**
 * Queries the value of a given key from a given primitie contract
 * @param contractAddress The contract address of the primitive
 * @param key The key to query
 * @returns
 */
export async function queryPrimitiveValue(
  contractAddress: string,
  key: string
) {
  return query<QueryPrimitiveValue, QueryPrimitiveValueResponse>(
    QUERY_PRIMITIVE_VALUE,
    {
      contractAddress,
      key,
    }
  );
}
