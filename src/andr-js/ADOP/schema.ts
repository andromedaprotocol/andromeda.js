import { Schema } from "jsonschema";
import fetch from "node-fetch";
import AndromedaClient from "..";
import ADODefinitions from "./ado_registry.json";
import ADO from "./ADO";
import { PackageDefinition } from "../ADOP/types";

export async function fetchSchema(url: string): Promise<Schema> {
  if (!url || url.length === 0) throw new Error(`Invalid schema URL: ${url}`);

  const resp = await fetch(url);
  return resp.json() as unknown as Schema;
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
