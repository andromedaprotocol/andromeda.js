import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

export default class Wallet {
  mnemonic: string;
  constructor(mnemonic: string) {
    this.mnemonic = mnemonic;
  }

  async getWallet() {
    return await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic);
  }

  async getAccounts() {
    const wallet = await this.getWallet();
    return await wallet.getAccounts();
  }

  async getFirstOfflineSigner() {
    const [firstAccount] = await this.getAccounts();
    return firstAccount.address;
  }
}
