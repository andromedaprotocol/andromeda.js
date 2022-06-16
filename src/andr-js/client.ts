import {
  InstantiateOptions,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";

type Fee = number | StdFee | "auto";
type Msg = Record<string, unknown>;

export default class AndromedaClient {
  cosmWasmClient: SigningCosmWasmClient | undefined;

  private preMessage() {
    if (!this.isConnected) throw new Error("Client not connected");
  }

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

  get isConnected() {
    return typeof this.cosmWasmClient !== "undefined";
  }

  async signAndBroadcast(
    signer: string,
    messages: EncodeObject[],
    fee: Fee,
    memo?: string
  ): Promise<DeliverTxResponse> {
    this.preMessage();
    return this.cosmWasmClient!.signAndBroadcast(signer, messages, fee, memo);
  }

  async execute(
    sender: string,
    contractAddress: string,
    msg: Msg,
    fee: Fee,
    memo?: string
  ) {
    this.preMessage();
    return await this.cosmWasmClient!.execute(
      sender,
      contractAddress,
      msg,
      fee,
      memo
    );
  }

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

  async queryContract(address: string, query: Msg) {
    this.preMessage();
    return await this.cosmWasmClient!.queryContractSmart(address, query);
  }
}
