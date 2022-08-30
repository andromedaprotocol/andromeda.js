import { Validator } from "jsonschema";
import SchemaPrompt from "./SchemaPrompt";

export default class InstantiateSchemaPrompt extends SchemaPrompt {
  async start() {
    let answers: any = {};
    const { properties, required } = this.schema;

    if (!properties) return {};

    const keys = Object.keys(properties);
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

    const v = new Validator();
    const isValid = v.validate(answers, this.schema);

    if (!isValid.valid) throw new Error("Invalid input");

    return answers;
  }
}
