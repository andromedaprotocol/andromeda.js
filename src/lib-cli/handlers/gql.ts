import { queryApp, queryAssets } from "@andromeda/andromeda-js";
import chalk from "chalk";
import Table from "cli-table";
import config from "../config";
import { displaySpinnerAsync, logTableConfig } from "../common";
import { Commands, Flags } from "../types";
import { getCurrentWallet } from "./wallets";
import { validateAddressInput } from "./utils";

const log = console.log;

const commands: Commands = {
  app: {
    handler: appHandler,
    usage: "gql app <contract address?>",
    color: chalk.green,
    description: "Queries details about an app",
    inputs: [
      {
        requestMessage: "Input the Address:",
        validate: validateAddressInput,
      },
    ],
  },
  assets: {
    handler: assetsHandler,
    usage: "gql assets",
    color: chalk.blue,
    description:
      "Queries details about your deployed apps and ADOs for the current chain",
    flags: {
      type: {
        description: "Filter assets by ADO type",
        usage: "--type cw721",
      },
    },
  },
};

async function appHandler(input: string[]) {
  let [address] = input;
  try {
    const { app } = await displaySpinnerAsync(
      "Searching the Cosmos...",
      async () => await queryApp(address)
    );

    const {
      config: { name, owner },
      addresses,
      components,
    } = app;

    const getAdoType = (name: string) => {
      const comp = components.find((comp) => comp.name === name);

      return comp ? comp.ado_type : "<unknown>";
    };

    log(`${chalk.bold("Owner:")} ${owner}`);
    log(`${chalk.bold("App Name:")} ${name}`);
    log();
    const componentTable = new Table(logTableConfig);
    log(chalk.bold("Components"));
    addresses.forEach((comp) => {
      componentTable.push([comp.name, getAdoType(comp.name), comp.address]);
    });
    log(componentTable.toString());
  } catch (error) {
    const { message } = error as Error;
    if (message.includes(":")) {
      console.error(chalk.red(message.split(":")[0]));
    } else {
      console.error(chalk.red(error));
    }
  }
}

async function assetsHandler(_input: string[], flags: Flags) {
  const wallet = getCurrentWallet();
  const walletAddr = await wallet.getFirstOfflineSigner(
    config.get("chain.chainId")
  );
  const { type } = flags;

  const assets = await displaySpinnerAsync(
    "Searching the Cosmos...",
    async () => await queryAssets(walletAddr, 0, 0)
  );

  const assetsTable = new Table({
    ...logTableConfig,
  });
  assetsTable.push([
    chalk.bold("Address"),
    chalk.bold("ADO Type"),
    chalk.bold("App Contract"),
  ]);
  assets.forEach((asset) => {
    if (type && asset.adoType !== type) return;
    assetsTable.push([asset.address, asset.adoType, asset.appContract ?? ""]);
  });

  log(assetsTable.toString());
}

export default commands;
