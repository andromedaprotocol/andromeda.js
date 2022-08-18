import { PrimitiveValue, PrimitiveValueType } from "@andromeda/andromeda-js";
import { parseCoins } from "@cosmjs/proto-signing";
import chalk from "chalk";
import {
  displaySpinnerAsync,
  executeFlags,
  factoryFlag,
  instantiateFlags,
  requestOperators,
} from "../../common";
import { Commands, Flags } from "../../types";
import client from "../client";

const valueTypes = ["string", "uint128", "bool", "decimal", "coin"];

const commands: Commands = {
  set: {
    description: "Set the value for a given key",
    usage: "ado primitive set <contract address?> <key?> <value?> <valuetype?>",
    handler: setHandler,
    color: chalk.blue,
    flags: executeFlags,
    inputs: [
      {
        requestMessage: "Input Contract Address:",
      },
      {
        requestMessage: "Input Key to Set:",
      },
      {
        requestMessage: "Input Value for Key:",
      },
      {
        requestMessage: "Input Value Type",
        options: valueTypes,
      },
    ],
  },
  get: {
    description: "Get the value for a given key",
    usage: "ado primitive get <contract address?> <key?>",
    handler: getHandler,
    color: chalk.green,
    inputs: [
      {
        requestMessage: "Input Contract Address:",
      },
      {
        requestMessage: "Input Key to Get:",
      },
    ],
  },
  create: {
    description: "Creates a primitive contract",
    usage: "ado primitive create <operators (comma separated addresses)?>",
    handler: createHandler,
    color: chalk.magenta,
    flags: { ...instantiateFlags, ...factoryFlag },
  },
};

function mapValue(input: string, type: PrimitiveValueType): PrimitiveValue {
  if (!valueTypes.includes(type))
    throw new Error(
      `Invalid primitive value type, must be one of: ${valueTypes.join(", ")}`
    );

  switch (type) {
    case "bool":
      return {
        bool: new Boolean(input),
      };
    case "coin": {
      const coins = parseCoins(input);
      if (coins.length === 0) throw new Error("Invalid coin input");
      return {
        coin: coins[0],
      };
    }
    case "uint128":
    case "string":
    case "decimal":
      return { [type]: input } as unknown as PrimitiveValue;
    default:
      throw new Error(
        `Invalid primitive value type, must be one of: ${valueTypes.join(", ")}`
      );
  }
}

async function setHandler(inputs: string[]) {
  const [contractAddr, key, value, valueType] = inputs;

  const primitiveValue = mapValue(value, valueType as PrimitiveValueType);
  const resp = await client.ado.primitive.set(
    contractAddr,
    primitiveValue,
    "auto",
    key
  );

  console.log(chalk.green("Primitive value set!"));
  console.log();
  console.log(
    `https://testnet.mintscan.io/juno-testnet/txs/${resp.transactionHash}`
  );
}

async function getHandler(inputs: string[]) {
  const [contractAddr, key] = inputs;

  const resp = await client.ado.primitive.get(contractAddr, key);

  console.log(chalk.green(resp));
}

async function createHandler(inputs: string[], flags: Flags) {
  const [operators] = inputs;
  const { label, admin, factory } = flags;
  let operatorsArray =
    operators && operators.length > 0
      ? operators.split(",").map((op) => op.trim())
      : [];
  if (operatorsArray.length === 0) {
    operatorsArray = await requestOperators();
  }

  const resp = await displaySpinnerAsync(
    "Creating your primitive...",
    async () =>
      await client.ado.primitive.create(
        operatorsArray,
        "auto",
        label,
        admin ? { admin } : undefined,
        factory
      )
  );

  console.log(chalk.green("Primitive created!"));
  console.log();
  console.log(
    chalk.bold(
      `https://testnet.mintscan.io/juno-testnet/txs/${resp.transactionHash}`
    )
  );
  console.log();
  console.log(`Address: ${chalk.bold(resp.contractAddress)}`);
}

export default commands;
