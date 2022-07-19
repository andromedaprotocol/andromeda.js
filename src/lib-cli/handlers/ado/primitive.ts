import { PrimitiveValue, PrimitiveValueType } from "@andromeda/andromeda-js";
import { parseCoins } from "@cosmjs/proto-signing";
import chalk from "chalk";
import {
  displaySpinnerAsync,
  executeFlags,
  instantiateFlags,
  factoryFlag,
  requestOperators,
  validateOrRequest,
} from "../../common";
import { Commands, Flags } from "../../types";
import { client } from "../chain";

const commands: Commands = {
  set: {
    description: "Set the value for a given key",
    usage: "ado primitive set <contract address?> <key?> <value?> <valuetype?>",
    handler: setHandler,
    color: chalk.blue,
    flags: executeFlags,
  },
  create: {
    description: "Creates a primitive contract",
    usage: "ado primitive create <operators (comma separated addresses)?>",
    handler: createHandler,
    color: chalk.magenta,
    flags: { ...instantiateFlags, ...factoryFlag },
  },
  get: {
    description: "Get the value for a given key",
    usage: "ado primitive get <contract address?> <key?>",
    handler: getHandler,
    color: chalk.green,
  },
};

const valueTypes = ["string", "uint128", "bool", "decimal", "coin"]; //TODO: work out how to add vectors

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
  let [contractAddr, key, value, valueType] = inputs;
  contractAddr = await validateOrRequest(
    "Input the contract address:",
    contractAddr
  );
  key = await validateOrRequest("Input the primitive value key:", key);
  value = await validateOrRequest(`Input the value for ${key}:`, value);
  valueType = await validateOrRequest(
    `Input the value type for ${key} (One of ${valueTypes.join(", ")}):`,
    valueType
  );

  const primitiveValue = mapValue(value, valueType as PrimitiveValueType);
  const fee = {
    amount: [
      {
        denom: "uandr",
        amount: "2000",
      },
    ],
    gas: "500000",
  };
  const resp = await client.ado.primitive.set(
    contractAddr,
    primitiveValue,
    fee,
    key
  );

  console.log(chalk.green("Primitive value set!"));
  console.log();
  console.log(
    `https://testnet.mintscan.io/juno-testnet/txs/${resp.transactionHash}`
  );
}

async function getHandler(inputs: string[]) {
  let [contractAddr, key] = inputs;
  contractAddr = await validateOrRequest(
    "Input the contract address:",
    contractAddr
  );
  key = await validateOrRequest("Input the primitive value key:", key);

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
