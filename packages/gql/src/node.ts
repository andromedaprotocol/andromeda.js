import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: { [key: string]: any }; output: { [key: string]: any }; }
};

export type IAdoAddedSubscriptionInput = {
  owner: Scalars['String']['input'];
};

export type IAdoInput = {
  address: Scalars['String']['input'];
  adoType: Scalars['String']['input'];
  appContract?: InputMaybe<Scalars['String']['input']>;
  chainId: Scalars['String']['input'];
  instantiateHash: Scalars['String']['input'];
  instantiateHeight: Scalars['Int']['input'];
  lastUpdatedHash: Scalars['String']['input'];
  lastUpdatedHeight: Scalars['Int']['input'];
  minter?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner: Scalars['String']['input'];
};

export type IAdoOwnerUpdatedSubscriptionInput = {
  owner: Scalars['String']['input'];
};

export enum IAdoType {
  ADDRESSLIST = 'AddressList',
  ADO = 'Ado',
  APP = 'App',
  AUCTION = 'Auction',
  CW20 = 'CW20',
  CW20EXCHANGE = 'CW20Exchange',
  CW20STAKING = 'CW20Staking',
  CW721 = 'CW721',
  CW721BIDS = 'CW721Bids',
  CW721TIMELOCK = 'CW721Timelock',
  CROWDFUND = 'Crowdfund',
  FACTORY = 'Factory',
  GUMBALL = 'Gumball',
  LOCKDROP = 'Lockdrop',
  MARKETPLACE = 'Marketplace',
  MERKLEAIRDROP = 'MerkleAirdrop',
  NFTSTAKING = 'NftStaking',
  PRIMITIVE = 'Primitive',
  RATELIMITINGWITHDRAWALS = 'RateLimitingWithdrawals',
  RATES = 'Rates',
  RECEIPT = 'Receipt',
  SPLITTER = 'Splitter',
  TIMELOCK = 'Timelock',
  UNKNOWN = 'Unknown',
  VAULT = 'Vault',
  VESTING = 'Vesting',
  WEIGHTEDDISTRIBUTIONSPLITTER = 'WeightedDistributionSplitter',
  WEIGHTEDSPLITTER = 'WeightedSplitter',
  WRAPPEDCW721 = 'WrappedCW721'
}

export enum IAndrOrderBy {
  ASC = 'Asc',
  DESC = 'Desc'
}

export type IAndrSearchOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IAndrOrderBy>;
  startAfter?: InputMaybe<Scalars['String']['input']>;
};

export enum IAndrStrategyType {
  ANCHOR = 'Anchor'
}

export type ISearchAttribute = {
  trait_type: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type IUpdateAdoOwnerInput = {
  address: Scalars['String']['input'];
  newOwner: Scalars['String']['input'];
  txHeight: Scalars['Int']['input'];
};

export type IQueryappQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IQueryappQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, addresses: Array<{ __typename?: 'AppComponentAddress', address: string, name: string }>, components: Array<{ __typename?: 'AppComponent', name: string, ado_type: string }>, config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type IBaseadoQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type IBaseadoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IAndrFragmentFragment = { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string };


export type IAndrFragmentFragmentVariables = Exact<{ [key: string]: never; }>;

export const AndrFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment andrFragment on AndrQuery {
  admin
  address
  blockHeightUponCreation
  codeId
  creator
  contractVersion
  ibcPortId
  label
  owner
  operators
  originalPublisher
  queries_expected
  type
  version
}
    `;
export const QueryappDocument = /*#__PURE__*/ gql`
    query QUERYAPP($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      addresses {
        address
        name
      }
      components {
        name
        ado_type
      }
      config {
        name
        owner
      }
    }
  }
}
    `;
export const BaseadoDocument = /*#__PURE__*/ gql`
    query BASEADO($contractAddress: String!, $version: String) {
  ADO {
    ado(address: $contractAddress, version: $version) {
      address
      type
      andr {
        ...andrFragment
      }
    }
  }
}
    ${AndrFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    QUERYAPP(variables: IQueryappQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IQueryappQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IQueryappQuery>(QueryappDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'QUERYAPP', 'query');
    },
    BASEADO(variables: IBaseadoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IBaseadoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IBaseadoQuery>(BaseadoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BASEADO', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;