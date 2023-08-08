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

/**
 * __useAddressListContainsAddressQuery__
 *
 * To run a query within a React component, call `useAddressListContainsAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressListContainsAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressListContainsAddressQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddressListContainsAddressQuery(baseOptions: Apollo.QueryHookOptions<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>(AddressListContainsAddressDocument, options);
      }
export function useAddressListContainsAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>(AddressListContainsAddressDocument, options);
        }
export type AddressListContainsAddressQueryHookResult = ReturnType<typeof useAddressListContainsAddressQuery>;
export type AddressListContainsAddressLazyQueryHookResult = ReturnType<typeof useAddressListContainsAddressLazyQuery>;
export type AddressListContainsAddressQueryResult = Apollo.QueryResult<IAddressListContainsAddressQuery, IAddressListContainsAddressQueryVariables>;
export function refetchAddressListContainsAddressQuery(variables: IAddressListContainsAddressQueryVariables) {
      return { query: AddressListContainsAddressDocument, variables: variables }
    }
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

/**
 * __useAppConfigAndComponentsQuery__
 *
 * To run a query within a React component, call `useAppConfigAndComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppConfigAndComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppConfigAndComponentsQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useAppConfigAndComponentsQuery(baseOptions: Apollo.QueryHookOptions<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>(AppConfigAndComponentsDocument, options);
      }
export function useAppConfigAndComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>(AppConfigAndComponentsDocument, options);
        }
export type AppConfigAndComponentsQueryHookResult = ReturnType<typeof useAppConfigAndComponentsQuery>;
export type AppConfigAndComponentsLazyQueryHookResult = ReturnType<typeof useAppConfigAndComponentsLazyQuery>;
export type AppConfigAndComponentsQueryResult = Apollo.QueryResult<IAppConfigAndComponentsQuery, IAppConfigAndComponentsQueryVariables>;
export function refetchAppConfigAndComponentsQuery(variables: IAppConfigAndComponentsQueryVariables) {
      return { query: AppConfigAndComponentsDocument, variables: variables }
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
export const CrowdfundAvailableTokensDocument = /*#__PURE__*/ gql`
    query CROWDFUND_AVAILABLE_TOKENS($contractAddress: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      availableTokens
    }
  }
}
    `;

/**
 * __useCrowdfundAvailableTokensQuery__
 *
 * To run a query within a React component, call `useCrowdfundAvailableTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundAvailableTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundAvailableTokensQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCrowdfundAvailableTokensQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>(CrowdfundAvailableTokensDocument, options);
      }
export function useCrowdfundAvailableTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>(CrowdfundAvailableTokensDocument, options);
        }
export type CrowdfundAvailableTokensQueryHookResult = ReturnType<typeof useCrowdfundAvailableTokensQuery>;
export type CrowdfundAvailableTokensLazyQueryHookResult = ReturnType<typeof useCrowdfundAvailableTokensLazyQuery>;
export type CrowdfundAvailableTokensQueryResult = Apollo.QueryResult<ICrowdfundAvailableTokensQuery, ICrowdfundAvailableTokensQueryVariables>;
export function refetchCrowdfundAvailableTokensQuery(variables: ICrowdfundAvailableTokensQueryVariables) {
      return { query: CrowdfundAvailableTokensDocument, variables: variables }
    }
export const CrowdfundIsTokenAvailableDocument = /*#__PURE__*/ gql`
    query CROWDFUND_IS_TOKEN_AVAILABLE($contractAddress: String!, $tokenId: String!) {
  ADO {
    crowdfund(address: $contractAddress) {
      isTokenAvailable(tokenId: $tokenId)
    }
  }
}
    `;

/**
 * __useCrowdfundIsTokenAvailableQuery__
 *
 * To run a query within a React component, call `useCrowdfundIsTokenAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundIsTokenAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundIsTokenAvailableQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *      tokenId: // value for 'tokenId'
 *   },
 * });
 */
export function useCrowdfundIsTokenAvailableQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>(CrowdfundIsTokenAvailableDocument, options);
      }
export function useCrowdfundIsTokenAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>(CrowdfundIsTokenAvailableDocument, options);
        }
export type CrowdfundIsTokenAvailableQueryHookResult = ReturnType<typeof useCrowdfundIsTokenAvailableQuery>;
export type CrowdfundIsTokenAvailableLazyQueryHookResult = ReturnType<typeof useCrowdfundIsTokenAvailableLazyQuery>;
export type CrowdfundIsTokenAvailableQueryResult = Apollo.QueryResult<ICrowdfundIsTokenAvailableQuery, ICrowdfundIsTokenAvailableQueryVariables>;
export function refetchCrowdfundIsTokenAvailableQuery(variables: ICrowdfundIsTokenAvailableQueryVariables) {
      return { query: CrowdfundIsTokenAvailableDocument, variables: variables }
    }
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

/**
 * __useCrowdfundConfigQuery__
 *
 * To run a query within a React component, call `useCrowdfundConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundConfigQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCrowdfundConfigQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>(CrowdfundConfigDocument, options);
      }
export function useCrowdfundConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>(CrowdfundConfigDocument, options);
        }
export type CrowdfundConfigQueryHookResult = ReturnType<typeof useCrowdfundConfigQuery>;
export type CrowdfundConfigLazyQueryHookResult = ReturnType<typeof useCrowdfundConfigLazyQuery>;
export type CrowdfundConfigQueryResult = Apollo.QueryResult<ICrowdfundConfigQuery, ICrowdfundConfigQueryVariables>;
export function refetchCrowdfundConfigQuery(variables: ICrowdfundConfigQueryVariables) {
      return { query: CrowdfundConfigDocument, variables: variables }
    }
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

/**
 * __useCrowdfundStateQuery__
 *
 * To run a query within a React component, call `useCrowdfundStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCrowdfundStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCrowdfundStateQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCrowdfundStateQuery(baseOptions: Apollo.QueryHookOptions<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>(CrowdfundStateDocument, options);
      }
export function useCrowdfundStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>(CrowdfundStateDocument, options);
        }
export type CrowdfundStateQueryHookResult = ReturnType<typeof useCrowdfundStateQuery>;
export type CrowdfundStateLazyQueryHookResult = ReturnType<typeof useCrowdfundStateLazyQuery>;
export type CrowdfundStateQueryResult = Apollo.QueryResult<ICrowdfundStateQuery, ICrowdfundStateQueryVariables>;
export function refetchCrowdfundStateQuery(variables: ICrowdfundStateQueryVariables) {
      return { query: CrowdfundStateDocument, variables: variables }
    }
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

/**
 * __useCw20TokenInfoQuery__
 *
 * To run a query within a React component, call `useCw20TokenInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCw20TokenInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw20TokenInfoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCw20TokenInfoQuery(baseOptions: Apollo.QueryHookOptions<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>(Cw20TokenInfoDocument, options);
      }
export function useCw20TokenInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>(Cw20TokenInfoDocument, options);
        }
export type Cw20TokenInfoQueryHookResult = ReturnType<typeof useCw20TokenInfoQuery>;
export type Cw20TokenInfoLazyQueryHookResult = ReturnType<typeof useCw20TokenInfoLazyQuery>;
export type Cw20TokenInfoQueryResult = Apollo.QueryResult<ICw20TokenInfoQuery, ICw20TokenInfoQueryVariables>;
export function refetchCw20TokenInfoQuery(variables: ICw20TokenInfoQueryVariables) {
      return { query: Cw20TokenInfoDocument, variables: variables }
    }
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

/**
 * __useCw20Query__
 *
 * To run a query within a React component, call `useCw20Query` and pass it any options that fit your needs.
 * When your component renders, `useCw20Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw20Query({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCw20Query(baseOptions: Apollo.QueryHookOptions<ICw20Query, ICw20QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICw20Query, ICw20QueryVariables>(Cw20Document, options);
      }
export function useCw20LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw20Query, ICw20QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICw20Query, ICw20QueryVariables>(Cw20Document, options);
        }
export type Cw20QueryHookResult = ReturnType<typeof useCw20Query>;
export type Cw20LazyQueryHookResult = ReturnType<typeof useCw20LazyQuery>;
export type Cw20QueryResult = Apollo.QueryResult<ICw20Query, ICw20QueryVariables>;
export function refetchCw20Query(variables: ICw20QueryVariables) {
      return { query: Cw20Document, variables: variables }
    }
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

/**
 * __useCw721InfoQuery__
 *
 * To run a query within a React component, call `useCw721InfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCw721InfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCw721InfoQuery({
 *   variables: {
 *      contractAddress: // value for 'contractAddress'
 *   },
 * });
 */
export function useCw721InfoQuery(baseOptions: Apollo.QueryHookOptions<ICw721InfoQuery, ICw721InfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICw721InfoQuery, ICw721InfoQueryVariables>(Cw721InfoDocument, options);
      }
export function useCw721InfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICw721InfoQuery, ICw721InfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICw721InfoQuery, ICw721InfoQueryVariables>(Cw721InfoDocument, options);
        }
export type Cw721InfoQueryHookResult = ReturnType<typeof useCw721InfoQuery>;
export type Cw721InfoLazyQueryHookResult = ReturnType<typeof useCw721InfoLazyQuery>;
export type Cw721InfoQueryResult = Apollo.QueryResult<ICw721InfoQuery, ICw721InfoQueryVariables>;
export function refetchCw721InfoQuery(variables: ICw721InfoQueryVariables) {
      return { query: Cw721InfoDocument, variables: variables }
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

/**
 * __useCodegenGeneratedAdoAddressListAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListAndrIsoperatorQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *      ADO_address_list_address_list_andr_andr_isOperator_address: // value for 'ADO_address_list_address_list_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAddressListAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery, ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery, ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAddressListAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoAddressListAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery, ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery, ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAddressListAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoAddressListAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrIsoperatorQuery>;
export type CodegenGeneratedAdoAddressListAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoAddressListAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListAndrIsoperatorQuery, ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoAddressListAndrIsoperatorQuery(variables: ICodegenGeneratedAdoAddressListAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoAddressListAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAddressListAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListAndrQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAddressListAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>(CodegenGeneratedAdoAddressListAndrDocument, options);
      }
export function useCodegenGeneratedAdoAddressListAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>(CodegenGeneratedAdoAddressListAndrDocument, options);
        }
export type CodegenGeneratedAdoAddressListAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrQuery>;
export type CodegenGeneratedAdoAddressListAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListAndrLazyQuery>;
export type CodegenGeneratedAdoAddressListAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListAndrQuery, ICodegenGeneratedAdoAddressListAndrQueryVariables>;
export function refetchCodegenGeneratedAdoAddressListAndrQuery(variables: ICodegenGeneratedAdoAddressListAndrQueryVariables) {
      return { query: CodegenGeneratedAdoAddressListAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAddressListIncludesaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListIncludesaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListIncludesaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListIncludesaddressQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *      ADO_address_list_address_list_includesAddress_address: // value for 'ADO_address_list_address_list_includesAddress_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAddressListIncludesaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>(CodegenGeneratedAdoAddressListIncludesaddressDocument, options);
      }
export function useCodegenGeneratedAdoAddressListIncludesaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>(CodegenGeneratedAdoAddressListIncludesaddressDocument, options);
        }
export type CodegenGeneratedAdoAddressListIncludesaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListIncludesaddressQuery>;
export type CodegenGeneratedAdoAddressListIncludesaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListIncludesaddressLazyQuery>;
export type CodegenGeneratedAdoAddressListIncludesaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListIncludesaddressQuery, ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables>;
export function refetchCodegenGeneratedAdoAddressListIncludesaddressQuery(variables: ICodegenGeneratedAdoAddressListIncludesaddressQueryVariables) {
      return { query: CodegenGeneratedAdoAddressListIncludesaddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAddressListQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAddressListQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAddressListQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>(CodegenGeneratedAdoAddressListDocument, options);
      }
export function useCodegenGeneratedAdoAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>(CodegenGeneratedAdoAddressListDocument, options);
        }
export type CodegenGeneratedAdoAddressListQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListQuery>;
export type CodegenGeneratedAdoAddressListLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAddressListLazyQuery>;
export type CodegenGeneratedAdoAddressListQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAddressListQuery, ICodegenGeneratedAdoAddressListQueryVariables>;
export function refetchCodegenGeneratedAdoAddressListQuery(variables: ICodegenGeneratedAdoAddressListQueryVariables) {
      return { query: CodegenGeneratedAdoAddressListDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAdoAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdoAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdoAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdoAndrIsoperatorQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *      ADO_ado_ado_andr_andr_isOperator_address: // value for 'ADO_ado_ado_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAdoAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdoAndrIsoperatorQuery, ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAdoAndrIsoperatorQuery, ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAdoAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoAdoAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdoAndrIsoperatorQuery, ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAdoAndrIsoperatorQuery, ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAdoAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoAdoAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrIsoperatorQuery>;
export type CodegenGeneratedAdoAdoAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoAdoAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdoAndrIsoperatorQuery, ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoAdoAndrIsoperatorQuery(variables: ICodegenGeneratedAdoAdoAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoAdoAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAdoAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdoAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdoAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdoAndrQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAdoAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>(CodegenGeneratedAdoAdoAndrDocument, options);
      }
export function useCodegenGeneratedAdoAdoAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>(CodegenGeneratedAdoAdoAndrDocument, options);
        }
export type CodegenGeneratedAdoAdoAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrQuery>;
export type CodegenGeneratedAdoAdoAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoAndrLazyQuery>;
export type CodegenGeneratedAdoAdoAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdoAndrQuery, ICodegenGeneratedAdoAdoAndrQueryVariables>;
export function refetchCodegenGeneratedAdoAdoAndrQuery(variables: ICodegenGeneratedAdoAdoAndrQueryVariables) {
      return { query: CodegenGeneratedAdoAdoAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAdoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAdoQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAdoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>(CodegenGeneratedAdoAdoDocument, options);
      }
export function useCodegenGeneratedAdoAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>(CodegenGeneratedAdoAdoDocument, options);
        }
export type CodegenGeneratedAdoAdoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoQuery>;
export type CodegenGeneratedAdoAdoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAdoLazyQuery>;
export type CodegenGeneratedAdoAdoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAdoQuery, ICodegenGeneratedAdoAdoQueryVariables>;
export function refetchCodegenGeneratedAdoAdoQuery(variables: ICodegenGeneratedAdoAdoQueryVariables) {
      return { query: CodegenGeneratedAdoAdoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppAddressesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppAddressesQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppAddressesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>(CodegenGeneratedAdoAppAddressesDocument, options);
      }
export function useCodegenGeneratedAdoAppAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>(CodegenGeneratedAdoAppAddressesDocument, options);
        }
export type CodegenGeneratedAdoAppAddressesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAddressesQuery>;
export type CodegenGeneratedAdoAppAddressesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAddressesLazyQuery>;
export type CodegenGeneratedAdoAppAddressesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppAddressesQuery, ICodegenGeneratedAdoAppAddressesQueryVariables>;
export function refetchCodegenGeneratedAdoAppAddressesQuery(variables: ICodegenGeneratedAdoAppAddressesQueryVariables) {
      return { query: CodegenGeneratedAdoAppAddressesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppAndrIsoperatorQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *      ADO_app_app_andr_andr_isOperator_address: // value for 'ADO_app_app_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppAndrIsoperatorQuery, ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppAndrIsoperatorQuery, ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAppAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoAppAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppAndrIsoperatorQuery, ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppAndrIsoperatorQuery, ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAppAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoAppAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrIsoperatorQuery>;
export type CodegenGeneratedAdoAppAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoAppAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppAndrIsoperatorQuery, ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoAppAndrIsoperatorQuery(variables: ICodegenGeneratedAdoAppAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoAppAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppAndrQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>(CodegenGeneratedAdoAppAndrDocument, options);
      }
export function useCodegenGeneratedAdoAppAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>(CodegenGeneratedAdoAppAndrDocument, options);
        }
export type CodegenGeneratedAdoAppAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrQuery>;
export type CodegenGeneratedAdoAppAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppAndrLazyQuery>;
export type CodegenGeneratedAdoAppAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppAndrQuery, ICodegenGeneratedAdoAppAndrQueryVariables>;
export function refetchCodegenGeneratedAdoAppAndrQuery(variables: ICodegenGeneratedAdoAppAndrQueryVariables) {
      return { query: CodegenGeneratedAdoAppAndrDocument, variables: variables }
    }
export const CodegenGeneratedAdoAppComponentexistsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_COMPONENTEXISTS($ADO_app_address: String!, $ADO_app_app_componentExists_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      componentExists(name: $ADO_app_app_componentExists_name)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoAppComponentexistsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppComponentexistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppComponentexistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppComponentexistsQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *      ADO_app_app_componentExists_name: // value for 'ADO_app_app_componentExists_name'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppComponentexistsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>(CodegenGeneratedAdoAppComponentexistsDocument, options);
      }
export function useCodegenGeneratedAdoAppComponentexistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>(CodegenGeneratedAdoAppComponentexistsDocument, options);
        }
export type CodegenGeneratedAdoAppComponentexistsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentexistsQuery>;
export type CodegenGeneratedAdoAppComponentexistsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentexistsLazyQuery>;
export type CodegenGeneratedAdoAppComponentexistsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppComponentexistsQuery, ICodegenGeneratedAdoAppComponentexistsQueryVariables>;
export function refetchCodegenGeneratedAdoAppComponentexistsQuery(variables: ICodegenGeneratedAdoAppComponentexistsQueryVariables) {
      return { query: CodegenGeneratedAdoAppComponentexistsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppComponentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppComponentsQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppComponentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>(CodegenGeneratedAdoAppComponentsDocument, options);
      }
export function useCodegenGeneratedAdoAppComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>(CodegenGeneratedAdoAppComponentsDocument, options);
        }
export type CodegenGeneratedAdoAppComponentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentsQuery>;
export type CodegenGeneratedAdoAppComponentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppComponentsLazyQuery>;
export type CodegenGeneratedAdoAppComponentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppComponentsQuery, ICodegenGeneratedAdoAppComponentsQueryVariables>;
export function refetchCodegenGeneratedAdoAppComponentsQuery(variables: ICodegenGeneratedAdoAppComponentsQueryVariables) {
      return { query: CodegenGeneratedAdoAppComponentsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppConfigQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>(CodegenGeneratedAdoAppConfigDocument, options);
      }
export function useCodegenGeneratedAdoAppConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>(CodegenGeneratedAdoAppConfigDocument, options);
        }
export type CodegenGeneratedAdoAppConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppConfigQuery>;
export type CodegenGeneratedAdoAppConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppConfigLazyQuery>;
export type CodegenGeneratedAdoAppConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppConfigQuery, ICodegenGeneratedAdoAppConfigQueryVariables>;
export function refetchCodegenGeneratedAdoAppConfigQuery(variables: ICodegenGeneratedAdoAppConfigQueryVariables) {
      return { query: CodegenGeneratedAdoAppConfigDocument, variables: variables }
    }
export const CodegenGeneratedAdoAppGetaddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_APP_GETADDRESS($ADO_app_address: String!, $ADO_app_app_getAddress_name: String!) {
  ADO {
    app(address: $ADO_app_address) {
      getAddress(name: $ADO_app_app_getAddress_name)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoAppGetaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppGetaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppGetaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppGetaddressQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *      ADO_app_app_getAddress_name: // value for 'ADO_app_app_getAddress_name'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppGetaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>(CodegenGeneratedAdoAppGetaddressDocument, options);
      }
export function useCodegenGeneratedAdoAppGetaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>(CodegenGeneratedAdoAppGetaddressDocument, options);
        }
export type CodegenGeneratedAdoAppGetaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppGetaddressQuery>;
export type CodegenGeneratedAdoAppGetaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppGetaddressLazyQuery>;
export type CodegenGeneratedAdoAppGetaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppGetaddressQuery, ICodegenGeneratedAdoAppGetaddressQueryVariables>;
export function refetchCodegenGeneratedAdoAppGetaddressQuery(variables: ICodegenGeneratedAdoAppGetaddressQueryVariables) {
      return { query: CodegenGeneratedAdoAppGetaddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAppQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAppQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAppQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>(CodegenGeneratedAdoAppDocument, options);
      }
export function useCodegenGeneratedAdoAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>(CodegenGeneratedAdoAppDocument, options);
        }
export type CodegenGeneratedAdoAppQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppQuery>;
export type CodegenGeneratedAdoAppLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAppLazyQuery>;
export type CodegenGeneratedAdoAppQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAppQuery, ICodegenGeneratedAdoAppQueryVariables>;
export function refetchCodegenGeneratedAdoAppQuery(variables: ICodegenGeneratedAdoAppQueryVariables) {
      return { query: CodegenGeneratedAdoAppDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAndrIsoperatorQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_andr_andr_isOperator_address: // value for 'ADO_auction_auction_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery, ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery, ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAuctionAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoAuctionAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery, ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery, ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables>(CodegenGeneratedAdoAuctionAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoAuctionAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrIsoperatorQuery>;
export type CodegenGeneratedAdoAuctionAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoAuctionAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAndrIsoperatorQuery, ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionAndrIsoperatorQuery(variables: ICodegenGeneratedAdoAuctionAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAndrQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>(CodegenGeneratedAdoAuctionAndrDocument, options);
      }
export function useCodegenGeneratedAdoAuctionAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>(CodegenGeneratedAdoAuctionAndrDocument, options);
        }
export type CodegenGeneratedAdoAuctionAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrQuery>;
export type CodegenGeneratedAdoAuctionAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAndrLazyQuery>;
export type CodegenGeneratedAdoAuctionAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAndrQuery, ICodegenGeneratedAdoAuctionAndrQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionAndrQuery(variables: ICodegenGeneratedAdoAuctionAndrQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionAuctionidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctionidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctionidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctionidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionIDs_tokenAddress: // value for 'ADO_auction_auction_auctionIDs_tokenAddress'
 *      ADO_auction_auction_auctionIDs_tokenId: // value for 'ADO_auction_auction_auctionIDs_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionAuctionidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>(CodegenGeneratedAdoAuctionAuctionidsDocument, options);
      }
export function useCodegenGeneratedAdoAuctionAuctionidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>(CodegenGeneratedAdoAuctionAuctionidsDocument, options);
        }
export type CodegenGeneratedAdoAuctionAuctionidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionidsQuery>;
export type CodegenGeneratedAdoAuctionAuctionidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionidsLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctionidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionidsQuery, ICodegenGeneratedAdoAuctionAuctionidsQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionAuctionidsQuery(variables: ICodegenGeneratedAdoAuctionAuctionidsQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionAuctionidsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionInfosForAddress_tokenAddress: // value for 'ADO_auction_auction_auctionInfosForAddress_tokenAddress'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>(CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument, options);
      }
export function useCodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>(CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument, options);
        }
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery>;
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctioninfosforaddressLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctioninfosforaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctioninfosforaddressQuery, ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionAuctioninfosforaddressQuery(variables: ICodegenGeneratedAdoAuctionAuctioninfosforaddressQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionAuctioninfosforaddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionAuctionstateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionAuctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionAuctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionAuctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionState_auctionId: // value for 'ADO_auction_auction_auctionState_auctionId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionAuctionstateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>(CodegenGeneratedAdoAuctionAuctionstateDocument, options);
      }
export function useCodegenGeneratedAdoAuctionAuctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>(CodegenGeneratedAdoAuctionAuctionstateDocument, options);
        }
export type CodegenGeneratedAdoAuctionAuctionstateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionstateQuery>;
export type CodegenGeneratedAdoAuctionAuctionstateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionAuctionstateLazyQuery>;
export type CodegenGeneratedAdoAuctionAuctionstateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionAuctionstateQuery, ICodegenGeneratedAdoAuctionAuctionstateQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionAuctionstateQuery(variables: ICodegenGeneratedAdoAuctionAuctionstateQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionAuctionstateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionBidsBidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionBidsBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionBidsBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionBidsBidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_bids_auctionId: // value for 'ADO_auction_auction_bids_auctionId'
 *      ADO_auction_auction_bids_options: // value for 'ADO_auction_auction_bids_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionBidsBidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>(CodegenGeneratedAdoAuctionBidsBidsDocument, options);
      }
export function useCodegenGeneratedAdoAuctionBidsBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>(CodegenGeneratedAdoAuctionBidsBidsDocument, options);
        }
export type CodegenGeneratedAdoAuctionBidsBidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsBidsQuery>;
export type CodegenGeneratedAdoAuctionBidsBidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsBidsLazyQuery>;
export type CodegenGeneratedAdoAuctionBidsBidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsBidsQuery, ICodegenGeneratedAdoAuctionBidsBidsQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionBidsBidsQuery(variables: ICodegenGeneratedAdoAuctionBidsBidsQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionBidsBidsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionBidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionBidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_bids_auctionId: // value for 'ADO_auction_auction_bids_auctionId'
 *      ADO_auction_auction_bids_options: // value for 'ADO_auction_auction_bids_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionBidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>(CodegenGeneratedAdoAuctionBidsDocument, options);
      }
export function useCodegenGeneratedAdoAuctionBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>(CodegenGeneratedAdoAuctionBidsDocument, options);
        }
export type CodegenGeneratedAdoAuctionBidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsQuery>;
export type CodegenGeneratedAdoAuctionBidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionBidsLazyQuery>;
export type CodegenGeneratedAdoAuctionBidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionBidsQuery, ICodegenGeneratedAdoAuctionBidsQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionBidsQuery(variables: ICodegenGeneratedAdoAuctionBidsQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionBidsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionLatestauctionstateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionLatestauctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionLatestauctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionLatestauctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_latestAuctionState_tokenAddress: // value for 'ADO_auction_auction_latestAuctionState_tokenAddress'
 *      ADO_auction_auction_latestAuctionState_tokenId: // value for 'ADO_auction_auction_latestAuctionState_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionLatestauctionstateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>(CodegenGeneratedAdoAuctionLatestauctionstateDocument, options);
      }
export function useCodegenGeneratedAdoAuctionLatestauctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>(CodegenGeneratedAdoAuctionLatestauctionstateDocument, options);
        }
export type CodegenGeneratedAdoAuctionLatestauctionstateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLatestauctionstateQuery>;
export type CodegenGeneratedAdoAuctionLatestauctionstateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLatestauctionstateLazyQuery>;
export type CodegenGeneratedAdoAuctionLatestauctionstateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionLatestauctionstateQuery, ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionLatestauctionstateQuery(variables: ICodegenGeneratedAdoAuctionLatestauctionstateQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionLatestauctionstateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionSummaryfieldsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionSummaryfieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionSummaryfieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionSummaryfieldsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_summaryFields_tokenAddress: // value for 'ADO_auction_auction_summaryFields_tokenAddress'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionSummaryfieldsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>(CodegenGeneratedAdoAuctionSummaryfieldsDocument, options);
      }
export function useCodegenGeneratedAdoAuctionSummaryfieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>(CodegenGeneratedAdoAuctionSummaryfieldsDocument, options);
        }
export type CodegenGeneratedAdoAuctionSummaryfieldsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionSummaryfieldsQuery>;
export type CodegenGeneratedAdoAuctionSummaryfieldsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionSummaryfieldsLazyQuery>;
export type CodegenGeneratedAdoAuctionSummaryfieldsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionSummaryfieldsQuery, ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionSummaryfieldsQuery(variables: ICodegenGeneratedAdoAuctionSummaryfieldsQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionSummaryfieldsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoAuctionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoAuctionQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoAuctionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>(CodegenGeneratedAdoAuctionDocument, options);
      }
export function useCodegenGeneratedAdoAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>(CodegenGeneratedAdoAuctionDocument, options);
        }
export type CodegenGeneratedAdoAuctionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionQuery>;
export type CodegenGeneratedAdoAuctionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoAuctionLazyQuery>;
export type CodegenGeneratedAdoAuctionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoAuctionQuery, ICodegenGeneratedAdoAuctionQueryVariables>;
export function refetchCodegenGeneratedAdoAuctionQuery(variables: ICodegenGeneratedAdoAuctionQueryVariables) {
      return { query: CodegenGeneratedAdoAuctionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *      ADO_crowdfund_crowdfund_andr_andr_isOperator_address: // value for 'ADO_crowdfund_crowdfund_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery, ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery, ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCrowdfundAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery, ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery, ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCrowdfundAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery>;
export type CodegenGeneratedAdoCrowdfundAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoCrowdfundAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundAndrIsoperatorQuery, ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundAndrIsoperatorQuery(variables: ICodegenGeneratedAdoCrowdfundAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundAndrQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>(CodegenGeneratedAdoCrowdfundAndrDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>(CodegenGeneratedAdoCrowdfundAndrDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrQuery>;
export type CodegenGeneratedAdoCrowdfundAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundAndrLazyQuery>;
export type CodegenGeneratedAdoCrowdfundAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundAndrQuery, ICodegenGeneratedAdoCrowdfundAndrQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundAndrQuery(variables: ICodegenGeneratedAdoCrowdfundAndrQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundConfigQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>(CodegenGeneratedAdoCrowdfundConfigDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>(CodegenGeneratedAdoCrowdfundConfigDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundConfigQuery>;
export type CodegenGeneratedAdoCrowdfundConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundConfigLazyQuery>;
export type CodegenGeneratedAdoCrowdfundConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundConfigQuery, ICodegenGeneratedAdoCrowdfundConfigQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundConfigQuery(variables: ICodegenGeneratedAdoCrowdfundConfigQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundConfigDocument, variables: variables }
    }
export const CodegenGeneratedAdoCrowdfundIstokenavailableDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CROWDFUND_ISTOKENAVAILABLE($ADO_crowdfund_address: String!, $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: String!) {
  ADO {
    crowdfund(address: $ADO_crowdfund_address) {
      isTokenAvailable(tokenId: $ADO_crowdfund_crowdfund_isTokenAvailable_tokenId)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCrowdfundIstokenavailableQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundIstokenavailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundIstokenavailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundIstokenavailableQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *      ADO_crowdfund_crowdfund_isTokenAvailable_tokenId: // value for 'ADO_crowdfund_crowdfund_isTokenAvailable_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundIstokenavailableQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>(CodegenGeneratedAdoCrowdfundIstokenavailableDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundIstokenavailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>(CodegenGeneratedAdoCrowdfundIstokenavailableDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundIstokenavailableQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundIstokenavailableQuery>;
export type CodegenGeneratedAdoCrowdfundIstokenavailableLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundIstokenavailableLazyQuery>;
export type CodegenGeneratedAdoCrowdfundIstokenavailableQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundIstokenavailableQuery, ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundIstokenavailableQuery(variables: ICodegenGeneratedAdoCrowdfundIstokenavailableQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundIstokenavailableDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundStatePriceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundStatePriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundStatePriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundStatePriceQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundStatePriceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>(CodegenGeneratedAdoCrowdfundStatePriceDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundStatePriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>(CodegenGeneratedAdoCrowdfundStatePriceDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundStatePriceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStatePriceQuery>;
export type CodegenGeneratedAdoCrowdfundStatePriceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStatePriceLazyQuery>;
export type CodegenGeneratedAdoCrowdfundStatePriceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStatePriceQuery, ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundStatePriceQuery(variables: ICodegenGeneratedAdoCrowdfundStatePriceQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundStatePriceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundStateQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>(CodegenGeneratedAdoCrowdfundStateDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>(CodegenGeneratedAdoCrowdfundStateDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateQuery>;
export type CodegenGeneratedAdoCrowdfundStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundStateLazyQuery>;
export type CodegenGeneratedAdoCrowdfundStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundStateQuery, ICodegenGeneratedAdoCrowdfundStateQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundStateQuery(variables: ICodegenGeneratedAdoCrowdfundStateQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundStateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCrowdfundQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCrowdfundQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCrowdfundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCrowdfundQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCrowdfundQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>(CodegenGeneratedAdoCrowdfundDocument, options);
      }
export function useCodegenGeneratedAdoCrowdfundLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>(CodegenGeneratedAdoCrowdfundDocument, options);
        }
export type CodegenGeneratedAdoCrowdfundQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundQuery>;
export type CodegenGeneratedAdoCrowdfundLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCrowdfundLazyQuery>;
export type CodegenGeneratedAdoCrowdfundQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCrowdfundQuery, ICodegenGeneratedAdoCrowdfundQueryVariables>;
export function refetchCodegenGeneratedAdoCrowdfundQuery(variables: ICodegenGeneratedAdoCrowdfundQueryVariables) {
      return { query: CodegenGeneratedAdoCrowdfundDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw20AllaccountsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_ALLACCOUNTS($ADO_cw20_address: String!, $ADO_cw20_cw20_allAccounts_options: AndrSearchOptions) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      allAccounts(options: $ADO_cw20_cw20_allAccounts_options)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw20AllaccountsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllaccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllaccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllaccountsQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allAccounts_options: // value for 'ADO_cw20_cw20_allAccounts_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AllaccountsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>(CodegenGeneratedAdoCw20AllaccountsDocument, options);
      }
export function useCodegenGeneratedAdoCw20AllaccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>(CodegenGeneratedAdoCw20AllaccountsDocument, options);
        }
export type CodegenGeneratedAdoCw20AllaccountsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllaccountsQuery>;
export type CodegenGeneratedAdoCw20AllaccountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllaccountsLazyQuery>;
export type CodegenGeneratedAdoCw20AllaccountsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllaccountsQuery, ICodegenGeneratedAdoCw20AllaccountsQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AllaccountsQuery(variables: ICodegenGeneratedAdoCw20AllaccountsQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AllaccountsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20AllallowancesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllallowancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllallowancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllallowancesQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allAllowances_options: // value for 'ADO_cw20_cw20_allAllowances_options'
 *      ADO_cw20_cw20_allAllowances_owner: // value for 'ADO_cw20_cw20_allAllowances_owner'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AllallowancesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>(CodegenGeneratedAdoCw20AllallowancesDocument, options);
      }
export function useCodegenGeneratedAdoCw20AllallowancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>(CodegenGeneratedAdoCw20AllallowancesDocument, options);
        }
export type CodegenGeneratedAdoCw20AllallowancesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllallowancesQuery>;
export type CodegenGeneratedAdoCw20AllallowancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllallowancesLazyQuery>;
export type CodegenGeneratedAdoCw20AllallowancesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllallowancesQuery, ICodegenGeneratedAdoCw20AllallowancesQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AllallowancesQuery(variables: ICodegenGeneratedAdoCw20AllallowancesQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AllallowancesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20AllspenderallowancesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllspenderallowancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllspenderallowancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllspenderallowancesQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allSpenderAllowances_options: // value for 'ADO_cw20_cw20_allSpenderAllowances_options'
 *      ADO_cw20_cw20_allSpenderAllowances_spender: // value for 'ADO_cw20_cw20_allSpenderAllowances_spender'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AllspenderallowancesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>(CodegenGeneratedAdoCw20AllspenderallowancesDocument, options);
      }
export function useCodegenGeneratedAdoCw20AllspenderallowancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>(CodegenGeneratedAdoCw20AllspenderallowancesDocument, options);
        }
export type CodegenGeneratedAdoCw20AllspenderallowancesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllspenderallowancesQuery>;
export type CodegenGeneratedAdoCw20AllspenderallowancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllspenderallowancesLazyQuery>;
export type CodegenGeneratedAdoCw20AllspenderallowancesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllspenderallowancesQuery, ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AllspenderallowancesQuery(variables: ICodegenGeneratedAdoCw20AllspenderallowancesQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AllspenderallowancesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20AllowanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AllowanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AllowanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AllowanceQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allowance_owner: // value for 'ADO_cw20_cw20_allowance_owner'
 *      ADO_cw20_cw20_allowance_spender: // value for 'ADO_cw20_cw20_allowance_spender'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AllowanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>(CodegenGeneratedAdoCw20AllowanceDocument, options);
      }
export function useCodegenGeneratedAdoCw20AllowanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>(CodegenGeneratedAdoCw20AllowanceDocument, options);
        }
export type CodegenGeneratedAdoCw20AllowanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllowanceQuery>;
export type CodegenGeneratedAdoCw20AllowanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AllowanceLazyQuery>;
export type CodegenGeneratedAdoCw20AllowanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AllowanceQuery, ICodegenGeneratedAdoCw20AllowanceQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AllowanceQuery(variables: ICodegenGeneratedAdoCw20AllowanceQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AllowanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20AndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AndrIsoperatorQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_andr_andr_isOperator_address: // value for 'ADO_cw20_cw20_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AndrIsoperatorQuery, ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AndrIsoperatorQuery, ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20AndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoCw20AndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AndrIsoperatorQuery, ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AndrIsoperatorQuery, ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20AndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoCw20AndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrIsoperatorQuery>;
export type CodegenGeneratedAdoCw20AndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoCw20AndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AndrIsoperatorQuery, ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AndrIsoperatorQuery(variables: ICodegenGeneratedAdoCw20AndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20AndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20AndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20AndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20AndrQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20AndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>(CodegenGeneratedAdoCw20AndrDocument, options);
      }
export function useCodegenGeneratedAdoCw20AndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>(CodegenGeneratedAdoCw20AndrDocument, options);
        }
export type CodegenGeneratedAdoCw20AndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrQuery>;
export type CodegenGeneratedAdoCw20AndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20AndrLazyQuery>;
export type CodegenGeneratedAdoCw20AndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20AndrQuery, ICodegenGeneratedAdoCw20AndrQueryVariables>;
export function refetchCodegenGeneratedAdoCw20AndrQuery(variables: ICodegenGeneratedAdoCw20AndrQueryVariables) {
      return { query: CodegenGeneratedAdoCw20AndrDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw20BalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_BALANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_balance_address: String!) {
  ADO {
    cw20(address: $ADO_cw20_address) {
      balance(address: $ADO_cw20_cw20_balance_address)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw20BalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20BalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20BalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20BalanceQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_balance_address: // value for 'ADO_cw20_cw20_balance_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20BalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>(CodegenGeneratedAdoCw20BalanceDocument, options);
      }
export function useCodegenGeneratedAdoCw20BalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>(CodegenGeneratedAdoCw20BalanceDocument, options);
        }
export type CodegenGeneratedAdoCw20BalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20BalanceQuery>;
export type CodegenGeneratedAdoCw20BalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20BalanceLazyQuery>;
export type CodegenGeneratedAdoCw20BalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20BalanceQuery, ICodegenGeneratedAdoCw20BalanceQueryVariables>;
export function refetchCodegenGeneratedAdoCw20BalanceQuery(variables: ICodegenGeneratedAdoCw20BalanceQueryVariables) {
      return { query: CodegenGeneratedAdoCw20BalanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20DownloadlogoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20DownloadlogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20DownloadlogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20DownloadlogoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20DownloadlogoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>(CodegenGeneratedAdoCw20DownloadlogoDocument, options);
      }
export function useCodegenGeneratedAdoCw20DownloadlogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>(CodegenGeneratedAdoCw20DownloadlogoDocument, options);
        }
export type CodegenGeneratedAdoCw20DownloadlogoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20DownloadlogoQuery>;
export type CodegenGeneratedAdoCw20DownloadlogoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20DownloadlogoLazyQuery>;
export type CodegenGeneratedAdoCw20DownloadlogoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20DownloadlogoQuery, ICodegenGeneratedAdoCw20DownloadlogoQueryVariables>;
export function refetchCodegenGeneratedAdoCw20DownloadlogoQuery(variables: ICodegenGeneratedAdoCw20DownloadlogoQueryVariables) {
      return { query: CodegenGeneratedAdoCw20DownloadlogoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20MarketinginfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20MarketinginfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20MarketinginfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20MarketinginfoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20MarketinginfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>(CodegenGeneratedAdoCw20MarketinginfoDocument, options);
      }
export function useCodegenGeneratedAdoCw20MarketinginfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>(CodegenGeneratedAdoCw20MarketinginfoDocument, options);
        }
export type CodegenGeneratedAdoCw20MarketinginfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MarketinginfoQuery>;
export type CodegenGeneratedAdoCw20MarketinginfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MarketinginfoLazyQuery>;
export type CodegenGeneratedAdoCw20MarketinginfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20MarketinginfoQuery, ICodegenGeneratedAdoCw20MarketinginfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw20MarketinginfoQuery(variables: ICodegenGeneratedAdoCw20MarketinginfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw20MarketinginfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20MinterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20MinterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20MinterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20MinterQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20MinterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>(CodegenGeneratedAdoCw20MinterDocument, options);
      }
export function useCodegenGeneratedAdoCw20MinterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>(CodegenGeneratedAdoCw20MinterDocument, options);
        }
export type CodegenGeneratedAdoCw20MinterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MinterQuery>;
export type CodegenGeneratedAdoCw20MinterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20MinterLazyQuery>;
export type CodegenGeneratedAdoCw20MinterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20MinterQuery, ICodegenGeneratedAdoCw20MinterQueryVariables>;
export function refetchCodegenGeneratedAdoCw20MinterQuery(variables: ICodegenGeneratedAdoCw20MinterQueryVariables) {
      return { query: CodegenGeneratedAdoCw20MinterDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20TokeninfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20TokeninfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20TokeninfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20TokeninfoQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20TokeninfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>(CodegenGeneratedAdoCw20TokeninfoDocument, options);
      }
export function useCodegenGeneratedAdoCw20TokeninfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>(CodegenGeneratedAdoCw20TokeninfoDocument, options);
        }
export type CodegenGeneratedAdoCw20TokeninfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20TokeninfoQuery>;
export type CodegenGeneratedAdoCw20TokeninfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20TokeninfoLazyQuery>;
export type CodegenGeneratedAdoCw20TokeninfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20TokeninfoQuery, ICodegenGeneratedAdoCw20TokeninfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw20TokeninfoQuery(variables: ICodegenGeneratedAdoCw20TokeninfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw20TokeninfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20Query({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>(CodegenGeneratedAdoCw20Document, options);
      }
export function useCodegenGeneratedAdoCw20LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>(CodegenGeneratedAdoCw20Document, options);
        }
export type CodegenGeneratedAdoCw20QueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20Query>;
export type CodegenGeneratedAdoCw20LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20LazyQuery>;
export type CodegenGeneratedAdoCw20QueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20Query, ICodegenGeneratedAdoCw20QueryVariables>;
export function refetchCodegenGeneratedAdoCw20Query(variables: ICodegenGeneratedAdoCw20QueryVariables) {
      return { query: CodegenGeneratedAdoCw20Document, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_andr_andr_isOperator_address: // value for 'ADO_cw20_exchange_cw20_exchange_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery, ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery, ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20ExchangeAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery, ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery, ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20ExchangeAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery, ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoCw20ExchangeAndrIsoperatorQuery(variables: ICodegenGeneratedAdoCw20ExchangeAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoCw20ExchangeAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20ExchangeAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeAndrQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20ExchangeAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>(CodegenGeneratedAdoCw20ExchangeAndrDocument, options);
      }
export function useCodegenGeneratedAdoCw20ExchangeAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>(CodegenGeneratedAdoCw20ExchangeAndrDocument, options);
        }
export type CodegenGeneratedAdoCw20ExchangeAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeAndrLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeAndrQuery, ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables>;
export function refetchCodegenGeneratedAdoCw20ExchangeAndrQuery(variables: ICodegenGeneratedAdoCw20ExchangeAndrQueryVariables) {
      return { query: CodegenGeneratedAdoCw20ExchangeAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20ExchangeSaleQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeSaleQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_sale_cw20: // value for 'ADO_cw20_exchange_cw20_exchange_sale_cw20'
 *      ADO_cw20_exchange_cw20_exchange_sale_native: // value for 'ADO_cw20_exchange_cw20_exchange_sale_native'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20ExchangeSaleQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>(CodegenGeneratedAdoCw20ExchangeSaleDocument, options);
      }
export function useCodegenGeneratedAdoCw20ExchangeSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>(CodegenGeneratedAdoCw20ExchangeSaleDocument, options);
        }
export type CodegenGeneratedAdoCw20ExchangeSaleQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleQuery, ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables>;
export function refetchCodegenGeneratedAdoCw20ExchangeSaleQuery(variables: ICodegenGeneratedAdoCw20ExchangeSaleQueryVariables) {
      return { query: CodegenGeneratedAdoCw20ExchangeSaleDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw20ExchangeSaleassetsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW20_EXCHANGE_SALEASSETS($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_saleAssets_options: AndrSearchOptions) {
  ADO {
    cw20_exchange(address: $ADO_cw20_exchange_address) {
      saleAssets(options: $ADO_cw20_exchange_cw20_exchange_saleAssets_options)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_saleAssets_options: // value for 'ADO_cw20_exchange_cw20_exchange_saleAssets_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>(CodegenGeneratedAdoCw20ExchangeSaleassetsDocument, options);
      }
export function useCodegenGeneratedAdoCw20ExchangeSaleassetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>(CodegenGeneratedAdoCw20ExchangeSaleassetsDocument, options);
        }
export type CodegenGeneratedAdoCw20ExchangeSaleassetsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleassetsQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleassetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeSaleassetsLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeSaleassetsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeSaleassetsQuery, ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables>;
export function refetchCodegenGeneratedAdoCw20ExchangeSaleassetsQuery(variables: ICodegenGeneratedAdoCw20ExchangeSaleassetsQueryVariables) {
      return { query: CodegenGeneratedAdoCw20ExchangeSaleassetsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20ExchangeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20ExchangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20ExchangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20ExchangeQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20ExchangeQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>(CodegenGeneratedAdoCw20ExchangeDocument, options);
      }
export function useCodegenGeneratedAdoCw20ExchangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>(CodegenGeneratedAdoCw20ExchangeDocument, options);
        }
export type CodegenGeneratedAdoCw20ExchangeQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeQuery>;
export type CodegenGeneratedAdoCw20ExchangeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20ExchangeLazyQuery>;
export type CodegenGeneratedAdoCw20ExchangeQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20ExchangeQuery, ICodegenGeneratedAdoCw20ExchangeQueryVariables>;
export function refetchCodegenGeneratedAdoCw20ExchangeQuery(variables: ICodegenGeneratedAdoCw20ExchangeQueryVariables) {
      return { query: CodegenGeneratedAdoCw20ExchangeDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_andr_andr_isOperator_address: // value for 'ADO_cw20_staking_cw20_staking_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery, ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery, ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20StakingAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery, ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery, ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw20StakingAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery>;
export type CodegenGeneratedAdoCw20StakingAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoCw20StakingAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingAndrIsoperatorQuery, ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingAndrIsoperatorQuery(variables: ICodegenGeneratedAdoCw20StakingAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingAndrQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>(CodegenGeneratedAdoCw20StakingAndrDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>(CodegenGeneratedAdoCw20StakingAndrDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrQuery>;
export type CodegenGeneratedAdoCw20StakingAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingAndrLazyQuery>;
export type CodegenGeneratedAdoCw20StakingAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingAndrQuery, ICodegenGeneratedAdoCw20StakingAndrQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingAndrQuery(variables: ICodegenGeneratedAdoCw20StakingAndrQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>(CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>(CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery>;
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigStakingTokenLazyQuery>;
export type CodegenGeneratedAdoCw20StakingConfigStakingTokenQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigStakingTokenQuery, ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingConfigStakingTokenQuery(variables: ICodegenGeneratedAdoCw20StakingConfigStakingTokenQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingConfigStakingTokenDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingConfigQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>(CodegenGeneratedAdoCw20StakingConfigDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>(CodegenGeneratedAdoCw20StakingConfigDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigQuery>;
export type CodegenGeneratedAdoCw20StakingConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingConfigLazyQuery>;
export type CodegenGeneratedAdoCw20StakingConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingConfigQuery, ICodegenGeneratedAdoCw20StakingConfigQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingConfigQuery(variables: ICodegenGeneratedAdoCw20StakingConfigQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingStakerQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStakerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStakerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStakerQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_staker_address: // value for 'ADO_cw20_staking_cw20_staking_staker_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingStakerQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>(CodegenGeneratedAdoCw20StakingStakerDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingStakerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>(CodegenGeneratedAdoCw20StakingStakerDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingStakerQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakerQuery>;
export type CodegenGeneratedAdoCw20StakingStakerLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakerLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStakerQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakerQuery, ICodegenGeneratedAdoCw20StakingStakerQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingStakerQuery(variables: ICodegenGeneratedAdoCw20StakingStakerQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingStakerDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingStakersQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStakersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStakersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStakersQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_stakers_options: // value for 'ADO_cw20_staking_cw20_staking_stakers_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingStakersQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>(CodegenGeneratedAdoCw20StakingStakersDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingStakersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>(CodegenGeneratedAdoCw20StakingStakersDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingStakersQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakersQuery>;
export type CodegenGeneratedAdoCw20StakingStakersLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStakersLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStakersQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStakersQuery, ICodegenGeneratedAdoCw20StakingStakersQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingStakersQuery(variables: ICodegenGeneratedAdoCw20StakingStakersQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingStakersDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingStateQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>(CodegenGeneratedAdoCw20StakingStateDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>(CodegenGeneratedAdoCw20StakingStateDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStateQuery>;
export type CodegenGeneratedAdoCw20StakingStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingStateLazyQuery>;
export type CodegenGeneratedAdoCw20StakingStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingStateQuery, ICodegenGeneratedAdoCw20StakingStateQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingStateQuery(variables: ICodegenGeneratedAdoCw20StakingStateQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingStateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw20StakingQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw20StakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw20StakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw20StakingQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw20StakingQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>(CodegenGeneratedAdoCw20StakingDocument, options);
      }
export function useCodegenGeneratedAdoCw20StakingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>(CodegenGeneratedAdoCw20StakingDocument, options);
        }
export type CodegenGeneratedAdoCw20StakingQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingQuery>;
export type CodegenGeneratedAdoCw20StakingLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw20StakingLazyQuery>;
export type CodegenGeneratedAdoCw20StakingQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw20StakingQuery, ICodegenGeneratedAdoCw20StakingQueryVariables>;
export function refetchCodegenGeneratedAdoCw20StakingQuery(variables: ICodegenGeneratedAdoCw20StakingQueryVariables) {
      return { query: CodegenGeneratedAdoCw20StakingDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessApprovalsQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoAccessApprovalsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoAccessQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoAccessQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoAccessQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoAccessDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoAccessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoAccessDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoAccessQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoAccessLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoAccessQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoAccessQuery, ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoAccessQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoAccessQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoAccessDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoInfoExtensionAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoInfoExtensionQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoExtensionQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoInfoExtensionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoInfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoInfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoInfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoInfoDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoInfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoInfoLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoInfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoInfoQuery, ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoInfoQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoInfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoInfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AllnftinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AllnftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AllnftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AllnftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AllnftinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoDocument, options);
      }
export function useCodegenGeneratedAdoCw721AllnftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>(CodegenGeneratedAdoCw721AllnftinfoDocument, options);
        }
export type CodegenGeneratedAdoCw721AllnftinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AllnftinfoLazyQuery>;
export type CodegenGeneratedAdoCw721AllnftinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AllnftinfoQuery, ICodegenGeneratedAdoCw721AllnftinfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AllnftinfoQuery(variables: ICodegenGeneratedAdoCw721AllnftinfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AllnftinfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AlloperatorsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AlloperatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AlloperatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AlloperatorsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allOperators_includeExpired: // value for 'ADO_cw721_cw721_allOperators_includeExpired'
 *      ADO_cw721_cw721_allOperators_options: // value for 'ADO_cw721_cw721_allOperators_options'
 *      ADO_cw721_cw721_allOperators_owner: // value for 'ADO_cw721_cw721_allOperators_owner'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AlloperatorsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>(CodegenGeneratedAdoCw721AlloperatorsDocument, options);
      }
export function useCodegenGeneratedAdoCw721AlloperatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>(CodegenGeneratedAdoCw721AlloperatorsDocument, options);
        }
export type CodegenGeneratedAdoCw721AlloperatorsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlloperatorsQuery>;
export type CodegenGeneratedAdoCw721AlloperatorsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlloperatorsLazyQuery>;
export type CodegenGeneratedAdoCw721AlloperatorsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AlloperatorsQuery, ICodegenGeneratedAdoCw721AlloperatorsQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AlloperatorsQuery(variables: ICodegenGeneratedAdoCw721AlloperatorsQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AlloperatorsDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw721AlltokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ALLTOKENS($ADO_cw721_address: String!, $ADO_cw721_cw721_allTokens_options: AndrSearchOptions) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      allTokens(options: $ADO_cw721_cw721_allTokens_options)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw721AlltokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AlltokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AlltokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AlltokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allTokens_options: // value for 'ADO_cw721_cw721_allTokens_options'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AlltokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>(CodegenGeneratedAdoCw721AlltokensDocument, options);
      }
export function useCodegenGeneratedAdoCw721AlltokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>(CodegenGeneratedAdoCw721AlltokensDocument, options);
        }
export type CodegenGeneratedAdoCw721AlltokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlltokensQuery>;
export type CodegenGeneratedAdoCw721AlltokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AlltokensLazyQuery>;
export type CodegenGeneratedAdoCw721AlltokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AlltokensQuery, ICodegenGeneratedAdoCw721AlltokensQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AlltokensQuery(variables: ICodegenGeneratedAdoCw721AlltokensQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AlltokensDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AndrIsoperatorQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_andr_andr_isOperator_address: // value for 'ADO_cw721_cw721_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AndrIsoperatorQuery, ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AndrIsoperatorQuery, ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw721AndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoCw721AndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AndrIsoperatorQuery, ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AndrIsoperatorQuery, ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables>(CodegenGeneratedAdoCw721AndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoCw721AndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrIsoperatorQuery>;
export type CodegenGeneratedAdoCw721AndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoCw721AndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AndrIsoperatorQuery, ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AndrIsoperatorQuery(variables: ICodegenGeneratedAdoCw721AndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721AndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721AndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721AndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721AndrQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721AndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>(CodegenGeneratedAdoCw721AndrDocument, options);
      }
export function useCodegenGeneratedAdoCw721AndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>(CodegenGeneratedAdoCw721AndrDocument, options);
        }
export type CodegenGeneratedAdoCw721AndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrQuery>;
export type CodegenGeneratedAdoCw721AndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721AndrLazyQuery>;
export type CodegenGeneratedAdoCw721AndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721AndrQuery, ICodegenGeneratedAdoCw721AndrQueryVariables>;
export function refetchCodegenGeneratedAdoCw721AndrQuery(variables: ICodegenGeneratedAdoCw721AndrQueryVariables) {
      return { query: CodegenGeneratedAdoCw721AndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721ApprovalQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ApprovalQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ApprovalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ApprovalQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_approval_includeExpired: // value for 'ADO_cw721_cw721_approval_includeExpired'
 *      ADO_cw721_cw721_approval_spender: // value for 'ADO_cw721_cw721_approval_spender'
 *      ADO_cw721_cw721_approval_tokenId: // value for 'ADO_cw721_cw721_approval_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721ApprovalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>(CodegenGeneratedAdoCw721ApprovalDocument, options);
      }
export function useCodegenGeneratedAdoCw721ApprovalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>(CodegenGeneratedAdoCw721ApprovalDocument, options);
        }
export type CodegenGeneratedAdoCw721ApprovalQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalQuery>;
export type CodegenGeneratedAdoCw721ApprovalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalLazyQuery>;
export type CodegenGeneratedAdoCw721ApprovalQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalQuery, ICodegenGeneratedAdoCw721ApprovalQueryVariables>;
export function refetchCodegenGeneratedAdoCw721ApprovalQuery(variables: ICodegenGeneratedAdoCw721ApprovalQueryVariables) {
      return { query: CodegenGeneratedAdoCw721ApprovalDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721ApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_approvals_includeExpired: // value for 'ADO_cw721_cw721_approvals_includeExpired'
 *      ADO_cw721_cw721_approvals_tokenId: // value for 'ADO_cw721_cw721_approvals_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721ApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>(CodegenGeneratedAdoCw721ApprovalsDocument, options);
      }
export function useCodegenGeneratedAdoCw721ApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>(CodegenGeneratedAdoCw721ApprovalsDocument, options);
        }
export type CodegenGeneratedAdoCw721ApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalsQuery>;
export type CodegenGeneratedAdoCw721ApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721ApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ApprovalsQuery, ICodegenGeneratedAdoCw721ApprovalsQueryVariables>;
export function refetchCodegenGeneratedAdoCw721ApprovalsQuery(variables: ICodegenGeneratedAdoCw721ApprovalsQueryVariables) {
      return { query: CodegenGeneratedAdoCw721ApprovalsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721ContractinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721ContractinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721ContractinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721ContractinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721ContractinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>(CodegenGeneratedAdoCw721ContractinfoDocument, options);
      }
export function useCodegenGeneratedAdoCw721ContractinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>(CodegenGeneratedAdoCw721ContractinfoDocument, options);
        }
export type CodegenGeneratedAdoCw721ContractinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ContractinfoQuery>;
export type CodegenGeneratedAdoCw721ContractinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721ContractinfoLazyQuery>;
export type CodegenGeneratedAdoCw721ContractinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721ContractinfoQuery, ICodegenGeneratedAdoCw721ContractinfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw721ContractinfoQuery(variables: ICodegenGeneratedAdoCw721ContractinfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw721ContractinfoDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw721IsarchivedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_ISARCHIVED($ADO_cw721_address: String!, $ADO_cw721_cw721_isArchived_tokenId: String!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      isArchived(tokenId: $ADO_cw721_cw721_isArchived_tokenId)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw721IsarchivedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721IsarchivedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721IsarchivedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721IsarchivedQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_isArchived_tokenId: // value for 'ADO_cw721_cw721_isArchived_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721IsarchivedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>(CodegenGeneratedAdoCw721IsarchivedDocument, options);
      }
export function useCodegenGeneratedAdoCw721IsarchivedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>(CodegenGeneratedAdoCw721IsarchivedDocument, options);
        }
export type CodegenGeneratedAdoCw721IsarchivedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721IsarchivedQuery>;
export type CodegenGeneratedAdoCw721IsarchivedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721IsarchivedLazyQuery>;
export type CodegenGeneratedAdoCw721IsarchivedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721IsarchivedQuery, ICodegenGeneratedAdoCw721IsarchivedQueryVariables>;
export function refetchCodegenGeneratedAdoCw721IsarchivedQuery(variables: ICodegenGeneratedAdoCw721IsarchivedQueryVariables) {
      return { query: CodegenGeneratedAdoCw721IsarchivedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721NftinfoExtensionAttributesDocument, options);
      }
export function useCodegenGeneratedAdoCw721NftinfoExtensionAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721NftinfoExtensionAttributesDocument, options);
        }
export type CodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery, ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables>;
export function refetchCodegenGeneratedAdoCw721NftinfoExtensionAttributesQuery(variables: ICodegenGeneratedAdoCw721NftinfoExtensionAttributesQueryVariables) {
      return { query: CodegenGeneratedAdoCw721NftinfoExtensionAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721NftinfoExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721NftinfoExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>(CodegenGeneratedAdoCw721NftinfoExtensionDocument, options);
      }
export function useCodegenGeneratedAdoCw721NftinfoExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>(CodegenGeneratedAdoCw721NftinfoExtensionDocument, options);
        }
export type CodegenGeneratedAdoCw721NftinfoExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoExtensionQuery, ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables>;
export function refetchCodegenGeneratedAdoCw721NftinfoExtensionQuery(variables: ICodegenGeneratedAdoCw721NftinfoExtensionQueryVariables) {
      return { query: CodegenGeneratedAdoCw721NftinfoExtensionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721NftinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721NftinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>(CodegenGeneratedAdoCw721NftinfoDocument, options);
      }
export function useCodegenGeneratedAdoCw721NftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>(CodegenGeneratedAdoCw721NftinfoDocument, options);
        }
export type CodegenGeneratedAdoCw721NftinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoQuery>;
export type CodegenGeneratedAdoCw721NftinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NftinfoLazyQuery>;
export type CodegenGeneratedAdoCw721NftinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NftinfoQuery, ICodegenGeneratedAdoCw721NftinfoQueryVariables>;
export function refetchCodegenGeneratedAdoCw721NftinfoQuery(variables: ICodegenGeneratedAdoCw721NftinfoQueryVariables) {
      return { query: CodegenGeneratedAdoCw721NftinfoDocument, variables: variables }
    }
export const CodegenGeneratedAdoCw721NumownersDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_CW721_NUMOWNERS($ADO_cw721_address: String!, $ADO_cw721_cw721_numOwners_includeExpired: Boolean!) {
  ADO {
    cw721(address: $ADO_cw721_address) {
      numOwners(includeExpired: $ADO_cw721_cw721_numOwners_includeExpired)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoCw721NumownersQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721NumownersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721NumownersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721NumownersQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_numOwners_includeExpired: // value for 'ADO_cw721_cw721_numOwners_includeExpired'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721NumownersQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>(CodegenGeneratedAdoCw721NumownersDocument, options);
      }
export function useCodegenGeneratedAdoCw721NumownersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>(CodegenGeneratedAdoCw721NumownersDocument, options);
        }
export type CodegenGeneratedAdoCw721NumownersQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NumownersQuery>;
export type CodegenGeneratedAdoCw721NumownersLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721NumownersLazyQuery>;
export type CodegenGeneratedAdoCw721NumownersQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721NumownersQuery, ICodegenGeneratedAdoCw721NumownersQueryVariables>;
export function refetchCodegenGeneratedAdoCw721NumownersQuery(variables: ICodegenGeneratedAdoCw721NumownersQueryVariables) {
      return { query: CodegenGeneratedAdoCw721NumownersDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721OwnerofApprovalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721OwnerofApprovalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721OwnerofApprovalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721OwnerofApprovalsQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_ownerOf_includeExpired: // value for 'ADO_cw721_cw721_ownerOf_includeExpired'
 *      ADO_cw721_cw721_ownerOf_tokenId: // value for 'ADO_cw721_cw721_ownerOf_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721OwnerofApprovalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>(CodegenGeneratedAdoCw721OwnerofApprovalsDocument, options);
      }
export function useCodegenGeneratedAdoCw721OwnerofApprovalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>(CodegenGeneratedAdoCw721OwnerofApprovalsDocument, options);
        }
export type CodegenGeneratedAdoCw721OwnerofApprovalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofApprovalsQuery>;
export type CodegenGeneratedAdoCw721OwnerofApprovalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofApprovalsLazyQuery>;
export type CodegenGeneratedAdoCw721OwnerofApprovalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofApprovalsQuery, ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables>;
export function refetchCodegenGeneratedAdoCw721OwnerofApprovalsQuery(variables: ICodegenGeneratedAdoCw721OwnerofApprovalsQueryVariables) {
      return { query: CodegenGeneratedAdoCw721OwnerofApprovalsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721OwnerofQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721OwnerofQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721OwnerofQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721OwnerofQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_ownerOf_includeExpired: // value for 'ADO_cw721_cw721_ownerOf_includeExpired'
 *      ADO_cw721_cw721_ownerOf_tokenId: // value for 'ADO_cw721_cw721_ownerOf_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721OwnerofQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>(CodegenGeneratedAdoCw721OwnerofDocument, options);
      }
export function useCodegenGeneratedAdoCw721OwnerofLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>(CodegenGeneratedAdoCw721OwnerofDocument, options);
        }
export type CodegenGeneratedAdoCw721OwnerofQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofQuery>;
export type CodegenGeneratedAdoCw721OwnerofLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721OwnerofLazyQuery>;
export type CodegenGeneratedAdoCw721OwnerofQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721OwnerofQuery, ICodegenGeneratedAdoCw721OwnerofQueryVariables>;
export function refetchCodegenGeneratedAdoCw721OwnerofQuery(variables: ICodegenGeneratedAdoCw721OwnerofQueryVariables) {
      return { query: CodegenGeneratedAdoCw721OwnerofDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721SearchtokensExtensionAttributesDocument, options);
      }
export function useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables>(CodegenGeneratedAdoCw721SearchtokensExtensionAttributesDocument, options);
        }
export type CodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionAttributesLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables>;
export function refetchCodegenGeneratedAdoCw721SearchtokensExtensionAttributesQuery(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionAttributesQueryVariables) {
      return { query: CodegenGeneratedAdoCw721SearchtokensExtensionAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721SearchtokensExtensionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensExtensionQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721SearchtokensExtensionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>(CodegenGeneratedAdoCw721SearchtokensExtensionDocument, options);
      }
export function useCodegenGeneratedAdoCw721SearchtokensExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>(CodegenGeneratedAdoCw721SearchtokensExtensionDocument, options);
        }
export type CodegenGeneratedAdoCw721SearchtokensExtensionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensExtensionLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensExtensionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensExtensionQuery, ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables>;
export function refetchCodegenGeneratedAdoCw721SearchtokensExtensionQuery(variables: ICodegenGeneratedAdoCw721SearchtokensExtensionQueryVariables) {
      return { query: CodegenGeneratedAdoCw721SearchtokensExtensionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721SearchtokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721SearchtokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721SearchtokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721SearchtokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_searchTokens_attributes: // value for 'ADO_cw721_cw721_searchTokens_attributes'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721SearchtokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>(CodegenGeneratedAdoCw721SearchtokensDocument, options);
      }
export function useCodegenGeneratedAdoCw721SearchtokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>(CodegenGeneratedAdoCw721SearchtokensDocument, options);
        }
export type CodegenGeneratedAdoCw721SearchtokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensQuery>;
export type CodegenGeneratedAdoCw721SearchtokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721SearchtokensLazyQuery>;
export type CodegenGeneratedAdoCw721SearchtokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721SearchtokensQuery, ICodegenGeneratedAdoCw721SearchtokensQueryVariables>;
export function refetchCodegenGeneratedAdoCw721SearchtokensQuery(variables: ICodegenGeneratedAdoCw721SearchtokensQueryVariables) {
      return { query: CodegenGeneratedAdoCw721SearchtokensDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721TokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TokensQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_tokens_options: // value for 'ADO_cw721_cw721_tokens_options'
 *      ADO_cw721_cw721_tokens_owner: // value for 'ADO_cw721_cw721_tokens_owner'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721TokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>(CodegenGeneratedAdoCw721TokensDocument, options);
      }
export function useCodegenGeneratedAdoCw721TokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>(CodegenGeneratedAdoCw721TokensDocument, options);
        }
export type CodegenGeneratedAdoCw721TokensQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TokensQuery>;
export type CodegenGeneratedAdoCw721TokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TokensLazyQuery>;
export type CodegenGeneratedAdoCw721TokensQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TokensQuery, ICodegenGeneratedAdoCw721TokensQueryVariables>;
export function refetchCodegenGeneratedAdoCw721TokensQuery(variables: ICodegenGeneratedAdoCw721TokensQueryVariables) {
      return { query: CodegenGeneratedAdoCw721TokensDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument, options);
      }
export function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument, options);
        }
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables>;
export function refetchCodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountRawQueryVariables) {
      return { query: CodegenGeneratedAdoCw721TransferagreementAgreementAmountRawDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument, options);
      }
export function useCodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument, options);
        }
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementAmountLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables>;
export function refetchCodegenGeneratedAdoCw721TransferagreementAgreementAmountQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementAmountQueryVariables) {
      return { query: CodegenGeneratedAdoCw721TransferagreementAgreementAmountDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721TransferagreementAgreementQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementAgreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementAgreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementAgreementQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721TransferagreementAgreementQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementDocument, options);
      }
export function useCodegenGeneratedAdoCw721TransferagreementAgreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>(CodegenGeneratedAdoCw721TransferagreementAgreementDocument, options);
        }
export type CodegenGeneratedAdoCw721TransferagreementAgreementQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementAgreementLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementAgreementQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementAgreementQuery, ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables>;
export function refetchCodegenGeneratedAdoCw721TransferagreementAgreementQuery(variables: ICodegenGeneratedAdoCw721TransferagreementAgreementQueryVariables) {
      return { query: CodegenGeneratedAdoCw721TransferagreementAgreementDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721TransferagreementQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721TransferagreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721TransferagreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721TransferagreementQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721TransferagreementQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>(CodegenGeneratedAdoCw721TransferagreementDocument, options);
      }
export function useCodegenGeneratedAdoCw721TransferagreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>(CodegenGeneratedAdoCw721TransferagreementDocument, options);
        }
export type CodegenGeneratedAdoCw721TransferagreementQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementQuery>;
export type CodegenGeneratedAdoCw721TransferagreementLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721TransferagreementLazyQuery>;
export type CodegenGeneratedAdoCw721TransferagreementQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721TransferagreementQuery, ICodegenGeneratedAdoCw721TransferagreementQueryVariables>;
export function refetchCodegenGeneratedAdoCw721TransferagreementQuery(variables: ICodegenGeneratedAdoCw721TransferagreementQueryVariables) {
      return { query: CodegenGeneratedAdoCw721TransferagreementDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoCw721Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoCw721Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoCw721Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoCw721Query({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoCw721Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>(CodegenGeneratedAdoCw721Document, options);
      }
export function useCodegenGeneratedAdoCw721LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>(CodegenGeneratedAdoCw721Document, options);
        }
export type CodegenGeneratedAdoCw721QueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721Query>;
export type CodegenGeneratedAdoCw721LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoCw721LazyQuery>;
export type CodegenGeneratedAdoCw721QueryResult = Apollo.QueryResult<ICodegenGeneratedAdoCw721Query, ICodegenGeneratedAdoCw721QueryVariables>;
export function refetchCodegenGeneratedAdoCw721Query(variables: ICodegenGeneratedAdoCw721QueryVariables) {
      return { query: CodegenGeneratedAdoCw721Document, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoFactoryAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryAndrIsoperatorQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *      ADO_factory_factory_andr_andr_isOperator_address: // value for 'ADO_factory_factory_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoFactoryAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery, ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery, ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables>(CodegenGeneratedAdoFactoryAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoFactoryAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery, ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery, ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables>(CodegenGeneratedAdoFactoryAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoFactoryAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrIsoperatorQuery>;
export type CodegenGeneratedAdoFactoryAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoFactoryAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryAndrIsoperatorQuery, ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoFactoryAndrIsoperatorQuery(variables: ICodegenGeneratedAdoFactoryAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoFactoryAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoFactoryAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryAndrQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoFactoryAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>(CodegenGeneratedAdoFactoryAndrDocument, options);
      }
export function useCodegenGeneratedAdoFactoryAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>(CodegenGeneratedAdoFactoryAndrDocument, options);
        }
export type CodegenGeneratedAdoFactoryAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrQuery>;
export type CodegenGeneratedAdoFactoryAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryAndrLazyQuery>;
export type CodegenGeneratedAdoFactoryAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryAndrQuery, ICodegenGeneratedAdoFactoryAndrQueryVariables>;
export function refetchCodegenGeneratedAdoFactoryAndrQuery(variables: ICodegenGeneratedAdoFactoryAndrQueryVariables) {
      return { query: CodegenGeneratedAdoFactoryAndrDocument, variables: variables }
    }
export const CodegenGeneratedAdoFactoryCodeIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_FACTORY_CODE_ID($ADO_factory_address: String!, $ADO_factory_factory_code_id_key: String!) {
  ADO {
    factory(address: $ADO_factory_address) {
      code_id(key: $ADO_factory_factory_code_id_key)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoFactoryCodeIdQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryCodeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryCodeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryCodeIdQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *      ADO_factory_factory_code_id_key: // value for 'ADO_factory_factory_code_id_key'
 *   },
 * });
 */
export function useCodegenGeneratedAdoFactoryCodeIdQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>(CodegenGeneratedAdoFactoryCodeIdDocument, options);
      }
export function useCodegenGeneratedAdoFactoryCodeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>(CodegenGeneratedAdoFactoryCodeIdDocument, options);
        }
export type CodegenGeneratedAdoFactoryCodeIdQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryCodeIdQuery>;
export type CodegenGeneratedAdoFactoryCodeIdLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryCodeIdLazyQuery>;
export type CodegenGeneratedAdoFactoryCodeIdQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryCodeIdQuery, ICodegenGeneratedAdoFactoryCodeIdQueryVariables>;
export function refetchCodegenGeneratedAdoFactoryCodeIdQuery(variables: ICodegenGeneratedAdoFactoryCodeIdQueryVariables) {
      return { query: CodegenGeneratedAdoFactoryCodeIdDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoFactoryQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoFactoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoFactoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoFactoryQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoFactoryQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>(CodegenGeneratedAdoFactoryDocument, options);
      }
export function useCodegenGeneratedAdoFactoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>(CodegenGeneratedAdoFactoryDocument, options);
        }
export type CodegenGeneratedAdoFactoryQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryQuery>;
export type CodegenGeneratedAdoFactoryLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoFactoryLazyQuery>;
export type CodegenGeneratedAdoFactoryQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoFactoryQuery, ICodegenGeneratedAdoFactoryQueryVariables>;
export function refetchCodegenGeneratedAdoFactoryQuery(variables: ICodegenGeneratedAdoFactoryQueryVariables) {
      return { query: CodegenGeneratedAdoFactoryDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropAndrIsoperatorQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *      ADO_lockdrop_lockdrop_andr_andr_isOperator_address: // value for 'ADO_lockdrop_lockdrop_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery, ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery, ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables>(CodegenGeneratedAdoLockdropAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoLockdropAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery, ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery, ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables>(CodegenGeneratedAdoLockdropAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoLockdropAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrIsoperatorQuery>;
export type CodegenGeneratedAdoLockdropAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoLockdropAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropAndrIsoperatorQuery, ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropAndrIsoperatorQuery(variables: ICodegenGeneratedAdoLockdropAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropAndrQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>(CodegenGeneratedAdoLockdropAndrDocument, options);
      }
export function useCodegenGeneratedAdoLockdropAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>(CodegenGeneratedAdoLockdropAndrDocument, options);
        }
export type CodegenGeneratedAdoLockdropAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrQuery>;
export type CodegenGeneratedAdoLockdropAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropAndrLazyQuery>;
export type CodegenGeneratedAdoLockdropAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropAndrQuery, ICodegenGeneratedAdoLockdropAndrQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropAndrQuery(variables: ICodegenGeneratedAdoLockdropAndrQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropConfigQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>(CodegenGeneratedAdoLockdropConfigDocument, options);
      }
export function useCodegenGeneratedAdoLockdropConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>(CodegenGeneratedAdoLockdropConfigDocument, options);
        }
export type CodegenGeneratedAdoLockdropConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropConfigQuery>;
export type CodegenGeneratedAdoLockdropConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropConfigLazyQuery>;
export type CodegenGeneratedAdoLockdropConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropConfigQuery, ICodegenGeneratedAdoLockdropConfigQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropConfigQuery(variables: ICodegenGeneratedAdoLockdropConfigQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropStateQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>(CodegenGeneratedAdoLockdropStateDocument, options);
      }
export function useCodegenGeneratedAdoLockdropStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>(CodegenGeneratedAdoLockdropStateDocument, options);
        }
export type CodegenGeneratedAdoLockdropStateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropStateQuery>;
export type CodegenGeneratedAdoLockdropStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropStateLazyQuery>;
export type CodegenGeneratedAdoLockdropStateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropStateQuery, ICodegenGeneratedAdoLockdropStateQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropStateQuery(variables: ICodegenGeneratedAdoLockdropStateQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropStateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropUserinfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropUserinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropUserinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropUserinfoQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *      ADO_lockdrop_lockdrop_userInfo_user: // value for 'ADO_lockdrop_lockdrop_userInfo_user'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropUserinfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>(CodegenGeneratedAdoLockdropUserinfoDocument, options);
      }
export function useCodegenGeneratedAdoLockdropUserinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>(CodegenGeneratedAdoLockdropUserinfoDocument, options);
        }
export type CodegenGeneratedAdoLockdropUserinfoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropUserinfoQuery>;
export type CodegenGeneratedAdoLockdropUserinfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropUserinfoLazyQuery>;
export type CodegenGeneratedAdoLockdropUserinfoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropUserinfoQuery, ICodegenGeneratedAdoLockdropUserinfoQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropUserinfoQuery(variables: ICodegenGeneratedAdoLockdropUserinfoQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropUserinfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *      ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp: // value for 'ADO_lockdrop_lockdrop_withdrawalPercentAllowed_timestamp'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>(CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument, options);
      }
export function useCodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>(CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument, options);
        }
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery>;
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropWithdrawalpercentallowedLazyQuery>;
export type CodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery, ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropWithdrawalpercentallowedQuery(variables: ICodegenGeneratedAdoLockdropWithdrawalpercentallowedQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropWithdrawalpercentallowedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoLockdropQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoLockdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoLockdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoLockdropQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoLockdropQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>(CodegenGeneratedAdoLockdropDocument, options);
      }
export function useCodegenGeneratedAdoLockdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>(CodegenGeneratedAdoLockdropDocument, options);
        }
export type CodegenGeneratedAdoLockdropQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropQuery>;
export type CodegenGeneratedAdoLockdropLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLockdropLazyQuery>;
export type CodegenGeneratedAdoLockdropQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoLockdropQuery, ICodegenGeneratedAdoLockdropQueryVariables>;
export function refetchCodegenGeneratedAdoLockdropQuery(variables: ICodegenGeneratedAdoLockdropQueryVariables) {
      return { query: CodegenGeneratedAdoLockdropDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_andr_andr_isOperator_address: // value for 'ADO_marketplace_marketplace_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery, ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery, ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables>(CodegenGeneratedAdoMarketplaceAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery, ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery, ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables>(CodegenGeneratedAdoMarketplaceAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery>;
export type CodegenGeneratedAdoMarketplaceAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoMarketplaceAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceAndrIsoperatorQuery, ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceAndrIsoperatorQuery(variables: ICodegenGeneratedAdoMarketplaceAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceAndrQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>(CodegenGeneratedAdoMarketplaceAndrDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>(CodegenGeneratedAdoMarketplaceAndrDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrQuery>;
export type CodegenGeneratedAdoMarketplaceAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceAndrLazyQuery>;
export type CodegenGeneratedAdoMarketplaceAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceAndrQuery, ICodegenGeneratedAdoMarketplaceAndrQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceAndrQuery(variables: ICodegenGeneratedAdoMarketplaceAndrQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceLatestsalestateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceLatestsalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceLatestsalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceLatestsalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_latestSaleState_tokenAddress: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenAddress'
 *      ADO_marketplace_marketplace_latestSaleState_tokenId: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceLatestsalestateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>(CodegenGeneratedAdoMarketplaceLatestsalestateDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceLatestsalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>(CodegenGeneratedAdoMarketplaceLatestsalestateDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceLatestsalestateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLatestsalestateQuery>;
export type CodegenGeneratedAdoMarketplaceLatestsalestateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLatestsalestateLazyQuery>;
export type CodegenGeneratedAdoMarketplaceLatestsalestateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceLatestsalestateQuery, ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceLatestsalestateQuery(variables: ICodegenGeneratedAdoMarketplaceLatestsalestateQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceLatestsalestateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceSaleidsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSaleidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSaleidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSaleidsQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleIds_tokenAddress: // value for 'ADO_marketplace_marketplace_saleIds_tokenAddress'
 *      ADO_marketplace_marketplace_saleIds_tokenId: // value for 'ADO_marketplace_marketplace_saleIds_tokenId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceSaleidsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>(CodegenGeneratedAdoMarketplaceSaleidsDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceSaleidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>(CodegenGeneratedAdoMarketplaceSaleidsDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceSaleidsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleidsQuery>;
export type CodegenGeneratedAdoMarketplaceSaleidsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleidsLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSaleidsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleidsQuery, ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceSaleidsQuery(variables: ICodegenGeneratedAdoMarketplaceSaleidsQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceSaleidsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleInfosForAddress_options: // value for 'ADO_marketplace_marketplace_saleInfosForAddress_options'
 *      ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress: // value for 'ADO_marketplace_marketplace_saleInfosForAddress_tokenAddress'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>(CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>(CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery>;
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSaleinfosforaddressLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery, ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceSaleinfosforaddressQuery(variables: ICodegenGeneratedAdoMarketplaceSaleinfosforaddressQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceSaleinfosforaddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceSalestateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceSalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceSalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceSalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleState_saleId: // value for 'ADO_marketplace_marketplace_saleState_saleId'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceSalestateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>(CodegenGeneratedAdoMarketplaceSalestateDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceSalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>(CodegenGeneratedAdoMarketplaceSalestateDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceSalestateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSalestateQuery>;
export type CodegenGeneratedAdoMarketplaceSalestateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceSalestateLazyQuery>;
export type CodegenGeneratedAdoMarketplaceSalestateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceSalestateQuery, ICodegenGeneratedAdoMarketplaceSalestateQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceSalestateQuery(variables: ICodegenGeneratedAdoMarketplaceSalestateQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceSalestateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMarketplaceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMarketplaceQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMarketplaceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>(CodegenGeneratedAdoMarketplaceDocument, options);
      }
export function useCodegenGeneratedAdoMarketplaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>(CodegenGeneratedAdoMarketplaceDocument, options);
        }
export type CodegenGeneratedAdoMarketplaceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceQuery>;
export type CodegenGeneratedAdoMarketplaceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMarketplaceLazyQuery>;
export type CodegenGeneratedAdoMarketplaceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMarketplaceQuery, ICodegenGeneratedAdoMarketplaceQueryVariables>;
export function refetchCodegenGeneratedAdoMarketplaceQuery(variables: ICodegenGeneratedAdoMarketplaceQueryVariables) {
      return { query: CodegenGeneratedAdoMarketplaceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_andr_andr_isOperator_address: // value for 'ADO_merkle_airdrop_merkle_airdrop_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery, ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery, ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables>(CodegenGeneratedAdoMerkleAirdropAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery, ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery, ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables>(CodegenGeneratedAdoMerkleAirdropAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery, ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropAndrIsoperatorQuery(variables: ICodegenGeneratedAdoMerkleAirdropAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropAndrQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>(CodegenGeneratedAdoMerkleAirdropAndrDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>(CodegenGeneratedAdoMerkleAirdropAndrDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropAndrLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropAndrQuery, ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropAndrQuery(variables: ICodegenGeneratedAdoMerkleAirdropAndrQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropConfigQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>(CodegenGeneratedAdoMerkleAirdropConfigDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>(CodegenGeneratedAdoMerkleAirdropConfigDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropConfigQuery>;
export type CodegenGeneratedAdoMerkleAirdropConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropConfigLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropConfigQuery, ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropConfigQuery(variables: ICodegenGeneratedAdoMerkleAirdropConfigQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_isClaimed_address: // value for 'ADO_merkle_airdrop_merkle_airdrop_isClaimed_address'
 *      ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_isClaimed_stage'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>(CodegenGeneratedAdoMerkleAirdropIsclaimedDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropIsclaimedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>(CodegenGeneratedAdoMerkleAirdropIsclaimedDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropIsclaimedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropIsclaimedQuery>;
export type CodegenGeneratedAdoMerkleAirdropIsclaimedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropIsclaimedLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropIsclaimedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropIsclaimedQuery, ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropIsclaimedQuery(variables: ICodegenGeneratedAdoMerkleAirdropIsclaimedQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropIsclaimedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropMerklerootQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropMerklerootQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropMerklerootQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropMerklerootQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropMerklerootQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>(CodegenGeneratedAdoMerkleAirdropMerklerootDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropMerklerootLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>(CodegenGeneratedAdoMerkleAirdropMerklerootDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropMerklerootQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropMerklerootQuery>;
export type CodegenGeneratedAdoMerkleAirdropMerklerootLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropMerklerootLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropMerklerootQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropMerklerootQuery, ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropMerklerootQuery(variables: ICodegenGeneratedAdoMerkleAirdropMerklerootQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropMerklerootDocument, variables: variables }
    }
export const CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO_MERKLE_AIRDROP_TOTALCLAIMED($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: Float!) {
  ADO {
    merkle_airdrop(address: $ADO_merkle_airdrop_address) {
      totalClaimed(stage: $ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage)
    }
  }
}
    `;

/**
 * __useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_totalClaimed_stage'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>(CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>(CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery>;
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropTotalclaimedLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropTotalclaimedQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropTotalclaimedQuery, ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropTotalclaimedQuery(variables: ICodegenGeneratedAdoMerkleAirdropTotalclaimedQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropTotalclaimedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoMerkleAirdropQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoMerkleAirdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoMerkleAirdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoMerkleAirdropQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoMerkleAirdropQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>(CodegenGeneratedAdoMerkleAirdropDocument, options);
      }
export function useCodegenGeneratedAdoMerkleAirdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>(CodegenGeneratedAdoMerkleAirdropDocument, options);
        }
export type CodegenGeneratedAdoMerkleAirdropQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropQuery>;
export type CodegenGeneratedAdoMerkleAirdropLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoMerkleAirdropLazyQuery>;
export type CodegenGeneratedAdoMerkleAirdropQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoMerkleAirdropQuery, ICodegenGeneratedAdoMerkleAirdropQueryVariables>;
export function refetchCodegenGeneratedAdoMerkleAirdropQuery(variables: ICodegenGeneratedAdoMerkleAirdropQueryVariables) {
      return { query: CodegenGeneratedAdoMerkleAirdropDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *      ADO_primitive_primitive_andr_andr_isOperator_address: // value for 'ADO_primitive_primitive_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery, ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery, ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables>(CodegenGeneratedAdoPrimitiveAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoPrimitiveAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery, ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery, ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables>(CodegenGeneratedAdoPrimitiveAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoPrimitiveAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery>;
export type CodegenGeneratedAdoPrimitiveAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoPrimitiveAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveAndrIsoperatorQuery, ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoPrimitiveAndrIsoperatorQuery(variables: ICodegenGeneratedAdoPrimitiveAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoPrimitiveAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoPrimitiveAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveAndrQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoPrimitiveAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>(CodegenGeneratedAdoPrimitiveAndrDocument, options);
      }
export function useCodegenGeneratedAdoPrimitiveAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>(CodegenGeneratedAdoPrimitiveAndrDocument, options);
        }
export type CodegenGeneratedAdoPrimitiveAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrQuery>;
export type CodegenGeneratedAdoPrimitiveAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveAndrLazyQuery>;
export type CodegenGeneratedAdoPrimitiveAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveAndrQuery, ICodegenGeneratedAdoPrimitiveAndrQueryVariables>;
export function refetchCodegenGeneratedAdoPrimitiveAndrQuery(variables: ICodegenGeneratedAdoPrimitiveAndrQueryVariables) {
      return { query: CodegenGeneratedAdoPrimitiveAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoPrimitiveGetvalueQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveGetvalueQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveGetvalueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveGetvalueQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *      ADO_primitive_primitive_getValue_key: // value for 'ADO_primitive_primitive_getValue_key'
 *   },
 * });
 */
export function useCodegenGeneratedAdoPrimitiveGetvalueQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>(CodegenGeneratedAdoPrimitiveGetvalueDocument, options);
      }
export function useCodegenGeneratedAdoPrimitiveGetvalueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>(CodegenGeneratedAdoPrimitiveGetvalueDocument, options);
        }
export type CodegenGeneratedAdoPrimitiveGetvalueQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveGetvalueQuery>;
export type CodegenGeneratedAdoPrimitiveGetvalueLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveGetvalueLazyQuery>;
export type CodegenGeneratedAdoPrimitiveGetvalueQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveGetvalueQuery, ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables>;
export function refetchCodegenGeneratedAdoPrimitiveGetvalueQuery(variables: ICodegenGeneratedAdoPrimitiveGetvalueQueryVariables) {
      return { query: CodegenGeneratedAdoPrimitiveGetvalueDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoPrimitiveQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoPrimitiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoPrimitiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoPrimitiveQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoPrimitiveQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>(CodegenGeneratedAdoPrimitiveDocument, options);
      }
export function useCodegenGeneratedAdoPrimitiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>(CodegenGeneratedAdoPrimitiveDocument, options);
        }
export type CodegenGeneratedAdoPrimitiveQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveQuery>;
export type CodegenGeneratedAdoPrimitiveLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoPrimitiveLazyQuery>;
export type CodegenGeneratedAdoPrimitiveQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoPrimitiveQuery, ICodegenGeneratedAdoPrimitiveQueryVariables>;
export function refetchCodegenGeneratedAdoPrimitiveQuery(variables: ICodegenGeneratedAdoPrimitiveQueryVariables) {
      return { query: CodegenGeneratedAdoPrimitiveDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument, options);
      }
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument, options);
        }
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables>;
export function refetchCodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsQueryVariables) {
      return { query: CodegenGeneratedAdoRateLimitingWithdrawalsAccountdetailsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *      ADO_rate_limiting_withdrawals_rate_limiting_withdrawals_andr_andr_isOperator_address: // value for 'ADO_rate_limiting_withdrawals_rate_limiting_withdrawals_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoRateLimitingWithdrawalsAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument, options);
      }
export function useCodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument, options);
        }
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsAndrLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables>;
export function refetchCodegenGeneratedAdoRateLimitingWithdrawalsAndrQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsAndrQueryVariables) {
      return { query: CodegenGeneratedAdoRateLimitingWithdrawalsAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument, options);
      }
export function useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument, options);
        }
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables>;
export function refetchCodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsQueryVariables) {
      return { query: CodegenGeneratedAdoRateLimitingWithdrawalsCoinallowancedetailsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRateLimitingWithdrawalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRateLimitingWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRateLimitingWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRateLimitingWithdrawalsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRateLimitingWithdrawalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsDocument, options);
      }
export function useCodegenGeneratedAdoRateLimitingWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>(CodegenGeneratedAdoRateLimitingWithdrawalsDocument, options);
        }
export type CodegenGeneratedAdoRateLimitingWithdrawalsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRateLimitingWithdrawalsLazyQuery>;
export type CodegenGeneratedAdoRateLimitingWithdrawalsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRateLimitingWithdrawalsQuery, ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables>;
export function refetchCodegenGeneratedAdoRateLimitingWithdrawalsQuery(variables: ICodegenGeneratedAdoRateLimitingWithdrawalsQueryVariables) {
      return { query: CodegenGeneratedAdoRateLimitingWithdrawalsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesAndrIsoperatorQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *      ADO_rates_rates_andr_andr_isOperator_address: // value for 'ADO_rates_rates_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesAndrIsoperatorQuery, ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesAndrIsoperatorQuery, ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables>(CodegenGeneratedAdoRatesAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoRatesAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesAndrIsoperatorQuery, ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesAndrIsoperatorQuery, ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables>(CodegenGeneratedAdoRatesAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoRatesAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrIsoperatorQuery>;
export type CodegenGeneratedAdoRatesAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoRatesAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesAndrIsoperatorQuery, ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoRatesAndrIsoperatorQuery(variables: ICodegenGeneratedAdoRatesAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoRatesAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesAndrQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>(CodegenGeneratedAdoRatesAndrDocument, options);
      }
export function useCodegenGeneratedAdoRatesAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>(CodegenGeneratedAdoRatesAndrDocument, options);
        }
export type CodegenGeneratedAdoRatesAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrQuery>;
export type CodegenGeneratedAdoRatesAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesAndrLazyQuery>;
export type CodegenGeneratedAdoRatesAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesAndrQuery, ICodegenGeneratedAdoRatesAndrQueryVariables>;
export function refetchCodegenGeneratedAdoRatesAndrQuery(variables: ICodegenGeneratedAdoRatesAndrQueryVariables) {
      return { query: CodegenGeneratedAdoRatesAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesPaymentsRateExternalQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateExternalQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateExternalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateExternalQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesPaymentsRateExternalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateExternalDocument, options);
      }
export function useCodegenGeneratedAdoRatesPaymentsRateExternalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateExternalDocument, options);
        }
export type CodegenGeneratedAdoRatesPaymentsRateExternalQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateExternalQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateExternalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateExternalLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateExternalQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateExternalQuery, ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables>;
export function refetchCodegenGeneratedAdoRatesPaymentsRateExternalQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateExternalQueryVariables) {
      return { query: CodegenGeneratedAdoRatesPaymentsRateExternalDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesPaymentsRateFlatQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateFlatQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateFlatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateFlatQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesPaymentsRateFlatQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateFlatDocument, options);
      }
export function useCodegenGeneratedAdoRatesPaymentsRateFlatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateFlatDocument, options);
        }
export type CodegenGeneratedAdoRatesPaymentsRateFlatQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateFlatQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateFlatLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateFlatLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateFlatQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateFlatQuery, ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables>;
export function refetchCodegenGeneratedAdoRatesPaymentsRateFlatQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateFlatQueryVariables) {
      return { query: CodegenGeneratedAdoRatesPaymentsRateFlatDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesPaymentsRatePercentQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRatePercentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRatePercentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRatePercentQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesPaymentsRatePercentQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>(CodegenGeneratedAdoRatesPaymentsRatePercentDocument, options);
      }
export function useCodegenGeneratedAdoRatesPaymentsRatePercentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>(CodegenGeneratedAdoRatesPaymentsRatePercentDocument, options);
        }
export type CodegenGeneratedAdoRatesPaymentsRatePercentQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRatePercentQuery>;
export type CodegenGeneratedAdoRatesPaymentsRatePercentLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRatePercentLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRatePercentQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRatePercentQuery, ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables>;
export function refetchCodegenGeneratedAdoRatesPaymentsRatePercentQuery(variables: ICodegenGeneratedAdoRatesPaymentsRatePercentQueryVariables) {
      return { query: CodegenGeneratedAdoRatesPaymentsRatePercentDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesPaymentsRateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsRateQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesPaymentsRateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateDocument, options);
      }
export function useCodegenGeneratedAdoRatesPaymentsRateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>(CodegenGeneratedAdoRatesPaymentsRateDocument, options);
        }
export type CodegenGeneratedAdoRatesPaymentsRateQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsRateLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsRateQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsRateQuery, ICodegenGeneratedAdoRatesPaymentsRateQueryVariables>;
export function refetchCodegenGeneratedAdoRatesPaymentsRateQuery(variables: ICodegenGeneratedAdoRatesPaymentsRateQueryVariables) {
      return { query: CodegenGeneratedAdoRatesPaymentsRateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesPaymentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesPaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesPaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesPaymentsQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesPaymentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>(CodegenGeneratedAdoRatesPaymentsDocument, options);
      }
export function useCodegenGeneratedAdoRatesPaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>(CodegenGeneratedAdoRatesPaymentsDocument, options);
        }
export type CodegenGeneratedAdoRatesPaymentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsQuery>;
export type CodegenGeneratedAdoRatesPaymentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesPaymentsLazyQuery>;
export type CodegenGeneratedAdoRatesPaymentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesPaymentsQuery, ICodegenGeneratedAdoRatesPaymentsQueryVariables>;
export function refetchCodegenGeneratedAdoRatesPaymentsQuery(variables: ICodegenGeneratedAdoRatesPaymentsQueryVariables) {
      return { query: CodegenGeneratedAdoRatesPaymentsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoRatesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoRatesQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoRatesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>(CodegenGeneratedAdoRatesDocument, options);
      }
export function useCodegenGeneratedAdoRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>(CodegenGeneratedAdoRatesDocument, options);
        }
export type CodegenGeneratedAdoRatesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesQuery>;
export type CodegenGeneratedAdoRatesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoRatesLazyQuery>;
export type CodegenGeneratedAdoRatesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoRatesQuery, ICodegenGeneratedAdoRatesQueryVariables>;
export function refetchCodegenGeneratedAdoRatesQuery(variables: ICodegenGeneratedAdoRatesQueryVariables) {
      return { query: CodegenGeneratedAdoRatesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoSplitterAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterAndrIsoperatorQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *      ADO_splitter_splitter_andr_andr_isOperator_address: // value for 'ADO_splitter_splitter_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoSplitterAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables>(CodegenGeneratedAdoSplitterAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoSplitterAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables>(CodegenGeneratedAdoSplitterAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoSplitterAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrIsoperatorQuery>;
export type CodegenGeneratedAdoSplitterAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoSplitterAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoSplitterAndrIsoperatorQuery(variables: ICodegenGeneratedAdoSplitterAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoSplitterAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoSplitterAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterAndrQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoSplitterAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>(CodegenGeneratedAdoSplitterAndrDocument, options);
      }
export function useCodegenGeneratedAdoSplitterAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>(CodegenGeneratedAdoSplitterAndrDocument, options);
        }
export type CodegenGeneratedAdoSplitterAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrQuery>;
export type CodegenGeneratedAdoSplitterAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterAndrLazyQuery>;
export type CodegenGeneratedAdoSplitterAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterAndrQuery, ICodegenGeneratedAdoSplitterAndrQueryVariables>;
export function refetchCodegenGeneratedAdoSplitterAndrQuery(variables: ICodegenGeneratedAdoSplitterAndrQueryVariables) {
      return { query: CodegenGeneratedAdoSplitterAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoSplitterConfigRecipientsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterConfigRecipientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterConfigRecipientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterConfigRecipientsQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoSplitterConfigRecipientsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>(CodegenGeneratedAdoSplitterConfigRecipientsDocument, options);
      }
export function useCodegenGeneratedAdoSplitterConfigRecipientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>(CodegenGeneratedAdoSplitterConfigRecipientsDocument, options);
        }
export type CodegenGeneratedAdoSplitterConfigRecipientsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigRecipientsQuery>;
export type CodegenGeneratedAdoSplitterConfigRecipientsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigRecipientsLazyQuery>;
export type CodegenGeneratedAdoSplitterConfigRecipientsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigRecipientsQuery, ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables>;
export function refetchCodegenGeneratedAdoSplitterConfigRecipientsQuery(variables: ICodegenGeneratedAdoSplitterConfigRecipientsQueryVariables) {
      return { query: CodegenGeneratedAdoSplitterConfigRecipientsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoSplitterConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterConfigQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoSplitterConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>(CodegenGeneratedAdoSplitterConfigDocument, options);
      }
export function useCodegenGeneratedAdoSplitterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>(CodegenGeneratedAdoSplitterConfigDocument, options);
        }
export type CodegenGeneratedAdoSplitterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigQuery>;
export type CodegenGeneratedAdoSplitterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterConfigLazyQuery>;
export type CodegenGeneratedAdoSplitterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterConfigQuery, ICodegenGeneratedAdoSplitterConfigQueryVariables>;
export function refetchCodegenGeneratedAdoSplitterConfigQuery(variables: ICodegenGeneratedAdoSplitterConfigQueryVariables) {
      return { query: CodegenGeneratedAdoSplitterConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoSplitterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoSplitterQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoSplitterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>(CodegenGeneratedAdoSplitterDocument, options);
      }
export function useCodegenGeneratedAdoSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>(CodegenGeneratedAdoSplitterDocument, options);
        }
export type CodegenGeneratedAdoSplitterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterQuery>;
export type CodegenGeneratedAdoSplitterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoSplitterLazyQuery>;
export type CodegenGeneratedAdoSplitterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoSplitterQuery, ICodegenGeneratedAdoSplitterQueryVariables>;
export function refetchCodegenGeneratedAdoSplitterQuery(variables: ICodegenGeneratedAdoSplitterQueryVariables) {
      return { query: CodegenGeneratedAdoSplitterDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockAndrIsoperatorQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_andr_andr_isOperator_address: // value for 'ADO_timelock_timelock_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery, ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery, ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables>(CodegenGeneratedAdoTimelockAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoTimelockAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery, ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery, ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables>(CodegenGeneratedAdoTimelockAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoTimelockAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrIsoperatorQuery>;
export type CodegenGeneratedAdoTimelockAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoTimelockAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockAndrIsoperatorQuery, ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockAndrIsoperatorQuery(variables: ICodegenGeneratedAdoTimelockAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockAndrQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>(CodegenGeneratedAdoTimelockAndrDocument, options);
      }
export function useCodegenGeneratedAdoTimelockAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>(CodegenGeneratedAdoTimelockAndrDocument, options);
        }
export type CodegenGeneratedAdoTimelockAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrQuery>;
export type CodegenGeneratedAdoTimelockAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockAndrLazyQuery>;
export type CodegenGeneratedAdoTimelockAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockAndrQuery, ICodegenGeneratedAdoTimelockAndrQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockAndrQuery(variables: ICodegenGeneratedAdoTimelockAndrQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsCoinsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsCoinsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsCoinsQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsCoinsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsConditionMiniumfundsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsConditionLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsConditionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsConditionQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsConditionQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsConditionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsforrecipientCoinsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionMiniumfundsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsforrecipientConditionDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_options: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_options'
 *      ADO_timelock_timelock_getLockedFundsForRecipient_recipient: // value for 'ADO_timelock_timelock_getLockedFundsForRecipient_recipient'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument, options);
      }
export function useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>(CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument, options);
        }
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockGetlockedfundsforrecipientLazyQuery>;
export type CodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery, ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockGetlockedfundsforrecipientQuery(variables: ICodegenGeneratedAdoTimelockGetlockedfundsforrecipientQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockGetlockedfundsforrecipientDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoTimelockQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoTimelockQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoTimelockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoTimelockQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoTimelockQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>(CodegenGeneratedAdoTimelockDocument, options);
      }
export function useCodegenGeneratedAdoTimelockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>(CodegenGeneratedAdoTimelockDocument, options);
        }
export type CodegenGeneratedAdoTimelockQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockQuery>;
export type CodegenGeneratedAdoTimelockLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoTimelockLazyQuery>;
export type CodegenGeneratedAdoTimelockQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoTimelockQuery, ICodegenGeneratedAdoTimelockQueryVariables>;
export function refetchCodegenGeneratedAdoTimelockQuery(variables: ICodegenGeneratedAdoTimelockQueryVariables) {
      return { query: CodegenGeneratedAdoTimelockDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVaultAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultAndrIsoperatorQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_andr_andr_isOperator_address: // value for 'ADO_vault_vault_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVaultAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultAndrIsoperatorQuery, ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVaultAndrIsoperatorQuery, ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables>(CodegenGeneratedAdoVaultAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoVaultAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultAndrIsoperatorQuery, ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVaultAndrIsoperatorQuery, ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables>(CodegenGeneratedAdoVaultAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoVaultAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrIsoperatorQuery>;
export type CodegenGeneratedAdoVaultAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoVaultAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultAndrIsoperatorQuery, ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoVaultAndrIsoperatorQuery(variables: ICodegenGeneratedAdoVaultAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoVaultAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVaultAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultAndrQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVaultAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>(CodegenGeneratedAdoVaultAndrDocument, options);
      }
export function useCodegenGeneratedAdoVaultAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>(CodegenGeneratedAdoVaultAndrDocument, options);
        }
export type CodegenGeneratedAdoVaultAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrQuery>;
export type CodegenGeneratedAdoVaultAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultAndrLazyQuery>;
export type CodegenGeneratedAdoVaultAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultAndrQuery, ICodegenGeneratedAdoVaultAndrQueryVariables>;
export function refetchCodegenGeneratedAdoVaultAndrQuery(variables: ICodegenGeneratedAdoVaultAndrQueryVariables) {
      return { query: CodegenGeneratedAdoVaultAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVaultBalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultBalanceQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_balance_address: // value for 'ADO_vault_vault_balance_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVaultBalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>(CodegenGeneratedAdoVaultBalanceDocument, options);
      }
export function useCodegenGeneratedAdoVaultBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>(CodegenGeneratedAdoVaultBalanceDocument, options);
        }
export type CodegenGeneratedAdoVaultBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultBalanceQuery>;
export type CodegenGeneratedAdoVaultBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultBalanceLazyQuery>;
export type CodegenGeneratedAdoVaultBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultBalanceQuery, ICodegenGeneratedAdoVaultBalanceQueryVariables>;
export function refetchCodegenGeneratedAdoVaultBalanceQuery(variables: ICodegenGeneratedAdoVaultBalanceQueryVariables) {
      return { query: CodegenGeneratedAdoVaultBalanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVaultStrategyaddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultStrategyaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultStrategyaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultStrategyaddressQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_strategyAddress_strategy: // value for 'ADO_vault_vault_strategyAddress_strategy'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVaultStrategyaddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>(CodegenGeneratedAdoVaultStrategyaddressDocument, options);
      }
export function useCodegenGeneratedAdoVaultStrategyaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>(CodegenGeneratedAdoVaultStrategyaddressDocument, options);
        }
export type CodegenGeneratedAdoVaultStrategyaddressQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultStrategyaddressQuery>;
export type CodegenGeneratedAdoVaultStrategyaddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultStrategyaddressLazyQuery>;
export type CodegenGeneratedAdoVaultStrategyaddressQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultStrategyaddressQuery, ICodegenGeneratedAdoVaultStrategyaddressQueryVariables>;
export function refetchCodegenGeneratedAdoVaultStrategyaddressQuery(variables: ICodegenGeneratedAdoVaultStrategyaddressQueryVariables) {
      return { query: CodegenGeneratedAdoVaultStrategyaddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVaultQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVaultQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVaultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVaultQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVaultQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>(CodegenGeneratedAdoVaultDocument, options);
      }
export function useCodegenGeneratedAdoVaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>(CodegenGeneratedAdoVaultDocument, options);
        }
export type CodegenGeneratedAdoVaultQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultQuery>;
export type CodegenGeneratedAdoVaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVaultLazyQuery>;
export type CodegenGeneratedAdoVaultQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVaultQuery, ICodegenGeneratedAdoVaultQueryVariables>;
export function refetchCodegenGeneratedAdoVaultQuery(variables: ICodegenGeneratedAdoVaultQueryVariables) {
      return { query: CodegenGeneratedAdoVaultDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingAndrIsoperatorQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *      ADO_vesting_vesting_andr_andr_isOperator_address: // value for 'ADO_vesting_vesting_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingAndrIsoperatorQuery, ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingAndrIsoperatorQuery, ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables>(CodegenGeneratedAdoVestingAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoVestingAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingAndrIsoperatorQuery, ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingAndrIsoperatorQuery, ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables>(CodegenGeneratedAdoVestingAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoVestingAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrIsoperatorQuery>;
export type CodegenGeneratedAdoVestingAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoVestingAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingAndrIsoperatorQuery, ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoVestingAndrIsoperatorQuery(variables: ICodegenGeneratedAdoVestingAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoVestingAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingAndrQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>(CodegenGeneratedAdoVestingAndrDocument, options);
      }
export function useCodegenGeneratedAdoVestingAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>(CodegenGeneratedAdoVestingAndrDocument, options);
        }
export type CodegenGeneratedAdoVestingAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrQuery>;
export type CodegenGeneratedAdoVestingAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingAndrLazyQuery>;
export type CodegenGeneratedAdoVestingAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingAndrQuery, ICodegenGeneratedAdoVestingAndrQueryVariables>;
export function refetchCodegenGeneratedAdoVestingAndrQuery(variables: ICodegenGeneratedAdoVestingAndrQueryVariables) {
      return { query: CodegenGeneratedAdoVestingAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingBatchQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingBatchQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *      ADO_vesting_vesting_batch_id: // value for 'ADO_vesting_vesting_batch_id'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingBatchQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>(CodegenGeneratedAdoVestingBatchDocument, options);
      }
export function useCodegenGeneratedAdoVestingBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>(CodegenGeneratedAdoVestingBatchDocument, options);
        }
export type CodegenGeneratedAdoVestingBatchQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchQuery>;
export type CodegenGeneratedAdoVestingBatchLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchLazyQuery>;
export type CodegenGeneratedAdoVestingBatchQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchQuery, ICodegenGeneratedAdoVestingBatchQueryVariables>;
export function refetchCodegenGeneratedAdoVestingBatchQuery(variables: ICodegenGeneratedAdoVestingBatchQueryVariables) {
      return { query: CodegenGeneratedAdoVestingBatchDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingBatchesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingBatchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingBatchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingBatchesQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingBatchesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>(CodegenGeneratedAdoVestingBatchesDocument, options);
      }
export function useCodegenGeneratedAdoVestingBatchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>(CodegenGeneratedAdoVestingBatchesDocument, options);
        }
export type CodegenGeneratedAdoVestingBatchesQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchesQuery>;
export type CodegenGeneratedAdoVestingBatchesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingBatchesLazyQuery>;
export type CodegenGeneratedAdoVestingBatchesQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingBatchesQuery, ICodegenGeneratedAdoVestingBatchesQueryVariables>;
export function refetchCodegenGeneratedAdoVestingBatchesQuery(variables: ICodegenGeneratedAdoVestingBatchesQueryVariables) {
      return { query: CodegenGeneratedAdoVestingBatchesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingConfigQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>(CodegenGeneratedAdoVestingConfigDocument, options);
      }
export function useCodegenGeneratedAdoVestingConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>(CodegenGeneratedAdoVestingConfigDocument, options);
        }
export type CodegenGeneratedAdoVestingConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingConfigQuery>;
export type CodegenGeneratedAdoVestingConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingConfigLazyQuery>;
export type CodegenGeneratedAdoVestingConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingConfigQuery, ICodegenGeneratedAdoVestingConfigQueryVariables>;
export function refetchCodegenGeneratedAdoVestingConfigQuery(variables: ICodegenGeneratedAdoVestingConfigQueryVariables) {
      return { query: CodegenGeneratedAdoVestingConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoVestingQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoVestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoVestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoVestingQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoVestingQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>(CodegenGeneratedAdoVestingDocument, options);
      }
export function useCodegenGeneratedAdoVestingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>(CodegenGeneratedAdoVestingDocument, options);
        }
export type CodegenGeneratedAdoVestingQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingQuery>;
export type CodegenGeneratedAdoVestingLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoVestingLazyQuery>;
export type CodegenGeneratedAdoVestingQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoVestingQuery, ICodegenGeneratedAdoVestingQueryVariables>;
export function refetchCodegenGeneratedAdoVestingQuery(variables: ICodegenGeneratedAdoVestingQueryVariables) {
      return { query: CodegenGeneratedAdoVestingDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *      ADO_weighted_distribution_splitter_weighted_distribution_splitter_andr_andr_isOperator_address: // value for 'ADO_weighted_distribution_splitter_weighted_distribution_splitter_andr_andr_isOperator_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterAndrIsoperatorDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterAndrLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterAndrQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterAndrQuery, ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterAndrQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterAndrQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterAndrDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterConfigRecipientsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterConfigLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterConfigQuery, ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterConfigQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterConfigQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *      ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: // value for 'ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery, ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterGetuserweightQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterGetuserweightDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdoWeightedDistributionSplitterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoWeightedDistributionSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoWeightedDistributionSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoWeightedDistributionSplitterQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export function useCodegenGeneratedAdoWeightedDistributionSplitterQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterDocument, options);
      }
export function useCodegenGeneratedAdoWeightedDistributionSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>(CodegenGeneratedAdoWeightedDistributionSplitterDocument, options);
        }
export type CodegenGeneratedAdoWeightedDistributionSplitterQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoWeightedDistributionSplitterLazyQuery>;
export type CodegenGeneratedAdoWeightedDistributionSplitterQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoWeightedDistributionSplitterQuery, ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables>;
export function refetchCodegenGeneratedAdoWeightedDistributionSplitterQuery(variables: ICodegenGeneratedAdoWeightedDistributionSplitterQueryVariables) {
      return { query: CodegenGeneratedAdoWeightedDistributionSplitterDocument, variables: variables }
    }
export const CodegenGeneratedAdoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADO {
  ADO {
    receipt
  }
}
    `;

/**
 * __useCodegenGeneratedAdoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdoQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedAdoQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>(CodegenGeneratedAdoDocument, options);
      }
export function useCodegenGeneratedAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>(CodegenGeneratedAdoDocument, options);
        }
export type CodegenGeneratedAdoQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoQuery>;
export type CodegenGeneratedAdoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdoLazyQuery>;
export type CodegenGeneratedAdoQueryResult = Apollo.QueryResult<ICodegenGeneratedAdoQuery, ICodegenGeneratedAdoQueryVariables>;
export function refetchCodegenGeneratedAdoQuery(variables?: ICodegenGeneratedAdoQueryVariables) {
      return { query: CodegenGeneratedAdoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdopPackageSchemasReceiveQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageSchemasReceiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageSchemasReceiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageSchemasReceiveQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export function useCodegenGeneratedAdopPackageSchemasReceiveQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>(CodegenGeneratedAdopPackageSchemasReceiveDocument, options);
      }
export function useCodegenGeneratedAdopPackageSchemasReceiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>(CodegenGeneratedAdopPackageSchemasReceiveDocument, options);
        }
export type CodegenGeneratedAdopPackageSchemasReceiveQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasReceiveQuery>;
export type CodegenGeneratedAdopPackageSchemasReceiveLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasReceiveLazyQuery>;
export type CodegenGeneratedAdopPackageSchemasReceiveQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasReceiveQuery, ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables>;
export function refetchCodegenGeneratedAdopPackageSchemasReceiveQuery(variables: ICodegenGeneratedAdopPackageSchemasReceiveQueryVariables) {
      return { query: CodegenGeneratedAdopPackageSchemasReceiveDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdopPackageSchemasQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageSchemasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageSchemasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageSchemasQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export function useCodegenGeneratedAdopPackageSchemasQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>(CodegenGeneratedAdopPackageSchemasDocument, options);
      }
export function useCodegenGeneratedAdopPackageSchemasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>(CodegenGeneratedAdopPackageSchemasDocument, options);
        }
export type CodegenGeneratedAdopPackageSchemasQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasQuery>;
export type CodegenGeneratedAdopPackageSchemasLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageSchemasLazyQuery>;
export type CodegenGeneratedAdopPackageSchemasQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageSchemasQuery, ICodegenGeneratedAdopPackageSchemasQueryVariables>;
export function refetchCodegenGeneratedAdopPackageSchemasQuery(variables: ICodegenGeneratedAdopPackageSchemasQueryVariables) {
      return { query: CodegenGeneratedAdopPackageSchemasDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAdopPackageQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopPackageQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export function useCodegenGeneratedAdopPackageQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>(CodegenGeneratedAdopPackageDocument, options);
      }
export function useCodegenGeneratedAdopPackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>(CodegenGeneratedAdopPackageDocument, options);
        }
export type CodegenGeneratedAdopPackageQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageQuery>;
export type CodegenGeneratedAdopPackageLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopPackageLazyQuery>;
export type CodegenGeneratedAdopPackageQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopPackageQuery, ICodegenGeneratedAdopPackageQueryVariables>;
export function refetchCodegenGeneratedAdopPackageQuery(variables: ICodegenGeneratedAdopPackageQueryVariables) {
      return { query: CodegenGeneratedAdopPackageDocument, variables: variables }
    }
export const CodegenGeneratedAdopDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ADOP {
  ADOP {
    adoTypes
  }
}
    `;

/**
 * __useCodegenGeneratedAdopQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAdopQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAdopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAdopQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedAdopQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>(CodegenGeneratedAdopDocument, options);
      }
export function useCodegenGeneratedAdopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>(CodegenGeneratedAdopDocument, options);
        }
export type CodegenGeneratedAdopQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopQuery>;
export type CodegenGeneratedAdopLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAdopLazyQuery>;
export type CodegenGeneratedAdopQueryResult = Apollo.QueryResult<ICodegenGeneratedAdopQuery, ICodegenGeneratedAdopQueryVariables>;
export function refetchCodegenGeneratedAdopQuery(variables?: ICodegenGeneratedAdopQueryVariables) {
      return { query: CodegenGeneratedAdopDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAccountsAssetsComponentsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsAssetsComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsAssetsComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsAssetsComponentsQuery({
 *   variables: {
 *      accounts_assets_adoType: // value for 'accounts_assets_adoType'
 *      accounts_assets_limit: // value for 'accounts_assets_limit'
 *      accounts_assets_offset: // value for 'accounts_assets_offset'
 *      accounts_assets_orderBy: // value for 'accounts_assets_orderBy'
 *      accounts_assets_search: // value for 'accounts_assets_search'
 *      accounts_assets_walletAddress: // value for 'accounts_assets_walletAddress'
 *      accounts_assets_assets_components_componentType: // value for 'accounts_assets_assets_components_componentType'
 *      accounts_assets_assets_components_limit: // value for 'accounts_assets_assets_components_limit'
 *      accounts_assets_assets_components_offset: // value for 'accounts_assets_assets_components_offset'
 *   },
 * });
 */
export function useCodegenGeneratedAccountsAssetsComponentsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>(CodegenGeneratedAccountsAssetsComponentsDocument, options);
      }
export function useCodegenGeneratedAccountsAssetsComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>(CodegenGeneratedAccountsAssetsComponentsDocument, options);
        }
export type CodegenGeneratedAccountsAssetsComponentsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsComponentsQuery>;
export type CodegenGeneratedAccountsAssetsComponentsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsComponentsLazyQuery>;
export type CodegenGeneratedAccountsAssetsComponentsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsAssetsComponentsQuery, ICodegenGeneratedAccountsAssetsComponentsQueryVariables>;
export function refetchCodegenGeneratedAccountsAssetsComponentsQuery(variables: ICodegenGeneratedAccountsAssetsComponentsQueryVariables) {
      return { query: CodegenGeneratedAccountsAssetsComponentsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedAccountsAssetsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsAssetsQuery({
 *   variables: {
 *      accounts_assets_adoType: // value for 'accounts_assets_adoType'
 *      accounts_assets_limit: // value for 'accounts_assets_limit'
 *      accounts_assets_offset: // value for 'accounts_assets_offset'
 *      accounts_assets_orderBy: // value for 'accounts_assets_orderBy'
 *      accounts_assets_search: // value for 'accounts_assets_search'
 *      accounts_assets_walletAddress: // value for 'accounts_assets_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedAccountsAssetsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>(CodegenGeneratedAccountsAssetsDocument, options);
      }
export function useCodegenGeneratedAccountsAssetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>(CodegenGeneratedAccountsAssetsDocument, options);
        }
export type CodegenGeneratedAccountsAssetsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsQuery>;
export type CodegenGeneratedAccountsAssetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsAssetsLazyQuery>;
export type CodegenGeneratedAccountsAssetsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsAssetsQuery, ICodegenGeneratedAccountsAssetsQueryVariables>;
export function refetchCodegenGeneratedAccountsAssetsQuery(variables: ICodegenGeneratedAccountsAssetsQueryVariables) {
      return { query: CodegenGeneratedAccountsAssetsDocument, variables: variables }
    }
export const CodegenGeneratedAccountsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ACCOUNTS {
  accounts {
    wallets
  }
}
    `;

/**
 * __useCodegenGeneratedAccountsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedAccountsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>(CodegenGeneratedAccountsDocument, options);
      }
export function useCodegenGeneratedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>(CodegenGeneratedAccountsDocument, options);
        }
export type CodegenGeneratedAccountsQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsQuery>;
export type CodegenGeneratedAccountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedAccountsLazyQuery>;
export type CodegenGeneratedAccountsQueryResult = Apollo.QueryResult<ICodegenGeneratedAccountsQuery, ICodegenGeneratedAccountsQueryVariables>;
export function refetchCodegenGeneratedAccountsQuery(variables?: ICodegenGeneratedAccountsQueryVariables) {
      return { query: CodegenGeneratedAccountsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>(CodegenGeneratedChainconfigsAllconfigsIconurlsDocument, options);
      }
export function useCodegenGeneratedChainconfigsAllconfigsIconurlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>(CodegenGeneratedChainconfigsAllconfigsIconurlsDocument, options);
        }
export type CodegenGeneratedChainconfigsAllconfigsIconurlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsIconurlsQuery>;
export type CodegenGeneratedChainconfigsAllconfigsIconurlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsIconurlsLazyQuery>;
export type CodegenGeneratedChainconfigsAllconfigsIconurlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsIconurlsQuery, ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables>;
export function refetchCodegenGeneratedChainconfigsAllconfigsIconurlsQuery(variables?: ICodegenGeneratedChainconfigsAllconfigsIconurlsQueryVariables) {
      return { query: CodegenGeneratedChainconfigsAllconfigsIconurlsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainconfigsAllconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsAllconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsAllconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsAllconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainconfigsAllconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>(CodegenGeneratedChainconfigsAllconfigsDocument, options);
      }
export function useCodegenGeneratedChainconfigsAllconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>(CodegenGeneratedChainconfigsAllconfigsDocument, options);
        }
export type CodegenGeneratedChainconfigsAllconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsQuery>;
export type CodegenGeneratedChainconfigsAllconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsAllconfigsLazyQuery>;
export type CodegenGeneratedChainconfigsAllconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsAllconfigsQuery, ICodegenGeneratedChainconfigsAllconfigsQueryVariables>;
export function refetchCodegenGeneratedChainconfigsAllconfigsQuery(variables?: ICodegenGeneratedChainconfigsAllconfigsQueryVariables) {
      return { query: CodegenGeneratedChainconfigsAllconfigsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainconfigsConfigIconurlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsConfigIconurlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsConfigIconurlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsConfigIconurlsQuery({
 *   variables: {
 *      chainConfigs_config_identifier: // value for 'chainConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedChainconfigsConfigIconurlsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>(CodegenGeneratedChainconfigsConfigIconurlsDocument, options);
      }
export function useCodegenGeneratedChainconfigsConfigIconurlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>(CodegenGeneratedChainconfigsConfigIconurlsDocument, options);
        }
export type CodegenGeneratedChainconfigsConfigIconurlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigIconurlsQuery>;
export type CodegenGeneratedChainconfigsConfigIconurlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigIconurlsLazyQuery>;
export type CodegenGeneratedChainconfigsConfigIconurlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigIconurlsQuery, ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables>;
export function refetchCodegenGeneratedChainconfigsConfigIconurlsQuery(variables: ICodegenGeneratedChainconfigsConfigIconurlsQueryVariables) {
      return { query: CodegenGeneratedChainconfigsConfigIconurlsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainconfigsConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsConfigQuery({
 *   variables: {
 *      chainConfigs_config_identifier: // value for 'chainConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedChainconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>(CodegenGeneratedChainconfigsConfigDocument, options);
      }
export function useCodegenGeneratedChainconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>(CodegenGeneratedChainconfigsConfigDocument, options);
        }
export type CodegenGeneratedChainconfigsConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigQuery>;
export type CodegenGeneratedChainconfigsConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsConfigLazyQuery>;
export type CodegenGeneratedChainconfigsConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsConfigQuery, ICodegenGeneratedChainconfigsConfigQueryVariables>;
export function refetchCodegenGeneratedChainconfigsConfigQuery(variables: ICodegenGeneratedChainconfigsConfigQueryVariables) {
      return { query: CodegenGeneratedChainconfigsConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>(CodegenGeneratedChainconfigsDocument, options);
      }
export function useCodegenGeneratedChainconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>(CodegenGeneratedChainconfigsDocument, options);
        }
export type CodegenGeneratedChainconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsQuery>;
export type CodegenGeneratedChainconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainconfigsLazyQuery>;
export type CodegenGeneratedChainconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainconfigsQuery, ICodegenGeneratedChainconfigsQueryVariables>;
export function refetchCodegenGeneratedChainconfigsQuery(variables?: ICodegenGeneratedChainconfigsQueryVariables) {
      return { query: CodegenGeneratedChainconfigsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery, ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBech32ConfigQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsBech32ConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsBip44Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsBip44Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsBip44Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsBip44Query({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsBip44Query(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsBip44Document, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsBip44Document, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBip44Query>;
export type CodegenGeneratedKeplrconfigsAllconfigsBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsBip44LazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsBip44Query, ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsBip44Query(variables?: ICodegenGeneratedKeplrconfigsAllconfigsBip44QueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsBip44Document, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsCurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsCurrenciesQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsCurrenciesQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsCurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsFeecurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsGaspricestepLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery, ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsGaspricestepQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsGaspricestepQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsGaspricestepDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery, ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsStakecurrencyQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsStakecurrencyDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsAllconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsAllconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsAllconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsAllconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsAllconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsAllconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>(CodegenGeneratedKeplrconfigsAllconfigsDocument, options);
        }
export type CodegenGeneratedKeplrconfigsAllconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsAllconfigsLazyQuery>;
export type CodegenGeneratedKeplrconfigsAllconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsAllconfigsQuery, ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsAllconfigsQuery(variables?: ICodegenGeneratedKeplrconfigsAllconfigsQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsAllconfigsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>(CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>(CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery>;
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBech32ConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBech32ConfigQuery, ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigBech32ConfigQuery(variables: ICodegenGeneratedKeplrconfigsConfigBech32ConfigQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigBech32ConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigBip44Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigBip44Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigBip44Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigBip44Query({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigBip44Query(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>(CodegenGeneratedKeplrconfigsConfigBip44Document, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>(CodegenGeneratedKeplrconfigsConfigBip44Document, options);
        }
export type CodegenGeneratedKeplrconfigsConfigBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBip44Query>;
export type CodegenGeneratedKeplrconfigsConfigBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigBip44LazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigBip44Query, ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigBip44Query(variables: ICodegenGeneratedKeplrconfigsConfigBip44QueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigBip44Document, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsConfigCurrenciesDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsConfigCurrenciesDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigCurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsConfigCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigCurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigCurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigCurrenciesQuery(variables: ICodegenGeneratedKeplrconfigsConfigCurrenciesQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigCurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>(CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery>;
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigFeecurrenciesLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery, ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigFeecurrenciesQuery(variables: ICodegenGeneratedKeplrconfigsConfigFeecurrenciesQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigFeecurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>(CodegenGeneratedKeplrconfigsConfigGaspricestepDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>(CodegenGeneratedKeplrconfigsConfigGaspricestepDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigGaspricestepQuery>;
export type CodegenGeneratedKeplrconfigsConfigGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigGaspricestepLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigGaspricestepQuery, ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigGaspricestepQuery(variables: ICodegenGeneratedKeplrconfigsConfigGaspricestepQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigGaspricestepDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>(CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>(CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery>;
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigStakecurrencyLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigStakecurrencyQuery, ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigStakecurrencyQuery(variables: ICodegenGeneratedKeplrconfigsConfigStakecurrencyQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigStakecurrencyDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsConfigQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>(CodegenGeneratedKeplrconfigsConfigDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>(CodegenGeneratedKeplrconfigsConfigDocument, options);
        }
export type CodegenGeneratedKeplrconfigsConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigQuery>;
export type CodegenGeneratedKeplrconfigsConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsConfigLazyQuery>;
export type CodegenGeneratedKeplrconfigsConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsConfigQuery, ICodegenGeneratedKeplrconfigsConfigQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsConfigQuery(variables: ICodegenGeneratedKeplrconfigsConfigQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedKeplrconfigsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedKeplrconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedKeplrconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedKeplrconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedKeplrconfigsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>(CodegenGeneratedKeplrconfigsDocument, options);
      }
export function useCodegenGeneratedKeplrconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>(CodegenGeneratedKeplrconfigsDocument, options);
        }
export type CodegenGeneratedKeplrconfigsQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsQuery>;
export type CodegenGeneratedKeplrconfigsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedKeplrconfigsLazyQuery>;
export type CodegenGeneratedKeplrconfigsQueryResult = Apollo.QueryResult<ICodegenGeneratedKeplrconfigsQuery, ICodegenGeneratedKeplrconfigsQueryVariables>;
export function refetchCodegenGeneratedKeplrconfigsQuery(variables?: ICodegenGeneratedKeplrconfigsQueryVariables) {
      return { query: CodegenGeneratedKeplrconfigsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>(CodegenGeneratedTxByaccountEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByaccountEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>(CodegenGeneratedTxByaccountEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByaccountEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsAttributesQuery>;
export type CodegenGeneratedTxByaccountEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByaccountEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsAttributesQuery, ICodegenGeneratedTxByaccountEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByaccountEventsAttributesQuery(variables: ICodegenGeneratedTxByaccountEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByaccountEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>(CodegenGeneratedTxByaccountEventsDocument, options);
      }
export function useCodegenGeneratedTxByaccountEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>(CodegenGeneratedTxByaccountEventsDocument, options);
        }
export type CodegenGeneratedTxByaccountEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsQuery>;
export type CodegenGeneratedTxByaccountEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountEventsLazyQuery>;
export type CodegenGeneratedTxByaccountEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountEventsQuery, ICodegenGeneratedTxByaccountEventsQueryVariables>;
export function refetchCodegenGeneratedTxByaccountEventsQuery(variables: ICodegenGeneratedTxByaccountEventsQueryVariables) {
      return { query: CodegenGeneratedTxByaccountEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByaccountTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByaccountTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByaccountTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByaccountTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsAttributesQuery, ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByaccountTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByaccountTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByaccountTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>(CodegenGeneratedTxByaccountTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxByaccountTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>(CodegenGeneratedTxByaccountTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxByaccountTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogEventsQuery, ICodegenGeneratedTxByaccountTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxByaccountTxlogEventsQuery(variables: ICodegenGeneratedTxByaccountTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxByaccountTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>(CodegenGeneratedTxByaccountTxlogDocument, options);
      }
export function useCodegenGeneratedTxByaccountTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>(CodegenGeneratedTxByaccountTxlogDocument, options);
        }
export type CodegenGeneratedTxByaccountTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogQuery>;
export type CodegenGeneratedTxByaccountTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountTxlogLazyQuery>;
export type CodegenGeneratedTxByaccountTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountTxlogQuery, ICodegenGeneratedTxByaccountTxlogQueryVariables>;
export function refetchCodegenGeneratedTxByaccountTxlogQuery(variables: ICodegenGeneratedTxByaccountTxlogQueryVariables) {
      return { query: CodegenGeneratedTxByaccountTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByaccountQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByaccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByaccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByaccountQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byAccount_maxHeight: // value for 'tx_byAccount_maxHeight'
 *      tx_byAccount_minHeight: // value for 'tx_byAccount_minHeight'
 *      tx_byAccount_sentFromOrTo: // value for 'tx_byAccount_sentFromOrTo'
 *   },
 * });
 */
export function useCodegenGeneratedTxByaccountQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>(CodegenGeneratedTxByaccountDocument, options);
      }
export function useCodegenGeneratedTxByaccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>(CodegenGeneratedTxByaccountDocument, options);
        }
export type CodegenGeneratedTxByaccountQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountQuery>;
export type CodegenGeneratedTxByaccountLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByaccountLazyQuery>;
export type CodegenGeneratedTxByaccountQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByaccountQuery, ICodegenGeneratedTxByaccountQueryVariables>;
export function refetchCodegenGeneratedTxByaccountQuery(variables: ICodegenGeneratedTxByaccountQueryVariables) {
      return { query: CodegenGeneratedTxByaccountDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>(CodegenGeneratedTxBycontractEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxBycontractEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>(CodegenGeneratedTxBycontractEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxBycontractEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsAttributesQuery>;
export type CodegenGeneratedTxBycontractEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBycontractEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsAttributesQuery, ICodegenGeneratedTxBycontractEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxBycontractEventsAttributesQuery(variables: ICodegenGeneratedTxBycontractEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxBycontractEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>(CodegenGeneratedTxBycontractEventsDocument, options);
      }
export function useCodegenGeneratedTxBycontractEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>(CodegenGeneratedTxBycontractEventsDocument, options);
        }
export type CodegenGeneratedTxBycontractEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsQuery>;
export type CodegenGeneratedTxBycontractEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractEventsLazyQuery>;
export type CodegenGeneratedTxBycontractEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractEventsQuery, ICodegenGeneratedTxBycontractEventsQueryVariables>;
export function refetchCodegenGeneratedTxBycontractEventsQuery(variables: ICodegenGeneratedTxBycontractEventsQueryVariables) {
      return { query: CodegenGeneratedTxBycontractEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxBycontractTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxBycontractTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxBycontractTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxBycontractTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsAttributesQuery, ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxBycontractTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxBycontractTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxBycontractTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>(CodegenGeneratedTxBycontractTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxBycontractTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>(CodegenGeneratedTxBycontractTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxBycontractTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogEventsLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogEventsQuery, ICodegenGeneratedTxBycontractTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxBycontractTxlogEventsQuery(variables: ICodegenGeneratedTxBycontractTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxBycontractTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>(CodegenGeneratedTxBycontractTxlogDocument, options);
      }
export function useCodegenGeneratedTxBycontractTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>(CodegenGeneratedTxBycontractTxlogDocument, options);
        }
export type CodegenGeneratedTxBycontractTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogQuery>;
export type CodegenGeneratedTxBycontractTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractTxlogLazyQuery>;
export type CodegenGeneratedTxBycontractTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractTxlogQuery, ICodegenGeneratedTxBycontractTxlogQueryVariables>;
export function refetchCodegenGeneratedTxBycontractTxlogQuery(variables: ICodegenGeneratedTxBycontractTxlogQueryVariables) {
      return { query: CodegenGeneratedTxBycontractTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBycontractQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBycontractQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBycontractQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBycontractQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byContract_address: // value for 'tx_byContract_address'
 *      tx_byContract_maxHeight: // value for 'tx_byContract_maxHeight'
 *      tx_byContract_minHeight: // value for 'tx_byContract_minHeight'
 *   },
 * });
 */
export function useCodegenGeneratedTxBycontractQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>(CodegenGeneratedTxBycontractDocument, options);
      }
export function useCodegenGeneratedTxBycontractLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>(CodegenGeneratedTxBycontractDocument, options);
        }
export type CodegenGeneratedTxBycontractQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractQuery>;
export type CodegenGeneratedTxBycontractLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBycontractLazyQuery>;
export type CodegenGeneratedTxBycontractQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBycontractQuery, ICodegenGeneratedTxBycontractQueryVariables>;
export function refetchCodegenGeneratedTxBycontractQuery(variables: ICodegenGeneratedTxBycontractQueryVariables) {
      return { query: CodegenGeneratedTxBycontractDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>(CodegenGeneratedTxByhashEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByhashEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>(CodegenGeneratedTxByhashEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByhashEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsAttributesQuery>;
export type CodegenGeneratedTxByhashEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByhashEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashEventsAttributesQuery, ICodegenGeneratedTxByhashEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByhashEventsAttributesQuery(variables: ICodegenGeneratedTxByhashEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByhashEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>(CodegenGeneratedTxByhashEventsDocument, options);
      }
export function useCodegenGeneratedTxByhashEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>(CodegenGeneratedTxByhashEventsDocument, options);
        }
export type CodegenGeneratedTxByhashEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsQuery>;
export type CodegenGeneratedTxByhashEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashEventsLazyQuery>;
export type CodegenGeneratedTxByhashEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashEventsQuery, ICodegenGeneratedTxByhashEventsQueryVariables>;
export function refetchCodegenGeneratedTxByhashEventsQuery(variables: ICodegenGeneratedTxByhashEventsQueryVariables) {
      return { query: CodegenGeneratedTxByhashEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByhashTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByhashTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByhashTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByhashTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByhashTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByhashTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsAttributesQuery, ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByhashTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByhashTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByhashTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>(CodegenGeneratedTxByhashTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxByhashTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>(CodegenGeneratedTxByhashTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxByhashTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsQuery>;
export type CodegenGeneratedTxByhashTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByhashTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogEventsQuery, ICodegenGeneratedTxByhashTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxByhashTxlogEventsQuery(variables: ICodegenGeneratedTxByhashTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxByhashTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>(CodegenGeneratedTxByhashTxlogDocument, options);
      }
export function useCodegenGeneratedTxByhashTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>(CodegenGeneratedTxByhashTxlogDocument, options);
        }
export type CodegenGeneratedTxByhashTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogQuery>;
export type CodegenGeneratedTxByhashTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashTxlogLazyQuery>;
export type CodegenGeneratedTxByhashTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashTxlogQuery, ICodegenGeneratedTxByhashTxlogQueryVariables>;
export function refetchCodegenGeneratedTxByhashTxlogQuery(variables: ICodegenGeneratedTxByhashTxlogQueryVariables) {
      return { query: CodegenGeneratedTxByhashTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByhashQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByhashQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByhashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByhashQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useCodegenGeneratedTxByhashQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>(CodegenGeneratedTxByhashDocument, options);
      }
export function useCodegenGeneratedTxByhashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>(CodegenGeneratedTxByhashDocument, options);
        }
export type CodegenGeneratedTxByhashQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashQuery>;
export type CodegenGeneratedTxByhashLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByhashLazyQuery>;
export type CodegenGeneratedTxByhashQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByhashQuery, ICodegenGeneratedTxByhashQueryVariables>;
export function refetchCodegenGeneratedTxByhashQuery(variables: ICodegenGeneratedTxByhashQueryVariables) {
      return { query: CodegenGeneratedTxByhashDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>(CodegenGeneratedTxByheightEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByheightEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>(CodegenGeneratedTxByheightEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByheightEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsAttributesQuery>;
export type CodegenGeneratedTxByheightEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByheightEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightEventsAttributesQuery, ICodegenGeneratedTxByheightEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByheightEventsAttributesQuery(variables: ICodegenGeneratedTxByheightEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByheightEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>(CodegenGeneratedTxByheightEventsDocument, options);
      }
export function useCodegenGeneratedTxByheightEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>(CodegenGeneratedTxByheightEventsDocument, options);
        }
export type CodegenGeneratedTxByheightEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsQuery>;
export type CodegenGeneratedTxByheightEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightEventsLazyQuery>;
export type CodegenGeneratedTxByheightEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightEventsQuery, ICodegenGeneratedTxByheightEventsQueryVariables>;
export function refetchCodegenGeneratedTxByheightEventsQuery(variables: ICodegenGeneratedTxByheightEventsQueryVariables) {
      return { query: CodegenGeneratedTxByheightEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByheightTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByheightTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByheightTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByheightTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByheightTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByheightTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsAttributesQuery, ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByheightTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByheightTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByheightTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>(CodegenGeneratedTxByheightTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxByheightTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>(CodegenGeneratedTxByheightTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxByheightTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsQuery>;
export type CodegenGeneratedTxByheightTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByheightTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogEventsQuery, ICodegenGeneratedTxByheightTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxByheightTxlogEventsQuery(variables: ICodegenGeneratedTxByheightTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxByheightTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>(CodegenGeneratedTxByheightTxlogDocument, options);
      }
export function useCodegenGeneratedTxByheightTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>(CodegenGeneratedTxByheightTxlogDocument, options);
        }
export type CodegenGeneratedTxByheightTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogQuery>;
export type CodegenGeneratedTxByheightTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightTxlogLazyQuery>;
export type CodegenGeneratedTxByheightTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightTxlogQuery, ICodegenGeneratedTxByheightTxlogQueryVariables>;
export function refetchCodegenGeneratedTxByheightTxlogQuery(variables: ICodegenGeneratedTxByheightTxlogQueryVariables) {
      return { query: CodegenGeneratedTxByheightTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByheightQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByheightQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByheightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByheightQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHeight_height: // value for 'tx_byHeight_height'
 *   },
 * });
 */
export function useCodegenGeneratedTxByheightQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>(CodegenGeneratedTxByheightDocument, options);
      }
export function useCodegenGeneratedTxByheightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>(CodegenGeneratedTxByheightDocument, options);
        }
export type CodegenGeneratedTxByheightQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightQuery>;
export type CodegenGeneratedTxByheightLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByheightLazyQuery>;
export type CodegenGeneratedTxByheightQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByheightQuery, ICodegenGeneratedTxByheightQueryVariables>;
export function refetchCodegenGeneratedTxByheightQuery(variables: ICodegenGeneratedTxByheightQueryVariables) {
      return { query: CodegenGeneratedTxByheightDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>(CodegenGeneratedTxByownerEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByownerEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>(CodegenGeneratedTxByownerEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByownerEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsAttributesQuery>;
export type CodegenGeneratedTxByownerEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByownerEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerEventsAttributesQuery, ICodegenGeneratedTxByownerEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByownerEventsAttributesQuery(variables: ICodegenGeneratedTxByownerEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByownerEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>(CodegenGeneratedTxByownerEventsDocument, options);
      }
export function useCodegenGeneratedTxByownerEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>(CodegenGeneratedTxByownerEventsDocument, options);
        }
export type CodegenGeneratedTxByownerEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsQuery>;
export type CodegenGeneratedTxByownerEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerEventsLazyQuery>;
export type CodegenGeneratedTxByownerEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerEventsQuery, ICodegenGeneratedTxByownerEventsQueryVariables>;
export function refetchCodegenGeneratedTxByownerEventsQuery(variables: ICodegenGeneratedTxByownerEventsQueryVariables) {
      return { query: CodegenGeneratedTxByownerEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByownerTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxByownerTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxByownerTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxByownerTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxByownerTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxByownerTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsAttributesQuery, ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxByownerTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxByownerTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxByownerTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>(CodegenGeneratedTxByownerTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxByownerTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>(CodegenGeneratedTxByownerTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxByownerTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsQuery>;
export type CodegenGeneratedTxByownerTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogEventsLazyQuery>;
export type CodegenGeneratedTxByownerTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogEventsQuery, ICodegenGeneratedTxByownerTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxByownerTxlogEventsQuery(variables: ICodegenGeneratedTxByownerTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxByownerTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>(CodegenGeneratedTxByownerTxlogDocument, options);
      }
export function useCodegenGeneratedTxByownerTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>(CodegenGeneratedTxByownerTxlogDocument, options);
        }
export type CodegenGeneratedTxByownerTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogQuery>;
export type CodegenGeneratedTxByownerTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerTxlogLazyQuery>;
export type CodegenGeneratedTxByownerTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerTxlogQuery, ICodegenGeneratedTxByownerTxlogQueryVariables>;
export function refetchCodegenGeneratedTxByownerTxlogQuery(variables: ICodegenGeneratedTxByownerTxlogQueryVariables) {
      return { query: CodegenGeneratedTxByownerTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxByownerQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxByownerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxByownerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxByownerQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byOwner_maxHeight: // value for 'tx_byOwner_maxHeight'
 *      tx_byOwner_minHeight: // value for 'tx_byOwner_minHeight'
 *      tx_byOwner_walletAddress: // value for 'tx_byOwner_walletAddress'
 *   },
 * });
 */
export function useCodegenGeneratedTxByownerQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>(CodegenGeneratedTxByownerDocument, options);
      }
export function useCodegenGeneratedTxByownerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>(CodegenGeneratedTxByownerDocument, options);
        }
export type CodegenGeneratedTxByownerQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerQuery>;
export type CodegenGeneratedTxByownerLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxByownerLazyQuery>;
export type CodegenGeneratedTxByownerQueryResult = Apollo.QueryResult<ICodegenGeneratedTxByownerQuery, ICodegenGeneratedTxByownerQueryVariables>;
export function refetchCodegenGeneratedTxByownerQuery(variables: ICodegenGeneratedTxByownerQueryVariables) {
      return { query: CodegenGeneratedTxByownerDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>(CodegenGeneratedTxBytagEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxBytagEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>(CodegenGeneratedTxBytagEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxBytagEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsAttributesQuery>;
export type CodegenGeneratedTxBytagEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBytagEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagEventsAttributesQuery, ICodegenGeneratedTxBytagEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxBytagEventsAttributesQuery(variables: ICodegenGeneratedTxBytagEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxBytagEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>(CodegenGeneratedTxBytagEventsDocument, options);
      }
export function useCodegenGeneratedTxBytagEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>(CodegenGeneratedTxBytagEventsDocument, options);
        }
export type CodegenGeneratedTxBytagEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsQuery>;
export type CodegenGeneratedTxBytagEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagEventsLazyQuery>;
export type CodegenGeneratedTxBytagEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagEventsQuery, ICodegenGeneratedTxBytagEventsQueryVariables>;
export function refetchCodegenGeneratedTxBytagEventsQuery(variables: ICodegenGeneratedTxBytagEventsQueryVariables) {
      return { query: CodegenGeneratedTxBytagEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagTxlogEventsAttributesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogEventsAttributesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogEventsAttributesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogEventsAttributesQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagTxlogEventsAttributesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxBytagTxlogEventsAttributesDocument, options);
      }
export function useCodegenGeneratedTxBytagTxlogEventsAttributesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>(CodegenGeneratedTxBytagTxlogEventsAttributesDocument, options);
        }
export type CodegenGeneratedTxBytagTxlogEventsAttributesQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsAttributesQuery>;
export type CodegenGeneratedTxBytagTxlogEventsAttributesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsAttributesLazyQuery>;
export type CodegenGeneratedTxBytagTxlogEventsAttributesQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsAttributesQuery, ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables>;
export function refetchCodegenGeneratedTxBytagTxlogEventsAttributesQuery(variables: ICodegenGeneratedTxBytagTxlogEventsAttributesQueryVariables) {
      return { query: CodegenGeneratedTxBytagTxlogEventsAttributesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagTxlogEventsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogEventsQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagTxlogEventsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>(CodegenGeneratedTxBytagTxlogEventsDocument, options);
      }
export function useCodegenGeneratedTxBytagTxlogEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>(CodegenGeneratedTxBytagTxlogEventsDocument, options);
        }
export type CodegenGeneratedTxBytagTxlogEventsQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsQuery>;
export type CodegenGeneratedTxBytagTxlogEventsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogEventsLazyQuery>;
export type CodegenGeneratedTxBytagTxlogEventsQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogEventsQuery, ICodegenGeneratedTxBytagTxlogEventsQueryVariables>;
export function refetchCodegenGeneratedTxBytagTxlogEventsQuery(variables: ICodegenGeneratedTxBytagTxlogEventsQueryVariables) {
      return { query: CodegenGeneratedTxBytagTxlogEventsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagTxlogQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagTxlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagTxlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagTxlogQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagTxlogQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>(CodegenGeneratedTxBytagTxlogDocument, options);
      }
export function useCodegenGeneratedTxBytagTxlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>(CodegenGeneratedTxBytagTxlogDocument, options);
        }
export type CodegenGeneratedTxBytagTxlogQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogQuery>;
export type CodegenGeneratedTxBytagTxlogLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagTxlogLazyQuery>;
export type CodegenGeneratedTxBytagTxlogQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagTxlogQuery, ICodegenGeneratedTxBytagTxlogQueryVariables>;
export function refetchCodegenGeneratedTxBytagTxlogQuery(variables: ICodegenGeneratedTxBytagTxlogQueryVariables) {
      return { query: CodegenGeneratedTxBytagTxlogDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTxBytagQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxBytagQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxBytagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxBytagQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byTag_maxHeight: // value for 'tx_byTag_maxHeight'
 *      tx_byTag_minHeight: // value for 'tx_byTag_minHeight'
 *      tx_byTag_tags: // value for 'tx_byTag_tags'
 *   },
 * });
 */
export function useCodegenGeneratedTxBytagQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>(CodegenGeneratedTxBytagDocument, options);
      }
export function useCodegenGeneratedTxBytagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>(CodegenGeneratedTxBytagDocument, options);
        }
export type CodegenGeneratedTxBytagQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagQuery>;
export type CodegenGeneratedTxBytagLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxBytagLazyQuery>;
export type CodegenGeneratedTxBytagQueryResult = Apollo.QueryResult<ICodegenGeneratedTxBytagQuery, ICodegenGeneratedTxBytagQueryVariables>;
export function refetchCodegenGeneratedTxBytagQuery(variables: ICodegenGeneratedTxBytagQueryVariables) {
      return { query: CodegenGeneratedTxBytagDocument, variables: variables }
    }
export const CodegenGeneratedTxDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TX($chainId: String!) {
  tx(chainId: $chainId) {
    chainId
  }
}
    `;

/**
 * __useCodegenGeneratedTxQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTxQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTxQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *   },
 * });
 */
export function useCodegenGeneratedTxQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>(CodegenGeneratedTxDocument, options);
      }
export function useCodegenGeneratedTxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>(CodegenGeneratedTxDocument, options);
        }
export type CodegenGeneratedTxQueryHookResult = ReturnType<typeof useCodegenGeneratedTxQuery>;
export type CodegenGeneratedTxLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTxLazyQuery>;
export type CodegenGeneratedTxQueryResult = Apollo.QueryResult<ICodegenGeneratedTxQuery, ICodegenGeneratedTxQueryVariables>;
export function refetchCodegenGeneratedTxQuery(variables: ICodegenGeneratedTxQueryVariables) {
      return { query: CodegenGeneratedTxDocument, variables: variables }
    }
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

/**
 * __useTxByAccountQuery__
 *
 * To run a query within a React component, call `useTxByAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByAccountQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      sentFromOrTo: // value for 'sentFromOrTo'
 *      minHeight: // value for 'minHeight'
 *      maxHeight: // value for 'maxHeight'
 *   },
 * });
 */
export function useTxByAccountQuery(baseOptions: Apollo.QueryHookOptions<ITxByAccountQuery, ITxByAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ITxByAccountQuery, ITxByAccountQueryVariables>(TxByAccountDocument, options);
      }
export function useTxByAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByAccountQuery, ITxByAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ITxByAccountQuery, ITxByAccountQueryVariables>(TxByAccountDocument, options);
        }
export type TxByAccountQueryHookResult = ReturnType<typeof useTxByAccountQuery>;
export type TxByAccountLazyQueryHookResult = ReturnType<typeof useTxByAccountLazyQuery>;
export type TxByAccountQueryResult = Apollo.QueryResult<ITxByAccountQuery, ITxByAccountQueryVariables>;
export function refetchTxByAccountQuery(variables: ITxByAccountQueryVariables) {
      return { query: TxByAccountDocument, variables: variables }
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
export const TxByHeightDocument = /*#__PURE__*/ gql`
    query TX_BY_HEIGHT($chainId: String!, $height: Float!) {
  tx(chainId: $chainId) {
    byHeight(height: $height) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;

/**
 * __useTxByHeightQuery__
 *
 * To run a query within a React component, call `useTxByHeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByHeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByHeightQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      height: // value for 'height'
 *   },
 * });
 */
export function useTxByHeightQuery(baseOptions: Apollo.QueryHookOptions<ITxByHeightQuery, ITxByHeightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ITxByHeightQuery, ITxByHeightQueryVariables>(TxByHeightDocument, options);
      }
export function useTxByHeightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByHeightQuery, ITxByHeightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ITxByHeightQuery, ITxByHeightQueryVariables>(TxByHeightDocument, options);
        }
export type TxByHeightQueryHookResult = ReturnType<typeof useTxByHeightQuery>;
export type TxByHeightLazyQueryHookResult = ReturnType<typeof useTxByHeightLazyQuery>;
export type TxByHeightQueryResult = Apollo.QueryResult<ITxByHeightQuery, ITxByHeightQueryVariables>;
export function refetchTxByHeightQuery(variables: ITxByHeightQueryVariables) {
      return { query: TxByHeightDocument, variables: variables }
    }
export const TxByHashDocument = /*#__PURE__*/ gql`
    query TX_BY_HASH($chainId: String!, $hash: String!) {
  tx(chainId: $chainId) {
    byHash(hash: $hash) {
      ...txInfo
    }
  }
}
    ${TxInfoFragmentDoc}`;

/**
 * __useTxByHashQuery__
 *
 * To run a query within a React component, call `useTxByHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByHashQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useTxByHashQuery(baseOptions: Apollo.QueryHookOptions<ITxByHashQuery, ITxByHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ITxByHashQuery, ITxByHashQueryVariables>(TxByHashDocument, options);
      }
export function useTxByHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ITxByHashQuery, ITxByHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ITxByHashQuery, ITxByHashQueryVariables>(TxByHashDocument, options);
        }
export type TxByHashQueryHookResult = ReturnType<typeof useTxByHashQuery>;
export type TxByHashLazyQueryHookResult = ReturnType<typeof useTxByHashLazyQuery>;
export type TxByHashQueryResult = Apollo.QueryResult<ITxByHashQuery, ITxByHashQueryVariables>;
export function refetchTxByHashQuery(variables: ITxByHashQueryVariables) {
      return { query: TxByHashDocument, variables: variables }
    }