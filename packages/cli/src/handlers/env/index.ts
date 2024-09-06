import pc from "picocolors";
import { Commands } from "../../types";
import { envConfig, loadEnv } from "../../config";
import state from "../../state/State";
import { title } from "cmd";


const commands: Commands = {
    use: {
        handler: useHandler,
        usage: "env use",
        color: pc.blue,
        description:
            "Change CLI environment",
        inputs: [
            {
                requestMessage: "Input the URL to use:",
                options: async () => {
                    return envConfig.get('envs');
                },
            },
        ],
    },
};


async function useHandler(input: string[]) {
    const [env] = input;
    loadEnv(env);
    state.refresh();
    await state.connectClient();
    console.clear();
    await title();
}



export default commands;
