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
export default class BaseChainClient implements Partial<ChainClient> {
  protected signingClient?: SigningStargateClient;
  public queryClient?: ChainClient["queryClient"];
  public signer = "";
  public config = DEFAULT_CONFIG;

  constructor(config?: Partial<ChainClient['config']>) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    }
  }

  protected preMessage(signed = true) {
    if (!this.isConnected) throw new Error("Client not connected");
    if (
      signed &&
      (!this.signer ||
        (typeof this.signer === "string" && this.signer.length === 0))
    )
      throw new Error("No signing wallet assigned");
  }

  get isConnected() {
    return !isUndefined(this.queryClient) || !isUndefined(this.signingClient);
  }

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
