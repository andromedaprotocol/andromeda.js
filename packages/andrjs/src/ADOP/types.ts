import type { Schema } from "jsonschema";

export interface ContractSchema {
  contract_name: string;
  contract_version: string;
  execute: Schema;
  instantiate: Schema;
  query: Schema;
  migrate: Schema;
  responses: Schema;
}

export interface PackageSchemaURIs {
  contract_schema: string;
  receive?: {
    cw721?: string;
    cw20?: string;
  };
}

export interface PackageDefinition {
  name: string;
  schemas: PackageSchemaURIs;
}

export interface ReceiveSchemas {
  cw721?: Schema;
  cw20?: Schema;
}
