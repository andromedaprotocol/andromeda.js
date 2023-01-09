import {
  CosmWasmClient,
  DeliverTxResponse,
  ExecuteResult,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
  UploadResult,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { TxRaw as InjTxRaw, TxRestClient } from "@injectivelabs/sdk-ts";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/types/proto-signer";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import type { Fee, Msg } from "../types";

export default interface ChainClient {
  signingClient?: SigningCosmWasmClient | TxRestClient;
  queryClient?: CosmWasmClient;
  signer: string;
  isConnected: boolean;

  connect(
    endpoint: string,
    signer?: OfflineSigner | OfflineDirectSigner,
    options?: SigningCosmWasmClientOptions
  ): Promise<void>;
  disconnect(): Promise<void>;
  sign(
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): ReturnType<SigningCosmWasmClient["sign"]>;
  broadcast(
    tx: TxRaw | InjTxRaw
  ): ReturnType<SigningCosmWasmClient["broadcastTx"]>;
  signAndBroadcast(
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): Promise<DeliverTxResponse>;
  // simulateMulti(
  //   messages: EncodeObject[],
  //   fee: Fee,
  //   memo?: string
  // ): ReturnType<TxExtension["tx"]["simulate"]>;
  simulateMulti(
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): ReturnType<SigningCosmWasmClient["simulate"]>;
  simulate(
    message: EncodeObject,
    fee?: Fee,
    memo?: string
  ): ReturnType<SigningCosmWasmClient["simulate"]>;
  execute(
    contractAddress: string,
    msg: Msg,
    fee?: Fee,
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult>;
  simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: Fee,
    memo?: string
  ): Promise<number | undefined>;
  upload(code: Uint8Array, fee?: Fee, memo?: string): Promise<UploadResult>;
  simulateUpload(
    code: Uint8Array,
    fee?: Fee,
    memo?: string
  ): Promise<number | undefined>;
  // instantiate(
  //   codeId: number,
  //   msg: Msg,
  //   label: string,
  //   fee: Fee,
  //   options?: InstantiateOptions
  // ): Promise<InstantiateResult>;
  // query<T = any>(address: string, query: Msg): Promise<T>;
  // migrate(
  //   contractAddress: string,
  //   codeId: number,
  //   msg: Msg,
  //   fee: Fee,
  //   memo?: string
  // ): Promise<MigrateResult>;
  /**
   * Converts an execute message to an EncodeObject for signing or simulating
   * @param address
   * @param msg
   * @param funds
   * @returns
   */
  encodeExecuteMsg(
    address: string,
    msg: Msg,
    funds: Coin[]
  ): MsgExecuteContractEncodeObject;
  /**
   * Converts an instantiate message to an EncodeObject for signing or simulating
   * @param codeId
   * @param msg
   * @param funds
   * @returns
   */
  encodeInstantiateMsg(
    codeId: number,
    msg: Msg,
    label: string
  ): MsgInstantiateContractEncodeObject;
  /**
   * Converts an upload message to an EncodeObject for signing or simulating
   * @param wasmByteCode
   * @returns
   */
  encodeUploadMessage(wasmByteCode: Uint8Array): MsgStoreCodeEncodeObject;
  /**
   * Converts a migrate message to an EncodeObject for signing or simulating
   * @param address
   * @param codeId
   * @param msg
   * @returns
   */
  encodeMigrateMessage(
    address: string,
    codeId: number,
    msg: Msg
  ): MsgMigrateContractEncodeObject;
}
