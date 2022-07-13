import { query } from "../client";
import { gql } from "graphql-request";
import { ContractAddressQuery, Recipient } from "./types";

export interface RecipientPercentage {
  percent: string;
  recipient: Recipient;
}
export interface SplitterConfig {
  locked: boolean;
  recipients: RecipientPercentage[];
}
export interface QuerySplitterConfig extends ContractAddressQuery {}
export interface QuerySplitterConfigResponse {
  config: SplitterConfig;
}

export const QUERY_SPLITTER_CONFIG = gql`
  query QUERY_SPLITTER_CONFIG($contractAddress: String!) {
    splitter(contractAddress: $contractAddress) {
      config {
        locked
        recipients {
          percent
          recipient {
            a_d_o {
              address {
                identifier
              }
              msg
            }
            addr
          }
        }
      }
    }
  }
`;

export async function queryConfig(
  contractAddress: string
): Promise<SplitterConfig> {
  const resp = await query<QuerySplitterConfig, QuerySplitterConfigResponse>(
    QUERY_SPLITTER_CONFIG,
    { contractAddress }
  );

  return resp.config;
}
