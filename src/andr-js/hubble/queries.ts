import { gql } from "graphql-request";
import { query } from "./client";

export interface QueryApp {
  contractAddress: string;
}

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

export async function queryApp(contractAddress: string) {
  return query<QueryApp, QueryAppResponse>(QUERY_APP, { contractAddress });
}
