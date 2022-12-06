import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { stringToPath } from "@cosmjs/crypto";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  constructor(public name: string, public key: string) {
    this.name = name;
    this.key = key;
  }

  /**
   * Gets the mnemonic phrase for the wallet
   * @param passphrase The passphrase must be used to deserialize the wallet
   * @returns
   */
  async getMnemonic(passphrase: string) {
    const wallet = await this.getWallet(passphrase);

    return wallet.mnemonic;
  }

  /**
   * Generates a new wallet and serializes it
   * @param name
   * @param passphrase
   * @returns
   */
  static async generate(name: string, passphrase: string, prefix?: string) {
    const wallet = await DirectSecp256k1HdWallet.generate(24, {
      prefix,
      hdPaths:
        prefix === "terra" ? [stringToPath("m/44'/330'/0'/0/0")] : undefined,
    });
    const key = await wallet.serialize(passphrase);
    return new Wallet(name, key);
  }

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
      hdPaths:
        prefix === "terra" ? [stringToPath("m/44'/330'/0'/0/0")] : undefined,
      prefix,
    });
    const key = await wallet.serialize(passphrase);
    return new Wallet(name, key);
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet(passphrase: string) {
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
