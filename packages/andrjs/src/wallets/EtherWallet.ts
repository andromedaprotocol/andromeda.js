import Wallet from "./Wallet";
import { HDNodeWallet } from "ethers";
import { DirectEthSecp256k1Wallet } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/DirectEthSecp256k1Wallet";
import { DEFAULT_ETH_HDPATH } from "./constant";

/**
 * Used to generate an Ethereum wallet for use with Injective chain
 */
export default class EtherWallet extends Wallet {
  constructor(
    public name: string,
    public key: string,
    public prefix: string,
    public hdpath = DEFAULT_ETH_HDPATH,
  ) {
    super(name, key, prefix, hdpath)
  }
  static async fromMnemonic(
    name: string,
    mnemonic: string,
    password: string,
    prefix: string,
    hdpath = DEFAULT_ETH_HDPATH
  ): Promise<Wallet> {
    const key = await this.encrypt(mnemonic, password);
    return new EtherWallet(name, key, prefix, hdpath);
  }

  async getWallet(password: string) {
    const mnemonicOrPrivKey = await this.decrypt(password);
    let privKeyArray: Uint8Array;
    if (mnemonicOrPrivKey.includes(' ')) {
      const wallet = HDNodeWallet.fromPhrase(mnemonicOrPrivKey, undefined, this.hdpath);

      privKeyArray = Uint8Array.from(
        Buffer.from(wallet.privateKey.replace("0x", ""), "hex")
      );
    } else {
      privKeyArray = Uint8Array.from(
        Buffer.from(mnemonicOrPrivKey.replace("0x", ""), "hex")
      );
    }
    return await DirectEthSecp256k1Wallet.fromKey(privKeyArray);
  }
}
