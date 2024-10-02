import {
  InstantiateOptions,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
} from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";
import { MsgSendEncodeObject, SigningStargateClient } from "@cosmjs/stargate";
import { isUndefined } from "lodash";
import { Msg } from "..";
import ChainClient from "./ChainClient";
import { gzip } from "pako";

/**
 * Helper function to convert JSON to Uint8Array
 * @param json JSON object to convert to Uint8Array
 * @returns
 */
// Question: Can we remove this? there is toUtf8 helper function in cosmjs
const JsonToArray = function (json: Record<string, any>) {
  var str = JSON.stringify(json, null, 0);
  var ret = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
};

const DEFAULT_CONFIG: ChainClient['config'] = {
  storeCodeEvent: 'store_code',
  defaultFeeMultiplier: 1.4
}
/**
 * Base class for chain clients, implementing partial functionality of ChainClient
 */
export default class BaseChainClient implements Partial<ChainClient> {
  protected signingClient?: SigningStargateClient;
  public queryClient?: ChainClient["queryClient"];
  public signer = "";
  public config = DEFAULT_CONFIG;

  /**
   * Creates a new BaseChainClient instance
   * @param config - Optional partial configuration to override defaults
   */
  constructor(config?: Partial<ChainClient['config']>) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    }
  }

  /**
   * Checks if the client is connected and if a signer is assigned for signed operations
   * @param signed - Whether the operation requires a signer
   * @throws Error if client is not connected or signer is not assigned for signed operations
   */
  protected preMessage(signed = true) {
    if (!this.isConnected) throw new Error("Client not connected");
    if (
      signed &&
      (!this.signer ||
        (typeof this.signer === "string" && this.signer.length === 0))
    )
      throw new Error("No signing wallet assigned");
  }

  /**
   * Checks if the client is connected
   * @returns true if queryClient or signingClient is defined, false otherwise
   */
  get isConnected() {
    return !isUndefined(this.queryClient) || !isUndefined(this.signingClient);
  }

  /**
   * Encodes an execute message for a smart contract
   * @param address - Contract address
   * @param msg - Message to be executed
   * @param funds - Funds to be sent with the message
   * @returns Encoded execute message
   */
  encodeExecuteMsg(
    address: string,
    msg: Msg,
    funds: Coin[]
  ): MsgExecuteContractEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: {
        sender: this.signer,
        contract: address,
        msg: JsonToArray(msg),
        funds,
      },
    };
  }

  /**
   * Encodes an instantiate message for a smart contract
   * @param codeId - Code ID of the contract to instantiate
   * @param msg - Instantiate message
   * @param label - Label for the new contract instance
   * @param options - Optional instantiate options
   * @returns Encoded instantiate message
   */
  encodeInstantiateMsg(
    codeId: number,
    msg: Msg,
    label: string,
    options?: InstantiateOptions
  ): MsgInstantiateContractEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: {
        sender: this.signer,
        codeId: BigInt(codeId),
        msg: JsonToArray(msg),
        label,
        'admin': options?.admin,
        'funds': options?.funds as any
      },
    };
  }

  /**
   * Encodes an upload message for storing contract code
   * @param wasmByteCode - WASM byte code to be stored
   * @returns Encoded store code message
   */
  encodeUploadMessage(wasmByteCode: Uint8Array): MsgStoreCodeEncodeObject {
    const compressed = gzip(wasmByteCode, { level: 9 });
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: {
        sender: this.signer,
        wasmByteCode: compressed,
      },
    };
  }

  /**
   * Encodes a migrate message for upgrading a smart contract
   * @param address - Contract address to migrate
   * @param codeId - New code ID to migrate to
   * @param msg - Migration message
   * @returns Encoded migrate message
   */
  encodeMigrateMessage(
    address: string,
    codeId: number,
    msg: Msg
  ): MsgMigrateContractEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: {
        sender: this.signer,
        codeId: BigInt(codeId),
        contract: address,
        msg: JsonToArray(msg),
      },
    };
  }

  /**
   * Encodes a send message for transferring tokens
   * @param receivingAddress - Address to receive the tokens
   * @param amount - Amount of tokens to send
   * @returns Encoded send message
   */
  encodeSendMessage(
    receivingAddress: string,
    amount: Coin[]
  ): MsgSendEncodeObject {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: this.signer,
        toAddress: receivingAddress,
        amount,
      },
    };
  }
}
