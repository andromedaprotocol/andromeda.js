import { Coin } from "@cosmjs/proto-signing";
import AndromedaClient, { Fee } from "..";
import PrimitiveAPI, { PrimitiveValue } from "./PrimitiveAPI";

export default class RegistryAPI extends PrimitiveAPI {
  name = "registry";
  constructor(public address: string, client: AndromedaClient) {
    super(client);
    this.address = address;
  }

  async getAddress(key: string) {
    return super.get<string>(this.address, key);
  }

  async setAddress(
    value: PrimitiveValue,
    fee: Fee,
    key?: string,
    memo?: string,
    funds?: Coin[]
  ) {
    return super.set(this.address, value, fee, key, memo, funds);
  }
}
