import { querySdk } from "../client";

/**
 * Queries the token info for a given token contract
 * @param contractAddress
 * @returns
 */
export async function queryCW20TokenInfo(
  contractAddress: string
) {
  const resp = await querySdk.CW20_TOKEN_INFO({
    contractAddress
  })

  return resp.ADO.cw20.tokenInfo;
}
