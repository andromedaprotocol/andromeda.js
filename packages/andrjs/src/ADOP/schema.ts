import axios from "axios";
import { ContractSchema } from "./types";

/**
 * Fetches schemas from a given URL
 * @param url
 * @returns
 */
export async function fetchSchema<T = ContractSchema>(url: string): Promise<T> {
  if (!url || url.length === 0) throw new Error(`Invalid schema URL: ${url}`);

  const resp = await axios.get(url);
  return resp.data as unknown as T;
}
