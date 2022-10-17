import { Wallet } from "@andromeda/andromeda-js";
import inquirer from "inquirer";
import keychain from "keytar";
import config from "../config";
import { exitInputs } from "..";
import {
  loadStorageFile,
  storageFileExists,
  writeStorageFile,
} from "../config/storage";

const STORAGE_FILE = "keys.json";

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
 * Used to store wallets based on Chain IDs and Mnemonics
 */
export default class WalletStore {
  static keyChainService = "andr-cli";
  protected passphrases: Record<string, string> = {};

  constructor() {
    if (!storageFileExists(STORAGE_FILE))
      writeStorageFile(
        STORAGE_FILE,
        JSON.stringify({ wallets: [], defaults: {} })
      );
  }

  get CLIPrefix() {
    const wallet = this.currentWallet;
    return wallet ? wallet.name : "";
  }

  protected get storageData(): StoredData {
    const walletsJSON = loadStorageFile(STORAGE_FILE);
    return JSON.parse(walletsJSON.toString());
  }

  get wallets() {
    try {
      const storedData = this.storageData;

      return storedData.wallets;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  protected set wallets(wallets: StoredWalletData[]) {
    const newData = {
      ...this.storageData,
      wallets,
    };

    writeStorageFile(STORAGE_FILE, JSON.stringify(newData));
  }

  get defaultWallets() {
    return this.storageData.defaults;
  }

  protected set defaultWallets(defaultWallets: Record<string, string>) {
    const newData = {
      ...this.storageData,
      defaults: defaultWallets,
    };

    writeStorageFile(STORAGE_FILE, JSON.stringify(newData));
  }

  get currentWallet() {
    const walletName = this.defaultWallets[config.get("chain.chainId")];
    const wallet = this.getWalletByName(walletName);

    return wallet;
  }

  storeWalletData(walletData: StoredWalletData) {
    this.wallets = [...this.wallets, walletData];
  }

  getChainIdByDefaultWallet(name: string) {
    const defaults = this.defaultWallets;
    const chainIds = Object.keys(defaults);

    return chainIds.find((chainId) => defaults[chainId] === name);
  }

  /**
   * Adds a wallet by mnemonic and chain ID
   * @param mnemonic
   * @param chainId
   */
  async generateWallet(
    chainId: string,
    name: string,
    passphrase: string,
    mnemonic?: string
  ) {
    const wallets = this.wallets;
    if (wallets.some(({ name: walletName }) => walletName === name))
      throw new Error("Wallet name already in use");

    const trimmedChainId = chainId.trim();
    if (trimmedChainId.length === 0) throw new Error("Invalid Chain ID");

    const addressPrefix = config.get("chain.addressPrefix");
    const newWallet = mnemonic
      ? await Wallet.fromMnemonic(name, mnemonic, passphrase, addressPrefix)
      : await Wallet.generate(name, passphrase);

    await keychain.setPassword("andr-cli", name, passphrase);
    const address = await newWallet.getAddress(passphrase);

    this.storeWalletData({ name, address, chainId, key: newWallet.key });

    return newWallet;
  }

  /**
   * Removes a wallet by its name/address for a given Chain ID
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

    this.wallets = this.wallets.filter(
      (_wallet) => _wallet.name !== wallet!.name
    );

    const chainId = this.getChainIdByDefaultWallet(wallet.name);
    if (chainId) {
      this.onRemoveDefaultWallet(chainId);
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
  getWallet(identifier: string) {
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

    return new Wallet(name, walletData.key);
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
    return new Wallet(walletData.name, walletData.key);
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

    if (wallets.length > 0) {
      this.setDefaultWallet(chainId, wallets[0].name);
    }
  }

  async getWalletPassphrase(name: string) {
    const wallet = this.getWalletByName(name);
    if (!wallet) throw new Error(`Wallet not found with name ${name}`);
    let passphrase = await keychain.getPassword(
      WalletStore.keyChainService,
      name
    );
    if (!passphrase) {
      const passphraseValue = await inquirer.prompt({
        message: `Input passphrase for wallet ${name}:`,
        validate: async (input: string) => {
          try {
            if (exitInputs.includes(input)) return true;
            await wallet.getAddress(input);
            return true;
          } catch (error) {
            return false;
          }
        },
        type: "password",
        name: "passphrase",
      });
      passphrase = passphraseValue.passphrase;
      if (passphrase && exitInputs.includes(passphrase))
        throw new Error("Prompt exited");
    }

    return passphrase ?? "";
  }
}
