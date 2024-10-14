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
export function loadStorageFile(env: string, file: string) {
  return loadFile(path.join(CONFIG_DIRECTORY, env, file));
}

/**
 * Writes to a stored file
 * @param env TThe environment directory where the file will be stored
 * @param file The path of where to write the data
 * @param data The data to write
 */
export function writeStorageFile(env: string, file: string, data: string) {
  writeFile(path.join(CONFIG_DIRECTORY, env), file, data);
}

/**
 * Checks if a stored file exists
 * @param env The environment directory where the file is stored
 * @param file The file to check for
 * @returns
 */
export function storageFileExists(env: string, file: string) {
  return pathExists(path.join(CONFIG_DIRECTORY, env, file));
}


/**
 * Checks if a root file exists
 * @param file The file to check for
 * @returns
 */
export function rootFileExists(file: string) {
  return pathExists(path.join(CONFIG_DIRECTORY, file));
}

/**
 * Loads a root file
 * @param file The path to the file to load
 * @returns A buffer containing the file data
 */
export function loadRootFile(file: string) {
  return loadFile(path.join(CONFIG_DIRECTORY, file));
}

/**
 * Writes to a root file
 * @param file The path of where to write the data
 * @param data The data to write
 */
export function writeRootFile(file: string, data: string) {
  try {
    writeFile(CONFIG_DIRECTORY, file, data);
  } catch (error) {
    console.error(`Error writing to root file '${file}':`, error);
    throw error;
  }
}


/**
 * Loads a stored file
 * @param file The path to the file to load
 * @returns A buffer containing the file data
 */
function loadFile(filePath: string) {
  if (!pathExists(filePath)) {
    throw new Error(`File ${filePath} does not exist`);
  }
  return fs.readFileSync(filePath);
}

/**
 * Writes to s a stored file
 * @param file The path of where to write the data
 * @param data The data to write
 */
function writeFile(dirPath: string, file: string, data: string) {
  if (!pathExists(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true })
    } catch (error: any) {
      throw new Error(`Failed to create directory ${dirPath}: ${error?.message}`)
    }
  }
  const filePath = path.join(dirPath, file);
  fs.writeFileSync(filePath, data);
}

/**
 * Checks if a stored file exists
 * @param path The file to check for
 * @returns
 */
function pathExists(path: string) {
  return fs.existsSync(path);
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
