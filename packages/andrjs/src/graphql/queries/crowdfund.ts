import { querySdk } from "../client";
/**
 * Queries all available token IDs from a crowdfund contract
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundAvailableTokens(
  contractAddress: string
) {
  const resp = await querySdk.CROWDFUND_AVAILABLE_TOKENS({
    contractAddress
  })

  return resp.ADO.crowdfund.availableTokens;
}


/**
 * Queries the config for a given crowdfund contract
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundConfig(
  contractAddress: string
) {
  const resp = await querySdk.CROWDFUND_CONFIG({
    contractAddress
  })

  return resp.ADO.crowdfund.config;
}

export async function queryCrowdfundTokenAvailable(
  contractAddress: string,
  tokenId: string
) {
  const resp = await querySdk.CROWDFUND_IS_TOKEN_AVAILABLE({
    contractAddress,
    tokenId
  })

  return resp.ADO.crowdfund.isTokenAvailable;
}

/**
 * Queries the current crowdfund state
 * @param contractAddress
 * @returns
 */
export async function queryCrowdfundState(
  contractAddress: string
) {
  const resp = await querySdk.CROWDFUND_STATE({
    contractAddress
  })

  return resp.ADO.crowdfund.state;
}
