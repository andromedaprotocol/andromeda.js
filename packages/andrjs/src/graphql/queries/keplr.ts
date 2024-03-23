import { querySdk } from "../client";

/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export async function queryKeplrConfig(identifier: string) {
  const resp = await querySdk.KEPLR_CONFIG({
    identifier
  })
  return resp.keplrConfigs.config;
}


/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export async function QueryKeplrAllConfigs() {
  const resp = await querySdk.ALL_KEPLR_CONFIG()
  return resp.keplrConfigs.allConfigs;
}
