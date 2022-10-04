import axios from "axios";
import ADODefinitions from "./ado_registry.json";
import type { Schema } from "jsonschema";

/**
 * Fetches schemas from a given URL
 * @param url
 * @returns
 */
export async function fetchSchema(url: string): Promise<Schema> {
  if (!url || url.length === 0) throw new Error(`Invalid schema URL: ${url}`);

  const resp = await axios.get(url);
  return resp.data as unknown as Schema;
}

/**
 * Gets schema URLs from the ADOP registry by the given type
 * @param adoType
 * @returns
 */
export function getSchemaURLsByType(adoType: string) {
  const definition = ADODefinitions.find(({ name }) => name === adoType);
  if (!definition)
    throw new Error(`Could not find schemas for ADO type ${adoType}`);

  return definition.schemas;
}

/**
 * Fetches all types from the ADOP registry
 */
export const adoTypes = ADODefinitions.map(({ name }) => name);
