import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery } from "./types";

export const AUCTION_STATE_FRAGMENT = gql`
  fragment AuctionStateInfo on AuctionStateResponse {
    auction_id
    coin_denom
    end_time
    high_bidder_addr
    high_bidder_amount
    is_cancelled
    start_time
    whitelist
    min_bid
  }
`;

export interface AuctionResponse<T> {
  auction: T;
}

export interface QueryAuctionAuctionIds extends ContractAddressQuery {
  tokenAddress: string;
  tokenId: string;
}
export type QueryAuctionAuctionIdsResponse = AuctionResponse<{
  auctionIDs: { auction_ids: number[] };
}>;

export const QUERY_AUCTION_AUCTION_IDS = gql`
  query QUERY_AUCTION_AUCTION_IDS(
    $contractAddress: String!
    $tokenId: String!
    $tokenAddress: String!
  ) {
    auction(address: $contractAddress) {
      auctionIDs(tokenId: $tokenId, tokenAddress: $tokenAddress) {
        auction_ids
      }
    }
  }
`;

/**
 * Queries all token IDs from an auction contract for a given token ID/token contract address tuple
 * @param contractAddress
 * @param tokenId
 * @param tokenAddress
 * @returns
 */
export async function queryAuctionIds(
  contractAddress: string,
  tokenId: string,
  tokenAddress: string
): Promise<number[]> {
  const resp = await query<
    QueryAuctionAuctionIds,
    QueryAuctionAuctionIdsResponse
  >(QUERY_AUCTION_AUCTION_IDS, { contractAddress, tokenId, tokenAddress });

  return resp.auction.auctionIDs.auction_ids;
}

export interface QueryAuctionAuctionInfo extends ContractAddressQuery {
  tokenAddress: string;
}
export type QueryAuctionAuctionInfoResponse = AuctionResponse<{
  auctionInfosForAddress: {
    auction_ids: number[];
    token_address: string;
    token_id: string;
  };
}>;

export const QUERY_AUCTION_AUCTION_INFO = gql`
  query QUERY_AUCTION_AUCTION_INFO(
    $contractAddress: String!
    $tokenAddress: String!
  ) {
    auction(address: $contractAddress) {
      auctionInfosForAddress(tokenAddress: $tokenAddress) {
        auction_ids
        token_address
        token_id
      }
    }
  }
`;

/**
 * Queries auction information from an auction contract about a particular token contract by address
 * @param contractAddress
 * @param tokenAddress
 * @returns
 */
export async function queryAuctionInfo(
  contractAddress: string,
  tokenAddress: string
): Promise<QueryAuctionAuctionInfoResponse["auction"]> {
  const resp = await query<
    QueryAuctionAuctionInfo,
    QueryAuctionAuctionInfoResponse
  >(QUERY_AUCTION_AUCTION_INFO, { contractAddress, tokenAddress });

  return resp.auction;
}

export interface QueryAuctionAuctionState extends ContractAddressQuery {
  auctionId: number;
}
export interface AuctionState {
  auction_id: string;
  coin_denom: string;
  end_time: Record<string, any>;
  high_bidder_addr: string;
  high_bidder_amount: string;
  is_cancelled: boolean;
  start_time: Record<string, any>;
  whitelist: string[];
  min_bid: string;
}
export type QueryAuctionAuctionStateResponse = AuctionResponse<{
  auctionState: AuctionState;
}>;

export const QUERY_AUCTION_AUCTION_STATE = gql`
  query QUERY_AUCTION_AUCTION_STATE(
    $contractAddress: String!
    $auctionId: Float!
  ) {
    auction(address: $contractAddress) {
      auctionState(auctionId: $auctionId) {
        ...AuctionStateInfo
      }
    }
  }
  ${AUCTION_STATE_FRAGMENT}
`;

/**
 * Queries auction state from an auction contract given an auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export async function queryAuctionState(
  contractAddress: string,
  auctionId: number
): Promise<AuctionState> {
  const resp = await query<
    QueryAuctionAuctionState,
    QueryAuctionAuctionStateResponse
  >(QUERY_AUCTION_AUCTION_STATE, { contractAddress, auctionId });

  return resp.auction.auctionState;
}

export interface QueryAuctionBids extends ContractAddressQuery {
  auctionId: number;
}

export interface Bid {
  amount: number;
  bidder: string;
  timestamp: string;
}
export type QueryAuctionBidsResponse = AuctionResponse<{
  bids: { bids: Bid[] };
}>;

export const QUERY_AUCTION_BIDS = gql`
  query QUERY_AUCTION_BIDS($contractAddress: String!, $auctionId: Float!) {
    auction(address: $contractAddress) {
      bids(auctionId: $auctionId) {
        bids {
          amount
          bidder
          timestamp
        }
      }
    }
  }
`;

/**
 * Queries all bids from an auction contract for a given auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export async function queryBids(
  contractAddress: string,
  auctionId: number
): Promise<Bid[]> {
  const resp = await query<QueryAuctionBids, QueryAuctionBidsResponse>(
    QUERY_AUCTION_BIDS,
    { auctionId, contractAddress }
  );

  return resp.auction.bids.bids;
}

export interface QueryAuctionLatestAuctionState extends ContractAddressQuery {
  tokenAddress: string;
  tokenId: string;
}
export type QueryAuctionLatestAuctionStateResponse = AuctionResponse<{
  latestAuctionState: AuctionState;
}>;

export const QUERY_AUCTION_LATEST_AUCTION_STATE = gql`
  query QUERY_AUCTION_LATEST_AUCTION_STATE(
    $contractAddress: String!
    $tokenAddress: String!
    $tokenId: String!
  ) {
    auction(address: $contractAddress) {
      latestAuctionState(tokenAddress: $tokenAddress, tokenId: $tokenId) {
        ...AuctionStateInfo
      }
    }
  }
  ${AUCTION_STATE_FRAGMENT}
`;

/**
 * Queries an auction contract for the latest auction state for a given token address/id tuple
 * @param contractAddress
 * @param tokenAddress
 * @param tokenId
 * @returns
 */
export async function queryAuctionLatestState(
  contractAddress: string,
  tokenAddress: string,
  tokenId: string
): Promise<AuctionState> {
  const resp = await query<
    QueryAuctionLatestAuctionState,
    QueryAuctionLatestAuctionStateResponse
  >(QUERY_AUCTION_LATEST_AUCTION_STATE, {
    contractAddress,
    tokenAddress,
    tokenId,
  });

  return resp.auction.latestAuctionState;
}
