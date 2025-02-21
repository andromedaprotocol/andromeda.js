import {
  CosmWasmClient,
  createWasmAminoConverters,
  ExecuteResult,
  InstantiateOptions,
  InstantiateResult,
  MigrateResult,
  setupWasmExtension,
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
  setupIbcExtension,
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
  HttpClient,
  RpcClient,
  Tendermint37Client,
} from "@cosmjs/tendermint-rpc";
import { Any } from "cosmjs-types/google/protobuf/any";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";

/**
 * CosmClient extends BaseChainClient and implements ChainClient interface
 * for interacting with Cosmos-based blockchains.
 */
export default class CosmClient extends BaseChainClient implements ChainClient {
  /** Offline signer for transaction signing */
  private signerWallet?: OfflineSigner | OfflineDirectSigner;
  public chainId?: string;

  /** Client for querying blockchain data */
  public queryClient?: ChainClient["queryClient"];

  /** Client for querying data with raw implementation */
  public rawQueryClient?: ChainClient["rawQueryClient"];
  /** Client for interacting with the Comet BFT consensus engine */
  public cometClient?: CometClient | undefined;

  /** AminoTypes for message conversion */
  public aminoTypes?: AminoTypes | undefined;
  /** Gas price for fee calculation */
  public gasPrice?: GasPrice;

  /**
   * Connects to the blockchain and sets up necessary clients
   * @param endpoint - RPC endpoint URL
   * @param signer - Optional offline signer
   * @param options - Optional SigningStargateClient options
   * @param rpcClient - Optional RPC client
   */
  async connect(
    endpoint: string | RpcClient,
    signer?: OfflineSigner | OfflineDirectSigner,
    options?: SigningStargateClientOptions,
  ): Promise<void> {
    delete this.signingClient;
    delete this.queryClient;
    this.gasPrice = options?.gasPrice;
    this.signerWallet = signer;
    // Nibiru rpc somehow doesn't work with HttpBatchClient
    if (typeof endpoint === 'string') {
      if (this.addressPrefix === 'nibi') {
        endpoint = new HttpClient(endpoint);
      } else {
        endpoint = new HttpBatchClient(endpoint);
      }
    }

    const cometClient = await Tendermint37Client.create(endpoint);
    this.cometClient = cometClient;
    this.queryClient = await CosmWasmClient.create(cometClient);
    this.rawQueryClient = QueryClient.withExtensions(
      cometClient,
      setupTxExtension,
      setupWasmExtension,
      setupIbcExtension
    );
    if (signer) {
      const aminoTypes = options?.aminoTypes ?? new AminoTypes({
        ...createDefaultAminoConverters(),
        // Stargate does not have wasm amino converters, so we need to add them manually
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
          // Need custom account parser for pubkey that are not included in the default registry
          accountParser: andromedaAccountParser,
          ...options,
        }
      );

      const [account] = await signer.getAccounts();
      this.signer = account.address;

    }
    this.chainId = await this.queryClient!.getChainId();
  }

  /**
   * Disconnects from the blockchain and clears client instances
   */
  async disconnect(): Promise<void> {
    if (this.signingClient) this.signingClient.disconnect();

    delete this.signingClient;
    delete this.queryClient;
    this.signer = "";
    delete this.gasPrice;
  }

  /**
   * Broadcasts a signed transaction
   * @param tx - Signed transaction
   */
  async broadcast(tx: TxRaw): ReturnType<ChainClient["broadcast"]> {
    this.preMessage(true);
    const txBytes = TxRaw.encode(tx).finish();
    return await this.signingClient!.broadcastTx(txBytes);
  }

  /**
   * Simulates multiple messages execution
   * @param messages - Array of messages to simulate
   * @param _fee - Optional fee
   * @param memo - Optional memo
   */
  public async simulateMulti(
    messages: EncodeObject[],
    _fee?: Fee,
    memo?: string
  ): Promise<number> {
    return this.signingClient!.simulate(this.signer, messages, memo);
  }

  /**
 * Simulates multiple messages execution
 * @param messages - Array of messages to simulate
 * @param _fee - Optional fee
 * @param memo - Optional memo
 */
  public async simulateRaw(
    messages: EncodeObject[],
    memo?: string
  ) {
    const anyMsgs = messages.map((m) => this.signingClient!.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signerWallet!.getAccounts()).find((account) => account.address === this.signer);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pk = { ...encodeSecp256k1Pubkey(accountFromSigner.pubkey) }
    if (this.config.accountPubKeyTypeUrl) {
      pk.type = this.config.accountPubKeyTypeUrl as any;
    }
    const { sequence } = await this.signingClient!.getSequence(this.signer);
    const result = await this.rawQueryClient!.tx.simulate(anyMsgs, memo, pk, sequence);
    return result
  }

  /**
   * Signs and broadcasts multiple messages
   * @param messages - Array of messages to sign and broadcast
   * @param fee - Fee for the transaction
   * @param memo - Optional memo
   */
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

  /**
   * Andromeda specific signing function that extends over default cosmjs signing function but adds support for multiple pubkeys
   * allowing signer to sign messages for multiple chains.
   * @param messages - Array of messages to sign
   * @param fee - Fee for the transaction
   * @param memo - Optional memo
   */
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

    // Get accout from signer. Pubkey from this was main issue we needed to add custom account parser.
    const accountFromSigner = await this.signerWallet
      ?.getAccounts()
      .then((accounts) => accounts.find((a) => a.address === this.signer));
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    // Convert pubkey to Any type. Needed for makeAuthInfoBytes function.
    const pk = encodeSecp256k1Pubkey(accountFromSigner.pubkey) as any;
    // If pubkey type url is set, set it to the pubkey. Needed for some chains.
    if (this.config.accountPubKeyTypeUrl) {
      pk.type = this.config.accountPubKeyTypeUrl;
    }
    const pubkey = encodePubkey(pk);
    const { accountNumber, sequence } = await this.signingClient!.getSequence(
      this.signer
    );
    const signerData: SignerData = {
      accountNumber: accountNumber,
      sequence: sequence,
      chainId: this.chainId!,
    };

    return isOfflineDirectSigner(this.signerWallet!)
      ? this.signDirect(messages, signerData, pubkey, usedFee, memo)
      : this.signAmino(messages, signerData, pubkey, usedFee, memo);
  }

  /**
   * Signs messages using direct signing
   * @param messages - Array of messages to sign
   * @param signerData - Signer data
   * @param pubkey - Public key
   * @param fee - Fee for the transaction
   * @param memo - Optional memo
   */
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

  /**
   * Signs messages using amino signing
   * @param messages - Array of messages to sign
   * @param signerData - Signer data
   * @param pubkey - Public key
   * @param fee - Fee for the transaction
   * @param memo - Optional memo
   */
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
      // For this encoding only we need to store aminoTypes in our custom chain class
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

  /**
   * Simulates a single message execution
   * @param message - Message to simulate
   * @param _fee - Optional fee
   * @param memo - Optional memo
   */
  async simulate(
    message: EncodeObject,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number> {
    this.preMessage();
    return this.signingClient!.simulate(this.signer, [message], memo);
  }

  /**
   * Executes a contract message
   * @param contractAddress - Address of the contract
   * @param msg - Message to execute
   * @param fee - Optional fee
   * @param memo - Optional memo
   * @param funds - Optional funds to send with the message
   */
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

  /**
   * Simulates a contract message execution
   * @param address - Address of the contract
   * @param msg - Message to simulate
   * @param funds - Funds to send with the message
   * @param _fee - Optional fee
   * @param memo - Optional memo
   */
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

  /**
   * Uploads a contract code
   * @param code - Contract code as Uint8Array
   * @param fee - Optional fee
   * @param memo - Optional memo
   */
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
    const codeId = Number(JSON.parse(codeIdAttr.value));

    let checksum = ""
    // Some chains have checksum attr while others have code_checksum
    try {
      const checksumAttr = findAttribute(
        logs,
        this.config.storeCodeEvent,
        "checksum"
      );
      checksum = checksumAttr.value
    } catch (err) {
      try {
        const checksumAttr = findAttribute(
          logs,
          this.config.storeCodeEvent,
          "code_checksum"
        );
        checksum = checksumAttr.value
      } catch (err) {
      }
    }
    return {
      events: tx.events,
      gasUsed: tx.gasUsed,
      gasWanted: tx.gasWanted,
      height: tx.height,
      transactionHash: tx.transactionHash,
      logs,
      codeId: codeId,
      originalSize: code.length,
      compressedSize: encodeMsg.value.wasmByteCode?.length || 0,
      checksum: checksum,
    };
  }

  /**
   * Simulates a contract code upload
   * @param code - Contract code as Uint8Array
   * @param _fee - Optional fee
   * @param memo - Optional memo
   */
  async simulateUpload(
    code: Uint8Array,
    _fee?: Fee | undefined,
    memo?: string | undefined
  ): Promise<number | undefined> {
    const message = this.encodeUploadMessage(code);
    return this.simulate(message, undefined, memo);
  }

  /**
   * Instantiates a contract
   * @param codeId - ID of the uploaded contract code
   * @param msg - Instantiation message
   * @param label - Label for the contract
   * @param fee - Optional fee
   * @param options - Optional instantiation options
   */
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

  /**
   * Simulates a contract instantiation
   * @param codeId - ID of the uploaded contract code
   * @param msg - Instantiation message
   * @param label - Label for the contract
   * @param fee - Optional fee
   * @param options - Optional instantiation options
   */
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

  /**
   * Migrates a contract
   * @param contractAddress - Address of the contract to migrate
   * @param codeId - ID of the new contract code
   * @param msg - Migration message
   * @param fee - Optional fee
   * @param memo - Optional memo
   */
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

  /**
   * Simulates a contract migration
   * @param contractAddress - Address of the contract to migrate
   * @param codeId - ID of the new contract code
   * @param msg - Migration message
   * @param fee - Optional fee
   * @param memo - Optional memo
   */
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

  /**
   * Sends tokens to a receiving address
   * @param receivingAddress - Address to receive tokens
   * @param amount - Amount of tokens to send
   * @param fee - Optional fee
   * @param memo - Optional memo
   */
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

/**
 * Custom account parser that supports injective and eth based pubkeys.
 * @param account - Account data
 */
export const andromedaAccountParser = (account: Any) => {
  switch (account.typeUrl) {
    case "/injective.types.v1beta1.EthAccount":
    case "/eth.types.v1.EthAccount":
    case "/ethermint.types.v1.EthAccount": {
      const baseAccount = ModuleAccount.decode(account.value).baseAccount;
      assert(baseAccount);
      return accountFromBaseAccount(baseAccount);
    }
    default:
      return accountFromAny(account);
  }
};

/**
 * Creates an Account object from a BaseAccount
 * @param input - BaseAccount input
 */
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

/**
 * Converts a number or bigint to Uint64
 * @param input - Number or bigint input
 */
function uint64FromProto(input: number | bigint): Uint64 {
  return Uint64.fromString(input.toString());
}
