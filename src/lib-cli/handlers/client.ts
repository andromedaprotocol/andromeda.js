import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import config from "../config";
import AndromedaClient from "../../andr-js";
import { displaySpinnerAsync } from "../common";
import { GasPrice } from "@cosmjs/stargate";
import chalk from "chalk";

export const client = new AndromedaClient();

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
          .then(() => resolve(undefined));
        setTimeout(
          () => reject(chalk.red("Client connection timed out")),
          30000
        );
      })
  );
}

export default client;
