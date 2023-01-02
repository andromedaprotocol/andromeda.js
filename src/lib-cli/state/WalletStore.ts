import { Wallet } from "@andromeda/andromeda-js";
import keychain from "keytar";
import { promptPassphrase } from "..";
import config from "../config";
import {
  loadStorageFile,
  storageFileExists,
  writeStorageFile,
} from "../config/storage";

const STORAGE_FILE = "keys.json";
const KEYCHAIN_SERVICE = "andr-cli";

interface StoredData {
  wallets: StoredWalletData[];
  defaults: Record<string, string>;
}

export interface StoredWalletData {
  name: string;
  key: string;
  address: string;
  chainId: string;
}

/**
 * Used to store wallets based on Chain IDs and Keys
 */
export default class WalletStore {
  constructor() {
    // Create storage data if it does not exist
    if (!storageFileExists(STORAGE_FILE))
      writeStorageFile(
        STORAGE_FILE,
        JSON.stringify({ wallets: [], defaults: {} })
      );
  }

  /**
   * Gets the string to be printed before each command prompt
   */
  get CLIPrefix() {
    const wallet = this.currentWallet;
    return wallet ? wallet.name : "";
  }

  /**
   * Gets the data stored in the config file
   */
  protected get storageData(): StoredData {
    const walletsJSON = loadStorageFile(STORAGE_FILE);
    return JSON.parse(walletsJSON.toString());
  }

  /**
   * Writes new data to storage, overriding any current data, called when a default wallet is updated or a wallet is added/removed
   */
  protected set storageData(newData: StoredData) {
    writeStorageFile(STORAGE_FILE, JSON.stringify(newData));
  }

  /**
   * Gets all stored wallets
   * @returns An array of wallet data
   */
  get wallets() {
    try {
      const storedData = this.storageData;

      return storedData.wallets;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  /**
   * Writes new wallets to stored data, used when a wallet is added/removed
   */
  protected set wallets(wallets: StoredWalletData[]) {
    const newData = {
      ...this.storageData,
      wallets,
    };

    this.storageData = newData;
  }

  /**
   * Gets the default wallets for each chain
   * @returns A mapping between chain ID and wallet name
   */
  get defaultWallets() {
    return this.storageData.defaults;
  }

  /**
   * Writes a new default wallets object to storage
   */
  protected set defaultWallets(defaultWallets: Record<string, string>) {
    const newData = {
      ...this.storageData,
      defaults: defaultWallets,
    };

    this.storageData = newData;
  }

  /**
   * Gets the current wallet being used, based on default wallets and current chain ID
   * @returns A Wallet class for the current wallet
   */
  get currentWallet() {
    const walletName = this.defaultWallets[config.get("chain.chainId")];
    const wallet = this.getWalletByName(walletName);

    return wallet;
  }

  get currentWalletAddress() {
    const walletName = this.defaultWallets[config.get("chain.chainId")];
    const walletAddress = this.getWalletAddress(walletName);

    return walletAddress;
  }
  /**
   * Gets an array of all currently stored chain IDs
   */
  get chainIDs() {
    return Object.keys(this.defaultWallets);
  }

  /**
   * Gets the address for a given wallet name
   * @param name
   * @returns The wallet's address if it exists
   */
  getWalletAddress(name: string) {
    const walletData = this.wallets.find(
      ({ name: walletName }) => walletName === name
    );

    return walletData ? walletData.address : undefined;
  }

  /**
   * Adds a new wallet to storage
   * @param walletData The new wallet data
   */
  storeWalletData(walletData: StoredWalletData) {
    this.wallets = [...this.wallets, walletData];
  }

  /**
   * Returns a chain ID if the given wallet name is a default wallet for any chain
   * @param name The name of the wallet
   * @returns The chain ID for the wallet, undefined if the given name is not a default wallet for any chain
   */
  getChainIdByDefaultWallet(name: string) {
    const chainIds = this.chainIDs;
    const defaults = this.defaultWallets;

    return chainIds.find((chainId) => defaults[chainId] === name);
  }

  /**
   * Generates a new wallet and stores it
   * @param chainId The chain ID for the new wallet
   * @param name The wallet's name
   * @param passphrase A passphrase to encrypt the wallet key
   * @param mnemonic An optional mnemonic to generate the wallet (used on recovery)
   * @returns The newly generated wallet
   */
  async generateWallet(
    chainId: string,
    name: string,
    passphrase: string,
    mnemonic: string
  ) {
    const wallets = this.wallets;
    if (wallets.some(({ name: walletName }) => walletName === name))
      throw new Error("Wallet name already in use");

    // Trim passed chain ID before checking
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");

    const addressPrefix = config.get("chain.addressPrefix");
    const newWallet = await Wallet.fromMnemonic(
      name,
      mnemonic,
      passphrase,
      addressPrefix
    );

    await keychain.setPassword(KEYCHAIN_SERVICE, name, passphrase);
    const address = await newWallet.getAddress(passphrase);

    // Store new wallet
    this.storeWalletData({
      name,
      address,
      chainId: trimmedChainId,
      key: newWallet.key,
    });

    return newWallet;
  }

  /**
   * Removes a wallet by its name/address
   * @param identifier The name/address of the wallet to remove
   */
  async removeWallet(identifier: string) {
    const trimmedIdentifier = identifier.trim();

    if (trimmedIdentifier.length === 0)
      throw new Error("Invalid Wallet Identifier");

    const wallet = this.wallets.find(
      ({ name: walletName, address: walletAddress }) =>
        walletName === trimmedIdentifier || walletAddress === trimmedIdentifier
    );

    if (!wallet)
      throw new Error(
        `No wallet found by name or address: ${trimmedIdentifier}`
      );

    // If the removed wallet is a default, make sure to assign a new default wallet
    const chainId = this.getChainIdByDefaultWallet(wallet.name);
    if (chainId) {
      this.onRemoveDefaultWallet(chainId);
    }

    this.wallets = this.wallets.filter(
      (_wallet) => _wallet.name !== wallet!.name
    );

    // Remove any stored passphrases for the current wallet
    await keychain.deletePassword(KEYCHAIN_SERVICE, wallet.name);
  }

  /**
   * Gets all wallets for a given chain ID
   * @param chainId
   * @returns An array of wallets for the given chain ID
   */
  getWallets(chainId: string) {
    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");
    return (
      this.wallets.filter(
        ({ chainId: walletChainId }) => chainId === walletChainId
      ) ?? []
    );
  }

  /**
   * Get a wallet by Chain ID/Identifier, identifier being a name or address
   * @param identifier The identifier for the wallet (name or address)
   * @returns
   */
  getWallet(identifier: string, chainId = config.get("chain.chainId")) {
    const walletData = this.wallets.find(
      ({ name, address, chainId: walletChainId }) =>
        chainId === walletChainId &&
        (name === identifier.trim() || address === identifier.trim())
    );
    if (!walletData) return;

    return new Wallet(
      walletData.name,
      walletData.key,
      config.get("chain.addressPrefix")
    );
  }

  /**
   * Get a wallet by identifier, identifier being a name or address. Ignores chain IDs.
   * @param identifier The identifier for the wallet (name or address)
   * @returns
   */
  getWalletRaw(identifier: string) {
    const wallet = this.getWalletByName(identifier);
    if (!wallet) return this.getWalletByAddress(identifier);
    return wallet;
  }

  /**
   * Get a wallet by Chain ID/Name combination
   * @param name The assigned name for the wallet
   * @returns
   */
  getWalletByName(name: string) {
    const walletData = this.wallets.find(
      ({ name: walletName }) => walletName === name
    );
    if (!walletData) return;

    return new Wallet(name, walletData.key, config.get("chain.addressPrefix"));
  }

  /**
   * Get a wallet by Chain ID/Address combination
   * @param address The address of the wallet
   * @returns
   */
  getWalletByAddress(address: string) {
    const walletData = this.wallets.find(
      ({ address: walletAddress }) => walletAddress === address
    );
    if (!walletData)
      throw new Error(`Wallet not found with address ${address}`);
    return new Wallet(
      walletData.name,
      walletData.key,
      config.get("chain.addressPrefix")
    );
  }

  /**
   * Sets the default wallet for a given chain ID
   * @param chainId
   */
  setDefaultWallet(chainId: string, name: string) {
    this.defaultWallets = {
      ...this.defaultWallets,
      [chainId]: name,
    };
  }

  /**
   *
   * @param chainId Gets the default wallet for a given chain ID
   * @returns
   */
  getDefaultWallet(chainId: string): Wallet | undefined {
    const walletName = this.defaultWallets[chainId];
    if (!walletName) return;

    const wallet = this.getWalletByName(walletName);
    return wallet;
  }

  /**
   * Removes the default wallet for a given chain ID. Sets the first indexed wallet for the chain ID as the new default.
   * @param chainId
   */
  onRemoveDefaultWallet(chainId: string) {
    const wallets = this.getWallets(chainId);
    delete this.defaultWallets[chainId];

    // Assign new default wallet if any are left
    if (wallets.length > 0) {
      this.setDefaultWallet(chainId, wallets[0].name);
    }
  }

  /**
   * Retrieves the stored passphrase for the given wallet name from the OS keychain.
   * If the keychain does not have a passphrase for the wallet the user is prompted for it.
   * @param name
   * @returns The passphrase for the given wallet
   */
  async getWalletPassphrase(name: string) {
    const wallet = this.getWalletByName(name);
    if (!wallet) throw new Error(`Wallet not found with name ${name}`);
    // Check keychain
    let passphrase = await keychain.getPassword(KEYCHAIN_SERVICE, name);
    // Otherwise prompt
    if (!passphrase) {
      passphrase = await promptPassphrase(wallet.name);
    }

    return passphrase ?? "";
  }
}
