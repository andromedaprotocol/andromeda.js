import { query } from "../client";
import type { ContractAddressQuery } from "./types";
import { gql } from "graphql-request";

export interface TokenInfo {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: number;
}
export interface QueryCW20TokenInfo extends ContractAddressQuery {}
export interface QueryCW20TokenInfoResponse {
  tokenInfo: TokenInfo;
}

export const QUERY_CW20_TOKEN_INFO = gql`
  query QUERY_CW20_TOKEN_INFO($contractAddress: String!) {
    cw20token(contractAddress: $contractAddress) {
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
`;

export async function queryCW20TokenInfo(
  contractAddress: string
): Promise<TokenInfo> {
  const resp = await query<QueryCW20TokenInfo, QueryCW20TokenInfoResponse>(
    QUERY_CW20_TOKEN_INFO,
    { contractAddress }
  );

  return resp.tokenInfo;
}
