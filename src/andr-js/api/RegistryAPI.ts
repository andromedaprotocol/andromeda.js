import type { Coin } from "@cosmjs/proto-signing";
import type { PrimitiveValue, PrimitiveValueType } from "../types";
import type AndromedaClient from "../AndromedaClient";
import type { Fee } from "../types";
import { encode, validateAddress } from "..";
import ADOAPI from "./ADOAPI";

export default class RegistryAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string = "") {
    super(client, address);
  }

  /**
   * Check to ensure the registry has a valid address
   */
  private preMessage() {
    if (
      !this.address ||
      this.address.length === 0 ||
      !validateAddress(this.address)
    )
      throw new Error("Registry has no assigned address");
  }

  /**
   * Provides a message object for the registry's `SetValue` message
   * @param value
   * @param key
   * @returns
   */
  setMsg(value: PrimitiveValue, key?: string) {
    return {
      set_value: {
        value,
        key,
      },
    };
  }

  /**
   * Sets the value for a given key (default if empty) within the registry
   * @param value
   * @param fee
   * @param key
   * @param memo
   * @param funds
   * @returns
   */
  async set(
    value: PrimitiveValue,
    fee: Fee,
    key?: string,
    memo?: string,
    funds?: Coin[]
  ) {
    this.preMessage();
    const msg = this.setMsg(value, key);

    return this.client.execute(this.address, msg, fee, memo, funds);
  }

  /**
   * Provides a message object for the registry's `GetValue` query
   * @param key
   * @returns
   */
  getQuery(key: string) {
    return {
      andr_query: {
        get: encode(key),
      },
    };
  }

  /**
   * Gets the value for a given key from the registry
   * @param key
   * @returns
   */
  async get<T = any>(key: string) {
    this.preMessage();
    const msg = this.getQuery(key);

    const resp = await this.client.queryContract<{
      key: string;
      value: Record<PrimitiveValueType, any>;
    }>(this.address, msg);
    if (!resp.value) throw new Error("Could not query key");
    const valueKey: PrimitiveValueType = Object.keys(
      resp.value
    )[0] as PrimitiveValueType;
    const value: T = resp.value[valueKey];

    return value;
  }

  /**
   * Simple wrapper for getting the address for a given key from the registry
   * @param key
   * @returns
   */
  async getAddress(key: string) {
    return this.get<string>(key);
  }

  /**
   * Simple wrpaper for setting the address for a given key within the registry
   * @param value
   * @param fee
   * @param key
   * @param memo
   * @param funds
   * @returns
   */
  async setAddress(
    value: PrimitiveValue,
    fee: Fee,
    key?: string,
    memo?: string,
    funds?: Coin[]
  ) {
    return this.set(value, fee, key, memo, funds);
  }
}
