import type { Formatter } from "picocolors/types";

/**
 * Interface used to define an input parameter for a command
 */
export interface CommandInput {
  // Validation function
  validate?: (input: string) => Promise<boolean> | boolean;
  // Message to display when requesting input
  requestMessage: string;
  // The options used (for when restricted choice is required)
  options?: string[] | (() => Promise<string[]> | string[]);
  // Any transformations applied to the input (post validation)
  transform?: (input: string) => Promise<any> | any;
}

/**
 * Interface used to define a command and its handler
 */
export interface Command {
  //A description for the command
  description?: string;
  //The handler for the command
  handler: HandlerFunc;
  //Example usage of the command
  usage: string;
  //The color used when listing commands
  color: Formatter;
  //Any flags the command uses
  flags?: Record<string, Flag>;
  //The input parameters required by the command
  inputs?: CommandInput[];
  //Whether the command is currently usable
  disabled?: () => Promise<boolean> | boolean;
}

export type Commands = Record<string, Command>;

/**
 * Standard used to define a handler function for a command
 */
export type HandlerFunc = (
  input: string[],
  flags: Record<string, any>
) => Promise<any>;

/**
 * Struct used to define flags that can be assigned to a command
 */
export type Flag = {
  //Example usage
  usage?: string;
  //A description of the flag
  description: string;
};

export type Flags = Record<string, any>;
