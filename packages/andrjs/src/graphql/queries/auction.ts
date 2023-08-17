import { ICodegenGeneratedAdoAuctionBidsQueryVariables } from "@andromedaprotocol/gql/__generated/node";
import { querySdk } from "../client";


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
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS({
    'ADO_auction_address': contractAddress,
    'ADO_auction_auction_auctionIDs_tokenAddress': tokenAddress,
    'ADO_auction_auction_auctionIDs_tokenId': tokenId
  })

  return resp.ADO.auction.auctionIDs.auction_ids;
}


/**
 * Queries auction information from an auction contract about a particular token contract by address
 * @param contractAddress
 * @param tokenAddress
 * @returns
 */
export async function queryAuctionInfo(
  contractAddress: string,
  tokenAddress: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS({
    'ADO_auction_address': contractAddress,
    'ADO_auction_auction_auctionInfosForAddress_tokenAddress': tokenAddress
  })

  return resp.ADO.auction.auctionInfosForAddress;
}

/**
 * Queries auction state from an auction contract given an auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export async function queryAuctionState(
  contractAddress: string,
  auctionId: number
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE({
    'ADO_auction_address': contractAddress,
    'ADO_auction_auction_auctionState_auctionId': auctionId
  })

  return resp.ADO.auction.auctionState;
}


/**
 * Queries all bids from an auction contract for a given auction ID
 * @param contractAddress
 * @param auctionId
 * @returns
 */
export async function queryBids(
  contractAddress: string,
  auctionId: number,
  filters: ICodegenGeneratedAdoAuctionBidsQueryVariables['ADO_auction_auction_bids_options']
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_AUCTION_BIDS({
    'ADO_auction_address': contractAddress,
    'ADO_auction_auction_bids_auctionId': auctionId,
    'ADO_auction_auction_bids_options': filters
  })

  return resp.ADO.auction.bids.bids;
}

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
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE({
    'ADO_auction_address': contractAddress,
    'ADO_auction_auction_latestAuctionState_tokenAddress': tokenAddress,
    'ADO_auction_auction_latestAuctionState_tokenId': tokenId
  })

  return resp.ADO.auction.latestAuctionState;
}
