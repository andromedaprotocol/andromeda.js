import { Schema } from "jsonschema";

export interface PackageSchemaURIs {
  execute: string;
  query: string;
  instantiate: string;
}

export interface PackageDefinition {
  name: string;
  schemas: PackageSchemaURIs;
}

export interface PackageSchemas {
  execute: Schema;
  query: Schema;
  instantiate: Schema;
}
