import {
  InstantiateOptions,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { Factory, Primitive } from "./ADOs";

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
  registry: Primitive = new Primitive("", this);
  factory: Factory = new Factory("", this);
  signer: string = "";

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
    signer: OfflineSigner,
    registryAddress: string,
    options?: SigningCosmWasmClientOptions
  ) {
    delete this.cosmWasmClient;

    this.cosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
      endpoint,
      signer,
      options
    );
    const [account] = await signer.getAccounts();
    this.signer = account.address;

    this.registry = new Primitive(registryAddress, this);
    const factoryAddress = await this.registry.get("factory");
    this.factory = new Factory(factoryAddress, this);
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
   * @param sender
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
   * @param sender
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
   * @param sender
   * @param codeId
   * @param msg
   * @param label
   * @param fee
   * @param options
   * @returns
   */
  async instantiate(
    sender: string,
    codeId: number,
    msg: Msg,
    label: string,
    fee: Fee,
    options?: InstantiateOptions
  ) {
    this.preMessage();
    return await this.cosmWasmClient!.instantiate(
      sender,
      codeId,
      msg,
      label,
      fee,
      options
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
    this.preMessage();
    return (await this.cosmWasmClient!.queryContractSmart(address, query)) as T;
  }
}
