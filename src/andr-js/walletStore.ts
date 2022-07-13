import Wallet from "./Wallet";

/**
 * Used to store wallets based on Chain IDs and Mnemonics
 */
export default class WalletStore {
  wallets: Record<string, Wallet[]> = {};
  defaultWallets: Record<string, Wallet> = {};

  /**
   * Adds a wallet by mnemonic and chain ID
   * @param mnemonic
   * @param chainId
   */
  addWallet(chainId: string, name: string, mnemonic?: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");

    const newWallet = new Wallet(name, mnemonic);
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

    const defaultWallet = this.getDefaultWallet(chainId);
    if (defaultWallet.name === name) {
      this.removeDefaultWallet(chainId);
    }
  }

  /**
   * Removes a wallet by index and chain ID
   * @param index The index of the wallet to remove
   * @param chainId
   */
  removeWalletByIndex(index: number, chainId: string) {
    const wallets = this.getWallets(chainId);

    const removed = wallets.splice(index, 1);

    this.wallets[chainId.trim()] = wallets;

    const defaultWallet = this.getDefaultWallet(chainId);
    if (defaultWallet.name === removed[0].name) {
      this.removeDefaultWallet(chainId);
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
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");
    return this.wallets[trimmedChainId] ?? [];
  }

  /**
   * Gets all wallets in the store with their assigned chain ID
   * @returns
   */
  getAllWallets(): { chainId: string; wallet: Wallet }[] {
    const chainIds = this.ChainIDs;
    const wallets: { chainId: string; wallet: Wallet }[] = [];
    for (let i = 0; i < chainIds.length; i++) {
      const chainId = chainIds[i];
      const chainWallets = this.getWallets(chainId);
      wallets.push(...chainWallets.map((wallet) => ({ chainId, wallet })));
    }

    return wallets;
  }

  /**
   * Get a wallet by Chain ID/Identifier, identifier being a name or address
   * @param chainId The ID of the Chain
   * @param identifier The identifier for the wallet (name or address)
   * @returns
   */
  async getWallet(chainId: string, identifier: string) {
    const wallet = this.getWalletByName(chainId, identifier);
    if (!wallet) return this.getWalletByAddress(chainId, identifier);
    return wallet;
  }

  /**
   * Get a wallet by Chain ID/Name combination
   * @param chainId The ID of the Chain
   * @param name The assigned name for the wallet
   * @returns
   */
  getWalletByName(chainId: string, name: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");
    const wallet = (this.wallets[trimmedChainId] ?? []).find(
      (wallet) => wallet.name === name
    );
    return wallet;
  }

  /**
   * Get a wallet by Chain ID/Address combination
   * @param chainId The ID of the Chain
   * @param address The address of the wallet
   * @returns
   */
  async getWalletByAddress(chainId: string, address: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");
    // const wallet = (this.wallets[trimmedChainId] ?? []).find(
    //   (wallet) => wallet.name === name
    // );
    const wallets = this.wallets[trimmedChainId];
    for (let i = 0; i < wallets.length; i++) {
      const wallet = wallets[i];
      if ((await wallet.getFirstOfflineSigner(chainId)) === address) {
        return wallet;
      }
    }
    return;
  }

  /**
   * Sets the default wallet for a given chain ID
   * @param chainId
   * @param wallet
   */
  setDefaultWallet(chainId: string, wallet: Wallet) {
    this.defaultWallets[chainId] = wallet;
    const wallets = this.getWallets(chainId);
    if (!wallets.map((wallet) => wallet.name).includes(wallet.name)) {
      this.addWallet(wallet.mnemonic, chainId, wallet.name);
    }
  }

  /**
   *
   * @param chainId Gets the default wallet for a given chain ID
   * @returns
   */
  getDefaultWallet(chainId: string) {
    return this.defaultWallets[chainId];
  }

  /**
   * Removes the default wallet for a given chain ID. Sets the first indexed wallet for the chain ID as the new default.
   * @param chainId
   */
  removeDefaultWallet(chainId: string) {
    const wallets = this.getWallets(chainId);
    delete this.defaultWallets[chainId];

    if (wallets.length > 0) {
      this.setDefaultWallet(chainId, wallets[0]);
    }
  }
}
