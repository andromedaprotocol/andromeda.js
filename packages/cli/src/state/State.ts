import AndromedaClient from "@andromedaprotocol/andromeda.js";
import { GasPrice } from "@cosmjs/stargate";
import WalletStore from "./WalletStore";
import pc from "picocolors";
import config, { envConfig } from "../config";
import { displaySpinnerAsync } from "common";


/**
 * A class to store the current CLI state including the Andromeda Client used and any wallet related info
 */
export class State {
  // The Andromeda Client providing connection to the current chain
  public client: AndromedaClient = new AndromedaClient({ schemaUrl: envConfig.get('schema') });
  // The wallets stored and used by the CLI
  public wallets: WalletStore = new WalletStore();

  refresh() {
    this.client.disconnect();
    this.client = new AndromedaClient({ schemaUrl: envConfig.get('schema') });
  }

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
  public async connectClient(passphrase?: string) {
    const { chainUrl, defaultFee, addressPrefix, kernelAddress } =
      config.get("chain");

    const { client, wallets } = this;

    const currentWallet = wallets.currentWallet;
    if (!passphrase) {
      passphrase = currentWallet
        ? await wallets.getWalletPassphrase(currentWallet.name)
        : "";
    }
    const signer = currentWallet
      ? await currentWallet.getWallet(passphrase)
      : undefined;
    const address = await wallets.currentWalletAddress(passphrase);
    console.log("Wallet Address - ", address);
    return await displaySpinnerAsync(
      "Connecting Client...",
      () => new Promise<void>((resolve, reject) => {
        client
          .connect(chainUrl, kernelAddress, addressPrefix, signer as any, {
            gasPrice: GasPrice.fromString(defaultFee),
          })
          .then(() => resolve())
          .catch((err: any) => {
            console.error(err);
            resolve();
          });
        // Set timeout for client connection
        setTimeout(() => reject(pc.red("Client connection timed out")), 30000);
      })
    );
  }
}

const state = new State();

export default state;
