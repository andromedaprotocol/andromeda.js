import { Chalk } from "chalk";

export interface CommandInput {
  validate?: (input: string) => Promise<boolean> | boolean;
  requestMessage: string;
  options?: string[] | (() => Promise<string[]> | string[]);
  transform?: (input: string) => Promise<any> | any;
}

export interface Command {
  description?: String;
  handler: HandlerFunc;
  usage: string;
  color: Chalk;
  flags?: Record<string, Flag>;
  inputs?: CommandInput[];
  disabled?: () => Promise<boolean> | boolean;
}

export type Commands = Record<string, Command>;

export type HandlerFunc = (
  input: string[],
  flags: Record<string, any>
) => Promise<any>;

export type HelpFunc = () => void;

export type Flag = {
  usage?: string;
  description: string;
};

export type Flags = Record<string, any>;
