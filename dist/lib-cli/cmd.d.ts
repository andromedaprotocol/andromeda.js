import inquirer from "inquirer";
import { Command, Commands } from "./types";
export declare function title(): Promise<void>;
export declare function subTitle(): Promise<void>;
export declare function ask(defaultValue?: string): Promise<inquirer.Answers>;
export declare function listCommands(commands: Commands, prefix?: string): Promise<void>;
export declare function printCommandHelp(cmd: Command): void;
