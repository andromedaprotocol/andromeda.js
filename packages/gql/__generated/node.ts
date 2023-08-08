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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
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

export type IAddressListContainsAddressQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
  address: Scalars['String']['input'];
}>;


export type IAddressListContainsAddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', includesAddress: { __typename?: 'AddressListResponse', included: boolean } } } };

export type IAppConfigQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type IAppComponentsQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppComponentsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }> } } };

export type IAppConfigAndComponentsQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IAppConfigAndComponentsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, type: string, config: { __typename?: 'AppConfig', name: string, owner: string }, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }> } } };

export type IAssetsQueryVariables = Exact<{
  walletAddress: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  adoType?: InputMaybe<IAdoType>;
  orderBy?: InputMaybe<IAndrOrderBy>;
}>;


export type IAssetsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', assets: Array<{ __typename?: 'AssetResult', address: string, adoType: string, appContract: string, chainId: string, instantiateHash: string, instantiateHeight: number, lastUpdatedHash: string, lastUpdatedHeight: number, name: string, owner: string }> } };

export type IBaseAdoQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type IBaseAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', admin: string, address: string, blockHeightUponCreation: number, codeId: number, creator: string, contractVersion: string, ibcPortId: string, label: string, owner: string, operators: Array<string>, originalPublisher: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICrowdfundAvailableTokensQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICrowdfundAvailableTokensQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', availableTokens: Array<string> } } };

export type ICrowdfundIsTokenAvailableQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
}>;


export type ICrowdfundIsTokenAvailableQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', isTokenAvailable: boolean } } };

export type ICrowdfundConfigQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICrowdfundConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', address: string, config: { __typename?: 'CrowdfundConfig', can_mint_after_sale: boolean, token_address: any } } } };

export type ICrowdfundStateQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICrowdfundStateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', state: { __typename?: 'CrowdfundState', amount_sold: number, amount_to_send: number, amount_transferred: number, expiration: any, max_amount_per_wallet: number, min_tokens_sold: number, recipient: any, price: { __typename?: 'Coin', amount: string, denom: string } } } } };

export type ICw20TokenInfoQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICw20TokenInfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', address: string, tokenInfo: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: number } } } };

export type ICw20QueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICw20Query = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, downloadLogo: { __typename?: 'DownloadLogo', data: any, mime_type: string }, marketingInfo: { __typename?: 'MarketingInfo', allowance: number, description: string, logo: any, marketing: string, project: string }, minter: { __typename?: 'Minter', cap: number, minter: string } } } };

export type ICw721InfoQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
}>;


export type ICw721InfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', address: string, minter: string, numTokens: number, contractInfo: { __typename?: 'NftContractInfo', name: string, symbol: string } } } };

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

export type ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
  ADO_address_list_address_list_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAddressListAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoAddressListAndrQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAddressListAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
  ADO_address_list_address_list_includesAddress_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAddressListIncludesaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', includesAddress: { __typename?: 'AddressListResponse', included: boolean } } } };

export type ICodegenGeneratedAdoAddressListQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAddressListQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables = Exact<{
  ADO_ado_address: Scalars['String']['input'];
  ADO_ado_ado_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAdoAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoAdoAndrQueryVariables = Exact<{
  ADO_ado_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAdoAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAdoQueryVariables = Exact<{
  ADO_ado_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAppAddressesQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppAddressesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', addresses: Array<{ __typename?: 'AppComponentAddress', address: string, name: string }> } } };

export type ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
  ADO_app_app_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoAppAndrQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAppComponentexistsQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
  ADO_app_app_componentExists_name: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppComponentexistsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', componentExists: boolean } } };

export type ICodegenGeneratedAdoAppComponentsQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppComponentsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }> } } };

export type ICodegenGeneratedAdoAppConfigQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type ICodegenGeneratedAdoAppGetaddressQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
  ADO_app_app_getAddress_name: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppGetaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', getAddress: string } } };

export type ICodegenGeneratedAdoAppQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAppQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, type: string, addresses: Array<{ __typename?: 'AppComponentAddress', address: string, name: string }>, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }>, config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoAuctionAndrQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoAuctionAuctionidsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionIDs_tokenAddress: Scalars['String']['input'];
  ADO_auction_auction_auctionIDs_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionAuctionidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionIDs: { __typename?: 'AuctionIDsResponse', auction_ids: Array<number> } } } };

export type ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionInfosForAddress_tokenAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionInfosForAddress: { __typename?: 'AuctionInfosForAddressResponse', auction_ids: Array<number>, token_address: string, token_id: string } } } };

export type ICodegenGeneratedAdoAuctionAuctionstateQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionState_auctionId: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoAuctionAuctionstateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionState: { __typename?: 'AuctionStateResponse', auction_id: number, coin_denom: string, end_time: any, high_bidder_addr: string, high_bidder_amount: number, is_cancelled: boolean, min_bid: number, start_time: any, summaryFields: number, whitelist: any } } } };

export type ICodegenGeneratedAdoAuctionBidsBidsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_bids_auctionId: Scalars['Float']['input'];
  ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoAuctionBidsBidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', bids: { __typename?: 'BidsResponse', bids: Array<{ __typename?: 'Bid', amount: number, bidder: string, timestamp: any }> } } } };

export type ICodegenGeneratedAdoAuctionBidsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_bids_auctionId: Scalars['Float']['input'];
  ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoAuctionBidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', bids: { __typename?: 'BidsResponse', bids: Array<{ __typename?: 'Bid', amount: number, bidder: string, timestamp: any }> } } } };

export type ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_latestAuctionState_tokenAddress: Scalars['String']['input'];
  ADO_auction_auction_latestAuctionState_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionLatestauctionstateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', latestAuctionState: { __typename?: 'AuctionStateResponse', auction_id: number, coin_denom: string, end_time: any, high_bidder_addr: string, high_bidder_amount: number, is_cancelled: boolean, min_bid: number, start_time: any, summaryFields: number, whitelist: any } } } };

export type ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_summaryFields_tokenAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionSummaryfieldsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', summaryFields: { __typename?: 'SummaryFields', coin_denom: string, high_bidder_amount: number, min_bid: number } } } };

export type ICodegenGeneratedAdoAuctionQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoAuctionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
  ADO_crowdfund_crowdfund_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoCrowdfundAndrQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCrowdfundConfigQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', config: { __typename?: 'CrowdfundConfig', can_mint_after_sale: boolean, token_address: any } } } };

export type ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
  ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundIstokenavailableQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', isTokenAvailable: boolean } } };

export type ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundStatePriceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', state: { __typename?: 'CrowdfundState', price: { __typename?: 'Coin', amount: string, denom: string } } } } };

export type ICodegenGeneratedAdoCrowdfundStateQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundStateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', state: { __typename?: 'CrowdfundState', amount_sold: number, amount_to_send: number, amount_transferred: number, expiration: any, max_amount_per_wallet: number, min_tokens_sold: number, recipient: any, price: { __typename?: 'Coin', amount: string, denom: string } } } } };

export type ICodegenGeneratedAdoCrowdfundQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCrowdfundQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', address: string, availableTokens: Array<string>, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'CrowdfundConfig', can_mint_after_sale: boolean, token_address: any }, state: { __typename?: 'CrowdfundState', amount_sold: number, amount_to_send: number, amount_transferred: number, expiration: any, max_amount_per_wallet: number, min_tokens_sold: number, recipient: any, price: { __typename?: 'Coin', amount: string, denom: string } } } } };

export type ICodegenGeneratedAdoCw20AllaccountsQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_allAccounts_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoCw20AllaccountsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', allAccounts: Array<string> } } };

export type ICodegenGeneratedAdoCw20AllallowancesQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_allAllowances_options?: InputMaybe<IAndrSearchOptions>;
  ADO_cw20_cw20_allAllowances_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20AllallowancesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', allAllowances: Array<{ __typename?: 'Allowance', allowance: number, expires: any, owner: string, spender: string }> } } };

export type ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_allSpenderAllowances_options?: InputMaybe<IAndrSearchOptions>;
  ADO_cw20_cw20_allSpenderAllowances_spender: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20AllspenderallowancesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', allSpenderAllowances: Array<{ __typename?: 'Allowance', allowance: number, expires: any, owner: string, spender: string }> } } };

export type ICodegenGeneratedAdoCw20AllowanceQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_allowance_owner: Scalars['String']['input'];
  ADO_cw20_cw20_allowance_spender: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20AllowanceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', allowance: { __typename?: 'Allowance', allowance: number, expires: any, owner: string, spender: string } } } };

export type ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20AndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoCw20AndrQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20AndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCw20BalanceQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_balance_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20BalanceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', balance: number } } };

export type ICodegenGeneratedAdoCw20DownloadlogoQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20DownloadlogoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', downloadLogo: { __typename?: 'DownloadLogo', data: any, mime_type: string } } } };

export type ICodegenGeneratedAdoCw20MarketinginfoQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20MarketinginfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', marketingInfo: { __typename?: 'MarketingInfo', allowance: number, description: string, logo: any, marketing: string, project: string } } } };

export type ICodegenGeneratedAdoCw20MinterQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20MinterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', minter: { __typename?: 'Minter', cap: number, minter: string } } } };

export type ICodegenGeneratedAdoCw20TokeninfoQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20TokeninfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', tokenInfo: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: number } } } };

export type ICodegenGeneratedAdoCw20QueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20Query = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, downloadLogo: { __typename?: 'DownloadLogo', data: any, mime_type: string }, marketingInfo: { __typename?: 'MarketingInfo', allowance: number, description: string, logo: any, marketing: string, project: string }, minter: { __typename?: 'Minter', cap: number, minter: string }, tokenInfo: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: number } } } };

export type ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
  ADO_cw20_exchange_cw20_exchange_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20ExchangeAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
  ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<Scalars['String']['input']>;
  ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedAdoCw20ExchangeSaleQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', sale: { __typename?: 'SaleResponse', amount: number, exchange_rate: number, recipient: string } } } };

export type ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
  ADO_cw20_exchange_cw20_exchange_saleAssets_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', saleAssets: string } } };

export type ICodegenGeneratedAdoCw20ExchangeQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20ExchangeQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', address: string, tokenAddress: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
  ADO_cw20_staking_cw20_staking_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoCw20StakingAndrQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', config: { __typename?: 'ConfigStructure', staking_token: { __typename?: 'AndrAddress', identifier: string } } } } };

export type ICodegenGeneratedAdoCw20StakingConfigQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', config: { __typename?: 'ConfigStructure', number_of_reward_tokens: number, staking_token: { __typename?: 'AndrAddress', identifier: string } } } } };

export type ICodegenGeneratedAdoCw20StakingStakerQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
  ADO_cw20_staking_cw20_staking_staker_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingStakerQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', staker: { __typename?: 'StakerResponse', address: string, pending_rewards: Array<Array<string>>, share: number } } } };

export type ICodegenGeneratedAdoCw20StakingStakersQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
  ADO_cw20_staking_cw20_staking_stakers_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoCw20StakingStakersQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', stakers: Array<{ __typename?: 'StakerResponse', address: string, pending_rewards: Array<Array<string>>, share: number }> } } };

export type ICodegenGeneratedAdoCw20StakingStateQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingStateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', state: { __typename?: 'StateStructure', total_share: number } } } };

export type ICodegenGeneratedAdoCw20StakingQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw20StakingQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', address: string, timestamp: any, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'ConfigStructure', number_of_reward_tokens: number, staking_token: { __typename?: 'AndrAddress', identifier: string } }, state: { __typename?: 'StateStructure', total_share: number } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', access: { __typename?: 'NftOwnerInfo', approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoAccessQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', access: { __typename?: 'NftOwnerInfo', owner: string, approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', info: { __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', info: { __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoInfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', info: { __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } } };

export type ICodegenGeneratedAdoCw721AllnftinfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AllnftinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', access: { __typename?: 'NftOwnerInfo', owner: string, approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> }, info: { __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } } };

export type ICodegenGeneratedAdoCw721AlloperatorsQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allOperators_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allOperators_options?: InputMaybe<IAndrSearchOptions>;
  ADO_cw721_cw721_allOperators_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AlloperatorsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allOperators: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } };

export type ICodegenGeneratedAdoCw721AlltokensQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allTokens_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type ICodegenGeneratedAdoCw721AlltokensQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allTokens: Array<string> } } };

export type ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoCw721AndrQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721AndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoCw721ApprovalQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_approval_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_approval_spender: Scalars['String']['input'];
  ADO_cw721_cw721_approval_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721ApprovalQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', approval: { __typename?: 'NftApproval', expires: any, spender: string } } } };

export type ICodegenGeneratedAdoCw721ApprovalsQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_approvals_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_approvals_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721ApprovalsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } };

export type ICodegenGeneratedAdoCw721ContractinfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721ContractinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', contractInfo: { __typename?: 'NftContractInfo', name: string, symbol: string } } } };

export type ICodegenGeneratedAdoCw721IsarchivedQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_isArchived_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721IsarchivedQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', isArchived: boolean } } };

export type ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', nftInfo: { __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } };

export type ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721NftinfoExtensionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', nftInfo: { __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } };

export type ICodegenGeneratedAdoCw721NftinfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721NftinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', nftInfo: { __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } };

export type ICodegenGeneratedAdoCw721NumownersQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_numOwners_includeExpired: Scalars['Boolean']['input'];
}>;


export type ICodegenGeneratedAdoCw721NumownersQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', numOwners: number } } };

export type ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_ownerOf_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_ownerOf_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721OwnerofApprovalsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', ownerOf: { __typename?: 'NftOwnerInfo', approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } } };

export type ICodegenGeneratedAdoCw721OwnerofQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_ownerOf_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_ownerOf_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721OwnerofQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', ownerOf: { __typename?: 'NftOwnerInfo', owner: string, approvals: Array<{ __typename?: 'NftApproval', expires: any, spender: string }> } } } };

export type ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;


export type ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', searchTokens: Array<{ __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } }> } } };

export type ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;


export type ICodegenGeneratedAdoCw721SearchtokensExtensionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', searchTokens: Array<{ __typename?: 'NftInfo', extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } }> } } };

export type ICodegenGeneratedAdoCw721SearchtokensQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_searchTokens_attributes?: InputMaybe<Array<ISearchAttribute> | ISearchAttribute>;
}>;


export type ICodegenGeneratedAdoCw721SearchtokensQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', searchTokens: Array<{ __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } }> } } };

export type ICodegenGeneratedAdoCw721TokensQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_tokens_options?: InputMaybe<IAndrSearchOptions>;
  ADO_cw721_cw721_tokens_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721TokensQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', tokens: Array<string> } } };

export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', transferAgreement: { __typename?: 'TransferAgreement', agreement: { __typename?: 'Agreement', amount: { __typename?: 'AgreementAmount', raw: { __typename?: 'Coin', amount: string, denom: string } } } } } } };

export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', transferAgreement: { __typename?: 'TransferAgreement', agreement: { __typename?: 'Agreement', amount: { __typename?: 'AgreementAmount', raw: { __typename?: 'Coin', amount: string, denom: string } } } } } } };

export type ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721TransferagreementAgreementQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', transferAgreement: { __typename?: 'TransferAgreement', agreement: { __typename?: 'Agreement', purchaser: string, amount: { __typename?: 'AgreementAmount', raw: { __typename?: 'Coin', amount: string, denom: string } } } } } } };

export type ICodegenGeneratedAdoCw721TransferagreementQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721TransferagreementQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', transferAgreement: { __typename?: 'TransferAgreement', tokenId: string, agreement: { __typename?: 'Agreement', purchaser: string, amount: { __typename?: 'AgreementAmount', raw: { __typename?: 'Coin', amount: string, denom: string } } } } } } };

export type ICodegenGeneratedAdoCw721QueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoCw721Query = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', address: string, minter: string, numTokens: number, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, contractInfo: { __typename?: 'NftContractInfo', name: string, symbol: string } } } };

export type ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables = Exact<{
  ADO_factory_address: Scalars['String']['input'];
  ADO_factory_factory_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoFactoryAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', factory: { __typename?: 'FactoryAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoFactoryAndrQueryVariables = Exact<{
  ADO_factory_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoFactoryAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', factory: { __typename?: 'FactoryAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoFactoryCodeIdQueryVariables = Exact<{
  ADO_factory_address: Scalars['String']['input'];
  ADO_factory_factory_code_id_key: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoFactoryCodeIdQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', factory: { __typename?: 'FactoryAdo', code_id: number } } };

export type ICodegenGeneratedAdoFactoryQueryVariables = Exact<{
  ADO_factory_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoFactoryQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', factory: { __typename?: 'FactoryAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
  ADO_lockdrop_lockdrop_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoLockdropAndrQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoLockdropConfigQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', config: { __typename?: 'LockdropConfig', deposit_window: number, incentive_token: string, init_timestamp: number, lockdrop_incentives: number, native_denom: string, withdrawal_window: number } } } };

export type ICodegenGeneratedAdoLockdropStateQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropStateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', state: { __typename?: 'LockdropState', are_claims_allowed: boolean, total_native_locked: string } } } };

export type ICodegenGeneratedAdoLockdropUserinfoQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
  ADO_lockdrop_lockdrop_userInfo_user: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropUserinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', userInfo: Array<{ __typename?: 'LockdropUserInfo', is_lockdrop_claimed: boolean, total_incentives: string, total_native_locked: string, withrawal_flag: boolean }> } } };

export type ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
  ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', withdrawalPercentAllowed: number } } };

export type ICodegenGeneratedAdoLockdropQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoLockdropQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'LockdropConfig', deposit_window: number, incentive_token: string, init_timestamp: number, lockdrop_incentives: number, native_denom: string, withdrawal_window: number }, state: { __typename?: 'LockdropState', are_claims_allowed: boolean, total_native_locked: string } } } };

export type ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoMarketplaceAndrQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_latestSaleState_tokenAddress: Scalars['String']['input'];
  ADO_marketplace_marketplace_latestSaleState_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceLatestsalestateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', latestSaleState: { __typename?: 'SaleStateResponse', coin_denom: string, price: string, sale_id: string, status: string } } } };

export type ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleIds_tokenAddress: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleIds_tokenId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceSaleidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', saleIds: { __typename?: 'SaleIds', sale_ids: Array<string> } } } };

export type ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleInfosForAddress_options?: InputMaybe<IAndrSearchOptions>;
  ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', saleInfosForAddress: Array<{ __typename?: 'SaleInfo', sale_ids: Array<string>, token_address: string, token_id: string }> } } };

export type ICodegenGeneratedAdoMarketplaceSalestateQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleState_saleId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceSalestateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', saleState: { __typename?: 'SaleStateResponse', coin_denom: string, price: string, sale_id: string, status: string } } } };

export type ICodegenGeneratedAdoMarketplaceQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMarketplaceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', config: { __typename?: 'MerkleAirdropConfig', asset_info: any } } } };

export type ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', isClaimed: boolean } } };

export type ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropMerklerootQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', merkleRoot: { __typename?: 'MerkleRootResponse', expiration: any, merkle_root: string, stage: number, total_amount: string } } } };

export type ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', totalClaimed: string } } };

export type ICodegenGeneratedAdoMerkleAirdropQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoMerkleAirdropQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', address: string, latestStage: number, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'MerkleAirdropConfig', asset_info: any } } } };

export type ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
  ADO_primitive_primitive_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoPrimitiveAndrQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoPrimitiveAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
  ADO_primitive_primitive_getValue_key: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoPrimitiveGetvalueQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', getValue: { __typename?: 'PrimitiveResponse', key: string, value: any } } } };

export type ICodegenGeneratedAdoPrimitiveQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoPrimitiveQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', accountDetails: { __typename?: 'AccountDetails', balance: string, latest_withdrawal: string } } } };

export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
  ADO_rate_limiting_withdrawals_rate_limiting_withdrawals_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', coinAllowanceDetails: { __typename?: 'CoinAllowance', coin: string, limit: string, minimal_withdrawal_frequency: string } } } };

export type ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRateLimitingWithdrawalsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', address: string, type: string, accountDetails: { __typename?: 'AccountDetails', balance: string, latest_withdrawal: string }, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, coinAllowanceDetails: { __typename?: 'CoinAllowance', coin: string, limit: string, minimal_withdrawal_frequency: string } } } };

export type ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
  ADO_rates_rates_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoRatesAndrQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesPaymentsRateExternalQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', payments: Array<{ __typename?: 'RateInfo', rate: { __typename?: 'Rate', external: { __typename?: 'ADORate', address: string, key: string } } }> } } };

export type ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesPaymentsRateFlatQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', payments: Array<{ __typename?: 'RateInfo', rate: { __typename?: 'Rate', flat: { __typename?: 'Coin', amount: string, denom: string } } }> } } };

export type ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesPaymentsRatePercentQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', payments: Array<{ __typename?: 'RateInfo', rate: { __typename?: 'Rate', percent: { __typename?: 'PercentRate', decimal: number } } }> } } };

export type ICodegenGeneratedAdoRatesPaymentsRateQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesPaymentsRateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', payments: Array<{ __typename?: 'RateInfo', rate: { __typename?: 'Rate', external: { __typename?: 'ADORate', address: string, key: string }, flat: { __typename?: 'Coin', amount: string, denom: string }, percent: { __typename?: 'PercentRate', decimal: number } } }> } } };

export type ICodegenGeneratedAdoRatesPaymentsQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesPaymentsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', payments: Array<{ __typename?: 'RateInfo', description: string, is_additive: boolean, receivers: Array<any>, rate: { __typename?: 'Rate', external: { __typename?: 'ADORate', address: string, key: string }, flat: { __typename?: 'Coin', amount: string, denom: string }, percent: { __typename?: 'PercentRate', decimal: number } } }> } } };

export type ICodegenGeneratedAdoRatesQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoRatesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, payments: Array<{ __typename?: 'RateInfo', description: string, is_additive: boolean, receivers: Array<any>, rate: { __typename?: 'Rate', external: { __typename?: 'ADORate', address: string, key: string }, flat: { __typename?: 'Coin', amount: string, denom: string }, percent: { __typename?: 'PercentRate', decimal: number } } }> } } };

export type ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
  ADO_splitter_splitter_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoSplitterAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoSplitterAndrQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoSplitterAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoSplitterConfigRecipientsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', config: { __typename?: 'Splitter', recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoSplitterConfigQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoSplitterConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', config: { __typename?: 'Splitter', lock: any, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoSplitterQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoSplitterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'Splitter', lock: any, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoTimelockAndrQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFunds: { __typename?: 'Escrow', coins: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFunds: { __typename?: 'Escrow', condition: { __typename?: 'EscrowCondition', miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFunds: { __typename?: 'Escrow', condition: { __typename?: 'EscrowCondition', expiration: any, miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFunds: { __typename?: 'Escrow', recipient: any, coins: Array<{ __typename?: 'Coin', amount: string, denom: string }>, condition: { __typename?: 'EscrowCondition', expiration: any, miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
  ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFundsForRecipient: Array<{ __typename?: 'Escrow', coins: Array<{ __typename?: 'Coin', amount: string, denom: string }> }> } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
  ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFundsForRecipient: Array<{ __typename?: 'Escrow', condition: { __typename?: 'EscrowCondition', miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } }> } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
  ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFundsForRecipient: Array<{ __typename?: 'Escrow', condition: { __typename?: 'EscrowCondition', expiration: any, miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } }> } } };

export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFundsForRecipient_options: IAndrSearchOptions;
  ADO_timelock_timelock_getLockedFundsForRecipient_recipient: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFundsForRecipient: Array<{ __typename?: 'Escrow', recipient: any, coins: Array<{ __typename?: 'Coin', amount: string, denom: string }>, condition: { __typename?: 'EscrowCondition', expiration: any, miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } }> } } };

export type ICodegenGeneratedAdoTimelockQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoTimelockQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
  ADO_vault_vault_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVaultAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoVaultAndrQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVaultAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoVaultBalanceQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
  ADO_vault_vault_balance_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVaultBalanceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', balance: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } };

export type ICodegenGeneratedAdoVaultStrategyaddressQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
  ADO_vault_vault_strategyAddress_strategy: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVaultStrategyaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', strategyAddress: { __typename?: 'AndrStrategy', address: string, strategyType: IAndrStrategyType } } } };

export type ICodegenGeneratedAdoVaultQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVaultQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
  ADO_vesting_vesting_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVestingAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoVestingAndrQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVestingAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoVestingBatchQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
  ADO_vesting_vesting_batch_id: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedAdoVestingBatchQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', batch: { __typename?: 'VestingBatchInfo', amount: string, amount_available_to_claim: string, amount_claimed: string, id: number, last_claimed_release_time: number, lockup_end: number, number_of_available_claims: string, release_amount: any, release_unit: number } } } };

export type ICodegenGeneratedAdoVestingBatchesQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVestingBatchesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', batches: Array<{ __typename?: 'VestingBatchInfo', amount: string, amount_available_to_claim: string, amount_claimed: string, id: number, last_claimed_release_time: number, lockup_end: number, number_of_available_claims: string, release_amount: any, release_unit: number }> } } };

export type ICodegenGeneratedAdoVestingConfigQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVestingConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', config: { __typename?: 'VestingConfig', denom: string, is_multi_batch_enabled: boolean, recipient: any, unbonding_duration: any } } } };

export type ICodegenGeneratedAdoVestingQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoVestingQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, batches: Array<{ __typename?: 'VestingBatchInfo', amount: string, amount_available_to_claim: string, amount_claimed: string, id: number, last_claimed_release_time: number, lockup_end: number, number_of_available_claims: string, release_amount: any, release_unit: number }>, config: { __typename?: 'VestingConfig', denom: string, is_multi_batch_enabled: boolean, recipient: any, unbonding_duration: any } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
  ADO_weighted_distribution_splitter_weighted_distribution_splitter_andr_andr_isOperator_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', andr: { __typename?: 'AndrQuery', isOperator: boolean } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', config: { __typename?: 'Splitter', recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', config: { __typename?: 'Splitter', lock: any, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
  ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', getUserWeight: { __typename?: 'UserWeightResponse', total_weight: number, weight: number } } } };

export type ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdoWeightedDistributionSplitterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'Splitter', lock: any, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: any }> } } } };

export type ICodegenGeneratedAdoQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', receipt: string } };

export type ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables = Exact<{
  ADOP_package_adoType: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdopPackageSchemasReceiveQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', package: { __typename?: 'AdoPackage', schemas: { __typename?: 'ADOPSchema', receive: { __typename?: 'ADOPSchemaReceive', cw20: string, cw721: string } } } } };

export type ICodegenGeneratedAdopPackageSchemasQueryVariables = Exact<{
  ADOP_package_adoType: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdopPackageSchemasQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', package: { __typename?: 'AdoPackage', schemas: { __typename?: 'ADOPSchema', contract_schema: string, execute: string, instantiate: string, query: string, receive: { __typename?: 'ADOPSchemaReceive', cw20: string, cw721: string } } } } };

export type ICodegenGeneratedAdopPackageQueryVariables = Exact<{
  ADOP_package_adoType: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAdopPackageQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', package: { __typename?: 'AdoPackage', name: string, schemas: { __typename?: 'ADOPSchema', contract_schema: string, execute: string, instantiate: string, query: string, receive: { __typename?: 'ADOPSchemaReceive', cw20: string, cw721: string } } } } };

export type ICodegenGeneratedAdopQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedAdopQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', adoTypes: Array<string> } };

export type ICodegenGeneratedAccountsAssetsComponentsQueryVariables = Exact<{
  accounts_assets_adoType?: InputMaybe<IAdoType>;
  accounts_assets_limit?: InputMaybe<Scalars['Int']['input']>;
  accounts_assets_offset?: InputMaybe<Scalars['Int']['input']>;
  accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
  accounts_assets_search?: InputMaybe<Scalars['String']['input']>;
  accounts_assets_walletAddress: Scalars['String']['input'];
  accounts_assets_assets_components_componentType?: InputMaybe<IAdoType>;
  accounts_assets_assets_components_limit?: InputMaybe<Scalars['Int']['input']>;
  accounts_assets_assets_components_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedAccountsAssetsComponentsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', assets: Array<{ __typename?: 'AssetResult', components: Array<{ __typename?: 'Component', address: string, ado_type: string, instantiate_msg: string, name: string }> }> } };

export type ICodegenGeneratedAccountsAssetsQueryVariables = Exact<{
  accounts_assets_adoType?: InputMaybe<IAdoType>;
  accounts_assets_limit?: InputMaybe<Scalars['Int']['input']>;
  accounts_assets_offset?: InputMaybe<Scalars['Int']['input']>;
  accounts_assets_orderBy?: InputMaybe<IAndrOrderBy>;
  accounts_assets_search?: InputMaybe<Scalars['String']['input']>;
  accounts_assets_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedAccountsAssetsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', assets: Array<{ __typename?: 'AssetResult', address: string, adoType: string, appContract: string, chainId: string, instantiateHash: string, instantiateHeight: number, lastUpdatedHash: string, lastUpdatedHeight: number, name: string, owner: string }> } };

export type ICodegenGeneratedAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedAccountsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', wallets: string } };

export type ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', allConfigs: Array<{ __typename?: 'ChainConfig', iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } }> } };

export type ICodegenGeneratedChainconfigsAllconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainconfigsAllconfigsQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', allConfigs: Array<{ __typename?: 'ChainConfig', addressPrefix: string, blockExplorerAddressPages: Array<string>, blockExplorerTxPages: Array<string>, chainId: string, chainName: string, chainType: string, chainUrl: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } }> } };

export type ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables = Exact<{
  chainConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedChainconfigsConfigIconurlsQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', config: { __typename?: 'ChainConfig', iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } } } };

export type ICodegenGeneratedChainconfigsConfigQueryVariables = Exact<{
  chainConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedChainconfigsConfigQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', config: { __typename?: 'ChainConfig', addressPrefix: string, blockExplorerAddressPages: Array<string>, blockExplorerTxPages: Array<string>, chainId: string, chainName: string, chainType: string, chainUrl: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } } } };

export type ICodegenGeneratedChainconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainconfigsQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', allConfigs: Array<{ __typename?: 'ChainConfig', addressPrefix: string, blockExplorerAddressPages: Array<string>, blockExplorerTxPages: Array<string>, chainId: string, chainName: string, chainType: string, chainUrl: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string } }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsBip44Query = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', bip44: { __typename?: 'Bip44', coinType: number } }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }> }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }> }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } }> } };

export type ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsAllconfigsQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', chainId: string, chainName: string, coinType: number, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } }> } };

export type ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string } } } };

export type ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigBip44Query = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', bip44: { __typename?: 'Bip44', coinType: number } } } };

export type ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }> } } };

export type ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }> } } };

export type ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } } } };

export type ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } } } };

export type ICodegenGeneratedKeplrconfigsConfigQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type ICodegenGeneratedKeplrconfigsConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', chainId: string, chainName: string, coinType: number, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } } } };

export type ICodegenGeneratedKeplrconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedKeplrconfigsQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', chainId: string, chainName: string, coinType: number, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } }> } };

export type ICodegenGeneratedTxByaccountEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByaccountEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByaccountTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByaccountTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByaccountQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byAccount_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byAccount_sentFromOrTo: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByaccountQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBycontractEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxBycontractEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBycontractTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBycontractTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBycontractQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byContract_address: Scalars['String']['input'];
  tx_byContract_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byContract_minHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTxBycontractQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByhashEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> } } };

export type ICodegenGeneratedTxByhashEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> } } };

export type ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } } };

export type ICodegenGeneratedTxByhashTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } } };

export type ICodegenGeneratedTxByhashTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } } };

export type ICodegenGeneratedTxByhashQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByhashQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } } };

export type ICodegenGeneratedTxByheightEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByheightEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByheightTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByheightTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByheightQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHeight_height: Scalars['Float']['input'];
}>;


export type ICodegenGeneratedTxByheightQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByownerEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByownerEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByownerTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByownerTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxByownerQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byOwner_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byOwner_walletAddress: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxByownerQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byOwner: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBytagEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxBytagEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } };

export type ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagTxlogEventsAttributesQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBytagTxlogEventsQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagTxlogEventsQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBytagTxlogQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagTxlogQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxBytagQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byTag_maxHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_minHeight?: InputMaybe<Scalars['Int']['input']>;
  tx_byTag_tags: Scalars['JSON']['input'];
}>;


export type ICodegenGeneratedTxBytagQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byTag: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> }> } };

export type ICodegenGeneratedTxQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTxQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', chainId: string } };

export type ITxInfoFragment = { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any };


export type ITxInfoFragmentVariables = Exact<{ [key: string]: never; }>;

export type ITxByAccountQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  sentFromOrTo: Scalars['String']['input'];
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ITxByAccountQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byAccount: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any }> } };

export type ITxByContractQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  contractAddress: Scalars['String']['input'];
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ITxByContractQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byContract: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any }> } };

export type ITxByHeightQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  height: Scalars['Float']['input'];
}>;


export type ITxByHeightQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHeight: Array<{ __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any }> } };

export type ITxByHashQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  hash: Scalars['String']['input'];
}>;


export type ITxByHashQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: any } } };

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
  rawLog
  tx
}
    `;
export const AddressListContainsAddressDocument = /*#__PURE__*/ gql`
    query ADDRESS_LIST_CONTAINS_ADDRESS($contractAddress: String!, $address: String!) {
  ADO {
    address_list(address: $contractAddress) {
      includesAddress(address: $address) {
        included
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
export const AppConfigAndComponentsDocument = /*#__PURE__*/ gql`
    query APP_CONFIG_AND_COMPONENTS($contractAddress: String!) {
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
    }
  }
}
    ${AppComponentFragmentDoc}`;
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
export const CrowdfundAvailableTokensDocument = /*#__PURE__*/ gql`
    query CROWDFUND_AVAILABLE_TOKENS($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      availableTokens
    }
  }
}
    `;
export const CrowdfundIsTokenAvailableDocument = /*#__PURE__*/ gql`
    query CROWDFUND_IS_TOKEN_AVAILABLE($contractAddress: String!, $tokenId: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      isTokenAvailable(tokenId: $tokenId)
    }
  }
}
    `;
export const CrowdfundConfigDocument = /*#__PURE__*/ gql`
    query CROWDFUND_CONFIG($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      address
      config {
        can_mint_after_sale
        token_address
      }
    }
  }
}
    `;
export const CrowdfundStateDocument = /*#__PURE__*/ gql`
    query CROWDFUND_STATE($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        expiration
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient
      }
    }
  }
}
    `;
export const Cw20TokenInfoDocument = /*#__PURE__*/ gql`
    query CW20_TOKEN_INFO($contractAddress: String!) {
  ADO {
    cw20(address: $contractAddress) {
      address
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
}
    `;
export const Cw20Document = /*#__PURE__*/ gql`
    query CW20($contractAddress: String!) {
  ADO {
    cw20(address: $contractAddress) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      downloadLogo {
        data
        mime_type
      }
      marketingInfo {
        allowance
        description
        logo
        marketing
        project
      }
      minter {
        cap
        minter
      }
      type
    }
  }
}
    `;
export const Cw721InfoDocument = /*#__PURE__*/ gql`
    query CW721_INFO($contractAddress: String!) {
  ADO {
    cw721(address: $contractAddress) {
      address
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
    }
  }
}
    `;
export const ChainConfigDocument = /*#__PURE__*/ gql`
    query CHAIN_CONFIG($identifier: String!) {
  chainConfigs {
    config(identifier: $identifier) {
      ...chainConfig
    }
  }
}
    ${ChainConfigFragmentDoc}`;
export const AllChainConfigDocument = /*#__PURE__*/ gql`
    query ALL_CHAIN_CONFIG {
  chainConfigs {
    allConfigs {
      ...chainConfig
    }
  }
}
    ${ChainConfigFragmentDoc}`;
export const KeplrConfigDocument = /*#__PURE__*/ gql`
    query KEPLR_CONFIG($identifier: String!) {
  keplrConfigs {
    config(identifier: $identifier) {
      ...keplrConfig
    }
  }
}
    ${KeplrConfigFragmentDoc}`;
export const AllKeplrConfigDocument = /*#__PURE__*/ gql`
    query ALL_KEPLR_CONFIG {
  keplrConfigs {
    allConfigs {
      ...keplrConfig
    }
  }
}
    ${KeplrConfigFragmentDoc}`;
export const CodegenGeneratedAdoAddressListAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR_ISOPERATOR($ADO_address_list_address: String!, $ADO_address_list_address_list_andr_andr_isOperator_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      andr {
        isOperator(address: $ADO_address_list_address_list_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAddressListAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR($ADO_address_list_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAddressListIncludesaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS($ADO_address_list_address: String!, $ADO_address_list_address_list_includesAddress_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      includesAddress(address: $ADO_address_list_address_list_includesAddress_address) {
        included
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAddressListDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADDRESS_LIST($ADO_address_list_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoAdoAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADO_ANDR_ISOPERATOR($ADO_ado_address: String!, $ADO_ado_ado_andr_andr_isOperator_address: String!) {
  ADO {
    ado(address: $ADO_ado_address) {
      andr {
        isOperator(address: $ADO_ado_ado_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAdoAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADO_ANDR($ADO_ado_address: String!) {
  ADO {
    ado(address: $ADO_ado_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAdoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_ADO($ADO_ado_address: String!) {
  ADO {
    ado(address: $ADO_ado_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoAppAddressesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_ADDRESSES($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      addresses {
        address
        name
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAppAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_ANDR_ISOPERATOR($ADO_app_address: String!, $ADO_app_app_andr_andr_isOperator_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      andr {
        isOperator(address: $ADO_app_app_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAppAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_ANDR($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAppComponentexistsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS($ADO_app_address: String!, $ADO_app_app_componentExists_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      componentExists(name: $ADO_app_app_componentExists_name)
    }
  }
}
    `;
export const CodegenGeneratedAdoAppComponentsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_COMPONENTS($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      components {
        address
        ado_type
        instantiate_msg
        name
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAppConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_CONFIG($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      config {
        name
        owner
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAppGetaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_GETADDRESS($ADO_app_address: String!, $ADO_app_app_getAddress_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      getAddress(name: $ADO_app_app_getAddress_name)
    }
  }
}
    `;
export const CodegenGeneratedAdoAppDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP($ADO_app_address: String!) {
  ADO {
    app(address: $ADO_app_address) {
      address
      addresses {
        address
        name
      }
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      components {
        address
        ado_type
        instantiate_msg
        name
      }
      config {
        name
        owner
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_ANDR_ISOPERATOR($ADO_auction_address: String!, $ADO_auction_auction_andr_andr_isOperator_address: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      andr {
        isOperator(address: $ADO_auction_auction_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_ANDR($ADO_auction_address: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionAuctionidsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS($ADO_auction_address: String!, $ADO_auction_auction_auctionIDs_tokenAddress: String!, $ADO_auction_auction_auctionIDs_tokenId: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionIDs(
        tokenAddress: $ADO_auction_auction_auctionIDs_tokenAddress
        tokenId: $ADO_auction_auction_auctionIDs_tokenId
      ) {
        auction_ids
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS($ADO_auction_address: String!, $ADO_auction_auction_auctionInfosForAddress_tokenAddress: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionInfosForAddress(
        tokenAddress: $ADO_auction_auction_auctionInfosForAddress_tokenAddress
      ) {
        auction_ids
        token_address
        token_id
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionAuctionstateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_auctionState_auctionId: Float!) {
  ADO {
    auction(address: $ADO_auction_address) {
      auctionState(auctionId: $ADO_auction_auction_auctionState_auctionId) {
        auction_id
        coin_denom
        end_time
        high_bidder_addr
        high_bidder_amount
        is_cancelled
        min_bid
        start_time
        summaryFields
        whitelist
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionBidsBidsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS($ADO_auction_address: String!, $ADO_auction_auction_bids_auctionId: Float!, $ADO_auction_auction_bids_options: AndrSearchOptions) {
  ADO {
    auction(address: $ADO_auction_address) {
      bids(
        auctionId: $ADO_auction_auction_bids_auctionId
        options: $ADO_auction_auction_bids_options
      ) {
        bids {
          amount
          bidder
          timestamp
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionBidsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_BIDS($ADO_auction_address: String!, $ADO_auction_auction_bids_auctionId: Float!, $ADO_auction_auction_bids_options: AndrSearchOptions) {
  ADO {
    auction(address: $ADO_auction_address) {
      bids(
        auctionId: $ADO_auction_auction_bids_auctionId
        options: $ADO_auction_auction_bids_options
      ) {
        bids {
          amount
          bidder
          timestamp
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionLatestauctionstateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_latestAuctionState_tokenAddress: String!, $ADO_auction_auction_latestAuctionState_tokenId: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      latestAuctionState(
        tokenAddress: $ADO_auction_auction_latestAuctionState_tokenAddress
        tokenId: $ADO_auction_auction_latestAuctionState_tokenId
      ) {
        auction_id
        coin_denom
        end_time
        high_bidder_addr
        high_bidder_amount
        is_cancelled
        min_bid
        start_time
        summaryFields
        whitelist
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionSummaryfieldsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS($ADO_auction_address: String!, $ADO_auction_auction_summaryFields_tokenAddress: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      summaryFields(tokenAddress: $ADO_auction_auction_summaryFields_tokenAddress) {
        coin_denom
        high_bidder_amount
        min_bid
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoAuctionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_AUCTION($ADO_auction_address: String!) {
  ADO {
    auction(address: $ADO_auction_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_ANDR_ISOPERATOR($ADO_crowdfund_address: String!, $ADO_crowdfund_crowdfund_andr_andr_isOperator_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      andr {
        isOperator(address: $ADO_crowdfund_crowdfund_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_ANDR($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      config {
        can_mint_after_sale
        token_address
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundIstokenavailableDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE($ADO_crowdfund_address: String!, $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      isTokenAvailable(tokenId: $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId)
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundStatePriceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      state {
        price {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_STATE($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      state {
        amount_sold
        amount_to_send
        amount_transferred
        expiration
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCrowdfundDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND($ADO_crowdfund_address: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      availableTokens
      config {
        can_mint_after_sale
        token_address
      }
      state {
        amount_sold
        amount_to_send
        amount_transferred
        expiration
        max_amount_per_wallet
        min_tokens_sold
        price {
          amount
          denom
        }
        recipient
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AllaccountsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS($ADO_cw20_address: String!, $ADO_cw20_cw20_allAccounts_options: AndrSearchOptions) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allAccounts(options: $ADO_cw20_cw20_allAccounts_options)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AllallowancesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES($ADO_cw20_address: String!, $ADO_cw20_cw20_allAllowances_options: AndrSearchOptions, $ADO_cw20_cw20_allAllowances_owner: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allAllowances(
        options: $ADO_cw20_cw20_allAllowances_options
        owner: $ADO_cw20_cw20_allAllowances_owner
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AllspenderallowancesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES($ADO_cw20_address: String!, $ADO_cw20_cw20_allSpenderAllowances_options: AndrSearchOptions, $ADO_cw20_cw20_allSpenderAllowances_spender: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allSpenderAllowances(
        options: $ADO_cw20_cw20_allSpenderAllowances_options
        spender: $ADO_cw20_cw20_allSpenderAllowances_spender
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AllowanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ALLOWANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_allowance_owner: String!, $ADO_cw20_cw20_allowance_spender: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allowance(
        owner: $ADO_cw20_cw20_allowance_owner
        spender: $ADO_cw20_cw20_allowance_spender
      ) {
        allowance
        expires
        owner
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ANDR_ISOPERATOR($ADO_cw20_address: String!, $ADO_cw20_cw20_andr_andr_isOperator_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      andr {
        isOperator(address: $ADO_cw20_cw20_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20AndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ANDR($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20BalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_BALANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_balance_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      balance(address: $ADO_cw20_cw20_balance_address)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20DownloadlogoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      downloadLogo {
        data
        mime_type
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20MarketinginfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      marketingInfo {
        allowance
        description
        logo
        marketing
        project
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20MinterDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_MINTER($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      minter {
        cap
        minter
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20TokeninfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_TOKENINFO($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20($ADO_cw20_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      downloadLogo {
        data
        mime_type
      }
      marketingInfo {
        allowance
        description
        logo
        marketing
        project
      }
      minter {
        cap
        minter
      }
      tokenInfo {
        decimals
        name
        symbol
        total_supply
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20ExchangeAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR_ISOPERATOR($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_andr_andr_isOperator_address: String!) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      andr {
        isOperator(
          address: $ADO_cw20_exchange_cw20_exchange_andr_andr_isOperator_address
        )
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20ExchangeAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR($ADO_cw20_exchange_address: String!) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20ExchangeSaleDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_sale_cw20: String, $ADO_cw20_exchange_cw20_exchange_sale_native: String) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      sale(
        cw20: $ADO_cw20_exchange_cw20_exchange_sale_cw20
        native: $ADO_cw20_exchange_cw20_exchange_sale_native
      ) {
        amount
        exchange_rate
        recipient
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20ExchangeSaleassetsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_saleAssets_options: AndrSearchOptions) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      saleAssets(options: $ADO_cw20_exchange_cw20_exchange_saleAssets_options)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20ExchangeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE($ADO_cw20_exchange_address: String!) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      tokenAddress
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR_ISOPERATOR($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_andr_andr_isOperator_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      andr {
        isOperator(address: $ADO_cw20_staking_cw20_staking_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      config {
        staking_token {
          identifier
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      config {
        number_of_reward_tokens
        staking_token {
          identifier
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingStakerDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_staker_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      staker(address: $ADO_cw20_staking_cw20_staking_staker_address) {
        address
        pending_rewards
        share
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingStakersDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_stakers_options: AndrSearchOptions) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      stakers(options: $ADO_cw20_staking_cw20_staking_stakers_options) {
        address
        pending_rewards
        share
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING_STATE($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      state {
        total_share
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw20StakingDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_STAKING($ADO_cw20_staking_address: String!) {
  ADO {
    cw20_staking(address: $ADO_cw20_staking_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      config {
        number_of_reward_tokens
        staking_token {
          identifier
        }
      }
      state {
        total_share
      }
      timestamp
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoAccessDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
          owner
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          extension {
            attributes {
              display_type
              trait_type
              value
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          extension {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            description
            external_url
            image
            image_data
            name
            publisher
            youtube_url
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoInfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        info {
          extension {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            description
            external_url
            image
            image_data
            name
            publisher
            youtube_url
          }
          token_uri
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AllnftinfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allNftInfo(
        includeExpired: $ADO_cw721_cw721_allNftInfo_includeExpired
        tokenId: $ADO_cw721_cw721_allNftInfo_tokenId
      ) {
        access {
          approvals {
            expires
            spender
          }
          owner
        }
        info {
          extension {
            animation_url
            attributes {
              display_type
              trait_type
              value
            }
            description
            external_url
            image
            image_data
            name
            publisher
            youtube_url
          }
          token_uri
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AlloperatorsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS($ADO_cw721_address: String!, $ADO_cw721_cw721_allOperators_includeExpired: Boolean!, $ADO_cw721_cw721_allOperators_options: AndrSearchOptions, $ADO_cw721_cw721_allOperators_owner: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allOperators(
        includeExpired: $ADO_cw721_cw721_allOperators_includeExpired
        options: $ADO_cw721_cw721_allOperators_options
        owner: $ADO_cw721_cw721_allOperators_owner
      ) {
        expires
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AlltokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLTOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_allTokens_options: AndrSearchOptions) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allTokens(options: $ADO_cw721_cw721_allTokens_options)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ANDR_ISOPERATOR($ADO_cw721_address: String!, $ADO_cw721_cw721_andr_andr_isOperator_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      andr {
        isOperator(address: $ADO_cw721_cw721_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721AndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ANDR($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721ApprovalDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_APPROVAL($ADO_cw721_address: String!, $ADO_cw721_cw721_approval_includeExpired: Boolean!, $ADO_cw721_cw721_approval_spender: String!, $ADO_cw721_cw721_approval_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      approval(
        includeExpired: $ADO_cw721_cw721_approval_includeExpired
        spender: $ADO_cw721_cw721_approval_spender
        tokenId: $ADO_cw721_cw721_approval_tokenId
      ) {
        expires
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721ApprovalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_approvals_includeExpired: Boolean!, $ADO_cw721_cw721_approvals_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      approvals(
        includeExpired: $ADO_cw721_cw721_approvals_includeExpired
        tokenId: $ADO_cw721_cw721_approvals_tokenId
      ) {
        expires
        spender
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721ContractinfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      contractInfo {
        name
        symbol
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721IsarchivedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ISARCHIVED($ADO_cw721_address: String!, $ADO_cw721_cw721_isArchived_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      isArchived(tokenId: $ADO_cw721_cw721_isArchived_tokenId)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721NftinfoExtensionAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        extension {
          attributes {
            display_type
            trait_type
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721NftinfoExtensionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        extension {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          description
          external_url
          image
          image_data
          name
          publisher
          youtube_url
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721NftinfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_NFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      nftInfo(tokenId: $ADO_cw721_cw721_nftInfo_tokenId) {
        extension {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          description
          external_url
          image
          image_data
          name
          publisher
          youtube_url
        }
        token_uri
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721NumownersDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_NUMOWNERS($ADO_cw721_address: String!, $ADO_cw721_cw721_numOwners_includeExpired: Boolean!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      numOwners(includeExpired: $ADO_cw721_cw721_numOwners_includeExpired)
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721OwnerofApprovalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS($ADO_cw721_address: String!, $ADO_cw721_cw721_ownerOf_includeExpired: Boolean!, $ADO_cw721_cw721_ownerOf_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      ownerOf(
        includeExpired: $ADO_cw721_cw721_ownerOf_includeExpired
        tokenId: $ADO_cw721_cw721_ownerOf_tokenId
      ) {
        approvals {
          expires
          spender
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721OwnerofDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_OWNEROF($ADO_cw721_address: String!, $ADO_cw721_cw721_ownerOf_includeExpired: Boolean!, $ADO_cw721_cw721_ownerOf_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      ownerOf(
        includeExpired: $ADO_cw721_cw721_ownerOf_includeExpired
        tokenId: $ADO_cw721_cw721_ownerOf_tokenId
      ) {
        approvals {
          expires
          spender
        }
        owner
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721SearchtokensExtensionAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION_ATTRIBUTES($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        extension {
          attributes {
            display_type
            trait_type
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721SearchtokensExtensionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        extension {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          description
          external_url
          image
          image_data
          name
          publisher
          youtube_url
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721SearchtokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_searchTokens_attributes: [SearchAttribute!]) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      searchTokens(attributes: $ADO_cw721_cw721_searchTokens_attributes) {
        extension {
          animation_url
          attributes {
            display_type
            trait_type
            value
          }
          description
          external_url
          image
          image_data
          name
          publisher
          youtube_url
        }
        token_uri
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721TokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_TOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_tokens_options: AndrSearchOptions, $ADO_cw721_cw721_tokens_owner: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      tokens(
        options: $ADO_cw721_cw721_tokens_options
        owner: $ADO_cw721_cw721_tokens_owner
      )
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721TransferagreementAgreementDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
          purchaser
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721TransferagreementDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      transferAgreement(tokenId: $ADO_cw721_cw721_transferAgreement_tokenId) {
        agreement {
          amount {
            raw {
              amount
              denom
            }
          }
          purchaser
        }
        tokenId
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoCw721Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721($ADO_cw721_address: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      contractInfo {
        name
        symbol
      }
      minter
      numTokens
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoFactoryAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_FACTORY_ANDR_ISOPERATOR($ADO_factory_address: String!, $ADO_factory_factory_andr_andr_isOperator_address: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      andr {
        isOperator(address: $ADO_factory_factory_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoFactoryAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_FACTORY_ANDR($ADO_factory_address: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoFactoryCodeIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_FACTORY_CODE_ID($ADO_factory_address: String!, $ADO_factory_factory_code_id_key: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      code_id(key: $ADO_factory_factory_code_id_key)
    }
  }
}
    `;
export const CodegenGeneratedAdoFactoryDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_FACTORY($ADO_factory_address: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_ANDR_ISOPERATOR($ADO_lockdrop_address: String!, $ADO_lockdrop_lockdrop_andr_andr_isOperator_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      andr {
        isOperator(address: $ADO_lockdrop_lockdrop_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_ANDR($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      config {
        deposit_window
        incentive_token
        init_timestamp
        lockdrop_incentives
        native_denom
        withdrawal_window
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_STATE($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      state {
        are_claims_allowed
        total_native_locked
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropUserinfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO($ADO_lockdrop_address: String!, $ADO_lockdrop_lockdrop_userInfo_user: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      userInfo(user: $ADO_lockdrop_lockdrop_userInfo_user) {
        is_lockdrop_claimed
        total_incentives
        total_native_locked
        withrawal_flag
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED($ADO_lockdrop_address: String!, $ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: Float!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      withdrawalPercentAllowed(
        timestamp: $ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp
      )
    }
  }
}
    `;
export const CodegenGeneratedAdoLockdropDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_LOCKDROP($ADO_lockdrop_address: String!) {
  ADO {
    lockdrop(address: $ADO_lockdrop_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      config {
        deposit_window
        incentive_token
        init_timestamp
        lockdrop_incentives
        native_denom
        withdrawal_window
      }
      state {
        are_claims_allowed
        total_native_locked
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR_ISOPERATOR($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_andr_andr_isOperator_address: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      andr {
        isOperator(address: $ADO_marketplace_marketplace_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR($ADO_marketplace_address: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceLatestsalestateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_latestSaleState_tokenAddress: String!, $ADO_marketplace_marketplace_latestSaleState_tokenId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      latestSaleState(
        tokenAddress: $ADO_marketplace_marketplace_latestSaleState_tokenAddress
        tokenId: $ADO_marketplace_marketplace_latestSaleState_tokenId
      ) {
        coin_denom
        price
        sale_id
        status
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceSaleidsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleIds_tokenAddress: String!, $ADO_marketplace_marketplace_saleIds_tokenId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleIds(
        tokenAddress: $ADO_marketplace_marketplace_saleIds_tokenAddress
        tokenId: $ADO_marketplace_marketplace_saleIds_tokenId
      ) {
        sale_ids
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleInfosForAddress_options: AndrSearchOptions, $ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleInfosForAddress(
        options: $ADO_marketplace_marketplace_saleInfosForAddress_options
        tokenAddress: $ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress
      ) {
        sale_ids
        token_address
        token_id
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceSalestateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleState_saleId: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      saleState(saleId: $ADO_marketplace_marketplace_saleState_saleId) {
        coin_denom
        price
        sale_id
        status
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMarketplaceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MARKETPLACE($ADO_marketplace_address: String!) {
  ADO {
    marketplace(address: $ADO_marketplace_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR_ISOPERATOR($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_andr_andr_isOperator_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      andr {
        isOperator(
          address: $ADO_merkle_airdrop_merkle_airdrop_andr_andr_isOperator_address
        )
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      config {
        asset_info
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropIsclaimedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: String!, $ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      isClaimed(
        address: $ADO_merkle_airdrop_merkle_airdrop_isClaimed_address
        stage: $ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage
      )
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropMerklerootDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      merkleRoot(stage: $ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage) {
        expiration
        merkle_root
        stage
        total_amount
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      totalClaimed(stage: $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage)
    }
  }
}
    `;
export const CodegenGeneratedAdoMerkleAirdropDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP($ADO_merkle_airdrop_address: String!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      config {
        asset_info
      }
      latestStage
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoPrimitiveAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR_ISOPERATOR($ADO_primitive_address: String!, $ADO_primitive_primitive_andr_andr_isOperator_address: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      andr {
        isOperator(address: $ADO_primitive_primitive_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoPrimitiveAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR($ADO_primitive_address: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoPrimitiveGetvalueDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE($ADO_primitive_address: String!, $ADO_primitive_primitive_getValue_key: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      getValue(key: $ADO_primitive_primitive_getValue_key) {
        key
        value
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoPrimitiveDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_PRIMITIVE($ADO_primitive_address: String!) {
  ADO {
    primitive(address: $ADO_primitive_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      accountDetails {
        balance
        latest_withdrawal
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR_ISOPERATOR($ADO_rate_limiting_withdrawals_address: String!, $ADO_rate_limiting_withdrawals_rate_limiting_withdrawals_andr_andr_isOperator_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      andr {
        isOperator(
          address: $ADO_rate_limiting_withdrawals_rate_limiting_withdrawals_andr_andr_isOperator_address
        )
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      coinAllowanceDetails {
        coin
        limit
        minimal_withdrawal_frequency
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRateLimitingWithdrawalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS($ADO_rate_limiting_withdrawals_address: String!) {
  ADO {
    rate_limiting_withdrawals(address: $ADO_rate_limiting_withdrawals_address) {
      accountDetails {
        balance
        latest_withdrawal
      }
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      coinAllowanceDetails {
        coin
        limit
        minimal_withdrawal_frequency
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_ANDR_ISOPERATOR($ADO_rates_address: String!, $ADO_rates_rates_andr_andr_isOperator_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      andr {
        isOperator(address: $ADO_rates_rates_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_ANDR($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesPaymentsRateExternalDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          external {
            address
            key
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesPaymentsRateFlatDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          flat {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesPaymentsRatePercentDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
        rate {
          percent {
            decimal
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesPaymentsRateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      payments {
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
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoRatesPaymentsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES_PAYMENTS($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
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
}
    `;
export const CodegenGeneratedAdoRatesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_RATES($ADO_rates_address: String!) {
  ADO {
    rates(address: $ADO_rates_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
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
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoSplitterAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_SPLITTER_ANDR_ISOPERATOR($ADO_splitter_address: String!, $ADO_splitter_splitter_andr_andr_isOperator_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      andr {
        isOperator(address: $ADO_splitter_splitter_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoSplitterAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_SPLITTER_ANDR($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoSplitterConfigRecipientsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      config {
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoSplitterConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_SPLITTER_CONFIG($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoSplitterDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_SPLITTER($ADO_splitter_address: String!) {
  ADO {
    splitter(address: $ADO_splitter_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_ANDR_ISOPERATOR($ADO_timelock_address: String!, $ADO_timelock_timelock_andr_andr_isOperator_address: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      andr {
        isOperator(address: $ADO_timelock_timelock_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_ANDR($ADO_timelock_address: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        coins {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        condition {
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFunds(
        owner: $ADO_timelock_timelock_getLockedFunds_owner
        recipient: $ADO_timelock_timelock_getLockedFunds_recipient
      ) {
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
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        coins {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        condition {
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
        condition {
          expiration
          miniumFunds {
            amount
            denom
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFundsForRecipient_options: AndrSearchOptions!, $ADO_timelock_timelock_getLockedFundsForRecipient_recipient: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      getLockedFundsForRecipient(
        options: $ADO_timelock_timelock_getLockedFundsForRecipient_options
        recipient: $ADO_timelock_timelock_getLockedFundsForRecipient_recipient
      ) {
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
}
    `;
export const CodegenGeneratedAdoTimelockDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_TIMELOCK($ADO_timelock_address: String!) {
  ADO {
    timelock(address: $ADO_timelock_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoVaultAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VAULT_ANDR_ISOPERATOR($ADO_vault_address: String!, $ADO_vault_vault_andr_andr_isOperator_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      andr {
        isOperator(address: $ADO_vault_vault_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVaultAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VAULT_ANDR($ADO_vault_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVaultBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VAULT_BALANCE($ADO_vault_address: String!, $ADO_vault_vault_balance_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      balance(address: $ADO_vault_vault_balance_address) {
        amount
        denom
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVaultStrategyaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS($ADO_vault_address: String!, $ADO_vault_vault_strategyAddress_strategy: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      strategyAddress(strategy: $ADO_vault_vault_strategyAddress_strategy) {
        address
        strategyType
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVaultDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VAULT($ADO_vault_address: String!) {
  ADO {
    vault(address: $ADO_vault_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING_ANDR_ISOPERATOR($ADO_vesting_address: String!, $ADO_vesting_vesting_andr_andr_isOperator_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      andr {
        isOperator(address: $ADO_vesting_vesting_andr_andr_isOperator_address)
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING_ANDR($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingBatchDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING_BATCH($ADO_vesting_address: String!, $ADO_vesting_vesting_batch_id: Float!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      batch(id: $ADO_vesting_vesting_batch_id) {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingBatchesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING_BATCHES($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      batches {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING_CONFIG($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      config {
        denom
        is_multi_batch_enabled
        recipient
        unbonding_duration
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoVestingDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_VESTING($ADO_vesting_address: String!) {
  ADO {
    vesting(address: $ADO_vesting_address) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      batches {
        amount
        amount_available_to_claim
        amount_claimed
        id
        last_claimed_release_time
        lockup_end
        number_of_available_claims
        release_amount
        release_unit
      }
      config {
        denom
        is_multi_batch_enabled
        recipient
        unbonding_duration
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR_ISOPERATOR($ADO_weighted_distribution_splitter_address: String!, $ADO_weighted_distribution_splitter_weighted_distribution_splitter_andr_andr_isOperator_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      andr {
        isOperator(
          address: $ADO_weighted_distribution_splitter_weighted_distribution_splitter_andr_andr_isOperator_address
        )
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      config {
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT($ADO_weighted_distribution_splitter_address: String!, $ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      getUserWeight(
        user: $ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user
      ) {
        total_weight
        weight
      }
    }
  }
}
    `;
export const CodegenGeneratedAdoWeightedDistributionSplitterDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER($ADO_weighted_distribution_splitter_address: String!) {
  ADO {
    weighted_distribution_splitter(
      address: $ADO_weighted_distribution_splitter_address
    ) {
      address
      andr {
        address
        admin
        blockHeightUponCreation
        codeId
        contractVersion
        creator
        ibcPortId
        label
        operators
        originalPublisher
        owner
        queries_expected
        type
        version
      }
      config {
        lock
        recipients {
          percent
          recipient
        }
      }
      type
    }
  }
}
    `;
export const CodegenGeneratedAdoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO {
  ADO {
    receipt
  }
}
    `;
export const CodegenGeneratedAdopPackageSchemasReceiveDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      schemas {
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdopPackageSchemasDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      schemas {
        contract_schema
        execute
        instantiate
        query
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdopPackageDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADOP_PACKAGE($ADOP_package_adoType: String!) {
  ADOP {
    package(adoType: $ADOP_package_adoType) {
      name
      schemas {
        contract_schema
        execute
        instantiate
        query
        receive {
          cw20
          cw721
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedAdopDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADOP {
  ADOP {
    adoTypes
  }
}
    `;
export const CodegenGeneratedAccountsAssetsComponentsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS($accounts_assets_adoType: AdoType, $accounts_assets_limit: Int, $accounts_assets_offset: Int, $accounts_assets_orderBy: AndrOrderBy, $accounts_assets_search: String, $accounts_assets_walletAddress: String!, $accounts_assets_assets_components_componentType: AdoType, $accounts_assets_assets_components_limit: Int, $accounts_assets_assets_components_offset: Int) {
  accounts {
    assets(
      adoType: $accounts_assets_adoType
      limit: $accounts_assets_limit
      offset: $accounts_assets_offset
      orderBy: $accounts_assets_orderBy
      search: $accounts_assets_search
      walletAddress: $accounts_assets_walletAddress
    ) {
      components(
        componentType: $accounts_assets_assets_components_componentType
        limit: $accounts_assets_assets_components_limit
        offset: $accounts_assets_assets_components_offset
      ) {
        address
        ado_type
        instantiate_msg
        name
      }
    }
  }
}
    `;
export const CodegenGeneratedAccountsAssetsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ACCOUNTS_ASSETS($accounts_assets_adoType: AdoType, $accounts_assets_limit: Int, $accounts_assets_offset: Int, $accounts_assets_orderBy: AndrOrderBy, $accounts_assets_search: String, $accounts_assets_walletAddress: String!) {
  accounts {
    assets(
      adoType: $accounts_assets_adoType
      limit: $accounts_assets_limit
      offset: $accounts_assets_offset
      orderBy: $accounts_assets_orderBy
      search: $accounts_assets_search
      walletAddress: $accounts_assets_walletAddress
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
export const CodegenGeneratedAccountsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ACCOUNTS {
  accounts {
    wallets
  }
}
    `;
export const CodegenGeneratedChainconfigsAllconfigsIconurlsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS {
  chainConfigs {
    allConfigs {
      iconUrls {
        lg
        sm
      }
    }
  }
}
    `;
export const CodegenGeneratedChainconfigsAllconfigsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS {
  chainConfigs {
    allConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
export const CodegenGeneratedChainconfigsConfigIconurlsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS($chainConfigs_config_identifier: String!) {
  chainConfigs {
    config(identifier: $chainConfigs_config_identifier) {
      iconUrls {
        lg
        sm
      }
    }
  }
}
    `;
export const CodegenGeneratedChainconfigsConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINCONFIGS_CONFIG($chainConfigs_config_identifier: String!) {
  chainConfigs {
    config(identifier: $chainConfigs_config_identifier) {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
export const CodegenGeneratedChainconfigsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINCONFIGS {
  chainConfigs {
    allConfigs {
      addressPrefix
      blockExplorerAddressPages
      blockExplorerTxPages
      chainId
      chainName
      chainType
      chainUrl
      defaultFee
      iconUrls {
        lg
        sm
      }
      kernelAddress
      name
      registryAddress
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsBip44Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44 {
  keplrConfigs {
    allConfigs {
      bip44 {
        coinType
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES {
  keplrConfigs {
    allConfigs {
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES {
  keplrConfigs {
    allConfigs {
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP {
  keplrConfigs {
    allConfigs {
      gasPriceStep {
        average
        high
        low
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY {
  keplrConfigs {
    allConfigs {
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsAllconfigsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
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
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigBip44Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bip44 {
        coinType
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigCurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      currencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigGaspricestepDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      gasPriceStep {
        average
        high
        low
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG($keplrConfigs_config_identifier: String!) {
  keplrConfigs {
    config(identifier: $keplrConfigs_config_identifier) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
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
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedKeplrconfigsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_KEPLRCONFIGS {
  keplrConfigs {
    allConfigs {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
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
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoId
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByaccountDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYACCOUNT($chainId: String!, $tx_byAccount_maxHeight: Int, $tx_byAccount_minHeight: Int, $tx_byAccount_sentFromOrTo: String!) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $tx_byAccount_maxHeight
      minHeight: $tx_byAccount_minHeight
      sentFromOrTo: $tx_byAccount_sentFromOrTo
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBycontractDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYCONTRACT($chainId: String!, $tx_byContract_address: String!, $tx_byContract_maxHeight: Int, $tx_byContract_minHeight: Int) {
  tx(chainId: $chainId) {
    byContract(
      address: $tx_byContract_address
      maxHeight: $tx_byContract_maxHeight
      minHeight: $tx_byContract_minHeight
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH_EVENTS($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH_TXLOG($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByhashDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHASH($chainId: String!, $tx_byHash_hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $tx_byHash_hash) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByheightDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYHEIGHT($chainId: String!, $tx_byHeight_height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $tx_byHeight_height) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER_EVENTS($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER_TXLOG($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxByownerDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYOWNER($chainId: String!, $tx_byOwner_maxHeight: Int, $tx_byOwner_minHeight: Int, $tx_byOwner_walletAddress: String!) {
  tx(chainId: $chainId) {
    byOwner(
      maxHeight: $tx_byOwner_maxHeight
      minHeight: $tx_byOwner_minHeight
      walletAddress: $tx_byOwner_walletAddress
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      events {
        attributes {
          key
          value
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG_EVENTS($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      events {
        attributes {
          key
          value
        }
        type
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagTxlogEventsAttributesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagTxlogEventsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagTxlogDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG_TXLOG($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxBytagDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX_BYTAG($chainId: String!, $tx_byTag_maxHeight: Int, $tx_byTag_minHeight: Int, $tx_byTag_tags: JSON!) {
  tx(chainId: $chainId) {
    byTag(
      maxHeight: $tx_byTag_maxHeight
      minHeight: $tx_byTag_minHeight
      tags: $tx_byTag_tags
    ) {
      code
      events {
        attributes {
          key
          value
        }
        type
      }
      gasUsed
      gasWanted
      hash
      height
      rawLog
      tx
      txLog {
        events {
          attributes {
            key
            value
          }
          type
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedTxDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX($chainId: String!) {
  tx(chainId: $chainId) {
    chainId
  }
}
    `;
export const TxByAccountDocument = /*#__PURE__*/ gql`
    query TX_BY_ACCOUNT($chainId: String!, $sentFromOrTo: String!, $minHeight: Int, $maxHeight: Int) {
  tx(chainId: $chainId) {
    byAccount(
      maxHeight: $maxHeight
      minHeight: $minHeight
      sentFromOrTo: $sentFromOrTo
    ) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;
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
export const TxByHeightDocument = /*#__PURE__*/ gql`
    query TX_BY_HEIGHT($chainId: String!, $height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $height) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;
export const TxByHashDocument = /*#__PURE__*/ gql`
    query TX_BY_HASH($chainId: String!, $hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $hash) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ADDRESS_LIST_CONTAINS_ADDRESS(variables: IAddressListContainsAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAddressListContainsAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAddressListContainsAddressQuery>(AddressListContainsAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ADDRESS_LIST_CONTAINS_ADDRESS', 'query');
    },
    APP_CONFIG(variables: IAppConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAppConfigQuery>(AppConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'APP_CONFIG', 'query');
    },
    APP_COMPONENTS(variables: IAppComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppComponentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAppComponentsQuery>(AppComponentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'APP_COMPONENTS', 'query');
    },
    APP_CONFIG_AND_COMPONENTS(variables: IAppConfigAndComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppConfigAndComponentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAppConfigAndComponentsQuery>(AppConfigAndComponentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'APP_CONFIG_AND_COMPONENTS', 'query');
    },
    ASSETS(variables: IAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAssetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAssetsQuery>(AssetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ASSETS', 'query');
    },
    BASE_ADO(variables: IBaseAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IBaseAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IBaseAdoQuery>(BaseAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BASE_ADO', 'query');
    },
    CROWDFUND_AVAILABLE_TOKENS(variables: ICrowdfundAvailableTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundAvailableTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICrowdfundAvailableTokensQuery>(CrowdfundAvailableTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CROWDFUND_AVAILABLE_TOKENS', 'query');
    },
    CROWDFUND_IS_TOKEN_AVAILABLE(variables: ICrowdfundIsTokenAvailableQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundIsTokenAvailableQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICrowdfundIsTokenAvailableQuery>(CrowdfundIsTokenAvailableDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CROWDFUND_IS_TOKEN_AVAILABLE', 'query');
    },
    CROWDFUND_CONFIG(variables: ICrowdfundConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICrowdfundConfigQuery>(CrowdfundConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CROWDFUND_CONFIG', 'query');
    },
    CROWDFUND_STATE(variables: ICrowdfundStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICrowdfundStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICrowdfundStateQuery>(CrowdfundStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CROWDFUND_STATE', 'query');
    },
    CW20_TOKEN_INFO(variables: ICw20TokenInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw20TokenInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICw20TokenInfoQuery>(Cw20TokenInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CW20_TOKEN_INFO', 'query');
    },
    CW20(variables: ICw20QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw20Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICw20Query>(Cw20Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CW20', 'query');
    },
    CW721_INFO(variables: ICw721InfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICw721InfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICw721InfoQuery>(Cw721InfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CW721_INFO', 'query');
    },
    CHAIN_CONFIG(variables: IChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IChainConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IChainConfigQuery>(ChainConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CHAIN_CONFIG', 'query');
    },
    ALL_CHAIN_CONFIG(variables?: IAllChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAllChainConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAllChainConfigQuery>(AllChainConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ALL_CHAIN_CONFIG', 'query');
    },
    KEPLR_CONFIG(variables: IKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IKeplrConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IKeplrConfigQuery>(KeplrConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'KEPLR_CONFIG', 'query');
    },
    ALL_KEPLR_CONFIG(variables?: IAllKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAllKeplrConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAllKeplrConfigQuery>(AllKeplrConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ALL_KEPLR_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery>(CodegenGeneratedAdoAddressListAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR(variables: ICodegenGeneratedAdoAddressListAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAddressListAndrQuery>(CodegenGeneratedAdoAddressListAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS(variables: ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListIncludesaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAddressListIncludesaddressQuery>(CodegenGeneratedAdoAddressListIncludesaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST_INCLUDESADDRESS', 'query');
    },
    CODEGEN_GENERATED_ADO_ADDRESS_LIST(variables: ICodegenGeneratedAdoAddressListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAddressListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAddressListQuery>(CodegenGeneratedAdoAddressListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADDRESS_LIST', 'query');
    },
    CODEGEN_GENERATED_ADO_ADO_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdoAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAdoAndrIsoperatorQuery>(CodegenGeneratedAdoAdoAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADO_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_ADO_ANDR(variables: ICodegenGeneratedAdoAdoAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdoAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAdoAndrQuery>(CodegenGeneratedAdoAdoAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADO_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_ADO(variables: ICodegenGeneratedAdoAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAdoQuery>(CodegenGeneratedAdoAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_ADO', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_ADDRESSES(variables: ICodegenGeneratedAdoAppAddressesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppAddressesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppAddressesQuery>(CodegenGeneratedAdoAppAddressesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_ADDRESSES', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppAndrIsoperatorQuery>(CodegenGeneratedAdoAppAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_ANDR(variables: ICodegenGeneratedAdoAppAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppAndrQuery>(CodegenGeneratedAdoAppAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS(variables: ICodegenGeneratedAdoAppComponentexistsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppComponentexistsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppComponentexistsQuery>(CodegenGeneratedAdoAppComponentexistsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_COMPONENTS(variables: ICodegenGeneratedAdoAppComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppComponentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppComponentsQuery>(CodegenGeneratedAdoAppComponentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_COMPONENTS', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_CONFIG(variables: ICodegenGeneratedAdoAppConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppConfigQuery>(CodegenGeneratedAdoAppConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_APP_GETADDRESS(variables: ICodegenGeneratedAdoAppGetaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppGetaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppGetaddressQuery>(CodegenGeneratedAdoAppGetaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP_GETADDRESS', 'query');
    },
    CODEGEN_GENERATED_ADO_APP(variables: ICodegenGeneratedAdoAppQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAppQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAppQuery>(CodegenGeneratedAdoAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_APP', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery>(CodegenGeneratedAdoAuctionAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_ANDR(variables: ICodegenGeneratedAdoAuctionAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionAndrQuery>(CodegenGeneratedAdoAuctionAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS(variables: ICodegenGeneratedAdoAuctionAuctionidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctionidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionAuctionidsQuery>(CodegenGeneratedAdoAuctionAuctionidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONIDS', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS(variables: ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery>(CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONINFOSFORADDRESS', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE(variables: ICodegenGeneratedAdoAuctionAuctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionAuctionstateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionAuctionstateQuery>(CodegenGeneratedAdoAuctionAuctionstateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_AUCTIONSTATE', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS(variables: ICodegenGeneratedAdoAuctionBidsBidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionBidsBidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionBidsBidsQuery>(CodegenGeneratedAdoAuctionBidsBidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_BIDS_BIDS', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_BIDS(variables: ICodegenGeneratedAdoAuctionBidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionBidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionBidsQuery>(CodegenGeneratedAdoAuctionBidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_BIDS', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE(variables: ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionLatestauctionstateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionLatestauctionstateQuery>(CodegenGeneratedAdoAuctionLatestauctionstateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_LATESTAUCTIONSTATE', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS(variables: ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionSummaryfieldsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionSummaryfieldsQuery>(CodegenGeneratedAdoAuctionSummaryfieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION_SUMMARYFIELDS', 'query');
    },
    CODEGEN_GENERATED_ADO_AUCTION(variables: ICodegenGeneratedAdoAuctionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoAuctionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoAuctionQuery>(CodegenGeneratedAdoAuctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_AUCTION', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery>(CodegenGeneratedAdoCrowdfundAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_ANDR(variables: ICodegenGeneratedAdoCrowdfundAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundAndrQuery>(CodegenGeneratedAdoCrowdfundAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG(variables: ICodegenGeneratedAdoCrowdfundConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundConfigQuery>(CodegenGeneratedAdoCrowdfundConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE(variables: ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery>(CodegenGeneratedAdoCrowdfundIstokenavailableDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE(variables: ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundStatePriceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundStatePriceQuery>(CodegenGeneratedAdoCrowdfundStatePriceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_STATE_PRICE', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND_STATE(variables: ICodegenGeneratedAdoCrowdfundStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundStateQuery>(CodegenGeneratedAdoCrowdfundStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND_STATE', 'query');
    },
    CODEGEN_GENERATED_ADO_CROWDFUND(variables: ICodegenGeneratedAdoCrowdfundQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCrowdfundQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCrowdfundQuery>(CodegenGeneratedAdoCrowdfundDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CROWDFUND', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS(variables: ICodegenGeneratedAdoCw20AllaccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllaccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AllaccountsQuery>(CodegenGeneratedAdoCw20AllaccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES(variables: ICodegenGeneratedAdoCw20AllallowancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllallowancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AllallowancesQuery>(CodegenGeneratedAdoCw20AllallowancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ALLALLOWANCES', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES(variables: ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllspenderallowancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AllspenderallowancesQuery>(CodegenGeneratedAdoCw20AllspenderallowancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ALLSPENDERALLOWANCES', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ALLOWANCE(variables: ICodegenGeneratedAdoCw20AllowanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AllowanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AllowanceQuery>(CodegenGeneratedAdoCw20AllowanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ALLOWANCE', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AndrIsoperatorQuery>(CodegenGeneratedAdoCw20AndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_ANDR(variables: ICodegenGeneratedAdoCw20AndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20AndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20AndrQuery>(CodegenGeneratedAdoCw20AndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_BALANCE(variables: ICodegenGeneratedAdoCw20BalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20BalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20BalanceQuery>(CodegenGeneratedAdoCw20BalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_BALANCE', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO(variables: ICodegenGeneratedAdoCw20DownloadlogoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20DownloadlogoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20DownloadlogoQuery>(CodegenGeneratedAdoCw20DownloadlogoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_DOWNLOADLOGO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO(variables: ICodegenGeneratedAdoCw20MarketinginfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20MarketinginfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20MarketinginfoQuery>(CodegenGeneratedAdoCw20MarketinginfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_MARKETINGINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_MINTER(variables: ICodegenGeneratedAdoCw20MinterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20MinterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20MinterQuery>(CodegenGeneratedAdoCw20MinterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_MINTER', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_TOKENINFO(variables: ICodegenGeneratedAdoCw20TokeninfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20TokeninfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20TokeninfoQuery>(CodegenGeneratedAdoCw20TokeninfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_TOKENINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20(variables: ICodegenGeneratedAdoCw20QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20Query>(CodegenGeneratedAdoCw20Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery>(CodegenGeneratedAdoCw20ExchangeAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR(variables: ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20ExchangeAndrQuery>(CodegenGeneratedAdoCw20ExchangeAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE(variables: ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeSaleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20ExchangeSaleQuery>(CodegenGeneratedAdoCw20ExchangeSaleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALE', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS(variables: ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery>(CodegenGeneratedAdoCw20ExchangeSaleassetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_EXCHANGE(variables: ICodegenGeneratedAdoCw20ExchangeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20ExchangeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20ExchangeQuery>(CodegenGeneratedAdoCw20ExchangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_EXCHANGE', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery>(CodegenGeneratedAdoCw20StakingAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR(variables: ICodegenGeneratedAdoCw20StakingAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingAndrQuery>(CodegenGeneratedAdoCw20StakingAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN(variables: ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery>(CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG_STAKING_TOKEN', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG(variables: ICodegenGeneratedAdoCw20StakingConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingConfigQuery>(CodegenGeneratedAdoCw20StakingConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER(variables: ICodegenGeneratedAdoCw20StakingStakerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStakerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingStakerQuery>(CodegenGeneratedAdoCw20StakingStakerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STAKER', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS(variables: ICodegenGeneratedAdoCw20StakingStakersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStakersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingStakersQuery>(CodegenGeneratedAdoCw20StakingStakersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STAKERS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING_STATE(variables: ICodegenGeneratedAdoCw20StakingStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingStateQuery>(CodegenGeneratedAdoCw20StakingStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING_STATE', 'query');
    },
    CODEGEN_GENERATED_ADO_CW20_STAKING(variables: ICodegenGeneratedAdoCw20StakingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw20StakingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw20StakingQuery>(CodegenGeneratedAdoCw20StakingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW20_STAKING', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery>(CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS_APPROVALS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery>(CodegenGeneratedAdoCw721AllnftinfoAccessDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_ACCESS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO_EXTENSION', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery>(CodegenGeneratedAdoCw721AllnftinfoInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO_INFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO(variables: ICodegenGeneratedAdoCw721AllnftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AllnftinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AllnftinfoQuery>(CodegenGeneratedAdoCw721AllnftinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS(variables: ICodegenGeneratedAdoCw721AlloperatorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AlloperatorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AlloperatorsQuery>(CodegenGeneratedAdoCw721AlloperatorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ALLTOKENS(variables: ICodegenGeneratedAdoCw721AlltokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AlltokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AlltokensQuery>(CodegenGeneratedAdoCw721AlltokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ALLTOKENS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AndrIsoperatorQuery>(CodegenGeneratedAdoCw721AndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ANDR(variables: ICodegenGeneratedAdoCw721AndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721AndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721AndrQuery>(CodegenGeneratedAdoCw721AndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_APPROVAL(variables: ICodegenGeneratedAdoCw721ApprovalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ApprovalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721ApprovalQuery>(CodegenGeneratedAdoCw721ApprovalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_APPROVAL', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_APPROVALS(variables: ICodegenGeneratedAdoCw721ApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ApprovalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721ApprovalsQuery>(CodegenGeneratedAdoCw721ApprovalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_APPROVALS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO(variables: ICodegenGeneratedAdoCw721ContractinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721ContractinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721ContractinfoQuery>(CodegenGeneratedAdoCw721ContractinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_CONTRACTINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_ISARCHIVED(variables: ICodegenGeneratedAdoCw721IsarchivedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721IsarchivedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721IsarchivedQuery>(CodegenGeneratedAdoCw721IsarchivedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_ISARCHIVED', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery>(CodegenGeneratedAdoCw721NftinfoExtensionAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION(variables: ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoExtensionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721NftinfoExtensionQuery>(CodegenGeneratedAdoCw721NftinfoExtensionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO_EXTENSION', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_NFTINFO(variables: ICodegenGeneratedAdoCw721NftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NftinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721NftinfoQuery>(CodegenGeneratedAdoCw721NftinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_NFTINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_NUMOWNERS(variables: ICodegenGeneratedAdoCw721NumownersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721NumownersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721NumownersQuery>(CodegenGeneratedAdoCw721NumownersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_NUMOWNERS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS(variables: ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery>(CodegenGeneratedAdoCw721OwnerofApprovalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_OWNEROF_APPROVALS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_OWNEROF(variables: ICodegenGeneratedAdoCw721OwnerofQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721OwnerofQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721OwnerofQuery>(CodegenGeneratedAdoCw721OwnerofDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_OWNEROF', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION_ATTRIBUTES(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery>(CodegenGeneratedAdoCw721SearchtokensExtensionAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery>(CodegenGeneratedAdoCw721SearchtokensExtensionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS_EXTENSION', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS(variables: ICodegenGeneratedAdoCw721SearchtokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721SearchtokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721SearchtokensQuery>(CodegenGeneratedAdoCw721SearchtokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_SEARCHTOKENS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_TOKENS(variables: ICodegenGeneratedAdoCw721TokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721TokensQuery>(CodegenGeneratedAdoCw721TokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_TOKENS', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT_RAW', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT_AMOUNT', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery>(CodegenGeneratedAdoCw721TransferagreementAgreementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT_AGREEMENT', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT(variables: ICodegenGeneratedAdoCw721TransferagreementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721TransferagreementQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721TransferagreementQuery>(CodegenGeneratedAdoCw721TransferagreementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT', 'query');
    },
    CODEGEN_GENERATED_ADO_CW721(variables: ICodegenGeneratedAdoCw721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoCw721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoCw721Query>(CodegenGeneratedAdoCw721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_CW721', 'query');
    },
    CODEGEN_GENERATED_ADO_FACTORY_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery>(CodegenGeneratedAdoFactoryAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_FACTORY_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_FACTORY_ANDR(variables: ICodegenGeneratedAdoFactoryAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoFactoryAndrQuery>(CodegenGeneratedAdoFactoryAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_FACTORY_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_FACTORY_CODE_ID(variables: ICodegenGeneratedAdoFactoryCodeIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryCodeIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoFactoryCodeIdQuery>(CodegenGeneratedAdoFactoryCodeIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_FACTORY_CODE_ID', 'query');
    },
    CODEGEN_GENERATED_ADO_FACTORY(variables: ICodegenGeneratedAdoFactoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoFactoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoFactoryQuery>(CodegenGeneratedAdoFactoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_FACTORY', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery>(CodegenGeneratedAdoLockdropAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_ANDR(variables: ICodegenGeneratedAdoLockdropAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropAndrQuery>(CodegenGeneratedAdoLockdropAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG(variables: ICodegenGeneratedAdoLockdropConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropConfigQuery>(CodegenGeneratedAdoLockdropConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_STATE(variables: ICodegenGeneratedAdoLockdropStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropStateQuery>(CodegenGeneratedAdoLockdropStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_STATE', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO(variables: ICodegenGeneratedAdoLockdropUserinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropUserinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropUserinfoQuery>(CodegenGeneratedAdoLockdropUserinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_USERINFO', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED(variables: ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery>(CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP_WITHDRAWALPERCENTALLOWED', 'query');
    },
    CODEGEN_GENERATED_ADO_LOCKDROP(variables: ICodegenGeneratedAdoLockdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoLockdropQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoLockdropQuery>(CodegenGeneratedAdoLockdropDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_LOCKDROP', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery>(CodegenGeneratedAdoMarketplaceAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR(variables: ICodegenGeneratedAdoMarketplaceAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceAndrQuery>(CodegenGeneratedAdoMarketplaceAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE(variables: ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery>(CodegenGeneratedAdoMarketplaceLatestsalestateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_LATESTSALESTATE', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS(variables: ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSaleidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceSaleidsQuery>(CodegenGeneratedAdoMarketplaceSaleidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALEIDS', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS(variables: ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery>(CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALEINFOSFORADDRESS', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE(variables: ICodegenGeneratedAdoMarketplaceSalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceSalestateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceSalestateQuery>(CodegenGeneratedAdoMarketplaceSalestateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE_SALESTATE', 'query');
    },
    CODEGEN_GENERATED_ADO_MARKETPLACE(variables: ICodegenGeneratedAdoMarketplaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMarketplaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMarketplaceQuery>(CodegenGeneratedAdoMarketplaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MARKETPLACE', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery>(CodegenGeneratedAdoMerkleAirdropAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR(variables: ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropAndrQuery>(CodegenGeneratedAdoMerkleAirdropAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG(variables: ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropConfigQuery>(CodegenGeneratedAdoMerkleAirdropConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED(variables: ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery>(CodegenGeneratedAdoMerkleAirdropIsclaimedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_ISCLAIMED', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT(variables: ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery>(CodegenGeneratedAdoMerkleAirdropMerklerootDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_MERKLEROOT', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED(variables: ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery>(CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED', 'query');
    },
    CODEGEN_GENERATED_ADO_MERKLE_AIRDROP(variables: ICodegenGeneratedAdoMerkleAirdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoMerkleAirdropQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoMerkleAirdropQuery>(CodegenGeneratedAdoMerkleAirdropDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_MERKLE_AIRDROP', 'query');
    },
    CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery>(CodegenGeneratedAdoPrimitiveAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR(variables: ICodegenGeneratedAdoPrimitiveAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoPrimitiveAndrQuery>(CodegenGeneratedAdoPrimitiveAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE(variables: ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveGetvalueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoPrimitiveGetvalueQuery>(CodegenGeneratedAdoPrimitiveGetvalueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE', 'query');
    },
    CODEGEN_GENERATED_ADO_PRIMITIVE(variables: ICodegenGeneratedAdoPrimitiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoPrimitiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoPrimitiveQuery>(CodegenGeneratedAdoPrimitiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_PRIMITIVE', 'query');
    },
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery>(CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ACCOUNTDETAILS', 'query');
    },
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery>(CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS_COINALLOWANCEDETAILS', 'query');
    },
    CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery>(CodegenGeneratedAdoRateLimitingWithdrawalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATE_LIMITING_WITHDRAWALS', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesAndrIsoperatorQuery>(CodegenGeneratedAdoRatesAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_ANDR(variables: ICodegenGeneratedAdoRatesAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesAndrQuery>(CodegenGeneratedAdoRatesAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL(variables: ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery>(CodegenGeneratedAdoRatesPaymentsRateExternalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_EXTERNAL', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT(variables: ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery>(CodegenGeneratedAdoRatesPaymentsRateFlatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_FLAT', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT(variables: ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery>(CodegenGeneratedAdoRatesPaymentsRatePercentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE_PERCENT', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE(variables: ICodegenGeneratedAdoRatesPaymentsRateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsRateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesPaymentsRateQuery>(CodegenGeneratedAdoRatesPaymentsRateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS_RATE', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES_PAYMENTS(variables: ICodegenGeneratedAdoRatesPaymentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesPaymentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesPaymentsQuery>(CodegenGeneratedAdoRatesPaymentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES_PAYMENTS', 'query');
    },
    CODEGEN_GENERATED_ADO_RATES(variables: ICodegenGeneratedAdoRatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoRatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoRatesQuery>(CodegenGeneratedAdoRatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_RATES', 'query');
    },
    CODEGEN_GENERATED_ADO_SPLITTER_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery>(CodegenGeneratedAdoSplitterAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_SPLITTER_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_SPLITTER_ANDR(variables: ICodegenGeneratedAdoSplitterAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoSplitterAndrQuery>(CodegenGeneratedAdoSplitterAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_SPLITTER_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS(variables: ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterConfigRecipientsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoSplitterConfigRecipientsQuery>(CodegenGeneratedAdoSplitterConfigRecipientsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_SPLITTER_CONFIG_RECIPIENTS', 'query');
    },
    CODEGEN_GENERATED_ADO_SPLITTER_CONFIG(variables: ICodegenGeneratedAdoSplitterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoSplitterConfigQuery>(CodegenGeneratedAdoSplitterConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_SPLITTER_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_SPLITTER(variables: ICodegenGeneratedAdoSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoSplitterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoSplitterQuery>(CodegenGeneratedAdoSplitterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_SPLITTER', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery>(CodegenGeneratedAdoTimelockAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_ANDR(variables: ICodegenGeneratedAdoTimelockAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockAndrQuery>(CodegenGeneratedAdoTimelockAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery>(CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_COINS', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery>(CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION_MINIUMFUNDS', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery>(CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS_CONDITION', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsQuery>(CodegenGeneratedAdoTimelockGetlockedfundsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_COINS', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION_MINIUMFUNDS', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT_CONDITION', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT', 'query');
    },
    CODEGEN_GENERATED_ADO_TIMELOCK(variables: ICodegenGeneratedAdoTimelockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoTimelockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoTimelockQuery>(CodegenGeneratedAdoTimelockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_TIMELOCK', 'query');
    },
    CODEGEN_GENERATED_ADO_VAULT_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVaultAndrIsoperatorQuery>(CodegenGeneratedAdoVaultAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VAULT_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_VAULT_ANDR(variables: ICodegenGeneratedAdoVaultAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVaultAndrQuery>(CodegenGeneratedAdoVaultAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VAULT_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_VAULT_BALANCE(variables: ICodegenGeneratedAdoVaultBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVaultBalanceQuery>(CodegenGeneratedAdoVaultBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VAULT_BALANCE', 'query');
    },
    CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS(variables: ICodegenGeneratedAdoVaultStrategyaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultStrategyaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVaultStrategyaddressQuery>(CodegenGeneratedAdoVaultStrategyaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS', 'query');
    },
    CODEGEN_GENERATED_ADO_VAULT(variables: ICodegenGeneratedAdoVaultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVaultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVaultQuery>(CodegenGeneratedAdoVaultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VAULT', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingAndrIsoperatorQuery>(CodegenGeneratedAdoVestingAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING_ANDR(variables: ICodegenGeneratedAdoVestingAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingAndrQuery>(CodegenGeneratedAdoVestingAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING_BATCH(variables: ICodegenGeneratedAdoVestingBatchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingBatchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingBatchQuery>(CodegenGeneratedAdoVestingBatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING_BATCH', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING_BATCHES(variables: ICodegenGeneratedAdoVestingBatchesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingBatchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingBatchesQuery>(CodegenGeneratedAdoVestingBatchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING_BATCHES', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING_CONFIG(variables: ICodegenGeneratedAdoVestingConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingConfigQuery>(CodegenGeneratedAdoVestingConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_VESTING(variables: ICodegenGeneratedAdoVestingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoVestingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoVestingQuery>(CodegenGeneratedAdoVestingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_VESTING', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR_ISOPERATOR(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery>(CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR_ISOPERATOR', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery>(CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_ANDR', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery>(CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG_RECIPIENTS', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery>(CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_CONFIG', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT(variables: ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery>(CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT', 'query');
    },
    CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER(variables: ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoWeightedDistributionSplitterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoWeightedDistributionSplitterQuery>(CodegenGeneratedAdoWeightedDistributionSplitterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO_WEIGHTED_DISTRIBUTION_SPLITTER', 'query');
    },
    CODEGEN_GENERATED_ADO(variables?: ICodegenGeneratedAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdoQuery>(CodegenGeneratedAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADO', 'query');
    },
    CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE(variables: ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageSchemasReceiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdopPackageSchemasReceiveQuery>(CodegenGeneratedAdopPackageSchemasReceiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS_RECEIVE', 'query');
    },
    CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS(variables: ICodegenGeneratedAdopPackageSchemasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageSchemasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdopPackageSchemasQuery>(CodegenGeneratedAdopPackageSchemasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADOP_PACKAGE_SCHEMAS', 'query');
    },
    CODEGEN_GENERATED_ADOP_PACKAGE(variables: ICodegenGeneratedAdopPackageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopPackageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdopPackageQuery>(CodegenGeneratedAdopPackageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADOP_PACKAGE', 'query');
    },
    CODEGEN_GENERATED_ADOP(variables?: ICodegenGeneratedAdopQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAdopQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAdopQuery>(CodegenGeneratedAdopDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ADOP', 'query');
    },
    CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS(variables: ICodegenGeneratedAccountsAssetsComponentsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsAssetsComponentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAccountsAssetsComponentsQuery>(CodegenGeneratedAccountsAssetsComponentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ACCOUNTS_ASSETS_COMPONENTS', 'query');
    },
    CODEGEN_GENERATED_ACCOUNTS_ASSETS(variables: ICodegenGeneratedAccountsAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsAssetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAccountsAssetsQuery>(CodegenGeneratedAccountsAssetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ACCOUNTS_ASSETS', 'query');
    },
    CODEGEN_GENERATED_ACCOUNTS(variables?: ICodegenGeneratedAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedAccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedAccountsQuery>(CodegenGeneratedAccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ACCOUNTS', 'query');
    },
    CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS(variables?: ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery>(CodegenGeneratedChainconfigsAllconfigsIconurlsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS_ICONURLS', 'query');
    },
    CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS(variables?: ICodegenGeneratedChainconfigsAllconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsAllconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainconfigsAllconfigsQuery>(CodegenGeneratedChainconfigsAllconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINCONFIGS_ALLCONFIGS', 'query');
    },
    CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS(variables: ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsConfigIconurlsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainconfigsConfigIconurlsQuery>(CodegenGeneratedChainconfigsConfigIconurlsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINCONFIGS_CONFIG_ICONURLS', 'query');
    },
    CODEGEN_GENERATED_CHAINCONFIGS_CONFIG(variables: ICodegenGeneratedChainconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainconfigsConfigQuery>(CodegenGeneratedChainconfigsConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINCONFIGS_CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINCONFIGS(variables?: ICodegenGeneratedChainconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainconfigsQuery>(CodegenGeneratedChainconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINCONFIGS', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery>(CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BECH32CONFIG', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query>(CodegenGeneratedKeplrconfigsAllconfigsBip44Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_BIP44', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES(variables?: ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery>(CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_CURRENCIES', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES(variables?: ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery>(CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_FEECURRENCIES', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP(variables?: ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery>(CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_GASPRICESTEP', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY(variables?: ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery>(CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS_STAKECURRENCY', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS(variables?: ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsAllconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsAllconfigsQuery>(CodegenGeneratedKeplrconfigsAllconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_ALLCONFIGS', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG(variables: ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery>(CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BECH32CONFIG', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44(variables: ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigBip44Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigBip44Query>(CodegenGeneratedKeplrconfigsConfigBip44Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_BIP44', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES(variables: ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery>(CodegenGeneratedKeplrconfigsConfigCurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_CURRENCIES', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES(variables: ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery>(CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_FEECURRENCIES', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP(variables: ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery>(CodegenGeneratedKeplrconfigsConfigGaspricestepDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_GASPRICESTEP', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY(variables: ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery>(CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG_STAKECURRENCY', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG(variables: ICodegenGeneratedKeplrconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsConfigQuery>(CodegenGeneratedKeplrconfigsConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS_CONFIG', 'query');
    },
    CODEGEN_GENERATED_KEPLRCONFIGS(variables?: ICodegenGeneratedKeplrconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedKeplrconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedKeplrconfigsQuery>(CodegenGeneratedKeplrconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_KEPLRCONFIGS', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByaccountEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountEventsAttributesQuery>(CodegenGeneratedTxByaccountEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS(variables: ICodegenGeneratedTxByaccountEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountEventsQuery>(CodegenGeneratedTxByaccountEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery>(CodegenGeneratedTxByaccountTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS(variables: ICodegenGeneratedTxByaccountTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountTxlogEventsQuery>(CodegenGeneratedTxByaccountTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG(variables: ICodegenGeneratedTxByaccountTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountTxlogQuery>(CodegenGeneratedTxByaccountTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYACCOUNT(variables: ICodegenGeneratedTxByaccountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByaccountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByaccountQuery>(CodegenGeneratedTxByaccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYACCOUNT', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBycontractEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractEventsAttributesQuery>(CodegenGeneratedTxBycontractEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS(variables: ICodegenGeneratedTxBycontractEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractEventsQuery>(CodegenGeneratedTxBycontractEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery>(CodegenGeneratedTxBycontractTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS(variables: ICodegenGeneratedTxBycontractTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractTxlogEventsQuery>(CodegenGeneratedTxBycontractTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG(variables: ICodegenGeneratedTxBycontractTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractTxlogQuery>(CodegenGeneratedTxBycontractTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYCONTRACT(variables: ICodegenGeneratedTxBycontractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBycontractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBycontractQuery>(CodegenGeneratedTxBycontractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYCONTRACT', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByhashEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashEventsAttributesQuery>(CodegenGeneratedTxByhashEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH_EVENTS(variables: ICodegenGeneratedTxByhashEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashEventsQuery>(CodegenGeneratedTxByhashEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery>(CodegenGeneratedTxByhashTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS(variables: ICodegenGeneratedTxByhashTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashTxlogEventsQuery>(CodegenGeneratedTxByhashTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH_TXLOG(variables: ICodegenGeneratedTxByhashTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashTxlogQuery>(CodegenGeneratedTxByhashTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYHASH(variables: ICodegenGeneratedTxByhashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByhashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByhashQuery>(CodegenGeneratedTxByhashDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHASH', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByheightEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightEventsAttributesQuery>(CodegenGeneratedTxByheightEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS(variables: ICodegenGeneratedTxByheightEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightEventsQuery>(CodegenGeneratedTxByheightEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery>(CodegenGeneratedTxByheightTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS(variables: ICodegenGeneratedTxByheightTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightTxlogEventsQuery>(CodegenGeneratedTxByheightTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG(variables: ICodegenGeneratedTxByheightTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightTxlogQuery>(CodegenGeneratedTxByheightTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYHEIGHT(variables: ICodegenGeneratedTxByheightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByheightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByheightQuery>(CodegenGeneratedTxByheightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYHEIGHT', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByownerEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerEventsAttributesQuery>(CodegenGeneratedTxByownerEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER_EVENTS(variables: ICodegenGeneratedTxByownerEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerEventsQuery>(CodegenGeneratedTxByownerEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery>(CodegenGeneratedTxByownerTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS(variables: ICodegenGeneratedTxByownerTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerTxlogEventsQuery>(CodegenGeneratedTxByownerTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER_TXLOG(variables: ICodegenGeneratedTxByownerTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerTxlogQuery>(CodegenGeneratedTxByownerTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYOWNER(variables: ICodegenGeneratedTxByownerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxByownerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxByownerQuery>(CodegenGeneratedTxByownerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYOWNER', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBytagEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagEventsAttributesQuery>(CodegenGeneratedTxBytagEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG_EVENTS(variables: ICodegenGeneratedTxBytagEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagEventsQuery>(CodegenGeneratedTxBytagEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES(variables: ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery>(CodegenGeneratedTxBytagTxlogEventsAttributesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS_ATTRIBUTES', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS(variables: ICodegenGeneratedTxBytagTxlogEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagTxlogEventsQuery>(CodegenGeneratedTxBytagTxlogEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG_EVENTS', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG_TXLOG(variables: ICodegenGeneratedTxBytagTxlogQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagTxlogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagTxlogQuery>(CodegenGeneratedTxBytagTxlogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG_TXLOG', 'query');
    },
    CODEGEN_GENERATED_TX_BYTAG(variables: ICodegenGeneratedTxBytagQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxBytagQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxBytagQuery>(CodegenGeneratedTxBytagDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX_BYTAG', 'query');
    },
    CODEGEN_GENERATED_TX(variables: ICodegenGeneratedTxQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTxQuery>(CodegenGeneratedTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TX', 'query');
    },
    TX_BY_ACCOUNT(variables: ITxByAccountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByAccountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByAccountQuery>(TxByAccountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_ACCOUNT', 'query');
    },
    TX_BY_CONTRACT(variables: ITxByContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByContractQuery>(TxByContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_CONTRACT', 'query');
    },
    TX_BY_HEIGHT(variables: ITxByHeightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByHeightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByHeightQuery>(TxByHeightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_HEIGHT', 'query');
    },
    TX_BY_HASH(variables: ITxByHashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByHashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByHashQuery>(TxByHashDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_HASH', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;