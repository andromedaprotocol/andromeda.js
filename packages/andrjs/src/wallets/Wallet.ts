import { Random, stringToPath, xchacha20NonceLength, Xchacha20poly1305Ietf } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet, executeKdf, KdfConfiguration } from "@cosmjs/proto-signing";
import { DirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/DirectEthSecp256k1Wallet";
import { DEFAULT_COSMOS_HDPATH } from "./constant";

/**
 * A KDF configuration that is not very strong but can be used on the main thread.
 * It takes about 1 second in Node.js 16.0.0 and should have similar runtimes in other modern Wasm hosts.
 */
const basicPasswordHashingOptions: KdfConfiguration = {
  algorithm: "argon2id",
  params: {
    outputLength: 32,
    opsLimit: 24,
    memLimitKib: 12 * 1024,
  },
};
/**
 * Used to generate a client wallet by Mnemonic
 */
export default class Wallet {
  constructor(
    public name: string,
    public key: string,
    public prefix: string,
    public hdpath = DEFAULT_COSMOS_HDPATH,
  ) {
  }


  /**
   * Generates a new wallet from a given mnemonic
   * @param name
   * @param mnemonicOrPrivKey
   * @param passphrase
   * @param prefix
   * @returns
   */
  static async fromMnemonicOrPrivateKey(
    name: string,
    mnemonicOrPrivKey: string,
    password: string,
    prefix: string,
    hdpath = DEFAULT_COSMOS_HDPATH,
  ) {
    const key = await this.encrypt(mnemonicOrPrivKey, password);
    return new Wallet(name, key, prefix, hdpath);
  }

  /**
   * Get wallet associated with the provided mnemonic
   */
  async getWallet(
    password: string,
  ): Promise<DirectSecp256k1HdWallet | DirectSecp256k1Wallet | DirectEthSecp256k1Wallet> {
    const mnemonicOrPrivKey = await this.decrypt(password);
    if (mnemonicOrPrivKey.includes(' ')) {
      // Its a mnemonic phrase
      return await DirectSecp256k1HdWallet.fromMnemonic(mnemonicOrPrivKey, {
        prefix: this.prefix,
        hdPaths: [stringToPath(this.hdpath)]
      })
    } else {
      // Its a private Key
      return await DirectSecp256k1Wallet.fromKey(Buffer.from(mnemonicOrPrivKey, 'hex'), this.prefix)
    }
  }

  /**
   * Get all accounts associated with the wallet
   */
  async getAccounts(passphrase: string,
  ) {
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

  static async encrypt(
    key: string, // Mnemonic or private key
    password: string,
  ): Promise<string> {
    // TODO:: See keplr implementation
    const kdfConfiguration = basicPasswordHashingOptions;
    const encryptionKey = await executeKdf(password, kdfConfiguration);
    const nonce = Random.getBytes(xchacha20NonceLength);
    // Prepend fixed-length nonce to ciphertext as suggested in the example from https://github.com/jedisct1/libsodium.js#api
    return Buffer.from([
      ...nonce,
      ...(await Xchacha20poly1305Ietf.encrypt(Buffer.from(key, 'ascii'), encryptionKey, nonce)),
    ]).toString('hex');
  }

  async decrypt(
    password: string,
  ): Promise<string> {
    const kdfConfiguration = basicPasswordHashingOptions;
    const encryptionKey = await executeKdf(password, kdfConfiguration);
    const keyBuffer = Buffer.from(this.key, 'hex').valueOf();
    const nonce = keyBuffer.slice(0, xchacha20NonceLength);
    const decrypted = await Xchacha20poly1305Ietf.decrypt(keyBuffer.slice(xchacha20NonceLength), encryptionKey, nonce);
    return Buffer.from(decrypted).toString('ascii')
  }
}
