import { SigningArchwayClient } from "@archwayhq/arch3.js/build";
import type {
  CosmWasmClient,
  DeliverTxResponse,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
  UploadResult,
} from "@cosmjs/cosmwasm-stargate";
import type { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import type { MsgSendEncodeObject } from "@cosmjs/stargate";
import type { TxGrpcClient, TxRaw as InjTxRaw } from "@injectivelabs/sdk-ts";
import type { LCDClient, Tx as TerraTx } from "@terra-money/terra.js";
import type { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import type { Fee, Msg } from "../types";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/types/proto-signer";

/**
 * When interacting with any Cosmos chain there may be differences in how they sign messages or how the messages themselves are constructed.
 * This class is used to provide a generic interface for interacting with any Cosmos chain and is used by our AndromedaClient class.
 * Most of the methods are simply wrappers however some require specific implementations.
 */
export default interface ChainClient {
  // The client used to sign any transactions braodcast to the chain
  signingClient?:
  | SigningCosmWasmClient
  | TxGrpcClient
  | LCDClient
  | SigningArchwayClient;
  // The client used to query the chain
  queryClient?: CosmWasmClient;
  // The current signer address
  signer: string;
  // Whether the current chain is connected
  isConnected: boolean;

  /**
   * Connects to the given chain. Assigns all clients used within the chain client, if a signer is provided a signing client is assigned
   * @param endpoint
   * @param signer
   * @param options
   */
  connect(
    endpoint: string,
    signer?: OfflineSigner | OfflineDirectSigner,
    options?: SigningCosmWasmClientOptions
  ): Promise<void>;
  /**
   * Disconnects from the current chain completely
   */
  disconnect(): Promise<void>;
  /**
   * Signs a given message with the connected signer
   * @param messages
   * @param fee
   * @param memo
   */
  sign(
    messages: EncodeObject[],
    fee?: Fee,
    memo?: string
  ): ReturnType<SigningCosmWasmClient["sign"]> | TerraTx;
  /**
   * Broadcasts a given transaction to the connected chain
   * @param tx
   */
  broadcast(
    tx: TxRaw | InjTxRaw | TerraTx
  ): ReturnType<SigningCosmWasmClient["broadcastTx"]>;
  /**
   * Signs a given message before broadcasting it to the connected chain
   * @param messages
   * @param fee
   * @param memo
   */
  signAndBroadcast(
    messages: EncodeObject[],
    fee?: Fee,
    memo?: string
  ): Promise<DeliverTxResponse>;
  /**
   * Simulates all given messages and returns a gas fee estimate
   * @param messages
   * @param fee
   * @param memo
   */
  simulateMulti(
    messages: readonly EncodeObject[],
    fee?: Fee,
    memo?: string
  ): ReturnType<SigningCosmWasmClient["simulate"]>;
  /**
   * Simulates a given message and returns a gas fee estimate
   * @param message
   * @param fee
   * @param memo
   */
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
  /**
   * Simulates an execute message and returns a gas fee estimate
   * @param address
   * @param msg
   * @param funds
   * @param fee
   * @param memo
   */
  simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: Fee,
    memo?: string
  ): Promise<number | undefined>;
  /**
   * Uploads given contract code (Uint8Array) to the chain
   * @param code
   * @param fee
   * @param memo
   */
  upload(code: Uint8Array, fee?: Fee, memo?: string): Promise<UploadResult>;
  /**
   * Simulates a migrate message and returns a gas fee estimate
   * @param code
   * @param fee
   * @param memo
   */
  simulateUpload(
    code: Uint8Array,
    fee?: Fee,
    memo?: string
  ): Promise<number | undefined>;
  /**
   * Instantiates a contract with the given code id using the provided instantiate message
   * @param codeId
   * @param msg
   * @param label
   * @param fee
   * @param options
   */
  instantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: Fee,
    options?: InstantiateOptions
  ): Promise<InstantiateResult>;
  /**
   * Simulates an instantiation message and returns a gas fee estimate
   * @param codeId
   * @param msg
   * @param label
   * @param fee
   * @param options
   */
  simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: Fee,
    options?: InstantiateOptions
  ): Promise<number | undefined>;
  /**
   * Migrates a contract to a given code id
   * @param contractAddress
   * @param codeId
   * @param msg
   * @param fee
   * @param memo
   */
  migrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee,
    memo?: string
  ): Promise<MigrateResult>;
  /**
   * Simulates a migrate message for a given contract address, code id and migrate message and returns a gas estimate
   * @param contractAddress
   * @param codeId
   * @param msg
   * @param fee
   * @param memo
   */
  simulateMigrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee,
    memo?: string
  ): Promise<number | undefined>;
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
  /**
   * Converts a migrate message to an EncodeObject for signing or simulating
   * @param address
   * @param codeId
   * @param msg
   * @returns
   */
  encodeSendMessage(
    receivingAddress: string,
    amount: Coin[]
  ): MsgSendEncodeObject;
  /**
   * Sends tokens from the signing address to the provided receiving address
   * @param receivingAddress
   * @param amount
   * @param fee
   * @param memo
   */
  sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee?: Fee,
    memo?: string
  ): Promise<DeliverTxResponse>;
}
