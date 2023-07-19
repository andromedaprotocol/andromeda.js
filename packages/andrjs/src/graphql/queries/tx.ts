import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { IndexedTx } from "@cosmjs/stargate";
import { Log, parseRawLog } from "@cosmjs/stargate/build/logs";
import { gql } from "graphql-request";
import _ from "lodash";
import { query } from "../client";
import { ContractAddressQuery, TxQuery, ChainIdQuery } from "./types";

export const andrEventKeys = ["andr_app"];

export interface TxResponse<T> {
  tx: T;
}

export interface TxAttribute {
  key: string;
  value: string;
}

export interface TxEvent {
  type: string;
  attributes: TxAttribute[];
}

export interface TxLog {
  events?: TxEvent[];
}

export interface TxInfo {
  code: number;
  gasUsed: number;
  gasWanted: number;
  hash: string;
  height: number;
  rawLog: string;
  tx: Uint8Array;
}

export interface CleanedTx extends Omit<TxInfo, "rawLog" | "tx"> {
  rawLog: readonly Log[];
  tx: DecodedTxRaw;
  adoType?: string;
}

export function cleanTx(tx: TxInfo | IndexedTx): CleanedTx {
  const rawLog = parseRawLog(tx.rawLog);
  return {
    ...tx,
    rawLog,
    tx: decodeTxRaw(tx.tx),
    adoType: getAdoType(rawLog),
  };
}

export function getAdoType(logs: readonly Log[]): string | undefined {
  const attrs = getAttribute("wasm.type", logs);
  return attrs[0] ? attrs[0].value : undefined;
}

export function getAttribute(
  field: string,
  logs: readonly Log[]
): TxAttribute[] {
  const [type, key] = field.split(".");
  const attrs: TxAttribute[] = [];
  if (!type || !key) return attrs;

  for (let i = 0; i < logs.length; i++) {
    const log = logs[i];
    if (!log) continue;

    const event = log.events.find((ev) => ev.type === type);
    if (!event) continue;

    const attr = event.attributes.find((attr) => attr.key === key);
    if (attr) attrs.push(attr);
  }

  return attrs;
}

const FRAGMENT_TX = gql`
  fragment Tx on TxInfo {
    code
    gasUsed
    gasWanted
    hash
    height
    rawLog
    tx
  }
`;

export interface QueryTxByAccount extends TxQuery {
  address: string;
}
export type QueryTxByAccountResponse = TxResponse<{
  byAccount: TxInfo[];
}>;

export const QUERY_TX_BY_ACCOUNT = gql`
  query QUERY_TX_BY_ACCOUNT(
    $minHeight: Int
    $maxHeight: Int
    $address: String!
    $chainId: String!
  ) {
    tx(chainId: $chainId) {
      byAccount(
        minHeight: $minHeight
        maxHeight: $maxHeight
        sentFromOrTo: $address
      ) {
        ...Tx
      }
    }
  }
  ${FRAGMENT_TX}
`;

/**
 * Queries all transactions for a given account
 * @param chainId
 * @param address
 * @param minHeight
 * @param maxHeight
 * @returns
 */
export async function queryTxByAccount(
  chainId: string,
  address: string,
  minHeight?: number,
  maxHeight?: number
): Promise<TxInfo[]> {
  const resp = await query<QueryTxByAccount, QueryTxByAccountResponse>(
    QUERY_TX_BY_ACCOUNT,
    { minHeight, maxHeight, address, chainId }
  );

  return resp.tx.byAccount;
}

export interface QueryTxByContract extends TxQuery, ContractAddressQuery {}
export type QueryTxByContractResponse = TxResponse<{
  byContract: TxInfo[];
}>;

export const QUERY_TX_BY_CONTRACT = gql`
      query QUERY_TX_BY_ACCOUNT($minHeight: Int, $maxHeight: Int, $contractAddress: String!, $chainId: String!) {
          ${FRAGMENT_TX}
          tx(chainId: $chainId) {
              byContract(minHeight: $minHeight, maxHeight: $maxHeight, address: $contractAddress) {
                  ...Tx
              }
          }
      }
  `;

/**
 * Queries all transactions for a given contract address
 * @param chainId
 * @param contractAddress
 * @param minHeight
 * @param maxHeight
 * @returns
 */
export async function queryTxByContract(
  chainId: string,
  contractAddress: string,
  minHeight?: number,
  maxHeight?: number
): Promise<TxInfo[]> {
  const resp = await query<QueryTxByContract, QueryTxByContractResponse>(
    QUERY_TX_BY_CONTRACT,
    { minHeight, maxHeight, contractAddress, chainId }
  );

  return resp.tx.byContract;
}

export interface QueryTxByHeight {
  height: number;
}
export type QueryTxByHeightResponse = TxResponse<{
  byHeight: TxInfo[];
}>;

export const QUERY_TX_BY_HEIGHT = gql`
      query QUERY_TX_BY_ACCOUNT($height: Float!, $chainId: String!) {
          ${FRAGMENT_TX}
          tx(chainId: $chainId) {
              byHeight(height: $height) {
                  ...Tx
              }
          }
      }
  `;

/**
 * Queries all transactions for a given height
 * @param height
 * @returns
 */
export async function queryTxByHeight(height: number): Promise<TxInfo[]> {
  const resp = await query<QueryTxByHeight, QueryTxByHeightResponse>(
    QUERY_TX_BY_HEIGHT,
    { height }
  );

  return resp.tx.byHeight;
}

export interface QueryTxByHash extends ChainIdQuery {
  hash: string;
}
export type QueryTxByHashResponse = TxResponse<{
  byHash: TxInfo;
}>;

export const QUERY_TX_BY_HASH = gql`
        query QUERY_TX_BY_ACCOUNT($hash: String!, $chainId: String!) {
            ${FRAGMENT_TX}
            tx(chainId: $chainId) {
                byHash(hash: $hash) {
                    ...Tx
                }
            }
        }
    `;

/**
 * Queries a transaction by tx hash
 * @param chainId
 * @param hash
 * @returns
 */
export async function queryTxByHash(
  chainId: string,
  hash: string
): Promise<TxInfo> {
  const resp = await query<QueryTxByHash, QueryTxByHashResponse>(
    QUERY_TX_BY_HASH,
    { hash, chainId }
  );

  return resp.tx.byHash;
}

export interface QueryAssets {
  walletAddress: string;
  limit: number;
  offset: number;
}
export interface QueryAssetsResponse {
  assets: {
    address: string;
    adoType: string;
    name?: string;
    appContract?: string;
    chainId: string;
    instantiateHash: string;
    instantiateHeight: number;
    lastUpdatedHash: string;
    lastUpdatedHeight: number;
    owner: string;
  }[];
}

export const QUERY_ASSETS = gql`
  query QUERY_ASSETS($walletAddress: String!, $limit: Int!, $offset: Int!) {
    assets(walletAddress: $walletAddress, limit: $limit, offset: $offset) {
      address
      adoType
      name
      appContract
      chainId
      instantiateHash
      instantiateHeight
      lastUpdatedHash
      lastUpdatedHeight
      owner
    }
  }
`;

/**
 * Queries all assets owned by a wallet address
 * @param walletAddress
 * @param limit
 * @param offset
 * @returns
 */
export async function queryAssets(
  walletAddress: string,
  limit: number,
  offset: number
): Promise<QueryAssetsResponse["assets"]> {
  const resp = await query<QueryAssets, QueryAssetsResponse>(QUERY_ASSETS, {
    walletAddress,
    limit,
    offset,
  });

  return resp.assets;
}
