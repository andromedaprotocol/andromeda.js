import { InstantiateOptions } from "@cosmjs/cosmwasm-stargate";
import { Validator } from "jsonschema";
import AndromedaClient, { Fee } from "..";
import { fetchSchema } from "./schema";
import { PackageDefinition, PackageSchemas } from "./types";

export default class ADO {
  constructor(
    public client: AndromedaClient,
    public schemas: PackageSchemas,
    public name: string = ""
  ) {
    this.client = client;
    this.name = name;
    this.schemas = schemas;
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
    const validator = new Validator();
    validator.validate(instantiationMsg, this.schemas.instantiate);

    return this.client.instantiate(codeId, instantiationMsg, label, fee, {
      admin: this.client.signer,
      ...options,
    });
  }

  static async fromPackageDefinition(
    client: AndromedaClient,
    definition: PackageDefinition
  ) {
    const execute = await fetchSchema(definition.schemas.execute);
    const instantiate = await fetchSchema(definition.schemas.instantiate);
    const query = await fetchSchema(definition.schemas.query);
    const schemas = {
      execute,
      instantiate,
      query,
    };
    return new ADO(client, schemas, definition.name);
  }
}
