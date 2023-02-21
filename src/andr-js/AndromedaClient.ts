import {
  InstantiateOptions,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import {
  calculateFee,
  DeliverTxResponse,
  GasPrice,
  StdFee,
} from "@cosmjs/stargate";
import Long from "long";
import { ADOAPI, ADODBAPI, RegistryAPI } from "./api";

import type { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/types/proto-signer";
import { isUndefined } from "lodash";
import type { ChainClient } from "./clients";
import createClient from "./clients";
import type { Fee, Msg } from "./types";

/**
 * A helper class for interacting with the Andromeda ecosystem
 */
export default class AndromedaClient {
  // Signer used for broadcasting messages
  public signer: string = "";
  // The gas price assigned for broadcasting messages
  private gasPrice?: GasPrice;
  // Client used to interact with the chain, includes a query client when connected and a signing client when connected with a signer
  public chainClient?: ChainClient;

  /**
   * Instantiate all provided APIs
   */

  // API for shared ADO messages
  public ado = new ADOAPI(this);
  // API for registry specific messages
  public registry = new RegistryAPI(this);
  // API for ADO DB specific messages
  public adoDB = new ADODBAPI(this);

  /**
   * A pre-message hook to check that the client is connected and functioning
   * @param signed Whether the message is signed
   */
  private preMessage() {
    if (!this.isConnected) throw new Error("Client not connected");
  }

  /**
   * Connects to a new chain by endpoint
   * @param endpoint The endpoint of the chain to connect to
   * @param signer The signer used to sign messages
   * @param options Any additional client options
   */
  async connect(
    endpoint: string,
    registryAddress: string,
    addressPrefix: string,
    signer?: OfflineSigner | OfflineDirectSigner,
    options?: SigningCosmWasmClientOptions
  ) {
    delete this.chainClient;

    this.gasPrice = options?.gasPrice;

    this.chainClient = createClient(addressPrefix);
    await this.chainClient.connect(endpoint, signer, options);
    await this.assignKeyAddresses(registryAddress);
  }

  /**
   * Assigns key addresses to the provided APIs
   * @param registryAddress
   * @returns
   */
  private async assignKeyAddresses(registryAddress: string) {
    if (!registryAddress || registryAddress.length === 0) {
      console.warn("No registry address provided");
      return;
    }
    this.registry.address = registryAddress;
    await this.adoDB.getAddressFromRegistry(this.registry);
  }

  /**
   * Disconnects the assigned clients
   */
  disconnect() {
    this.chainClient!.disconnect();
    delete this.chainClient;

    this.signer = "";
    delete this.gasPrice;

    this.registry = new RegistryAPI(this);
    this.adoDB = new ADODBAPI(this);
  }

  /**
   * Whether the client is currently connected
   */
  get isConnected() {
    return !isUndefined(this.chainClient) && this.chainClient!.isConnected;
  }

  /**
   * Wrapper function for CosmWasm sign and broadcast
   * @param messages
   * @param fee
   * @param memo
   * @returns
   */
  async signAndBroadcast(
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    this.preMessage();
    return this.chainClient!.signAndBroadcast(messages, fee, memo);
  }

  /**
   * Wrapper function for CosmWasm execute
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#signAndBroadcast
   * @param contractAddress
   * @param msg
   * @param fee
   * @param memo
   * @returns
   */
  async execute(
    contractAddress: string,
    msg: Msg,
    fee?: Fee,
    memo?: string,
    funds?: readonly Coin[]
  ) {
    this.preMessage();
    return await this.chainClient!.execute(
      contractAddress,
      msg,
      fee ?? "auto",
      memo,
      funds
    );
  }

  /**
   *  Wrapper function for CosmWasm upload
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#upload
   * @param code
   * @param fee
   * @param memo
   * @returns
   */
  async upload(code: Uint8Array, fee?: Fee, memo?: string) {
    this.preMessage();
    // return await this.cosmWasmClient!.upload(this.signer, code, fee, memo);]
    return this.chainClient!.upload(code, fee, memo);
  }

  /**
   * Wrapper function for CosmWasm instantiate
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#instantiate
   * @param codeId
   * @param msg
   * @param label
   * @param fee
   * @param options
   * @returns
   */
  async instantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee: Fee,
    options?: InstantiateOptions
  ) {
    this.preMessage();
    return await this.chainClient!.instantiate(codeId, msg, label, fee, {
      admin: this.signer,
      ...options,
    });
  }

  /**
   * Wrapper function for CosmWasm query
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#queryContractSmart
   * @param address
   * @param query
   * @returns
   */
  async queryContract<T = any>(address: string, query: Msg) {
    this.preMessage();
    return (await this.chainClient!.queryClient!!.queryContractSmart(
      address,
      query
    )) as T;
  }

  /**
   * Wrapper function for CosmWasm migrate
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#migrate
   * @param contractAddress
   * @param codeId
   * @param msg
   * @param fee
   * @param memo
   * @returns
   */
  async migrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee,
    memo?: string
  ) {
    this.preMessage();
    return await this.chainClient!.migrate(
      contractAddress,
      codeId,
      msg,
      fee,
      memo
    );
  }

  /**
   * Estimates the gas cost of sending an execute transaction
   * @param address
   * @param msg
   * @param funds
   * @param memo
   * @returns A gas fee estimation
   */
  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: StdFee,
    memo: string = ""
  ) {
    this.preMessage();
    return this.simulateMsgs(
      [this.encodeExecuteMsg(address, msg, funds)],
      fee,
      memo
    );
  }

  /**
   * Estimates the fee cost of sending an execute transaction
   * @param address
   * @param msg
   * @param funds
   * @param memo
   * @returns A fee estimation
   */
  async estimateExecuteFee(
    address: string,
    msg: Msg,
    funds: Coin[],
    fee?: StdFee,
    memo: string = ""
  ) {
    this.preMessage();
    return this.estimateFee(
      [this.encodeExecuteMsg(address, msg, funds)],
      fee,
      memo
    );
  }

  /**
   * Estimates the gas cost of sending an instantiate transaction
   * @param codeId
   * @param msg
   * @returns A gas fee estimation
   */
  async simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    memo?: string
  ) {
    this.preMessage();
    return this.simulateMsgs(
      [this.encodeInstantiateMsg(codeId, msg, label)],
      fee,
      memo
    );
  }

  /**
   * Estimates the fee cost of sending an instantiate transaction
   * @param codeId
   * @param msg
   * @param label
   * @returns A fee estimation
   */
  async estimateInstantiationFee(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    memo?: string
  ) {
    this.preMessage();
    return this.estimateFee(
      [this.encodeInstantiateMsg(codeId, msg, label)],
      fee,
      memo
    );
  }

  /**
   * Estimates the gas cost of sending an upload transaction
   * @param wasmByteCode
   * @returns A gas fee estimation
   */
  async simulateUpload(wasmByteCode: Uint8Array) {
    // return this.simulateMsgs([this.encodeUploadMessage(wasmByteCode)]);
    return this.chainClient?.simulateUpload(wasmByteCode);
  }

  /**
   * Estimates the fee cost of sending an upload transaction
   * @param wasmByteCode
   * @returns A fee estimate
   */
  async estimateUploadFee(wasmByteCode: Uint8Array) {
    this.preMessage();
    return this.estimateFee([this.encodeUploadMessage(wasmByteCode)]);
  }

  /**
   * Estimates the gas cost of sending a migrate transaction
   * @param address
   * @param codeId
   * @param msg
   * @returns A gas fee estimation
   */
  async simulateMigrate(
    address: string,
    codeId: number,
    msg: Msg,
    fee?: StdFee
  ) {
    this.preMessage();
    return this.simulateMsgs(
      [this.encodeMigrateMessage(address, codeId, msg)],
      fee
    );
  }

  /**
   * Estimates the fee cost of sending a migrate transaction
   * @param address
   * @param codeId
   * @param msg
   * @returns A fee estimate
   */
  async estimateMigrateFee(address: string, codeId: number, msg: Msg) {
    this.preMessage();
    return this.estimateFee([this.encodeMigrateMessage(address, codeId, msg)]);
  }

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

  /**
   * Converts an upload message to an EncodeObject for signing or simulating
   * @param wasmByteCode
   * @returns
   */
  encodeUploadMessage(wasmByteCode: Uint8Array): MsgStoreCodeEncodeObject {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: {
        sender: this.signer,
        wasmByteCode,
      },
    };
  }

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

  /**
   * Simulates provided messages returning an estimated gas cost
   * @param msgs
   * @param memo
   * @returns
   */
  async simulateMsgs(
    msgs: readonly EncodeObject[],
    fee?: StdFee,
    memo?: string
  ) {
    const gas = await this.chainClient?.simulateMulti(msgs, fee, memo);
    return gas;
  }

  /**
   * Simulates provided messages and calculates an estimated fee
   * @param msgs
   * @param memo
   * @returns
   */
  async estimateFee(
    msgs: readonly EncodeObject[],
    fee?: StdFee,
    memo?: string
  ) {
    const gas = await this.simulateMsgs(msgs, fee, memo);
    if (!gas) {
      throw new Error("Could not simulate transaction");
    }
    return this.calculcateFee(gas);
  }

  /**
   * Wrapper around cosmjs calculateFee using client's set gasPrice. Errors if no gas price provided.
   * @param gas
   * @returns
   */
  calculcateFee(gas: number) {
    const gasPrice = this.gasPrice;
    if (!gasPrice)
      throw new Error(
        "No gas prices provided for client. Cannot simulate Tx fee."
      );
    const multiplier = 1.3; // Unsure why this is necessary but is added during simulateTx in cosmjs
    return calculateFee(Math.round(gas * multiplier), gasPrice);
  }

  /**
   * Wrapper around the cosm.js client's "getTx" function
   * @param hash The Tx Hash
   * @returns
   */
  async getTx(hash: string) {
    this.preMessage();
    return this.chainClient!.queryClient!.getTx(hash);
  }

  /**
   * Wrapper around the cosm.js client's "sendTokens" function
   * @param receivingAddress
   * @param amount
   * @param fee
   * @param memo
   * @returns
   */
  async sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee?: Fee,
    memo?: string
  ) {
    this.preMessage();
    return this.chainClient?.sendTokens(
      receivingAddress,
      amount,
      fee ?? "auto",
      memo
    );
  }
  /**
   * Gets the balance for a given address and denom. Defaults to the signing wallet address if none provided.
   * @param denom
   * @param address
   * @returns
   */
  async getBalance(denom: string, address?: string) {
    this.preMessage();
    const _address = address && address.length > 0 ? address : this.signer;
    if (!_address || _address.length === 0) throw new Error("Invalid address");

    return this.chainClient!.queryClient!.getBalance(_address, denom);
  }

  /**
   * Gets all send transactions for a given address
   * @param addr
   * @returns
   */
  async getSentTxsByAddress(addr: string) {
    this.preMessage();
    return this.chainClient!.queryClient!?.searchTx({
      tags: [{ key: "message.sender", value: addr }],
    });
  }

  /**
   * Gets all transactions sent to a contract
   * @param addr
   * @returns
   */
  async getTxsByContract(addr: string) {
    this.preMessage();
    return this.chainClient!.queryClient!?.searchTx({
      tags: [{ key: "execute._contract_address", value: addr }],
    });
  }

  /**
   * Gets all bank messages sent to or from an address
   * @param addr
   * @returns
   */
  async getBankTxsByAddress(addr: string) {
    this.preMessage();
    return this.chainClient!.queryClient!?.searchTx({
      sentFromOrTo: addr,
    });
  }

  /**
   * Queries all possible transactions for a given address
   * @param addr
   * @returns
   */
  async getAllTxsByAddress(addr: string) {
    const sentTxs = await this.getSentTxsByAddress(addr);
    const contractTxs = await this.getTxsByContract(addr);
    const bankTxs = await this.getBankTxsByAddress(addr);
    return [
      ...(sentTxs ?? []),
      ...(contractTxs ?? []),
      ...(bankTxs ?? []),
    ].sort((txA, txB) => (txA.height < txB.height ? 1 : -1));
  }
}

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
