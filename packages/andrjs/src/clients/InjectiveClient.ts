import {
  CosmWasmClient,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  SigningCosmWasmClientOptions,
  UploadResult,
  wasmTypes,
} from "@cosmjs/cosmwasm-stargate";

import { Fee, Msg } from '..'
import {
  Coin,
  EncodeObject,
  OfflineDirectSigner,
  Registry,
} from "@cosmjs/proto-signing";
import { AminoTypes, DeliverTxResponse, GasPrice, StdFee, defaultRegistryTypes } from "@cosmjs/stargate";

import {
  InjectiveStargate,
} from "@injectivelabs/sdk-ts";
import {
  DEFAULT_FEE_DENOM,
  DEFAULT_GAS_PRICE,
  DEFAULT_STD_FEE,
} from "@injectivelabs/utils";
import BaseChainClient from "./BaseChainClient";
import ChainClient from "./ChainClient";
import { SigningStargateClient, createDefaultAminoConverters } from "@injectivelabs/sdk-ts/dist/cjs/core/stargate/SigningStargateClient";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { gzip } from "pako";
import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { findAttribute, Log } from "@cosmjs/stargate/build/logs";
import { Tendermint37Client } from "@cosmjs/tendermint-rpc";


export default class InjectiveClient
  extends BaseChainClient
  implements ChainClient {
  declare public signingClient?: SigningStargateClient;
  declare public queryClient?: CosmWasmClient;
  public gasPrice?: GasPrice;

  private directSigner?: OfflineDirectSigner;

  protected preMessage(signed = true) {
    super.preMessage(signed);
    if (signed && !this.directSigner) {
      throw new Error("No signer assigned");
    }
  }

  async connect(
    endpoint: string,
    signer?: OfflineDirectSigner,
    options?: SigningCosmWasmClientOptions
  ): Promise<void> {
    delete this.signingClient;
    delete this.queryClient;


    this.queryClient = await CosmWasmClient.connect(endpoint);
    this.gasPrice = options?.gasPrice || GasPrice.fromString(DEFAULT_GAS_PRICE + DEFAULT_FEE_DENOM);
    if (signer) {
      const tmClient = await Tendermint37Client.connect(endpoint);
      this.signingClient = await InjectiveStargate.InjectiveSigningStargateClient.createWithSigner(tmClient, signer, {
        registry: options?.registry || new Registry([...defaultRegistryTypes, ...wasmTypes]),
        aminoTypes: options?.aminoTypes || new AminoTypes({ ...createDefaultAminoConverters() }),
        gasPrice: this.gasPrice
      });
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
  }


  async sign(messages: EncodeObject[], fee?: StdFee, memo?: string): Promise<TxRaw> {
    this.preMessage(true);
    return await this.signingClient!.sign(this.signer, messages, fee || DEFAULT_STD_FEE, memo || "");
  }

  async broadcast(
    tx: TxRaw,
  ): Promise<DeliverTxResponse> {
    this.preMessage(true);
    const txBytes = TxRaw.encode(tx).finish();
    return await this.signingClient!.broadcastTx(txBytes)
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee?: StdFee | "auto",
    memo?: string
  ): Promise<DeliverTxResponse & { logs: Log[] }> {
    this.preMessage(true);
    const res = await this.signingClient!.signAndBroadcast(
      this.signer,
      messages,
      fee || DEFAULT_STD_FEE,
      memo
    );
    return {
      ...res,
      logs: JSON.parse(res.rawLog ?? '[]')
    }

  }
  async simulateMulti(
    messages: EncodeObject[],
    _fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<number> {
    this.preMessage();
    return this.signingClient!.simulate(this.signer, messages, memo);
  }

  async simulate(
    message: EncodeObject,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number> {
    this.preMessage();
    return this.signingClient!.simulate(this.signer, [message], memo);
  }

  async execute(
    contractAddress: string,
    msg: Msg,
    fee?: StdFee | undefined,
    memo?: string | undefined,
    funds?: readonly Coin[] | undefined
  ): Promise<DeliverTxResponse & { logs: any }> {
    this.preMessage(true);
    const encoded = this.encodeExecuteMsg(contractAddress, msg, [...funds || []]);
    const res = await this.signAndBroadcast([encoded], fee, memo);
    return {
      ...res,
      logs: []
    }
  }

  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    _fee?: Fee,
    memo?: string | undefined
  ) {
    const message = this.encodeExecuteMsg(address, msg, funds);
    return this.simulate(message, undefined, memo);
  }

  async upload(code: Uint8Array, fee: StdFee | "auto" = "auto", memo?: string | undefined): Promise<UploadResult> {
    this.preMessage();
    const compressed = gzip(code, { level: 9 });
    const encoded = this.encodeUploadMessage(compressed);
    const res = await this.signAndBroadcast([encoded], fee, memo);
    const compressedChecksum = toHex(sha256(compressed));
    const codeIdAttr = findAttribute([{ msg_index: 0, 'log': '', events: res.events }], "cosmwasm.wasm.v1.EventCodeStored", "code_id");
    let codeId = -1;
    try {
      codeId = parseInt(JSON.parse(codeIdAttr.value));
    } catch (err) { }
    return {
      ...res,
      originalSize: code.length,
      compressedSize: compressed.length,
      checksum: compressedChecksum,
      codeId: codeId,
      logs: []
    }
  }

  async simulateUpload(
    code: Uint8Array,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeUploadMessage(code);
    return this.simulate(message, undefined, memo);
  }

  async instantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee: StdFee | "auto" = "auto",
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    this.preMessage(true);
    const encoded = this.encodeInstantiateMsg(codeId, msg, label, options);
    const res = await this.signAndBroadcast([encoded], fee, "Instantiate");
    const contractAddressAttr = findAttribute(
      res.logs,
      "wasm",
      "_contract_address"
    );
    return {
      ...res,
      contractAddress: contractAddressAttr.value,
    }
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
    fee: StdFee | "auto" = "auto",
    memo?: string | undefined
  ): Promise<MigrateResult> {
    this.preMessage(true);
    const encoded = this.encodeMigrateMessage(contractAddress, codeId, msg);
    return this.signAndBroadcast([encoded], fee, memo);
  }

  async simulateMigrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
    return this.simulate(message, fee, memo);
  }

  async sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<any> {
    return this.signingClient?.sendTokens(
      this.signer,
      receivingAddress,
      amount,
      fee,
      memo
    );
  }
}