import { querySdk } from "../client";

/**
 * Queries a chain config by chain ID or config name
 * @param identifier
 * @returns
 */
export async function queryChainConfig(
  identifier: string
) {
  const resp = await querySdk.CHAIN_CONFIG({
    'identifier': identifier
  })

  return resp.chainConfigs.config;
}


/**
 * Queries all stored chain configs
 * @returns
 */
export async function queryAllChainConfigs() {
  const resp = await querySdk.ALL_CHAIN_CONFIG()
  return resp.chainConfigs.allConfigs;
}
