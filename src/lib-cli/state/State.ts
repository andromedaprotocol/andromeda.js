import AndromedaClient from "@andromeda/andromeda-js";
import { GasPrice } from "@cosmjs/stargate";
import WalletStore from "./WalletStore";
import pc from "picocolors";
import config from "../config";

/**
 * A class to store the current CLI state including the Andromeda Client used and any wallet related info
 */
export class State {
  // The Andromeda Client providing connection to the current chain
  public client: AndromedaClient = new AndromedaClient();
  // The wallets stored and used by the CLI
  public wallets: WalletStore = new WalletStore();

  /**
   * What is printed before the command prompt
   */
  get CLIPrefix() {
    const chainId = config.get("chain.chainId");
    const connectedStatus = this.client.isConnected
      ? ""
      : pc.red("<DISCONNECTED>");
    const walletStatus = this.wallets.CLIPrefix;

    return `${walletStatus}@${chainId}${connectedStatus}`;
  }

  /**
   * Connects the Andromeda Client to chain. Has a default timeout to prevent infinite awaiting.
   */
  public async connectClient() {
    const { chainUrl, registryAddress, defaultFee } = config.get("chain");
    const { client, wallets } = this;

    const currentWallet = wallets.currentWallet;
    const passphrase = currentWallet
      ? await wallets.getWalletPassphrase(currentWallet.name)
      : "";
    const signer = currentWallet
      ? await currentWallet.getWallet(passphrase)
      : undefined;

    return await new Promise((resolve, reject) => {
      client
        .connect(chainUrl, registryAddress, signer, {
          gasPrice: GasPrice.fromString(defaultFee),
        })
        .then(() => resolve(undefined))
        .catch((err) => {
          console.error(err);
          resolve(undefined);
        });
      // Set timeout for client connection
      setTimeout(() => reject(pc.red("Client connection timed out")), 30000);
    });
  }
}

const state = new State();

export default state;
