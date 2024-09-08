import pc from "picocolors";
import { Commands } from "../../types";
import { envConfig, loadEnv, renameEnv } from "../../config";
import state from "../../state/State";
import { title } from "cmd";
import { writeStorageFile } from "config/storage";
import Table from "cli-table";
import { logTableConfig } from "common";

type IEnvConfigKeys = keyof ReturnType<typeof envConfig.getProperties>;

const ALLOWED_UPDATE_FIELDS = ["gql", "name", "schema"] as IEnvConfigKeys[];

const commands: Commands = {
    use: {
        handler: useHandler,
        usage: "env use",
        color: pc.blue,
        description:
            "Change CLI environment",
        inputs: [
            {
                requestMessage: "Select env to use: ",
                options: async () => {
                    return envConfig.get('envs');
                },
            },
        ],
    },
    update: {
        handler: updateHandler,
        usage: "env update <key> <value>",
        color: pc.yellow,
        description: "Update env config",
        inputs: [
            {
                requestMessage: "Select Field: ",
                options: ALLOWED_UPDATE_FIELDS
            },
            {
                requestMessage: "Enter Value: ",
            }
        ]
    },
    print: {
        handler: printHandler,
        color: pc.white,
        description: "Displays current env config",
        usage: "env show",
    },
};

/**
 * Changes the current environment
 * @param input - The environment to use
 */
async function useHandler(input: string[]) {
    const [env] = input;
    loadEnv(env);
    state.refresh();
    await state.connectClient();
    console.clear();
    await title();
}

/**
 * Updates the current environment
 * @param input - The key and value to update
 */
async function updateHandler(input: string[]) {
    const [key, value] = input;
    if (!ALLOWED_UPDATE_FIELDS.includes(key.trim() as typeof ALLOWED_UPDATE_FIELDS[number])) {
        console.log(pc.red("Invalid key!"));
        return;
    }
    if (key === "name") {
        renameEnv(envConfig.get("name"), value);
    }
    envConfig.set(key, value);
    writeStorageFile(
        envConfig.get("name"),
        "env.json",
        JSON.stringify(envConfig.getProperties())
    );
    await loadEnv(envConfig.get("name"));
    state.refresh();
    await state.connectClient();
    await title();
}


/**
 * Prints the entire config
 */
async function printHandler() {
    const schema = envConfig.getSchema();
    const configTable = new Table(logTableConfig);
    const keys = Object.keys(schema._cvtProperties) as IEnvConfigKeys[];
    keys.forEach((key) => {
        const val = envConfig.get(key);
        configTable.push([
            key as string,
            val && (typeof val !== "string" || val.length > 0)
                ? (val as string)
                : "<unset>",
            (schema._cvtProperties[key] as any)?.['doc'] ?? "",
        ]);
    });

    console.log(pc.green("Current env config"));
    console.log();
    console.log(configTable.toString());
    console.log();
}


export default commands;
