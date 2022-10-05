/**
 * This file provides several functions used to store and load any configs or wallets used by the CLI
 */
import fs from "fs";
import path from "path";
import os from "os";

/**
 * Where the config files are stored.
 * *Note: Currently only supports UNIX file system*
 */
export const CONFIG_DIRECTORY =
  process.env.ANDR_CONFIG_DIR ?? path.join(os.homedir(), ".andr-cli"); //TODO: Make work on non-UNIX

if (!fs.existsSync(CONFIG_DIRECTORY)) {
  fs.mkdirSync(CONFIG_DIRECTORY);
}

/**
 * Loads a stored file
 * @param file The path to the file to load
 * @returns A buffer containing the file data
 */
export function loadStorageFile(file: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${file} does not exist`);
  }

  return fs.readFileSync(filePath);
}

/**
 * Writes to s a stored file
 * @param file The path of where to write the data
 * @param data The data to write
 */
export function writeStorageFile(file: string, data: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  fs.writeFileSync(filePath, data);
}

/**
 * Checks if a stored file exists
 * @param file The file to check for
 * @returns
 */
export function storageFileExists(file: string) {
  const filePath = path.join(CONFIG_DIRECTORY, file);
  return fs.existsSync(filePath);
}

/**
 * Handlers to call when the CLI is exited
 */
const exitHandlers: (() => void)[] = [];

/**
 * Adds an exit listener to each possible 'exit' event
 */
function addExitListener() {
  const listener = () => {
    exitHandlers.forEach((handler) => handler());
    process.exit(0);
  };

  //All possible exit events
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

// Adds the exit listener on startup
addExitListener();

/**
 * Add another handler for when the CLI exits. Handlers are added to an array that is checked by the listener upon exiting.
 * @param exitHandler
 */
export function addExitHandler(exitHandler: () => void) {
  exitHandlers.push(exitHandler);
}
