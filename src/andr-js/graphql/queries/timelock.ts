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
export interface QueryTimelockLockedFundsResponse {
  getLockedFunds: Escrow;
}

export const QUERY_TIMELOCK_LOCKED_FUNDS = gql`
  query QUERY_TIMELOCK_LOCKED_FUNDS(
    $contractAddress: String!
    $owner: String
    $recipient: String
  ) {
    timelock(contractAddress: $contractAddress) {
      getLockedFunds(owner: $owner, recipient: $recipient) {
        coins {
          denom
          amount
        }
        condition {
          expiration {
            at_height
            at_time
          }
          miniumFunds {
            denom
            amount
          }
        }
        recipient {
          a_d_o {
            address {
              identifier
            }
            msg
          }
          addr
        }
      }
    }
  }
`;

export interface QueryTimelockRecipientLockedFunds
  extends ContractAddressQuery,
    PaginatedRequiredQuery {
  recipient: string;
}
export interface QueryTimelockRecipientLockedFundsResponse {
  getLockedFundsForRecipient: Escrow[];
}

export const QUERY_TIMELOCK_RECIPIENT_LOCKED_FUNDS = gql`
  query QUERY_TIMELOCK_RECIPIENT_LOCKED_FUNDS(
    $contractAddress: String!
    $options: AndrSearchOptions!
    $recipient: String!
  ) {
    timelock(contractAddress: $contractAddress) {
      getLockedFundsForRecipient(options: $options, recipient: $recipient) {
        coins {
          amount
          denom
        }
        condition {
          expiration {
            at_height
            at_time
          }
          miniumFunds {
            amount
            denom
          }
        }
        recipient {
          a_d_o {
            address {
              identifier
            }
            msg
          }
          addr
        }
      }
    }
  }
`;

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

  return resp.getLockedFundsForRecipient;
}
