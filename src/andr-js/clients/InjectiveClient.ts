import { CosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import {
  Coin,
  EncodeObject,
  OfflineDirectSigner as CosmosOfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
import { findAttribute, parseRawLog } from "@cosmjs/stargate/build/logs";
import {
  getNetworkChainInfo,
  getNetworkEndpoints,
  Network,
} from "@injectivelabs/networks";
import {
  BaseAccount,
  ChainRestAuthApi,
  ChainRestTendermintApi,
  createTransaction,
  createTxRawFromSigResponse,
  MsgArg,
  MsgStoreCode,
  TxRaw as InjTxRaw,
  TxRestClient,
} from "@injectivelabs/sdk-ts";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/types/proto-signer";
import {
  BigNumberInBase,
  DEFAULT_BLOCK_TIMEOUT_HEIGHT,
  DEFAULT_STD_FEE,
  sleep,
} from "@injectivelabs/utils";
import _ from "lodash";
import { gzip } from "pako";
import type { Msg } from "../types";
import BaseClient from "./BaseClient";
import ChainClient from "./ChainClient";

type MsgType =
  | "MsgSend"
  | "MsgExecuteContract"
  | "MsgInstantiateContract"
  | "MsgStoreCode"
  | "MsgMigrateContract";

function mapObjToEnjClass(type: MsgType, value: any) {
  switch (type) {
    case "MsgStoreCode":
    default:
      console.log(value.sender);
      return MsgStoreCode.fromJSON({
        sender: value.sender,
        wasmBytes: value.wasmByteCode,
      });
  }
}

function encodeObjectToMsgArgs(msgs: EncodeObject[]): MsgArg[] {
  return msgs.map((msg) => {
    const type = _.last(msg.typeUrl.split("."));
    console.log(mapObjToEnjClass(type as MsgType, msg.value).toDirectSign());
    return mapObjToEnjClass(type as MsgType, msg.value).toDirectSign();
  });
}

export default class InjectiveClient extends BaseClient implements ChainClient {
  public signingClient?: TxRestClient;
  public queryClient?: CosmWasmClient;

  private directSigner?: OfflineDirectSigner | CosmosOfflineDirectSigner;
  private chainRestTendermintApi?: ChainRestTendermintApi;
  private chainRestAuthApi?: ChainRestAuthApi;
  private gasPrice?: GasPrice;
  private chainId?: string;

  protected preMessage(signed = true) {
    super.preMessage(signed);
    if (signed && !this.directSigner) {
      throw new Error("No signer assigned");
    }
  }

  async connect(
    endpoint: string,
    signer?: CosmosOfflineDirectSigner | OfflineDirectSigner
  ): Promise<void> {
    delete this.signingClient;
    delete this.queryClient;
    const network = endpoint.includes("testnet")
      ? Network.TestnetK8s
      : Network.MainnetK8s;
    this.chainId = getNetworkChainInfo(network).chainId;
    const endpoints = getNetworkEndpoints(network);
    const restEndpoint = endpoints.rest;
    const rpcEndpoint = endpoints.rpc!;
    if (signer) {
      this.signingClient = new TxRestClient(restEndpoint);
      this.directSigner = signer;

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    }

    this.queryClient = await CosmWasmClient.connect(rpcEndpoint);
    this.chainRestTendermintApi = new ChainRestTendermintApi(restEndpoint);
    this.chainRestAuthApi = new ChainRestAuthApi(restEndpoint);
  }

  async disconnect(): Promise<void> {
    delete this.signingClient;
    this.queryClient?.disconnect();
    delete this.queryClient;
    this.signer = "";
    delete this.directSigner;
    delete this.gasPrice;
    delete this.chainRestTendermintApi;
    delete this.chainRestAuthApi;
  }

  private async getTimeoutHeight() {
    if (!this.chainRestTendermintApi)
      throw new Error("Chain Tendermint Rest API not connected");
    const latestBlock = await this.chainRestTendermintApi.fetchLatestBlock();
    const latestHeight = latestBlock.header.height;
    return new BigNumberInBase(latestHeight)
      .plus(DEFAULT_BLOCK_TIMEOUT_HEIGHT)
      .toNumber();
  }

  private async getBaseAccount() {
    if (!this.chainRestAuthApi)
      throw new Error("Chain Auth Rest API not connected");
    const accountDetailsResponse = await this.chainRestAuthApi.fetchAccount(
      this.signer
    );
    const baseAccount = BaseAccount.fromRestApi(accountDetailsResponse);
    return baseAccount.toAccountDetails();
  }

  private async getPubKey() {
    const [account] = await this.directSigner!.getAccounts();

    return account.pubkey.toString();
  }

  private async signInj(messages: EncodeObject[], fee: StdFee, memo?: string) {
    this.preMessage();
    const timeoutHeight = await this.getTimeoutHeight();
    const baseAccount = await this.getBaseAccount();
    const pubKey = await this.getPubKey();
    const { signDoc } = createTransaction({
      pubKey,
      chainId: this.chainId!,
      message: encodeObjectToMsgArgs(messages),
      fee,
      timeoutHeight,
      sequence: baseAccount.sequence,
      accountNumber: baseAccount.accountNumber,
      memo,
    });
    const signed = await this.directSigner!.signDirect(
      this.signer!,
      signDoc as any
    ); //Typing issue here
    const injTxRaw = createTxRawFromSigResponse(signed);
    return injTxRaw;
  }

  async sign(messages: EncodeObject[], fee: StdFee, memo?: string) {
    const injTxRaw = await this.signInj(messages, fee, memo);
    return {
      bodyBytes: injTxRaw.getBodyBytes_asU8(),
      authInfoBytes: injTxRaw.getAuthInfoBytes_asU8(),
      signatures: injTxRaw.getSignaturesList_asU8(),
    };
  }

  async broadcast(
    tx: InjTxRaw,
    timeoutMs = 60000,
    pollIntervalMs = 3000
  ): Promise<DeliverTxResponse> {
    const resp = await this.signingClient!.broadcast(tx);
    console.log(resp);
    //This code is duplicated from the CosmWasmClient to correct return types
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, timeoutMs);

    const pollTx: (
      txId: string
    ) => ReturnType<ChainClient["broadcast"]> = async (txId) => {
      if (timedOut)
        throw new Error(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds`
        );
      await sleep(pollIntervalMs);
      const result = await this.queryClient!.getTx(txId);
      return result
        ? {
            code: result.code,
            height: result.height,
            rawLog: result.rawLog,
            transactionHash: txId,
            events: result.events,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted,
          }
        : pollTx(txId);
    };

    return new Promise((resolve, reject) =>
      pollTx(resp.txHash).then(
        (val) => {
          clearTimeout(txPollTimeout);
          resolve(val);
        },
        (err) => {
          clearTimeout(txPollTimeout);
          reject(err);
        }
      )
    );
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee: StdFee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    const signed = await this.signInj(messages, fee, memo);
    return await this.broadcast(signed);
  }

  // Saving this here for potential refactor for extra functionality
  // async simulateMulti(messages: EncodeObject[], fee: StdFee, memo = "") {
  //   const txRaw = await this.signInj(messages, fee, memo);
  //   const resp = await this.signingClient!.simulate(txRaw);
  //   // TODO: CHECK THIS RESPONSE OBJECT AS IT MAY BE INVALID
  //   return {
  //     ...resp,
  //     result: {
  //       ...resp.result,
  //       data: Buffer.from(resp.result.data),
  //       events: resp.result.eventsList.map((ev) => ({
  //         ...ev,
  //         attributes: ev.attributes.map((attr) => ({
  //           key: Buffer.from(attr.key),
  //           value: Buffer.from(attr.value),
  //           index: false,
  //         })),
  //       })),
  //     },
  //     gasInfo: {
  //       gasUsed: Long.fromNumber(resp.gasInfo.gasUsed),
  //       gasWanted: Long.fromNumber(resp.gasInfo.gasWanted),
  //     },
  //   };
  // }

  async simulateMulti(messages: EncodeObject[], fee: StdFee, memo = "") {
    const txRaw = await this.signInj(messages, fee, memo);
    const resp = await this.signingClient!.simulate(txRaw);
    // TODO: CHECK THIS RESPONSE OBJECT AS IT MAY BE INVALID
    return resp.gasInfo.gasUsed;
  }

  async simulate(
    message: EncodeObject,
    fee: StdFee = DEFAULT_STD_FEE,
    memo = ""
  ) {
    return this.simulateMulti([message], fee, memo);
  }

  async execute(
    contractAddress: string,
    msg: Msg,
    fee: StdFee = DEFAULT_STD_FEE,
    memo?: string | undefined,
    funds: Coin[] = []
  ): Promise<ExecuteResult> {
    const message = this.encodeExecuteMsg(contractAddress, msg, funds);
    const resp = await this.signAndBroadcast([message], fee, memo);
    return {
      ...resp,
      logs: parseRawLog(resp.rawLog),
    };
  }

  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee = DEFAULT_STD_FEE,
    memo?: string | undefined
  ) {
    const message = this.encodeExecuteMsg(address, msg, funds);
    return this.simulate(message, fee, memo);
  }

  async upload(
    code: Uint8Array,
    fee: StdFee = DEFAULT_STD_FEE,
    memo = ""
  ): ReturnType<ChainClient["upload"]> {
    const compressed = gzip(code, { level: 9 });
    const message = this.encodeUploadMessage(compressed);
    console.log(message);
    const resp = await this.signAndBroadcast([message], fee, memo);

    const parsedLogs = parseRawLog(resp.rawLog);
    const codeIdAttr = findAttribute(parsedLogs, "store_code", "code_id");

    const originalChecksum = toHex(sha256(code));
    const compressedChecksum = toHex(sha256(compressed));
    return {
      ...resp,
      logs: parsedLogs,
      codeId: parseInt(codeIdAttr.value, 10),
      originalSize: code.length,
      originalChecksum,
      compressedSize: compressed.length,
      compressedChecksum,
    };
  }

  async simulateUpload(
    code: Uint8Array,
    fee = DEFAULT_STD_FEE,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const compressed = gzip(code, { level: 9 });
    const message = this.encodeUploadMessage(compressed);
    return this.simulate(message, fee, memo);
  }
}
