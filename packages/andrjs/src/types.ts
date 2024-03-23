import { IChainConfig } from "@andromedaprotocol/gql";
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
  uint128: string;
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

/**
 * Object defining the type of primitive value
 */
export type PrimitiveValue =
  | StringPrimitive
  | Uint128Primitive
  | DecimalPrimitive
  | CoinPrimitive
  | BoolPrimitive
  | VecPrimitive;

export type ChainConfig = IChainConfig

/**
 * Object used to define an address used with the Andromeda ecosystem
 */
export interface AndrAddress {
  identifier: string;
}

export interface Module {
  /** The ADO type for the module */
  module_type: string;
  /** The address of the module */
  address: AndrAddress;
  /** Whether the module is mutable */
  is_mutable: boolean;
  /** The module idx (if it is already stored within a contract) */
  idx?: number;
}

/**
 * Object used to define optional parameters that can be used for an execute message.
 */
export interface OptionalExecuteParams {
  funds?: readonly Coin[] | Coin[];
  memo?: string;
  fee?: StdFee;
}
