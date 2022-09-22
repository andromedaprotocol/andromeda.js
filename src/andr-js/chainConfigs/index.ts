import chainConfigs from "./configs.json";

export interface ChainConfig {
  /** The name of the config */
  name: string;
  /** The ID for the chain */
  chainId: string;
  /** The URL for the chain */
  chainUrl: string;
  /** The address of the Andromeda Registry */
  registryAddress: string;
  /** The prefix for any addresses on this chain */
  addressPrefix: string;
  /** The default fee value for the chain, e.g. "0.025ujunox" */
  defaultFee: string;
  /** Block explorer transaction pages */
  blockExplorerTxPages: string[];
}

//Strictly for typing
export const configs = chainConfigs as ChainConfig[];

/**
 * Gets a config by its chainId
 * @param chainId The chain ID for the Config
 * @returns
 */
export function getConfigByChainID(chainId: string): ChainConfig | undefined {
  if (!chainId || chainId.length === 0) return;
  const config = (configs as ChainConfig[]).find(
    (config) => config.chainId === chainId.trim()
  );

  return config;
}

export function getConfigByName(name: string): ChainConfig | undefined {
  if (!name || name.length === 0) return;
  const config = (configs as ChainConfig[]).find(
    (config) => config.name === name.trim()
  );

  return config;
}

export default configs;
