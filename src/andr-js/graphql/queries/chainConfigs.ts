import { gql } from "graphql-request";
import { query } from "../client";
import type { ChainConfig } from "../../types";

export interface QueryChainConfig {
  identifier: string; //Chain ID or config name
}
export interface QueryChainConfigResponse {
  chainConfig: ChainConfig;
}

export const QUERY_CHAIN_CONFIG = gql`
  query QUERY_CHAIN_CONFIG($identifier: String!) {
    chainConfig(identifier: $identifier) {
      name
      chainId
      chainUrl
      chainName
      chainType
      addressPrefix
      registryAddress
      blockExplorerAddressPages
      blockExplorerTxPages
      defaultFee
      iconUrls {
        sm
        lg
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

  return resp.chainConfig;
}

export interface QueryAllChainConfigs {}
export interface QueryAllChainConfigsResponse {
  chainConfigs: ChainConfig[];
}

export const QUERY_ALL_CHAIN_CONFIGS = gql`
  query QUERY_ALL_CHAIN_CONFIGS {
    chainConfigs {
      name
      chainId
      chainUrl
      chainName
      chainType
      addressPrefix
      registryAddress
      blockExplorerAddressPages
      blockExplorerTxPages
      defaultFee
      iconUrls {
        sm
        lg
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

  return resp.chainConfigs;
}
