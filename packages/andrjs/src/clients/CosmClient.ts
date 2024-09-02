import {
  CosmWasmClient,
  createWasmAminoConverters,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  UploadResult,
  wasmTypes,
} from "@cosmjs/cosmwasm-stargate";

import {
  Coin,
  EncodeObject,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineDirectSigner,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import {
  BaseAccount,
  ModuleAccount,
} from "cosmjs-types/cosmos/auth/v1beta1/auth";
import {
  Account,
  accountFromAny,
  AminoTypes,
  calculateFee,
  createDefaultAminoConverters,
  defaultRegistryTypes,
  DeliverTxResponse,
  GasPrice,
  QueryClient,
  setupTxExtension,
  SignerData,
  SigningStargateClient,
  SigningStargateClientOptions,
  StdFee,
} from "@cosmjs/stargate";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Fee, Msg } from "..";
import BaseChainClient from "./BaseChainClient";
import ChainClient from "./ChainClient";
import { findAttribute, Log } from "@cosmjs/stargate/build/logs";
import { assert, assertDefined } from "@cosmjs/utils";
import { decodeOptionalPubkey, encodePubkey } from "./pubkey";
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from "@cosmjs/amino";
import { Int53, Uint64 } from "@cosmjs/math";
import { fromBase64 } from "@cosmjs/encoding";
import {
  CometClient,
  HttpBatchClient,
  Tendermint37Client,
} from "@cosmjs/tendermint-rpc";
import { Any } from "cosmjs-types/google/protobuf/any";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";

export default class CosmClient extends BaseChainClient implements ChainClient {
  public queryClient?: ChainClient["queryClient"];
  public txQueryClient?: ChainClient["txQueryClient"];
  public gasPrice?: GasPrice;
  private signerWallet?: OfflineSigner | OfflineDirectSigner;
  public commectClient?: CometClient | undefined;
  public aminoTypes?: AminoTypes | undefined;

  async connect(
    endpoint: string,
    signer?: OfflineSigner | OfflineDirectSigner,
    options?: SigningStargateClientOptions
  ): Promise<void> {
    delete this.signingClient;
    delete this.queryClient;
    this.gasPrice = options?.gasPrice;
    this.signerWallet = signer;
    const rpcClient = new HttpBatchClient(endpoint);
    const cometClient = await Tendermint37Client.create(rpcClient);
    this.commectClient = cometClient;
    this.queryClient = await CosmWasmClient.create(cometClient);
    this.txQueryClient = await QueryClient.withExtensions(
      cometClient,
      setupTxExtension
    );
    if (signer) {
      const aminoTypes = options?.aminoTypes ?? new AminoTypes({
        ...createDefaultAminoConverters(),
        ...createWasmAminoConverters(),
      });
      this.aminoTypes = aminoTypes;
      this.signingClient = await SigningStargateClient.createWithSigner(
        cometClient,
        signer,
        {
          broadcastTimeoutMs: 30000,
          aminoTypes,
          registry: new Registry([...defaultRegistryTypes, ...wasmTypes]),
          accountParser: andromedaAccountParser,
          ...options,
        }
      );

      const [account] = await signer.getAccounts();
      this.signer = account.address;
    }
  }

  async disconnect(): Promise<void> {
    if (this.signingClient) this.signingClient.disconnect();

    delete this.signingClient;
    delete this.queryClient;
    this.signer = "";
    delete this.gasPrice;
  }


  async broadcast(tx: TxRaw): ReturnType<ChainClient["broadcast"]> {
    this.preMessage(true);
    const txBytes = TxRaw.encode(tx).finish();
    return await this.signingClient!.broadcastTx(txBytes);
  }

  public async simulateMulti(
    messages: EncodeObject[],
    _fee?: Fee,
    memo?: string
  ): Promise<number> {
    return this.signingClient!.simulate(this.signer, messages, memo);
  }

  async signAndBroadcast(
    messages: EncodeObject[],
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<DeliverTxResponse> {
    this.preMessage(true);
    const txRaw = await this.sign(messages, fee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.signingClient!.broadcastTx(txBytes);
  }

  async sign(
    messages: EncodeObject[],
    fee: Fee = "auto",
    memo = ""
  ): Promise<TxRaw> {
    this.preMessage(true);

    let usedFee: StdFee;
    if (fee == "auto" || typeof fee === "number") {
      assertDefined(
        this.gasPrice,
        "Gas price must be set in the client options when auto gas is used."
      );
      const gasEstimation = await this.simulateMulti(messages, fee, memo);
      const multiplier =
        typeof fee === "number" ? fee : this.config.defaultFeeMultiplier;
      usedFee = calculateFee(
        Math.round(gasEstimation * multiplier),
        this.gasPrice
      );
    } else {
      usedFee = fee;
    }

    const accountFromSigner = await this.signerWallet
      ?.getAccounts()
      .then((accounts) => accounts.find((a) => a.address === this.signer));
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }

    const pk = encodeSecp256k1Pubkey(accountFromSigner.pubkey) as any;
    if (this.config.accountPubKeyTypeUrl) {
      pk.type = this.config.accountPubKeyTypeUrl;
    }
    const pubkey = encodePubkey(pk);
    const { accountNumber, sequence } = await this.signingClient!.getSequence(
      this.signer
    );
    const chainId = await this.signingClient!.getChainId();
    const signerData: SignerData = {
      accountNumber: accountNumber,
      sequence: sequence,
      chainId: chainId,
    };

    return isOfflineDirectSigner(this.signerWallet!)
      ? this.signDirect(messages, signerData, pubkey, usedFee, memo)
      : this.signAmino(messages, signerData, pubkey, usedFee, memo);
  }

  private async signDirect(
    messages: EncodeObject[],
    { accountNumber, sequence, chainId }: SignerData,
    pubkey: Any,
    fee: StdFee,
    memo?: string | undefined
  ) {
    assert(isOfflineDirectSigner(this.signerWallet!));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.signingClient!.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence }],
      fee.amount,
      gasLimit,
      fee.granter,
      fee.payer
    );
    const signDoc = makeSignDoc(
      txBodyBytes,
      authInfoBytes,
      chainId,
      accountNumber
    );
    const { signature, signed } = await this.signerWallet!.signDirect(
      this.signer,
      signDoc
    );
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signAmino(
    messages: EncodeObject[],
    { accountNumber, sequence, chainId }: SignerData,
    pubkey: Any,
    fee: StdFee,
    memo?: string | undefined
  ) {
    assert(!isOfflineDirectSigner(this.signerWallet!));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes!.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signerWallet!.signAmino(this.signer, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes!.fromAmino(msg)),
      memo: signed.memo,
    };

    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody,
    };

    const signedTxBodyBytes = this.signingClient!.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{ pubkey, sequence: signedSequence }],
      signed.fee.amount,
      signedGasLimit,
      signed.fee.granter,
      signed.fee.payer,
      signMode,
    );
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
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
    funds?: Coin[] | undefined
  ): Promise<ExecuteResult> {
    this.preMessage(true);
    const executeMsg = this.encodeExecuteMsg(contractAddress, msg, funds ?? []);
    const tx = await this.signAndBroadcast([executeMsg], fee, memo);
    return {
      events: tx.events,
      gasUsed: tx.gasUsed,
      gasWanted: tx.gasWanted,
      height: tx.height,
      transactionHash: tx.transactionHash,
      logs: [{ msg_index: 0, log: "", events: tx.events }],
    };
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

  async upload(
    code: Uint8Array,
    fee: Fee = "auto",
    memo?: string | undefined
  ): Promise<UploadResult> {
    this.preMessage();
    const encodeMsg = this.encodeUploadMessage(code);
    const tx = await this.signAndBroadcast([encodeMsg], fee, memo);
    const logs: Log[] = [{ msg_index: 0, log: "", events: tx.events }];
    const codeIdAttr = findAttribute(
      logs,
      this.config.storeCodeEvent,
      "code_id"
    );
    const checksumAttr = findAttribute(
      logs,
      this.config.storeCodeEvent,
      "checksum"
    );
    return {
      events: tx.events,
      gasUsed: tx.gasUsed,
      gasWanted: tx.gasWanted,
      height: tx.height,
      transactionHash: tx.transactionHash,
      logs,
      codeId: parseInt(codeIdAttr.value),
      originalSize: code.length,
      compressedSize: encodeMsg.value.wasmByteCode?.length || 0,
      checksum: checksumAttr.value,
    };
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
    const encodeMsg = this.encodeInstantiateMsg(codeId, msg, label, options);
    const tx = await this.signAndBroadcast([encodeMsg], fee, options?.memo);
    const logs: Log[] = [{ msg_index: 0, log: "", events: tx.events }];
    const instantiateAttr = findAttribute(
      logs,
      "instantiate",
      "_contract_address"
    );
    return {
      events: tx.events,
      gasUsed: tx.gasUsed,
      gasWanted: tx.gasWanted,
      height: tx.height,
      transactionHash: tx.transactionHash,
      logs: logs,
      contractAddress: instantiateAttr.value,
    };
  }

  async simulateInstantiate(
    codeId: number,
    msg: Msg,
    label: string,
    fee?: StdFee,
    options?: InstantiateOptions
  ): Promise<number | undefined> {
    const message = this.encodeInstantiateMsg(codeId, msg, label, options);
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
    const encodeMsg = this.encodeMigrateMessage(contractAddress, codeId, msg);
    const tx = await this.signAndBroadcast([encodeMsg], fee, memo);
    const logs: Log[] = [{ msg_index: 0, log: "", events: tx.events }];
    return {
      events: tx.events,
      gasUsed: tx.gasUsed,
      gasWanted: tx.gasWanted,
      height: tx.height,
      transactionHash: tx.transactionHash,
      logs: logs,
    };
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

export const andromedaAccountParser = (account: Any) => {
  switch (account.typeUrl) {
    case "/injective.types.v1beta1.EthAccount":
    case "/ethermint.types.v1.EthAccount": {
      const baseAccount = ModuleAccount.decode(account.value).baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    default:
      return accountFromAny(account);
  }
};

function accountFromBaseAccount(input: BaseAccount): Account {
  const { address, pubKey, accountNumber, sequence } = input;
  const pubkey = decodeOptionalPubkey(pubKey);
  return {
    address: address,
    pubkey: pubkey,
    accountNumber: uint64FromProto(accountNumber).toNumber(),
    sequence: uint64FromProto(sequence).toNumber(),
  };
}
function uint64FromProto(input: number | bigint): Uint64 {
  return Uint64.fromString(input.toString());
}
