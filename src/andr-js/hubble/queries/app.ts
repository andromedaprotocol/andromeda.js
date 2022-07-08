import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export interface QueryApp extends ContractAddressQuery {}

export interface QueryAppResponse {
  app: {
    getAddresses: {
      address: string;
      name: string;
    }[];
    getComponents: {
      name: string;
      ado_type: string;
    }[];
    config: {
      name: string;
      owner: string;
    };
  };
}

/**
 * GraphQL Document to Query App details
 */
export const QUERY_APP = gql`
  query QUERY_APP($contractAddress: String!) {
    app(contractAddress: $contractAddress) {
      getAddresses {
        address
        name
      }
      getComponents {
        name
        ado_type
      }
      config {
        name
        owner
      }
    }
  }
`;

/**
 * Queries details about an App given its contract address
 * @param contractAddress The contract address of the app
 * @returns
 */
export async function queryApp(contractAddress: string) {
  return query<QueryApp, QueryAppResponse>(QUERY_APP, { contractAddress });
}
