import { query } from "../client";
import type {
  AndrSearchOptions,
  ContractAddressQuery,
  Expiry,
  PaginatedQuery,
} from "./types";
import { gql } from "graphql-request";
import { Coin } from "@cosmjs/proto-signing";

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

const TOKEN_EXTENSION_FRAGMENT = gql`
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
export interface QueryCW721AllNFTInfoResponse {
  allNftInfo: {
    access: NFTOwnerInfo;
    info: NFTInfo;
  };
}

export const QUERY_CW721_ALL_NFT_INFO = gql`
  query QUERY_CW721_ALL_NFT_INFO(
    $address: String!
    $includeExpired: Boolean!
    $tokenId: String!
  ) {
    cw721(address: $address) {
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

export async function queryAllNFTInfo(
  address: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<QueryCW721AllNFTInfoResponse["allNftInfo"]> {
  const resp = await query<QueryCW721AllNFTInfo, QueryCW721AllNFTInfoResponse>(
    QUERY_CW721_ALL_NFT_INFO,
    { address, tokenId, includeExpired }
  );

  return resp.allNftInfo;
}

export interface QueryCW721AllOperators
  extends ContractAddressQuery,
    PaginatedQuery {
  includeExpired: boolean;
  owner: string;
}
export interface QueryCW721AllOperatorsResponse {
  allOperators: NFTApproval[];
}

export const QUERY_CW721_ALL_OPERATORS = gql`
  query QUERY_CW721_ALL_OPERATORS(
    $address: String!
    $includeExpired: Boolean!
    $owner: String!
    $options: AndrSearchOptions
  ) {
    cw721(address: $address) {
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

export async function queryAllOperators(
  address: string,
  owner: string,
  includeExpired: boolean = false,
  options?: AndrSearchOptions
): Promise<QueryCW721AllOperatorsResponse["allOperators"]> {
  const resp = await query<
    QueryCW721AllOperators,
    QueryCW721AllOperatorsResponse
  >(QUERY_CW721_ALL_OPERATORS, {
    address,
    includeExpired,
    owner,
    options,
  });

  return resp.allOperators;
}

export interface QueryCW721AllTokens
  extends ContractAddressQuery,
    PaginatedQuery {}
export interface QueryCW721AllTokensResponse {
  allTokens: string[];
}

export const QUERY_CW721_ALL_TOKENS = gql`
  query QUERY_CW721_ALL_TOKENS($address: String!, $options: AndrSearchOptions) {
    cw721(address: $address) {
      allTokens(options: $options)
    }
  }
`;

export async function queryAllTokens(
  address: string,
  options?: AndrSearchOptions
): Promise<QueryCW721AllTokensResponse["allTokens"]> {
  const resp = await query<QueryCW721AllTokens, QueryCW721AllTokensResponse>(
    QUERY_CW721_ALL_TOKENS,
    { address, options }
  );

  return resp.allTokens;
}

export interface QueryCW721Approval extends ContractAddressQuery {
  includeExpired: boolean;
  spender: string;
  tokenId: string;
}
export interface QueryCW721ApprovalResponse {
  approval: NFTApproval;
}

export const QUERY_CW721_APPROVAL = gql`
  query QUERY_CW721_APPROVAL(
    $address: String!
    $includeExpired: Boolean!
    $spender: String!
    $tokenId: String!
  ) {
    cw721(address: $address) {
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

export async function queryApproval(
  address: string,
  spender: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<QueryCW721ApprovalResponse["approval"]> {
  const resp = await query<QueryCW721Approval, QueryCW721ApprovalResponse>(
    QUERY_CW721_APPROVAL,
    { address, spender, tokenId, includeExpired }
  );

  return resp.approval;
}

export interface QueryCW721Approvals extends ContractAddressQuery {
  includeExpired: boolean;
  tokenId: string;
}
export interface QueryCW721ApprovalsResponse {
  approvals: NFTApproval[];
}

export const QUERY_CW721_APPROVALS = gql`
  query QUERY_CW721_APPROVALS(
    $address: String!
    $includeExpired: Boolean!
    $tokenId: String!
  ) {
    cw721(address: $address) {
      approvals(includeExpired: $includeExpired, tokenId: $tokenId) {
        spender
        expires
      }
    }
  }
`;

export async function queryApprovals(
  address: string,
  tokenId: string,
  includeExpired: boolean = false
): Promise<QueryCW721ApprovalsResponse["approvals"]> {
  const resp = await query<QueryCW721Approvals, QueryCW721ApprovalsResponse>(
    QUERY_CW721_APPROVALS,
    { address, tokenId, includeExpired }
  );

  return resp.approvals;
}

export interface QueryCW721ContractInfo extends ContractAddressQuery {}
export interface QueryCW721ContractInfoResponse {
  contractInfo: NFTContractInfo;
  minter: string;
  numTokens: number;
}

export const QUERY_CW721_CONTRACT_INFO = gql`
  query QUERY_CW721_CONTRACT_INFO($address: String!) {
    cw721(address: $address) {
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
    }
  }
`;

export async function queryContractInfo(
  address: string
): Promise<QueryCW721ContractInfoResponse["contractInfo"]> {
  const resp = await query<
    QueryCW721ContractInfo,
    QueryCW721ContractInfoResponse
  >(QUERY_CW721_CONTRACT_INFO, { address });

  return resp.contractInfo;
}

export interface QueryCW721IsArchived extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCW721IsArchivedResponse {
  isArchived: boolean;
}

export const QUERY_CW721_IS_ARCHIVED = gql`
  query QUERY_CW721_IS_ARCHIVED($address: String!, $tokenId: String!) {
    cw721(address: $address) {
      isArchived(tokenId: $tokenId)
    }
  }
`;

export async function queryIsArchived(
  address: string,
  tokenId: string
): Promise<QueryCW721IsArchivedResponse["isArchived"]> {
  const resp = await query<QueryCW721IsArchived, QueryCW721IsArchivedResponse>(
    QUERY_CW721_IS_ARCHIVED,
    { address, tokenId }
  );

  return resp.isArchived;
}

export interface QueryCW721NFTInfo extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCW721NftInfoResponse {
  nftInfo: NFTInfo;
}

export const QUERY_CW721_NFT_INFO = gql`
  query QUERY_CW721_NFT_INFO($address: String!, $tokenId: String!) {
    cw721(address: $address) {
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
export async function queryNFTInfo(
  address: string,
  tokenId: string
): Promise<QueryCW721NftInfoResponse["nftInfo"]> {
  const resp = await query<QueryCW721NFTInfo, QueryCW721NftInfoResponse>(
    QUERY_CW721_NFT_INFO,
    { address, tokenId }
  );

  return resp.nftInfo;
}

export interface QueryCW721OwnerOf extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCW721OwnerOfResponse {
  ownerOf: { owner: string };
}

export const QUERY_CW721_OWNER_OF = gql`
  query QUERY_CW721_OWNER_OF($address: String!, $tokenId: String!) {
    cw721(address: $address) {
      ownerOf(tokenId: $tokenId, includeExpired: false) {
        owner
      }
    }
  }
`;

export async function queryOwnerOf(
  address: string,
  tokenId: string
): Promise<string> {
  const resp = await query<QueryCW721OwnerOf, QueryCW721OwnerOfResponse>(
    QUERY_CW721_OWNER_OF,
    { address, tokenId }
  );

  return resp.ownerOf.owner;
}

export interface QueryCW721Tokens extends ContractAddressQuery, PaginatedQuery {
  owner: string;
}
export interface QueryCW721TokensResponse {
  tokens: string[];
}

export const QUERY_CW721_TOKENS = gql`
  query QUERY_CW721_TOKENS(
    $address: String!
    $owner: String!
    $options: AndrSearchOptions
  ) {
    cw721(address: $address) {
      tokens(owner: $owner, options: $options)
    }
  }
`;

export async function queryTokens(
  address: string,
  owner: string,
  options?: AndrSearchOptions
): Promise<QueryCW721TokensResponse["tokens"]> {
  const resp = await query<QueryCW721Tokens, QueryCW721TokensResponse>(
    QUERY_CW721_TOKENS,
    { address, owner, options }
  );

  return resp.tokens;
}

export interface QueryCW721TransferAgreement extends ContractAddressQuery {
  tokenId: string;
}
export interface QueryCW721TransferAgreementResponse {
  transferAgreement: TransferAgreement;
}

export const QUERY_CW721_TRANSFER_AGREEMENT = gql`
  query QUERY_CW721_TRANSFER_AGREEMENT($address: String!, $tokenId: String!) {
    cw721(address: $address) {
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

export async function queryTransferAgreement(
  address: string,
  tokenId: string
): Promise<TransferAgreement> {
  const resp = await query<
    QueryCW721TransferAgreement,
    QueryCW721TransferAgreementResponse
  >(QUERY_CW721_TRANSFER_AGREEMENT, { address, tokenId });

  return resp.transferAgreement;
}
