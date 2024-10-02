import { getDerivationPath } from "./constant";
import EtherWallet from "./EtherWallet";
import Wallet from "./Wallet";

export { default as Wallet } from "./Wallet";

export async function generateWalletFromMnemonicOrPrivateKey(
  name: string,
  mnemonicOrPrivKey: string,
  passphrase: string,
  prefix: string,
  coinType: number,
  hdpath?: string
): Promise<Wallet> {
  switch (coinType) {
    case 60:
      return EtherWallet.fromMnemonicOrPrivateKey(name, mnemonicOrPrivKey, passphrase, prefix, hdpath);
    default:
      return Wallet.fromMnemonicOrPrivateKey(name, mnemonicOrPrivKey, passphrase, prefix, hdpath ?? getDerivationPath(coinType));
  }
}

export function newWallet(name: string, encryptedKey: string, prefix: string, coinType: number, hdpath?: string) {
  switch (coinType) {
    case 60:
      return new EtherWallet(name, encryptedKey, prefix, hdpath);
    default:
      return new Wallet(name, encryptedKey, prefix, hdpath ?? getDerivationPath(coinType));
  }
}
