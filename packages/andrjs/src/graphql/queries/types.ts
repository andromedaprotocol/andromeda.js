import { AndrAddress } from "../../types";

export interface ContractAddressQuery {
  contractAddress: string;
}

export interface PaginatedQuery {
  options?: AndrSearchOptions;
}

export interface PaginatedRequiredQuery {
  options: AndrSearchOptions;
}

/**
 * Defines paginated query options
 */
export interface AndrSearchOptions {
  limit?: number;
  orderBy?: "Asc" | "Desc";
  startAfter?: number;
}

export interface Expiry {
  at_time?: number;
  at_height?: number;
}

export interface RecipientADO {
  a_d_o: {
    address: AndrAddress;
    msg?: string;
  };
}

export interface RecipientAddress {
  addr: string;
}

export type Recipient = RecipientADO | RecipientAddress;

export interface ChainIdQuery {
  chainId: string;
}

export interface TxQuery extends ChainIdQuery {
  minHeight?: number;
  maxHeight?: number;
}
