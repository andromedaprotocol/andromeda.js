import axios from "axios";
import { Schema } from "jsonschema";
import ADODefinitions from "./ado_registry.json";

export async function fetchSchema(url: string): Promise<Schema> {
  if (!url || url.length === 0) throw new Error(`Invalid schema URL: ${url}`);

  const resp = await axios.get(url);
  return resp.data as unknown as Schema;
}

export function getSchemaURLsByType(type: string) {
  const definition = ADODefinitions.find(({ name }) => name === type);
  if (!definition)
    throw new Error(`Could not find schemas for ADO type ${type}`);

  return definition.schemas;
}

export const adoTypes = ADODefinitions.map(({ name }) => name);
