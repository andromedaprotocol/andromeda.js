import type { Coin } from "@cosmjs/proto-signing";
import type { StdFee } from "@cosmjs/stargate";

export type Fee = number | StdFee | "auto";
export type Msg = Record<string, unknown>;

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
