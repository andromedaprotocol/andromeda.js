import {
  InstantiateOptions,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";

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

  /**
   * A pre-message hook to check that the client is connected and functioning
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
    signer: OfflineSigner,
    options?: SigningCosmWasmClientOptions
  ) {
    delete this.cosmWasmClient;

    this.cosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
      endpoint,
      signer,
      options
    );
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
    signer: string,
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    this.preMessage();
    return this.cosmWasmClient!.signAndBroadcast(signer, messages, fee, memo);
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
    sender: string,
    contractAddress: string,
    msg: Msg,
    fee: Fee,
    memo?: string,
    funds?: readonly Coin[]
  ) {
    this.preMessage();
    return await this.cosmWasmClient!.execute(
      sender,
      contractAddress,
      msg,
      fee,
      memo,
      funds
    );
  }

  /**
   * Wrapper function for CosmWasm instantiate
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#signAndBroadcast
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
   * Wrapper function for CosmWasm Query
   * https://cosmos.github.io/cosmjs/latest/cosmwasm-stargate/classes/SigningCosmWasmClient.html#queryContractSmart
   * @param address
   * @param query
   * @returns
   */
  async queryContract(address: string, query: Msg) {
    this.preMessage();
    return await this.cosmWasmClient!.queryContractSmart(address, query);
  }
}
