import axios from 'axios';
export async function getLatestNpmVersion() {
    return axios
        .get(`https://registry.npmjs.org/@andromedaprotocol/cli`, {
            headers: {
                'Accept': 'application/vnd.npm.install-v1+json'
            }
        })
        .then(res => {
            return res.data
        })
        .then(data => data['dist-tags'].latest as string)
}

export function getCurrentPackage() {
    const npmPackage = require("../../package.json");
    return npmPackage as {
        version: string;
        [index: string]: any;
    };
}