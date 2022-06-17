import Wallet from "./Wallet";

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
  addWallet(mnemonic: string, chainId: string, name?: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");

    const newWallet = new Wallet(mnemonic, name);
    if (this.wallets[trimmedChainId]) {
      this.wallets[trimmedChainId] = [
        ...this.wallets[trimmedChainId],
        newWallet,
      ];
    } else {
      this.wallets[trimmedChainId] = [newWallet];
    }

    return newWallet;
  }

  /**
   * Removes a wallet by its name for a given Chain ID
   * @param name The name of the wallet to remove
   * @param chainId
   */
  removeWallet(name: string, chainId: string) {
    const trimmedIdentifier = name.trim();

    if (trimmedIdentifier.length === 0)
      throw new Error("Invalid Wallet Identifier");

    const wallets = this.getWallets(chainId);
    if (!wallets.find((wallet) => wallet.name === trimmedIdentifier))
      throw new Error(`No wallet found by name ${trimmedIdentifier}`);

    this.wallets[chainId.trim()] = wallets.filter(
      (wallet) => wallet.name !== trimmedIdentifier
    );
  }

  /**
   * Removes a wallet by index and chain ID
   * @param index The index of the wallet to remove
   * @param chainId
   */
  removeWalletByIndex(index: number, chainId: string) {
    const wallets = this.getWallets(chainId);

    wallets.splice(index, 1);

    this.wallets[chainId.trim()] = wallets;
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
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");
    return this.wallets[trimmedChainId] ?? [];
  }
}
