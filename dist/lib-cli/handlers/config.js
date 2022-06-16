"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cli_table_1 = __importDefault(require("cli-table"));
const config_1 = __importDefault(require("../../config"));
const cmd_1 = require("../cmd");
const common_1 = require("../common");
const schema = config_1.default.getProperties();
exports.commands = {
    list: {
        handler: async () => {
            await listConfig();
        },
        color: chalk_1.default.white,
        description: "Displays current config",
    },
    get: {
        handler: async (input) => {
            const inputs = input.split(" ").filter((str) => str.length > 0);
            if (inputs.length === 0) {
                console.error(chalk_1.default.red("Invalid input, please provide a key:"));
                console.log();
                console.log(chalk_1.default.green("config get <key>"));
                return;
            }
            else {
                await listConfig(inputs[0]);
            }
        },
        color: chalk_1.default.white,
        description: "Displays current value for a given key",
    },
    set: {
        handler: async (input) => {
            const inputs = input.split(" ").filter((str) => str.length > 0);
            if (inputs.length !== 2) {
                console.error(chalk_1.default.red("Invalid input, example usage:"));
                console.log("");
                console.log(chalk_1.default.green("config set <key> <value>"));
            }
            else {
                await setKey(inputs[0], inputs[1]);
            }
        },
        color: chalk_1.default.white,
        description: "Displays current config",
    },
};
function getConfigDoc(key) {
    const schema = JSON.parse(config_1.default.getSchemaString());
    const properties = schema["_cvtProperties"];
    return properties[key].doc;
}
async function listConfig(keyToPrint) {
    const configTable = new cli_table_1.default(common_1.logTableConfig);
    configTable.push([
        chalk_1.default.bold("Key"),
        chalk_1.default.bold("Value"),
        chalk_1.default.bold("Description"),
    ]);
    const trimmedKey = keyToPrint === null || keyToPrint === void 0 ? void 0 : keyToPrint.trim();
    let keys = Object.keys(config_1.default.getProperties());
    if (trimmedKey && trimmedKey.length > 0) {
        if (!config_1.default.has(trimmedKey)) {
            console.error(chalk_1.default.red(`Invalid config key, try ${chalk_1.default.white("config list")} to see a list of valid keys`));
            return;
        }
        keys = [trimmedKey];
    }
    keys.forEach((key) => {
        const val = config_1.default.get(key);
        configTable.push([
            key,
            val && val.length > 0 ? val : "<unset>",
            getConfigDoc(key),
        ]);
    });
    console.log(chalk_1.default.green("Current config"));
    console.log();
    console.log(configTable.toString());
}
async function setKey(key, value) {
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();
    console.log(trimmedKey);
    if (!config_1.default.has(trimmedKey)) {
        console.error(chalk_1.default.red(`Invalid config key, try ${chalk_1.default.white("config list")} to see a list of valid keys`));
        return;
    }
    config_1.default.set(trimmedKey, trimmedValue);
}
async function configHandler(input) {
    return (0, cmd_1.handle)(input, exports.commands);
}
exports.default = configHandler;
