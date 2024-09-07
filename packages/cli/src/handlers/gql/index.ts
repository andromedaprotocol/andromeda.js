import { queryApp, queryAssets } from "@andromedaprotocol/andromeda.js";
import Table from "cli-table";
import pc from "picocolors";
import { displaySpinnerAsync, logTableConfig } from "../../common";
import State from "../../state";
import { Commands, Flags } from "../../types";
import { validateAddressInput } from "../utils";


const commands: Commands = {
    app: {
        handler: appHandler,
        usage: "gql app <contract address>",
        color: pc.green,
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
        color: pc.blue,
        disabled: () => typeof State.wallets.currentWallet === "undefined",
        description:
            "Queries details about your deployed apps and ADOs for the current chain",
        flags: {
            type: {
                description: "Filter assets by ADO type",
                usage: "--type cw721",
            },
            search: {
                description: "Filter assets by name",
                usage: "--search name",
            },
            limit: {
                description: "Paginate response, 0 mean no limit",
                usage: "--limit 10",
            },
            offset: {
                description: "Paginate response",
                usage: "--offset 0",
            },
        },
    }
};



/**
 * Prints an app by a given address in table format
 * @param input
 */
async function appHandler(input: string[]) {
    let [address] = input;
    try {
        const app = await displaySpinnerAsync(
            "Searching the Cosmos...",
            async () => await queryApp(address)
        );

        const {
            config: { name, owner },
            components,
        } = app;

        console.log("");
        console.log(`${pc.bold("Owner:")} ${owner}`);
        console.log(`${pc.bold("App Name:")} ${name}`);
        console.log();
        const componentTable = new Table(logTableConfig);
        console.log(pc.bold("Components:\n"));
        componentTable.push(["Name", "ADO Type", "Address", "Component Type"].map(l => pc.bold(l)));
        components.forEach((comp) => {
            componentTable.push([pc.bold(comp.name), comp.ado_type, comp.address, comp.type]);
        });
        console.log(componentTable.toString());
    } catch (error) {
        const { message } = error as Error;
        if (message.includes(":")) {
            console.error(pc.red(message.split(":")[0]));
        } else {
            console.error(pc.red(message));
        }
    }
}

/**
 * Prints all ADOs/assets owned by the current wallet
 * @param _input
 * @param flags
 */
async function assetsHandler(_input: string[], flags: Flags) {
    const walletAddr = await State.wallets.currentWalletAddress();
    if (!walletAddr) throw new Error("No wallet currently assigned");
    const { type, search } = flags;

    const limit = parseInt(flags.limit ?? '10');
    const offset = parseInt(flags.offset ?? '0');
    const assets = await displaySpinnerAsync(
        "Searching the Cosmos...",
        async () => await queryAssets(walletAddr, limit, offset, IAndrOrderBy.DESC, search, type)
    );

    const assetsTable = new Table({
        ...logTableConfig,
    });
    assetsTable.push([
        pc.bold("Address"),
        pc.bold("Name"),
        pc.bold("ADO Type"),
        pc.bold("App Contract"),
    ]);
    assets.forEach((asset) => {
        assetsTable.push([asset.address, asset.name ?? "", asset.adoType, asset.appContract ?? ""]);
    });

    console.log()
    console.log(assetsTable.toString());
    console.log()
    console.log(pc.gray(`Limit - ${limit}, Offset - ${offset}`))
    console.log()
}

enum IAndrOrderBy {
    ASC = "Asc",
    DESC = "Desc"
}

export default commands;
