import chainConfigs from "./configs.json";
import type { ChainConfig } from "../types";

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

/**
 * Gets a config by its name
 * @param name The config name
 * @returns
 */
export function getConfigByName(name: string): ChainConfig | undefined {
  if (!name || name.length === 0) return;
  const config = (configs as ChainConfig[]).find(
    (config) => config.name === name.trim()
  );

  return config;
}

export default configs;
