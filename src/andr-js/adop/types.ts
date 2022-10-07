import type { Schema } from "jsonschema";

export interface PackageSchemaURIs {
  execute: string;
  query: string;
  instantiate: string;
}

export interface PackageDefinition {
  name: string;
  schemas: PackageSchemaURIs;
}

export interface ReceiveSchemas {
  cw721?: Schema;
  cw20?: Schema;
}

export interface PackageSchemas {
  execute: Schema;
  query: Schema;
  instantiate: Schema;
  receive?: ReceiveSchemas;
}
