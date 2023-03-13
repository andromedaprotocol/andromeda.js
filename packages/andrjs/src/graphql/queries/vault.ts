import { query } from "../client";
import { gql } from "graphql-request";
import { ContractAddressQuery } from "./types";
import { Coin } from "@cosmjs/proto-signing";

export type StrategyType = "Anchor";
export interface VaultStrategy {
  address: string;
  strategyType: StrategyType;
}

export interface QueryVaultBalance extends ContractAddressQuery {
  address: string;
}
export interface QueryVaultBalanceResponse {
  balance: Coin[];
}

export const QUERY_VAULT_BALANCE = gql`
  query QUERY_VAULT_BALANCE($contractAddress: String!, $address: String!) {
    vault(contractAddress: $contractAddress) {
      balance(address: $address) {
        amount
        denom
      }
    }
  }
`;

export async function queryBalance(
  contractAddress: string,
  address: string
): Promise<Coin[]> {
  const resp = await query<QueryVaultBalance, QueryVaultBalanceResponse>(
    QUERY_VAULT_BALANCE,
    { contractAddress, address }
  );

  return resp.balance;
}

export interface QueryVaultStrategyAddress extends ContractAddressQuery {
  strategy: StrategyType;
}
export interface QueryVaultStrategyAddressResponse {
  strategyAddress: VaultStrategy;
}

export const QUERY_VAULT_STRATEGY_ADDRESS = gql`
  query QUERY_VAULT_STRATEGY_ADDRESS(
    $contractAddress: String!
    $strategy: String!
  ) {
    vault(contractAddress: $contractAddress) {
      strategyAddress(strategy: $strategy) {
        address
        strategyType
      }
    }
  }
`;

export async function queryStrategyAddress(
  contractAddress: string,
  strategy: StrategyType
): Promise<VaultStrategy> {
  const resp = await query<
    QueryVaultStrategyAddress,
    QueryVaultStrategyAddressResponse
  >(QUERY_VAULT_STRATEGY_ADDRESS, { contractAddress, strategy });

  return resp.strategyAddress;
}
