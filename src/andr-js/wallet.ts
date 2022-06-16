import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  /** The Mnemonic of the Wallet */
  mnemonic: string;
  constructor(mnemonic: string) {
    this.mnemonic = mnemonic;
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet() {
    return await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic);
  }

  /**
   * Get all accounts associated with the wallet
   */
  async getAccounts() {
    const wallet = await this.getWallet();
    return await wallet.getAccounts();
  }

  /**
   * Provides the first OfflineSigner object associated with the wallet. Can be used for signing messages.
   */
  async getFirstOfflineSigner() {
    const [firstAccount] = await this.getAccounts();
    return firstAccount.address;
  }
}
