import pc from "picocolors";
import { Commands } from "../../types";
import { createEnv, DEFAULT_ENVS, envConfig, getAllEnvs, loadEnv, removeEnv, renameEnv } from "../../config";
import state from "../../state/State";
import { promptWithExit, title } from "cmd";
import { loadStorageFile, writeStorageFile } from "config/storage";
import Table from "cli-table";
import { logTableConfig } from "common";

type IEnvConfigKeys = keyof ReturnType<typeof envConfig.getProperties>;

const ALLOWED_UPDATE_FIELDS = ["gql", "schema"] as IEnvConfigKeys[];

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
                    return getAllEnvs().filter((env) => env !== envConfig.get("name"));
                },
            },
        ],
    },
    list: {
        handler: listHandler,
        usage: "env list",
        color: pc.blue,
        description:
            "List all environments",
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
    rename: {
        handler: renameHandler,
        usage: "env rename <name>",
        color: pc.yellow,
        description: "Rename env",
        inputs: [
            {
                requestMessage: "Select env: ",
                options: getAllEnvs().filter((env) => !Object.values(DEFAULT_ENVS).includes(env as DEFAULT_ENVS)),
            },
            {
                requestMessage: "Enter new name: ",
                validate: (input: string) => {
                    const exists = getAllEnvs().includes(input);
                    if (exists) {
                        console.log(pc.red("Env already exists!"));
                        return false;
                    }
                    return true;
                }
            }
        ],
    },
    remove: {
        handler: removeHandler,
        usage: "env remove <name>",
        color: pc.yellow,
        description: "Remove env",
        inputs: [
            {
                requestMessage: "Enter env to remove: ",
                options: getAllEnvs().filter((env) => env !== envConfig.get("name") && !Object.values(DEFAULT_ENVS).includes(env as DEFAULT_ENVS)),
            },
        ],
    },
    create: {
        handler: createHandler,
        usage: "env create <name>",
        color: pc.yellow,
        description: "Create env",
        inputs: [
            {
                requestMessage: "Env Name: ",
                validate: (input: string) => {
                    const exists = getAllEnvs().includes(input);
                    if (exists) {
                        console.log();
                        console.log(pc.red("Env already exists!"));
                        return false;
                    }
                    return true;
                }
            },
            {
                requestMessage: "GQL Url: ",
                validate: (input: string) => {
                    if (!input.startsWith("http")) {
                        console.log();
                        console.log(pc.red("Invalid GQL Url!"));
                        return false;
                    }
                    return true;
                },
                default: envConfig.get('gql')
            },
            {
                requestMessage: "Schema Url: ",
                validate: (input: string) => {
                    if (!input.startsWith("http")) {
                        console.log();
                        console.log(pc.red("Invalid Schema Url!"));
                        return false;
                    }
                    return true;
                },
                default: envConfig.get('schema')
            },
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
    await loadEnv(env);
    state.refresh();
    await state.connectClient();
    console.clear();
    await title();
}

/**
 * Lists all environments
 * @param input - Not used
 */
async function listHandler(_input: string[]) {
    const envs = getAllEnvs();
    console.log();
    const infoTable = new Table(logTableConfig);
    infoTable.push([pc.bold("Name"), pc.bold(pc.green("GQL")), pc.bold(pc.green("Schema Url"))]);

    envs.forEach((env) => {
        const envData = JSON.parse(loadStorageFile(env, "env.json").toString()) as ReturnType<typeof envConfig.getProperties>;
        const data = [pc.bold(env), pc.bold(envData.gql), pc.bold(envData.schema)]
        infoTable.push(env === envConfig.get("name") ? data.map(d => pc.green(d)) : data);
    })

    console.log(infoTable.toString());
    console.log();
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
 * Renames an environment
 * @param input - The environment to rename and the new name
 */
async function renameHandler(input: string[]) {
    const [env, newName] = input;
    renameEnv(env, newName);
    if (envConfig.get("name") === env) {
        await loadEnv(newName);
        state.refresh();
        await state.connectClient();
        await title();
    }
}

/**
 * Removes an environment
 * @param input - The environment to remove
 */
async function removeHandler(input: string[]) {
    const [name] = input;

    const confirm = await promptWithExit({
        type: "confirm",
        name: "confirmremove",
        message: `This action is irreversible! Are you sure you want to remove env ${name}?`,
    });

    if (!confirm.confirmremove) return;
    removeEnv(name);
    console.log(pc.green("Env removed!"));
}


/**
 * Creates an environment
 * @param input - The name, gql and schema url
 */
async function createHandler(input: string[]) {
    const [name, gql, schema] = input;

    createEnv(name, { gql, schema });
    await loadEnv(name);
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
