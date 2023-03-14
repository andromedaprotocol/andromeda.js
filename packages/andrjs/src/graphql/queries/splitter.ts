import { query } from "../client";
import { gql } from "graphql-request";
import { ContractAddressQuery, Recipient } from "./types";

export interface SplitterResponse<T> {
  splitter: T;
}

export interface RecipientPercentage {
  percent: string;
  recipient: Recipient;
}
export interface SplitterConfig {
  locked: boolean;
  recipients: RecipientPercentage[];
}

export interface QuerySplitterConfig extends ContractAddressQuery {}
export type QuerySplitterConfigResponse = SplitterResponse<{
  config: SplitterConfig;
}>;

export const QUERY_SPLITTER_CONFIG = gql`
  query QUERY_SPLITTER_CONFIG($contractAddress: String!) {
    splitter(address: $contractAddress) {
      config {
        locked
        recipients {
          percent
          recipient
        }
      }
    }
  }
`;

/**
 * Queries a splitter contract for its config
 * @param contractAddress
 * @returns
 */
export async function queryConfig(
  contractAddress: string
): Promise<SplitterConfig> {
  const resp = await query<QuerySplitterConfig, QuerySplitterConfigResponse>(
    QUERY_SPLITTER_CONFIG,
    { contractAddress }
  );

  return resp.splitter.config;
}
