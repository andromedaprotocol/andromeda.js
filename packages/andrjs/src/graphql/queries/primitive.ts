import type { PrimitiveValue } from "../../types";
import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface PrimitiveResponse<T> {
  primitive: T;
}

export interface QueryPrimitive extends ContractAddressQuery {}

export type QueryPrimitiveResponse = PrimitiveResponse<{
  owner: string;
}>;

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
  const resp = await query<QueryPrimitive, QueryPrimitiveResponse>(
    QUERY_PRIMITIVE,
    {
      contractAddress,
    }
  );
  return resp.primitive.owner;
}

export interface QueryPrimitiveValue extends ContractAddressQuery {
  key: string;
}

export interface PrimitiveValueResponse {
  key: string;
  value: PrimitiveValue;
}

export type QueryPrimitiveValueResponse = PrimitiveResponse<{
  getValue: PrimitiveValueResponse;
}>;

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
  const resp = await query<QueryPrimitiveValue, QueryPrimitiveValueResponse>(
    QUERY_PRIMITIVE_VALUE,
    {
      contractAddress,
      key,
    }
  );
  return resp.primitive.getValue;
}
