import { Coin } from "@cosmjs/proto-signing";
import { encode } from "../utils";
import { Fee } from "..";
import ADO from "./ADO";

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

export default class Primitive extends ADO {
  async set(
    value: PrimitiveValue,
    fee: Fee,
    key?: string,
    memo?: string,
    funds?: Coin[]
  ) {
    const msg = {
      set_value: {
        value,
        key,
      },
    };
    return this.client.execute(this.address, msg, fee, memo, funds);
  }

  async get<T = any>(key: string) {
    const msg = {
      andr_query: {
        get: encode(key),
      },
    };
    const resp = await this.client.queryContract<{
      key: string;
      value: Record<PrimitiveValueType, any>;
    }>(this.address, msg);

    const valueKey: PrimitiveValueType = Object.keys(
      resp.value
    )[0] as PrimitiveValueType;
    const value: T = resp.value[valueKey];

    return value;
  }
}
