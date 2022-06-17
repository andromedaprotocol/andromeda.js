import { Chalk } from "chalk";
export interface Command {
    description?: String;
    handler: HandlerFunc;
    help?: HelpFunc;
    color: Chalk;
}
export declare type Commands = Record<string, Command>;
export declare type HandlerFunc = (input: string) => Promise<any>;
export declare type HelpFunc = () => void;
