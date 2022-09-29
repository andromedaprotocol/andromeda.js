import inquirer from "inquirer";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";
import { exitInputs } from "./cmd";

interface QuestionDefinition {
  name: string;
  schema: Schema;
}

// Forked from: https://raw.githubusercontent.com/LuisMayo/schinquirer/main/index.js
function prepareQuestion(
  schema: Schema,
  bread: string[] = []
): QuestionDefinition[] {
  bread = bread || [];

  return _.reduce(
    schema,
    function (
      questions: { name: string; schema: any }[],
      schema: Schema,
      property
    ) {
      if (schema.type == "object") {
        return questions.concat(
          prepareQuestion(schema, bread.concat(property))
        );
      }
      questions.push({
        name: bread.concat(property).join("."),
        schema: schema,
      });

      return questions;
    },
    []
  );
}

// function questionConfig(schema: Schema, definition: QuestionDefinition) {
//   const config = {};

//   if (Array.isArray(schema.enum))
// }

export async function promptInstantiateFromSchema(schema: Schema) {
  if (!schema.properties) return;

  const questions = prepareQuestion(schema.properties).reduce(function (
    questions: Record<string, any>[],
    definition: QuestionDefinition
  ) {
    const { name, schema } = definition;
    const v = new Validator();

    const question: Record<string, any> = {
      name,
      // default: schema.default, //Does this field exist?
      message: `Input ${name}:`,
      validate: function (value: any) {
        if (exitInputs.includes(value)) return true;
        const isValid = v.validate(value, schema);

        if (!isValid) {
          return "Invalid value";
        }

        return true;
      },
    };

    if (Array.isArray(schema.enum)) {
      question.type = "list";
      question.choices = schema.enum;
    } else if (schema.type == "boolean") {
      question.type = "confirm";
    } else {
      question.type = "input";
      if (schema.type === "array") {
        question.filter = (val: string) =>
          val.split(",").map((val: string) => val.trim());
      }
    }

    //Do these fields exist?
    // if (_.isPlainObject((when))) {
    //   question.when = function (answers: { [x: string]: any }) {
    //     return answers[when.key] == when.equal;
    //   };
    // }

    // if (schema.formatter == "number") {
    //   question.filter = function (value: string) {
    //     return parseInt(value);
    //   };
    // }

    // if (typeof schema.formatter == "function") {
    //   question.filter = schema.formatter;
    // }

    questions.push(_.extend({}, schema, question));

    return questions;
  },
  []);

  const resp = await inquirer.prompt(questions);
  return resp;
}
