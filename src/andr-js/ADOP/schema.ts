import { Schema } from "jsonschema";
import axios from "axios";
import AndromedaClient from "..";
import ADODefinitions from "./ado_registry.json";
import ADO from "./ADO";
import { PackageDefinition } from "../ADOP/types";

export async function fetchSchema(url: string): Promise<Schema> {
  if (!url || url.length === 0) throw new Error(`Invalid schema URL: ${url}`);

  const resp = await axios.get(url);
  return resp.data as unknown as Schema;
}

export function getSchemasByType(type: string) {
  const definition = ADODefinitions.find(({ name }) => name === type);
  if (!definition)
    throw new Error(`Could not find schemas for ADO type ${type}`);

  return definition.schemas;
}

export async function generateDefaultADOPrototypes(client: AndromedaClient) {
  const prototypes: Record<string, ADO> = {};
  for (let i = 0; i < ADODefinitions.length; i++) {
    const definition: PackageDefinition = ADODefinitions[i];
    prototypes[definition.name] = await ADO.fromPackageDefinition(
      client,
      definition
    );
  }

  return prototypes;
}

export const adoTypes = ADODefinitions.map(({ name }) => name);
