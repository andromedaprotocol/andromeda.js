import { query } from "../client";
import { gql } from "graphql-request";
import type { ContractAddressQuery, Expiry, Recipient } from "./types";
import { Coin } from "@cosmjs/proto-signing";

export interface CrowdfundResponse<T> {
  crowdfund: T;
}

export interface QueryCrowdfundAvailableTokens extends ContractAddressQuery {}
export type QueryCrowdfundAvailableTokensResponse = CrowdfundResponse<{
  availableTokens: string[];
}>;

export const QUERY_CROWDFUND_AVAILABLE_TOKENS = gql`
  query QUERY_CROWDFUND_AVAILABLE_TOKENS($contractAddress: String!) {
    crowdfund(address: $contractAddress) {
      availableTokens
    }
  }
`;

/**
 * Queries all available token IDs from a crowdfund contract
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundAvailableTokens(
  contractAddress: string
): Promise<string[]> {
  const resp = await query<
    QueryCrowdfundAvailableTokens,
    QueryCrowdfundAvailableTokensResponse
  >(QUERY_CROWDFUND_AVAILABLE_TOKENS, { contractAddress });

  return resp.crowdfund.availableTokens;
}

export interface CrowdfundConfig {
  can_mint_after_sale: boolean;
  token_address: string;
}
export interface QueryCrowdfundConfig extends ContractAddressQuery {}
export type QueryCrowdfundConfigResponse = CrowdfundResponse<{
  config: CrowdfundConfig;
}>;

export const QUERY_CROWDFUND_CONFIG = gql`
  query QUERY_CROWDFUND_CONFIG($contractAddress: String!) {
    crowdfund(address: $contractAddress) {
      config {
        can_mint_after_sale
        token_address
      }
    }
  }
`;

/**
 * Queries the config for a given crowdfund contract
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundConfig(
  contractAddress: string
): Promise<CrowdfundConfig> {
  const resp = await query<QueryCrowdfundConfig, QueryCrowdfundConfigResponse>(
    QUERY_CROWDFUND_CONFIG,
    { contractAddress }
  );

  return resp.crowdfund.config;
}

export interface QueryCrowdfundTokenAvailable extends ContractAddressQuery {
  tokenId: string;
}
export type QueryCrowdfundTokenAvailableResponse = CrowdfundResponse<{
  isTokenAvailable: boolean;
}>;

export const QUERY_CROWDFUND_TOKEN_AVAILABLE = gql`
  query QUERY_CROWDFUND_TOKEN_AVAILABLE(
    $contractAddress: String!
    $tokenId: String!
  ) {
    crowdfund(address: $contractAddress) {
      isTokenAvailable(tokenId: $tokenId)
    }
  }
`;

/**
 * Queries a crowdfund contract for the availability of a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryCrowdfundTokenAvailable(
  contractAddress: string,
  tokenId: string
): Promise<boolean> {
  const resp = await query<
    QueryCrowdfundTokenAvailable,
    QueryCrowdfundTokenAvailableResponse
  >(QUERY_CROWDFUND_TOKEN_AVAILABLE, { contractAddress, tokenId });

  return resp.crowdfund.isTokenAvailable;
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
export type QueryCrowdfundStateResponse = CrowdfundResponse<{
  state: CrowdfundState;
}>;

export const QUERY_CROWDFUND_STATE = gql`
  query QUERY_CROWDFUND_STATE($contractAddress: String!) {
    crowdfund(address: $contractAddress) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        expiration
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient
      }
    }
  }
`;

/**
 * Queries the current crowdfund state
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundState(
  contractAddress: string
): Promise<CrowdfundState> {
  const resp = await query<QueryCrowdfundState, QueryCrowdfundStateResponse>(
    QUERY_CROWDFUND_STATE,
    { contractAddress }
  );

  return resp.crowdfund.state;
}
