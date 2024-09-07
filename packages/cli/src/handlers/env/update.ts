import pc from "picocolors";
import { Commands } from "../../types";
import { envConfig, loadEnv, renameEnv } from "../../config";
import state from "../../state/State";
import { title } from "cmd";
import { writeStorageFile } from "config/storage";

const commands: Commands = {
    gql: {
        handler: updateHandler,
        usage: "env use",
        color: pc.blue,
        description:
            "Change CLI environment",
        inputs: [
            {
                requestMessage: "GQL Endpoint: ",
                default: async () => envConfig.get('gql')
            }
        ],
    },
    name: {
        handler: updateHandler,
        usage: "env use",
        color: pc.blue,
        description:
            "Update env config",
        inputs: [
            {
                requestMessage: "New Name: ",
                default: async () => envConfig.get('name')
            }

        ],
    },
    schema: {
        handler: updateHandler,
        usage: "env use",
        color: pc.blue,
        description:
            "Update env config",
        inputs: [
            {
                requestMessage: "Schema API Endpoint: ",
                default: async () => envConfig.get('schema')
            }
        ],
    },
};


async function updateHandler(input: string[]) {
    const [key, value] = input;
    if (key === 'name') {
        renameEnv(envConfig.get('name'), value);
    }
    envConfig.set(key, value);
    writeStorageFile(envConfig.get('name'), 'env.json', JSON.stringify(envConfig.getProperties()));
    await loadEnv(envConfig.get('name'));
    state.refresh();
    await state.connectClient();
    await title();
}



export default commands;
