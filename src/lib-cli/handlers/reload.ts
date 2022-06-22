import chalk from "chalk";
import inquirer from "inquirer";

const MAX_HISTORY_LENGTH = 10;

export class Reload {
  history: string[] = [];

  newInput(input: string) {
    if (input.length === 0) return;

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
    const selection = await inquirer.prompt({
      name: "selection",
      type: "list",
      message: `Select from recent commands (or ${chalk.red(
        "Close"
      )} to exit)\n`,
      choices: [...this.history, "cancel", "exit"],
    });
    return selection;
  }
}

const reload = new Reload();

export default reload;
