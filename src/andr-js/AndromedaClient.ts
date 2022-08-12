import {
  CosmWasmClient,
  InstantiateOptions,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import {
  calculateFee,
  DeliverTxResponse,
  GasPrice,
  StdFee,
} from "@cosmjs/stargate";
import Long from "long";
import ADOAPI from "./ADOs";

export type Fee = number | StdFee | "auto";
export type Msg = Record<string, unknown>;

/**
 * A helper class for interacting with the Andromeda ecosystem
 */
export default class AndromedaClient {
  /** CosmWasm Signing Client
   *
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html
   */
  cosmWasmClient: SigningCosmWasmClient | undefined;
  queryClient: CosmWasmClient | undefined;
  signer: string = "";
  ado = new ADOAPI(this, "");
  private gasPrice: GasPrice | undefined;

  constructor() {}

  /**
   * A pre-message hook to check that the client is connected and functioning
   */
  private preMessage() {
    if (!this.isConnected) throw new Error("Client not connected");
    if (!this.signer) throw new Error("No signing wallet assigned");
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
    signer?: OfflineSigner,
    options?: SigningCosmWasmClientOptions
  ) {
    delete this.cosmWasmClient;
    delete this.queryClient;
    this.gasPrice = options?.gasPrice;
    if (signer) {
      this.cosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
        endpoint,
        signer,
        options
      );
      this.queryClient = this.cosmWasmClient;

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    } else {
      this.queryClient = await CosmWasmClient.connect(endpoint);
    }

    await this.ado.setRegistryAddress(registryAddress);
  }

  disconnect() {
    this.cosmWasmClient?.disconnect();
    delete this.cosmWasmClient;
    this.queryClient?.disconnect();
    delete this.queryClient;

    this.signer = "";
    delete this.gasPrice;
  }

  /**
   * Whether the client is currently connected
   */
  get isConnected() {
    return typeof this.cosmWasmClient !== "undefined";
  }

  /**
   * Wrapper function for CosmWasm sign and broadcast
   * @param signer
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
    return this.cosmWasmClient!.signAndBroadcast(
      this.signer,
      messages,
      fee,
      memo
    );
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
    fee: Fee,
    memo?: string,
    funds?: readonly Coin[]
  ) {
    this.preMessage();
    return await this.cosmWasmClient!.execute(
      this.signer,
      contractAddress,
      msg,
      fee,
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
  async upload(code: Uint8Array, fee: Fee, memo?: string) {
    this.preMessage();
    return await this.cosmWasmClient!.upload(this.signer, code, fee, memo);
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
    return await this.cosmWasmClient!.instantiate(
      this.signer,
      codeId,
      msg,
      label,
      fee,
      { admin: this.signer, ...options }
    );
  }

  /**
   * Wrapper function for CosmWasm query
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#queryContractSmart
   * @param address
   * @param query
   * @returns
   */
  async queryContract<T = any>(address: string, query: Msg) {
    if (!this.queryClient) throw new Error("Client not connected");
    return (await this.queryClient!.queryContractSmart(address, query)) as T;
  }

  /**
   * Estimates the gas cost of sending an execute transaction
   * @param address
   * @param msg
   * @param funds
   * @param memo
   * @returns A gas fee estimation
   */
  async simulateTx(
    address: string,
    msg: Msg,
    funds: Coin[],
    memo: string = ""
  ) {
    this.preMessage();
    return this.simulateMsgs(
      [this.encodeExecuteMsg(address, msg, funds)],
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
    memo: string = ""
  ) {
    return this.estimateFee([this.encodeExecuteMsg(address, msg, funds)], memo);
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
   * Estimates the gas cost of sending an instantiate transaction
   * @param codeId
   * @param msg
   * @returns A gas fee estimation
   */
  async simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    memo?: string
  ) {
    this.preMessage();
    return this.simulateMsgs(
      [this.encodeInstantiateMsg(codeId, msg, label)],
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
    memo?: string
  ) {
    return this.estimateFee(
      [this.encodeInstantiateMsg(codeId, msg, label)],
      memo
    );
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
   * Simulates provided messages returning an estimated gas cost
   * @param msgs
   * @param memo
   * @returns
   */
  async simulateMsgs(msgs: readonly EncodeObject[], memo?: string) {
    const gas = await this.cosmWasmClient?.simulate(this.signer, msgs, memo);
    return gas;
  }

  /**
   * Simulates provided messages and calculates an estimated fee
   * @param msgs
   * @param memo
   * @returns
   */
  async estimateFee(msgs: readonly EncodeObject[], memo?: string) {
    const gas = await this.simulateMsgs(msgs, memo);
    if (!gas) {
      throw new Error("Could not simulate transaction");
    }

    return this.calculcateFee(gas);
  }

  /**
   * Wrapped around cosmjs calculateFee using client's set gasPrice. Errors if no gas price provided.
   * @param gas
   * @returns
   */
  calculcateFee(gas: number) {
    const gasPrice = this.gasPrice;
    if (!gasPrice)
      throw new Error(
        "No gas prices provided for client. Cannot simulate Tx fee."
      );

    return calculateFee(gas, gasPrice);
  }

  /**
   * Gets the balance for a given address and denom. Defaults to the signing wallet address if none provided.
   * @param denom
   * @param address
   * @returns
   */
  async getBalance(denom: string, address?: string) {
    const _address = address ?? this.signer;

    return this.cosmWasmClient?.getBalance(_address, denom);
  }

  /**
   * Wrapper around the cosm.js client's "getTx" function
   * @param hash The Tx Hash
   * @returns
   */
  async getTx(hash: string) {
    return this.queryClient?.getTx(hash);
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
