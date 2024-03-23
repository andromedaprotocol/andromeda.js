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

export type IAdopQuery = {
  __typename?: 'ADOPQuery';
  adoTypes: Array<Scalars['String']['output']>;
  package: IAdoPackage;
};


export type IAdopQueryPackageArgs = {
  adoType: Scalars['String']['input'];
};

export type IAdopSchema = {
  __typename?: 'ADOPSchema';
  contract_schema: Maybe<Scalars['String']['output']>;
  execute: Maybe<Scalars['String']['output']>;
  instantiate: Maybe<Scalars['String']['output']>;
  query: Maybe<Scalars['String']['output']>;
  receive: Maybe<IAdopSchemaReceive>;
};

export type IAdopSchemaReceive = {
  __typename?: 'ADOPSchemaReceive';
  cw20: Maybe<Scalars['String']['output']>;
  cw721: Maybe<Scalars['String']['output']>;
};

export type IAdoRate = {
  __typename?: 'ADORate';
  address: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
};

export type IAccountDetails = {
  __typename?: 'AccountDetails';
  balance: Maybe<Scalars['String']['output']>;
  latest_withdrawal: Maybe<Scalars['String']['output']>;
};

export type IAccountsQuery = {
  __typename?: 'AccountsQuery';
  assets: Array<IAssetResult>;
  wallets: Scalars['String']['output'];
};


export type IAccountsQueryAssetsArgs = {
  adoType?: InputMaybe<IAdoType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IAndrOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};

export type IAddressListAdo = {
  __typename?: 'AddressListAdo';
  address: Scalars['String']['output'];
  /** @deprecated Moved to `andr` query resolver, use `admin` field on `andr` to resolve this query. */
  admin: Maybe<Scalars['String']['output']>;
  andr: IAndrQuery;
  /** @deprecated Moved to `andr` query resolver, use `codeId` field on `andr` to resolve this query. */
  codeId: Maybe<Scalars['Int']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `creator` field on `andr` to resolve this query. */
  creator: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `ibcPortId` field on `andr` to resolve this query. */
  ibcPortId: Maybe<Scalars['String']['output']>;
  includesAddress: Maybe<IAddressListResponse>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  isOperator: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `label` field on `andr` to resolve this query. */
  label: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  operators: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Moved to `andr` query resolver, use `owner` field on `andr` to resolve this query. */
  owner: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `queries_expected` field on `andr` to resolve this query. */
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
};


export type IAddressListAdoIncludesAddressArgs = {
  address: Scalars['String']['input'];
};

export type IAddressListResponse = {
  __typename?: 'AddressListResponse';
  included: Maybe<Scalars['Boolean']['output']>;
};

export type IAddressPercent = {
  __typename?: 'AddressPercent';
  percent: Maybe<Scalars['String']['output']>;
  recipient: Maybe<Scalars['JSON']['output']>;
};

export type IAdo = {
  __typename?: 'Ado';
  address: Scalars['String']['output'];
  adoType: Scalars['String']['output'];
  appContract: Maybe<Scalars['String']['output']>;
  chainId: Scalars['String']['output'];
  instantiateHash: Scalars['String']['output'];
  instantiateHeight: Scalars['Float']['output'];
  lastUpdatedHash: Scalars['String']['output'];
  lastUpdatedHeight: Scalars['Float']['output'];
  minter: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
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

export type IAdoPackage = {
  __typename?: 'AdoPackage';
  name: Scalars['String']['output'];
  schemas: IAdopSchema;
};

export type IAdoQuery = {
  __typename?: 'AdoQuery';
  address_list: IAddressListAdo;
  ado: IBaseAdo;
  app: IAppAdo;
  auction: IAuctionAdo;
  crowdfund: ICrowdfundAdo;
  cw20: ICw20Ado;
  cw20_exchange: ICw20ExchangeAdo;
  cw20_staking: ICw20StakingAdo;
  cw721: ICw721Ado;
  factory: IFactoryAdo;
  lockdrop: ILockdropAdo;
  marketplace: IMarketplaceAdo;
  merkle_airdrop: IMerkleAirdropAdo;
  primitive: IPrimitiveAdo;
  rate_limiting_withdrawals: IRateLimitingWithdrawalsAdo;
  rates: IRatesAdo;
  receipt: Scalars['String']['output'];
  splitter: ISplitterAdo;
  timelock: ITimelockAdo;
  vault: IVaultAdo;
  vesting: IVestingAdo;
  weighted_distribution_splitter: IWeightedDistributionSplitterAdo;
};


export type IAdoQueryAddressListArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryAdoArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryAppArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryAuctionArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryCrowdfundArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryCw20Args = {
  address: Scalars['String']['input'];
};


export type IAdoQueryCw20ExchangeArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryCw20StakingArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryCw721Args = {
  address: Scalars['String']['input'];
};


export type IAdoQueryFactoryArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryLockdropArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryMarketplaceArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryMerkleAirdropArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryPrimitiveArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryRateLimitingWithdrawalsArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryRatesArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQuerySplitterArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryTimelockArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryVaultArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryVestingArgs = {
  address: Scalars['String']['input'];
};


export type IAdoQueryWeightedDistributionSplitterArgs = {
  address: Scalars['String']['input'];
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

export type IAgreement = {
  __typename?: 'Agreement';
  amount: Maybe<IAgreementAmount>;
  purchaser: Maybe<Scalars['String']['output']>;
};

export type IAgreementAmount = {
  __typename?: 'AgreementAmount';
  raw: Maybe<ICoin>;
};

export type IAllNftInfo = {
  __typename?: 'AllNftInfo';
  access: Maybe<INftOwnerInfo>;
  info: Maybe<INftInfo>;
};

export type IAllowance = {
  __typename?: 'Allowance';
  allowance: Maybe<Scalars['Float']['output']>;
  expires: Maybe<Scalars['JSON']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  spender: Maybe<Scalars['String']['output']>;
};

export type IAndrAddress = {
  __typename?: 'AndrAddress';
  identifier: Scalars['String']['output'];
};

export enum IAndrOrderBy {
  ASC = 'Asc',
  DESC = 'Desc'
}

export type IAndrQuery = IIWasmContract & {
  __typename?: 'AndrQuery';
  address: Scalars['String']['output'];
  admin: Maybe<Scalars['String']['output']>;
  blockHeightUponCreation: Scalars['Int']['output'];
  codeId: Scalars['Int']['output'];
  contractVersion: Scalars['String']['output'];
  creator: Scalars['String']['output'];
  ibcPortId: Maybe<Scalars['String']['output']>;
  isOperator: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  operators: Array<Scalars['String']['output']>;
  originalPublisher: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
  version: Scalars['String']['output'];
};


export type IAndrQueryIsOperatorArgs = {
  address: Scalars['String']['input'];
};

export type IAndrSearchOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IAndrOrderBy>;
  startAfter?: InputMaybe<Scalars['String']['input']>;
};

export type IAndrStrategy = {
  __typename?: 'AndrStrategy';
  address: Maybe<Scalars['String']['output']>;
  strategyType: Maybe<IAndrStrategyType>;
};

export enum IAndrStrategyType {
  ANCHOR = 'Anchor'
}

export type IAppAdo = {
  __typename?: 'AppAdo';
  address: Scalars['String']['output'];
  addresses: Maybe<Array<IAppComponentAddress>>;
  /** @deprecated Moved to `andr` query resolver, use `admin` field on `andr` to resolve this query. */
  admin: Maybe<Scalars['String']['output']>;
  andr: IAndrQuery;
  /** @deprecated Moved to `andr` query resolver, use `codeId` field on `andr` to resolve this query. */
  codeId: Maybe<Scalars['Int']['output']>;
  componentExists: Maybe<Scalars['Boolean']['output']>;
  components: Maybe<Array<IAppComponent>>;
  config: Maybe<IAppConfig>;
  /** @deprecated Moved to `andr` query resolver, use `creator` field on `andr` to resolve this query. */
  creator: Maybe<Scalars['String']['output']>;
  getAddress: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `ibcPortId` field on `andr` to resolve this query. */
  ibcPortId: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  isOperator: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `label` field on `andr` to resolve this query. */
  label: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  operators: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Moved to `andr` query resolver, use `owner` field on `andr` to resolve this query. */
  owner: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `queries_expected` field on `andr` to resolve this query. */
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
};


export type IAppAdoComponentExistsArgs = {
  name: Scalars['String']['input'];
};


export type IAppAdoGetAddressArgs = {
  name: Scalars['String']['input'];
};

export type IAppComponent = {
  __typename?: 'AppComponent';
  address: Maybe<Scalars['String']['output']>;
  ado_type: Scalars['String']['output'];
  instantiate_msg: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IAppComponentAddress = {
  __typename?: 'AppComponentAddress';
  address: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IAppConfig = {
  __typename?: 'AppConfig';
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
};

export type IAssetResult = {
  __typename?: 'AssetResult';
  address: Scalars['String']['output'];
  adoType: Scalars['String']['output'];
  appContract: Maybe<Scalars['String']['output']>;
  chainId: Maybe<Scalars['String']['output']>;
  components: Maybe<Array<IComponent>>;
  instantiateHash: Maybe<Scalars['String']['output']>;
  instantiateHeight: Maybe<Scalars['Int']['output']>;
  lastUpdatedHash: Maybe<Scalars['String']['output']>;
  lastUpdatedHeight: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
};


export type IAssetResultComponentsArgs = {
  componentType?: InputMaybe<IAdoType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type IAuctionAdo = {
  __typename?: 'AuctionAdo';
  address: Scalars['String']['output'];
  /** @deprecated Moved to `andr` query resolver, use `admin` field on `andr` to resolve this query. */
  admin: Maybe<Scalars['String']['output']>;
  andr: IAndrQuery;
  auctionIDs: Maybe<IAuctionIDsResponse>;
  auctionInfosForAddress: Maybe<IAuctionInfosForAddressResponse>;
  auctionState: Maybe<IAuctionStateResponse>;
  bids: Maybe<IBidsResponse>;
  /** @deprecated Moved to `andr` query resolver, use `codeId` field on `andr` to resolve this query. */
  codeId: Maybe<Scalars['Int']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `creator` field on `andr` to resolve this query. */
  creator: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `ibcPortId` field on `andr` to resolve this query. */
  ibcPortId: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `isOperator` field on `andr` to resolve this query. */
  isOperator: Scalars['Boolean']['output'];
  /** @deprecated Moved to `andr` query resolver, use `label` field on `andr` to resolve this query. */
  label: Maybe<Scalars['String']['output']>;
  latestAuctionState: Maybe<IAuctionStateResponse>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  operators: Array<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `owner` field on `andr` to resolve this query. */
  owner: Scalars['String']['output'];
  /** @deprecated Moved to `andr` query resolver, use `queries_expected` field on `andr` to resolve this query. */
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  summaryFields: Maybe<ISummaryFields>;
  type: Scalars['String']['output'];
};


export type IAuctionAdoAuctionIDsArgs = {
  tokenAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type IAuctionAdoAuctionInfosForAddressArgs = {
  tokenAddress: Scalars['String']['input'];
};


export type IAuctionAdoAuctionStateArgs = {
  auctionId: Scalars['Float']['input'];
};


export type IAuctionAdoBidsArgs = {
  auctionId: Scalars['Float']['input'];
  options?: InputMaybe<IAndrSearchOptions>;
};


export type IAuctionAdoIsOperatorArgs = {
  address: Scalars['String']['input'];
};


export type IAuctionAdoLatestAuctionStateArgs = {
  tokenAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type IAuctionAdoSummaryFieldsArgs = {
  tokenAddress: Scalars['String']['input'];
};

export type IAuctionIDsResponse = {
  __typename?: 'AuctionIDsResponse';
  auction_ids: Maybe<Array<Scalars['Int']['output']>>;
};

export type IAuctionInfosForAddressResponse = {
  __typename?: 'AuctionInfosForAddressResponse';
  auction_ids: Maybe<Array<Scalars['Int']['output']>>;
  token_address: Maybe<Scalars['String']['output']>;
  token_id: Maybe<Scalars['String']['output']>;
};

export type IAuctionStateResponse = {
  __typename?: 'AuctionStateResponse';
  auction_id: Maybe<Scalars['Int']['output']>;
  coin_denom: Maybe<Scalars['String']['output']>;
  end_time: Maybe<Scalars['JSON']['output']>;
  high_bidder_addr: Maybe<Scalars['String']['output']>;
  high_bidder_amount: Maybe<Scalars['Int']['output']>;
  is_cancelled: Maybe<Scalars['Boolean']['output']>;
  min_bid: Maybe<Scalars['Int']['output']>;
  start_time: Maybe<Scalars['JSON']['output']>;
  summaryFields: Maybe<Scalars['Int']['output']>;
  whitelist: Maybe<Scalars['JSON']['output']>;
};

export type IBaseAdo = IIBaseAdoQuery & {
  __typename?: 'BaseAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  type: Scalars['String']['output'];
};

export type IBech32Config = {
  __typename?: 'Bech32Config';
  bech32PrefixAccAddr: Scalars['String']['output'];
  bech32PrefixAccPub: Scalars['String']['output'];
  bech32PrefixConsAddr: Scalars['String']['output'];
  bech32PrefixConsPub: Scalars['String']['output'];
  bech32PrefixValAddr: Scalars['String']['output'];
  bech32PrefixValPub: Scalars['String']['output'];
};

export type IBid = {
  __typename?: 'Bid';
  amount: Scalars['Int']['output'];
  bidder: Scalars['String']['output'];
  timestamp: Scalars['JSON']['output'];
};

export type IBidsResponse = {
  __typename?: 'BidsResponse';
  bids: Maybe<Array<IBid>>;
};

export type IBip44 = {
  __typename?: 'Bip44';
  coinType: Scalars['Int']['output'];
};

export type ICw20Ado = {
  __typename?: 'CW20Ado';
  address: Scalars['String']['output'];
  allAccounts: Maybe<Array<Scalars['String']['output']>>;
  allAllowances: Maybe<Array<IAllowance>>;
  allSpenderAllowances: Maybe<Array<IAllowance>>;
  allowance: Maybe<IAllowance>;
  andr: IAndrQuery;
  balance: Maybe<Scalars['Float']['output']>;
  downloadLogo: Maybe<IDownloadLogo>;
  marketingInfo: Maybe<IMarketingInfo>;
  minter: Maybe<IMinter>;
  tokenInfo: Maybe<ITokenInfo>;
  type: Scalars['String']['output'];
};


export type ICw20AdoAllAccountsArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
};


export type ICw20AdoAllAllowancesArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
  owner: Scalars['String']['input'];
};


export type ICw20AdoAllSpenderAllowancesArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
  spender: Scalars['String']['input'];
};


export type ICw20AdoAllowanceArgs = {
  owner: Scalars['String']['input'];
  spender: Scalars['String']['input'];
};


export type ICw20AdoBalanceArgs = {
  address: Scalars['String']['input'];
};

export type ICw20ExchangeAdo = {
  __typename?: 'CW20ExchangeAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  sale: Maybe<ISaleResponse>;
  saleAssets: Array<Scalars['String']['output']>;
  tokenAddress: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ICw20ExchangeAdoSaleArgs = {
  cw20?: InputMaybe<Scalars['String']['input']>;
  native?: InputMaybe<Scalars['String']['input']>;
};


export type ICw20ExchangeAdoSaleAssetsArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
};

export type ICw20StakingAdo = {
  __typename?: 'CW20StakingAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  config: Maybe<IConfigStructure>;
  staker: Maybe<IStakerResponse>;
  stakers: Maybe<Array<IStakerResponse>>;
  state: Maybe<IStateStructure>;
  timestamp: Scalars['JSON']['output'];
  type: Scalars['String']['output'];
};


export type ICw20StakingAdoStakerArgs = {
  address: Scalars['String']['input'];
};


export type ICw20StakingAdoStakersArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
};

export type ICw721Ado = {
  __typename?: 'CW721Ado';
  address: Scalars['String']['output'];
  /** @deprecated Moved to `andr` query resolver, use `admin` field on `andr` to resolve this query. */
  admin: Maybe<Scalars['String']['output']>;
  allNftInfo: Maybe<IAllNftInfo>;
  allOperators: Maybe<Array<INftApproval>>;
  allTokens: Maybe<Array<Scalars['String']['output']>>;
  andr: IAndrQuery;
  approval: Maybe<INftApproval>;
  approvals: Maybe<Array<INftApproval>>;
  /** @deprecated Moved to `andr` query resolver, use `codeId` field on `andr` to resolve this query. */
  codeId: Maybe<Scalars['Int']['output']>;
  contractInfo: Maybe<INftContractInfo>;
  /** @deprecated Moved to `andr` query resolver, use `creator` field on `andr` to resolve this query. */
  creator: Maybe<Scalars['String']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `ibcPortId` field on `andr` to resolve this query. */
  ibcPortId: Maybe<Scalars['String']['output']>;
  isArchived: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  isOperator: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `label` field on `andr` to resolve this query. */
  label: Maybe<Scalars['String']['output']>;
  minter: Maybe<Scalars['String']['output']>;
  nftInfo: Maybe<INftInfo>;
  numOwners: Maybe<Scalars['Int']['output']>;
  numTokens: Maybe<Scalars['Int']['output']>;
  /** @deprecated Moved to `andr` query resolver, use `operators` field on `andr` to resolve this query. */
  operators: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Moved to `andr` query resolver, use `owner` field on `andr` to resolve this query. */
  owner: Maybe<Scalars['String']['output']>;
  ownerOf: Maybe<INftOwnerInfo>;
  /** @deprecated Moved to `andr` query resolver, use `queries_expected` field on `andr` to resolve this query. */
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  searchTokens: Maybe<Array<INftInfo>>;
  tokens: Maybe<Array<Scalars['String']['output']>>;
  transferAgreement: ITransferAgreement;
  type: Scalars['String']['output'];
};


export type ICw721AdoAllNftInfoArgs = {
  includeExpired: Scalars['Boolean']['input'];
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoAllOperatorsArgs = {
  includeExpired: Scalars['Boolean']['input'];
  options?: InputMaybe<IAndrSearchOptions>;
  owner: Scalars['String']['input'];
};


export type ICw721AdoAllTokensArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
};


export type ICw721AdoApprovalArgs = {
  includeExpired: Scalars['Boolean']['input'];
  spender: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoApprovalsArgs = {
  includeExpired: Scalars['Boolean']['input'];
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoIsArchivedArgs = {
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoNftInfoArgs = {
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoNumOwnersArgs = {
  includeExpired: Scalars['Boolean']['input'];
};


export type ICw721AdoOwnerOfArgs = {
  includeExpired: Scalars['Boolean']['input'];
  tokenId: Scalars['String']['input'];
};


export type ICw721AdoSearchTokensArgs = {
  attributes?: InputMaybe<Array<ISearchAttribute>>;
};


export type ICw721AdoTokensArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
  owner: Scalars['String']['input'];
};


export type ICw721AdoTransferAgreementArgs = {
  tokenId: Scalars['String']['input'];
};

export type IChainConfig = {
  __typename?: 'ChainConfig';
  addressPrefix: Scalars['String']['output'];
  blockExplorerAddressPages: Array<Scalars['String']['output']>;
  blockExplorerTxPages: Array<Scalars['String']['output']>;
  chainId: Scalars['String']['output'];
  chainName: Scalars['String']['output'];
  chainType: Scalars['String']['output'];
  chainUrl: Scalars['String']['output'];
  defaultFee: Scalars['String']['output'];
  iconUrls: IIconUrl;
  kernelAddress: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  registryAddress: Scalars['String']['output'];
};

export type IChainConfigQuery = {
  __typename?: 'ChainConfigQuery';
  allConfigs: Array<IChainConfig>;
  config: IChainConfig;
};


export type IChainConfigQueryConfigArgs = {
  identifier: Scalars['String']['input'];
};

export type ICoin = {
  __typename?: 'Coin';
  amount: Scalars['String']['output'];
  denom: Scalars['String']['output'];
};

export type ICoinAllowance = {
  __typename?: 'CoinAllowance';
  coin: Maybe<Scalars['String']['output']>;
  limit: Maybe<Scalars['String']['output']>;
  minimal_withdrawal_frequency: Maybe<Scalars['String']['output']>;
};

export type IComponent = {
  __typename?: 'Component';
  address: Maybe<Scalars['String']['output']>;
  ado_type: Scalars['String']['output'];
  instantiate_msg: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IConfigStructure = {
  __typename?: 'ConfigStructure';
  number_of_reward_tokens: Maybe<Scalars['Int']['output']>;
  staking_token: Maybe<IAndrAddress>;
};

export type ICrowdfundAdo = {
  __typename?: 'CrowdfundAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  availableTokens: Maybe<Array<Scalars['String']['output']>>;
  config: Maybe<ICrowdfundConfig>;
  isTokenAvailable: Maybe<Scalars['Boolean']['output']>;
  state: Maybe<ICrowdfundState>;
  type: Scalars['String']['output'];
};


export type ICrowdfundAdoIsTokenAvailableArgs = {
  tokenId: Scalars['String']['input'];
};

export type ICrowdfundConfig = {
  __typename?: 'CrowdfundConfig';
  can_mint_after_sale: Scalars['Boolean']['output'];
  token_address: Scalars['JSON']['output'];
};

export type ICrowdfundState = {
  __typename?: 'CrowdfundState';
  amount_sold: Maybe<Scalars['Int']['output']>;
  amount_to_send: Maybe<Scalars['Int']['output']>;
  amount_transferred: Maybe<Scalars['Int']['output']>;
  expiration: Maybe<Scalars['JSON']['output']>;
  max_amount_per_wallet: Maybe<Scalars['Int']['output']>;
  min_tokens_sold: Maybe<Scalars['Int']['output']>;
  price: Maybe<ICoin>;
  recipient: Maybe<Scalars['JSON']['output']>;
};

export type ICurrency = {
  __typename?: 'Currency';
  coinDecimals: Maybe<Scalars['Int']['output']>;
  coinDenom: Maybe<Scalars['String']['output']>;
  coinGeckoId: Maybe<Scalars['String']['output']>;
  coinMinimalDenom: Maybe<Scalars['String']['output']>;
};

export type IDownloadLogo = {
  __typename?: 'DownloadLogo';
  data: Maybe<Scalars['JSON']['output']>;
  mime_type: Maybe<Scalars['String']['output']>;
};

export type IEscrow = {
  __typename?: 'Escrow';
  coins: Maybe<Array<ICoin>>;
  condition: Maybe<IEscrowCondition>;
  recipient: Maybe<Scalars['JSON']['output']>;
};

export type IEscrowCondition = {
  __typename?: 'EscrowCondition';
  expiration: Maybe<Scalars['JSON']['output']>;
  miniumFunds: Maybe<Array<ICoin>>;
};

export type IFactoryAdo = IIBaseAdoQuery & {
  __typename?: 'FactoryAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  code_id: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
};


export type IFactoryAdoCodeIdArgs = {
  key: Scalars['String']['input'];
};

export type IGasPriceStep = {
  __typename?: 'GasPriceStep';
  average: Scalars['Float']['output'];
  high: Scalars['Float']['output'];
  low: Scalars['Float']['output'];
};

export type IIBaseAdoQuery = {
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  type: Scalars['String']['output'];
};

export type IIWasmContract = {
  address: Scalars['String']['output'];
  admin: Maybe<Scalars['String']['output']>;
  codeId: Scalars['Int']['output'];
  creator: Scalars['String']['output'];
  ibcPortId: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
};

export type IIconUrl = {
  __typename?: 'IconUrl';
  lg: Scalars['String']['output'];
  sm: Scalars['String']['output'];
};

export type IKeplrConfig = {
  __typename?: 'KeplrConfig';
  bech32Config: IBech32Config;
  bip44: IBip44;
  chainId: Scalars['String']['output'];
  chainName: Scalars['String']['output'];
  coinType: Scalars['Int']['output'];
  currencies: Array<ICurrency>;
  feeCurrencies: Array<ICurrency>;
  gasPriceStep: IGasPriceStep;
  rest: Scalars['String']['output'];
  rpc: Scalars['String']['output'];
  stakeCurrency: ICurrency;
};

export type IKeplrConfigQuery = {
  __typename?: 'KeplrConfigQuery';
  allConfigs: Array<IKeplrConfig>;
  config: IKeplrConfig;
};


export type IKeplrConfigQueryConfigArgs = {
  identifier: Scalars['String']['input'];
};

export type ILockdropAdo = {
  __typename?: 'LockdropAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  config: Maybe<ILockdropConfig>;
  state: Maybe<ILockdropState>;
  type: Scalars['String']['output'];
  userInfo: Maybe<Array<ILockdropUserInfo>>;
  withdrawalPercentAllowed: Maybe<Scalars['Float']['output']>;
};


export type ILockdropAdoUserInfoArgs = {
  user: Scalars['String']['input'];
};


export type ILockdropAdoWithdrawalPercentAllowedArgs = {
  timestamp: Scalars['Float']['input'];
};

export type ILockdropConfig = {
  __typename?: 'LockdropConfig';
  deposit_window: Maybe<Scalars['Int']['output']>;
  incentive_token: Maybe<Scalars['String']['output']>;
  init_timestamp: Maybe<Scalars['Int']['output']>;
  lockdrop_incentives: Maybe<Scalars['Int']['output']>;
  native_denom: Maybe<Scalars['String']['output']>;
  withdrawal_window: Maybe<Scalars['Int']['output']>;
};

export type ILockdropState = {
  __typename?: 'LockdropState';
  are_claims_allowed: Maybe<Scalars['Boolean']['output']>;
  total_native_locked: Maybe<Scalars['String']['output']>;
};

export type ILockdropUserInfo = {
  __typename?: 'LockdropUserInfo';
  is_lockdrop_claimed: Maybe<Scalars['Boolean']['output']>;
  total_incentives: Maybe<Scalars['String']['output']>;
  total_native_locked: Maybe<Scalars['String']['output']>;
  withrawal_flag: Maybe<Scalars['Boolean']['output']>;
};

export type IMarketingInfo = {
  __typename?: 'MarketingInfo';
  allowance: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['JSON']['output']>;
  marketing: Maybe<Scalars['String']['output']>;
  project: Maybe<Scalars['String']['output']>;
};

export type IMarketplaceAdo = {
  __typename?: 'MarketplaceAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  latestSaleState: Maybe<ISaleStateResponse>;
  saleIds: Maybe<ISaleIds>;
  saleInfosForAddress: Maybe<Array<ISaleInfo>>;
  saleState: Maybe<ISaleStateResponse>;
  type: Scalars['String']['output'];
};


export type IMarketplaceAdoLatestSaleStateArgs = {
  tokenAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type IMarketplaceAdoSaleIdsArgs = {
  tokenAddress: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type IMarketplaceAdoSaleInfosForAddressArgs = {
  options?: InputMaybe<IAndrSearchOptions>;
  tokenAddress: Scalars['String']['input'];
};


export type IMarketplaceAdoSaleStateArgs = {
  saleId: Scalars['String']['input'];
};

export type IMerkleAirdropAdo = {
  __typename?: 'MerkleAirdropAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  config: Maybe<IMerkleAirdropConfig>;
  isClaimed: Maybe<Scalars['Boolean']['output']>;
  latestStage: Maybe<Scalars['Int']['output']>;
  merkleRoot: Maybe<IMerkleRootResponse>;
  totalClaimed: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type IMerkleAirdropAdoIsClaimedArgs = {
  address: Scalars['String']['input'];
  stage: Scalars['Float']['input'];
};


export type IMerkleAirdropAdoMerkleRootArgs = {
  stage: Scalars['Float']['input'];
};


export type IMerkleAirdropAdoTotalClaimedArgs = {
  stage: Scalars['Float']['input'];
};

export type IMerkleAirdropConfig = {
  __typename?: 'MerkleAirdropConfig';
  asset_info: Maybe<Scalars['JSON']['output']>;
};

export type IMerkleRootResponse = {
  __typename?: 'MerkleRootResponse';
  expiration: Maybe<Scalars['JSON']['output']>;
  merkle_root: Maybe<Scalars['String']['output']>;
  stage: Maybe<Scalars['Int']['output']>;
  total_amount: Maybe<Scalars['String']['output']>;
};

export type IMetadataAttribute = {
  __typename?: 'MetadataAttribute';
  display_type: Maybe<Scalars['String']['output']>;
  trait_type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type IMinter = {
  __typename?: 'Minter';
  cap: Maybe<Scalars['Float']['output']>;
  minter: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  addAdo: IAdo;
  updateAdoOwner: IAdo;
};


export type IMutationAddAdoArgs = {
  input: IAdoInput;
};


export type IMutationUpdateAdoOwnerArgs = {
  input: IUpdateAdoOwnerInput;
};

export type INftApproval = {
  __typename?: 'NftApproval';
  expires: Maybe<Scalars['JSON']['output']>;
  spender: Maybe<Scalars['String']['output']>;
};

export type INftContractInfo = {
  __typename?: 'NftContractInfo';
  name: Maybe<Scalars['String']['output']>;
  symbol: Maybe<Scalars['String']['output']>;
};

export type INftInfo = {
  __typename?: 'NftInfo';
  extension: Maybe<ITokenExtension>;
  token_uri: Maybe<Scalars['String']['output']>;
};

export type INftOwnerInfo = {
  __typename?: 'NftOwnerInfo';
  approvals: Maybe<Array<INftApproval>>;
  owner: Maybe<Scalars['String']['output']>;
};

export type IPercentRate = {
  __typename?: 'PercentRate';
  decimal: Maybe<Scalars['Float']['output']>;
};

export type IPrimitiveAdo = {
  __typename?: 'PrimitiveAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  getValue: Maybe<IPrimitiveResponse>;
  type: Scalars['String']['output'];
};


export type IPrimitiveAdoGetValueArgs = {
  key: Scalars['String']['input'];
};

export type IPrimitiveResponse = {
  __typename?: 'PrimitiveResponse';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['JSON']['output']>;
};

export type IQuery = {
  __typename?: 'Query';
  ADO: IAdoQuery;
  ADOP: IAdopQuery;
  accounts: IAccountsQuery;
  /** @deprecated Moved to `ADO` query resolver, use `app` field on `ADO` to resolve this query. */
  app: IAppAdo;
  /** @deprecated Moved to `Accounts` query resolver, use `assets` field on `Accounts` to resolve this query. */
  assets: Array<IAssetResult>;
  /** @deprecated Moved to `ADO` query resolver, use `auction` field on `ADO` to resolve this query. */
  auction: IAuctionAdo;
  chainConfigs: IChainConfigQuery;
  /** @deprecated Moved to `ADO` query resolver, use `cw721` field on `ADO` to resolve this query. */
  cw721: ICw721Ado;
  keplrConfigs: IKeplrConfigQuery;
  tx: ITxSearchResult;
  /** @deprecated Moved to `ADO` query resolver, use `wasm` field on `ADO` to resolve this query. */
  wasm: IWasmContract;
};


export type IQueryAppArgs = {
  address: Scalars['String']['input'];
};


export type IQueryAssetsArgs = {
  adoType?: InputMaybe<IAdoType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<IAndrOrderBy>;
  search?: InputMaybe<Scalars['String']['input']>;
  walletAddress: Scalars['String']['input'];
};


export type IQueryAuctionArgs = {
  address: Scalars['String']['input'];
};


export type IQueryCw721Args = {
  address: Scalars['String']['input'];
};


export type IQueryTxArgs = {
  chainId: Scalars['String']['input'];
};


export type IQueryWasmArgs = {
  address: Scalars['String']['input'];
};

export type IRate = {
  __typename?: 'Rate';
  external: Maybe<IAdoRate>;
  flat: Maybe<ICoin>;
  percent: Maybe<IPercentRate>;
};

export type IRateInfo = {
  __typename?: 'RateInfo';
  description: Maybe<Scalars['String']['output']>;
  is_additive: Maybe<Scalars['Boolean']['output']>;
  rate: Maybe<IRate>;
  receivers: Maybe<Array<Scalars['JSON']['output']>>;
};

export type IRateLimitingWithdrawalsAdo = {
  __typename?: 'RateLimitingWithdrawalsAdo';
  accountDetails: Maybe<IAccountDetails>;
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  coinAllowanceDetails: Maybe<ICoinAllowance>;
  type: Scalars['String']['output'];
};

export type IRatesAdo = {
  __typename?: 'RatesAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  payments: Maybe<Array<IRateInfo>>;
  type: Scalars['String']['output'];
};

export type ISaleIds = {
  __typename?: 'SaleIds';
  sale_ids: Maybe<Array<Scalars['String']['output']>>;
};

export type ISaleInfo = {
  __typename?: 'SaleInfo';
  sale_ids: Maybe<Array<Scalars['String']['output']>>;
  token_address: Maybe<Scalars['String']['output']>;
  token_id: Maybe<Scalars['String']['output']>;
};

export type ISaleResponse = {
  __typename?: 'SaleResponse';
  amount: Maybe<Scalars['Float']['output']>;
  exchange_rate: Maybe<Scalars['Float']['output']>;
  recipient: Maybe<Scalars['String']['output']>;
};

export type ISaleStateResponse = {
  __typename?: 'SaleStateResponse';
  coin_denom: Maybe<Scalars['String']['output']>;
  price: Maybe<Scalars['String']['output']>;
  sale_id: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
};

export type ISearchAttribute = {
  trait_type: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ISplitter = {
  __typename?: 'Splitter';
  lock: Maybe<Scalars['JSON']['output']>;
  recipients: Maybe<Array<IAddressPercent>>;
};

export type ISplitterAdo = {
  __typename?: 'SplitterAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  config: Maybe<ISplitter>;
  type: Scalars['String']['output'];
};

export type IStakerResponse = {
  __typename?: 'StakerResponse';
  address: Scalars['String']['output'];
  pending_rewards: Maybe<Array<Array<Scalars['String']['output']>>>;
  share: Maybe<Scalars['Float']['output']>;
};

export type IStateStructure = {
  __typename?: 'StateStructure';
  total_share: Maybe<Scalars['Float']['output']>;
};

export type ISubscription = {
  __typename?: 'Subscription';
  adoAdded: IAdo;
  adoOwnerUpdated: IAdo;
};


export type ISubscriptionAdoAddedArgs = {
  filter: IAdoAddedSubscriptionInput;
};


export type ISubscriptionAdoOwnerUpdatedArgs = {
  filter: IAdoOwnerUpdatedSubscriptionInput;
};

export type ISummaryFields = {
  __typename?: 'SummaryFields';
  coin_denom: Maybe<Scalars['String']['output']>;
  high_bidder_amount: Maybe<Scalars['Int']['output']>;
  min_bid: Maybe<Scalars['Int']['output']>;
};

export type ITimelockAdo = {
  __typename?: 'TimelockAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  getLockedFunds: Maybe<IEscrow>;
  getLockedFundsForRecipient: Maybe<Array<IEscrow>>;
  type: Scalars['String']['output'];
};


export type ITimelockAdoGetLockedFundsArgs = {
  owner: Scalars['String']['input'];
  recipient: Scalars['String']['input'];
};


export type ITimelockAdoGetLockedFundsForRecipientArgs = {
  options: IAndrSearchOptions;
  recipient: Scalars['String']['input'];
};

export type ITokenExtension = {
  __typename?: 'TokenExtension';
  animation_url: Maybe<Scalars['String']['output']>;
  attributes: Array<IMetadataAttribute>;
  description: Maybe<Scalars['String']['output']>;
  external_url: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  image_data: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  publisher: Scalars['String']['output'];
  youtube_url: Maybe<Scalars['String']['output']>;
};

export type ITokenInfo = {
  __typename?: 'TokenInfo';
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  total_supply: Scalars['Float']['output'];
};

export type ITransferAgreement = {
  __typename?: 'TransferAgreement';
  agreement: Maybe<IAgreement>;
  tokenId: Maybe<Scalars['String']['output']>;
};

export type ITxEvent = {
  __typename?: 'TxEvent';
  attributes: Array<ITxEventAttribute>;
  type: Scalars['String']['output'];
};

export type ITxEventAttribute = {
  __typename?: 'TxEventAttribute';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ITxInfo = {
  __typename?: 'TxInfo';
  code: Maybe<Scalars['Int']['output']>;
  events: Maybe<Array<ITxEvent>>;
  gasUsed: Maybe<Scalars['Int']['output']>;
  gasWanted: Maybe<Scalars['Int']['output']>;
  hash: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  rawLog: Maybe<Scalars['String']['output']>;
  tx: Maybe<Scalars['JSON']['output']>;
  txLog: Maybe<Array<ITxLog>>;
};

export type ITxLog = {
  __typename?: 'TxLog';
  events: Array<ITxEvent>;
};

export type ITxSearchResult = {
  __typename?: 'TxSearchResult';
  byAccount: Maybe<Array<ITxInfo>>;
  byContract: Maybe<Array<ITxInfo>>;
  byHash: Maybe<ITxInfo>;
  byHeight: Maybe<Array<ITxInfo>>;
  byOwner: Maybe<Array<ITxInfo>>;
  byTag: Maybe<Array<ITxInfo>>;
  chainId: Scalars['String']['output'];
};


export type ITxSearchResultByAccountArgs = {
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  sentFromOrTo: Scalars['String']['input'];
};


export type ITxSearchResultByContractArgs = {
  address: Scalars['String']['input'];
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  minHeight?: InputMaybe<Scalars['Int']['input']>;
};


export type ITxSearchResultByHashArgs = {
  hash: Scalars['String']['input'];
};


export type ITxSearchResultByHeightArgs = {
  height: Scalars['Float']['input'];
};


export type ITxSearchResultByOwnerArgs = {
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  walletAddress: Scalars['String']['input'];
};


export type ITxSearchResultByTagArgs = {
  maxHeight?: InputMaybe<Scalars['Int']['input']>;
  minHeight?: InputMaybe<Scalars['Int']['input']>;
  tags: Scalars['JSON']['input'];
};

export type IUpdateAdoOwnerInput = {
  address: Scalars['String']['input'];
  newOwner: Scalars['String']['input'];
  txHeight: Scalars['Int']['input'];
};

export type IUserWeightResponse = {
  __typename?: 'UserWeightResponse';
  total_weight: Maybe<Scalars['Float']['output']>;
  weight: Maybe<Scalars['Float']['output']>;
};

export type IVaultAdo = {
  __typename?: 'VaultAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  balance: Maybe<Array<ICoin>>;
  strategyAddress: Maybe<IAndrStrategy>;
  type: Scalars['String']['output'];
};


export type IVaultAdoBalanceArgs = {
  address: Scalars['String']['input'];
};


export type IVaultAdoStrategyAddressArgs = {
  strategy: Scalars['String']['input'];
};

export type IVestingAdo = {
  __typename?: 'VestingAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  batch: Maybe<IVestingBatchInfo>;
  batches: Maybe<Array<IVestingBatchInfo>>;
  config: Maybe<IVestingConfig>;
  type: Scalars['String']['output'];
};


export type IVestingAdoBatchArgs = {
  id: Scalars['Float']['input'];
};

export type IVestingBatchInfo = {
  __typename?: 'VestingBatchInfo';
  amount: Maybe<Scalars['String']['output']>;
  amount_available_to_claim: Maybe<Scalars['String']['output']>;
  amount_claimed: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  last_claimed_release_time: Maybe<Scalars['Int']['output']>;
  lockup_end: Maybe<Scalars['Int']['output']>;
  number_of_available_claims: Maybe<Scalars['String']['output']>;
  release_amount: Maybe<Scalars['JSON']['output']>;
  release_unit: Maybe<Scalars['Int']['output']>;
};

export type IVestingConfig = {
  __typename?: 'VestingConfig';
  denom: Maybe<Scalars['String']['output']>;
  is_multi_batch_enabled: Maybe<Scalars['Boolean']['output']>;
  recipient: Maybe<Scalars['JSON']['output']>;
  unbonding_duration: Maybe<Scalars['JSON']['output']>;
};

export type IWasmContract = IIWasmContract & {
  __typename?: 'WasmContract';
  address: Scalars['String']['output'];
  admin: Maybe<Scalars['String']['output']>;
  codeId: Scalars['Int']['output'];
  creator: Scalars['String']['output'];
  ibcPortId: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  queries_expected: Maybe<Array<Scalars['String']['output']>>;
  queryMsg: Maybe<Scalars['JSON']['output']>;
};


export type IWasmContractQueryMsgArgs = {
  message: Scalars['JSON']['input'];
};

export type IWeightedDistributionSplitterAdo = {
  __typename?: 'WeightedDistributionSplitterAdo';
  address: Scalars['String']['output'];
  andr: IAndrQuery;
  config: Maybe<ISplitter>;
  getUserWeight: IUserWeightResponse;
  type: Scalars['String']['output'];
};


export type IWeightedDistributionSplitterAdoGetUserWeightArgs = {
  user: Scalars['String']['input'];
};
