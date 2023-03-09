import { stringToPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import Wallet from "./Wallet";

/**
 * Used to generate a wallet for a Terra blockchain
 */
export default class TerraWallet extends Wallet {
  static async fromMnemonic(
    name: string,
    mnemonic: string,
    passphrase: string
  ): Promise<Wallet> {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      hdPaths: [stringToPath("m/44'/330'/0'/0/0")],
      prefix: "terra",
    });
    const key = await wallet.serialize(passphrase);
    return new Wallet(name, key, "terra");
  }
}
