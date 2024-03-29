console.info = function (input) {
  if (input.includes("secp")) return;

  console.log(input);
};
import { baseCommands } from "./cmd";

export default baseCommands;

export * from "./cmd";
export * from "./common";
export * from "./config";
export * from "./handlers";
export { default as State } from "./state";
