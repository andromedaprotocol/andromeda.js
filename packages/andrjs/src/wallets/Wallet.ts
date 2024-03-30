import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { InjectiveDirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  constructor(
    public name: string,
    public key: string,
    public prefix?: string
  ) { }

  /**
   * Generates a new wallet from a given mnemonic
   * @param name
   * @param mnemonic
   * @param passphrase
   * @param prefix
   * @returns
   */
  static async fromMnemonic(
    name: string,
    mnemonic: string,
    passphrase: string,
    prefix: string
  ) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix,
    });
    const key = await wallet.serialize(passphrase);
    return new Wallet(name, key, prefix);
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet(
    passphrase: string
  ): Promise<DirectSecp256k1HdWallet | InjectiveDirectEthSecp256k1Wallet> {
    return await DirectSecp256k1HdWallet.deserialize(this.key, passphrase);
  }

  /**
   * Get all accounts associated with the wallet
   */
  async getAccounts(passphrase: string) {
    const wallet = await this.getWallet(passphrase);
    return await wallet.getAccounts();
  }

  /**
   * Provides the first OfflineSigner object associated with the wallet. Can be used for signing messages.
   */
  async getAddress(passphrase: string) {
    const [firstAccount] = await this.getAccounts(passphrase);
    return firstAccount.address;
  }
}
