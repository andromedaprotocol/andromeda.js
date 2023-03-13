import { bech32 } from "bech32";

/**
 * Encodes data into a base64 string
 * @param data
 * @returns
 */
export function encode(data: any): string {
  return Buffer.from(JSON.stringify(data)).toString("base64");
}

/**
 * Validates a given address. If an address prefix is provided it will also be validated.
 * @param addr
 * @param addressPrefix
 * @returns
 */
export function validateAddress(addr: string, addressPrefix?: string) {
  try {
    const resp = bech32.decode(addr);
    return !addressPrefix || resp.prefix === addressPrefix;
  } catch (error) {
    throw error;
  }
}

/**
 * Gets a TX URL from a given hash and explorer URL
 * @param hash
 * @param url
 * @returns
 */
export function getTxExplorerURL(hash: string, url: string) {
  if (!url.includes("${txHash}"))
    throw new Error("Provided URL does not include '${txHash}'");

  return url.replace("${txHash}", hash);
}
