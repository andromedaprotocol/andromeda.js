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

/**
 * __useMasterAdoAddressListIncludesaddressQuery__
 *
 * To run a query within a React component, call `useMasterAdoAddressListIncludesaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAddressListIncludesaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAddressListIncludesaddressQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *      ADO_address_list_address_list_includesAddress_address: // value for 'ADO_address_list_address_list_includesAddress_address'
 *   },
 * });
 */
export function useMasterAdoAddressListIncludesaddressQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAddressListIncludesaddressQuery, IMasterAdoAddressListIncludesaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAddressListIncludesaddressQuery, IMasterAdoAddressListIncludesaddressQueryVariables>(MasterAdoAddressListIncludesaddressDocument, options);
      }
export function useMasterAdoAddressListIncludesaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAddressListIncludesaddressQuery, IMasterAdoAddressListIncludesaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAddressListIncludesaddressQuery, IMasterAdoAddressListIncludesaddressQueryVariables>(MasterAdoAddressListIncludesaddressDocument, options);
        }
export type MasterAdoAddressListIncludesaddressQueryHookResult = ReturnType<typeof useMasterAdoAddressListIncludesaddressQuery>;
export type MasterAdoAddressListIncludesaddressLazyQueryHookResult = ReturnType<typeof useMasterAdoAddressListIncludesaddressLazyQuery>;
export type MasterAdoAddressListIncludesaddressQueryResult = Apollo.QueryResult<IMasterAdoAddressListIncludesaddressQuery, IMasterAdoAddressListIncludesaddressQueryVariables>;
export function refetchMasterAdoAddressListIncludesaddressQuery(variables: IMasterAdoAddressListIncludesaddressQueryVariables) {
      return { query: MasterAdoAddressListIncludesaddressDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAddressListQuery__
 *
 * To run a query within a React component, call `useMasterAdoAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAddressListQuery({
 *   variables: {
 *      ADO_address_list_address: // value for 'ADO_address_list_address'
 *   },
 * });
 */
export function useMasterAdoAddressListQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAddressListQuery, IMasterAdoAddressListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAddressListQuery, IMasterAdoAddressListQueryVariables>(MasterAdoAddressListDocument, options);
      }
export function useMasterAdoAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAddressListQuery, IMasterAdoAddressListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAddressListQuery, IMasterAdoAddressListQueryVariables>(MasterAdoAddressListDocument, options);
        }
export type MasterAdoAddressListQueryHookResult = ReturnType<typeof useMasterAdoAddressListQuery>;
export type MasterAdoAddressListLazyQueryHookResult = ReturnType<typeof useMasterAdoAddressListLazyQuery>;
export type MasterAdoAddressListQueryResult = Apollo.QueryResult<IMasterAdoAddressListQuery, IMasterAdoAddressListQueryVariables>;
export function refetchMasterAdoAddressListQuery(variables: IMasterAdoAddressListQueryVariables) {
      return { query: MasterAdoAddressListDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAdoQuery__
 *
 * To run a query within a React component, call `useMasterAdoAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAdoQuery({
 *   variables: {
 *      ADO_ado_address: // value for 'ADO_ado_address'
 *   },
 * });
 */
export function useMasterAdoAdoQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAdoQuery, IMasterAdoAdoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAdoQuery, IMasterAdoAdoQueryVariables>(MasterAdoAdoDocument, options);
      }
export function useMasterAdoAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAdoQuery, IMasterAdoAdoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAdoQuery, IMasterAdoAdoQueryVariables>(MasterAdoAdoDocument, options);
        }
export type MasterAdoAdoQueryHookResult = ReturnType<typeof useMasterAdoAdoQuery>;
export type MasterAdoAdoLazyQueryHookResult = ReturnType<typeof useMasterAdoAdoLazyQuery>;
export type MasterAdoAdoQueryResult = Apollo.QueryResult<IMasterAdoAdoQuery, IMasterAdoAdoQueryVariables>;
export function refetchMasterAdoAdoQuery(variables: IMasterAdoAdoQueryVariables) {
      return { query: MasterAdoAdoDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAppQuery__
 *
 * To run a query within a React component, call `useMasterAdoAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAppQuery({
 *   variables: {
 *      ADO_app_address: // value for 'ADO_app_address'
 *   },
 * });
 */
export function useMasterAdoAppQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAppQuery, IMasterAdoAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAppQuery, IMasterAdoAppQueryVariables>(MasterAdoAppDocument, options);
      }
export function useMasterAdoAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAppQuery, IMasterAdoAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAppQuery, IMasterAdoAppQueryVariables>(MasterAdoAppDocument, options);
        }
export type MasterAdoAppQueryHookResult = ReturnType<typeof useMasterAdoAppQuery>;
export type MasterAdoAppLazyQueryHookResult = ReturnType<typeof useMasterAdoAppLazyQuery>;
export type MasterAdoAppQueryResult = Apollo.QueryResult<IMasterAdoAppQuery, IMasterAdoAppQueryVariables>;
export function refetchMasterAdoAppQuery(variables: IMasterAdoAppQueryVariables) {
      return { query: MasterAdoAppDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionAuctionidsQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionAuctionidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionAuctionidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionAuctionidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionIDs_tokenAddress: // value for 'ADO_auction_auction_auctionIDs_tokenAddress'
 *      ADO_auction_auction_auctionIDs_tokenId: // value for 'ADO_auction_auction_auctionIDs_tokenId'
 *   },
 * });
 */
export function useMasterAdoAuctionAuctionidsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionAuctionidsQuery, IMasterAdoAuctionAuctionidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionAuctionidsQuery, IMasterAdoAuctionAuctionidsQueryVariables>(MasterAdoAuctionAuctionidsDocument, options);
      }
export function useMasterAdoAuctionAuctionidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionAuctionidsQuery, IMasterAdoAuctionAuctionidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionAuctionidsQuery, IMasterAdoAuctionAuctionidsQueryVariables>(MasterAdoAuctionAuctionidsDocument, options);
        }
export type MasterAdoAuctionAuctionidsQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctionidsQuery>;
export type MasterAdoAuctionAuctionidsLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctionidsLazyQuery>;
export type MasterAdoAuctionAuctionidsQueryResult = Apollo.QueryResult<IMasterAdoAuctionAuctionidsQuery, IMasterAdoAuctionAuctionidsQueryVariables>;
export function refetchMasterAdoAuctionAuctionidsQuery(variables: IMasterAdoAuctionAuctionidsQueryVariables) {
      return { query: MasterAdoAuctionAuctionidsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionAuctioninfosforaddressQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionAuctioninfosforaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionAuctioninfosforaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionAuctioninfosforaddressQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionInfosForAddress_tokenAddress: // value for 'ADO_auction_auction_auctionInfosForAddress_tokenAddress'
 *   },
 * });
 */
export function useMasterAdoAuctionAuctioninfosforaddressQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionAuctioninfosforaddressQuery, IMasterAdoAuctionAuctioninfosforaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionAuctioninfosforaddressQuery, IMasterAdoAuctionAuctioninfosforaddressQueryVariables>(MasterAdoAuctionAuctioninfosforaddressDocument, options);
      }
export function useMasterAdoAuctionAuctioninfosforaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionAuctioninfosforaddressQuery, IMasterAdoAuctionAuctioninfosforaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionAuctioninfosforaddressQuery, IMasterAdoAuctionAuctioninfosforaddressQueryVariables>(MasterAdoAuctionAuctioninfosforaddressDocument, options);
        }
export type MasterAdoAuctionAuctioninfosforaddressQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctioninfosforaddressQuery>;
export type MasterAdoAuctionAuctioninfosforaddressLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctioninfosforaddressLazyQuery>;
export type MasterAdoAuctionAuctioninfosforaddressQueryResult = Apollo.QueryResult<IMasterAdoAuctionAuctioninfosforaddressQuery, IMasterAdoAuctionAuctioninfosforaddressQueryVariables>;
export function refetchMasterAdoAuctionAuctioninfosforaddressQuery(variables: IMasterAdoAuctionAuctioninfosforaddressQueryVariables) {
      return { query: MasterAdoAuctionAuctioninfosforaddressDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionAuctionstateQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionAuctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionAuctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionAuctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_auctionState_auctionId: // value for 'ADO_auction_auction_auctionState_auctionId'
 *   },
 * });
 */
export function useMasterAdoAuctionAuctionstateQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionAuctionstateQuery, IMasterAdoAuctionAuctionstateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionAuctionstateQuery, IMasterAdoAuctionAuctionstateQueryVariables>(MasterAdoAuctionAuctionstateDocument, options);
      }
export function useMasterAdoAuctionAuctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionAuctionstateQuery, IMasterAdoAuctionAuctionstateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionAuctionstateQuery, IMasterAdoAuctionAuctionstateQueryVariables>(MasterAdoAuctionAuctionstateDocument, options);
        }
export type MasterAdoAuctionAuctionstateQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctionstateQuery>;
export type MasterAdoAuctionAuctionstateLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionAuctionstateLazyQuery>;
export type MasterAdoAuctionAuctionstateQueryResult = Apollo.QueryResult<IMasterAdoAuctionAuctionstateQuery, IMasterAdoAuctionAuctionstateQueryVariables>;
export function refetchMasterAdoAuctionAuctionstateQuery(variables: IMasterAdoAuctionAuctionstateQueryVariables) {
      return { query: MasterAdoAuctionAuctionstateDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionBidsQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionBidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionBidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionBidsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_bids_auctionId: // value for 'ADO_auction_auction_bids_auctionId'
 *      ADO_auction_auction_bids_options: // value for 'ADO_auction_auction_bids_options'
 *   },
 * });
 */
export function useMasterAdoAuctionBidsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionBidsQuery, IMasterAdoAuctionBidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionBidsQuery, IMasterAdoAuctionBidsQueryVariables>(MasterAdoAuctionBidsDocument, options);
      }
export function useMasterAdoAuctionBidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionBidsQuery, IMasterAdoAuctionBidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionBidsQuery, IMasterAdoAuctionBidsQueryVariables>(MasterAdoAuctionBidsDocument, options);
        }
export type MasterAdoAuctionBidsQueryHookResult = ReturnType<typeof useMasterAdoAuctionBidsQuery>;
export type MasterAdoAuctionBidsLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionBidsLazyQuery>;
export type MasterAdoAuctionBidsQueryResult = Apollo.QueryResult<IMasterAdoAuctionBidsQuery, IMasterAdoAuctionBidsQueryVariables>;
export function refetchMasterAdoAuctionBidsQuery(variables: IMasterAdoAuctionBidsQueryVariables) {
      return { query: MasterAdoAuctionBidsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionLatestauctionstateQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionLatestauctionstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionLatestauctionstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionLatestauctionstateQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_latestAuctionState_tokenAddress: // value for 'ADO_auction_auction_latestAuctionState_tokenAddress'
 *      ADO_auction_auction_latestAuctionState_tokenId: // value for 'ADO_auction_auction_latestAuctionState_tokenId'
 *   },
 * });
 */
export function useMasterAdoAuctionLatestauctionstateQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionLatestauctionstateQuery, IMasterAdoAuctionLatestauctionstateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionLatestauctionstateQuery, IMasterAdoAuctionLatestauctionstateQueryVariables>(MasterAdoAuctionLatestauctionstateDocument, options);
      }
export function useMasterAdoAuctionLatestauctionstateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionLatestauctionstateQuery, IMasterAdoAuctionLatestauctionstateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionLatestauctionstateQuery, IMasterAdoAuctionLatestauctionstateQueryVariables>(MasterAdoAuctionLatestauctionstateDocument, options);
        }
export type MasterAdoAuctionLatestauctionstateQueryHookResult = ReturnType<typeof useMasterAdoAuctionLatestauctionstateQuery>;
export type MasterAdoAuctionLatestauctionstateLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionLatestauctionstateLazyQuery>;
export type MasterAdoAuctionLatestauctionstateQueryResult = Apollo.QueryResult<IMasterAdoAuctionLatestauctionstateQuery, IMasterAdoAuctionLatestauctionstateQueryVariables>;
export function refetchMasterAdoAuctionLatestauctionstateQuery(variables: IMasterAdoAuctionLatestauctionstateQueryVariables) {
      return { query: MasterAdoAuctionLatestauctionstateDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionSummaryfieldsQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionSummaryfieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionSummaryfieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionSummaryfieldsQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *      ADO_auction_auction_summaryFields_tokenAddress: // value for 'ADO_auction_auction_summaryFields_tokenAddress'
 *   },
 * });
 */
export function useMasterAdoAuctionSummaryfieldsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionSummaryfieldsQuery, IMasterAdoAuctionSummaryfieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionSummaryfieldsQuery, IMasterAdoAuctionSummaryfieldsQueryVariables>(MasterAdoAuctionSummaryfieldsDocument, options);
      }
export function useMasterAdoAuctionSummaryfieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionSummaryfieldsQuery, IMasterAdoAuctionSummaryfieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionSummaryfieldsQuery, IMasterAdoAuctionSummaryfieldsQueryVariables>(MasterAdoAuctionSummaryfieldsDocument, options);
        }
export type MasterAdoAuctionSummaryfieldsQueryHookResult = ReturnType<typeof useMasterAdoAuctionSummaryfieldsQuery>;
export type MasterAdoAuctionSummaryfieldsLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionSummaryfieldsLazyQuery>;
export type MasterAdoAuctionSummaryfieldsQueryResult = Apollo.QueryResult<IMasterAdoAuctionSummaryfieldsQuery, IMasterAdoAuctionSummaryfieldsQueryVariables>;
export function refetchMasterAdoAuctionSummaryfieldsQuery(variables: IMasterAdoAuctionSummaryfieldsQueryVariables) {
      return { query: MasterAdoAuctionSummaryfieldsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoAuctionQuery__
 *
 * To run a query within a React component, call `useMasterAdoAuctionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoAuctionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoAuctionQuery({
 *   variables: {
 *      ADO_auction_address: // value for 'ADO_auction_address'
 *   },
 * });
 */
export function useMasterAdoAuctionQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoAuctionQuery, IMasterAdoAuctionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoAuctionQuery, IMasterAdoAuctionQueryVariables>(MasterAdoAuctionDocument, options);
      }
export function useMasterAdoAuctionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoAuctionQuery, IMasterAdoAuctionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoAuctionQuery, IMasterAdoAuctionQueryVariables>(MasterAdoAuctionDocument, options);
        }
export type MasterAdoAuctionQueryHookResult = ReturnType<typeof useMasterAdoAuctionQuery>;
export type MasterAdoAuctionLazyQueryHookResult = ReturnType<typeof useMasterAdoAuctionLazyQuery>;
export type MasterAdoAuctionQueryResult = Apollo.QueryResult<IMasterAdoAuctionQuery, IMasterAdoAuctionQueryVariables>;
export function refetchMasterAdoAuctionQuery(variables: IMasterAdoAuctionQueryVariables) {
      return { query: MasterAdoAuctionDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCrowdfundQuery__
 *
 * To run a query within a React component, call `useMasterAdoCrowdfundQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCrowdfundQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCrowdfundQuery({
 *   variables: {
 *      ADO_crowdfund_address: // value for 'ADO_crowdfund_address'
 *   },
 * });
 */
export function useMasterAdoCrowdfundQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCrowdfundQuery, IMasterAdoCrowdfundQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCrowdfundQuery, IMasterAdoCrowdfundQueryVariables>(MasterAdoCrowdfundDocument, options);
      }
export function useMasterAdoCrowdfundLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCrowdfundQuery, IMasterAdoCrowdfundQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCrowdfundQuery, IMasterAdoCrowdfundQueryVariables>(MasterAdoCrowdfundDocument, options);
        }
export type MasterAdoCrowdfundQueryHookResult = ReturnType<typeof useMasterAdoCrowdfundQuery>;
export type MasterAdoCrowdfundLazyQueryHookResult = ReturnType<typeof useMasterAdoCrowdfundLazyQuery>;
export type MasterAdoCrowdfundQueryResult = Apollo.QueryResult<IMasterAdoCrowdfundQuery, IMasterAdoCrowdfundQueryVariables>;
export function refetchMasterAdoCrowdfundQuery(variables: IMasterAdoCrowdfundQueryVariables) {
      return { query: MasterAdoCrowdfundDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw20AllowanceQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw20AllowanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20AllowanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20AllowanceQuery({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *      ADO_cw20_cw20_allowance_owner: // value for 'ADO_cw20_cw20_allowance_owner'
 *      ADO_cw20_cw20_allowance_spender: // value for 'ADO_cw20_cw20_allowance_spender'
 *   },
 * });
 */
export function useMasterAdoCw20AllowanceQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20AllowanceQuery, IMasterAdoCw20AllowanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20AllowanceQuery, IMasterAdoCw20AllowanceQueryVariables>(MasterAdoCw20AllowanceDocument, options);
      }
export function useMasterAdoCw20AllowanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20AllowanceQuery, IMasterAdoCw20AllowanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20AllowanceQuery, IMasterAdoCw20AllowanceQueryVariables>(MasterAdoCw20AllowanceDocument, options);
        }
export type MasterAdoCw20AllowanceQueryHookResult = ReturnType<typeof useMasterAdoCw20AllowanceQuery>;
export type MasterAdoCw20AllowanceLazyQueryHookResult = ReturnType<typeof useMasterAdoCw20AllowanceLazyQuery>;
export type MasterAdoCw20AllowanceQueryResult = Apollo.QueryResult<IMasterAdoCw20AllowanceQuery, IMasterAdoCw20AllowanceQueryVariables>;
export function refetchMasterAdoCw20AllowanceQuery(variables: IMasterAdoCw20AllowanceQueryVariables) {
      return { query: MasterAdoCw20AllowanceDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw20Query__
 *
 * To run a query within a React component, call `useMasterAdoCw20Query` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20Query({
 *   variables: {
 *      ADO_cw20_address: // value for 'ADO_cw20_address'
 *   },
 * });
 */
export function useMasterAdoCw20Query(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20Query, IMasterAdoCw20QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20Query, IMasterAdoCw20QueryVariables>(MasterAdoCw20Document, options);
      }
export function useMasterAdoCw20LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20Query, IMasterAdoCw20QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20Query, IMasterAdoCw20QueryVariables>(MasterAdoCw20Document, options);
        }
export type MasterAdoCw20QueryHookResult = ReturnType<typeof useMasterAdoCw20Query>;
export type MasterAdoCw20LazyQueryHookResult = ReturnType<typeof useMasterAdoCw20LazyQuery>;
export type MasterAdoCw20QueryResult = Apollo.QueryResult<IMasterAdoCw20Query, IMasterAdoCw20QueryVariables>;
export function refetchMasterAdoCw20Query(variables: IMasterAdoCw20QueryVariables) {
      return { query: MasterAdoCw20Document, variables: variables }
    }
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

/**
 * __useMasterAdoCw20ExchangeSaleQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw20ExchangeSaleQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20ExchangeSaleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20ExchangeSaleQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *      ADO_cw20_exchange_cw20_exchange_sale_cw20: // value for 'ADO_cw20_exchange_cw20_exchange_sale_cw20'
 *      ADO_cw20_exchange_cw20_exchange_sale_native: // value for 'ADO_cw20_exchange_cw20_exchange_sale_native'
 *   },
 * });
 */
export function useMasterAdoCw20ExchangeSaleQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20ExchangeSaleQuery, IMasterAdoCw20ExchangeSaleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20ExchangeSaleQuery, IMasterAdoCw20ExchangeSaleQueryVariables>(MasterAdoCw20ExchangeSaleDocument, options);
      }
export function useMasterAdoCw20ExchangeSaleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20ExchangeSaleQuery, IMasterAdoCw20ExchangeSaleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20ExchangeSaleQuery, IMasterAdoCw20ExchangeSaleQueryVariables>(MasterAdoCw20ExchangeSaleDocument, options);
        }
export type MasterAdoCw20ExchangeSaleQueryHookResult = ReturnType<typeof useMasterAdoCw20ExchangeSaleQuery>;
export type MasterAdoCw20ExchangeSaleLazyQueryHookResult = ReturnType<typeof useMasterAdoCw20ExchangeSaleLazyQuery>;
export type MasterAdoCw20ExchangeSaleQueryResult = Apollo.QueryResult<IMasterAdoCw20ExchangeSaleQuery, IMasterAdoCw20ExchangeSaleQueryVariables>;
export function refetchMasterAdoCw20ExchangeSaleQuery(variables: IMasterAdoCw20ExchangeSaleQueryVariables) {
      return { query: MasterAdoCw20ExchangeSaleDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw20ExchangeQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw20ExchangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20ExchangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20ExchangeQuery({
 *   variables: {
 *      ADO_cw20_exchange_address: // value for 'ADO_cw20_exchange_address'
 *   },
 * });
 */
export function useMasterAdoCw20ExchangeQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20ExchangeQuery, IMasterAdoCw20ExchangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20ExchangeQuery, IMasterAdoCw20ExchangeQueryVariables>(MasterAdoCw20ExchangeDocument, options);
      }
export function useMasterAdoCw20ExchangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20ExchangeQuery, IMasterAdoCw20ExchangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20ExchangeQuery, IMasterAdoCw20ExchangeQueryVariables>(MasterAdoCw20ExchangeDocument, options);
        }
export type MasterAdoCw20ExchangeQueryHookResult = ReturnType<typeof useMasterAdoCw20ExchangeQuery>;
export type MasterAdoCw20ExchangeLazyQueryHookResult = ReturnType<typeof useMasterAdoCw20ExchangeLazyQuery>;
export type MasterAdoCw20ExchangeQueryResult = Apollo.QueryResult<IMasterAdoCw20ExchangeQuery, IMasterAdoCw20ExchangeQueryVariables>;
export function refetchMasterAdoCw20ExchangeQuery(variables: IMasterAdoCw20ExchangeQueryVariables) {
      return { query: MasterAdoCw20ExchangeDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw20StakingStakerQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw20StakingStakerQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20StakingStakerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20StakingStakerQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *      ADO_cw20_staking_cw20_staking_staker_address: // value for 'ADO_cw20_staking_cw20_staking_staker_address'
 *   },
 * });
 */
export function useMasterAdoCw20StakingStakerQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20StakingStakerQuery, IMasterAdoCw20StakingStakerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20StakingStakerQuery, IMasterAdoCw20StakingStakerQueryVariables>(MasterAdoCw20StakingStakerDocument, options);
      }
export function useMasterAdoCw20StakingStakerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20StakingStakerQuery, IMasterAdoCw20StakingStakerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20StakingStakerQuery, IMasterAdoCw20StakingStakerQueryVariables>(MasterAdoCw20StakingStakerDocument, options);
        }
export type MasterAdoCw20StakingStakerQueryHookResult = ReturnType<typeof useMasterAdoCw20StakingStakerQuery>;
export type MasterAdoCw20StakingStakerLazyQueryHookResult = ReturnType<typeof useMasterAdoCw20StakingStakerLazyQuery>;
export type MasterAdoCw20StakingStakerQueryResult = Apollo.QueryResult<IMasterAdoCw20StakingStakerQuery, IMasterAdoCw20StakingStakerQueryVariables>;
export function refetchMasterAdoCw20StakingStakerQuery(variables: IMasterAdoCw20StakingStakerQueryVariables) {
      return { query: MasterAdoCw20StakingStakerDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw20StakingQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw20StakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw20StakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw20StakingQuery({
 *   variables: {
 *      ADO_cw20_staking_address: // value for 'ADO_cw20_staking_address'
 *   },
 * });
 */
export function useMasterAdoCw20StakingQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw20StakingQuery, IMasterAdoCw20StakingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw20StakingQuery, IMasterAdoCw20StakingQueryVariables>(MasterAdoCw20StakingDocument, options);
      }
export function useMasterAdoCw20StakingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw20StakingQuery, IMasterAdoCw20StakingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw20StakingQuery, IMasterAdoCw20StakingQueryVariables>(MasterAdoCw20StakingDocument, options);
        }
export type MasterAdoCw20StakingQueryHookResult = ReturnType<typeof useMasterAdoCw20StakingQuery>;
export type MasterAdoCw20StakingLazyQueryHookResult = ReturnType<typeof useMasterAdoCw20StakingLazyQuery>;
export type MasterAdoCw20StakingQueryResult = Apollo.QueryResult<IMasterAdoCw20StakingQuery, IMasterAdoCw20StakingQueryVariables>;
export function refetchMasterAdoCw20StakingQuery(variables: IMasterAdoCw20StakingQueryVariables) {
      return { query: MasterAdoCw20StakingDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721AllnftinfoQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw721AllnftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721AllnftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721AllnftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_allNftInfo_includeExpired: // value for 'ADO_cw721_cw721_allNftInfo_includeExpired'
 *      ADO_cw721_cw721_allNftInfo_tokenId: // value for 'ADO_cw721_cw721_allNftInfo_tokenId'
 *   },
 * });
 */
export function useMasterAdoCw721AllnftinfoQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721AllnftinfoQuery, IMasterAdoCw721AllnftinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721AllnftinfoQuery, IMasterAdoCw721AllnftinfoQueryVariables>(MasterAdoCw721AllnftinfoDocument, options);
      }
export function useMasterAdoCw721AllnftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721AllnftinfoQuery, IMasterAdoCw721AllnftinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721AllnftinfoQuery, IMasterAdoCw721AllnftinfoQueryVariables>(MasterAdoCw721AllnftinfoDocument, options);
        }
export type MasterAdoCw721AllnftinfoQueryHookResult = ReturnType<typeof useMasterAdoCw721AllnftinfoQuery>;
export type MasterAdoCw721AllnftinfoLazyQueryHookResult = ReturnType<typeof useMasterAdoCw721AllnftinfoLazyQuery>;
export type MasterAdoCw721AllnftinfoQueryResult = Apollo.QueryResult<IMasterAdoCw721AllnftinfoQuery, IMasterAdoCw721AllnftinfoQueryVariables>;
export function refetchMasterAdoCw721AllnftinfoQuery(variables: IMasterAdoCw721AllnftinfoQueryVariables) {
      return { query: MasterAdoCw721AllnftinfoDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721ApprovalQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw721ApprovalQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721ApprovalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721ApprovalQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_approval_includeExpired: // value for 'ADO_cw721_cw721_approval_includeExpired'
 *      ADO_cw721_cw721_approval_spender: // value for 'ADO_cw721_cw721_approval_spender'
 *      ADO_cw721_cw721_approval_tokenId: // value for 'ADO_cw721_cw721_approval_tokenId'
 *   },
 * });
 */
export function useMasterAdoCw721ApprovalQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721ApprovalQuery, IMasterAdoCw721ApprovalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721ApprovalQuery, IMasterAdoCw721ApprovalQueryVariables>(MasterAdoCw721ApprovalDocument, options);
      }
export function useMasterAdoCw721ApprovalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721ApprovalQuery, IMasterAdoCw721ApprovalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721ApprovalQuery, IMasterAdoCw721ApprovalQueryVariables>(MasterAdoCw721ApprovalDocument, options);
        }
export type MasterAdoCw721ApprovalQueryHookResult = ReturnType<typeof useMasterAdoCw721ApprovalQuery>;
export type MasterAdoCw721ApprovalLazyQueryHookResult = ReturnType<typeof useMasterAdoCw721ApprovalLazyQuery>;
export type MasterAdoCw721ApprovalQueryResult = Apollo.QueryResult<IMasterAdoCw721ApprovalQuery, IMasterAdoCw721ApprovalQueryVariables>;
export function refetchMasterAdoCw721ApprovalQuery(variables: IMasterAdoCw721ApprovalQueryVariables) {
      return { query: MasterAdoCw721ApprovalDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721NftinfoQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw721NftinfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721NftinfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721NftinfoQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_nftInfo_tokenId: // value for 'ADO_cw721_cw721_nftInfo_tokenId'
 *   },
 * });
 */
export function useMasterAdoCw721NftinfoQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721NftinfoQuery, IMasterAdoCw721NftinfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721NftinfoQuery, IMasterAdoCw721NftinfoQueryVariables>(MasterAdoCw721NftinfoDocument, options);
      }
export function useMasterAdoCw721NftinfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721NftinfoQuery, IMasterAdoCw721NftinfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721NftinfoQuery, IMasterAdoCw721NftinfoQueryVariables>(MasterAdoCw721NftinfoDocument, options);
        }
export type MasterAdoCw721NftinfoQueryHookResult = ReturnType<typeof useMasterAdoCw721NftinfoQuery>;
export type MasterAdoCw721NftinfoLazyQueryHookResult = ReturnType<typeof useMasterAdoCw721NftinfoLazyQuery>;
export type MasterAdoCw721NftinfoQueryResult = Apollo.QueryResult<IMasterAdoCw721NftinfoQuery, IMasterAdoCw721NftinfoQueryVariables>;
export function refetchMasterAdoCw721NftinfoQuery(variables: IMasterAdoCw721NftinfoQueryVariables) {
      return { query: MasterAdoCw721NftinfoDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721OwnerofQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw721OwnerofQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721OwnerofQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721OwnerofQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_ownerOf_includeExpired: // value for 'ADO_cw721_cw721_ownerOf_includeExpired'
 *      ADO_cw721_cw721_ownerOf_tokenId: // value for 'ADO_cw721_cw721_ownerOf_tokenId'
 *   },
 * });
 */
export function useMasterAdoCw721OwnerofQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721OwnerofQuery, IMasterAdoCw721OwnerofQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721OwnerofQuery, IMasterAdoCw721OwnerofQueryVariables>(MasterAdoCw721OwnerofDocument, options);
      }
export function useMasterAdoCw721OwnerofLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721OwnerofQuery, IMasterAdoCw721OwnerofQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721OwnerofQuery, IMasterAdoCw721OwnerofQueryVariables>(MasterAdoCw721OwnerofDocument, options);
        }
export type MasterAdoCw721OwnerofQueryHookResult = ReturnType<typeof useMasterAdoCw721OwnerofQuery>;
export type MasterAdoCw721OwnerofLazyQueryHookResult = ReturnType<typeof useMasterAdoCw721OwnerofLazyQuery>;
export type MasterAdoCw721OwnerofQueryResult = Apollo.QueryResult<IMasterAdoCw721OwnerofQuery, IMasterAdoCw721OwnerofQueryVariables>;
export function refetchMasterAdoCw721OwnerofQuery(variables: IMasterAdoCw721OwnerofQueryVariables) {
      return { query: MasterAdoCw721OwnerofDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721TransferagreementQuery__
 *
 * To run a query within a React component, call `useMasterAdoCw721TransferagreementQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721TransferagreementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721TransferagreementQuery({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *      ADO_cw721_cw721_transferAgreement_tokenId: // value for 'ADO_cw721_cw721_transferAgreement_tokenId'
 *   },
 * });
 */
export function useMasterAdoCw721TransferagreementQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721TransferagreementQuery, IMasterAdoCw721TransferagreementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721TransferagreementQuery, IMasterAdoCw721TransferagreementQueryVariables>(MasterAdoCw721TransferagreementDocument, options);
      }
export function useMasterAdoCw721TransferagreementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721TransferagreementQuery, IMasterAdoCw721TransferagreementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721TransferagreementQuery, IMasterAdoCw721TransferagreementQueryVariables>(MasterAdoCw721TransferagreementDocument, options);
        }
export type MasterAdoCw721TransferagreementQueryHookResult = ReturnType<typeof useMasterAdoCw721TransferagreementQuery>;
export type MasterAdoCw721TransferagreementLazyQueryHookResult = ReturnType<typeof useMasterAdoCw721TransferagreementLazyQuery>;
export type MasterAdoCw721TransferagreementQueryResult = Apollo.QueryResult<IMasterAdoCw721TransferagreementQuery, IMasterAdoCw721TransferagreementQueryVariables>;
export function refetchMasterAdoCw721TransferagreementQuery(variables: IMasterAdoCw721TransferagreementQueryVariables) {
      return { query: MasterAdoCw721TransferagreementDocument, variables: variables }
    }
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

/**
 * __useMasterAdoCw721Query__
 *
 * To run a query within a React component, call `useMasterAdoCw721Query` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoCw721Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoCw721Query({
 *   variables: {
 *      ADO_cw721_address: // value for 'ADO_cw721_address'
 *   },
 * });
 */
export function useMasterAdoCw721Query(baseOptions: Apollo.QueryHookOptions<IMasterAdoCw721Query, IMasterAdoCw721QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoCw721Query, IMasterAdoCw721QueryVariables>(MasterAdoCw721Document, options);
      }
export function useMasterAdoCw721LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoCw721Query, IMasterAdoCw721QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoCw721Query, IMasterAdoCw721QueryVariables>(MasterAdoCw721Document, options);
        }
export type MasterAdoCw721QueryHookResult = ReturnType<typeof useMasterAdoCw721Query>;
export type MasterAdoCw721LazyQueryHookResult = ReturnType<typeof useMasterAdoCw721LazyQuery>;
export type MasterAdoCw721QueryResult = Apollo.QueryResult<IMasterAdoCw721Query, IMasterAdoCw721QueryVariables>;
export function refetchMasterAdoCw721Query(variables: IMasterAdoCw721QueryVariables) {
      return { query: MasterAdoCw721Document, variables: variables }
    }
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

/**
 * __useMasterAdoFactoryQuery__
 *
 * To run a query within a React component, call `useMasterAdoFactoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoFactoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoFactoryQuery({
 *   variables: {
 *      ADO_factory_address: // value for 'ADO_factory_address'
 *   },
 * });
 */
export function useMasterAdoFactoryQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoFactoryQuery, IMasterAdoFactoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoFactoryQuery, IMasterAdoFactoryQueryVariables>(MasterAdoFactoryDocument, options);
      }
export function useMasterAdoFactoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoFactoryQuery, IMasterAdoFactoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoFactoryQuery, IMasterAdoFactoryQueryVariables>(MasterAdoFactoryDocument, options);
        }
export type MasterAdoFactoryQueryHookResult = ReturnType<typeof useMasterAdoFactoryQuery>;
export type MasterAdoFactoryLazyQueryHookResult = ReturnType<typeof useMasterAdoFactoryLazyQuery>;
export type MasterAdoFactoryQueryResult = Apollo.QueryResult<IMasterAdoFactoryQuery, IMasterAdoFactoryQueryVariables>;
export function refetchMasterAdoFactoryQuery(variables: IMasterAdoFactoryQueryVariables) {
      return { query: MasterAdoFactoryDocument, variables: variables }
    }
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

/**
 * __useMasterAdoLockdropQuery__
 *
 * To run a query within a React component, call `useMasterAdoLockdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoLockdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoLockdropQuery({
 *   variables: {
 *      ADO_lockdrop_address: // value for 'ADO_lockdrop_address'
 *   },
 * });
 */
export function useMasterAdoLockdropQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoLockdropQuery, IMasterAdoLockdropQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoLockdropQuery, IMasterAdoLockdropQueryVariables>(MasterAdoLockdropDocument, options);
      }
export function useMasterAdoLockdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoLockdropQuery, IMasterAdoLockdropQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoLockdropQuery, IMasterAdoLockdropQueryVariables>(MasterAdoLockdropDocument, options);
        }
export type MasterAdoLockdropQueryHookResult = ReturnType<typeof useMasterAdoLockdropQuery>;
export type MasterAdoLockdropLazyQueryHookResult = ReturnType<typeof useMasterAdoLockdropLazyQuery>;
export type MasterAdoLockdropQueryResult = Apollo.QueryResult<IMasterAdoLockdropQuery, IMasterAdoLockdropQueryVariables>;
export function refetchMasterAdoLockdropQuery(variables: IMasterAdoLockdropQueryVariables) {
      return { query: MasterAdoLockdropDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMarketplaceLatestsalestateQuery__
 *
 * To run a query within a React component, call `useMasterAdoMarketplaceLatestsalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMarketplaceLatestsalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMarketplaceLatestsalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_latestSaleState_tokenAddress: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenAddress'
 *      ADO_marketplace_marketplace_latestSaleState_tokenId: // value for 'ADO_marketplace_marketplace_latestSaleState_tokenId'
 *   },
 * });
 */
export function useMasterAdoMarketplaceLatestsalestateQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMarketplaceLatestsalestateQuery, IMasterAdoMarketplaceLatestsalestateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMarketplaceLatestsalestateQuery, IMasterAdoMarketplaceLatestsalestateQueryVariables>(MasterAdoMarketplaceLatestsalestateDocument, options);
      }
export function useMasterAdoMarketplaceLatestsalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMarketplaceLatestsalestateQuery, IMasterAdoMarketplaceLatestsalestateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMarketplaceLatestsalestateQuery, IMasterAdoMarketplaceLatestsalestateQueryVariables>(MasterAdoMarketplaceLatestsalestateDocument, options);
        }
export type MasterAdoMarketplaceLatestsalestateQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceLatestsalestateQuery>;
export type MasterAdoMarketplaceLatestsalestateLazyQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceLatestsalestateLazyQuery>;
export type MasterAdoMarketplaceLatestsalestateQueryResult = Apollo.QueryResult<IMasterAdoMarketplaceLatestsalestateQuery, IMasterAdoMarketplaceLatestsalestateQueryVariables>;
export function refetchMasterAdoMarketplaceLatestsalestateQuery(variables: IMasterAdoMarketplaceLatestsalestateQueryVariables) {
      return { query: MasterAdoMarketplaceLatestsalestateDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMarketplaceSaleidsQuery__
 *
 * To run a query within a React component, call `useMasterAdoMarketplaceSaleidsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMarketplaceSaleidsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMarketplaceSaleidsQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleIds_tokenAddress: // value for 'ADO_marketplace_marketplace_saleIds_tokenAddress'
 *      ADO_marketplace_marketplace_saleIds_tokenId: // value for 'ADO_marketplace_marketplace_saleIds_tokenId'
 *   },
 * });
 */
export function useMasterAdoMarketplaceSaleidsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMarketplaceSaleidsQuery, IMasterAdoMarketplaceSaleidsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMarketplaceSaleidsQuery, IMasterAdoMarketplaceSaleidsQueryVariables>(MasterAdoMarketplaceSaleidsDocument, options);
      }
export function useMasterAdoMarketplaceSaleidsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMarketplaceSaleidsQuery, IMasterAdoMarketplaceSaleidsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMarketplaceSaleidsQuery, IMasterAdoMarketplaceSaleidsQueryVariables>(MasterAdoMarketplaceSaleidsDocument, options);
        }
export type MasterAdoMarketplaceSaleidsQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceSaleidsQuery>;
export type MasterAdoMarketplaceSaleidsLazyQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceSaleidsLazyQuery>;
export type MasterAdoMarketplaceSaleidsQueryResult = Apollo.QueryResult<IMasterAdoMarketplaceSaleidsQuery, IMasterAdoMarketplaceSaleidsQueryVariables>;
export function refetchMasterAdoMarketplaceSaleidsQuery(variables: IMasterAdoMarketplaceSaleidsQueryVariables) {
      return { query: MasterAdoMarketplaceSaleidsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMarketplaceSalestateQuery__
 *
 * To run a query within a React component, call `useMasterAdoMarketplaceSalestateQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMarketplaceSalestateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMarketplaceSalestateQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *      ADO_marketplace_marketplace_saleState_saleId: // value for 'ADO_marketplace_marketplace_saleState_saleId'
 *   },
 * });
 */
export function useMasterAdoMarketplaceSalestateQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMarketplaceSalestateQuery, IMasterAdoMarketplaceSalestateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMarketplaceSalestateQuery, IMasterAdoMarketplaceSalestateQueryVariables>(MasterAdoMarketplaceSalestateDocument, options);
      }
export function useMasterAdoMarketplaceSalestateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMarketplaceSalestateQuery, IMasterAdoMarketplaceSalestateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMarketplaceSalestateQuery, IMasterAdoMarketplaceSalestateQueryVariables>(MasterAdoMarketplaceSalestateDocument, options);
        }
export type MasterAdoMarketplaceSalestateQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceSalestateQuery>;
export type MasterAdoMarketplaceSalestateLazyQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceSalestateLazyQuery>;
export type MasterAdoMarketplaceSalestateQueryResult = Apollo.QueryResult<IMasterAdoMarketplaceSalestateQuery, IMasterAdoMarketplaceSalestateQueryVariables>;
export function refetchMasterAdoMarketplaceSalestateQuery(variables: IMasterAdoMarketplaceSalestateQueryVariables) {
      return { query: MasterAdoMarketplaceSalestateDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMarketplaceQuery__
 *
 * To run a query within a React component, call `useMasterAdoMarketplaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMarketplaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMarketplaceQuery({
 *   variables: {
 *      ADO_marketplace_address: // value for 'ADO_marketplace_address'
 *   },
 * });
 */
export function useMasterAdoMarketplaceQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMarketplaceQuery, IMasterAdoMarketplaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMarketplaceQuery, IMasterAdoMarketplaceQueryVariables>(MasterAdoMarketplaceDocument, options);
      }
export function useMasterAdoMarketplaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMarketplaceQuery, IMasterAdoMarketplaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMarketplaceQuery, IMasterAdoMarketplaceQueryVariables>(MasterAdoMarketplaceDocument, options);
        }
export type MasterAdoMarketplaceQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceQuery>;
export type MasterAdoMarketplaceLazyQueryHookResult = ReturnType<typeof useMasterAdoMarketplaceLazyQuery>;
export type MasterAdoMarketplaceQueryResult = Apollo.QueryResult<IMasterAdoMarketplaceQuery, IMasterAdoMarketplaceQueryVariables>;
export function refetchMasterAdoMarketplaceQuery(variables: IMasterAdoMarketplaceQueryVariables) {
      return { query: MasterAdoMarketplaceDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMerkleAirdropMerklerootQuery__
 *
 * To run a query within a React component, call `useMasterAdoMerkleAirdropMerklerootQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMerkleAirdropMerklerootQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMerkleAirdropMerklerootQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *      ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage: // value for 'ADO_merkle_airdrop_merkle_airdrop_merkleRoot_stage'
 *   },
 * });
 */
export function useMasterAdoMerkleAirdropMerklerootQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMerkleAirdropMerklerootQuery, IMasterAdoMerkleAirdropMerklerootQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMerkleAirdropMerklerootQuery, IMasterAdoMerkleAirdropMerklerootQueryVariables>(MasterAdoMerkleAirdropMerklerootDocument, options);
      }
export function useMasterAdoMerkleAirdropMerklerootLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMerkleAirdropMerklerootQuery, IMasterAdoMerkleAirdropMerklerootQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMerkleAirdropMerklerootQuery, IMasterAdoMerkleAirdropMerklerootQueryVariables>(MasterAdoMerkleAirdropMerklerootDocument, options);
        }
export type MasterAdoMerkleAirdropMerklerootQueryHookResult = ReturnType<typeof useMasterAdoMerkleAirdropMerklerootQuery>;
export type MasterAdoMerkleAirdropMerklerootLazyQueryHookResult = ReturnType<typeof useMasterAdoMerkleAirdropMerklerootLazyQuery>;
export type MasterAdoMerkleAirdropMerklerootQueryResult = Apollo.QueryResult<IMasterAdoMerkleAirdropMerklerootQuery, IMasterAdoMerkleAirdropMerklerootQueryVariables>;
export function refetchMasterAdoMerkleAirdropMerklerootQuery(variables: IMasterAdoMerkleAirdropMerklerootQueryVariables) {
      return { query: MasterAdoMerkleAirdropMerklerootDocument, variables: variables }
    }
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

/**
 * __useMasterAdoMerkleAirdropQuery__
 *
 * To run a query within a React component, call `useMasterAdoMerkleAirdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoMerkleAirdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoMerkleAirdropQuery({
 *   variables: {
 *      ADO_merkle_airdrop_address: // value for 'ADO_merkle_airdrop_address'
 *   },
 * });
 */
export function useMasterAdoMerkleAirdropQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoMerkleAirdropQuery, IMasterAdoMerkleAirdropQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoMerkleAirdropQuery, IMasterAdoMerkleAirdropQueryVariables>(MasterAdoMerkleAirdropDocument, options);
      }
export function useMasterAdoMerkleAirdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoMerkleAirdropQuery, IMasterAdoMerkleAirdropQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoMerkleAirdropQuery, IMasterAdoMerkleAirdropQueryVariables>(MasterAdoMerkleAirdropDocument, options);
        }
export type MasterAdoMerkleAirdropQueryHookResult = ReturnType<typeof useMasterAdoMerkleAirdropQuery>;
export type MasterAdoMerkleAirdropLazyQueryHookResult = ReturnType<typeof useMasterAdoMerkleAirdropLazyQuery>;
export type MasterAdoMerkleAirdropQueryResult = Apollo.QueryResult<IMasterAdoMerkleAirdropQuery, IMasterAdoMerkleAirdropQueryVariables>;
export function refetchMasterAdoMerkleAirdropQuery(variables: IMasterAdoMerkleAirdropQueryVariables) {
      return { query: MasterAdoMerkleAirdropDocument, variables: variables }
    }
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

/**
 * __useMasterAdoPrimitiveGetvalueQuery__
 *
 * To run a query within a React component, call `useMasterAdoPrimitiveGetvalueQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoPrimitiveGetvalueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoPrimitiveGetvalueQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *      ADO_primitive_primitive_getValue_key: // value for 'ADO_primitive_primitive_getValue_key'
 *   },
 * });
 */
export function useMasterAdoPrimitiveGetvalueQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoPrimitiveGetvalueQuery, IMasterAdoPrimitiveGetvalueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoPrimitiveGetvalueQuery, IMasterAdoPrimitiveGetvalueQueryVariables>(MasterAdoPrimitiveGetvalueDocument, options);
      }
export function useMasterAdoPrimitiveGetvalueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoPrimitiveGetvalueQuery, IMasterAdoPrimitiveGetvalueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoPrimitiveGetvalueQuery, IMasterAdoPrimitiveGetvalueQueryVariables>(MasterAdoPrimitiveGetvalueDocument, options);
        }
export type MasterAdoPrimitiveGetvalueQueryHookResult = ReturnType<typeof useMasterAdoPrimitiveGetvalueQuery>;
export type MasterAdoPrimitiveGetvalueLazyQueryHookResult = ReturnType<typeof useMasterAdoPrimitiveGetvalueLazyQuery>;
export type MasterAdoPrimitiveGetvalueQueryResult = Apollo.QueryResult<IMasterAdoPrimitiveGetvalueQuery, IMasterAdoPrimitiveGetvalueQueryVariables>;
export function refetchMasterAdoPrimitiveGetvalueQuery(variables: IMasterAdoPrimitiveGetvalueQueryVariables) {
      return { query: MasterAdoPrimitiveGetvalueDocument, variables: variables }
    }
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

/**
 * __useMasterAdoPrimitiveQuery__
 *
 * To run a query within a React component, call `useMasterAdoPrimitiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoPrimitiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoPrimitiveQuery({
 *   variables: {
 *      ADO_primitive_address: // value for 'ADO_primitive_address'
 *   },
 * });
 */
export function useMasterAdoPrimitiveQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoPrimitiveQuery, IMasterAdoPrimitiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoPrimitiveQuery, IMasterAdoPrimitiveQueryVariables>(MasterAdoPrimitiveDocument, options);
      }
export function useMasterAdoPrimitiveLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoPrimitiveQuery, IMasterAdoPrimitiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoPrimitiveQuery, IMasterAdoPrimitiveQueryVariables>(MasterAdoPrimitiveDocument, options);
        }
export type MasterAdoPrimitiveQueryHookResult = ReturnType<typeof useMasterAdoPrimitiveQuery>;
export type MasterAdoPrimitiveLazyQueryHookResult = ReturnType<typeof useMasterAdoPrimitiveLazyQuery>;
export type MasterAdoPrimitiveQueryResult = Apollo.QueryResult<IMasterAdoPrimitiveQuery, IMasterAdoPrimitiveQueryVariables>;
export function refetchMasterAdoPrimitiveQuery(variables: IMasterAdoPrimitiveQueryVariables) {
      return { query: MasterAdoPrimitiveDocument, variables: variables }
    }
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

/**
 * __useMasterAdoRateLimitingWithdrawalsQuery__
 *
 * To run a query within a React component, call `useMasterAdoRateLimitingWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoRateLimitingWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoRateLimitingWithdrawalsQuery({
 *   variables: {
 *      ADO_rate_limiting_withdrawals_address: // value for 'ADO_rate_limiting_withdrawals_address'
 *   },
 * });
 */
export function useMasterAdoRateLimitingWithdrawalsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoRateLimitingWithdrawalsQuery, IMasterAdoRateLimitingWithdrawalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoRateLimitingWithdrawalsQuery, IMasterAdoRateLimitingWithdrawalsQueryVariables>(MasterAdoRateLimitingWithdrawalsDocument, options);
      }
export function useMasterAdoRateLimitingWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoRateLimitingWithdrawalsQuery, IMasterAdoRateLimitingWithdrawalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoRateLimitingWithdrawalsQuery, IMasterAdoRateLimitingWithdrawalsQueryVariables>(MasterAdoRateLimitingWithdrawalsDocument, options);
        }
export type MasterAdoRateLimitingWithdrawalsQueryHookResult = ReturnType<typeof useMasterAdoRateLimitingWithdrawalsQuery>;
export type MasterAdoRateLimitingWithdrawalsLazyQueryHookResult = ReturnType<typeof useMasterAdoRateLimitingWithdrawalsLazyQuery>;
export type MasterAdoRateLimitingWithdrawalsQueryResult = Apollo.QueryResult<IMasterAdoRateLimitingWithdrawalsQuery, IMasterAdoRateLimitingWithdrawalsQueryVariables>;
export function refetchMasterAdoRateLimitingWithdrawalsQuery(variables: IMasterAdoRateLimitingWithdrawalsQueryVariables) {
      return { query: MasterAdoRateLimitingWithdrawalsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoRatesQuery__
 *
 * To run a query within a React component, call `useMasterAdoRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoRatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoRatesQuery({
 *   variables: {
 *      ADO_rates_address: // value for 'ADO_rates_address'
 *   },
 * });
 */
export function useMasterAdoRatesQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoRatesQuery, IMasterAdoRatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoRatesQuery, IMasterAdoRatesQueryVariables>(MasterAdoRatesDocument, options);
      }
export function useMasterAdoRatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoRatesQuery, IMasterAdoRatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoRatesQuery, IMasterAdoRatesQueryVariables>(MasterAdoRatesDocument, options);
        }
export type MasterAdoRatesQueryHookResult = ReturnType<typeof useMasterAdoRatesQuery>;
export type MasterAdoRatesLazyQueryHookResult = ReturnType<typeof useMasterAdoRatesLazyQuery>;
export type MasterAdoRatesQueryResult = Apollo.QueryResult<IMasterAdoRatesQuery, IMasterAdoRatesQueryVariables>;
export function refetchMasterAdoRatesQuery(variables: IMasterAdoRatesQueryVariables) {
      return { query: MasterAdoRatesDocument, variables: variables }
    }
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

/**
 * __useMasterAdoSplitterQuery__
 *
 * To run a query within a React component, call `useMasterAdoSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoSplitterQuery({
 *   variables: {
 *      ADO_splitter_address: // value for 'ADO_splitter_address'
 *   },
 * });
 */
export function useMasterAdoSplitterQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoSplitterQuery, IMasterAdoSplitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoSplitterQuery, IMasterAdoSplitterQueryVariables>(MasterAdoSplitterDocument, options);
      }
export function useMasterAdoSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoSplitterQuery, IMasterAdoSplitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoSplitterQuery, IMasterAdoSplitterQueryVariables>(MasterAdoSplitterDocument, options);
        }
export type MasterAdoSplitterQueryHookResult = ReturnType<typeof useMasterAdoSplitterQuery>;
export type MasterAdoSplitterLazyQueryHookResult = ReturnType<typeof useMasterAdoSplitterLazyQuery>;
export type MasterAdoSplitterQueryResult = Apollo.QueryResult<IMasterAdoSplitterQuery, IMasterAdoSplitterQueryVariables>;
export function refetchMasterAdoSplitterQuery(variables: IMasterAdoSplitterQueryVariables) {
      return { query: MasterAdoSplitterDocument, variables: variables }
    }
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

/**
 * __useMasterAdoTimelockGetlockedfundsQuery__
 *
 * To run a query within a React component, call `useMasterAdoTimelockGetlockedfundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoTimelockGetlockedfundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoTimelockGetlockedfundsQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *      ADO_timelock_timelock_getLockedFunds_owner: // value for 'ADO_timelock_timelock_getLockedFunds_owner'
 *      ADO_timelock_timelock_getLockedFunds_recipient: // value for 'ADO_timelock_timelock_getLockedFunds_recipient'
 *   },
 * });
 */
export function useMasterAdoTimelockGetlockedfundsQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoTimelockGetlockedfundsQuery, IMasterAdoTimelockGetlockedfundsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoTimelockGetlockedfundsQuery, IMasterAdoTimelockGetlockedfundsQueryVariables>(MasterAdoTimelockGetlockedfundsDocument, options);
      }
export function useMasterAdoTimelockGetlockedfundsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoTimelockGetlockedfundsQuery, IMasterAdoTimelockGetlockedfundsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoTimelockGetlockedfundsQuery, IMasterAdoTimelockGetlockedfundsQueryVariables>(MasterAdoTimelockGetlockedfundsDocument, options);
        }
export type MasterAdoTimelockGetlockedfundsQueryHookResult = ReturnType<typeof useMasterAdoTimelockGetlockedfundsQuery>;
export type MasterAdoTimelockGetlockedfundsLazyQueryHookResult = ReturnType<typeof useMasterAdoTimelockGetlockedfundsLazyQuery>;
export type MasterAdoTimelockGetlockedfundsQueryResult = Apollo.QueryResult<IMasterAdoTimelockGetlockedfundsQuery, IMasterAdoTimelockGetlockedfundsQueryVariables>;
export function refetchMasterAdoTimelockGetlockedfundsQuery(variables: IMasterAdoTimelockGetlockedfundsQueryVariables) {
      return { query: MasterAdoTimelockGetlockedfundsDocument, variables: variables }
    }
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

/**
 * __useMasterAdoTimelockQuery__
 *
 * To run a query within a React component, call `useMasterAdoTimelockQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoTimelockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoTimelockQuery({
 *   variables: {
 *      ADO_timelock_address: // value for 'ADO_timelock_address'
 *   },
 * });
 */
export function useMasterAdoTimelockQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoTimelockQuery, IMasterAdoTimelockQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoTimelockQuery, IMasterAdoTimelockQueryVariables>(MasterAdoTimelockDocument, options);
      }
export function useMasterAdoTimelockLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoTimelockQuery, IMasterAdoTimelockQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoTimelockQuery, IMasterAdoTimelockQueryVariables>(MasterAdoTimelockDocument, options);
        }
export type MasterAdoTimelockQueryHookResult = ReturnType<typeof useMasterAdoTimelockQuery>;
export type MasterAdoTimelockLazyQueryHookResult = ReturnType<typeof useMasterAdoTimelockLazyQuery>;
export type MasterAdoTimelockQueryResult = Apollo.QueryResult<IMasterAdoTimelockQuery, IMasterAdoTimelockQueryVariables>;
export function refetchMasterAdoTimelockQuery(variables: IMasterAdoTimelockQueryVariables) {
      return { query: MasterAdoTimelockDocument, variables: variables }
    }
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

/**
 * __useMasterAdoVaultStrategyaddressQuery__
 *
 * To run a query within a React component, call `useMasterAdoVaultStrategyaddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoVaultStrategyaddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoVaultStrategyaddressQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *      ADO_vault_vault_strategyAddress_strategy: // value for 'ADO_vault_vault_strategyAddress_strategy'
 *   },
 * });
 */
export function useMasterAdoVaultStrategyaddressQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoVaultStrategyaddressQuery, IMasterAdoVaultStrategyaddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoVaultStrategyaddressQuery, IMasterAdoVaultStrategyaddressQueryVariables>(MasterAdoVaultStrategyaddressDocument, options);
      }
export function useMasterAdoVaultStrategyaddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoVaultStrategyaddressQuery, IMasterAdoVaultStrategyaddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoVaultStrategyaddressQuery, IMasterAdoVaultStrategyaddressQueryVariables>(MasterAdoVaultStrategyaddressDocument, options);
        }
export type MasterAdoVaultStrategyaddressQueryHookResult = ReturnType<typeof useMasterAdoVaultStrategyaddressQuery>;
export type MasterAdoVaultStrategyaddressLazyQueryHookResult = ReturnType<typeof useMasterAdoVaultStrategyaddressLazyQuery>;
export type MasterAdoVaultStrategyaddressQueryResult = Apollo.QueryResult<IMasterAdoVaultStrategyaddressQuery, IMasterAdoVaultStrategyaddressQueryVariables>;
export function refetchMasterAdoVaultStrategyaddressQuery(variables: IMasterAdoVaultStrategyaddressQueryVariables) {
      return { query: MasterAdoVaultStrategyaddressDocument, variables: variables }
    }
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

/**
 * __useMasterAdoVaultQuery__
 *
 * To run a query within a React component, call `useMasterAdoVaultQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoVaultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoVaultQuery({
 *   variables: {
 *      ADO_vault_address: // value for 'ADO_vault_address'
 *   },
 * });
 */
export function useMasterAdoVaultQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoVaultQuery, IMasterAdoVaultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoVaultQuery, IMasterAdoVaultQueryVariables>(MasterAdoVaultDocument, options);
      }
export function useMasterAdoVaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoVaultQuery, IMasterAdoVaultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoVaultQuery, IMasterAdoVaultQueryVariables>(MasterAdoVaultDocument, options);
        }
export type MasterAdoVaultQueryHookResult = ReturnType<typeof useMasterAdoVaultQuery>;
export type MasterAdoVaultLazyQueryHookResult = ReturnType<typeof useMasterAdoVaultLazyQuery>;
export type MasterAdoVaultQueryResult = Apollo.QueryResult<IMasterAdoVaultQuery, IMasterAdoVaultQueryVariables>;
export function refetchMasterAdoVaultQuery(variables: IMasterAdoVaultQueryVariables) {
      return { query: MasterAdoVaultDocument, variables: variables }
    }
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

/**
 * __useMasterAdoVestingBatchQuery__
 *
 * To run a query within a React component, call `useMasterAdoVestingBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoVestingBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoVestingBatchQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *      ADO_vesting_vesting_batch_id: // value for 'ADO_vesting_vesting_batch_id'
 *   },
 * });
 */
export function useMasterAdoVestingBatchQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoVestingBatchQuery, IMasterAdoVestingBatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoVestingBatchQuery, IMasterAdoVestingBatchQueryVariables>(MasterAdoVestingBatchDocument, options);
      }
export function useMasterAdoVestingBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoVestingBatchQuery, IMasterAdoVestingBatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoVestingBatchQuery, IMasterAdoVestingBatchQueryVariables>(MasterAdoVestingBatchDocument, options);
        }
export type MasterAdoVestingBatchQueryHookResult = ReturnType<typeof useMasterAdoVestingBatchQuery>;
export type MasterAdoVestingBatchLazyQueryHookResult = ReturnType<typeof useMasterAdoVestingBatchLazyQuery>;
export type MasterAdoVestingBatchQueryResult = Apollo.QueryResult<IMasterAdoVestingBatchQuery, IMasterAdoVestingBatchQueryVariables>;
export function refetchMasterAdoVestingBatchQuery(variables: IMasterAdoVestingBatchQueryVariables) {
      return { query: MasterAdoVestingBatchDocument, variables: variables }
    }
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

/**
 * __useMasterAdoVestingQuery__
 *
 * To run a query within a React component, call `useMasterAdoVestingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoVestingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoVestingQuery({
 *   variables: {
 *      ADO_vesting_address: // value for 'ADO_vesting_address'
 *   },
 * });
 */
export function useMasterAdoVestingQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoVestingQuery, IMasterAdoVestingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoVestingQuery, IMasterAdoVestingQueryVariables>(MasterAdoVestingDocument, options);
      }
export function useMasterAdoVestingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoVestingQuery, IMasterAdoVestingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoVestingQuery, IMasterAdoVestingQueryVariables>(MasterAdoVestingDocument, options);
        }
export type MasterAdoVestingQueryHookResult = ReturnType<typeof useMasterAdoVestingQuery>;
export type MasterAdoVestingLazyQueryHookResult = ReturnType<typeof useMasterAdoVestingLazyQuery>;
export type MasterAdoVestingQueryResult = Apollo.QueryResult<IMasterAdoVestingQuery, IMasterAdoVestingQueryVariables>;
export function refetchMasterAdoVestingQuery(variables: IMasterAdoVestingQueryVariables) {
      return { query: MasterAdoVestingDocument, variables: variables }
    }
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

/**
 * __useMasterAdoWeightedDistributionSplitterGetuserweightQuery__
 *
 * To run a query within a React component, call `useMasterAdoWeightedDistributionSplitterGetuserweightQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoWeightedDistributionSplitterGetuserweightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoWeightedDistributionSplitterGetuserweightQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *      ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user: // value for 'ADO_weighted_distribution_splitter_weighted_distribution_splitter_getUserWeight_user'
 *   },
 * });
 */
export function useMasterAdoWeightedDistributionSplitterGetuserweightQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoWeightedDistributionSplitterGetuserweightQuery, IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoWeightedDistributionSplitterGetuserweightQuery, IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables>(MasterAdoWeightedDistributionSplitterGetuserweightDocument, options);
      }
export function useMasterAdoWeightedDistributionSplitterGetuserweightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoWeightedDistributionSplitterGetuserweightQuery, IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoWeightedDistributionSplitterGetuserweightQuery, IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables>(MasterAdoWeightedDistributionSplitterGetuserweightDocument, options);
        }
export type MasterAdoWeightedDistributionSplitterGetuserweightQueryHookResult = ReturnType<typeof useMasterAdoWeightedDistributionSplitterGetuserweightQuery>;
export type MasterAdoWeightedDistributionSplitterGetuserweightLazyQueryHookResult = ReturnType<typeof useMasterAdoWeightedDistributionSplitterGetuserweightLazyQuery>;
export type MasterAdoWeightedDistributionSplitterGetuserweightQueryResult = Apollo.QueryResult<IMasterAdoWeightedDistributionSplitterGetuserweightQuery, IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables>;
export function refetchMasterAdoWeightedDistributionSplitterGetuserweightQuery(variables: IMasterAdoWeightedDistributionSplitterGetuserweightQueryVariables) {
      return { query: MasterAdoWeightedDistributionSplitterGetuserweightDocument, variables: variables }
    }
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

/**
 * __useMasterAdoWeightedDistributionSplitterQuery__
 *
 * To run a query within a React component, call `useMasterAdoWeightedDistributionSplitterQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoWeightedDistributionSplitterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoWeightedDistributionSplitterQuery({
 *   variables: {
 *      ADO_weighted_distribution_splitter_address: // value for 'ADO_weighted_distribution_splitter_address'
 *   },
 * });
 */
export function useMasterAdoWeightedDistributionSplitterQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdoWeightedDistributionSplitterQuery, IMasterAdoWeightedDistributionSplitterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoWeightedDistributionSplitterQuery, IMasterAdoWeightedDistributionSplitterQueryVariables>(MasterAdoWeightedDistributionSplitterDocument, options);
      }
export function useMasterAdoWeightedDistributionSplitterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoWeightedDistributionSplitterQuery, IMasterAdoWeightedDistributionSplitterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoWeightedDistributionSplitterQuery, IMasterAdoWeightedDistributionSplitterQueryVariables>(MasterAdoWeightedDistributionSplitterDocument, options);
        }
export type MasterAdoWeightedDistributionSplitterQueryHookResult = ReturnType<typeof useMasterAdoWeightedDistributionSplitterQuery>;
export type MasterAdoWeightedDistributionSplitterLazyQueryHookResult = ReturnType<typeof useMasterAdoWeightedDistributionSplitterLazyQuery>;
export type MasterAdoWeightedDistributionSplitterQueryResult = Apollo.QueryResult<IMasterAdoWeightedDistributionSplitterQuery, IMasterAdoWeightedDistributionSplitterQueryVariables>;
export function refetchMasterAdoWeightedDistributionSplitterQuery(variables: IMasterAdoWeightedDistributionSplitterQueryVariables) {
      return { query: MasterAdoWeightedDistributionSplitterDocument, variables: variables }
    }
export const MasterAdoDocument = /*#__PURE__*/ gql`
    query MASTER_ADO {
  ADO {
    receipt
  }
}
    `;

/**
 * __useMasterAdoQuery__
 *
 * To run a query within a React component, call `useMasterAdoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdoQuery({
 *   variables: {
 *   },
 * });
 */
export function useMasterAdoQuery(baseOptions?: Apollo.QueryHookOptions<IMasterAdoQuery, IMasterAdoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdoQuery, IMasterAdoQueryVariables>(MasterAdoDocument, options);
      }
export function useMasterAdoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdoQuery, IMasterAdoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdoQuery, IMasterAdoQueryVariables>(MasterAdoDocument, options);
        }
export type MasterAdoQueryHookResult = ReturnType<typeof useMasterAdoQuery>;
export type MasterAdoLazyQueryHookResult = ReturnType<typeof useMasterAdoLazyQuery>;
export type MasterAdoQueryResult = Apollo.QueryResult<IMasterAdoQuery, IMasterAdoQueryVariables>;
export function refetchMasterAdoQuery(variables?: IMasterAdoQueryVariables) {
      return { query: MasterAdoDocument, variables: variables }
    }
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

/**
 * __useMasterAdopPackageQuery__
 *
 * To run a query within a React component, call `useMasterAdopPackageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdopPackageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdopPackageQuery({
 *   variables: {
 *      ADOP_package_adoType: // value for 'ADOP_package_adoType'
 *   },
 * });
 */
export function useMasterAdopPackageQuery(baseOptions: Apollo.QueryHookOptions<IMasterAdopPackageQuery, IMasterAdopPackageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdopPackageQuery, IMasterAdopPackageQueryVariables>(MasterAdopPackageDocument, options);
      }
export function useMasterAdopPackageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdopPackageQuery, IMasterAdopPackageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdopPackageQuery, IMasterAdopPackageQueryVariables>(MasterAdopPackageDocument, options);
        }
export type MasterAdopPackageQueryHookResult = ReturnType<typeof useMasterAdopPackageQuery>;
export type MasterAdopPackageLazyQueryHookResult = ReturnType<typeof useMasterAdopPackageLazyQuery>;
export type MasterAdopPackageQueryResult = Apollo.QueryResult<IMasterAdopPackageQuery, IMasterAdopPackageQueryVariables>;
export function refetchMasterAdopPackageQuery(variables: IMasterAdopPackageQueryVariables) {
      return { query: MasterAdopPackageDocument, variables: variables }
    }
export const MasterAdopDocument = /*#__PURE__*/ gql`
    query MASTER_ADOP {
  ADOP {
    adoTypes
  }
}
    `;

/**
 * __useMasterAdopQuery__
 *
 * To run a query within a React component, call `useMasterAdopQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAdopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAdopQuery({
 *   variables: {
 *   },
 * });
 */
export function useMasterAdopQuery(baseOptions?: Apollo.QueryHookOptions<IMasterAdopQuery, IMasterAdopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAdopQuery, IMasterAdopQueryVariables>(MasterAdopDocument, options);
      }
export function useMasterAdopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAdopQuery, IMasterAdopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAdopQuery, IMasterAdopQueryVariables>(MasterAdopDocument, options);
        }
export type MasterAdopQueryHookResult = ReturnType<typeof useMasterAdopQuery>;
export type MasterAdopLazyQueryHookResult = ReturnType<typeof useMasterAdopLazyQuery>;
export type MasterAdopQueryResult = Apollo.QueryResult<IMasterAdopQuery, IMasterAdopQueryVariables>;
export function refetchMasterAdopQuery(variables?: IMasterAdopQueryVariables) {
      return { query: MasterAdopDocument, variables: variables }
    }
export const MasterAccountsDocument = /*#__PURE__*/ gql`
    query MASTER_ACCOUNTS {
  accounts {
    wallets
  }
}
    `;

/**
 * __useMasterAccountsQuery__
 *
 * To run a query within a React component, call `useMasterAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMasterAccountsQuery(baseOptions?: Apollo.QueryHookOptions<IMasterAccountsQuery, IMasterAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterAccountsQuery, IMasterAccountsQueryVariables>(MasterAccountsDocument, options);
      }
export function useMasterAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterAccountsQuery, IMasterAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterAccountsQuery, IMasterAccountsQueryVariables>(MasterAccountsDocument, options);
        }
export type MasterAccountsQueryHookResult = ReturnType<typeof useMasterAccountsQuery>;
export type MasterAccountsLazyQueryHookResult = ReturnType<typeof useMasterAccountsLazyQuery>;
export type MasterAccountsQueryResult = Apollo.QueryResult<IMasterAccountsQuery, IMasterAccountsQueryVariables>;
export function refetchMasterAccountsQuery(variables?: IMasterAccountsQueryVariables) {
      return { query: MasterAccountsDocument, variables: variables }
    }
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

/**
 * __useMasterChainconfigsConfigQuery__
 *
 * To run a query within a React component, call `useMasterChainconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterChainconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterChainconfigsConfigQuery({
 *   variables: {
 *      chainConfigs_config_identifier: // value for 'chainConfigs_config_identifier'
 *   },
 * });
 */
export function useMasterChainconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<IMasterChainconfigsConfigQuery, IMasterChainconfigsConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterChainconfigsConfigQuery, IMasterChainconfigsConfigQueryVariables>(MasterChainconfigsConfigDocument, options);
      }
export function useMasterChainconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterChainconfigsConfigQuery, IMasterChainconfigsConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterChainconfigsConfigQuery, IMasterChainconfigsConfigQueryVariables>(MasterChainconfigsConfigDocument, options);
        }
export type MasterChainconfigsConfigQueryHookResult = ReturnType<typeof useMasterChainconfigsConfigQuery>;
export type MasterChainconfigsConfigLazyQueryHookResult = ReturnType<typeof useMasterChainconfigsConfigLazyQuery>;
export type MasterChainconfigsConfigQueryResult = Apollo.QueryResult<IMasterChainconfigsConfigQuery, IMasterChainconfigsConfigQueryVariables>;
export function refetchMasterChainconfigsConfigQuery(variables: IMasterChainconfigsConfigQueryVariables) {
      return { query: MasterChainconfigsConfigDocument, variables: variables }
    }
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

/**
 * __useMasterChainconfigsQuery__
 *
 * To run a query within a React component, call `useMasterChainconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterChainconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterChainconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMasterChainconfigsQuery(baseOptions?: Apollo.QueryHookOptions<IMasterChainconfigsQuery, IMasterChainconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterChainconfigsQuery, IMasterChainconfigsQueryVariables>(MasterChainconfigsDocument, options);
      }
export function useMasterChainconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterChainconfigsQuery, IMasterChainconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterChainconfigsQuery, IMasterChainconfigsQueryVariables>(MasterChainconfigsDocument, options);
        }
export type MasterChainconfigsQueryHookResult = ReturnType<typeof useMasterChainconfigsQuery>;
export type MasterChainconfigsLazyQueryHookResult = ReturnType<typeof useMasterChainconfigsLazyQuery>;
export type MasterChainconfigsQueryResult = Apollo.QueryResult<IMasterChainconfigsQuery, IMasterChainconfigsQueryVariables>;
export function refetchMasterChainconfigsQuery(variables?: IMasterChainconfigsQueryVariables) {
      return { query: MasterChainconfigsDocument, variables: variables }
    }
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

/**
 * __useMasterKeplrconfigsConfigQuery__
 *
 * To run a query within a React component, call `useMasterKeplrconfigsConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterKeplrconfigsConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterKeplrconfigsConfigQuery({
 *   variables: {
 *      keplrConfigs_config_identifier: // value for 'keplrConfigs_config_identifier'
 *   },
 * });
 */
export function useMasterKeplrconfigsConfigQuery(baseOptions: Apollo.QueryHookOptions<IMasterKeplrconfigsConfigQuery, IMasterKeplrconfigsConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterKeplrconfigsConfigQuery, IMasterKeplrconfigsConfigQueryVariables>(MasterKeplrconfigsConfigDocument, options);
      }
export function useMasterKeplrconfigsConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterKeplrconfigsConfigQuery, IMasterKeplrconfigsConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterKeplrconfigsConfigQuery, IMasterKeplrconfigsConfigQueryVariables>(MasterKeplrconfigsConfigDocument, options);
        }
export type MasterKeplrconfigsConfigQueryHookResult = ReturnType<typeof useMasterKeplrconfigsConfigQuery>;
export type MasterKeplrconfigsConfigLazyQueryHookResult = ReturnType<typeof useMasterKeplrconfigsConfigLazyQuery>;
export type MasterKeplrconfigsConfigQueryResult = Apollo.QueryResult<IMasterKeplrconfigsConfigQuery, IMasterKeplrconfigsConfigQueryVariables>;
export function refetchMasterKeplrconfigsConfigQuery(variables: IMasterKeplrconfigsConfigQueryVariables) {
      return { query: MasterKeplrconfigsConfigDocument, variables: variables }
    }
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

/**
 * __useMasterKeplrconfigsQuery__
 *
 * To run a query within a React component, call `useMasterKeplrconfigsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterKeplrconfigsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterKeplrconfigsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMasterKeplrconfigsQuery(baseOptions?: Apollo.QueryHookOptions<IMasterKeplrconfigsQuery, IMasterKeplrconfigsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterKeplrconfigsQuery, IMasterKeplrconfigsQueryVariables>(MasterKeplrconfigsDocument, options);
      }
export function useMasterKeplrconfigsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterKeplrconfigsQuery, IMasterKeplrconfigsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterKeplrconfigsQuery, IMasterKeplrconfigsQueryVariables>(MasterKeplrconfigsDocument, options);
        }
export type MasterKeplrconfigsQueryHookResult = ReturnType<typeof useMasterKeplrconfigsQuery>;
export type MasterKeplrconfigsLazyQueryHookResult = ReturnType<typeof useMasterKeplrconfigsLazyQuery>;
export type MasterKeplrconfigsQueryResult = Apollo.QueryResult<IMasterKeplrconfigsQuery, IMasterKeplrconfigsQueryVariables>;
export function refetchMasterKeplrconfigsQuery(variables?: IMasterKeplrconfigsQueryVariables) {
      return { query: MasterKeplrconfigsDocument, variables: variables }
    }
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

/**
 * __useMasterTxByhashQuery__
 *
 * To run a query within a React component, call `useMasterTxByhashQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterTxByhashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterTxByhashQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *      tx_byHash_hash: // value for 'tx_byHash_hash'
 *   },
 * });
 */
export function useMasterTxByhashQuery(baseOptions: Apollo.QueryHookOptions<IMasterTxByhashQuery, IMasterTxByhashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterTxByhashQuery, IMasterTxByhashQueryVariables>(MasterTxByhashDocument, options);
      }
export function useMasterTxByhashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterTxByhashQuery, IMasterTxByhashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterTxByhashQuery, IMasterTxByhashQueryVariables>(MasterTxByhashDocument, options);
        }
export type MasterTxByhashQueryHookResult = ReturnType<typeof useMasterTxByhashQuery>;
export type MasterTxByhashLazyQueryHookResult = ReturnType<typeof useMasterTxByhashLazyQuery>;
export type MasterTxByhashQueryResult = Apollo.QueryResult<IMasterTxByhashQuery, IMasterTxByhashQueryVariables>;
export function refetchMasterTxByhashQuery(variables: IMasterTxByhashQueryVariables) {
      return { query: MasterTxByhashDocument, variables: variables }
    }
export const MasterTxDocument = /*#__PURE__*/ gql`
    query MASTER_TX($chainId: String!) {
  tx(chainId: $chainId) {
    chainId
  }
}
    `;

/**
 * __useMasterTxQuery__
 *
 * To run a query within a React component, call `useMasterTxQuery` and pass it any options that fit your needs.
 * When your component renders, `useMasterTxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMasterTxQuery({
 *   variables: {
 *      chainId: // value for 'chainId'
 *   },
 * });
 */
export function useMasterTxQuery(baseOptions: Apollo.QueryHookOptions<IMasterTxQuery, IMasterTxQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMasterTxQuery, IMasterTxQueryVariables>(MasterTxDocument, options);
      }
export function useMasterTxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMasterTxQuery, IMasterTxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMasterTxQuery, IMasterTxQueryVariables>(MasterTxDocument, options);
        }
export type MasterTxQueryHookResult = ReturnType<typeof useMasterTxQuery>;
export type MasterTxLazyQueryHookResult = ReturnType<typeof useMasterTxLazyQuery>;
export type MasterTxQueryResult = Apollo.QueryResult<IMasterTxQuery, IMasterTxQueryVariables>;
export function refetchMasterTxQuery(variables: IMasterTxQueryVariables) {
      return { query: MasterTxDocument, variables: variables }
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