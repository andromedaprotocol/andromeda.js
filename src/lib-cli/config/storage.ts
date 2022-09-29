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

export function storageFileExists(file: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  return fs.existsSync(filePath);
}

const exitHandlers: (() => void)[] = [];

function addExitListener() {
  const listener = () => {
    exitHandlers.forEach((handler) => handler());
    process.exit(0);
  };

  const events = [
    "exit",
    "SIGINT",
    "SIGTSTP",
    "SIGUSR1",
    "SIGUSR2",
    "uncaughtException",
  ];

  events.forEach((ev) => {
    try {
      process.on(ev, listener);
    } catch (error) {
      console.error(error);
    }
  });
}

addExitListener();

export function addExitHandler(exitHandler: () => void) {
  exitHandlers.push(exitHandler);
}
