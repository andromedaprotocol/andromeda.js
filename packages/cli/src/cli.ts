#!/usr/bin/env node
import('./cliBase').then(base => base.start()).catch(err => {
    console.log("OOPS! Looks like the program crashed");
    console.log("Report your error at https://github.com/andromedaprotocol/andromeda.js");
    console.log("Error Log:")
    console.debug(err);
});