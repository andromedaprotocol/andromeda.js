import Uni3 from "./uni-3.json";
import Galileo2 from "./galileo-2.json";
import Default from "./default.json";
import Elgafar1 from "./elgafar-1.json";

export interface ChainConfig {
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

export const configs: ChainConfig[] = [Uni3, Galileo2, Default, Elgafar1];

/**
 * Gets a config by its chainId
 * @param chainId The chain ID for the Config
 * @returns
 */
export function getConfigByChainID(chainId: string): ChainConfig | undefined {
  if (!chainId || chainId.length === 0) return;
  const config = configs.find((config) => config.chainId === chainId.trim());

  return config;
}

export default configs;
