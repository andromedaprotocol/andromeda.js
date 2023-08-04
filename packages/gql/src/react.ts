import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type IAppConfigQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type IAppComponentsQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppComponentsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }> } } };

export type IAppMasterQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppMasterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, type: string, config: { __typename?: 'AppConfig', name: string, owner: string }, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }>, andr: { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IAssetsQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  adoType?: InputMaybe<IAdoType>;
  orderBy?: InputMaybe<IAndrOrderBy>;
}>;


export type IAssetsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', assets: Array<{ __typename?: 'AssetResult', address: string, adoType: string, appContract: string, chainId: string, instantiateHash: string, instantiateHeight: number, lastUpdatedHash: string, lastUpdatedHeight: number, name: string, owner: string }> } };

export type IAssetsMasterQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  adoType?: InputMaybe<IAdoType>;
  orderBy?: InputMaybe<IAndrOrderBy>;
}>;


export type IAssetsMasterQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', assets: Array<{ __typename?: 'AssetResult', address: string, adoType: string, appContract: string, chainId: string, instantiateHash: string, instantiateHeight: number, lastUpdatedHash: string, lastUpdatedHeight: number, name: string, owner: string, components: Array<{ __typename?: 'Component', address: string, ado_type: string, instantiate_msg: string, name: string }> }> } };

export type IBaseAdoQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IBaseAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IAndrFragmentFragment = { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string };


export type IAndrFragmentFragmentVariables = Exact<{ [key: string]: never; }>;

export type IComponentFragment = { __typename?: 'Component', address: string, ado_type: string, instantiate_msg: string, name: string };


export type IComponentFragmentVariables = Exact<{ [key: string]: never; }>;

export type IAppComponentFragment = { __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string };


export type IAppComponentFragmentVariables = Exact<{ [key: string]: never; }>;

export type IChainConfigQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
}>;


export type IChainConfigQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', config: { __typename?: 'ChainConfig', addressPrefix: string, blockExplorerTxPages: Array<string>, blockExplorerAddressPages: Array<string>, chainId: string, chainUrl: string, chainName: string, chainType: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', sm: string, lg: string } } } };

export type IAllChainConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type IAllChainConfigQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', allConfigs: Array<{ __typename?: 'ChainConfig', addressPrefix: string, blockExplorerTxPages: Array<string>, blockExplorerAddressPages: Array<string>, chainId: string, chainUrl: string, chainName: string, chainType: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', sm: string, lg: string } }> } };

export type IKeplrConfigFragment = { __typename?: 'KeplrConfig', chainId: string, coinType: number, chainName: string, rpc: string, rest: string, bip44: { __typename?: 'Bip44', coinType: number }, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccPub: string, bech32PrefixValPub: string, bech32PrefixAccAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixConsAddr: string }, currencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, low: number, high: number }, stakeCurrency: { __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string } };


export type IKeplrConfigFragmentVariables = Exact<{ [key: string]: never; }>;

export type ICurrencyFragment = { __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string };


export type ICurrencyFragmentVariables = Exact<{ [key: string]: never; }>;

export type IBech32configFragment = { __typename?: 'Bech32Config', bech32PrefixAccPub: string, bech32PrefixValPub: string, bech32PrefixAccAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixConsAddr: string };


export type IBech32configFragmentVariables = Exact<{ [key: string]: never; }>;

export type IChainConfigFragment = { __typename?: 'ChainConfig', addressPrefix: string, blockExplorerTxPages: Array<string>, blockExplorerAddressPages: Array<string>, chainId: string, chainUrl: string, chainName: string, chainType: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', sm: string, lg: string } };


export type IChainConfigFragmentVariables = Exact<{ [key: string]: never; }>;

export type IKeplrConfigQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
}>;


export type IKeplrConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', chainId: string, coinType: number, chainName: string, rpc: string, rest: string, bip44: { __typename?: 'Bip44', coinType: number }, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccPub: string, bech32PrefixValPub: string, bech32PrefixAccAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixConsAddr: string }, currencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, low: number, high: number }, stakeCurrency: { __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string } } } };

export type IAllKeplrConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type IAllKeplrConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', chainId: string, coinType: number, chainName: string, rpc: string, rest: string, bip44: { __typename?: 'Bip44', coinType: number }, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccPub: string, bech32PrefixValPub: string, bech32PrefixAccAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixConsAddr: string }, currencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, low: number, high: number }, stakeCurrency: { __typename?: 'Currency', coinDenom: string, coinGeckoId: string, coinDecimals: number, coinMinimalDenom: string } }> } };

export type ITxByContractQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  contractAddress: Scalars['String']['input'];
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ITxByContractQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number }> } };

export type ITxByContractMasterQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  contractAddress: Scalars['String']['input'];
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ITxByContractMasterQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: { [key: string]: any }, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ITxInfoFragment = { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number };


export type ITxInfoFragmentVariables = Exact<{ [key: string]: never; }>;

export type ITxInfoMasterFragment = { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: { [key: string]: any }, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> };


export type ITxInfoMasterFragmentVariables = Exact<{ [key: string]: never; }>;

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
export const ComponentFragmentDoc = /*#__PURE__*/ gql`
    fragment component on Component {
  address
  ado_type
  instantiate_msg
  name
}
    `;
export const AppComponentFragmentDoc = /*#__PURE__*/ gql`
    fragment appComponent on AppComponent {
  address
  ado_type
  instantiate_msg
  name
}
    `;
export const Bech32configFragmentDoc = /*#__PURE__*/ gql`
    fragment bech32config on Bech32Config {
  bech32PrefixAccPub
  bech32PrefixValPub
  bech32PrefixAccAddr
  bech32PrefixConsPub
  bech32PrefixValAddr
  bech32PrefixConsAddr
}
    `;
export const CurrencyFragmentDoc = /*#__PURE__*/ gql`
    fragment currency on Currency {
  coinDenom
  coinGeckoId
  coinDecimals
  coinMinimalDenom
}
    `;
export const KeplrConfigFragmentDoc = /*#__PURE__*/ gql`
    fragment keplrConfig on KeplrConfig {
  bip44 {
    coinType
  }
  bech32Config {
    ...bech32config
  }
  chainId
  coinType
  chainName
  currencies {
    ...currency
  }
  feeCurrencies {
    ...currency
  }
  gasPriceStep {
    average
    low
    high
  }
  rpc
  rest
  stakeCurrency {
    ...currency
  }
}
    ${Bech32configFragmentDoc}
${CurrencyFragmentDoc}`;
export const ChainConfigFragmentDoc = /*#__PURE__*/ gql`
    fragment chainConfig on ChainConfig {
  addressPrefix
  blockExplorerTxPages
  blockExplorerAddressPages
  chainId
  chainUrl
  chainName
  chainType
  defaultFee
  iconUrls {
    sm
    lg
  }
  kernelAddress
  name
  registryAddress
}
    `;
export const TxInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment txInfo on TxInfo {
  code
  gasUsed
  gasWanted
  hash
  height
}
    `;
export const TxInfoMasterFragmentDoc = /*#__PURE__*/ gql`
    fragment txInfoMaster on TxInfo {
  code
  events {
    type
    attributes {
      key
      value
    }
  }
  gasUsed
  gasWanted
  hash
  height
  rawLog
  tx
  txLog {
    events {
      type
      attributes {
        key
        value
      }
    }
  }
}
    `;
export const AppConfigDocument = /*#__PURE__*/ gql`
    query APP_CONFIG($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      config {
        name
        owner
      }
    }
  }
}
    `;

/**
 * __useAppConfigQuery__
 *
 * To run a query within a React component, call `useAppConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppConfigQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useAppConfigQuery(baseOptions: Apollo.QueryHookOptions<IAppConfigQuery, IAppConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAppConfigQuery, IAppConfigQueryVariables>(AppConfigDocument, options);
      }
export function useAppConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppConfigQuery, IAppConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAppConfigQuery, IAppConfigQueryVariables>(AppConfigDocument, options);
        }
export type AppConfigQueryHookResult = ReturnType<typeof useAppConfigQuery>;
export type AppConfigLazyQueryHookResult = ReturnType<typeof useAppConfigLazyQuery>;
export type AppConfigQueryResult = Apollo.QueryResult<IAppConfigQuery, IAppConfigQueryVariables>;
export function refetchAppConfigQuery(variables: IAppConfigQueryVariables) {
      return { query: AppConfigDocument, variables: variables }
    }
export const AppComponentsDocument = /*#__PURE__*/ gql`
    query APP_COMPONENTS($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      components {
        ...appComponent
      }
    }
  }
}
    ${AppComponentFragmentDoc}`;

/**
 * __useAppComponentsQuery__
 *
 * To run a query within a React component, call `useAppComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppComponentsQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useAppComponentsQuery(baseOptions: Apollo.QueryHookOptions<IAppComponentsQuery, IAppComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAppComponentsQuery, IAppComponentsQueryVariables>(AppComponentsDocument, options);
      }
export function useAppComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppComponentsQuery, IAppComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAppComponentsQuery, IAppComponentsQueryVariables>(AppComponentsDocument, options);
        }
export type AppComponentsQueryHookResult = ReturnType<typeof useAppComponentsQuery>;
export type AppComponentsLazyQueryHookResult = ReturnType<typeof useAppComponentsLazyQuery>;
export type AppComponentsQueryResult = Apollo.QueryResult<IAppComponentsQuery, IAppComponentsQueryVariables>;
export function refetchAppComponentsQuery(variables: IAppComponentsQueryVariables) {
      return { query: AppComponentsDocument, variables: variables }
    }
export const AppMasterDocument = /*#__PURE__*/ gql`
    query APP_MASTER($contractAddress: String!) {
  ADO {
    app(address: $contractAddress) {
      address
      config {
        name
        owner
      }
      components {
        ...appComponent
      }
      type
      andr {
        ...andrFragment
      }
    }
  }
}
    ${AppComponentFragmentDoc}
${AndrFragmentFragmentDoc}`;

/**
 * __useAppMasterQuery__
 *
 * To run a query within a React component, call `useAppMasterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppMasterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppMasterQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useAppMasterQuery(baseOptions: Apollo.QueryHookOptions<IAppMasterQuery, IAppMasterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAppMasterQuery, IAppMasterQueryVariables>(AppMasterDocument, options);
      }
export function useAppMasterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppMasterQuery, IAppMasterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAppMasterQuery, IAppMasterQueryVariables>(AppMasterDocument, options);
        }
export type AppMasterQueryHookResult = ReturnType<typeof useAppMasterQuery>;
export type AppMasterLazyQueryHookResult = ReturnType<typeof useAppMasterLazyQuery>;
export type AppMasterQueryResult = Apollo.QueryResult<IAppMasterQuery, IAppMasterQueryVariables>;
export function refetchAppMasterQuery(variables: IAppMasterQueryVariables) {
      return { query: AppMasterDocument, variables: variables }
    }
export const AssetsDocument = /*#__PURE__*/ gql`
    query ASSETS($walletAddress: String!, $limit: Int!, $offset: Int!, $search: String, $adoType: AdoType, $orderBy: AndrOrderBy) {
  accounts {
    assets(
      walletAddress: $walletAddress
      limit: $limit
      offset: $offset
      search: $search
      adoType: $adoType
      orderBy: $orderBy
    ) {
      address
      adoType
      appContract
      chainId
      instantiateHash
      instantiateHeight
      lastUpdatedHash
      lastUpdatedHeight
      name
      owner
    }
  }
}
    `;

/**
 * __useAssetsQuery__
 *
 * To run a query within a React component, call `useAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetsQuery({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      search: // value for 'search'
 *      adoType: // value for 'adoType'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAssetsQuery(baseOptions: Apollo.QueryHookOptions<IAssetsQuery, IAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAssetsQuery, IAssetsQueryVariables>(AssetsDocument, options);
      }
export function useAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAssetsQuery, IAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAssetsQuery, IAssetsQueryVariables>(AssetsDocument, options);
        }
export type AssetsQueryHookResult = ReturnType<typeof useAssetsQuery>;
export type AssetsLazyQueryHookResult = ReturnType<typeof useAssetsLazyQuery>;
export type AssetsQueryResult = Apollo.QueryResult<IAssetsQuery, IAssetsQueryVariables>;
export function refetchAssetsQuery(variables: IAssetsQueryVariables) {
      return { query: AssetsDocument, variables: variables }
    }
export const AssetsMasterDocument = /*#__PURE__*/ gql`
    query ASSETS_MASTER($walletAddress: String!, $limit: Int!, $offset: Int!, $search: String, $adoType: AdoType, $orderBy: AndrOrderBy) {
  accounts {
    assets(
      walletAddress: $walletAddress
      limit: $limit
      offset: $offset
      search: $search
      adoType: $adoType
      orderBy: $orderBy
    ) {
      address
      adoType
      appContract
      chainId
      components {
        ...component
      }
      instantiateHash
      instantiateHeight
      lastUpdatedHash
      lastUpdatedHeight
      name
      owner
    }
  }
}
    ${ComponentFragmentDoc}`;

/**
 * __useAssetsMasterQuery__
 *
 * To run a query within a React component, call `useAssetsMasterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetsMasterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetsMasterQuery({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      search: // value for 'search'
 *      adoType: // value for 'adoType'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useAssetsMasterQuery(baseOptions: Apollo.QueryHookOptions<IAssetsMasterQuery, IAssetsMasterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAssetsMasterQuery, IAssetsMasterQueryVariables>(AssetsMasterDocument, options);
      }
export function useAssetsMasterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAssetsMasterQuery, IAssetsMasterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAssetsMasterQuery, IAssetsMasterQueryVariables>(AssetsMasterDocument, options);
        }
export type AssetsMasterQueryHookResult = ReturnType<typeof useAssetsMasterQuery>;
export type AssetsMasterLazyQueryHookResult = ReturnType<typeof useAssetsMasterLazyQuery>;
export type AssetsMasterQueryResult = Apollo.QueryResult<IAssetsMasterQuery, IAssetsMasterQueryVariables>;
export function refetchAssetsMasterQuery(variables: IAssetsMasterQueryVariables) {
      return { query: AssetsMasterDocument, variables: variables }
    }
export const BaseAdoDocument = /*#__PURE__*/ gql`
    query BASE_ADO($contractAddress: String!) {
  ADO {
    ado(address: $contractAddress) {
      address
      type
      andr {
        ...andrFragment
      }
    }
  }
}
    ${AndrFragmentFragmentDoc}`;

/**
 * __useBaseAdoQuery__
 *
 * To run a query within a React component, call `useBaseAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBaseAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBaseAdoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useBaseAdoQuery(baseOptions: Apollo.QueryHookOptions<IBaseAdoQuery, IBaseAdoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IBaseAdoQuery, IBaseAdoQueryVariables>(BaseAdoDocument, options);
      }
export function useBaseAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IBaseAdoQuery, IBaseAdoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IBaseAdoQuery, IBaseAdoQueryVariables>(BaseAdoDocument, options);
        }
export type BaseAdoQueryHookResult = ReturnType<typeof useBaseAdoQuery>;
export type BaseAdoLazyQueryHookResult = ReturnType<typeof useBaseAdoLazyQuery>;
export type BaseAdoQueryResult = Apollo.QueryResult<IBaseAdoQuery, IBaseAdoQueryVariables>;
export function refetchBaseAdoQuery(variables: IBaseAdoQueryVariables) {
      return { query: BaseAdoDocument, variables: variables }
    }
export const ChainConfigDocument = /*#__PURE__*/ gql`
    query CHAIN_CONFIG($identifier: String!) {
  chainConfigs {
    config(identifier: $identifier) {
      ...chainConfig
    }
  }
}
    ${ChainConfigFragmentDoc}`;

/**
 * __useChainConfigQuery__
 *
 * To run a query within a React component, call `useChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainConfigQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useChainConfigQuery(baseOptions: Apollo.QueryHookOptions<IChainConfigQuery, IChainConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IChainConfigQuery, IChainConfigQueryVariables>(ChainConfigDocument, options);
      }
export function useChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IChainConfigQuery, IChainConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IChainConfigQuery, IChainConfigQueryVariables>(ChainConfigDocument, options);
        }
export type ChainConfigQueryHookResult = ReturnType<typeof useChainConfigQuery>;
export type ChainConfigLazyQueryHookResult = ReturnType<typeof useChainConfigLazyQuery>;
export type ChainConfigQueryResult = Apollo.QueryResult<IChainConfigQuery, IChainConfigQueryVariables>;
export function refetchChainConfigQuery(variables: IChainConfigQueryVariables) {
      return { query: ChainConfigDocument, variables: variables }
    }
export const AllChainConfigDocument = /*#__PURE__*/ gql`
    query ALL_CHAIN_CONFIG {
  chainConfigs {
    allConfigs {
      ...chainConfig
    }
  }
}
    ${ChainConfigFragmentDoc}`;

/**
 * __useAllChainConfigQuery__
 *
 * To run a query within a React component, call `useAllChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllChainConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<IAllChainConfigQuery, IAllChainConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAllChainConfigQuery, IAllChainConfigQueryVariables>(AllChainConfigDocument, options);
      }
export function useAllChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAllChainConfigQuery, IAllChainConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAllChainConfigQuery, IAllChainConfigQueryVariables>(AllChainConfigDocument, options);
        }
export type AllChainConfigQueryHookResult = ReturnType<typeof useAllChainConfigQuery>;
export type AllChainConfigLazyQueryHookResult = ReturnType<typeof useAllChainConfigLazyQuery>;
export type AllChainConfigQueryResult = Apollo.QueryResult<IAllChainConfigQuery, IAllChainConfigQueryVariables>;
export function refetchAllChainConfigQuery(variables?: IAllChainConfigQueryVariables) {
      return { query: AllChainConfigDocument, variables: variables }
    }
export const KeplrConfigDocument = /*#__PURE__*/ gql`
    query KEPLR_CONFIG($identifier: String!) {
  keplrConfigs {
    config(identifier: $identifier) {
      ...keplrConfig
    }
  }
}
    ${KeplrConfigFragmentDoc}`;

/**
 * __useKeplrConfigQuery__
 *
 * To run a query within a React component, call `useKeplrConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeplrConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeplrConfigQuery({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useKeplrConfigQuery(baseOptions: Apollo.QueryHookOptions<IKeplrConfigQuery, IKeplrConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IKeplrConfigQuery, IKeplrConfigQueryVariables>(KeplrConfigDocument, options);
      }
export function useKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IKeplrConfigQuery, IKeplrConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IKeplrConfigQuery, IKeplrConfigQueryVariables>(KeplrConfigDocument, options);
        }
export type KeplrConfigQueryHookResult = ReturnType<typeof useKeplrConfigQuery>;
export type KeplrConfigLazyQueryHookResult = ReturnType<typeof useKeplrConfigLazyQuery>;
export type KeplrConfigQueryResult = Apollo.QueryResult<IKeplrConfigQuery, IKeplrConfigQueryVariables>;
export function refetchKeplrConfigQuery(variables: IKeplrConfigQueryVariables) {
      return { query: KeplrConfigDocument, variables: variables }
    }
export const AllKeplrConfigDocument = /*#__PURE__*/ gql`
    query ALL_KEPLR_CONFIG {
  keplrConfigs {
    allConfigs {
      ...keplrConfig
    }
  }
}
    ${KeplrConfigFragmentDoc}`;

/**
 * __useAllKeplrConfigQuery__
 *
 * To run a query within a React component, call `useAllKeplrConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllKeplrConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllKeplrConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllKeplrConfigQuery(baseOptions?: Apollo.QueryHookOptions<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>(AllKeplrConfigDocument, options);
      }
export function useAllKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>(AllKeplrConfigDocument, options);
        }
export type AllKeplrConfigQueryHookResult = ReturnType<typeof useAllKeplrConfigQuery>;
export type AllKeplrConfigLazyQueryHookResult = ReturnType<typeof useAllKeplrConfigLazyQuery>;
export type AllKeplrConfigQueryResult = Apollo.QueryResult<IAllKeplrConfigQuery, IAllKeplrConfigQueryVariables>;
export function refetchAllKeplrConfigQuery(variables?: IAllKeplrConfigQueryVariables) {
      return { query: AllKeplrConfigDocument, variables: variables }
    }
export const TxByContractDocument = /*#__PURE__*/ gql`
    query TX_BY_CONTRACT($chainId: String!, $contractAddress: String!, $minHeight: Int, $maxHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $contractAddress
      minHeight: $minHeight
      maxHeight: $maxHeight
    ) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;

/**
 * __useTxByContractQuery__
 *
 * To run a query within a React component, call `useTxByContractQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByContractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByContractQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      contractAddress: // value for 'contractAddress'
 *      minHeight: // value for 'minHeight'
 *      maxHeight: // value for 'maxHeight'
 *   },
 * });
 */
export function useTxByContractQuery(baseOptions: Apollo.QueryHookOptions<ITxByContractQuery, ITxByContractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ITxByContractQuery, ITxByContractQueryVariables>(TxByContractDocument, options);
      }
export function useTxByContractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByContractQuery, ITxByContractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ITxByContractQuery, ITxByContractQueryVariables>(TxByContractDocument, options);
        }
export type TxByContractQueryHookResult = ReturnType<typeof useTxByContractQuery>;
export type TxByContractLazyQueryHookResult = ReturnType<typeof useTxByContractLazyQuery>;
export type TxByContractQueryResult = Apollo.QueryResult<ITxByContractQuery, ITxByContractQueryVariables>;
export function refetchTxByContractQuery(variables: ITxByContractQueryVariables) {
      return { query: TxByContractDocument, variables: variables }
    }
export const TxByContractMasterDocument = /*#__PURE__*/ gql`
    query TX_BY_CONTRACT_MASTER($chainId: String!, $contractAddress: String!, $minHeight: Int, $maxHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $contractAddress
      minHeight: $minHeight
      maxHeight: $maxHeight
    ) {
      ...txInfoMaster
    }
  }
}
    ${TxInfoMasterFragmentDoc}`;

/**
 * __useTxByContractMasterQuery__
 *
 * To run a query within a React component, call `useTxByContractMasterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByContractMasterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByContractMasterQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      contractAddress: // value for 'contractAddress'
 *      minHeight: // value for 'minHeight'
 *      maxHeight: // value for 'maxHeight'
 *   },
 * });
 */
export function useTxByContractMasterQuery(baseOptions: Apollo.QueryHookOptions<ITxByContractMasterQuery, ITxByContractMasterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ITxByContractMasterQuery, ITxByContractMasterQueryVariables>(TxByContractMasterDocument, options);
      }
export function useTxByContractMasterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByContractMasterQuery, ITxByContractMasterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ITxByContractMasterQuery, ITxByContractMasterQueryVariables>(TxByContractMasterDocument, options);
        }
export type TxByContractMasterQueryHookResult = ReturnType<typeof useTxByContractMasterQuery>;
export type TxByContractMasterLazyQueryHookResult = ReturnType<typeof useTxByContractMasterLazyQuery>;
export type TxByContractMasterQueryResult = Apollo.QueryResult<ITxByContractMasterQuery, ITxByContractMasterQueryVariables>;
export function refetchTxByContractMasterQuery(variables: ITxByContractMasterQueryVariables) {
      return { query: TxByContractMasterDocument, variables: variables }
    }