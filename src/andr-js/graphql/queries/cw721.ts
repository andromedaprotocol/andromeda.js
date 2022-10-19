import { query } from "../client";
import type {
  AndrSearchOptions,
  ContractAddressQuery,
  Expiry,
  PaginatedQuery,
} from "./types";
import { gql } from "graphql-request";
import { Coin } from "@cosmjs/proto-signing";

export interface CW721Response<T> {
  cw721: T;
}

export interface NFTApproval {
  expires: Expiry;
  spender: string;
}
export interface NFTOwnerInfo {
  approvals: NFTApproval[];
  owner: string;
}
export interface NFTAttribute {
  trait_type: string;
  value: string;
  display_type?: string;
}
export interface NFTExtension {
  name: string;
  publisher: string;
  description?: string;
  attributes: NFTAttribute[];
  image: string;
  image_data?: string;
  external_url?: string;
  animation_url?: string;
  youtube_url?: string;
}
export interface NFTInfo {
  extension: NFTExtension;
  tokenUri: string;
}
export interface NFTContractInfo {
  name: string;
  symbol: string;
}
export interface Agreement {
  amount: { raw: Coin };
  purchaser: string;
}
export interface TransferAgreement {
  tokenId: string;
  agreement: Agreement;
}

export const TOKEN_EXTENSION_FRAGMENT = gql`
  fragment TokenExtensionInfo on TokenExtension {
    animation_url
    attributes {
      display_type
      trait_type
      value
    }
    description
    external_url
    image
    image_data
    name
    publisher
    youtube_url
  }
`;

export interface QueryCW721AllNFTInfo extends ContractAddressQuery {
  includeExpired: boolean;
  tokenId: string;
}
export type QueryCW721AllNFTInfoResponse = CW721Response<{
  allNftInfo: {
    access: NFTOwnerInfo;
    info: NFTInfo;
  };
}>;

export const QUERY_CW721_ALL_NFT_INFO = gql`
  query QUERY_CW721_ALL_NFT_INFO(
    $contractAddress: String!
    $includeExpired: Boolean!
    $tokenId: String!
  ) {
    cw721(address: $contractAddress) {
      allNftInfo(includeExpired: $includeExpired, tokenId: $tokenId) {
        access {
          approvals {
            expires
            spender
          }
          owner
        }
        info {
          extension {
            ...TokenExtensionInfo
          }
          tokenUri
        }
      }
    }
  }
  ${TOKEN_EXTENSION_FRAGMENT}
`;

/**
 * Queries a CW721 contract for all info for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryAllNFTInfo(
  contractAddress: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<QueryCW721AllNFTInfoResponse["cw721"]["allNftInfo"]> {
  const resp = await query<QueryCW721AllNFTInfo, QueryCW721AllNFTInfoResponse>(
    QUERY_CW721_ALL_NFT_INFO,
    { contractAddress, tokenId, includeExpired }
  );

  return resp.cw721.allNftInfo;
}

export interface QueryCW721AllOperators
  extends ContractAddressQuery,
    PaginatedQuery {
  includeExpired: boolean;
  owner: string;
}
export type QueryCW721AllOperatorsResponse = CW721Response<{
  allOperators: NFTApproval[];
}>;

export const QUERY_CW721_ALL_OPERATORS = gql`
  query QUERY_CW721_ALL_OPERATORS(
    $contractAddress: String!
    $includeExpired: Boolean!
    $owner: String!
    $options: AndrSearchOptions
  ) {
    cw721(address: $contractAddress) {
      allOperators(
        includeExpired: $includeExpired
        owner: $owner
        options: $options
      ) {
        expires
        spender
      }
    }
  }
`;

/**
 * Queries a CW721 contract for all approved operators for a given token owner
 * @param contractAddress
 * @param owner
 * @param includeExpired
 * @param options
 * @returns
 */
export async function queryAllOperators(
  contractAddress: string,
  owner: string,
  includeExpired: boolean = false,
  options?: AndrSearchOptions
): Promise<QueryCW721AllOperatorsResponse["cw721"]["allOperators"]> {
  const resp = await query<
    QueryCW721AllOperators,
    QueryCW721AllOperatorsResponse
  >(QUERY_CW721_ALL_OPERATORS, {
    contractAddress,
    includeExpired,
    owner,
    options,
  });

  return resp.cw721.allOperators;
}

export interface QueryCW721AllTokens
  extends ContractAddressQuery,
    PaginatedQuery {}
export type QueryCW721AllTokensResponse = CW721Response<{
  allTokens: string[];
}>;

export const QUERY_CW721_ALL_TOKENS = gql`
  query QUERY_CW721_ALL_TOKENS(
    $contractAddress: String!
    $options: AndrSearchOptions
  ) {
    cw721(address: $contractAddress) {
      allTokens(options: $options)
    }
  }
`;

/**
 * Queries a CW721 contract for all tokens
 * @param contractAddress
 * @param options
 * @returns
 */
export async function queryAllTokens(
  contractAddress: string,
  options?: AndrSearchOptions
): Promise<string[]> {
  const resp = await query<QueryCW721AllTokens, QueryCW721AllTokensResponse>(
    QUERY_CW721_ALL_TOKENS,
    { contractAddress, options }
  );

  return resp.cw721.allTokens;
}

export interface QueryCW721Approval extends ContractAddressQuery {
  includeExpired: boolean;
  spender: string;
  tokenId: string;
}
export type QueryCW721ApprovalResponse = CW721Response<{
  approval: NFTApproval;
}>;

export const QUERY_CW721_APPROVAL = gql`
  query QUERY_CW721_APPROVAL(
    $contractAddress: String!
    $includeExpired: Boolean!
    $spender: String!
    $tokenId: String!
  ) {
    cw721(address: $contractAddress) {
      approval(
        includeExpired: $includeExpired
        spender: $spender
        tokenId: $tokenId
      ) {
        expires
        spender
      }
    }
  }
`;

/**
 * Queries a CW721 contract for whether a given address is an assigned operator for a given token
 * @param contractAddress
 * @param spender
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryApproval(
  contractAddress: string,
  spender: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<NFTApproval> {
  const resp = await query<QueryCW721Approval, QueryCW721ApprovalResponse>(
    QUERY_CW721_APPROVAL,
    { contractAddress, spender, tokenId, includeExpired }
  );

  return resp.cw721.approval;
}

export interface QueryCW721Approvals extends ContractAddressQuery {
  includeExpired: boolean;
  tokenId: string;
}
export type QueryCW721ApprovalsResponse = CW721Response<{
  approvals: NFTApproval[];
}>;

export const QUERY_CW721_APPROVALS = gql`
  query QUERY_CW721_APPROVALS(
    $contractAddress: String!
    $includeExpired: Boolean!
    $tokenId: String!
  ) {
    cw721(address: $contractAddress) {
      approvals(includeExpired: $includeExpired, tokenId: $tokenId) {
        spender
        expires
      }
    }
  }
`;

/**
 * Queries a CW721 contract for all approvals for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryApprovals(
  contractAddress: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<QueryCW721ApprovalsResponse["cw721"]["approvals"]> {
  const resp = await query<QueryCW721Approvals, QueryCW721ApprovalsResponse>(
    QUERY_CW721_APPROVALS,
    { contractAddress, tokenId, includeExpired }
  );

  return resp.cw721.approvals;
}

export interface QueryCW721ContractInfo extends ContractAddressQuery {}
export type QueryCW721ContractInfoResponse = CW721Response<{
  contractInfo: NFTContractInfo;
  minter: string;
  numTokens: number;
}>;

export const QUERY_CW721_CONTRACT_INFO = gql`
  query QUERY_CW721_CONTRACT_INFO($contractAddress: String!) {
    cw721(address: $contractAddress) {
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
    }
  }
`;

/**
 * Queries a CW721 contract for its contract info
 * @param contractAddress
 * @returns
 */
export async function queryContractInfo(
  contractAddress: string
): Promise<QueryCW721ContractInfoResponse["cw721"]["contractInfo"]> {
  const resp = await query<
    QueryCW721ContractInfo,
    QueryCW721ContractInfoResponse
  >(QUERY_CW721_CONTRACT_INFO, { contractAddress });

  return resp.cw721.contractInfo;
}

export interface QueryCW721IsArchived extends ContractAddressQuery {
  tokenId: string;
}
export type QueryCW721IsArchivedResponse = CW721Response<{
  isArchived: boolean;
}>;

export const QUERY_CW721_IS_ARCHIVED = gql`
  query QUERY_CW721_IS_ARCHIVED($contractAddress: String!, $tokenId: String!) {
    cw721(address: $contractAddress) {
      isArchived(tokenId: $tokenId)
    }
  }
`;

/**
 * Queries a CW721 contract whether a given token ID is archived
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryIsArchived(
  contractAddress: string,
  tokenId: string
): Promise<boolean> {
  const resp = await query<QueryCW721IsArchived, QueryCW721IsArchivedResponse>(
    QUERY_CW721_IS_ARCHIVED,
    { contractAddress, tokenId }
  );

  return resp.cw721.isArchived;
}

export interface QueryCW721NFTInfo extends ContractAddressQuery {
  tokenId: string;
}
export type QueryCW721NftInfoResponse = CW721Response<{
  nftInfo: NFTInfo;
}>;

export const QUERY_CW721_NFT_INFO = gql`
  query QUERY_CW721_NFT_INFO($contractAddress: String!, $tokenId: String!) {
    cw721(address: $contractAddress) {
      nftInfo(tokenId: $tokenId) {
        extension {
          ...TokenExtensionInfo
        }
        tokenUri
      }
    }
  }
  ${TOKEN_EXTENSION_FRAGMENT}
`;

/**
 * Queries a CW721 contract for a given token IDs NFT info
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryNFTInfo(
  contractAddress: string,
  tokenId: string
): Promise<QueryCW721NftInfoResponse["cw721"]["nftInfo"]> {
  const resp = await query<QueryCW721NFTInfo, QueryCW721NftInfoResponse>(
    QUERY_CW721_NFT_INFO,
    { contractAddress, tokenId }
  );

  return resp.cw721.nftInfo;
}

export interface QueryCW721OwnerOf extends ContractAddressQuery {
  tokenId: string;
}
export type QueryCW721OwnerOfResponse = CW721Response<{
  ownerOf: { owner: string };
}>;

export const QUERY_CW721_OWNER_OF = gql`
  query QUERY_CW721_OWNER_OF($contractAddress: String!, $tokenId: String!) {
    cw721(address: $contractAddress) {
      ownerOf(tokenId: $tokenId, includeExpired: false) {
        owner
      }
    }
  }
`;

/**
 * Queries a CW721 contract for the owner of a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryOwnerOf(
  contractAddress: string,
  tokenId: string
): Promise<string> {
  const resp = await query<QueryCW721OwnerOf, QueryCW721OwnerOfResponse>(
    QUERY_CW721_OWNER_OF,
    { contractAddress, tokenId }
  );

  return resp.cw721.ownerOf.owner;
}

export interface QueryCW721Tokens extends ContractAddressQuery, PaginatedQuery {
  owner: string;
}
export type QueryCW721TokensResponse = CW721Response<{
  tokens: string[];
}>;

export const QUERY_CW721_TOKENS = gql`
  query QUERY_CW721_TOKENS(
    $contractAddress: String!
    $owner: String!
    $options: AndrSearchOptions
  ) {
    cw721(address: $contractAddress) {
      tokens(owner: $owner, options: $options)
    }
  }
`;

/**
 * Queries a CW721 contract for all tokens owned by a given address
 * @param contractAddress
 * @param owner
 * @param options
 * @returns
 */
export async function queryTokens(
  contractAddress: string,
  owner: string,
  options?: AndrSearchOptions
): Promise<QueryCW721TokensResponse["cw721"]["tokens"]> {
  const resp = await query<QueryCW721Tokens, QueryCW721TokensResponse>(
    QUERY_CW721_TOKENS,
    { contractAddress, owner, options }
  );

  return resp.cw721.tokens;
}

export interface QueryCW721TransferAgreement extends ContractAddressQuery {
  tokenId: string;
}
export type QueryCW721TransferAgreementResponse = CW721Response<{
  transferAgreement: TransferAgreement;
}>;

export const QUERY_CW721_TRANSFER_AGREEMENT = gql`
  query QUERY_CW721_TRANSFER_AGREEMENT(
    $contractAddress: String!
    $tokenId: String!
  ) {
    cw721(address: $contractAddress) {
      transferAgreement(tokenId: $tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
          purchaser
        }
        tokenId
      }
    }
  }
`;

/**
 * Queries a CW721 contract for the transfer agreement for a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryTransferAgreement(
  contractAddress: string,
  tokenId: string
): Promise<TransferAgreement> {
  const resp = await query<
    QueryCW721TransferAgreement,
    QueryCW721TransferAgreementResponse
  >(QUERY_CW721_TRANSFER_AGREEMENT, { contractAddress, tokenId });

  return resp.cw721.transferAgreement;
}
