import { getGQLSdkUri, setGQLSdkUri } from "@andromedaprotocol/andromeda.js";
import pc from "picocolors";
import { Commands } from "../../types";
import { GQL_URLS } from "@andromedaprotocol/andromeda.js";

const commands: Commands = {
    get: {
        description: "Gets current graphql url",
        usage: "gql url get",
        handler: getUrlHandler,
        color: pc.white,
    },
    set: {
        description: "Sets current graphql url",
        usage: "gql url set <url>",
        handler: setUrlHandler,
        color: pc.white,
        inputs: [
            {
                requestMessage: "Input the URL to use:",
                options: async () => {
                    return Object.keys(GQL_URLS).map((network) => network);
                },
            },
        ],
    },
};


/**
 * Prints the current chain's ADO DB contract address
 */
async function getUrlHandler() {
    const url = getGQLSdkUri();
    console.log(url);
}

/**
 * Prints the current chain's ADO DB contract address
 */
async function setUrlHandler(input: string[]) {
    const [urlOrName] = input;
    const url: string = GQL_URLS[urlOrName as keyof typeof GQL_URLS] || urlOrName;
    setGQLSdkUri(url);
    console.log(`GQL Url set to - ${url}`);
}


export default commands;
