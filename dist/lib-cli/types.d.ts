import { Chalk } from "chalk";
export interface Command {
    description?: String;
    handler: HandlerFunc;
    usage: string;
    color: Chalk;
    flags?: Record<string, Flag>;
}
export declare type Commands = Record<string, Command>;
export declare type HandlerFunc = (input: string[], flags: Record<string, any>) => Promise<any>;
export declare type HelpFunc = () => void;
export declare type Flag = {
    usage?: string;
    description: string;
};
export declare type Flags = Record<string, any>;
