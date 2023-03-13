import Wallet from "./Wallet";
import { Wallet as EthersWallet } from "ethers";
import Crypto from "crypto-js";
import { DirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts/dist/core/accounts/signers/OfflineDirectSigner";
import { DEFAULT_DERIVATION_PATH } from "@injectivelabs/sdk-ts";

/**
 * Used to generate an Ethereum wallet for use with Injective chain
 */
export default class EtherWallet extends Wallet {
  static async fromMnemonic(
    name: string,
    mnemonic: string,
    passphrase: string
  ): Promise<Wallet> {
    // Injective wallets use Ethers wallet for generation
    const wallet = EthersWallet.fromMnemonic(mnemonic, DEFAULT_DERIVATION_PATH);
    const key = Crypto.AES.encrypt(wallet.privateKey, passphrase).toString();
    return new EtherWallet(name, key, "inj");
  }

  async getWallet(passphrase: string) {
    const storedKey = Crypto.AES.decrypt(this.key, passphrase).toString(
      Crypto.enc.Utf8
    );
    const privKeyArray = Uint8Array.from(
      Buffer.from(storedKey.replace("0x", ""), "hex")
    );
    return await DirectEthSecp256k1Wallet.fromKey(privKeyArray);
  }
}
