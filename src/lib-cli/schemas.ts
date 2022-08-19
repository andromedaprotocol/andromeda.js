import inquirer from "inquirer";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";

// Forked from: https://raw.githubusercontent.com/LuisMayo/schinquirer/main/index.js

function prepare(schema: Schema["properties"], bread: string[] = []): any[] {
  bread = bread || [];

  return _.reduce(
    schema,
    function (
      questions: { name: string; schema: any }[],
      schema: any,
      property
    ) {
      if (schema.type == "object") {
        return questions.concat(prepare(schema, bread.concat(property)));
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

export async function schemaPrompt(schema: Schema) {
  var deferred: { promise?: any; resolve?: any; reject?: any };

  deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  const questions = prepare(schema.properties).reduce(function (
    questions: any[],
    definition: { name: any; schema: any }
  ) {
    var when: { key: string | number; equal: any }, name;

    name = definition.name;
    const schema = definition.schema;
    const v = new Validator();
    const question: Record<string, any> = {
      name: name,
      default: schema.default,
      message: schema.message || name,
      validate: function (value: any) {
        const isValid = v.validate(value, schema);

        if (!isValid) {
          return `Please insert correct value`;
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

    if (_.isPlainObject((when = schema.when))) {
      question.when = function (answers: { [x: string]: any }) {
        return answers[when.key] == when.equal;
      };
    }

    if (schema.formatter == "number") {
      question.filter = function (value: string) {
        return parseInt(value);
      };
    }

    if (typeof schema.formatter == "function") {
      question.filter = schema.formatter;
    }

    questions.push(_.extend({}, schema, question));

    return questions;
  },
  []);

  const resp = await inquirer.prompt(questions);
  return resp;
}
