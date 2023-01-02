import type { ChainInfo } from "@keplr-wallet/types";
import { gql } from "graphql-request";
import { query } from "../client";

export const KEPLR_CONFIG_DATA = gql`
  fragment KeplrConfigData on KeplrConfig {
    chainId
    bech32Config {
      bech32PrefixAccAddr
      bech32PrefixAccPub
      bech32PrefixConsAddr
      bech32PrefixConsPub
      bech32PrefixValAddr
      bech32PrefixValPub
    }
    stakeCurrency {
      coinDecimals
      coinDenom
      coinGeckoId
      coinMinimalDenom
    }
    bip44 {
      coinType
    }
    chainId
    chainName
    coinType
    currencies {
      coinDecimals
      coinDenom
      coinGeckoId
      coinMinimalDenom
    }
    feeCurrencies {
      coinDecimals
      coinDenom
      coinGeckoId
      coinMinimalDenom
    }
    gasPriceStep {
      average
      high
      low
    }
    rest
    rpc
  }
`;

export interface KeplrConfigsResponse<T> {
  keplrConfigs: T;
}

export interface QueryKeplrConfig {
  identifier: string;
}

export type QueryKeplrConfigResponse = KeplrConfigsResponse<{
  config: ChainInfo;
}>;

export const QUERY_KEPLR_CONFIG = gql`
  query QUERY_KEPLR_CONFIG($identifier: String!) {
    keplrConfigs {
      config(identifier: $identifier) {
        ...KeplrConfigData
      }
    }
  }
  ${KEPLR_CONFIG_DATA}
`;

/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export async function queryKeplrConfig(identifier: string) {
  const resp = await query<QueryKeplrConfig, QueryKeplrConfigResponse>(
    QUERY_KEPLR_CONFIG,
    {
      identifier,
    }
  );
  return resp.keplrConfigs.config;
}

export interface QueryKeplrAllConfigs {}

export type QueryKeplrAllConfigsResponse = KeplrConfigsResponse<{
  allConfigs: ChainInfo[];
}>;

export const QUERY_KEPLR_ALL_CONFIGS = gql`
  query QUERY_KEPLR_ALL_CONFIGS {
    keplrConfigs {
      allConfigs {
        ...KeplrConfigData
      }
    }
  }
  ${KEPLR_CONFIG_DATA}
`;

/**
 * Queries a stored Keplr chain config by identifier
 * @param identifier The chain ID for the config to query
 * @returns
 */
export async function QueryKeplrAllConfigs() {
  const resp = await query<QueryKeplrAllConfigs, QueryKeplrAllConfigsResponse>(
    QUERY_KEPLR_CONFIG,
    {}
  );
  return resp.keplrConfigs.allConfigs;
}
