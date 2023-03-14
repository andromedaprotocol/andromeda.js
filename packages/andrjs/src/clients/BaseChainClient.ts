import {
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
} from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";
import { MsgSendEncodeObject } from "@cosmjs/stargate";
import { isUndefined } from "lodash";
import Long from "long";
import { Msg } from "..";
import ChainClient from "./ChainClient";

/**
 * Helper function to convert JSON to Uint8Array
 * @param json JSON object to convert to Uint8Array
 * @returns
 */
const JsonToArray = function (json: Record<string, any>) {
  var str = JSON.stringify(json, null, 0);
  var ret = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    ret[i] = str.charCodeAt(i);
  }
  return ret;
};

export default class BaseChainClient implements Partial<ChainClient> {
  public signingClient?: ChainClient["signingClient"];
  public queryClient?: ChainClient["queryClient"];
  public signer = "";

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
    label: string
  ): MsgInstantiateContractEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: {
        sender: this.signer,
        codeId: Long.fromInt(codeId),
        msg: JsonToArray(msg),
        label,
      },
    };
  }

  encodeUploadMessage(wasmByteCode: Uint8Array): MsgStoreCodeEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: {
        sender: this.signer,
        wasmByteCode,
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
        codeId: Long.fromNumber(codeId),
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
