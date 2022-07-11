import { Coin } from "@cosmjs/proto-signing";
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

//Redundant typing here (SEE PRIMITIVEAPI)
export interface QueryPrimitiveValue extends ContractAddressQuery {
  key: string;
}

export interface StringPrimitive {
  string: string;
}

export interface Uint128Primitive {
  uin128: string;
}

export interface DecimalPrimitive {
  decimal: string;
}

export interface CoinPrimitive {
  coin: Coin;
}

export interface BoolPrimitive {
  bool: Boolean;
}

export interface VecPrimitive {
  vec: PrimitiveValue[];
}

export type PrimitiveValue =
  | StringPrimitive
  | Uint128Primitive
  | DecimalPrimitive
  | CoinPrimitive
  | BoolPrimitive
  | VecPrimitive;

export interface PrimitiveResponse {
  key: string;
  value: PrimitiveValue;
}

export interface QueryPrimitiveValueResponse {
  getValue: PrimitiveResponse;
}

export const QUERY_PRIMITIVE_VALUE = gql`
  fragment PRIMITIVE_VALUES on Primitive {
    string
    bool
    coin {
      denom
      amount
    }
    uint128
    decimal
  }

  fragment PRIMITIVE_VALUE_VEC on Primitive {
    vec {
      ...PRIMITIVE_VALUES
      vec {
        ...PRIMITIVE_VALUES
        vec {
          ...PRIMITIVE_VALUES
        }
      }
    }
  }

  query QUERY_PRIMITIVE_VALUE($contractAddress: String!, $key: String!) {
    primitive(contractAddress: $contractAddress) {
      getValue(key: $key) {
        key
        value {
          ...PRIMITIVE_VALUES
          ...PRIMITIVE_VALUE_VEC
        }
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
