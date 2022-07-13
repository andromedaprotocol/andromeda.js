import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { generateMnemonic } from "bip39";
import { getConfigByChainID } from "./chainConfigs";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  /** The Mnemonic of the Wallet */
  mnemonic: string;
  name: string;

  constructor(name: string, mnemonic?: string) {
    this.mnemonic =
      mnemonic && mnemonic.length > 0 ? mnemonic : generateMnemonic(256);
    this.name = name;
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet(chainId: string) {
    const config = getConfigByChainID(chainId);
    if (!config) throw new Error("No config for provided chain ID");
    return await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic, {
      prefix: config.addressPrefix,
    });
  }

  /**
   * Get all accounts associated with the wallet
   */
  async getAccounts(chainId: string) {
    const wallet = await this.getWallet(chainId);
    return await wallet.getAccounts();
  }

  /**
   * Provides the first OfflineSigner object associated with the wallet. Can be used for signing messages.
   */
  async getFirstOfflineSigner(chainId: string) {
    const [firstAccount] = await this.getAccounts(chainId);
    return firstAccount.address;
  }
}
