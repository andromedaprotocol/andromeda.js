import { stringToPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { DirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/OfflineDirectSigner";
import Crypto from "crypto-js";
import { Wallet as EthersWallet } from "ethers";

/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  constructor(
    public name: string,
    public key: string,
    public prefix?: string
  ) {}

  /**
   * Generates a new wallet and serializes it
   * @param name
   * @param passphrase
   * @returns
   */
  static async generate(
    name: string,
    passphrase: string,
    mnemonic: string,
    prefix?: string
  ) {
    const key = await (async () => {
      switch (prefix) {
        case "inj":
          const wallet = EthersWallet.fromMnemonic(mnemonic);
          return Crypto.AES.encrypt(wallet.privateKey, passphrase).toString();
        default:
          return (
            await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
              prefix,
              hdPaths:
                prefix === "terra"
                  ? [stringToPath("m/44'/330'/0'/0/0")]
                  : undefined,
            })
          ).serialize(passphrase);
      }
    })();
    return new Wallet(name, key, prefix);
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
    const key = await (async () => {
      switch (prefix) {
        case "inj":
          const ethersWallet = EthersWallet.fromMnemonic(mnemonic);
          return Crypto.AES.encrypt(
            ethersWallet.privateKey,
            passphrase
          ).toString();
        default:
          const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            hdPaths:
              prefix === "terra"
                ? [stringToPath("m/44'/330'/0'/0/0")]
                : undefined,
            prefix,
          });
          const key = await wallet.serialize(passphrase);
          return key;
      }
    })();

    return new Wallet(name, key, prefix);
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet(passphrase: string) {
    if (this.prefix === "inj") {
      const storedKey = Crypto.AES.decrypt(this.key, passphrase).toString(
        Crypto.enc.Utf8
      );
      const privKeyArray = Uint8Array.from(
        Buffer.from(storedKey.replace("0x", ""), "hex")
      );
      return await DirectEthSecp256k1Wallet.fromKey(privKeyArray);
    }
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
