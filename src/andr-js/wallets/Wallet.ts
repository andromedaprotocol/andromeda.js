import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
// import { generateMnemonic } from "bip39";
// import { queryChainConfig } from "../graphql";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  constructor(public name: string, public key: string) {
    // this.mnemonic =
    //   mnemonic && mnemonic.length > 0 ? mnemonic : generateMnemonic(256);
    this.name = name;
    this.key = key;
  }

  async getMnemonic(passphrase: string) {
    const wallet = await this.getWallet(passphrase);

    return wallet.mnemonic;
  }

  static async generate(name: string, passphrase: string) {
    const wallet = await DirectSecp256k1HdWallet.generate(24);
    const key = await wallet.serialize(passphrase);
    return new Wallet(name, key);
  }

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
