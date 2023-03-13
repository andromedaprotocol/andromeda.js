import {
  fetchSchema,
  queryADOPackageDefinition,
  encode,
} from "@andromedaprotocol/andromeda.js";
import pc from "picocolors";
import inquirer from "inquirer";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";
import config from "../config";
import { displaySpinnerAsync, validateAddressInput } from "..";
import State from "../state";

const { client } = State;

// The standard message for sending an NFT
const SEND_NFT_MESSAGE_TYPE = "send_nft";

interface SendNftMsg {
  send_nft: { token_id: string; msg: string; contract: string };
}

async function requestSendNFT(): Promise<SendNftMsg> {
  const tokenIdInput = await inquirer.prompt({
    type: "input",
    message: "[Sending NFT] Input token ID:",
    validate: (input: string) => input.length > 0,
    name: "tokenid",
  });
  const addressInput = await inquirer.prompt({
    type: "input",
    message: `[Sending NFT ${tokenIdInput.tokenid}] Input receiving address:`,
    validate: validateAddressInput,
    name: "address",
  });

  let msg: string | Record<string, any> = {};
  try {
    const type = await client.ado.getType(addressInput.address);
    const { schemas } = await queryADOPackageDefinition(type);
    if (!schemas) throw new Error("Not a registered ADO type");
    if (!schemas.receive || !schemas.receive.cw721)
      throw new Error("Contract address cannot receive NFTs");
    const schema = await fetchSchema<Schema>(schemas.receive.cw721);
    msg = await promptQueryOrExecuteMessage(schema, type);
  } catch (error) {
    console.error(error);
    const messageInput = await inquirer.prompt({
      type: "input",
      message: `[Sending NFT ${tokenIdInput.tokenid}] Input message to send (base64 encoded):`,
      validate: (input: string) => input.length > 0,
      name: "message",
    });

    msg = messageInput.message;
  }

  msg = typeof msg === "string" ? msg : encode(msg);
  return {
    send_nft: {
      msg,
      contract: addressInput.address,
      token_id: tokenIdInput.tokenid,
    },
  };
}

export async function requestMessageType(options: Schema[]): Promise<string> {
  // Filter out Andromeda Receive message as it is unnecessary
  const validOptions = options.filter(
    ({ required }) =>
      required && Array.isArray(required) && !required.includes("andr_receive")
  );

  const input = await inquirer.prompt({
    message: `Select a message type:`,
    type: "list",
    choices: validOptions.map(({ properties }, idx) => {
      const propertyKeys = properties ? Object.keys(properties) : [];
      const messageName = propertyKeys.length > 0 ? propertyKeys[0] : "Unnamed";
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

export async function promptQueryOrExecuteMessage(
  schema: Schema,
  type: string
) {
  const validOptions = (schema.oneOf ?? []).filter(
    ({ required }) =>
      required &&
      Array.isArray(required) &&
      !(
        required.includes("andr_receive") ||
        required.includes("andr_query") ||
        required.includes("andr_hook")
      )
  );
  if (validOptions.length === 0) throw new Error("ADO has no valid messages");

  const messageChoice = await requestMessageType(validOptions);
  const messageSchema: Schema = validOptions[parseInt(messageChoice)];

  const { required, properties } = messageSchema;
  if (!properties) return {};

  if (
    Array.isArray(required) &&
    required.length > 0 &&
    required[0] === SEND_NFT_MESSAGE_TYPE
  ) {
    return await requestSendNFT();
  }

  const prompter = new SchemaPrompt(schema, type);

  const keys = Object.keys(properties);
  let answers: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const isRequired: boolean = Boolean(
      required && (!Array.isArray(required) || required.includes(key))
    );
    answers[key] = await prompter.promptQuestion(
      key,
      properties[key],
      isRequired
    );
  }

  return answers;
}

export async function promptInstantiateMsg(
  schema: Schema,
  type: string,
  bread?: string[]
) {
  const { required, properties } = schema;
  if (!properties) return {};

  const prompter = new SchemaPrompt(schema, type);

  const keys = Object.keys(properties);
  let answers: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const isRequired: boolean = Boolean(
      required && (!Array.isArray(required) || required.includes(key))
    );
    answers[key] = await prompter.promptQuestion(
      key,
      properties[key],
      isRequired,
      bread
    );
  }
  return answers;
}

enum AndromedaSchemaTypes {
  Recipient = "Recipient",
  AndrAddress = "AndrAddress",
  Binary = "Binary",
  AppComponent = "AppComponent",
}

export default class SchemaPrompt {
  answers: Record<string, any> = {};

  constructor(public schema: Schema, public type: string) {}

  async requestAppComponent() {
    const name = await this.promptQuestion(
      "ADO Name",
      { type: "string" },
      true,
      ["App Component"]
    );
    const adoType = await this.promptQuestion(
      "ADO Type",
      { type: "string" },
      true,
      ["App Component"]
    );

    const {
      schemas: { contract_schema },
    } = await queryADOPackageDefinition(adoType);
    const adoSchema = await displaySpinnerAsync(
      "Fetching Schema...",
      async () => await fetchSchema(contract_schema)
    );

    const msg = await promptInstantiateMsg(adoSchema.instantiate, adoType, [
      `${name} - Instantiation`,
    ]);
    const instantiateMsg = encode(msg);

    return {
      ado_type: adoType,
      name,
      instantiate_msg: instantiateMsg,
    };
  }

  async requestADORecipient() {
    const address = await this.promptQuestion(
      "address",
      { type: "string" },
      true,
      ["ADO Recipient"]
    );

    const addMessage = await inquirer.prompt({
      name: "addMessage",
      type: "confirm",
      message: "Would you like to add a message to this recipient?",
    });
    if (!addMessage.addMessage)
      return {
        address: {
          identifier: address,
        },
      };

    let type = "";
    try {
      const resp = await client.queryContract<{ ado_type: string }>(address, {
        andr_query: { type: {} },
      });
      type = resp.ado_type;
    } catch (error) {
      const typeInput = await inquirer.prompt({
        name: "adoType",
        type: "input",
        validate: async (input: string) => {
          try {
            await queryADOPackageDefinition(input);
            return true;
          } catch (error) {
            const { message } = error as Error;
            console.log(pc.red(message));
            return false;
          }
        },
      });
      type = typeInput.adoType;
    }

    const {
      schemas: { contract_schema },
    } = await queryADOPackageDefinition(type);
    const adoSchema = await displaySpinnerAsync(
      "Fetching schema...",
      async () => await fetchSchema(contract_schema)
    );
    const msg = await promptQueryOrExecuteMessage(adoSchema.execute, type);

    return {
      address: {
        identifier: address,
        msg: encode(msg),
      },
    };
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
        const ado = await this.requestADORecipient();
        return {
          a_d_o: ado,
        };
      case "External Address":
      default:
        const addr = await this.promptQuestion(name, { type: "string" }, true, [
          name,
        ]);
        return {
          addr,
        };
    }
  }

  async requestType(
    types: (string | { type: string })[],
    name: string
  ): Promise<string> {
    const selectableTypes = types
      .map((type) => (typeof type === "string" ? type : type.type))
      .filter((type) => type !== "null");
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
    if (options.length === 1) return "0";

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

  async promptArray(
    name: string,
    items: Schema,
    required: boolean,
    bread?: string[]
  ) {
    const response: any[] = [];
    while (true) {
      if (required) {
        const addElement = await inquirer.prompt({
          prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
          message: `Would you like to add ${
            response.length === 0 ? name : "another"
          }?`,
          type: "confirm",
          name: "confirm",
        });
        if (!addElement.confirm) return response;
      }

      const input = await this.promptQuestion(
        `${name} (array element ${response.length + 1})`,
        items,
        true,
        bread
      );
      response.push(input);
    }
  }

  async promptQuestion(
    name: string,
    property: Schema,
    required = false,
    bread?: string[]
  ): Promise<any> {
    if (name === "primitive_contract") {
      return config.get("chain.registryAddress");
    }
    if (!required) {
      const addProperty = await inquirer.prompt({
        prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
        message: `Would you like to add ${name}?`,
        type: "confirm",
        name: "confirm",
      });

      if (!addProperty.confirm) return undefined;
    }

    property = await this.replaceRefs(property);
    // console.log(JSON.stringify(property, null, 2));
    let type = property.type;
    if (Array.isArray(type)) {
      let validTypes = type.filter((ty) => ty !== "null");
      if (validTypes.length === 1) type = validTypes[0];
    }

    // if (property.description) console.log(pc.blue(property.description));
    if (property.allOf) {
      for (let i = 0; i < property.allOf.length; i++) {
        const val = property.allOf[i];
        if (val.type || val.oneOf) {
          return await this.promptQuestion(name, val, true, bread);
        }
      }

      throw new Error("No property found in Schema object");
    } else if (
      (property.oneOf && property.oneOf.length > 0) ||
      (property.anyOf && property.anyOf.length > 0)
    ) {
      const validChoices = (property.oneOf ?? property.anyOf ?? []).filter(
        (val) => val.type !== "null"
      );
      const choice = await this.requestOneOf(name, validChoices);
      return await this.promptQuestion(
        name,
        validChoices[parseInt(choice)],
        true,
        bread
      );
    } else if (type === "object") {
      const { properties, required } = property;
      let answer: any = {};
      if (!properties) return {};
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
              console.log(pc.red(err.message));
            });
            return "Invalid input";
          }

          return true;
        },
      };

      if (Array.isArray(type)) {
        //TODO: Handle Multiple types
        const selectedType = await this.requestType(type, name);
        return await this.promptQuestion(
          name,
          { ...property, type: selectedType },
          true,
          bread
        );
      } else if (type) {
        switch (type) {
          case "number":
          case "integer":
            question.filter = (input: string) => {
              return parseInt(input);
            };
            break;
          case "array":
            return this.promptArray(
              name,
              property.items as Schema,
              required,
              bread
            );
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
          case AndromedaSchemaTypes.AppComponent:
            return await this.requestAppComponent();
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
