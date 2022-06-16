import Wallet from "./wallet";

/**
 * Used to store wallets based on Chain IDs and Mnemonics
 */
export default class WalletStore {
  wallets: Record<string, Wallet[]> = {};

  /**
   * Adds a wallet by mnemonic and chain ID
   * @param mnemonic
   * @param chainId
   */
  addWallet(mnemonic: string, chainId: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");

    const newWallet = new Wallet(mnemonic);
    if (this.wallets[trimmedChainId]) {
      this.wallets[trimmedChainId] = [
        ...this.wallets[trimmedChainId],
        newWallet,
      ];
    } else {
      this.wallets[trimmedChainId] = [newWallet];
    }
  }

  /**
   * Gets an array of all currently stored chain IDs
   */
  get ChainIDs() {
    return Object.keys(this.wallets);
  }

  /**
   * Gets all wallets for a given chain ID
   * @param chainId
   * @returns An array of wallets for the given chain ID
   */
  getWallets(chainId: string) {
    const trimmedChainId = chainId.trim();

    return this.wallets[trimmedChainId];
  }
}
