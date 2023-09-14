import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { IndexedTx } from "@cosmjs/stargate";
import { Log, parseRawLog } from "@cosmjs/stargate/build/logs";
import _ from "lodash";
import { querySdk } from "../client";
import { ITxEventAttribute } from "@andromedaprotocol/gql";
import { ITxInfoFragment } from "@andromedaprotocol/gql/dist/__generated/node";

export const andrEventKeys = ["andr_app"];


export interface CleanedTx extends Omit<ITxInfoFragment, "rawLog" | "tx" | "txLog"> {
  rawLog: readonly Log[];
  tx: DecodedTxRaw;
  adoType?: string;
}

export function cleanTx(tx: ITxInfoFragment | IndexedTx): CleanedTx {
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
): ITxEventAttribute[] {
  const [type, key] = field.split(".");
  const attrs: ITxEventAttribute[] = [];
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
) {
  const resp = await querySdk.TX_BY_ACCOUNT({
    chainId,
    sentFromOrTo: address,
    maxHeight,
    minHeight
  })

  return resp.tx.byAccount;
}


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
) {
  const resp = await querySdk.TX_BY_CONTRACT({
    chainId,
    maxHeight,
    minHeight,
    contractAddress
  })

  return resp.tx.byContract;
}

/**
 * Queries all transactions for a given height
 * @param height
 * @returns
 */
export async function queryTxByHeight(
  chainId: string,
  height: number) {
  const resp = await querySdk.TX_BY_HEIGHT({
    chainId,
    height
  })

  return resp.tx.byHeight;
}


/**
 * Queries a transaction by tx hash
 * @param chainId
 * @param hash
 * @returns
 */
export async function queryTxByHash(
  chainId: string,
  hash: string
) {
  const resp = await querySdk.TX_BY_HASH({
    chainId,
    hash
  })
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