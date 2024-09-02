import { getDerivationPath } from "./constant";
import EtherWallet from "./EtherWallet";
import Wallet from "./Wallet";

export { default as Wallet } from "./Wallet";

export async function generateWalletFromMnemonic(
  name: string,
  mnemonic: string,
  passphrase: string,
  prefix: string,
  coinType: number,
  hdpath?: string
): Promise<Wallet> {
  switch (coinType) {
    case 60:
      return EtherWallet.fromMnemonic(name, mnemonic, passphrase, prefix, hdpath);
    default:
      return Wallet.fromMnemonic(name, mnemonic, passphrase, prefix, hdpath ?? getDerivationPath(coinType));
  }
}

export function newWallet(name: string, key: string, prefix: string, coinType: number, hdpath?: string) {
  switch (coinType) {
    case 60:
      return new EtherWallet(name, key, prefix, hdpath);
    default:
      return new Wallet(name, key, prefix, hdpath ?? getDerivationPath(coinType));
  }
}
