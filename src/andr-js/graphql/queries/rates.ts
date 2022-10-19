import { query } from "../client";
import { gql } from "graphql-request";
import { ContractAddressQuery, Recipient } from "./types";
import { Coin } from "@cosmjs/proto-signing";

export interface RatesResponse<T> {
  rates: T;
}

export interface ADORate {
  address: string;
  key: string;
}
export interface DecimalRate {
  decimal: number;
}
export interface Rate {
  external: ADORate;
  flat: Coin;
  percent: DecimalRate;
}
export interface RateInfo {
  description: string;
  is_additive: boolean;
  rate: Rate;
  receivers: Recipient[];
}

export interface QueryRatesPayments extends ContractAddressQuery {}
export type QueryRatesPaymentsResponse = RatesResponse<{
  payments: RateInfo[];
}>;

export const QUERY_RATES_PAYMENTS = gql`
  query QUERY_RATES_PAYMENTS($contractAddress: String!) {
    rates(address: $contractAddress) {
      payments {
        description
        is_additive
        rate {
          external {
            address
            key
          }
          flat {
            amount
            denom
          }
          percent {
            decimal
          }
        }
        receivers
      }
    }
  }
`;

/**
 * Queries a rates contract for its stored rate info
 * @param contractAddress
 * @returns
 */
export async function queryPayments(
  contractAddress: string
): Promise<RateInfo[]> {
  const resp = await query<QueryRatesPayments, QueryRatesPaymentsResponse>(
    QUERY_RATES_PAYMENTS,
    { contractAddress }
  );

  return resp.rates.payments;
}
