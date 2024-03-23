import {
  CosmWasmClient,
  DeliverTxResponse,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  UploadResult,
} from "@cosmjs/cosmwasm-stargate";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { Coin, EncodeObject, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { findAttribute, Log } from "@cosmjs/stargate/build/logs";
import {
  LCDClient,
  Msg as TerraMsg,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgSend,
  MsgStoreCode,
  Tx,
} from "@terra-money/terra.js";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import _ from "lodash";
import { gzip } from "pako";
import { Fee, Msg } from "..";
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
      return new MsgInstantiateContract(
        value.sender,
        value.sender,
        value.codeId,
        arrayToJson(value.msg),
        value.amount,
        value.label
      );
    case "MsgExecuteContract":
      return new MsgExecuteContract(
        value.sender,
        value.contract,
        arrayToJson(value.msg),
        value.funds
      );
    case "MsgMigrateContract":
      return new MsgMigrateContract(
        value.sender,
        value.contract,
        value.codeId,
        arrayToJson(value.msg)
      );
    case "MsgSend":
      return new MsgSend(value.fromAddress, value.toAddress, value.amount);
    case "MsgStoreCode":
    default:
      return new MsgStoreCode(value.sender, value.wasmByteCode);
  }
}

function encodeObjectToMsgArgs(msgs: EncodeObject[]): TerraMsg[] {
  return msgs.map((msg) => {
    const type = _.last(msg.typeUrl.split("."));
    return mapObjToEnjClass(type as MsgType, msg.value);
  });
}

export default class TerraClient
  extends BaseChainClient
  implements ChainClient {
  private directSigner?: OfflineDirectSigner;
  public signingClient?: LCDClient;

  async connect(endpoint: string, signer?: OfflineDirectSigner) {
    delete this.signingClient;
    delete this.queryClient;

    this.queryClient = await CosmWasmClient.connect(endpoint);
    this.signingClient = new LCDClient({
      URL: "https://pisco-lcd.terra.dev/",
      chainID: "pisco-1",
    }); //TODO: FIX THIS WHEN MOVE TO MAINNET
    if (signer) {
      this.directSigner = signer;

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    }
  }

  async disconnect() {
    delete this.directSigner;
    delete this.signingClient;
    delete this.queryClient;
    this.signer = "";
  }

  async broadcast(
    tx: Tx
  ): Promise<DeliverTxResponse & { logs: readonly Log[] }> {
    const resp = await this.signingClient?.tx.broadcast(tx);

    if (!resp) throw new Error("No response when broadcasting Tx");
    const codeIdAttr = findAttribute(resp.logs, "store_code", "code_id");
    return {
      ...resp,
      code: codeIdAttr ? parseInt(codeIdAttr.value, 10) : -1,
      transactionHash: resp.txhash,
      events: _.flatten(resp.logs.map((log) => log.events)),
      gasUsed: resp.gas_used,
      gasWanted: resp.gas_wanted,
      rawLog: resp.raw_log,
      // This is required but we don't have this
      txIndex: null as any,
      msgResponses: []
    };
  }

  async createTx(
    messages: EncodeObject[],
    _fee?: Fee,
    memo?: string
  ): Promise<Tx> {
    const details = await this.signingClient?.auth.accountInfo(this.signer);
    if (!details)
      throw new Error(
        `Could not fetch account info for address ${this.signer}`
      );
    const tx = await this.signingClient?.tx.create(
      [
        {
          address: this.signer,
          sequenceNumber: details.getSequenceNumber(),
          publicKey: details.getPublicKey(),
        },
      ],
      {
        msgs: encodeObjectToMsgArgs(messages),
        memo,
      }
    );
    if (!tx) throw new Error("Failed to create Tx data");
    return tx;
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee?: Fee,
    memo?: string | undefined
  ): Promise<DeliverTxResponse & { logs: readonly Log[] }> {
    const tx = await this.createTx(messages, fee, memo);
    return this.broadcast(tx);
  }

  async sign(
    messages: EncodeObject[],
    fee?: Fee,
    memo?: string
  ): Promise<TxRaw> {
    const tx = await this.createTx(messages, fee, memo);
    return {
      bodyBytes: tx.body.toBytes(),
      authInfoBytes: tx.auth_info.toBytes(),
      signatures: tx.signatures.map((str) => Uint8Array.from(Buffer.from(str))), //TODO: THIS MAY NOT WORK?
    };
  }

  async simulate(
    message: EncodeObject,
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number> {
    const tx = await this.createTx([message], fee, memo);
    const resp = await this.signingClient?.tx.estimateGas(tx);

    return resp ?? -1;
  }

  async simulateMulti(
    messages: readonly EncodeObject[],
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number> {
    const tx = await this.createTx([...messages], fee, memo);
    const resp = await this.signingClient?.tx.estimateGas(tx);

    return resp ?? -1;
  }

  async execute(
    contractAddress: string,
    msg: Msg,
    fee?: Fee,
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> {
    const message = this.encodeExecuteMsg(contractAddress, msg, [
      ...(funds ?? []),
    ]);
    return this.signAndBroadcast([message], fee, memo);
  }

  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeExecuteMsg(address, msg, funds);
    return this.simulate(message, fee, memo);
  }

  async upload(
    code: Uint8Array,
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<UploadResult> {
    const compressed = gzip(code, { level: 9 });
    const message = this.encodeUploadMessage(compressed);
    const resp = await this.signAndBroadcast([message], fee, memo);

    // const originalChecksum = toHex(sha256(code));
    const compressedChecksum = toHex(sha256(compressed));
    return {
      ...resp,
      codeId: resp.code,
      originalSize: code.length,
      compressedSize: compressed.length,
      checksum: compressedChecksum
    };
  }

  async simulateUpload(
    code: Uint8Array,
    fee?: Fee,
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
    fee?: Fee,
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
    fee?: Fee,
    options?: InstantiateOptions
  ): Promise<number | undefined> {
    const message = this.encodeInstantiateMsg(codeId, msg, label);
    return this.simulate(message, fee, options?.memo);
  }

  async migrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee,
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
    fee?: Fee,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
    return this.simulate(message, fee, memo);
  }

  async sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee?: Fee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    const message = this.encodeSendMessage(receivingAddress, [...amount]);

    return this.signAndBroadcast([message], fee, memo);
  }
}
