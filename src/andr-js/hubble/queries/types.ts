export interface ContractAddressQuery {
  contractAddress: string;
}

export interface PaginatedQuery {
  options?: AndrSearchOptions;
}

export interface AndrSearchOptions {
  limit?: number;
  orderBy?: "Asc" | "Desc";
  startAfter?: number;
}

export interface Expiry {
  at_time?: number;
  at_height?: number;
}

export interface AndrAddress {
  identifier: string;
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
