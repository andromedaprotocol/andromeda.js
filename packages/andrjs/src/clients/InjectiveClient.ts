import {
  CosmWasmClient,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
} from "@cosmjs/cosmwasm-stargate";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import {
  Coin,
  EncodeObject,
  OfflineDirectSigner as CosmosOfflineDirectSigner,
} from "@cosmjs/proto-signing";
import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
import { findAttribute, Log, parseRawLog } from "@cosmjs/stargate/build/logs";
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
  MsgArg,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgSend,
  MsgStoreCode,
  TxGrpcClient,
  TxRaw as InjTxRaw,
  createTxRawFromSigResponse,
} from "@injectivelabs/sdk-ts";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/types/proto-signer";
import {
  BigNumberInBase,
  DEFAULT_BLOCK_TIMEOUT_HEIGHT,
  DEFAULT_GAS_LIMIT,
  getStdFee,
} from "@injectivelabs/utils";
import _ from "lodash";
import Long from "long";
import { gzip } from "pako";
import type { Msg } from "../types";
import BaseChainClient from "./BaseChainClient";
import ChainClient from "./ChainClient";

type MsgType =
  | "MsgSend"
  | "MsgExecuteContract"
  | "MsgInstantiateContract"
  | "MsgStoreCode"
  | "MsgMigrateContract";

function arrayToJson(array: Uint8Array) {
  const jsonString = Buffer.from(array).toString("utf8");

  const parsedData = JSON.parse(jsonString);
  return parsedData;
}

function mapObjToEnjClass(type: MsgType, value: any) {
  switch (type) {
    case "MsgInstantiateContract":
      return MsgInstantiateContract.fromJSON({
        sender: value.sender,
        admin: value.sender,
        codeId: value.codeId,
        label: value.label,
        // Msg is encoded as Uint8Array, convert back to JSON here
        msg: arrayToJson(value.msg),
        amount: value.amount,
      });
    case "MsgExecuteContract":
      return MsgExecuteContract.fromJSON({
        funds: value.funds,
        sender: value.sender,
        contractAddress: value.contract,
        msg: arrayToJson(value.msg),
      });
    case "MsgMigrateContract":
      return MsgMigrateContract.fromJSON({
        sender: value.sender,
        contract: value.contract,
        codeId: value.codeId,
        msg: arrayToJson(value.msg),
      });
    case "MsgSend":
      return MsgSend.fromJSON({
        amount: value.amount[0],
        srcInjectiveAddress: value.fromAddress,
        dstInjectiveAddress: value.toAddress,
      });
    case "MsgStoreCode":
    default:
      return MsgStoreCode.fromJSON({
        sender: value.sender,
        wasmBytes: value.wasmByteCode,
      });
  }
}

function encodeObjectToMsgArgs(msgs: EncodeObject[]): MsgArg[] {
  return msgs.map((msg) => {
    const type = _.last(msg.typeUrl.split("."));
    return mapObjToEnjClass(type as MsgType, msg.value).toDirectSign();
  });
}

export default class InjectiveClient
  extends BaseChainClient
  implements ChainClient {
  public signingClient?: TxGrpcClient;
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
    const { rest, rpc, grpc } = getNetworkEndpoints(network);

    this.queryClient = await CosmWasmClient.connect(rpc!);
    this.chainRestTendermintApi = new ChainRestTendermintApi(rest);
    this.chainRestAuthApi = new ChainRestAuthApi(rest);

    if (signer) {
      this.signingClient = new TxGrpcClient(grpc);
      this.directSigner = signer;

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    }
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

    return Buffer.from(account.pubkey).toString("base64");
  }

  private async signInj(
    messages: EncodeObject[],
    fee: StdFee = getStdFee((DEFAULT_GAS_LIMIT * 2).toString()),
    memo: string = "",
    simulation = false
  ) {
    this.preMessage();
    const timeoutHeight = await this.getTimeoutHeight();
    const baseAccount = await this.getBaseAccount();
    const pubKey = await this.getPubKey();
    const { signDoc, txRaw } = createTransaction({
      pubKey,
      chainId: this.chainId!,
      message: encodeObjectToMsgArgs(messages),
      timeoutHeight,
      sequence: baseAccount.sequence,
      accountNumber: baseAccount.accountNumber,
      memo,
      fee,
    });

    if (simulation) return txRaw;

    const signed = await this.directSigner!.signDirect(this.signer!, {
      ...signDoc,
      chainId: signDoc.getChainId(),
      bodyBytes: signDoc.getBodyBytes_asU8(),
      authInfoBytes: signDoc.getAuthInfoBytes_asU8(),
      accountNumber: Long.fromInt(baseAccount.accountNumber),
    });

    return createTxRawFromSigResponse(signed);
  }

  async sign(messages: EncodeObject[], fee?: StdFee, memo?: string) {
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
  ): Promise<DeliverTxResponse> {
    const resp = await this.signingClient!.broadcastBlock(tx, 3);
    const result = await this.signingClient!.fetchTxPoll(resp.txHash, timeoutMs);
    return {
      // BUG: Fix types here
      ...result as any,
      transactionHash: result.txHash,
    }
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee?: StdFee | "auto",
    memo?: string
  ): Promise<DeliverTxResponse & { logs: readonly Log[] }> {
    const signed = await this.signInj(
      messages,
      fee === "auto" ? undefined : fee,
      memo
    );
    const resp = await this.broadcast(signed);
    return {
      ...resp,
      logs: parseRawLog(resp.rawLog),
    };
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

  async simulateMulti(messages: EncodeObject[], fee?: StdFee, memo = "") {
    const txRaw = await this.signInj(messages, fee, memo, true);
    const resp = await this.signingClient!.simulate(txRaw);
    // TODO: CHECK THIS RESPONSE OBJECT AS IT MAY BE INVALID
    return resp.gasInfo.gasUsed;
  }

  async simulate(message: EncodeObject, fee?: StdFee, memo = "") {
    return this.simulateMulti([message], fee, memo);
  }

  async execute(
    contractAddress: string,
    msg: Msg,
    fee?: StdFee,
    memo?: string | undefined,
    funds: Coin[] = []
  ): Promise<ExecuteResult> {
    const message = this.encodeExecuteMsg(contractAddress, msg, funds);
    return await this.signAndBroadcast([message], fee, memo);
  }

  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: StdFee,
    memo?: string | undefined
  ) {
    const message = this.encodeExecuteMsg(address, msg, funds);
    return this.simulate(message, fee, memo);
  }

  async upload(
    code: Uint8Array,
    fee?: StdFee,
    memo = ""
  ): ReturnType<ChainClient["upload"]> {
    const compressed = gzip(code, { level: 9 });
    const message = this.encodeUploadMessage(compressed);
    const resp = await this.signAndBroadcast([message], fee, memo);

    const codeIdAttr = findAttribute(resp.logs, "store_code", "code_id");

    // const originalChecksum = toHex(sha256(code));
    const compressedChecksum = toHex(sha256(compressed));
    return {
      ...resp,
      codeId: parseInt(codeIdAttr.value, 10),
      originalSize: code.length,
      compressedSize: compressed.length,
      checksum: compressedChecksum
    };
  }

  async simulateUpload(
    code: Uint8Array,
    fee?: StdFee,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const compressed = gzip(code, { level: 9 });
    const message = this.encodeUploadMessage(compressed);
    return this.simulate(message, fee, memo);
  }

  async instantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    const message = this.encodeInstantiateMsg(codeId, msg, label);
    const resp = await this.signAndBroadcast(
      [message],
      fee,
      options ? options.memo : ""
    );
    const contractAddressAttr = findAttribute(
      resp.logs,
      "wasm",
      "_contract_address"
    );

    return {
      ...resp,
      contractAddress: contractAddressAttr.value,
    };
  }

  async simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    options?: InstantiateOptions
  ): Promise<number | undefined> {
    const message = this.encodeInstantiateMsg(codeId, msg, label);
    return this.simulate(message, fee, options?.memo);
  }

  async migrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: StdFee,
    memo?: string
  ): Promise<MigrateResult> {
    const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
    const resp = await this.signAndBroadcast([message], fee, memo);
    return resp;
  }

  async simulateMigrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: StdFee,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
    return this.simulate(message, fee, memo);
  }

  async sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee?: StdFee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    if (amount.length > 1)
      throw new Error(
        "Injective only enables the sending of one amount at a time, please only send one token type."
      );

    const message = this.encodeSendMessage(receivingAddress, [...amount]);

    return this.signAndBroadcast([message], fee, memo);
  }
}
