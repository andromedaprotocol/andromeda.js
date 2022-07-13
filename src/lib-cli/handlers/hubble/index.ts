import {
  displaySpinnerAsync,
  logTableConfig,
  validateOrRequest,
} from "../../common";
import { Commands } from "../../types";
import { hubble } from "@andromeda/andromeda-js";
import chalk from "chalk";
import Table from "cli-table";

const log = console.log;

const commands: Commands = {
  app: {
    handler: appHandler,
    usage: "hubble app <contract address?>",
    color: chalk.blue,
    description: "Queries details about an app",
  },
};

async function appHandler(input: string[]) {
  let [address] = input;
  address = await validateOrRequest(
    "Input the app contract address:",
    address,
    (input: string) => input.length > 0
  );

  const { app } = await displaySpinnerAsync(
    "Searching the Cosmos...",
    async () => await hubble.app.queryApp(address)
  );

  const {
    config: { name, owner },
    getAddresses,
    getComponents,
  } = app;

  const getAdoType = (name: string) => {
    const comp = getComponents.find((comp) => comp.name === name);

    return comp ? comp.ado_type : "<unknown>";
  };

  log(`${chalk.bold("Owner:")} ${owner}`);
  log(`${chalk.bold("App Name:")} ${name}`);
  log();
  const componentTable = new Table(logTableConfig);
  log(chalk.bold("Components"));
  getAddresses.forEach((comp) => {
    componentTable.push([comp.name, getAdoType(comp.name), comp.address]);
  });
  log(componentTable.toString());
}

export default commands;
