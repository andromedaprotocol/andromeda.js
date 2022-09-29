import { decodeTxRaw } from "@cosmjs/proto-signing";
import { IndexedTx } from "@cosmjs/stargate";
import { Log, parseRawLog } from "@cosmjs/stargate/build/logs";
import { gql } from "graphql-request";
import { query } from "../client";
import { ContractAddressQuery, TxQuery } from "./types";

export const andrEventKeys = ["andr_app"];

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
  tx: Record<string, any>;
  adoType?: string;
}

export function cleanTx(tx: TxInfo | IndexedTx): CleanedTx {
  const rawLog = parseRawLog(tx.rawLog);
  return { ...tx, rawLog, tx: decodeTxRaw(tx.tx), adoType: getAdoType(rawLog) };
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
export interface QueryTxByAccountResponse {
  tx: {
    byAccount: TxInfo[];
  };
}

export const QUERY_TX_BY_ACCOUNT = gql`
  ${FRAGMENT_TX}
  query QUERY_TX_BY_ACCOUNT(
    $minHeight: Int!
    $maxHeight: Int!
    $address: String!
  ) {
    tx {
      byAccount(
        minHeight: $minHeight
        maxHeight: $maxHeight
        sentFromOrTo: $address
      ) {
        ...Tx
      }
    }
  }
`;

export async function queryTxByAccount(
  minHeight: number,
  maxHeight: number,
  address: string
): Promise<TxInfo[]> {
  const resp = await query<QueryTxByAccount, QueryTxByAccountResponse>(
    QUERY_TX_BY_ACCOUNT,
    { minHeight, maxHeight, address }
  );

  return resp.tx.byAccount;
}

export interface QueryTxByContract extends TxQuery, ContractAddressQuery {}
export interface QueryTxByContractResponse {
  tx: {
    byContract: TxInfo[];
  };
}

export const QUERY_TX_BY_CONTRACT = gql`
      query QUERY_TX_BY_ACCOUNT($minHeight: Int!, $maxHeight: Int!, $contractAddress: String!) {
          ${FRAGMENT_TX}
          tx {
              byContract(minHeight: $minHeight, maxHeight: $maxHeight, address: $contractAddress) {
                  ...Tx
              }
          }
      }
  `;

export async function queryTxByContract(
  minHeight: number,
  maxHeight: number,
  contractAddress: string
): Promise<TxInfo[]> {
  const resp = await query<QueryTxByContract, QueryTxByContractResponse>(
    QUERY_TX_BY_CONTRACT,
    { minHeight, maxHeight, contractAddress }
  );

  return resp.tx.byContract;
}

export interface QueryTxByHeight {
  height: number;
}
export interface QueryTxByHeightResponse {
  tx: {
    byHeight: TxInfo[];
  };
}

export const QUERY_TX_BY_HEIGHT = gql`
      query QUERY_TX_BY_ACCOUNT($height: Float!) {
          ${FRAGMENT_TX}
          tx {
              byHeight(height: $height) {
                  ...Tx
              }
          }
      }
  `;

export async function queryTxByHeight(height: number): Promise<TxInfo[]> {
  const resp = await query<QueryTxByHeight, QueryTxByHeightResponse>(
    QUERY_TX_BY_HEIGHT,
    { height }
  );

  return resp.tx.byHeight;
}

export interface QueryTxByHash {
  hash: string;
}
export interface QueryTxByHashResponse {
  tx: {
    byHash: TxInfo;
  };
}

export const QUERY_TX_BY_HASH = gql`
        query QUERY_TX_BY_ACCOUNT($hash: String!) {
            ${FRAGMENT_TX}
            tx {
                byHash(hash: $hash) {
                    ...Tx
                }
            }
        }
    `;

export async function queryTxByHash(hash: string): Promise<TxInfo> {
  const resp = await query<QueryTxByHash, QueryTxByHashResponse>(
    QUERY_TX_BY_HASH,
    { hash }
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
