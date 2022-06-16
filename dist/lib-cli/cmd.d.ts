import inquirer from "inquirer";
import { Commands } from "./types";
export declare function title(): Promise<void>;
export declare function subTitle(): Promise<void>;
export declare function ask(defaultValue?: string): Promise<inquirer.Answers>;
export declare function splitArgs(input: string): string[];
export declare function listCommands(commands: Commands, prefix?: string): Promise<void>;
export declare function handle(input: string, commands: Commands): Promise<void>;
