import AndromedaClient from "@andromedaprotocol/andromeda.js";
import { GasPrice } from "@cosmjs/stargate";
import WalletStore from "./WalletStore";
import pc from "picocolors";
import config from "../config";
import axios from "axios";
import ADOSchemaAPI from "@andromedaprotocol/andromeda.js/dist/api/ADOSchemaAPI";
import { getCurrentPackage } from "utils/npm";

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
    const { chainUrl, defaultFee, addressPrefix, kernelAddress: _kernelAddress, chainId } =
      config.get("chain");

    const pkgVersion = await getCurrentPackage().version;
    const overrideKernels: Array<string> = await axios.get(`${ADOSchemaAPI.SCHEMA_BASE_URL}/kernel/${pkgVersion}`).then(res => res.data.kernels || []).catch(_ => []);
    const kernelAddress = overrideKernels.find(k => k.startsWith(addressPrefix)) || _kernelAddress;

    const { client, wallets } = this;

    const currentWallet = wallets.currentWallet;
    const passphrase = currentWallet
      ? await wallets.getWalletPassphrase(currentWallet.name, chainId)
      : "";
    const signer = currentWallet
      ? await currentWallet.getWallet(passphrase)
      : undefined;

    return await new Promise((resolve, reject) => {
      client
        .connect(chainUrl, kernelAddress, addressPrefix, signer, {
          gasPrice: GasPrice.fromString(defaultFee),
        })
        .then(() => resolve(undefined))
        .catch((err: any) => {
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
