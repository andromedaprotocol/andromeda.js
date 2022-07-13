import { Coin } from "@cosmjs/proto-signing";
import { encode } from "../utils";
import { Fee } from "..";
import BaseADOAPI from "./BaseADOAPI";
import { InstantiateOptions } from "@cosmjs/cosmwasm-stargate";

export type PrimitiveValueType =
  | "string"
  | "uint128"
  | "decimal"
  | "coin"
  | "bool"
  | "vec";

export interface StringPrimitive {
  string: string;
}

export interface Uint128Primitive {
  uin128: string;
}

export interface DecimalPrimitive {
  decimal: string;
}

export interface CoinPrimitive {
  coin: Coin;
}

export interface BoolPrimitive {
  bool: Boolean;
}

export interface VecPrimitive {
  vec: PrimitiveValue[];
}

export type PrimitiveValue =
  | StringPrimitive
  | Uint128Primitive
  | DecimalPrimitive
  | CoinPrimitive
  | BoolPrimitive
  | VecPrimitive;

export default class PrimitiveAPI extends BaseADOAPI {
  name = "primitive";

  msgSet(value: PrimitiveValue, key?: string) {
    return {
      set_value: {
        value,
        key,
      },
    };
  }

  async set(
    address: string,
    value: PrimitiveValue,
    fee: Fee,
    key?: string,
    memo?: string,
    funds?: Coin[]
  ) {
    const msg = this.msgSet(value, key);

    return this.client.execute(address, msg, fee, memo, funds);
  }

  msgGet(key: string) {
    return {
      andr_query: {
        get: encode(key),
      },
    };
  }

  async get<T = any>(address: string, key: string) {
    const msg = this.msgGet(key);

    const resp = await this.client.queryContract<{
      key: string;
      value: Record<PrimitiveValueType, any>;
    }>(address, msg);
    if (!resp.value) throw new Error("Could not query key");
    const valueKey: PrimitiveValueType = Object.keys(
      resp.value
    )[0] as PrimitiveValueType;
    const value: T = resp.value[valueKey];

    return value;
  }

  async create(
    operators: string[],
    fee: Fee,
    label?: string,
    options?: InstantiateOptions,
    factoryAddress?: string
  ) {
    const instantiateMsg = {
      operators,
    };
    return await super.create(
      instantiateMsg,
      fee,
      label,
      options,
      factoryAddress
    );
  }
}
