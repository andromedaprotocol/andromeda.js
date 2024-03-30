#!/usr/bin/env node

import { getCurrentPackage } from 'utils/npm';
import pc from "picocolors";

import('./cliBase').then(base => base.start()).catch(err => {
    console.log(pc.red("\nOOPS! Looks like the program crashed"));
    console.log(pc.cyan("Report your error at https://github.com/andromedaprotocol/andromeda.js"));
    const version = getCurrentPackage().version;
    console.log(pc.red("\nError Log:"))
    const versionMsg = pc.yellow("CLI version - v" + version);
    console.log(versionMsg);
    console.debug(err);
    console.log("\n");
});