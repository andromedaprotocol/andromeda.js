import chalk from "chalk";
import inquirer from "inquirer";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";

export default class SchemaPrompt {
  schema: Schema;
  answers: Record<string, any> = {};

  constructor(schema: Schema) {
    this.schema = schema;
  }

  // TODO: Handle objects
  async promptQuestion(
    name: string,
    property: Schema,
    required = false
  ): Promise<any> {
    if (!required) {
      const addProperty = await inquirer.prompt({
        message: `Would you like to add ${name}?`,
        type: "confirm",
        name: "confirm",
      });

      if (!addProperty.confirm) return undefined;
    }

    const parsedSchema = await this.replaceRefs(property);
    if (property.allOf) {
      for (let i = 0; i < property.allOf.length; i++) {
        const val = parsedSchema.allOf[i];
        if (val.type) {
          return await this.promptQuestion(name, val, true);
        }
      }

      throw new Error("No property found in Schema object");
    } else if (property.type === "object") {
      console.group(`Constructing ${name}...`);
      const { properties, required } = property;
      let answer: any = {};
      if (!properties) throw new Error("Object property has no properties");
      const propertyNames = Object.keys(properties!);
      for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        const isRequired: boolean = Boolean(
          required &&
            (!Array.isArray(required) || required.includes(propertyName))
        );
        answer[propertyName] = await this.promptQuestion(
          propertyName,
          properties[propertyName],
          isRequired
        );
      }
      console.groupEnd();
      return answer;
    } else {
      const v = new Validator();
      const question: any = {
        name,
        message: `Input ${name}:`,
        validate: (input: unknown) => {
          const isValid = v.validate(
            input,
            _.extend(property, this.schema.definitions)
          );

          if (!isValid.valid) {
            isValid.errors.forEach((err) => {
              console.log();
              console.log(chalk.red(err));
            });
            return "Invalid input";
          }

          return true;
        },
      };

      if (Array.isArray(property.type)) {
        //TODO: Handle Multiple types
      } else if (property.type) {
        switch (property.type) {
          case "number":
            question.filter = (input: string) => {
              return parseInt(input);
            };
          case "array":
            //TODO: Handle Array
            break;
          default:
            break;
        }
      }

      const value = await inquirer.prompt(question);

      return value[name];
    }
  }

  async replaceRefs(obj: Record<string, any>) {
    const keys = Object.keys(obj);
    let newObj = { ...obj };
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = newObj[key];
      if (typeof val === "object") {
        if (Array.isArray(val)) {
          const newArray = [];
          for (let j = 0; j < val.length; j++) {
            if (typeof val[j] === "object") {
              newArray.push(await this.replaceRefs(val[j]));
            } else {
              newArray.push(val[j]);
            }
          }
          newObj[key] = newArray;
        } else {
          newObj[key] = await this.replaceRefs(val);
        }
      } else if (key === "$ref") {
        newObj = await this.getRef(val);
      }
    }

    return newObj;
  }

  async getRef(ref: string) {
    if (ref[0] === "#") {
      const refSplit = ref.split("/");

      const { definitions } = this.schema;
      const field = _.last(refSplit);
      if (!field) return;

      const definition = Object(definitions)[field];

      if (definition) return definition;
    }

    throw new Error(`Could not get ref ${ref} in schema ${this.schema}`);
  }
}
