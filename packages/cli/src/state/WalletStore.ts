import {
  Wallet,
  generateWalletFromMnemonicOrPrivateKey,
  newWallet,
} from "@andromedaprotocol/andromeda.js";
import keychain from "keytar";
import Crypto from "crypto-js";
import { promptPassphrase, promptWithExit } from "..";
import config, { envConfig } from "../config";
import {
  loadStorageFile,
  writeStorageFile,
} from "../config/storage";
import { getCoinTypeFromPrefix } from "./utils";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const STORAGE_FILE = "keys.json";
const KEYCHAIN_SERVICE = "andr-cli";

const STORE_VERSION = "1.0.0";
interface StoredData {
  wallets: StoredWalletData[];
  default: string;
  version: string;
}

export interface StoredWalletData {
  name: string;
  description?: string;
  key: string;
  type: "phrase" | "private_key";
  storePassword?: boolean;
  // Any address that has been linked to this wallet during cli interaction
  // Getting address for all chains and wallet can be expensive so better to provide
  // the utility to search a wallet based on past address linked in cli
  addresses: {
    [bech32: string]: string;
  };
  /** @deprecated Will be removed in next update */
  chainId?: string;
  /** @deprecated Will be removed in next update */
  address?: string;
}

/**
 * Used to store wallets
 */
export default class WalletStore {

  /**
   * Gets the data stored in the config file
   * @note This method reads from the file
   */
  protected get storageData(): StoredData {
    try {
      const walletsJSON = loadStorageFile(envConfig.get('name'), STORAGE_FILE);
      const data = JSON.parse(walletsJSON.toString()) as StoredData;
      if (!data.version) {
        data["version"] = STORE_VERSION;
      }
      this.storageData = data;
      return data;
    } catch (err) {
      const data: StoredData = {
        wallets: [],
        default: "",
        version: STORE_VERSION,
      };
      writeStorageFile(envConfig.get('name'), STORAGE_FILE, JSON.stringify(data));
      this.storageData = data;
      return data;
    }
  }

  /**
   * Writes new data to storage, overriding any current data
   * @note This method writes to the file
   */
  protected set storageData(newData: StoredData) {
    writeStorageFile(envConfig.get('name'), STORAGE_FILE, JSON.stringify(newData));
  }

  /**
   * Gets the default wallet name
   * @returns The name of the default wallet
   */
  get defaultWallet() {
    return this.storageData.default;
  }

  /**
   * Sets the default wallet name
   * @param defaultWallet The name of the new default wallet
   * @note This method indirectly writes to the file by calling storageData setter
   */
  set defaultWallet(defaultWallet: string) {
    const newData: StoredData = {
      ...this.storageData,
      default: defaultWallet,
    };

    this.storageData = newData;
  }

  /**
   * All stored wallets
   * @returns StoredWalletData[]
   */
  get wallets() {
    try {
      const storedData = this.storageData;
      return storedData.wallets.filter((w) => !this.isLegacyWallet(w));
    } catch (error) {
      return [];
    }
  }

  /**
   * Writes new wallets to stored data, used when a wallet is added/removed
   * @note This method indirectly writes to the file by calling storageData setter
   */
  protected set wallets(wallets: StoredData["wallets"]) {
    const newData = {
      ...this.storageData,
      wallets: [...wallets, ...this.legacyWallets],
    };

    this.storageData = newData;
  }


  /**
   * Get a wallet by name
   * @returns StoredWalletData[]
   */
  wallet(name: string) {
    return this.wallets.find((wallet) => wallet.name === name);
  }

  /**
   * Updates a wallet's data
   * @param name The name of the wallet to update
   * @param data The partial data to update the wallet with
   * @throws Error if the wallet is not found
   * @note This method indirectly writes to the file by calling wallets setter
   */
  updateWallet(name: string, data: Partial<StoredWalletData>) {
    const wallet = this.wallet(name);
    if (!wallet) throw new Error(`Wallet with name - ${name} not stored`);
    this.wallets = this.wallets
      .filter((w) => w.name !== name)
      .concat({
        ...wallet,
        ...data,
        addresses: { ...wallet.addresses, ...data.addresses },
        name: name,
      });
  }

  /**
  * rename a wallet by name
  * @param name The current name of the wallet
  * @param newName The new name for the wallet
  * @param passphrase Optional passphrase for the wallet
  * @throws Error if the new name is already taken or the wallet is not found
  * @note This method indirectly writes to the file by calling wallets setter and defaultWallet setter
  */
  async renameWallet(name: string, newName: string, passphrase?: string) {
    if (this.wallet(newName)) throw new Error(`Wallet with name - ${newName} already present`);
    const wallet = this.wallet(name)
    if (!wallet) throw new Error(`Wallet with name - ${name} not present`);
    passphrase = passphrase ?? await this.getWalletPassphrase(name);
    await this.removeKeychain(name);
    await this.storeKeychain(newName, passphrase)
    this.wallets = this.wallets
      .filter((w) => w.name !== name)
      .concat({
        ...wallet,
        name: newName
      });
    if (this.defaultWallet === name) {
      this.defaultWallet = newName
    }
  }

  /**
   * Adds a new wallet to storage
   * @param walletData The new wallet data
   * @note This method indirectly writes to the file by calling wallets setter
   */
  addWallet(walletData: StoredWalletData) {
    const wallet = this.wallet(walletData.name);
    if (wallet) throw new Error(`Wallet with name - ${walletData.name} already stored`);
    this.wallets = this.wallets.concat(walletData);
  }

  /**
   * Removes a wallet by its name
   * @param name The name of the wallet to remove
   * @note This method indirectly writes to the file by calling wallets setter and defaultWallet setter
   */
  async removeWallet(name: string) {
    name = name.trim();

    if (name.length === 0) throw new Error("Invalid Wallet Identifier");

    const wallet = this.wallet(name);
    if (!wallet) throw new Error(`Wallet with name - ${name} not stored`);

    if (this.defaultWallet === name) {
      this.defaultWallet = "";
    }

    this.wallets = this.wallets.filter((w) => w.name !== name);

    await this.removeKeychain(name);
  }

  /**
   * Gets the string to be printed before each command prompt
   */
  get CLIPrefix() {
    const wallet = this.currentWallet;
    return wallet ? wallet.name : "";
  }

  /**
   * Gets the current wallet being used, based on default wallets and current chain ID
   * @returns A Wallet class for the current wallet
   */
  get currentWallet() {
    return this.getWallet(this.defaultWallet);
  }

  /**
   * Gets the address for a given wallet name
   * @param name
   * @param passphrase Optional passphrase for the wallet to bypass keychain
   * @returns The wallet's address if it exists
   */
  async getWalletAddress(name: string, passphrase?: string) {
    const wallet = this.getWallet(name);
    if (!wallet) return undefined;
    const address = await wallet.getAddress(
      passphrase ?? (await this.getWalletPassphrase(name))
    );
    this.updateWallet(name, { addresses: { [wallet.prefix]: address } })
    return address;
  }

  /**
 * Gets the address for a given wallet name
 * @param name
 * @param passphrase Optional passphrase for the wallet to bypass keychain
 * @returns The wallet's address if it exists
 */
  async getWalletAddressWithoutPassphrase(name: string, prefix: string) {
    const wallet = this.wallet(name);
    if (!wallet) return '';
    return wallet.addresses[prefix] ?? '';
  }

  /**
 * Gets the address of current wallet
 * @param name
 * @param passphrase Optional passphrase for the wallet to bypass keychain
 * @returns The wallet's address if it exists
 */
  async currentWalletAddress(passphrase?: string) {
    return this.getWalletAddress(this.currentWallet?.name || '', passphrase)
  }

  /**
* Gets the address of current wallet
* @param name
* @returns The wallet's address if it exists
*/
  async currentWalletAddressWithoutPassphrase() {
    return this.getWalletAddressWithoutPassphrase(this.currentWallet?.name || '', config.get('chain.addressPrefix'))
  }

  /**
   * Generates a new wallet and stores it
   * @param name The wallet's name
   * @param passphrase A passphrase to encrypt the wallet key
   * @param mnemonicOrPrivateKey The mnemonic or private key to generate the wallet
   * @returns The newly generated wallet
   * @throws Error if a wallet with the given name already exists
   * @note This method indirectly writes to the file by calling addWallet
   */
  async generateWallet(name: string, passphrase: string, mnemonicOrPrivateKey: string) {
    const wallet = this.wallet(name);
    if (wallet) throw new Error(`Wallet with name - ${name} already stored`);

    const addressPrefix = config.get("chain.addressPrefix");
    const newWallet = await generateWalletFromMnemonicOrPrivateKey(
      name,
      mnemonicOrPrivateKey,
      passphrase,
      addressPrefix,
      getCoinTypeFromPrefix(addressPrefix)
    );

    await this.storeKeychain(name, passphrase);
    const address = await newWallet.getAddress(passphrase);

    // Store new wallet
    this.addWallet({
      key: newWallet.key,
      name: name,
      addresses: {
        [addressPrefix]: address,
      },
      type: "phrase",
    });

    return newWallet;
  }

  /**
   * Stores the passphrase for a wallet in the keychain
   * @param name The name of the wallet
   * @param passphrase The passphrase to store
   * @note This method writes to the system's keychain, not the file
   */
  async storeKeychain(name: string, passphrase: string) {
    const wallet = this.wallet(name);
    // If wallet is not set to store password, do not store in keychain
    if (wallet?.storePassword === false) return;
    await keychain.setPassword(KEYCHAIN_SERVICE, name, passphrase);
  }

  /**
   * Removes the passphrase for a wallet from the keychain
   * @param name The name of the wallet
   * @note This method removes data from the system's keychain, not the file
   */
  async removeKeychain(name: string) {
    await keychain.deletePassword(KEYCHAIN_SERVICE, name);
  }

  /**
   * Get a wallet by Identifier, identifier being a name
   * @param identifier The identifier for the wallet
   * @returns
   */
  getWallet(name: string) {
    let walletData = this.wallet(name);
    if (!walletData) return;
    const prefix = config.get("chain.addressPrefix");
    const wallet = newWallet(
      name,
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
    const walletData = Object.entries(this.wallets).find(([_, { addresses }]) =>
      Object.values(addresses).includes(address)
    );
    if (!walletData)
      throw new Error(`Wallet not found with address ${address}`);
    return this.getWallet(walletData[0]);
  }

  /**
   * Retrieves the stored passphrase for the given wallet name from the OS keychain.
   * If the keychain does not have a passphrase for the wallet the user is prompted for it.
   * @param name
   * @returns The passphrase for the given wallet
   * @note This method may indirectly write to the file by calling storeKeychain
   */
  async getWalletPassphrase(name: string) {
    // Check keychain
    let passphrase = await keychain.getPassword(KEYCHAIN_SERVICE, name);
    // Otherwise prompt
    if (!passphrase) {
      passphrase = await promptPassphrase(name);
    }
    await this.storeKeychain(name, passphrase)

    return passphrase ?? "";
  }

  /** @deprecated Will be removed in next update */
  private isLegacyWallet(wallet: StoredWalletData) {
    return !!(wallet.address || wallet.chainId);
  }
  /** @deprecated Will be removed in next update */
  async migrateLegacyWallet(
    name: string,
  ) {
    let walletData = this.legacyWallets.find(w => w.name === name);
    if (!walletData) throw new Error(`Legacy wallet - ${name} not found`);
    const passphrase = await promptWithExit({
      message: `Input passphrase for wallet ${name}:`,
      type: "password",
      name: "passphrase",
    }).then(res => res.passphrase.trim() || '');
    if (walletData.address && walletData.address.startsWith("inj")) {
      // Its an injective wallet and key is stored using crypto AES encyrpt method
      const key = Crypto.AES.decrypt(walletData.key, passphrase);
      let privKey = key.toString(Crypto.enc.Utf8);
      if (privKey.startsWith('0x')) {
        privKey = privKey.substring(2);
      }
      walletData.key = await Wallet.encrypt(privKey, passphrase);
      walletData.type = "private_key";
    } else {
      const wallet = await DirectSecp256k1HdWallet.deserialize(
        walletData.key,
        passphrase
      );
      walletData.key = await Wallet.encrypt(wallet.mnemonic, passphrase);
      walletData.type = "phrase";
    }
    walletData.address = undefined;
    walletData.chainId = undefined;
    try {
      const prefix = config.get("chain.addressPrefix");
      const wallet = newWallet(
        name,
        walletData.key,
        prefix,
        getCoinTypeFromPrefix(prefix)
      );
      const address = await wallet.getAddress(passphrase);
      walletData.addresses = {
        [prefix]: address
      }
      return walletData;
    } catch (err) {
      console.log(err)
      console.log("Unable to migrate, either you have entered wrong passphrase or data is corrupted");
      return undefined
    }
  }

  /**
   * All stored legacy wallets
   * @deprecated will be removed in next version update
   * @returns StoredWalletData[]
   */
  get legacyWallets() {
    try {
      const storedData = this.storageData;
      return storedData.wallets.filter((w) => this.isLegacyWallet(w));
    } catch (error) {
      return [];
    }
  }

  /**
 * All stored legacy wallets
 * @deprecated will be removed in next version update
 * @returns StoredWalletData[]
 */
  async removeLegacyWallet(name: string) {
    const storedData = this.storageData;
    storedData.wallets = storedData.wallets.filter(wallet => !(wallet.name === name && this.isLegacyWallet(wallet)))
    this.storageData = storedData;
    await this.removeKeychain(name)
  }

  /**
   * Gets the fee denom by removing numeric values from the defaultFee config
   * @returns fee denom string
   */
  static get feeDenom() {
    const fee = config.get("chain.defaultFee");
    return fee.replaceAll(/\d/g, "").replaceAll(".", "");
  }
}
