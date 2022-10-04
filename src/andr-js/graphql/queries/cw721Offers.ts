import { query } from "../client";
import type {
  AndrSearchOptions,
  ContractAddressQuery,
  Expiry,
  PaginatedRequiredQuery,
} from "./types";
import { gql } from "graphql-request";

export interface NFTOffer {
  denom: string;
  expiration: Expiry;
  offerAmount: number;
  purchaser: string;
  remainingAmount: number;
  taxAmount: number;
}

export interface QueryCW721OffersAllOffers
  extends ContractAddressQuery,
    PaginatedRequiredQuery {
  purchaser: string;
}
export interface QueryCW721OffersAllOffersResponse {
  allOffers: NFTOffer[];
}

export const QUERY_CW721_OFFERS_ALL_OFFERS = gql`
  query QUERY_CW721_OFFERS_ALL_OFFERS(
    $contractAddress: String!
    $purchaser: String!
    $options: AndrSearchOptions!
  ) {
    offers(contractAddress: $contractAddress) {
      allOffers(options: $options, purchaser: $purchaser) {
        denom
        expiration {
          at_height
          at_time
        }
        offerAmount
        purchaser
        remainingAmount
        taxAmount
      }
    }
  }
`;

export async function queryAllOffers(
  contractAddress: string,
  purchaser: string,
  options: AndrSearchOptions
): Promise<NFTOffer[]> {
  const resp = await query<
    QueryCW721OffersAllOffers,
    QueryCW721OffersAllOffersResponse
  >(QUERY_CW721_OFFERS_ALL_OFFERS, { purchaser, contractAddress, options });

  return resp.allOffers;
}

export interface QueryCW721OffersOffer extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCW721OffersOfferResponse {
  offer: NFTOffer;
}

export const QUERY_CW721_OFFERS_OFFER = gql`
  query QUERY_CW721_OFFERS_OFFER($contractAddress: String!, $tokenId: String!) {
    offers(contractAddress: $contractAddress) {
      offer(tokenId: $tokenId) {
        denom
        expiration {
          at_height
          at_time
        }
        offerAmount
        purchaser
        remainingAmount
        taxAmount
      }
    }
  }
`;

export async function queryOffer(
  contractAddress: string,
  tokenId: string
): Promise<NFTOffer> {
  const resp = await query<
    QueryCW721OffersOffer,
    QueryCW721OffersOfferResponse
  >(QUERY_CW721_OFFERS_OFFER, { contractAddress, tokenId });

  return resp.offer;
}
