import { query } from "../client";
import { gql } from "graphql-request";
import {
  AndrSearchOptions,
  ContractAddressQuery,
  Expiry,
  PaginatedRequiredQuery,
  Recipient,
} from "./types";
import { Coin } from "@cosmjs/proto-signing";

export interface TimelockResponse<T> {
  timelock: T;
}

export interface EscrowExpiryCondition {
  expiration: Expiry;
}
export interface EscrowMinFundsCondition {
  minimumFunds: Coin[];
}
export type EscrowCondition = EscrowExpiryCondition | EscrowMinFundsCondition;
export interface Escrow {
  coins: Coin[];
  condition: EscrowCondition;
  recipient: Recipient;
}

export interface QueryTimelockLockedFunds extends ContractAddressQuery {
  owner: string;
  recipient: string;
}
export type QueryTimelockLockedFundsResponse = TimelockResponse<{
  getLockedFunds: Escrow;
}>;

export const QUERY_TIMELOCK_LOCKED_FUNDS = gql`
  query QUERY_TIMELOCK_LOCKED_FUNDS(
    $contractAddress: String!
    $owner: String!
    $recipient: String!
  ) {
    timelock(address: $contractAddress) {
      getLockedFunds(owner: $owner, recipient: $recipient) {
        coins {
          denom
          amount
        }
        condition {
          expiration
          miniumFunds {
            denom
            amount
          }
        }
        recipient
      }
    }
  }
`;

/**
 * Queries a timelock contract for locked funds given an owner/recipient tuple
 * @param contractAddress
 * @param owner
 * @param recipient
 * @returns
 */
export async function queryTimelockLockedFunds(
  contractAddress: string,
  owner: string,
  recipient: string
) {
  const resp = await query<
    QueryTimelockLockedFunds,
    QueryTimelockLockedFundsResponse
  >(QUERY_TIMELOCK_LOCKED_FUNDS, { contractAddress, owner, recipient });

  return resp.timelock.getLockedFunds;
}

export interface QueryTimelockRecipientLockedFunds
  extends ContractAddressQuery,
    PaginatedRequiredQuery {
  recipient: string;
}
export type QueryTimelockRecipientLockedFundsResponse = TimelockResponse<{
  getLockedFundsForRecipient: Escrow[];
}>;

export const QUERY_TIMELOCK_RECIPIENT_LOCKED_FUNDS = gql`
  query QUERY_TIMELOCK_RECIPIENT_LOCKED_FUNDS(
    $contractAddress: String!
    $options: AndrSearchOptions!
    $recipient: String!
  ) {
    timelock(address: $contractAddress) {
      getLockedFundsForRecipient(options: $options, recipient: $recipient) {
        coins {
          amount
          denom
        }
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
        recipient
      }
    }
  }
`;

/**
 * Queries a timelock contract for all locked funds for a given recipient
 * @param contractAddress
 * @param recipient
 * @param options
 * @returns
 */
export async function queryRecipientLockedFunds(
  contractAddress: string,
  recipient: string,
  options: AndrSearchOptions
): Promise<Escrow[]> {
  const resp = await query<
    QueryTimelockRecipientLockedFunds,
    QueryTimelockRecipientLockedFundsResponse
  >(QUERY_TIMELOCK_RECIPIENT_LOCKED_FUNDS, {
    contractAddress,
    options,
    recipient,
  });

  return resp.timelock.getLockedFundsForRecipient;
}
