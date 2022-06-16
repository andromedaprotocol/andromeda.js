"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reload = void 0;
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
const MAX_HISTORY_LENGTH = 10;
class Reload {
    constructor() {
        this.history = [];
    }
    newInput(input) {
        if (input.length === 0)
            return;
        if (this.history.length >= MAX_HISTORY_LENGTH) {
            this.history.shift();
        }
        this.history.push(input);
    }
    print() {
        console.log("Previous inputs");
        this.history.forEach((cmd) => console.log(` ${cmd}`));
    }
    async pick() {
        const selection = await inquirer_1.default.prompt({
            name: "selection",
            type: "list",
            message: `Select from recent commands (or ${chalk_1.default.red("Close")} to exit)\n`,
            choices: [...this.history, "cancel", "exit"],
        });
        return selection;
    }
}
exports.Reload = Reload;
const reload = new Reload();
exports.default = reload;
