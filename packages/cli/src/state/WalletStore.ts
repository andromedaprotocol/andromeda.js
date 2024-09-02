import {
  generateWalletFromMnemonic,
  Wallet,
  newWallet,
} from "@andromedaprotocol/andromeda.js";
import keychain from "keytar";
import { promptPassphrase } from "..";
import config from "../config";
import {
  loadStorageFile,
  storageFileExists,
  writeStorageFile,
} from "../config/storage";
import { V_1_0_0_WalletStore } from "./archive/wallet";
import { getCoinTypeFromPrefix } from "./utils";

const STORAGE_FILE = "keys.json";
const KEYCHAIN_SERVICE = "andr-cli";

const STORE_VERSION = '1.0.0';
interface StoredData {
  wallets: Record<string, StoredWalletData>;
  default: string;
  version: string
}


export interface StoredWalletData {
  key: string;
  // Any address that has been linked to this wallet during cli interaction
  // Getting address for all chains and wallet can be expensive so better to provide
  // the utility to search a wallet based on past address linked in cli
  addresses: {
    [bech32: string]: string
  }
}

/**
 * Used to store wallets
 */
export default class WalletStore {
  constructor() {
    // Create storage data if it does not exist
    if (!storageFileExists(STORAGE_FILE)) {
      const data: StoredData = {
        wallets: {},
        default: '',
        version: STORE_VERSION
      };
      writeStorageFile(
        STORAGE_FILE,
        JSON.stringify(data)
      );

    }
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
    const data = JSON.parse(walletsJSON.toString());
    if (data['version'] === STORE_VERSION) return data;

    try {

      // This is probably old storage data, lets migrate it to new storage version
      const oldData = data as V_1_0_0_WalletStore.StoredData;

      const wallets: StoredData['wallets'] = {};
      oldData.wallets.forEach(({ name, key, address, chainId }) => {
        if (!wallets[name]) {
          wallets[name] = {
            key,
            addresses: {
              [chainId]: address
            }
          }
        } else if (wallets[name].key === key) {
          wallets[name].addresses[chainId] = address
        }
      })
      this.storageData = {
        wallets,
        version: STORE_VERSION,
        default: ''
      };
      return {
        wallets,
        version: STORE_VERSION,
        default: ''
      }
    } catch (_) {
      throw new Error("OPPS! Looks there the keys file is corrupted. Delete your config files and try again");
    }
  }

  /**
   * Writes new data to storage, overriding any current data, called when a default wallet is updated or a wallet is added/removed
   */
  protected set storageData(newData: StoredData) {
    writeStorageFile(STORAGE_FILE, JSON.stringify(newData));
  }

  /**
   * Gets all stored wallets
   * @returns Wallets map
   */
  get wallets() {
    try {
      const storedData = this.storageData;

      return storedData.wallets;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  /**
   * Writes new wallets to stored data, used when a wallet is added/removed
   */
  protected set wallets(wallets: StoredData['wallets']) {
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
  get defaultWallet() {
    return this.storageData.default;
  }

  /**
   * Writes a new default wallets object to storage
   */
  protected set defaultWallet(defaultWallet: string) {
    const newData: StoredData = {
      ...this.storageData,
      default: defaultWallet,
    };

    this.storageData = newData;
  }

  /**
   * Gets the current wallet being used, based on default wallets and current chain ID
   * @returns A Wallet class for the current wallet
   */
  get currentWallet() {
    const wallet = this.getWallet(this.defaultWallet);
    return wallet;
  }

  /**
 * Gets the current wallet fee denom by removing numeric values from the defaultFee config
 * @returns A Wallet class for the current wallet
 */
  get currentWalletDenom() {
    const fee = config.get("chain.defaultFee");
    return fee.replaceAll(/\d/g, '').replaceAll(".", '');
  }

  async currentWalletAddress() {
    if (!this.currentWallet) return undefined;
    const walletAddress = await this.getWalletAddress(this.currentWallet.name);
    return walletAddress;
  }

  /**
   * Gets the address for a given wallet name
   * @param name
   * @returns The wallet's address if it exists
   */
  async getWalletAddress(name: string) {
    const wallet = this.getWallet(name);
    if (!wallet) return undefined;

    return await wallet.getAddress(await this.getWalletPassphrase(name))
  }

  /**
   * Adds a new wallet to storage
   * @param walletData The new wallet data
   */
  storeWalletData(name: string, walletData: StoredWalletData) {
    if (this.wallets[name]) {
      throw new Error(`Wallet with name - ${name} already stored`)
    }
    this.wallets = {
      ...this.wallets,
      [name]: walletData
    }
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
    name: string,
    passphrase: string,
    mnemonic: string,
  ) {
    if (this.wallets[name])
      throw new Error("Wallet name already in use");

    const addressPrefix = config.get("chain.addressPrefix");
    const newWallet = await generateWalletFromMnemonic(
      name,
      mnemonic,
      passphrase,
      addressPrefix,
      getCoinTypeFromPrefix(addressPrefix)
    );

    await keychain.setPassword(KEYCHAIN_SERVICE, name, passphrase);
    const address = await newWallet.getAddress(passphrase);

    // Store new wallet
    this.storeWalletData(name, {
      key: newWallet.key,
      addresses: {
        [addressPrefix]: address
      }
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



    if (!this.wallets[identifier])
      throw new Error(
        `No wallet found by name or address: ${trimmedIdentifier}`
      );

    if (this.defaultWallet === identifier) {
      this.defaultWallet = '';
    }
    delete this.wallets[identifier];
    this.wallets = this.wallets;

    // Remove any stored passphrases for the current wallet
    await keychain.deletePassword(KEYCHAIN_SERVICE, identifier);
  }

  /**
   * Gets all wallets for a given chain ID
   * @param chainId
   * @returns An array of wallets for the given chain ID
   */
  get getWallets() {
    return this.wallets;
  }

  /**
 * Gets all wallets name
 * @param chainId
 * @returns An array of wallets for the given chain ID
 */
  get getWalletNames() {
    return Object.keys(this.wallets);
  }

  /**
   * Get a wallet by Identifier, identifier being a name
   * @param identifier The identifier for the wallet
   * @returns
   */
  getWallet(identifier: string) {
    const walletData = this.wallets[identifier]
    if (!walletData) return;
    const prefix = config.get("chain.addressPrefix");
    const wallet = newWallet(
      identifier,
      walletData.key,
      prefix,
      getCoinTypeFromPrefix(prefix)
    );
    return wallet;
  }


  /**
   * Get a wallet by Address combination
   * @param address The address of the wallet
   * @returns
   */
  getWalletByAddress(address: string) {
    const walletData = Object.entries(this.wallets).find(
      ([_, { addresses }]) => Object.values(addresses).includes(address)
    );
    if (!walletData)
      throw new Error(`Wallet not found with address ${address}`);
    return this.getWallet(walletData[0])
  }

  /**
   * Sets the default wallet for a given chain ID
   * @param chainId
   */
  setDefaultWallet(name: string) {
    this.defaultWallet = name
  }

  /**
   *
   * @param chainId Gets the default wallet for a given chain ID
   * @returns
   */
  getDefaultWallet(): Wallet | undefined {
    const walletName = this.defaultWallet;
    if (!walletName) return;

    const wallet = this.getWallet(walletName);
    return wallet;
  }


  /**
   * Retrieves the stored passphrase for the given wallet name from the OS keychain.
   * If the keychain does not have a passphrase for the wallet the user is prompted for it.
   * @param name
   * @returns The passphrase for the given wallet
   */
  async getWalletPassphrase(name: string) {
    const wallet = this.getWallet(name);
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
