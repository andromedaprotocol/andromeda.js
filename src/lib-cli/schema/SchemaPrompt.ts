import chalk from "chalk";
import inquirer from "inquirer";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";

enum AndromedaSchemaTypes {
  Recipient = "Recipient",
  AndrAddress = "AndrAddress",
}

export default class SchemaPrompt {
  schema: Schema;
  answers: Record<string, any> = {};

  constructor(schema: Schema) {
    this.schema = schema;
  }

  async requestRecipient(name: string) {
    const typeChoices = ["External Address", "ADO"];

    const typeChoiceInput = await inquirer.prompt({
      message: `What recipient type would you like to use for ${name}?`,
      type: "list",
      choices: typeChoices,
      name: "typeChoice",
    });

    switch (typeChoiceInput.typeChoice) {
      case "ADO":
        const ado = await this.promptQuestion(
          name,
          {
            $ref: "#/definitions/ADORecipient",
          },
          true
        );
        return {
          a_d_o: ado,
        };
      case "External Address":
      default:
        const addr = await this.promptQuestion(name, { type: "string" }, true);
        return {
          addr,
        };
    }
  }

  async requestType(types: string[], name: string): Promise<string> {
    const selectableTypes = types.filter((type) => type !== "null");
    if (selectableTypes.length === 1) return selectableTypes[0];

    const input = await inquirer.prompt({
      message: `What type would you like to use for ${name}?`,
      type: "list",
      choices: selectableTypes,
      name: "inputtype",
    });

    return input.inputtype;
  }

  async requestOneOf(name: string, options: Schema[]): Promise<string> {
    const input = await inquirer.prompt({
      message: `What type would you like to use for ${name}?`,
      type: "list",
      choices: options.map(({ description, properties, type }, idx) => {
        const propertyKeys = properties ? Object.keys(properties) : [];

        const name = `[Option ${idx + 1}] ${
          description ? `Description: ${description}, ` : ""
        }${
          propertyKeys.length > 0
            ? `Properties: ${propertyKeys.join(", ")}, `
            : " "
        }Type: ${type}`;
        return {
          name,
          value: idx,
        };
      }),
      name: "oneOfChoice",
    });

    return input.oneOfChoice;
  }

  async promptArray(name: string, items: Schema, bread?: string[]) {
    const response: any[] = [];
    while (true) {
      const input = await this.promptQuestion(
        `${name} (array element ${response.length + 1})`,
        items,
        true,
        bread
      );
      response.push(input);
      const addElement = await inquirer.prompt({
        prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
        message: `Would you like to add another?`,
        type: "confirm",
        name: "confirm",
      });

      if (!addElement.confirm) return response;
    }
  }

  async promptQuestion(
    name: string,
    property: Schema,
    required = false,
    bread?: string[]
  ): Promise<any> {
    if (!required) {
      const addProperty = await inquirer.prompt({
        prefix: bread ? `[${bread.join(".")}]` : "",
        message: `Would you like to add ${name}?`,
        type: "confirm",
        name: "confirm",
      });

      if (!addProperty.confirm) return undefined;
    }

    property = await this.replaceRefs(property);
    // if (property.description) console.log(chalk.blue(property.description));
    if (property.allOf) {
      for (let i = 0; i < property.allOf.length; i++) {
        const val = property.allOf[i];
        if (val.type) {
          return await this.promptQuestion(name, val, true);
        }
      }

      throw new Error("No property found in Schema object");
    } else if (
      (property.oneOf && property.oneOf.length > 0) ||
      (property.anyOf && property.anyOf.length > 0)
    ) {
      const choice = await this.requestOneOf(
        name,
        property.oneOf ?? property.anyOf ?? []
      );
      return await this.promptQuestion(
        name,
        (property.oneOf ?? property.anyOf ?? [])[parseInt(choice)],
        true,
        bread
      );
    } else if (property.type === "object") {
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
          isRequired,
          [...(bread ?? []), name]
        );
      }
      return answer;
    } else {
      const v = new Validator();
      const question: any = {
        prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
        name,
        message: `Input ${name
          .split("_")
          .map((str) => _.upperFirst(str))
          .join(" ")}:`,
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
        const type = await this.requestType(property.type, name);
        return await this.promptQuestion(
          name,
          { ...property, type },
          true,
          bread
        );
      } else if (property.type) {
        switch (property.type) {
          case "number":
            question.filter = (input: string) => {
              return parseInt(input);
            };
          case "array":
            return this.promptArray(name, property.items as Schema, bread);
          case "boolean":
            question.type = "confirm";
            break;
          case AndromedaSchemaTypes.Recipient:
            return this.requestRecipient(name);
          case AndromedaSchemaTypes.AndrAddress:
            const identifier = await this.promptQuestion(
              name,
              { type: "string" },
              true,
              bread
            );
            return { identifier };
          default:
            break;
        }
      }

      const value = await inquirer.prompt(question);

      if (value[name] === "exit") throw new Error("Prompt exited");

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
        newObj = await this.replaceRefs(newObj);
      }
    }

    return newObj;
  }

  async getRef(ref: string) {
    if (ref[0] === "#") {
      const refSplit = ref.split("/");
      const field = _.last(refSplit);
      if (!field) return;

      if (
        Object.values(AndromedaSchemaTypes as Record<string, string>).includes(
          field
        )
      ) {
        return { type: field };
      } else {
        const { definitions } = this.schema;
        const definition = Object(definitions)[field];

        if (definition) return definition;
      }
    }

    throw new Error(`Could not get ref ${ref} in schema ${this.schema}`);
  }
}
