import Uni3 from "./uni-3.json";
import Galileo2 from "./galileo-2.json";
import Default from "./default.json";

export interface ChainConfig {
  /** The name for the config */
  name: string;
  /** The ID for the chain */
  chainId: string;
  /** The URL for the chain */
  chainUrl: string;
  /** The address of the Andromeda Registry */
  registryAddress: string;
  /** The prefix for any addresses on this chain */
  addressPrefix: string;
}

export const configs: ChainConfig[] = [Uni3, Galileo2, Default];

/**
 * Gets a config by its name
 * @param name The name of the Config
 * @returns
 */
export function getConfigByName(name: string): ChainConfig | undefined {
  const config = configs.find((config) => config.name === name.trim());

  return config;
}

/**
 * Gets a config by its chainId
 * @param chainId The chain ID for the Config
 * @returns
 */
export function getConfigByChainID(chainId: string): ChainConfig | undefined {
  const config = configs.find((config) => config.chainId === chainId.trim());

  return config;
}

export default configs;
