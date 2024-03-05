import {
  encode,
} from "@andromedaprotocol/andromeda.js";
import { Schema, Validator } from "jsonschema";
import _ from "lodash";
import pc from "picocolors";
import { displaySpinnerAsync, promptWithExit, validateAddressInput } from "..";
import config from "../config";
import State from "../state";
import { promptAdoType } from "../handlers/ado/common";

const { client } = State;

// The standard message for sending an NFT
// This is used for referencing by a specific handler for this message type
const SEND_NFT_MESSAGE_TYPE = "send_nft";

interface SendNftMsg {
  send_nft: { token_id: string; msg: string; contract: string };
}

async function requestSendNFT(): Promise<SendNftMsg> {
  const tokenIdInput = await promptWithExit({
    type: "input",
    message: "[Sending NFT] Input token ID:",
    validate: (input: string) => input.length > 0,
    name: "tokenid",
  });
  const addressInput = await promptWithExit({
    type: "input",
    message: `[Sending NFT ${tokenIdInput.tokenid}] Input receiving address:`,
    validate: validateAddressInput,
    name: "address",
  });

  let msg: string | Record<string, any> = {};
  try {
    const codeId = (await client.chainClient!.queryClient!.getContract(addressInput.address)).codeId;
    const schema = await client!.schema!.getSubSchemaFromCodeId(codeId, 'cw721receive').catch(() => undefined);
    if (!schema)
      // Maybe add a issue template here so user can request addition of new schema?
      throw new Error("CW721 receive schema not found. Please provide raw message.");
    msg = await promptQueryOrExecuteMessage(schema.schema);
  } catch (error: any) {
    console.error(error?.message);
    const messageInput = await promptWithExit({
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
  const input = await promptWithExit({
    message: `Select a message type:`,
    type: "list",
    // Choices are mapped to human readable form but the value returned is the index of the choice
    choices: options.map(({ properties }, idx) => {
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

  if (input.oneOfChoice === "exit") throw new Error("Command exited");
  return input.oneOfChoice;
}

export async function promptQueryOrExecuteMessage(
  schema: Schema) {
  const validOptions = (schema.oneOf ?? []).filter(
    ({ required }) =>
      required &&
      Array.isArray(required) &&
      !required.includes("andr_hook") &&
      !required.includes("andr_receive")
  );
  if (validOptions.length === 0) throw new Error("ADO has no valid messages");

  const messageChoice = await requestMessageType(validOptions);
  const messageSchema: Schema = validOptions[parseInt(messageChoice)];

  // Early exit if nothing to be prompted
  const { required, properties } = messageSchema;
  if (!properties) return {};

  // Exception case for sending NFTs
  if (
    Array.isArray(required) &&
    required.length > 0 &&
    required[0] === SEND_NFT_MESSAGE_TYPE
  ) {
    return await requestSendNFT();
  }

  const prompter = new SchemaPrompt(schema);

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
  bread?: string[]
) {
  const { required, properties } = schema;
  if (!properties) return {};
  const prompter = new SchemaPrompt(schema);

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
  AMPRecipient = "AMPRecipient",
  AndrAddress = "AndrAddr",
  Binary = "Binary",
  AppComponent = "AppComponent",
}

export default class SchemaPrompt {
  answers: Record<string, any> = {};

  // Schema key is generally codeId but it can be different for nested keys like receive schema.
  // To keep track of schema, we pass schemaKey. Its of structure `{codeId}-{substring?}`
  constructor(public schema: Schema) { }

  async requestAppComponent() {
    const name = await this.promptQuestion(
      "ADO Name",
      { type: "string" },
      true,
      ["App Component"]
    );
    const adoType = await promptAdoType(
      "ADO Type",
      ["App Component"]
    );
    const codeId = await client!.os!.adoDB!.getCodeId(adoType);

    const adoSchema = await displaySpinnerAsync(
      `Fetching Schema for ${adoType}...`,
      async () => await client.schema!.getSchemaFromCodeId(codeId)
    );

    const msg = await promptInstantiateMsg(adoSchema.schema.instantiate, [
      `${name} - Instantiation`,
    ]);
    const instantiateMsg = encode(msg);

    return {
      ado_type: adoType,
      name,
      component_type: {
        new: instantiateMsg
      }
    };
  }

  async requestADORecipient() {
    const address = await this.promptQuestion(
      "address",
      { type: "string" },
      true,
      ["ADO Recipient"]
    );

    const addMessage = await promptWithExit({
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

    let type: number = -1;
    try {
      const resp = await client.chainClient!.queryClient!.getContract(address)
      type = resp.codeId;
    } catch (error) {
      const typeInput = await promptWithExit({
        message: "What type of ADO are you sending to?",
        name: "adoType",
        type: "input",
        validate: async (input: string) => {
          try {
            await client.os.adoDB!.getCodeId(input);
            return true;
          } catch (error) {
            const { message } = error as Error;
            console.log();
            console.log(pc.red("Something went wrong!"));
            console.log(pc.red(message));
            return false;
          }
        },
      });
      type = await client.os.adoDB!.getCodeId(typeInput.adoType);
    }

    const adoSchema = await displaySpinnerAsync(
      "Fetching schema...",
      async () => await client.schema!.getSchemaFromCodeId(type)
    );
    const msg = await promptQueryOrExecuteMessage(adoSchema.schema.execute);

    return {
      address: {
        identifier: address,
      },
      msg: encode(msg),
    };
  }

  async requestRecipient(name: string) {
    const typeChoices = ["External Address", "ADO"];

    const typeChoiceInput = await promptWithExit({
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

    const input = await promptWithExit({
      message: `What type would you like to use for ${name}?`,
      type: "list",
      choices: selectableTypes,
      name: "inputtype",
    });

    return input.inputtype;
  }

  async requestOneOf(name: string, options: Schema[]): Promise<string> {
    if (options.length === 1) return "0";

    const input = await promptWithExit({
      message: `What type would you like to use for ${name}?`,
      type: "list",
      choices: options.map(({ description, properties, type }, idx) => {
        const propertyKeys = properties ? Object.keys(properties) : [];

        const name = `[Option ${idx + 1}] ${description ? `Description: ${description}, ` : ""
          }${propertyKeys.length > 0
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
      if (required || response.length > 0) {
        const addElement = await promptWithExit({
          prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
          message: `Would you like to add ${response.length === 0 ? name : "another"
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
    // Automatically assign kernel address
    if (name === "kernel_address") {
      return config.get("chain.kernelAddress");
    }

    if (!required) {
      const addProperty = await promptWithExit({
        prefix: bread ? `[Constructing ${bread.join(".")}]` : "",
        message: `Would you like to add ${name}?`,
        type: "confirm",
        name: "confirm",
      });

      if (!addProperty.confirm) return undefined;
    }
    property = await this.replaceRefs(property);
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
          case AndromedaSchemaTypes.AMPRecipient:
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

      const value = await promptWithExit(question);

      return value[name];
    }
  }

  async replaceRefs(obj: Record<string, any>, refs?: string[]) {
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
              newArray.push(await this.replaceRefs(val[j], refs));
            } else {
              newArray.push(val[j]);
            }
          }
          newObj[key] = newArray;
        } else {
          newObj[key] = await this.replaceRefs(val, refs);
        }
      } else if (key === "$ref") {
        newObj = await this.getRef(val);

        if (refs?.includes(val)) {
          console.log("Circular reference detected, exiting...");
          break;
        }
        newObj = await this.replaceRefs(newObj, [...(refs ?? []), val]);
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
