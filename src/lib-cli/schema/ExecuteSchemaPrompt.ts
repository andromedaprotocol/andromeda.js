import inquirer from "inquirer";
import { Schema } from "jsonschema";
import _ from "lodash";
import { fetchSchema, getSchemasByType } from "../../andr-js/ADOP";
// import { Validator } from "jsonschema";
import SchemaPrompt from "./SchemaPrompt";

export default class ExecuteSchemaPrompt extends SchemaPrompt {
  static async fromType(adoType: string) {
    const { execute } = getSchemasByType(adoType);
    const schema = await fetchSchema(execute);
    return new ExecuteSchemaPrompt(schema);
  }

  async requestMessageType(options: Schema[]): Promise<string> {
    // Filter out Andromeda Receive message as it is unnecessary
    const validOptions = options.filter(
      ({ required }) =>
        required &&
        Array.isArray(required) &&
        !required.includes("andr_receive")
    );

    const input = await inquirer.prompt({
      message: `Select a message type:`,
      type: "list",
      choices: validOptions.map(({ properties }, idx) => {
        const propertyKeys = properties ? Object.keys(properties) : [];
        const messageName =
          propertyKeys.length > 0 ? propertyKeys[0] : "Unnamed";
        const name = `[Option ${idx + 1}] ${messageName
          .split("_")
          .map(_.upperFirst)
          .join(" ")}`;
        return {
          name,
          value: idx,
        };
      }),
      name: "oneOfChoice",
    });

    return input.oneOfChoice;
  }

  async start() {
    const validOptions = (this.schema.oneOf ?? []).filter(
      ({ required }) =>
        required &&
        Array.isArray(required) &&
        !required.includes("andr_receive")
    );
    const messageChoice = await this.requestMessageType(validOptions);

    const messageSchema: Schema = validOptions[parseInt(messageChoice)];

    const { required, properties } = messageSchema;
    if (!properties) return {};

    const keys = Object.keys(properties);

    let answers: Record<string, any> = {};
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const isRequired: boolean = Boolean(
        required && (!Array.isArray(required) || required.includes(key))
      );
      answers[key] = await this.promptQuestion(
        key,
        properties[key],
        isRequired
      );
    }

    return answers;
  }
}
