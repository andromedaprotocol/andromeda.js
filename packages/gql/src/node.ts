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

export type IMasterAdoAddressListIncludesaddressQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
  ADO_address_list_address_list_includesAddress_address: Scalars['String']['input'];
}>;


export type IMasterAdoAddressListIncludesaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', includesAddress: { __typename?: 'AddressListResponse', included: boolean } } } };

export type IMasterAdoAddressListQueryVariables = Exact<{
  ADO_address_list_address: Scalars['String']['input'];
}>;


export type IMasterAdoAddressListQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', address_list: { __typename?: 'AddressListAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoAdoQueryVariables = Exact<{
  ADO_ado_address: Scalars['String']['input'];
}>;


export type IMasterAdoAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', ado: { __typename?: 'BaseAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoAppQueryVariables = Exact<{
  ADO_app_address: Scalars['String']['input'];
}>;


export type IMasterAdoAppQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', app: { __typename?: 'AppAdo', address: string, type: string, addresses: Array<{ __typename?: 'AppComponentAddress', address: string, name: string }>, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, components: Array<{ __typename?: 'AppComponent', address: string, ado_type: string, instantiate_msg: string, name: string }>, config: { __typename?: 'AppConfig', name: string, owner: string } } } };

export type IMasterAdoAuctionAuctionidsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionIDs_tokenAddress: Scalars['String']['input'];
  ADO_auction_auction_auctionIDs_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoAuctionAuctionidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionIDs: { __typename?: 'AuctionIDsResponse', auction_ids: Array<number> } } } };

export type IMasterAdoAuctionAuctioninfosforaddressQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionInfosForAddress_tokenAddress: Scalars['String']['input'];
}>;


export type IMasterAdoAuctionAuctioninfosforaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionInfosForAddress: { __typename?: 'AuctionInfosForAddressResponse', auction_ids: Array<number>, token_address: string, token_id: string } } } };

export type IMasterAdoAuctionAuctionstateQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_auctionState_auctionId: Scalars['Float']['input'];
}>;


export type IMasterAdoAuctionAuctionstateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', auctionState: { __typename?: 'AuctionStateResponse', auction_id: number, coin_denom: string, end_time: { [key: string]: any }, high_bidder_addr: string, high_bidder_amount: number, is_cancelled: boolean, min_bid: number, start_time: { [key: string]: any }, summaryFields: number, whitelist: { [key: string]: any } } } } };

export type IMasterAdoAuctionBidsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_bids_auctionId: Scalars['Float']['input'];
  ADO_auction_auction_bids_options?: InputMaybe<IAndrSearchOptions>;
}>;


export type IMasterAdoAuctionBidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', bids: { __typename?: 'BidsResponse', bids: Array<{ __typename?: 'Bid', amount: number, bidder: string, timestamp: { [key: string]: any } }> } } } };

export type IMasterAdoAuctionLatestauctionstateQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_latestAuctionState_tokenAddress: Scalars['String']['input'];
  ADO_auction_auction_latestAuctionState_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoAuctionLatestauctionstateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', latestAuctionState: { __typename?: 'AuctionStateResponse', auction_id: number, coin_denom: string, end_time: { [key: string]: any }, high_bidder_addr: string, high_bidder_amount: number, is_cancelled: boolean, min_bid: number, start_time: { [key: string]: any }, summaryFields: number, whitelist: { [key: string]: any } } } } };

export type IMasterAdoAuctionSummaryfieldsQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
  ADO_auction_auction_summaryFields_tokenAddress: Scalars['String']['input'];
}>;


export type IMasterAdoAuctionSummaryfieldsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', summaryFields: { __typename?: 'SummaryFields', coin_denom: string, high_bidder_amount: number, min_bid: number } } } };

export type IMasterAdoAuctionQueryVariables = Exact<{
  ADO_auction_address: Scalars['String']['input'];
}>;


export type IMasterAdoAuctionQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', auction: { __typename?: 'AuctionAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoCrowdfundQueryVariables = Exact<{
  ADO_crowdfund_address: Scalars['String']['input'];
}>;


export type IMasterAdoCrowdfundQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', crowdfund: { __typename?: 'CrowdfundAdo', address: string, availableTokens: Array<string>, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'CrowdfundConfig', can_mint_after_sale: boolean, token_address: { [key: string]: any } }, state: { __typename?: 'CrowdfundState', amount_sold: number, amount_to_send: number, amount_transferred: number, expiration: { [key: string]: any }, max_amount_per_wallet: number, min_tokens_sold: number, recipient: { [key: string]: any }, price: { __typename?: 'Coin', amount: string, denom: string } } } } };

export type IMasterAdoCw20AllowanceQueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
  ADO_cw20_cw20_allowance_owner: Scalars['String']['input'];
  ADO_cw20_cw20_allowance_spender: Scalars['String']['input'];
}>;


export type IMasterAdoCw20AllowanceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', allowance: { __typename?: 'Allowance', allowance: number, expires: { [key: string]: any }, owner: string, spender: string } } } };

export type IMasterAdoCw20QueryVariables = Exact<{
  ADO_cw20_address: Scalars['String']['input'];
}>;


export type IMasterAdoCw20Query = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20: { __typename?: 'CW20Ado', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, downloadLogo: { __typename?: 'DownloadLogo', data: { [key: string]: any }, mime_type: string }, marketingInfo: { __typename?: 'MarketingInfo', allowance: number, description: string, logo: { [key: string]: any }, marketing: string, project: string }, minter: { __typename?: 'Minter', cap: number, minter: string }, tokenInfo: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: number } } } };

export type IMasterAdoCw20ExchangeSaleQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
  ADO_cw20_exchange_cw20_exchange_sale_cw20?: InputMaybe<Scalars['String']['input']>;
  ADO_cw20_exchange_cw20_exchange_sale_native?: InputMaybe<Scalars['String']['input']>;
}>;


export type IMasterAdoCw20ExchangeSaleQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', sale: { __typename?: 'SaleResponse', amount: number, exchange_rate: number, recipient: string } } } };

export type IMasterAdoCw20ExchangeQueryVariables = Exact<{
  ADO_cw20_exchange_address: Scalars['String']['input'];
}>;


export type IMasterAdoCw20ExchangeQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_exchange: { __typename?: 'CW20ExchangeAdo', address: string, tokenAddress: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoCw20StakingStakerQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
  ADO_cw20_staking_cw20_staking_staker_address: Scalars['String']['input'];
}>;


export type IMasterAdoCw20StakingStakerQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', staker: { __typename?: 'StakerResponse', address: string, pending_rewards: Array<Array<string>>, share: number } } } };

export type IMasterAdoCw20StakingQueryVariables = Exact<{
  ADO_cw20_staking_address: Scalars['String']['input'];
}>;


export type IMasterAdoCw20StakingQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw20_staking: { __typename?: 'CW20StakingAdo', address: string, timestamp: { [key: string]: any }, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'ConfigStructure', number_of_reward_tokens: number, staking_token: { __typename?: 'AndrAddress', identifier: string } }, state: { __typename?: 'StateStructure', total_share: number } } } };

export type IMasterAdoCw721AllnftinfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_allNftInfo_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_allNftInfo_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoCw721AllnftinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', allNftInfo: { __typename?: 'AllNftInfo', access: { __typename?: 'NftOwnerInfo', owner: string, approvals: Array<{ __typename?: 'NftApproval', expires: { [key: string]: any }, spender: string }> }, info: { __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } } };

export type IMasterAdoCw721ApprovalQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_approval_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_approval_spender: Scalars['String']['input'];
  ADO_cw721_cw721_approval_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoCw721ApprovalQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', approval: { __typename?: 'NftApproval', expires: { [key: string]: any }, spender: string } } } };

export type IMasterAdoCw721NftinfoQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_nftInfo_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoCw721NftinfoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', nftInfo: { __typename?: 'NftInfo', token_uri: string, extension: { __typename?: 'TokenExtension', animation_url: string, description: string, external_url: string, image: string, image_data: string, name: string, publisher: string, youtube_url: string, attributes: Array<{ __typename?: 'MetadataAttribute', display_type: string, trait_type: string, value: string }> } } } } };

export type IMasterAdoCw721OwnerofQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_ownerOf_includeExpired: Scalars['Boolean']['input'];
  ADO_cw721_cw721_ownerOf_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoCw721OwnerofQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', ownerOf: { __typename?: 'NftOwnerInfo', owner: string, approvals: Array<{ __typename?: 'NftApproval', expires: { [key: string]: any }, spender: string }> } } } };

export type IMasterAdoCw721TransferagreementQueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
  ADO_cw721_cw721_transferAgreement_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoCw721TransferagreementQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', transferAgreement: { __typename?: 'TransferAgreement', tokenId: string, agreement: { __typename?: 'Agreement', purchaser: string, amount: { __typename?: 'AgreementAmount', raw: { __typename?: 'Coin', amount: string, denom: string } } } } } } };

export type IMasterAdoCw721QueryVariables = Exact<{
  ADO_cw721_address: Scalars['String']['input'];
}>;


export type IMasterAdoCw721Query = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', cw721: { __typename?: 'CW721Ado', address: string, minter: string, numTokens: number, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, contractInfo: { __typename?: 'NftContractInfo', name: string, symbol: string } } } };

export type IMasterAdoFactoryQueryVariables = Exact<{
  ADO_factory_address: Scalars['String']['input'];
}>;


export type IMasterAdoFactoryQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', factory: { __typename?: 'FactoryAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoLockdropQueryVariables = Exact<{
  ADO_lockdrop_address: Scalars['String']['input'];
}>;


export type IMasterAdoLockdropQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', lockdrop: { __typename?: 'LockdropAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'LockdropConfig', deposit_window: number, incentive_token: string, init_timestamp: number, lockdrop_incentives: number, native_denom: string, withdrawal_window: number }, state: { __typename?: 'LockdropState', are_claims_allowed: boolean, total_native_locked: string } } } };

export type IMasterAdoMarketplaceLatestsalestateQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_latestSaleState_tokenAddress: Scalars['String']['input'];
  ADO_marketplace_marketplace_latestSaleState_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoMarketplaceLatestsalestateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', latestSaleState: { __typename?: 'SaleStateResponse', coin_denom: string, price: string, sale_id: string, status: string } } } };

export type IMasterAdoMarketplaceSaleidsQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleIds_tokenAddress: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleIds_tokenId: Scalars['String']['input'];
}>;


export type IMasterAdoMarketplaceSaleidsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', saleIds: { __typename?: 'SaleIds', sale_ids: Array<string> } } } };

export type IMasterAdoMarketplaceSalestateQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
  ADO_marketplace_marketplace_saleState_saleId: Scalars['String']['input'];
}>;


export type IMasterAdoMarketplaceSalestateQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', saleState: { __typename?: 'SaleStateResponse', coin_denom: string, price: string, sale_id: string, status: string } } } };

export type IMasterAdoMarketplaceQueryVariables = Exact<{
  ADO_marketplace_address: Scalars['String']['input'];
}>;


export type IMasterAdoMarketplaceQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', marketplace: { __typename?: 'MarketplaceAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoMerkleAirdropMerklerootQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
  ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Scalars['Float']['input'];
}>;


export type IMasterAdoMerkleAirdropMerklerootQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', merkleRoot: { __typename?: 'MerkleRootResponse', expiration: { [key: string]: any }, merkle_root: string, stage: number, total_amount: string } } } };

export type IMasterAdoMerkleAirdropQueryVariables = Exact<{
  ADO_merkle_airdrop_address: Scalars['String']['input'];
}>;


export type IMasterAdoMerkleAirdropQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', merkle_airdrop: { __typename?: 'MerkleAirdropAdo', address: string, latestStage: number, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'MerkleAirdropConfig', asset_info: { [key: string]: any } } } } };

export type IMasterAdoPrimitiveGetvalueQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
  ADO_primitive_primitive_getValue_key: Scalars['String']['input'];
}>;


export type IMasterAdoPrimitiveGetvalueQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', getValue: { __typename?: 'PrimitiveResponse', key: string, value: { [key: string]: any } } } } };

export type IMasterAdoPrimitiveQueryVariables = Exact<{
  ADO_primitive_address: Scalars['String']['input'];
}>;


export type IMasterAdoPrimitiveQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', primitive: { __typename?: 'PrimitiveAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoRateLimitingWithdrawalsQueryVariables = Exact<{
  ADO_rate_limiting_withdrawals_address: Scalars['String']['input'];
}>;


export type IMasterAdoRateLimitingWithdrawalsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rate_limiting_withdrawals: { __typename?: 'RateLimitingWithdrawalsAdo', address: string, type: string, accountDetails: { __typename?: 'AccountDetails', balance: string, latest_withdrawal: string }, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, coinAllowanceDetails: { __typename?: 'CoinAllowance', coin: string, limit: string, minimal_withdrawal_frequency: string } } } };

export type IMasterAdoRatesQueryVariables = Exact<{
  ADO_rates_address: Scalars['String']['input'];
}>;


export type IMasterAdoRatesQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', rates: { __typename?: 'RatesAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, payments: Array<{ __typename?: 'RateInfo', description: string, is_additive: boolean, receivers: Array<{ [key: string]: any }>, rate: { __typename?: 'Rate', external: { __typename?: 'ADORate', address: string, key: string }, flat: { __typename?: 'Coin', amount: string, denom: string }, percent: { __typename?: 'PercentRate', decimal: number } } }> } } };

export type IMasterAdoSplitterQueryVariables = Exact<{
  ADO_splitter_address: Scalars['String']['input'];
}>;


export type IMasterAdoSplitterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', splitter: { __typename?: 'SplitterAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'Splitter', lock: { [key: string]: any }, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: { [key: string]: any } }> } } } };

export type IMasterAdoTimelockGetlockedfundsQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_owner: Scalars['String']['input'];
  ADO_timelock_timelock_getLockedFunds_recipient: Scalars['String']['input'];
}>;


export type IMasterAdoTimelockGetlockedfundsQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', getLockedFunds: { __typename?: 'Escrow', recipient: { [key: string]: any }, coins: Array<{ __typename?: 'Coin', amount: string, denom: string }>, condition: { __typename?: 'EscrowCondition', expiration: { [key: string]: any }, miniumFunds: Array<{ __typename?: 'Coin', amount: string, denom: string }> } } } } };

export type IMasterAdoTimelockQueryVariables = Exact<{
  ADO_timelock_address: Scalars['String']['input'];
}>;


export type IMasterAdoTimelockQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', timelock: { __typename?: 'TimelockAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoVaultStrategyaddressQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
  ADO_vault_vault_strategyAddress_strategy: Scalars['String']['input'];
}>;


export type IMasterAdoVaultStrategyaddressQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', strategyAddress: { __typename?: 'AndrStrategy', address: string, strategyType: IAndrStrategyType } } } };

export type IMasterAdoVaultQueryVariables = Exact<{
  ADO_vault_address: Scalars['String']['input'];
}>;


export type IMasterAdoVaultQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vault: { __typename?: 'VaultAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string } } } };

export type IMasterAdoVestingBatchQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
  ADO_vesting_vesting_batch_id: Scalars['Float']['input'];
}>;


export type IMasterAdoVestingBatchQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', batch: { __typename?: 'VestingBatchInfo', amount: string, amount_available_to_claim: string, amount_claimed: string, id: number, last_claimed_release_time: number, lockup_end: number, number_of_available_claims: string, release_amount: { [key: string]: any }, release_unit: number } } } };

export type IMasterAdoVestingQueryVariables = Exact<{
  ADO_vesting_address: Scalars['String']['input'];
}>;


export type IMasterAdoVestingQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', vesting: { __typename?: 'VestingAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, batches: Array<{ __typename?: 'VestingBatchInfo', amount: string, amount_available_to_claim: string, amount_claimed: string, id: number, last_claimed_release_time: number, lockup_end: number, number_of_available_claims: string, release_amount: { [key: string]: any }, release_unit: number }>, config: { __typename?: 'VestingConfig', denom: string, is_multi_batch_enabled: boolean, recipient: { [key: string]: any }, unbonding_duration: { [key: string]: any } } } } };

export type IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
  ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: Scalars['String']['input'];
}>;


export type IMasterAdoWeightedDistributionSplitterGetuserweightQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', getUserWeight: { __typename?: 'UserWeightResponse', total_weight: number, weight: number } } } };

export type IMasterAdoWeightedDistributionSplitterQueryVariables = Exact<{
  ADO_weighted_distribution_splitter_address: Scalars['String']['input'];
}>;


export type IMasterAdoWeightedDistributionSplitterQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', weighted_distribution_splitter: { __typename?: 'WeightedDistributionSplitterAdo', address: string, type: string, andr: { __typename?: 'AndrQuery', address: string, admin: string, blockHeightUponCreation: number, codeId: number, contractVersion: string, creator: string, ibcPortId: string, label: string, operators: Array<string>, originalPublisher: string, owner: string, queries_expected: Array<string>, type: string, version: string }, config: { __typename?: 'Splitter', lock: { [key: string]: any }, recipients: Array<{ __typename?: 'AddressPercent', percent: string, recipient: { [key: string]: any } }> } } } };

export type IMasterAdoQueryVariables = Exact<{ [key: string]: never; }>;


export type IMasterAdoQuery = { __typename?: 'Query', ADO: { __typename?: 'AdoQuery', receipt: string } };

export type IMasterAdopPackageQueryVariables = Exact<{
  ADOP_package_adoType: Scalars['String']['input'];
}>;


export type IMasterAdopPackageQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', package: { __typename?: 'AdoPackage', name: string, schemas: { __typename?: 'ADOPSchema', contract_schema: string, execute: string, instantiate: string, query: string, receive: { __typename?: 'ADOPSchemaReceive', cw20: string, cw721: string } } } } };

export type IMasterAdopQueryVariables = Exact<{ [key: string]: never; }>;


export type IMasterAdopQuery = { __typename?: 'Query', ADOP: { __typename?: 'ADOPQuery', adoTypes: Array<string> } };

export type IMasterAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type IMasterAccountsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsQuery', wallets: string } };

export type IMasterChainconfigsConfigQueryVariables = Exact<{
  chainConfigs_config_identifier: Scalars['String']['input'];
}>;


export type IMasterChainconfigsConfigQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', config: { __typename?: 'ChainConfig', addressPrefix: string, blockExplorerAddressPages: Array<string>, blockExplorerTxPages: Array<string>, chainId: string, chainName: string, chainType: string, chainUrl: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } } } };

export type IMasterChainconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type IMasterChainconfigsQuery = { __typename?: 'Query', chainConfigs: { __typename?: 'ChainConfigQuery', allConfigs: Array<{ __typename?: 'ChainConfig', addressPrefix: string, blockExplorerAddressPages: Array<string>, blockExplorerTxPages: Array<string>, chainId: string, chainName: string, chainType: string, chainUrl: string, defaultFee: string, kernelAddress: string, name: string, registryAddress: string, iconUrls: { __typename?: 'IconUrl', lg: string, sm: string } }> } };

export type IMasterKeplrconfigsConfigQueryVariables = Exact<{
  keplrConfigs_config_identifier: Scalars['String']['input'];
}>;


export type IMasterKeplrconfigsConfigQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', config: { __typename?: 'KeplrConfig', chainId: string, chainName: string, coinType: number, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } } } };

export type IMasterKeplrconfigsQueryVariables = Exact<{ [key: string]: never; }>;


export type IMasterKeplrconfigsQuery = { __typename?: 'Query', keplrConfigs: { __typename?: 'KeplrConfigQuery', allConfigs: Array<{ __typename?: 'KeplrConfig', chainId: string, chainName: string, coinType: number, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'Currency', coinDecimals: number, coinDenom: string, coinGeckoId: string, coinMinimalDenom: string } }> } };

export type IMasterTxByhashQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
  tx_byHash_hash: Scalars['String']['input'];
}>;


export type IMasterTxByhashQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', byHash: { __typename?: 'TxInfo', code: number, gasUsed: number, gasWanted: number, hash: string, height: number, rawLog: string, tx: { [key: string]: any }, events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }>, txLog: Array<{ __typename?: 'TxLog', events: Array<{ __typename?: 'TxEvent', type: string, attributes: Array<{ __typename?: 'TxEventAttribute', key: string, value: string }> }> }> } } };

export type IMasterTxQueryVariables = Exact<{
  chainId: Scalars['String']['input'];
}>;


export type IMasterTxQuery = { __typename?: 'Query', tx: { __typename?: 'TxSearchResult', chainId: string } };

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
export const MasterAdoAddressListIncludesaddressDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_ADDRESS_LIST_INCLUDESADDRESS($ADO_address_list_address: String!, $ADO_address_list_address_list_includesAddress_address: String!) {
  ADO {
    address_list(address: $ADO_address_list_address) {
      includesAddress(address: $ADO_address_list_address_list_includesAddress_address) {
        included
      }
    }
  }
}
    `;
export const MasterAdoAddressListDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_ADDRESS_LIST($ADO_address_list_address: String!) {
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
export const MasterAdoAdoDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_ADO($ADO_ado_address: String!) {
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
export const MasterAdoAppDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_APP($ADO_app_address: String!) {
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
export const MasterAdoAuctionAuctionidsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_AUCTIONIDS($ADO_auction_address: String!, $ADO_auction_auction_auctionIDs_tokenAddress: String!, $ADO_auction_auction_auctionIDs_tokenId: String!) {
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
export const MasterAdoAuctionAuctioninfosforaddressDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_AUCTIONINFOSFORADDRESS($ADO_auction_address: String!, $ADO_auction_auction_auctionInfosForAddress_tokenAddress: String!) {
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
export const MasterAdoAuctionAuctionstateDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_AUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_auctionState_auctionId: Float!) {
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
export const MasterAdoAuctionBidsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_BIDS($ADO_auction_address: String!, $ADO_auction_auction_bids_auctionId: Float!, $ADO_auction_auction_bids_options: AndrSearchOptions) {
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
export const MasterAdoAuctionLatestauctionstateDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_LATESTAUCTIONSTATE($ADO_auction_address: String!, $ADO_auction_auction_latestAuctionState_tokenAddress: String!, $ADO_auction_auction_latestAuctionState_tokenId: String!) {
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
export const MasterAdoAuctionSummaryfieldsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION_SUMMARYFIELDS($ADO_auction_address: String!, $ADO_auction_auction_summaryFields_tokenAddress: String!) {
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
export const MasterAdoAuctionDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_AUCTION($ADO_auction_address: String!) {
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
export const MasterAdoCrowdfundDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CROWDFUND($ADO_crowdfund_address: String!) {
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
export const MasterAdoCw20AllowanceDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20_ALLOWANCE($ADO_cw20_address: String!, $ADO_cw20_cw20_allowance_owner: String!, $ADO_cw20_cw20_allowance_spender: String!) {
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
export const MasterAdoCw20Document = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20($ADO_cw20_address: String!) {
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
export const MasterAdoCw20ExchangeSaleDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20_EXCHANGE_SALE($ADO_cw20_exchange_address: String!, $ADO_cw20_exchange_cw20_exchange_sale_cw20: String, $ADO_cw20_exchange_cw20_exchange_sale_native: String) {
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
export const MasterAdoCw20ExchangeDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20_EXCHANGE($ADO_cw20_exchange_address: String!) {
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
export const MasterAdoCw20StakingStakerDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20_STAKING_STAKER($ADO_cw20_staking_address: String!, $ADO_cw20_staking_cw20_staking_staker_address: String!) {
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
export const MasterAdoCw20StakingDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW20_STAKING($ADO_cw20_staking_address: String!) {
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
export const MasterAdoCw721AllnftinfoDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721_ALLNFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_allNftInfo_includeExpired: Boolean!, $ADO_cw721_cw721_allNftInfo_tokenId: String!) {
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
export const MasterAdoCw721ApprovalDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721_APPROVAL($ADO_cw721_address: String!, $ADO_cw721_cw721_approval_includeExpired: Boolean!, $ADO_cw721_cw721_approval_spender: String!, $ADO_cw721_cw721_approval_tokenId: String!) {
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
export const MasterAdoCw721NftinfoDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721_NFTINFO($ADO_cw721_address: String!, $ADO_cw721_cw721_nftInfo_tokenId: String!) {
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
export const MasterAdoCw721OwnerofDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721_OWNEROF($ADO_cw721_address: String!, $ADO_cw721_cw721_ownerOf_includeExpired: Boolean!, $ADO_cw721_cw721_ownerOf_tokenId: String!) {
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
export const MasterAdoCw721TransferagreementDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721_TRANSFERAGREEMENT($ADO_cw721_address: String!, $ADO_cw721_cw721_transferAgreement_tokenId: String!) {
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
export const MasterAdoCw721Document = /*#__PURE__*/ gql`
    query MASTER_ADO_CW721($ADO_cw721_address: String!) {
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
export const MasterAdoFactoryDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_FACTORY($ADO_factory_address: String!) {
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
export const MasterAdoLockdropDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_LOCKDROP($ADO_lockdrop_address: String!) {
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
export const MasterAdoMarketplaceLatestsalestateDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MARKETPLACE_LATESTSALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_latestSaleState_tokenAddress: String!, $ADO_marketplace_marketplace_latestSaleState_tokenId: String!) {
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
export const MasterAdoMarketplaceSaleidsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MARKETPLACE_SALEIDS($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleIds_tokenAddress: String!, $ADO_marketplace_marketplace_saleIds_tokenId: String!) {
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
export const MasterAdoMarketplaceSalestateDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MARKETPLACE_SALESTATE($ADO_marketplace_address: String!, $ADO_marketplace_marketplace_saleState_saleId: String!) {
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
export const MasterAdoMarketplaceDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MARKETPLACE($ADO_marketplace_address: String!) {
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
export const MasterAdoMerkleAirdropMerklerootDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MERKLE_AIRDROP_MERKLEROOT($ADO_merkle_airdrop_address: String!, $ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: Float!) {
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
export const MasterAdoMerkleAirdropDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_MERKLE_AIRDROP($ADO_merkle_airdrop_address: String!) {
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
export const MasterAdoPrimitiveGetvalueDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_PRIMITIVE_GETVALUE($ADO_primitive_address: String!, $ADO_primitive_primitive_getValue_key: String!) {
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
export const MasterAdoPrimitiveDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_PRIMITIVE($ADO_primitive_address: String!) {
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
export const MasterAdoRateLimitingWithdrawalsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_RATE_LIMITING_WITHDRAWALS($ADO_rate_limiting_withdrawals_address: String!) {
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
export const MasterAdoRatesDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_RATES($ADO_rates_address: String!) {
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
export const MasterAdoSplitterDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_SPLITTER($ADO_splitter_address: String!) {
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
export const MasterAdoTimelockGetlockedfundsDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_TIMELOCK_GETLOCKEDFUNDS($ADO_timelock_address: String!, $ADO_timelock_timelock_getLockedFunds_owner: String!, $ADO_timelock_timelock_getLockedFunds_recipient: String!) {
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
export const MasterAdoTimelockDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_TIMELOCK($ADO_timelock_address: String!) {
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
export const MasterAdoVaultStrategyaddressDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_VAULT_STRATEGYADDRESS($ADO_vault_address: String!, $ADO_vault_vault_strategyAddress_strategy: String!) {
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
export const MasterAdoVaultDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_VAULT($ADO_vault_address: String!) {
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
export const MasterAdoVestingBatchDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_VESTING_BATCH($ADO_vesting_address: String!, $ADO_vesting_vesting_batch_id: Float!) {
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
export const MasterAdoVestingDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_VESTING($ADO_vesting_address: String!) {
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
export const MasterAdoWeightedDistributionSplitterGetuserweightDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT($ADO_weighted_distribution_splitter_address: String!, $ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: String!) {
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
export const MasterAdoWeightedDistributionSplitterDocument = /*#__PURE__*/ gql`
    query MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER($ADO_weighted_distribution_splitter_address: String!) {
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
export const MasterAdoDocument = /*#__PURE__*/ gql`
    query MASTER_ADO {
  ADO {
    receipt
  }
}
    `;
export const MasterAdopPackageDocument = /*#__PURE__*/ gql`
    query MASTER_ADOP_PACKAGE($ADOP_package_adoType: String!) {
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
export const MasterAdopDocument = /*#__PURE__*/ gql`
    query MASTER_ADOP {
  ADOP {
    adoTypes
  }
}
    `;
export const MasterAccountsDocument = /*#__PURE__*/ gql`
    query MASTER_ACCOUNTS {
  accounts {
    wallets
  }
}
    `;
export const MasterChainconfigsConfigDocument = /*#__PURE__*/ gql`
    query MASTER_CHAINCONFIGS_CONFIG($chainConfigs_config_identifier: String!) {
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
export const MasterChainconfigsDocument = /*#__PURE__*/ gql`
    query MASTER_CHAINCONFIGS {
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
export const MasterKeplrconfigsConfigDocument = /*#__PURE__*/ gql`
    query MASTER_KEPLRCONFIGS_CONFIG($keplrConfigs_config_identifier: String!) {
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
export const MasterKeplrconfigsDocument = /*#__PURE__*/ gql`
    query MASTER_KEPLRCONFIGS {
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
export const MasterTxByhashDocument = /*#__PURE__*/ gql`
    query MASTER_TX_BYHASH($chainId: String!, $tx_byHash_hash: String!) {
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
export const MasterTxDocument = /*#__PURE__*/ gql`
    query MASTER_TX($chainId: String!) {
  tx(chainId: $chainId) {
    chainId
  }
}
    `;
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
    APP_MASTER(variables: IAppMasterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAppMasterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAppMasterQuery>(AppMasterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'APP_MASTER', 'query');
    },
    ASSETS(variables: IAssetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAssetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAssetsQuery>(AssetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ASSETS', 'query');
    },
    ASSETS_MASTER(variables: IAssetsMasterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IAssetsMasterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IAssetsMasterQuery>(AssetsMasterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ASSETS_MASTER', 'query');
    },
    BASE_ADO(variables: IBaseAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IBaseAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IBaseAdoQuery>(BaseAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BASE_ADO', 'query');
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
    MASTER_ADO_ADDRESS_LIST_INCLUDESADDRESS(variables: IMasterAdoAddressListIncludesaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAddressListIncludesaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAddressListIncludesaddressQuery>(MasterAdoAddressListIncludesaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_ADDRESS_LIST_INCLUDESADDRESS', 'query');
    },
    MASTER_ADO_ADDRESS_LIST(variables: IMasterAdoAddressListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAddressListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAddressListQuery>(MasterAdoAddressListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_ADDRESS_LIST', 'query');
    },
    MASTER_ADO_ADO(variables: IMasterAdoAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAdoQuery>(MasterAdoAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_ADO', 'query');
    },
    MASTER_ADO_APP(variables: IMasterAdoAppQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAppQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAppQuery>(MasterAdoAppDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_APP', 'query');
    },
    MASTER_ADO_AUCTION_AUCTIONIDS(variables: IMasterAdoAuctionAuctionidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionAuctionidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionAuctionidsQuery>(MasterAdoAuctionAuctionidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_AUCTIONIDS', 'query');
    },
    MASTER_ADO_AUCTION_AUCTIONINFOSFORADDRESS(variables: IMasterAdoAuctionAuctioninfosforaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionAuctioninfosforaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionAuctioninfosforaddressQuery>(MasterAdoAuctionAuctioninfosforaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_AUCTIONINFOSFORADDRESS', 'query');
    },
    MASTER_ADO_AUCTION_AUCTIONSTATE(variables: IMasterAdoAuctionAuctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionAuctionstateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionAuctionstateQuery>(MasterAdoAuctionAuctionstateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_AUCTIONSTATE', 'query');
    },
    MASTER_ADO_AUCTION_BIDS(variables: IMasterAdoAuctionBidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionBidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionBidsQuery>(MasterAdoAuctionBidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_BIDS', 'query');
    },
    MASTER_ADO_AUCTION_LATESTAUCTIONSTATE(variables: IMasterAdoAuctionLatestauctionstateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionLatestauctionstateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionLatestauctionstateQuery>(MasterAdoAuctionLatestauctionstateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_LATESTAUCTIONSTATE', 'query');
    },
    MASTER_ADO_AUCTION_SUMMARYFIELDS(variables: IMasterAdoAuctionSummaryfieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionSummaryfieldsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionSummaryfieldsQuery>(MasterAdoAuctionSummaryfieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION_SUMMARYFIELDS', 'query');
    },
    MASTER_ADO_AUCTION(variables: IMasterAdoAuctionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoAuctionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoAuctionQuery>(MasterAdoAuctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_AUCTION', 'query');
    },
    MASTER_ADO_CROWDFUND(variables: IMasterAdoCrowdfundQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCrowdfundQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCrowdfundQuery>(MasterAdoCrowdfundDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CROWDFUND', 'query');
    },
    MASTER_ADO_CW20_ALLOWANCE(variables: IMasterAdoCw20AllowanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20AllowanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20AllowanceQuery>(MasterAdoCw20AllowanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20_ALLOWANCE', 'query');
    },
    MASTER_ADO_CW20(variables: IMasterAdoCw20QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20Query>(MasterAdoCw20Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20', 'query');
    },
    MASTER_ADO_CW20_EXCHANGE_SALE(variables: IMasterAdoCw20ExchangeSaleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20ExchangeSaleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20ExchangeSaleQuery>(MasterAdoCw20ExchangeSaleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20_EXCHANGE_SALE', 'query');
    },
    MASTER_ADO_CW20_EXCHANGE(variables: IMasterAdoCw20ExchangeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20ExchangeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20ExchangeQuery>(MasterAdoCw20ExchangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20_EXCHANGE', 'query');
    },
    MASTER_ADO_CW20_STAKING_STAKER(variables: IMasterAdoCw20StakingStakerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20StakingStakerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20StakingStakerQuery>(MasterAdoCw20StakingStakerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20_STAKING_STAKER', 'query');
    },
    MASTER_ADO_CW20_STAKING(variables: IMasterAdoCw20StakingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw20StakingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw20StakingQuery>(MasterAdoCw20StakingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW20_STAKING', 'query');
    },
    MASTER_ADO_CW721_ALLNFTINFO(variables: IMasterAdoCw721AllnftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721AllnftinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721AllnftinfoQuery>(MasterAdoCw721AllnftinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721_ALLNFTINFO', 'query');
    },
    MASTER_ADO_CW721_APPROVAL(variables: IMasterAdoCw721ApprovalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721ApprovalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721ApprovalQuery>(MasterAdoCw721ApprovalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721_APPROVAL', 'query');
    },
    MASTER_ADO_CW721_NFTINFO(variables: IMasterAdoCw721NftinfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721NftinfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721NftinfoQuery>(MasterAdoCw721NftinfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721_NFTINFO', 'query');
    },
    MASTER_ADO_CW721_OWNEROF(variables: IMasterAdoCw721OwnerofQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721OwnerofQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721OwnerofQuery>(MasterAdoCw721OwnerofDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721_OWNEROF', 'query');
    },
    MASTER_ADO_CW721_TRANSFERAGREEMENT(variables: IMasterAdoCw721TransferagreementQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721TransferagreementQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721TransferagreementQuery>(MasterAdoCw721TransferagreementDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721_TRANSFERAGREEMENT', 'query');
    },
    MASTER_ADO_CW721(variables: IMasterAdoCw721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoCw721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoCw721Query>(MasterAdoCw721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_CW721', 'query');
    },
    MASTER_ADO_FACTORY(variables: IMasterAdoFactoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoFactoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoFactoryQuery>(MasterAdoFactoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_FACTORY', 'query');
    },
    MASTER_ADO_LOCKDROP(variables: IMasterAdoLockdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoLockdropQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoLockdropQuery>(MasterAdoLockdropDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_LOCKDROP', 'query');
    },
    MASTER_ADO_MARKETPLACE_LATESTSALESTATE(variables: IMasterAdoMarketplaceLatestsalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMarketplaceLatestsalestateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMarketplaceLatestsalestateQuery>(MasterAdoMarketplaceLatestsalestateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MARKETPLACE_LATESTSALESTATE', 'query');
    },
    MASTER_ADO_MARKETPLACE_SALEIDS(variables: IMasterAdoMarketplaceSaleidsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMarketplaceSaleidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMarketplaceSaleidsQuery>(MasterAdoMarketplaceSaleidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MARKETPLACE_SALEIDS', 'query');
    },
    MASTER_ADO_MARKETPLACE_SALESTATE(variables: IMasterAdoMarketplaceSalestateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMarketplaceSalestateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMarketplaceSalestateQuery>(MasterAdoMarketplaceSalestateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MARKETPLACE_SALESTATE', 'query');
    },
    MASTER_ADO_MARKETPLACE(variables: IMasterAdoMarketplaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMarketplaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMarketplaceQuery>(MasterAdoMarketplaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MARKETPLACE', 'query');
    },
    MASTER_ADO_MERKLE_AIRDROP_MERKLEROOT(variables: IMasterAdoMerkleAirdropMerklerootQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMerkleAirdropMerklerootQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMerkleAirdropMerklerootQuery>(MasterAdoMerkleAirdropMerklerootDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MERKLE_AIRDROP_MERKLEROOT', 'query');
    },
    MASTER_ADO_MERKLE_AIRDROP(variables: IMasterAdoMerkleAirdropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoMerkleAirdropQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoMerkleAirdropQuery>(MasterAdoMerkleAirdropDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_MERKLE_AIRDROP', 'query');
    },
    MASTER_ADO_PRIMITIVE_GETVALUE(variables: IMasterAdoPrimitiveGetvalueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoPrimitiveGetvalueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoPrimitiveGetvalueQuery>(MasterAdoPrimitiveGetvalueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_PRIMITIVE_GETVALUE', 'query');
    },
    MASTER_ADO_PRIMITIVE(variables: IMasterAdoPrimitiveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoPrimitiveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoPrimitiveQuery>(MasterAdoPrimitiveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_PRIMITIVE', 'query');
    },
    MASTER_ADO_RATE_LIMITING_WITHDRAWALS(variables: IMasterAdoRateLimitingWithdrawalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoRateLimitingWithdrawalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoRateLimitingWithdrawalsQuery>(MasterAdoRateLimitingWithdrawalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_RATE_LIMITING_WITHDRAWALS', 'query');
    },
    MASTER_ADO_RATES(variables: IMasterAdoRatesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoRatesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoRatesQuery>(MasterAdoRatesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_RATES', 'query');
    },
    MASTER_ADO_SPLITTER(variables: IMasterAdoSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoSplitterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoSplitterQuery>(MasterAdoSplitterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_SPLITTER', 'query');
    },
    MASTER_ADO_TIMELOCK_GETLOCKEDFUNDS(variables: IMasterAdoTimelockGetlockedfundsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoTimelockGetlockedfundsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoTimelockGetlockedfundsQuery>(MasterAdoTimelockGetlockedfundsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_TIMELOCK_GETLOCKEDFUNDS', 'query');
    },
    MASTER_ADO_TIMELOCK(variables: IMasterAdoTimelockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoTimelockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoTimelockQuery>(MasterAdoTimelockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_TIMELOCK', 'query');
    },
    MASTER_ADO_VAULT_STRATEGYADDRESS(variables: IMasterAdoVaultStrategyaddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoVaultStrategyaddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoVaultStrategyaddressQuery>(MasterAdoVaultStrategyaddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_VAULT_STRATEGYADDRESS', 'query');
    },
    MASTER_ADO_VAULT(variables: IMasterAdoVaultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoVaultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoVaultQuery>(MasterAdoVaultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_VAULT', 'query');
    },
    MASTER_ADO_VESTING_BATCH(variables: IMasterAdoVestingBatchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoVestingBatchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoVestingBatchQuery>(MasterAdoVestingBatchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_VESTING_BATCH', 'query');
    },
    MASTER_ADO_VESTING(variables: IMasterAdoVestingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoVestingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoVestingQuery>(MasterAdoVestingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_VESTING', 'query');
    },
    MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT(variables: IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoWeightedDistributionSplitterGetuserweightQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoWeightedDistributionSplitterGetuserweightQuery>(MasterAdoWeightedDistributionSplitterGetuserweightDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER_GETUSERWEIGHT', 'query');
    },
    MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER(variables: IMasterAdoWeightedDistributionSplitterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoWeightedDistributionSplitterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoWeightedDistributionSplitterQuery>(MasterAdoWeightedDistributionSplitterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO_WEIGHTED_DISTRIBUTION_SPLITTER', 'query');
    },
    MASTER_ADO(variables?: IMasterAdoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdoQuery>(MasterAdoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADO', 'query');
    },
    MASTER_ADOP_PACKAGE(variables: IMasterAdopPackageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdopPackageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdopPackageQuery>(MasterAdopPackageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADOP_PACKAGE', 'query');
    },
    MASTER_ADOP(variables?: IMasterAdopQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAdopQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAdopQuery>(MasterAdopDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ADOP', 'query');
    },
    MASTER_ACCOUNTS(variables?: IMasterAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterAccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterAccountsQuery>(MasterAccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_ACCOUNTS', 'query');
    },
    MASTER_CHAINCONFIGS_CONFIG(variables: IMasterChainconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterChainconfigsConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterChainconfigsConfigQuery>(MasterChainconfigsConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_CHAINCONFIGS_CONFIG', 'query');
    },
    MASTER_CHAINCONFIGS(variables?: IMasterChainconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterChainconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterChainconfigsQuery>(MasterChainconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_CHAINCONFIGS', 'query');
    },
    MASTER_KEPLRCONFIGS_CONFIG(variables: IMasterKeplrconfigsConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterKeplrconfigsConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterKeplrconfigsConfigQuery>(MasterKeplrconfigsConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_KEPLRCONFIGS_CONFIG', 'query');
    },
    MASTER_KEPLRCONFIGS(variables?: IMasterKeplrconfigsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterKeplrconfigsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterKeplrconfigsQuery>(MasterKeplrconfigsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_KEPLRCONFIGS', 'query');
    },
    MASTER_TX_BYHASH(variables: IMasterTxByhashQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterTxByhashQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterTxByhashQuery>(MasterTxByhashDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_TX_BYHASH', 'query');
    },
    MASTER_TX(variables: IMasterTxQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<IMasterTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IMasterTxQuery>(MasterTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MASTER_TX', 'query');
    },
    TX_BY_CONTRACT(variables: ITxByContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByContractQuery>(TxByContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_CONTRACT', 'query');
    },
    TX_BY_CONTRACT_MASTER(variables: ITxByContractMasterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ITxByContractMasterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ITxByContractMasterQuery>(TxByContractMasterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TX_BY_CONTRACT_MASTER', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;