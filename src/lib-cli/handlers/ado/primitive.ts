import {
  Primitive,
  PrimitiveValue,
  PrimitiveValueType,
} from "@andromeda/andromeda-js";
import { parseCoins } from "@cosmjs/proto-signing";
import chalk from "chalk";
import inquirer from "inquirer";
import { executeFlags } from "../../common";
import { Commands } from "../../types";
import { client } from "../chain";

const commands: Commands = {
  set: {
    description: "Set the value for a given key",
    usage: "ado primitive set <contract address?> <key?> <value?> <valuetype?>",
    handler: setHandler,
    color: chalk.blue,
    flags: executeFlags,
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
  if (!contractAddr) {
    contractAddr = (
      await inquirer.prompt({
        type: "input",
        message: "Input the contract address for the Primitive",
        name: "primitivecontractaddr",
      })
    ).primitivecontractaddr;
  }
  if (!key) {
    key = (
      await inquirer.prompt({
        type: "input",
        message: "Input the primitive value key",
        name: "primitivekey",
      })
    ).primitivekey;
  }
  if (!value) {
    key = (
      await inquirer.prompt({
        type: "input",
        message: `Input the primitive value for ${key}`,
        name: "primitivevalue",
      })
    ).primitivevalue;
  }
  if (!valueType) {
    key = (
      await inquirer.prompt({
        type: "list",
        message: `Input the primitive value for ${key}`,
        name: "primitivevaluetype",
        choices: valueTypes,
      })
    ).primitivevaluetype;
  }

  const primitiveValue = mapValue(value, valueType as PrimitiveValueType);
  const fee = {
    amount: [
      {
        denom: "ujunox",
        amount: "2000",
      },
    ],
    gas: "500000",
  };
  const resp = await new Primitive(contractAddr, client).set(
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

export default commands;
