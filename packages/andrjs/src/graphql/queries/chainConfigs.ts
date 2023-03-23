import { gql } from "graphql-request";
import { query } from "../client";
import type { ChainConfig } from "../../types";

export interface ChainConfigsResponse<T> {
  chainConfigs: T;
}

export interface QueryChainConfig {
  identifier: string; //Chain ID or config name
}
export type QueryChainConfigResponse = ChainConfigsResponse<{
  config: ChainConfig;
}>;

export const QUERY_CHAIN_CONFIG = gql`
  query QUERY_CHAIN_CONFIG($identifier: String!) {
    chainConfigs {
      config(identifier: $identifier) {
        name
        chainId
        chainUrl
        chainName
        chainType
        addressPrefix
        registryAddress
        kernelAddress
        blockExplorerAddressPages
        blockExplorerTxPages
        defaultFee
        iconUrls {
          sm
          lg
        }
      }
    }
  }
`;

/**
 * Queries a chain config by chain ID or config name
 * @param identifier
 * @returns
 */
export async function queryChainConfig(
  identifier: string
): Promise<ChainConfig> {
  const resp = await query<QueryChainConfig, QueryChainConfigResponse>(
    QUERY_CHAIN_CONFIG,
    { identifier }
  );

  return resp.chainConfigs.config;
}

export interface QueryAllChainConfigs {}
export type QueryAllChainConfigsResponse = ChainConfigsResponse<{
  allConfigs: ChainConfig[];
}>;

export const QUERY_ALL_CHAIN_CONFIGS = gql`
  query QUERY_ALL_CHAIN_CONFIGS {
    chainConfigs {
      allConfigs {
        name
        chainId
        chainUrl
        chainName
        chainType
        addressPrefix
        registryAddress
        kernelAddress
        blockExplorerAddressPages
        blockExplorerTxPages
        defaultFee
        iconUrls {
          sm
          lg
        }
      }
    }
  }
`;

/**
 * Queries all stored chain configs
 * @returns
 */
export async function queryAllChainConfigs(): Promise<ChainConfig[]> {
  const resp = await query<QueryAllChainConfigs, QueryAllChainConfigsResponse>(
    QUERY_ALL_CHAIN_CONFIGS
  );

  return resp.chainConfigs.allConfigs;
}
