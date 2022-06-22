import fs from "fs";
import path from "path";
import os from "os";

export const CONFIG_DIRECTORY =
  process.env.ANDR_CONFIG_DIR ?? path.join(os.homedir(), ".andr-cli"); //TODO: Make work on non-UNIX

if (!fs.existsSync(CONFIG_DIRECTORY)) {
  fs.mkdirSync(CONFIG_DIRECTORY);
}

export function loadStorageFile(file: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${file} does not exist`);
  }

  return fs.readFileSync(filePath);
}

export function writeStorageFile(file: string, data: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  fs.writeFileSync(filePath, data);
}

export function addExitHandler(exitHandler: NodeJS.ExitListener) {
  //do something when app is closing
  process.on("exit", exitHandler);

  //catches ctrl+c event
  process.on("SIGINT", exitHandler);

  // catches "kill pid" (for example: nodemon restart)
  process.on("SIGUSR1", exitHandler);
  process.on("SIGUSR2", exitHandler);

  //catches uncaught exceptions
  process.on("uncaughtException", exitHandler);
}
