import { InstantiateOptions } from "@cosmjs/cosmwasm-stargate";
import AndromedaClient, { Fee } from "..";

export default class BaseADOAPI {
  name: string = "";
  constructor(public client: AndromedaClient) {
    this.client = client;
  }

  async fetchCodeId(factoryAddress?: string) {
    if (!this.name || this.name.length === 0)
      throw new Error("No name assigned to ADO type");

    const codeId = await this.client.ado.factory.getCodeId(
      this.name,
      factoryAddress
    );

    return codeId;
  }

  async create(
    instantiationMsg: Record<string, any>,
    fee: Fee,
    label = `Instantiate ${this.name}`,
    options?: InstantiateOptions,
    factoryAddress?: string
  ) {
    const codeId = await this.fetchCodeId(factoryAddress);
    return this.client.instantiate(codeId, instantiationMsg, label, fee, {
      admin: this.client.signer,
      ...options,
    });
  }
}
