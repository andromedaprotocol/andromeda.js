import { query } from "../client";
import { gql } from "graphql-request";
import type {
  AndrAddress,
  ContractAddressQuery,
  Expiry,
  Recipient,
} from "./types";
import { Coin } from "@cosmjs/proto-signing";

export interface QueryCrowdfundAvailableTokens extends ContractAddressQuery {}
export interface QueryCrowdfundAvailableTokensResponse {
  availableTokens: string[];
}

export const QUERY_CROWDFUND_AVAILABLE_TOKENS = gql`
  query QUERY_CROWDFUND_AVAILABLE_TOKENS($contractAddress: String!) {
    crowdfund(contractAddress: $contractAddress) {
      availableTokens
    }
  }
`;

export async function queryCrowdfundAvailableTokens(
  contractAddress: string
): Promise<string[]> {
  const resp = await query<
    QueryCrowdfundAvailableTokens,
    QueryCrowdfundAvailableTokensResponse
  >(QUERY_CROWDFUND_AVAILABLE_TOKENS, { contractAddress });

  return resp.availableTokens;
}

export interface CrowdfundConfig {
  can_mint_after_sale: boolean;
  token_address: AndrAddress;
}
export interface QueryCrowdfundConfig extends ContractAddressQuery {}
export interface QueryCrowdfundConfigResponse {
  config: CrowdfundConfig;
}

export const QUERY_CROWDFUND_CONFIG = gql`
  query QUERY_CROWDFUND_CONFIG($contractAddress: String!) {
    crowdfund(contractAddress: $contractAddress) {
      config {
        can_mint_after_sale
        token_address {
          identifier
        }
      }
    }
  }
`;

export async function queryCrowdfundConfig(
  contractAddress: string
): Promise<CrowdfundConfig> {
  const resp = await query<QueryCrowdfundConfig, QueryCrowdfundConfigResponse>(
    QUERY_CROWDFUND_CONFIG,
    { contractAddress }
  );

  return resp.config;
}

export interface QueryCrowdfundTokenAvailable extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCrowdfundTokenAvailableResponse {
  isTokenAvailable: boolean;
}

export const QUERY_CROWDFUND_TOKEN_AVAILABLE = gql`
  query QUERY_CROWDFUND_TOKEN_AVAILABLE(
    $contractAddress: String!
    $tokenId: String!
  ) {
    crowdfund(contractAddress: $contractAddress) {
      isTokenAvailable(tokenId: $tokenId)
    }
  }
`;

export async function queryCrowdfundTokenAvailable(
  contractAddress: string,
  tokenId: string
): Promise<boolean> {
  const resp = await query<
    QueryCrowdfundTokenAvailable,
    QueryCrowdfundTokenAvailableResponse
  >(QUERY_CROWDFUND_TOKEN_AVAILABLE, { contractAddress, tokenId });

  return resp.isTokenAvailable;
}

export interface CrowdfundState {
  amount_sold: number;
  amount_to_send: number;
  amount_transferred: number;
  expiration: Expiry;
  max_amount_per_wallet: number;
  min_tokens_sold: number;
  price: Coin;
  recipient: Recipient;
}
export interface QueryCrowdfundState extends ContractAddressQuery {}
export interface QueryCrowdfundStateResponse {
  state: CrowdfundState;
}

export const QUERY_CROWDFUND_STATE = gql`
  query QUERY_CROWDFUND_STATE($contractAddress: String!) {
    crowdfund(contractAddress: $contractAddress) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        expiration {
          at_height
          at_time
        }
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
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
`;

export async function queryCrowdfundState(
  contractAddress: string
): Promise<CrowdfundState> {
  const resp = await query<QueryCrowdfundState, QueryCrowdfundStateResponse>(
    QUERY_CROWDFUND_STATE,
    { contractAddress }
  );

  return resp.state;
}
