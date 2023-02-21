import {
  CosmWasmClient,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { DeliverTxResponse, GasPrice, StdFee } from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Fee, Msg } from "..";
import BaseClient from "./BaseClient";
import ChainClient from "./ChainClient";

export default class CosmClient extends BaseClient implements ChainClient {
  public signingClient?: SigningCosmWasmClient;
  public queryClient?: CosmWasmClient;
  private gasPrice?: GasPrice;

  async connect(
    endpoint: string,
    signer?: OfflineSigner,
    options?: SigningCosmWasmClientOptions
  ): Promise<void> {
    delete this.signingClient;
    delete this.queryClient;
    this.gasPrice = options?.gasPrice;

    if (signer) {
      this.signingClient = await SigningCosmWasmClient.connectWithSigner(
        endpoint,
        signer,
        { broadcastTimeoutMs: 30000, ...options }
      );
      this.queryClient = this.signingClient;

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    }
  }

  async disconnect(): Promise<void> {
    if (this.signingClient) this.signingClient.disconnect();
    if (this.queryClient) this.queryClient.disconnect();

    delete this.signingClient;
    delete this.queryClient;
    this.signer = "";
    delete this.gasPrice;
  }

  async sign(
    messages: EncodeObject[],
    fee: StdFee,
    memo = ""
  ): ReturnType<ChainClient["sign"]> {
    this.preMessage(true);
    return await this.signingClient!.sign(this.signer, messages, fee, memo);
  }

  async broadcast(tx: TxRaw): ReturnType<ChainClient["broadcast"]> {
    this.preMessage(true);
    const txBytes = TxRaw.encode(tx).finish();
    return await this.signingClient!.broadcastTx(txBytes);
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<DeliverTxResponse> {
    this.preMessage(true);

    return await this.signingClient!.signAndBroadcast(
      this.signer,
      messages,
      fee,
      memo
    );
  }

  async simulateMulti(
    messages: EncodeObject[],
    _fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<number> {
    this.preMessage();
    return this.signingClient!.simulate(this.signer, messages, memo);
  }

  async simulate(
    message: EncodeObject,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number> {
    this.preMessage();
    return this.signingClient!.simulate(this.signer, [message], memo);
  }

  async execute(
    contractAddress: string,
    msg: Msg,
    fee?: Fee | undefined,
    memo?: string | undefined,
    funds?: readonly Coin[] | undefined
  ): Promise<ExecuteResult> {
    this.preMessage(true);

    return await this.signingClient!.execute(
      this.signer,
      contractAddress,
      msg,
      fee ?? "auto",
      memo,
      funds
    );
  }

  async simulateExecute(
    address: string,
    msg: Msg,
    funds: Coin[],
    _fee?: Fee,
    memo?: string | undefined
  ) {
    const message = this.encodeExecuteMsg(address, msg, funds);
    return this.simulate(message, undefined, memo);
  }

  async upload(code: Uint8Array, fee: Fee = "auto", memo?: string | undefined) {
    this.preMessage();
    return this.signingClient!.upload(this.signer, code, fee, memo);
  }

  async simulateUpload(
    code: Uint8Array,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeUploadMessage(code);
    return this.simulate(message, undefined, memo);
  }

  async instantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee: Fee = "auto",
    options?: InstantiateOptions
  ): Promise<InstantiateResult> {
    this.preMessage(true);
    return this.signingClient!.instantiate(
      this.signer,
      codeId,
      msg,
      label,
      fee,
      options
    );
  }

  async simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    options?: InstantiateOptions
  ): Promise<number | undefined> {
    const message = this.encodeInstantiateMsg(codeId, msg, label);
    return this.simulate(message, fee, options?.memo);
  }

  async migrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<MigrateResult> {
    this.preMessage(true);
    return this.signingClient!.migrate(
      this.signer,
      contractAddress,
      codeId,
      msg,
      fee,
      memo
    );
  }

  async simulateMigrate(
    contractAddress: string,
    codeId: number,
    msg: Msg,
    fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeMigrateMessage(contractAddress, codeId, msg);
    return this.simulate(message, fee, memo);
  }

  async sendTokens(
    receivingAddress: string,
    amount: readonly Coin[],
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<any> {
    return this.signingClient?.sendTokens(
      this.signer,
      receivingAddress,
      amount,
      fee,
      memo
    );
  }
}
