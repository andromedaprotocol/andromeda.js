import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import config from "../config";
import AndromedaClient from "@andromeda/andromeda-js";
import { displaySpinnerAsync } from "../common";
import { GasPrice } from "@cosmjs/stargate";
import chalk from "chalk";

export const client = new AndromedaClient();

/**
 * Connects Andromeda Client using the current config with the provided signer. Connects a query client if no signer provided.
 */
export async function connectClient(signer?: DirectSecp256k1HdWallet) {
  const { chainUrl, registryAddress, defaultFee } = config.get("chain");
  await displaySpinnerAsync(
    "Connecting client...",
    async () =>
      await new Promise((resolve, reject) => {
        client
          .connect(chainUrl, registryAddress, signer, {
            gasPrice: GasPrice.fromString(defaultFee),
          })
          .then(() => resolve(undefined))
          .catch((err) => {
            console.error(err);
            resolve(undefined);
          });
        setTimeout(
          () => reject(chalk.red("Client connection timed out")),
          30000
        );
      })
  );
}

export default client;
