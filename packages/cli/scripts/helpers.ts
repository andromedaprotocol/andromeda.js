/**
 * THESE SCRIPTS ARE NOT WORKING WHEN USED WITH NVM. NORMAL NPM INSTALLATION IS WORKING.
 * WORKAROUND IS TO USE NODEMON TO RUN CLI LOCALLY
 */


import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path';
import { cwd } from 'process';
import packageJson from '../package.json'

const LOCAL_NAME = packageJson.name + '-local'

export function uninstall() {
    execSync(`npm rm --global ${LOCAL_NAME}`);
}


export function install() {
    const packagePath = path.join(cwd(), 'package.json')
    const tmpPackagePath = path.join(cwd(), 'tmp.package.json')
    const buildPackagePath = path.join(cwd(), 'build.package.json')

    fs.copyFileSync(packagePath, tmpPackagePath);
    try {
        packageJson.name = LOCAL_NAME
        packageJson.bin = {
            // @ts-ignore
            'local-andr': packageJson.bin.andr
        } as any;

        fs.writeFileSync(packagePath, JSON.stringify(packageJson, undefined, 2));
        fs.copyFileSync(packagePath, buildPackagePath);

        uninstall()
        execSync("ANDR_CONFIG_DIR='.local-andr-cli' npm run build")
        execSync('npm link')

    } catch (err) {
        console.error(err)
    }

    fs.copyFileSync(tmpPackagePath, packagePath);
    fs.rmSync(tmpPackagePath)
}