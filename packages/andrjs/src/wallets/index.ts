import EtherWallet from "./EtherWallet";
import TerraWallet from "./TerraWallet";
import Wallet from "./Wallet";

export { default as Wallet } from "./Wallet";

export async function generateWalletFromMnemonic(
  name: string,
  mnemonic: string,
  passphrase: string,
  prefix: string
): Promise<Wallet> {
  switch (prefix) {
    case "inj":
      return EtherWallet.fromMnemonic(name, mnemonic, passphrase);
    case "terra":
      return TerraWallet.fromMnemonic(name, mnemonic, passphrase);
    default:
      return Wallet.fromMnemonic(name, mnemonic, passphrase, prefix);
  }
}

export function newWallet(name: string, key: string, prefix: string) {
  switch (prefix) {
    case "inj":
      return new EtherWallet(name, key, prefix);
    case "terra":
      return new TerraWallet(name, key, prefix);
    default:
      return new Wallet(name, key, prefix);
  }
}
