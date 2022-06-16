import { Chalk } from "chalk";

export interface Command {
  description?: String;
  handler: HandlerFunc;
  help?: HelpFunc;
  color: Chalk;
}

export type Commands = Record<string, Command>;

export type HandlerFunc = (input: string) => Promise<any>;

export type HelpFunc = () => void;

export interface Wallet {
  name?: string | number;
  mnemonic: string;
}
