import { gql } from "graphql-request";
import { query } from "../client";
import { AndrSearchOptions, Expiry, PaginatedQuery } from "./types";
import { AndrAddress } from "../../types";

export interface QueryAuctionAuctionIds {
  tokenAddress: string;
  tokenId: string;
}
export interface QueryAuctionAuctionIdsResponse {
  auctionIds: number[];
}

export const QUERY_AUCTION_AUCTION_IDS = gql`
  query QUERY_AUCTION_AUCTION_IDS($tokenId: String!, $tokenAddress: String!) {
    auction {
      auctionIds(tokenId: $tokenId, tokenAddress: $tokenAddress)
    }
  }
`;

export async function queryAuctionIds(
  tokenId: string,
  tokenAddress: string
): Promise<number[]> {
  const resp = await query<
    QueryAuctionAuctionIds,
    QueryAuctionAuctionIdsResponse
  >(QUERY_AUCTION_AUCTION_IDS, { tokenId, tokenAddress });

  return resp.auctionIds;
}

export interface QueryAuctionAuctionInfo {
  options: AndrSearchOptions;
  tokenAddress: string;
}
export interface QueryAuctionAuctionInfoResponse {
  auctionInfo: {
    auctionIds: number[];
    contractAddress: string;
    tokenId: string;
  };
}

export const QUERY_AUCTION_AUCTION_INFO = gql`
  query QUERY_AUCTION_AUCTION_INFO(
    $options: AndrSearchOptions!
    $tokenAddress: String!
  ) {
    auction {
      auctionInfo(options: $options, tokenAddress: $tokenAddress) {
        auctionIds
        tokenAddress
        tokenId
      }
    }
  }
`;

export async function queryAuctionInfo(
  options: AndrSearchOptions,
  tokenAddress: string
): Promise<QueryAuctionAuctionInfoResponse> {
  const resp = await query<
    QueryAuctionAuctionInfo,
    QueryAuctionAuctionInfoResponse
  >(QUERY_AUCTION_AUCTION_INFO, { tokenAddress, options });

  return resp;
}

export interface QueryAuctionAuctionState {
  auctionId: number;
}
export interface AuctionState {
  adoId: string;
  adoType: string;
  auctionId: number;
  coinDenom: string;
  endTime: Expiry;
  highBidderAddr: AndrAddress;
  highBidderAmount: number;
  isCancelled: boolean;
  modules: {
    address: AndrAddress;
    isMutable: boolean;
    moduleType: string;
  }[];
  startTime: Expiry;
  tokenAddress: string;
  tokenId: string;
  whitelist: AndrAddress[];
}
export interface QueryAuctionAuctionStateResponse {
  auctionState: AuctionState;
}

export const QUERY_AUCTION_AUCTION_STATE = gql`
  query QUERY_AUCTION_AUCTION_STATE($auctionId: Float!) {
    auction {
      auctionState(auctionId: $auctionId) {
        adoId
        adoType
        auctionId
        coinDenom
        endTime {
          at_height
          at_time
        }
        highBidderAddr {
          identifier
        }
        highBidderAmount
        isCancelled
        modules {
          address {
            identifier
          }
          isMutable
          moduleType
        }
        startTime {
          at_height
          at_time
        }
        tokenAddress
        tokenId
        whitelist {
          identifier
        }
      }
    }
  }
`;

export async function queryAuctionState(
  auctionId: number
): Promise<AuctionState> {
  const resp = await query<
    QueryAuctionAuctionState,
    QueryAuctionAuctionStateResponse
  >(QUERY_AUCTION_AUCTION_STATE, { auctionId });

  return resp.auctionState;
}

export interface QueryAuctionBids extends PaginatedQuery {
  auctionId: number;
}

export interface Bid {
  amount: number;
  bidder: string;
  timestamp: string;
}
export interface QueryAuctionBidsResponse {
  bids: Bid[];
}

export const QUERY_AUCTION_BIDS = gql`
  query QUERY_AUCTION_BIDS($options: AndrSearchOptions, $auctionId: Float!) {
    auction {
      bids(options: $options, auctionId: $auctionId) {
        amount
        bidder
        timestamp
      }
    }
  }
`;

export async function queryBids(
  auctionId: number,
  options?: AndrSearchOptions
): Promise<Bid[]> {
  const resp = await query<QueryAuctionBids, QueryAuctionBidsResponse>(
    QUERY_AUCTION_BIDS,
    { auctionId, options }
  );

  return resp.bids;
}

export interface QueryAuctionLatestAuctionState {
  tokenAddress: string;
  tokenId: string;
}
export interface QueryAuctionLatestAuctionStateResponse {
  latestAuctionState: AuctionState;
}

export const QUERY_AUCTION_LATEST_AUCTION_STATE = gql`
  query QUERY_AUCTION_LATEST_AUCTION_STATE(
    $tokenAddress: String!
    $tokenId: String!
  ) {
    auction {
      latestAuctionState(tokenAddress: $tokenAddress, tokenId: $tokenId) {
        adoId
        adoType
        auctionId
        coinDenom
        endTime {
          at_height
          at_time
        }
        highBidderAddr {
          identifier
        }
        highBidderAmount
        isCancelled
        modules {
          address {
            identifier
          }
          isMutable
          moduleType
        }
        startTime {
          at_height
          at_time
        }
        tokenAddress
        tokenId
        whitelist {
          identifier
        }
      }
    }
  }
`;

export async function queryAuctionLatestState(
  tokenAddress: string,
  tokenId: string
): Promise<AuctionState> {
  const resp = await query<
    QueryAuctionLatestAuctionState,
    QueryAuctionLatestAuctionStateResponse
  >(QUERY_AUCTION_LATEST_AUCTION_STATE, { tokenAddress, tokenId });

  return resp.latestAuctionState;
}
