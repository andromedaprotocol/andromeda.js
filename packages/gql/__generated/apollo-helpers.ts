import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ADOPQueryKeySpecifier = ('adoTypes' | 'package' | ADOPQueryKeySpecifier)[];
export type ADOPQueryFieldPolicy = {
	adoTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	package?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ADOPSchemaKeySpecifier = ('contract_schema' | 'execute' | 'instantiate' | 'query' | 'receive' | ADOPSchemaKeySpecifier)[];
export type ADOPSchemaFieldPolicy = {
	contract_schema?: FieldPolicy<any> | FieldReadFunction<any>,
	execute?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiate?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	receive?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ADOPSchemaReceiveKeySpecifier = ('cw20' | 'cw721' | ADOPSchemaReceiveKeySpecifier)[];
export type ADOPSchemaReceiveFieldPolicy = {
	cw20?: FieldPolicy<any> | FieldReadFunction<any>,
	cw721?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ADORateKeySpecifier = ('address' | 'key' | ADORateKeySpecifier)[];
export type ADORateFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountDetailsKeySpecifier = ('balance' | 'latest_withdrawal' | AccountDetailsKeySpecifier)[];
export type AccountDetailsFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	latest_withdrawal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountsQueryKeySpecifier = ('assets' | 'wallets' | AccountsQueryKeySpecifier)[];
export type AccountsQueryFieldPolicy = {
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	wallets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressListAdoKeySpecifier = ('address' | 'admin' | 'andr' | 'codeId' | 'creator' | 'ibcPortId' | 'includesAddress' | 'isOperator' | 'label' | 'operators' | 'owner' | 'queries_expected' | 'type' | AddressListAdoKeySpecifier)[];
export type AddressListAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	includesAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	isOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressListResponseKeySpecifier = ('included' | AddressListResponseKeySpecifier)[];
export type AddressListResponseFieldPolicy = {
	included?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressPercentKeySpecifier = ('percent' | 'recipient' | AddressPercentKeySpecifier)[];
export type AddressPercentFieldPolicy = {
	percent?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdoKeySpecifier = ('address' | 'adoType' | 'appContract' | 'chainId' | 'instantiateHash' | 'instantiateHeight' | 'lastUpdatedHash' | 'lastUpdatedHeight' | 'minter' | 'name' | 'owner' | AdoKeySpecifier)[];
export type AdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	adoType?: FieldPolicy<any> | FieldReadFunction<any>,
	appContract?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiateHash?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiateHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdatedHash?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdatedHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	minter?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdoPackageKeySpecifier = ('name' | 'schemas' | AdoPackageKeySpecifier)[];
export type AdoPackageFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	schemas?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdoQueryKeySpecifier = ('address_list' | 'ado' | 'app' | 'auction' | 'crowdfund' | 'cw20' | 'cw20_exchange' | 'cw20_staking' | 'cw721' | 'factory' | 'lockdrop' | 'marketplace' | 'merkle_airdrop' | 'primitive' | 'rate_limiting_withdrawals' | 'rates' | 'receipt' | 'splitter' | 'timelock' | 'vault' | 'vesting' | 'weighted_distribution_splitter' | AdoQueryKeySpecifier)[];
export type AdoQueryFieldPolicy = {
	address_list?: FieldPolicy<any> | FieldReadFunction<any>,
	ado?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	auction?: FieldPolicy<any> | FieldReadFunction<any>,
	crowdfund?: FieldPolicy<any> | FieldReadFunction<any>,
	cw20?: FieldPolicy<any> | FieldReadFunction<any>,
	cw20_exchange?: FieldPolicy<any> | FieldReadFunction<any>,
	cw20_staking?: FieldPolicy<any> | FieldReadFunction<any>,
	cw721?: FieldPolicy<any> | FieldReadFunction<any>,
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	lockdrop?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplace?: FieldPolicy<any> | FieldReadFunction<any>,
	merkle_airdrop?: FieldPolicy<any> | FieldReadFunction<any>,
	primitive?: FieldPolicy<any> | FieldReadFunction<any>,
	rate_limiting_withdrawals?: FieldPolicy<any> | FieldReadFunction<any>,
	rates?: FieldPolicy<any> | FieldReadFunction<any>,
	receipt?: FieldPolicy<any> | FieldReadFunction<any>,
	splitter?: FieldPolicy<any> | FieldReadFunction<any>,
	timelock?: FieldPolicy<any> | FieldReadFunction<any>,
	vault?: FieldPolicy<any> | FieldReadFunction<any>,
	vesting?: FieldPolicy<any> | FieldReadFunction<any>,
	weighted_distribution_splitter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AgreementKeySpecifier = ('amount' | 'purchaser' | AgreementKeySpecifier)[];
export type AgreementFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	purchaser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AgreementAmountKeySpecifier = ('raw' | AgreementAmountKeySpecifier)[];
export type AgreementAmountFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllNftInfoKeySpecifier = ('access' | 'info' | AllNftInfoKeySpecifier)[];
export type AllNftInfoFieldPolicy = {
	access?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllowanceKeySpecifier = ('allowance' | 'expires' | 'owner' | 'spender' | AllowanceKeySpecifier)[];
export type AllowanceFieldPolicy = {
	allowance?: FieldPolicy<any> | FieldReadFunction<any>,
	expires?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	spender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AndrAddressKeySpecifier = ('identifier' | AndrAddressKeySpecifier)[];
export type AndrAddressFieldPolicy = {
	identifier?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AndrQueryKeySpecifier = ('address' | 'admin' | 'blockHeightUponCreation' | 'codeId' | 'contractVersion' | 'creator' | 'ibcPortId' | 'isOperator' | 'label' | 'operators' | 'originalPublisher' | 'owner' | 'queries_expected' | 'type' | 'version' | AndrQueryKeySpecifier)[];
export type AndrQueryFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	blockHeightUponCreation?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	isOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	originalPublisher?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AndrStrategyKeySpecifier = ('address' | 'strategyType' | AndrStrategyKeySpecifier)[];
export type AndrStrategyFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	strategyType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppAdoKeySpecifier = ('address' | 'addresses' | 'admin' | 'andr' | 'codeId' | 'componentExists' | 'components' | 'config' | 'creator' | 'getAddress' | 'ibcPortId' | 'isOperator' | 'label' | 'operators' | 'owner' | 'queries_expected' | 'type' | AppAdoKeySpecifier)[];
export type AppAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	componentExists?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	getAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	isOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppComponentKeySpecifier = ('address' | 'ado_type' | 'instantiate_msg' | 'name' | AppComponentKeySpecifier)[];
export type AppComponentFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	ado_type?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiate_msg?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppComponentAddressKeySpecifier = ('address' | 'name' | AppComponentAddressKeySpecifier)[];
export type AppComponentAddressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppConfigKeySpecifier = ('name' | 'owner' | AppConfigKeySpecifier)[];
export type AppConfigFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetResultKeySpecifier = ('address' | 'adoType' | 'appContract' | 'chainId' | 'components' | 'instantiateHash' | 'instantiateHeight' | 'lastUpdatedHash' | 'lastUpdatedHeight' | 'name' | 'owner' | AssetResultKeySpecifier)[];
export type AssetResultFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	adoType?: FieldPolicy<any> | FieldReadFunction<any>,
	appContract?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiateHash?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiateHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdatedHash?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdatedHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionAdoKeySpecifier = ('address' | 'admin' | 'andr' | 'auctionIDs' | 'auctionInfosForAddress' | 'auctionState' | 'bids' | 'codeId' | 'creator' | 'ibcPortId' | 'isOperator' | 'label' | 'latestAuctionState' | 'operators' | 'owner' | 'queries_expected' | 'summaryFields' | 'type' | AuctionAdoKeySpecifier)[];
export type AuctionAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionIDs?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionInfosForAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	auctionState?: FieldPolicy<any> | FieldReadFunction<any>,
	bids?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	isOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	latestAuctionState?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	summaryFields?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionIDsResponseKeySpecifier = ('auction_ids' | AuctionIDsResponseKeySpecifier)[];
export type AuctionIDsResponseFieldPolicy = {
	auction_ids?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionInfosForAddressResponseKeySpecifier = ('auction_ids' | 'token_address' | 'token_id' | AuctionInfosForAddressResponseKeySpecifier)[];
export type AuctionInfosForAddressResponseFieldPolicy = {
	auction_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	token_address?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuctionStateResponseKeySpecifier = ('auction_id' | 'coin_denom' | 'end_time' | 'high_bidder_addr' | 'high_bidder_amount' | 'is_cancelled' | 'min_bid' | 'start_time' | 'summaryFields' | 'whitelist' | AuctionStateResponseKeySpecifier)[];
export type AuctionStateResponseFieldPolicy = {
	auction_id?: FieldPolicy<any> | FieldReadFunction<any>,
	coin_denom?: FieldPolicy<any> | FieldReadFunction<any>,
	end_time?: FieldPolicy<any> | FieldReadFunction<any>,
	high_bidder_addr?: FieldPolicy<any> | FieldReadFunction<any>,
	high_bidder_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	is_cancelled?: FieldPolicy<any> | FieldReadFunction<any>,
	min_bid?: FieldPolicy<any> | FieldReadFunction<any>,
	start_time?: FieldPolicy<any> | FieldReadFunction<any>,
	summaryFields?: FieldPolicy<any> | FieldReadFunction<any>,
	whitelist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseAdoKeySpecifier = ('address' | 'andr' | 'type' | BaseAdoKeySpecifier)[];
export type BaseAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bech32ConfigKeySpecifier = ('bech32PrefixAccAddr' | 'bech32PrefixAccPub' | 'bech32PrefixConsAddr' | 'bech32PrefixConsPub' | 'bech32PrefixValAddr' | 'bech32PrefixValPub' | Bech32ConfigKeySpecifier)[];
export type Bech32ConfigFieldPolicy = {
	bech32PrefixAccAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixAccPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValPub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BidKeySpecifier = ('amount' | 'bidder' | 'timestamp' | BidKeySpecifier)[];
export type BidFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	bidder?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BidsResponseKeySpecifier = ('bids' | BidsResponseKeySpecifier)[];
export type BidsResponseFieldPolicy = {
	bids?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bip44KeySpecifier = ('coinType' | Bip44KeySpecifier)[];
export type Bip44FieldPolicy = {
	coinType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CW20AdoKeySpecifier = ('address' | 'allAccounts' | 'allAllowances' | 'allSpenderAllowances' | 'allowance' | 'andr' | 'balance' | 'downloadLogo' | 'marketingInfo' | 'minter' | 'tokenInfo' | 'type' | CW20AdoKeySpecifier)[];
export type CW20AdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	allAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	allAllowances?: FieldPolicy<any> | FieldReadFunction<any>,
	allSpenderAllowances?: FieldPolicy<any> | FieldReadFunction<any>,
	allowance?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadLogo?: FieldPolicy<any> | FieldReadFunction<any>,
	marketingInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	minter?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CW20ExchangeAdoKeySpecifier = ('address' | 'andr' | 'sale' | 'saleAssets' | 'tokenAddress' | 'type' | CW20ExchangeAdoKeySpecifier)[];
export type CW20ExchangeAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	saleAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CW20StakingAdoKeySpecifier = ('address' | 'andr' | 'config' | 'staker' | 'stakers' | 'state' | 'timestamp' | 'type' | CW20StakingAdoKeySpecifier)[];
export type CW20StakingAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	staker?: FieldPolicy<any> | FieldReadFunction<any>,
	stakers?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CW721AdoKeySpecifier = ('address' | 'admin' | 'allNftInfo' | 'allOperators' | 'allTokens' | 'andr' | 'approval' | 'approvals' | 'codeId' | 'contractInfo' | 'creator' | 'ibcPortId' | 'isArchived' | 'isOperator' | 'label' | 'minter' | 'nftInfo' | 'numOwners' | 'numTokens' | 'operators' | 'owner' | 'ownerOf' | 'queries_expected' | 'searchTokens' | 'tokens' | 'transferAgreement' | 'type' | CW721AdoKeySpecifier)[];
export type CW721AdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	allNftInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	allOperators?: FieldPolicy<any> | FieldReadFunction<any>,
	allTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	approval?: FieldPolicy<any> | FieldReadFunction<any>,
	approvals?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	contractInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	isArchived?: FieldPolicy<any> | FieldReadFunction<any>,
	isOperator?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	minter?: FieldPolicy<any> | FieldReadFunction<any>,
	nftInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	numOwners?: FieldPolicy<any> | FieldReadFunction<any>,
	numTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	operators?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerOf?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	searchTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	transferAgreement?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainConfigKeySpecifier = ('addressPrefix' | 'blockExplorerAddressPages' | 'blockExplorerTxPages' | 'chainId' | 'chainName' | 'chainType' | 'chainUrl' | 'defaultFee' | 'iconUrls' | 'kernelAddress' | 'name' | 'registryAddress' | ChainConfigKeySpecifier)[];
export type ChainConfigFieldPolicy = {
	addressPrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	blockExplorerAddressPages?: FieldPolicy<any> | FieldReadFunction<any>,
	blockExplorerTxPages?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	chainName?: FieldPolicy<any> | FieldReadFunction<any>,
	chainType?: FieldPolicy<any> | FieldReadFunction<any>,
	chainUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultFee?: FieldPolicy<any> | FieldReadFunction<any>,
	iconUrls?: FieldPolicy<any> | FieldReadFunction<any>,
	kernelAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	registryAddress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainConfigQueryKeySpecifier = ('allConfigs' | 'config' | ChainConfigQueryKeySpecifier)[];
export type ChainConfigQueryFieldPolicy = {
	allConfigs?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoinKeySpecifier = ('amount' | 'denom' | CoinKeySpecifier)[];
export type CoinFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoinAllowanceKeySpecifier = ('coin' | 'limit' | 'minimal_withdrawal_frequency' | CoinAllowanceKeySpecifier)[];
export type CoinAllowanceFieldPolicy = {
	coin?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	minimal_withdrawal_frequency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComponentKeySpecifier = ('address' | 'ado_type' | 'instantiate_msg' | 'name' | ComponentKeySpecifier)[];
export type ComponentFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	ado_type?: FieldPolicy<any> | FieldReadFunction<any>,
	instantiate_msg?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConfigStructureKeySpecifier = ('number_of_reward_tokens' | 'staking_token' | ConfigStructureKeySpecifier)[];
export type ConfigStructureFieldPolicy = {
	number_of_reward_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	staking_token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrowdfundAdoKeySpecifier = ('address' | 'andr' | 'availableTokens' | 'config' | 'isTokenAvailable' | 'state' | 'type' | CrowdfundAdoKeySpecifier)[];
export type CrowdfundAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	availableTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	isTokenAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrowdfundConfigKeySpecifier = ('can_mint_after_sale' | 'token_address' | CrowdfundConfigKeySpecifier)[];
export type CrowdfundConfigFieldPolicy = {
	can_mint_after_sale?: FieldPolicy<any> | FieldReadFunction<any>,
	token_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrowdfundStateKeySpecifier = ('amount_sold' | 'amount_to_send' | 'amount_transferred' | 'expiration' | 'max_amount_per_wallet' | 'min_tokens_sold' | 'price' | 'recipient' | CrowdfundStateKeySpecifier)[];
export type CrowdfundStateFieldPolicy = {
	amount_sold?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_to_send?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_transferred?: FieldPolicy<any> | FieldReadFunction<any>,
	expiration?: FieldPolicy<any> | FieldReadFunction<any>,
	max_amount_per_wallet?: FieldPolicy<any> | FieldReadFunction<any>,
	min_tokens_sold?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrencyKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoId' | 'coinMinimalDenom' | CurrencyKeySpecifier)[];
export type CurrencyFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoId?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadLogoKeySpecifier = ('data' | 'mime_type' | DownloadLogoKeySpecifier)[];
export type DownloadLogoFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	mime_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowKeySpecifier = ('coins' | 'condition' | 'recipient' | EscrowKeySpecifier)[];
export type EscrowFieldPolicy = {
	coins?: FieldPolicy<any> | FieldReadFunction<any>,
	condition?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowConditionKeySpecifier = ('expiration' | 'miniumFunds' | EscrowConditionKeySpecifier)[];
export type EscrowConditionFieldPolicy = {
	expiration?: FieldPolicy<any> | FieldReadFunction<any>,
	miniumFunds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactoryAdoKeySpecifier = ('address' | 'andr' | 'code_id' | 'type' | FactoryAdoKeySpecifier)[];
export type FactoryAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	code_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GasPriceStepKeySpecifier = ('average' | 'high' | 'low' | GasPriceStepKeySpecifier)[];
export type GasPriceStepFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	high?: FieldPolicy<any> | FieldReadFunction<any>,
	low?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IBaseAdoQueryKeySpecifier = ('address' | 'andr' | 'type' | IBaseAdoQueryKeySpecifier)[];
export type IBaseAdoQueryFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IWasmContractKeySpecifier = ('address' | 'admin' | 'codeId' | 'creator' | 'ibcPortId' | 'label' | 'queries_expected' | IWasmContractKeySpecifier)[];
export type IWasmContractFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IconUrlKeySpecifier = ('lg' | 'sm' | IconUrlKeySpecifier)[];
export type IconUrlFieldPolicy = {
	lg?: FieldPolicy<any> | FieldReadFunction<any>,
	sm?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeplrConfigKeySpecifier = ('bech32Config' | 'bip44' | 'chainId' | 'chainName' | 'coinType' | 'currencies' | 'feeCurrencies' | 'gasPriceStep' | 'rest' | 'rpc' | 'stakeCurrency' | KeplrConfigKeySpecifier)[];
export type KeplrConfigFieldPolicy = {
	bech32Config?: FieldPolicy<any> | FieldReadFunction<any>,
	bip44?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	chainName?: FieldPolicy<any> | FieldReadFunction<any>,
	coinType?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	feeCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	gasPriceStep?: FieldPolicy<any> | FieldReadFunction<any>,
	rest?: FieldPolicy<any> | FieldReadFunction<any>,
	rpc?: FieldPolicy<any> | FieldReadFunction<any>,
	stakeCurrency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeplrConfigQueryKeySpecifier = ('allConfigs' | 'config' | KeplrConfigQueryKeySpecifier)[];
export type KeplrConfigQueryFieldPolicy = {
	allConfigs?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockdropAdoKeySpecifier = ('address' | 'andr' | 'config' | 'state' | 'type' | 'userInfo' | 'withdrawalPercentAllowed' | LockdropAdoKeySpecifier)[];
export type LockdropAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	userInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawalPercentAllowed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockdropConfigKeySpecifier = ('deposit_window' | 'incentive_token' | 'init_timestamp' | 'lockdrop_incentives' | 'native_denom' | 'withdrawal_window' | LockdropConfigKeySpecifier)[];
export type LockdropConfigFieldPolicy = {
	deposit_window?: FieldPolicy<any> | FieldReadFunction<any>,
	incentive_token?: FieldPolicy<any> | FieldReadFunction<any>,
	init_timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	lockdrop_incentives?: FieldPolicy<any> | FieldReadFunction<any>,
	native_denom?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawal_window?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockdropStateKeySpecifier = ('are_claims_allowed' | 'total_native_locked' | LockdropStateKeySpecifier)[];
export type LockdropStateFieldPolicy = {
	are_claims_allowed?: FieldPolicy<any> | FieldReadFunction<any>,
	total_native_locked?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LockdropUserInfoKeySpecifier = ('is_lockdrop_claimed' | 'total_incentives' | 'total_native_locked' | 'withrawal_flag' | LockdropUserInfoKeySpecifier)[];
export type LockdropUserInfoFieldPolicy = {
	is_lockdrop_claimed?: FieldPolicy<any> | FieldReadFunction<any>,
	total_incentives?: FieldPolicy<any> | FieldReadFunction<any>,
	total_native_locked?: FieldPolicy<any> | FieldReadFunction<any>,
	withrawal_flag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketingInfoKeySpecifier = ('allowance' | 'description' | 'logo' | 'marketing' | 'project' | MarketingInfoKeySpecifier)[];
export type MarketingInfoFieldPolicy = {
	allowance?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	marketing?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceAdoKeySpecifier = ('address' | 'andr' | 'latestSaleState' | 'saleIds' | 'saleInfosForAddress' | 'saleState' | 'type' | MarketplaceAdoKeySpecifier)[];
export type MarketplaceAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	latestSaleState?: FieldPolicy<any> | FieldReadFunction<any>,
	saleIds?: FieldPolicy<any> | FieldReadFunction<any>,
	saleInfosForAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	saleState?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MerkleAirdropAdoKeySpecifier = ('address' | 'andr' | 'config' | 'isClaimed' | 'latestStage' | 'merkleRoot' | 'totalClaimed' | 'type' | MerkleAirdropAdoKeySpecifier)[];
export type MerkleAirdropAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	isClaimed?: FieldPolicy<any> | FieldReadFunction<any>,
	latestStage?: FieldPolicy<any> | FieldReadFunction<any>,
	merkleRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	totalClaimed?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MerkleAirdropConfigKeySpecifier = ('asset_info' | MerkleAirdropConfigKeySpecifier)[];
export type MerkleAirdropConfigFieldPolicy = {
	asset_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MerkleRootResponseKeySpecifier = ('expiration' | 'merkle_root' | 'stage' | 'total_amount' | MerkleRootResponseKeySpecifier)[];
export type MerkleRootResponseFieldPolicy = {
	expiration?: FieldPolicy<any> | FieldReadFunction<any>,
	merkle_root?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	total_amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataAttributeKeySpecifier = ('display_type' | 'trait_type' | 'value' | MetadataAttributeKeySpecifier)[];
export type MetadataAttributeFieldPolicy = {
	display_type?: FieldPolicy<any> | FieldReadFunction<any>,
	trait_type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MinterKeySpecifier = ('cap' | 'minter' | MinterKeySpecifier)[];
export type MinterFieldPolicy = {
	cap?: FieldPolicy<any> | FieldReadFunction<any>,
	minter?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addAdo' | 'updateAdoOwner' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addAdo?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAdoOwner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftApprovalKeySpecifier = ('expires' | 'spender' | NftApprovalKeySpecifier)[];
export type NftApprovalFieldPolicy = {
	expires?: FieldPolicy<any> | FieldReadFunction<any>,
	spender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftContractInfoKeySpecifier = ('name' | 'symbol' | NftContractInfoKeySpecifier)[];
export type NftContractInfoFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftInfoKeySpecifier = ('extension' | 'token_uri' | NftInfoKeySpecifier)[];
export type NftInfoFieldPolicy = {
	extension?: FieldPolicy<any> | FieldReadFunction<any>,
	token_uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NftOwnerInfoKeySpecifier = ('approvals' | 'owner' | NftOwnerInfoKeySpecifier)[];
export type NftOwnerInfoFieldPolicy = {
	approvals?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PercentRateKeySpecifier = ('decimal' | PercentRateKeySpecifier)[];
export type PercentRateFieldPolicy = {
	decimal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrimitiveAdoKeySpecifier = ('address' | 'andr' | 'getValue' | 'type' | PrimitiveAdoKeySpecifier)[];
export type PrimitiveAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	getValue?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrimitiveResponseKeySpecifier = ('key' | 'value' | PrimitiveResponseKeySpecifier)[];
export type PrimitiveResponseFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('ADO' | 'ADOP' | 'accounts' | 'app' | 'assets' | 'auction' | 'chainConfigs' | 'cw721' | 'keplrConfigs' | 'tx' | 'wasm' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	ADO?: FieldPolicy<any> | FieldReadFunction<any>,
	ADOP?: FieldPolicy<any> | FieldReadFunction<any>,
	accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	app?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	auction?: FieldPolicy<any> | FieldReadFunction<any>,
	chainConfigs?: FieldPolicy<any> | FieldReadFunction<any>,
	cw721?: FieldPolicy<any> | FieldReadFunction<any>,
	keplrConfigs?: FieldPolicy<any> | FieldReadFunction<any>,
	tx?: FieldPolicy<any> | FieldReadFunction<any>,
	wasm?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateKeySpecifier = ('external' | 'flat' | 'percent' | RateKeySpecifier)[];
export type RateFieldPolicy = {
	external?: FieldPolicy<any> | FieldReadFunction<any>,
	flat?: FieldPolicy<any> | FieldReadFunction<any>,
	percent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateInfoKeySpecifier = ('description' | 'is_additive' | 'rate' | 'receivers' | RateInfoKeySpecifier)[];
export type RateInfoFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	is_additive?: FieldPolicy<any> | FieldReadFunction<any>,
	rate?: FieldPolicy<any> | FieldReadFunction<any>,
	receivers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RateLimitingWithdrawalsAdoKeySpecifier = ('accountDetails' | 'address' | 'andr' | 'coinAllowanceDetails' | 'type' | RateLimitingWithdrawalsAdoKeySpecifier)[];
export type RateLimitingWithdrawalsAdoFieldPolicy = {
	accountDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	coinAllowanceDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatesAdoKeySpecifier = ('address' | 'andr' | 'payments' | 'type' | RatesAdoKeySpecifier)[];
export type RatesAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleIdsKeySpecifier = ('sale_ids' | SaleIdsKeySpecifier)[];
export type SaleIdsFieldPolicy = {
	sale_ids?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleInfoKeySpecifier = ('sale_ids' | 'token_address' | 'token_id' | SaleInfoKeySpecifier)[];
export type SaleInfoFieldPolicy = {
	sale_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	token_address?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleResponseKeySpecifier = ('amount' | 'exchange_rate' | 'recipient' | SaleResponseKeySpecifier)[];
export type SaleResponseFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	exchange_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleStateResponseKeySpecifier = ('coin_denom' | 'price' | 'sale_id' | 'status' | SaleStateResponseKeySpecifier)[];
export type SaleStateResponseFieldPolicy = {
	coin_denom?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	sale_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SplitterKeySpecifier = ('lock' | 'recipients' | SplitterKeySpecifier)[];
export type SplitterFieldPolicy = {
	lock?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SplitterAdoKeySpecifier = ('address' | 'andr' | 'config' | 'type' | SplitterAdoKeySpecifier)[];
export type SplitterAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StakerResponseKeySpecifier = ('address' | 'pending_rewards' | 'share' | StakerResponseKeySpecifier)[];
export type StakerResponseFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	pending_rewards?: FieldPolicy<any> | FieldReadFunction<any>,
	share?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StateStructureKeySpecifier = ('total_share' | StateStructureKeySpecifier)[];
export type StateStructureFieldPolicy = {
	total_share?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('adoAdded' | 'adoOwnerUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	adoAdded?: FieldPolicy<any> | FieldReadFunction<any>,
	adoOwnerUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SummaryFieldsKeySpecifier = ('coin_denom' | 'high_bidder_amount' | 'min_bid' | SummaryFieldsKeySpecifier)[];
export type SummaryFieldsFieldPolicy = {
	coin_denom?: FieldPolicy<any> | FieldReadFunction<any>,
	high_bidder_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	min_bid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimelockAdoKeySpecifier = ('address' | 'andr' | 'getLockedFunds' | 'getLockedFundsForRecipient' | 'type' | TimelockAdoKeySpecifier)[];
export type TimelockAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	getLockedFunds?: FieldPolicy<any> | FieldReadFunction<any>,
	getLockedFundsForRecipient?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenExtensionKeySpecifier = ('animation_url' | 'attributes' | 'description' | 'external_url' | 'image' | 'image_data' | 'name' | 'publisher' | 'youtube_url' | TokenExtensionKeySpecifier)[];
export type TokenExtensionFieldPolicy = {
	animation_url?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	external_url?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	image_data?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publisher?: FieldPolicy<any> | FieldReadFunction<any>,
	youtube_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenInfoKeySpecifier = ('decimals' | 'name' | 'symbol' | 'total_supply' | TokenInfoKeySpecifier)[];
export type TokenInfoFieldPolicy = {
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	total_supply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferAgreementKeySpecifier = ('agreement' | 'tokenId' | TransferAgreementKeySpecifier)[];
export type TransferAgreementFieldPolicy = {
	agreement?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TxEventKeySpecifier = ('attributes' | 'type' | TxEventKeySpecifier)[];
export type TxEventFieldPolicy = {
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TxEventAttributeKeySpecifier = ('key' | 'value' | TxEventAttributeKeySpecifier)[];
export type TxEventAttributeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TxInfoKeySpecifier = ('code' | 'events' | 'gasUsed' | 'gasWanted' | 'hash' | 'height' | 'rawLog' | 'tx' | 'txLog' | TxInfoKeySpecifier)[];
export type TxInfoFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	gasWanted?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	rawLog?: FieldPolicy<any> | FieldReadFunction<any>,
	tx?: FieldPolicy<any> | FieldReadFunction<any>,
	txLog?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TxLogKeySpecifier = ('events' | TxLogKeySpecifier)[];
export type TxLogFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TxSearchResultKeySpecifier = ('byAccount' | 'byContract' | 'byHash' | 'byHeight' | 'byOwner' | 'byTag' | 'chainId' | TxSearchResultKeySpecifier)[];
export type TxSearchResultFieldPolicy = {
	byAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	byContract?: FieldPolicy<any> | FieldReadFunction<any>,
	byHash?: FieldPolicy<any> | FieldReadFunction<any>,
	byHeight?: FieldPolicy<any> | FieldReadFunction<any>,
	byOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	byTag?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserWeightResponseKeySpecifier = ('total_weight' | 'weight' | UserWeightResponseKeySpecifier)[];
export type UserWeightResponseFieldPolicy = {
	total_weight?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VaultAdoKeySpecifier = ('address' | 'andr' | 'balance' | 'strategyAddress' | 'type' | VaultAdoKeySpecifier)[];
export type VaultAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	strategyAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VestingAdoKeySpecifier = ('address' | 'andr' | 'batch' | 'batches' | 'config' | 'type' | VestingAdoKeySpecifier)[];
export type VestingAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	batch?: FieldPolicy<any> | FieldReadFunction<any>,
	batches?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VestingBatchInfoKeySpecifier = ('amount' | 'amount_available_to_claim' | 'amount_claimed' | 'id' | 'last_claimed_release_time' | 'lockup_end' | 'number_of_available_claims' | 'release_amount' | 'release_unit' | VestingBatchInfoKeySpecifier)[];
export type VestingBatchInfoFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_available_to_claim?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_claimed?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_claimed_release_time?: FieldPolicy<any> | FieldReadFunction<any>,
	lockup_end?: FieldPolicy<any> | FieldReadFunction<any>,
	number_of_available_claims?: FieldPolicy<any> | FieldReadFunction<any>,
	release_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	release_unit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VestingConfigKeySpecifier = ('denom' | 'is_multi_batch_enabled' | 'recipient' | 'unbonding_duration' | VestingConfigKeySpecifier)[];
export type VestingConfigFieldPolicy = {
	denom?: FieldPolicy<any> | FieldReadFunction<any>,
	is_multi_batch_enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	unbonding_duration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WasmContractKeySpecifier = ('address' | 'admin' | 'codeId' | 'creator' | 'ibcPortId' | 'label' | 'queries_expected' | 'queryMsg' | WasmContractKeySpecifier)[];
export type WasmContractFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	codeId?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	ibcPortId?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	queries_expected?: FieldPolicy<any> | FieldReadFunction<any>,
	queryMsg?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeightedDistributionSplitterAdoKeySpecifier = ('address' | 'andr' | 'config' | 'getUserWeight' | 'type' | WeightedDistributionSplitterAdoKeySpecifier)[];
export type WeightedDistributionSplitterAdoFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	andr?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserWeight?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ADOPQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ADOPQueryKeySpecifier | (() => undefined | ADOPQueryKeySpecifier),
		fields?: ADOPQueryFieldPolicy,
	},
	ADOPSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ADOPSchemaKeySpecifier | (() => undefined | ADOPSchemaKeySpecifier),
		fields?: ADOPSchemaFieldPolicy,
	},
	ADOPSchemaReceive?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ADOPSchemaReceiveKeySpecifier | (() => undefined | ADOPSchemaReceiveKeySpecifier),
		fields?: ADOPSchemaReceiveFieldPolicy,
	},
	ADORate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ADORateKeySpecifier | (() => undefined | ADORateKeySpecifier),
		fields?: ADORateFieldPolicy,
	},
	AccountDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountDetailsKeySpecifier | (() => undefined | AccountDetailsKeySpecifier),
		fields?: AccountDetailsFieldPolicy,
	},
	AccountsQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountsQueryKeySpecifier | (() => undefined | AccountsQueryKeySpecifier),
		fields?: AccountsQueryFieldPolicy,
	},
	AddressListAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressListAdoKeySpecifier | (() => undefined | AddressListAdoKeySpecifier),
		fields?: AddressListAdoFieldPolicy,
	},
	AddressListResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressListResponseKeySpecifier | (() => undefined | AddressListResponseKeySpecifier),
		fields?: AddressListResponseFieldPolicy,
	},
	AddressPercent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressPercentKeySpecifier | (() => undefined | AddressPercentKeySpecifier),
		fields?: AddressPercentFieldPolicy,
	},
	Ado?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdoKeySpecifier | (() => undefined | AdoKeySpecifier),
		fields?: AdoFieldPolicy,
	},
	AdoPackage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdoPackageKeySpecifier | (() => undefined | AdoPackageKeySpecifier),
		fields?: AdoPackageFieldPolicy,
	},
	AdoQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdoQueryKeySpecifier | (() => undefined | AdoQueryKeySpecifier),
		fields?: AdoQueryFieldPolicy,
	},
	Agreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AgreementKeySpecifier | (() => undefined | AgreementKeySpecifier),
		fields?: AgreementFieldPolicy,
	},
	AgreementAmount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AgreementAmountKeySpecifier | (() => undefined | AgreementAmountKeySpecifier),
		fields?: AgreementAmountFieldPolicy,
	},
	AllNftInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllNftInfoKeySpecifier | (() => undefined | AllNftInfoKeySpecifier),
		fields?: AllNftInfoFieldPolicy,
	},
	Allowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllowanceKeySpecifier | (() => undefined | AllowanceKeySpecifier),
		fields?: AllowanceFieldPolicy,
	},
	AndrAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AndrAddressKeySpecifier | (() => undefined | AndrAddressKeySpecifier),
		fields?: AndrAddressFieldPolicy,
	},
	AndrQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AndrQueryKeySpecifier | (() => undefined | AndrQueryKeySpecifier),
		fields?: AndrQueryFieldPolicy,
	},
	AndrStrategy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AndrStrategyKeySpecifier | (() => undefined | AndrStrategyKeySpecifier),
		fields?: AndrStrategyFieldPolicy,
	},
	AppAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppAdoKeySpecifier | (() => undefined | AppAdoKeySpecifier),
		fields?: AppAdoFieldPolicy,
	},
	AppComponent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppComponentKeySpecifier | (() => undefined | AppComponentKeySpecifier),
		fields?: AppComponentFieldPolicy,
	},
	AppComponentAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppComponentAddressKeySpecifier | (() => undefined | AppComponentAddressKeySpecifier),
		fields?: AppComponentAddressFieldPolicy,
	},
	AppConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppConfigKeySpecifier | (() => undefined | AppConfigKeySpecifier),
		fields?: AppConfigFieldPolicy,
	},
	AssetResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetResultKeySpecifier | (() => undefined | AssetResultKeySpecifier),
		fields?: AssetResultFieldPolicy,
	},
	AuctionAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionAdoKeySpecifier | (() => undefined | AuctionAdoKeySpecifier),
		fields?: AuctionAdoFieldPolicy,
	},
	AuctionIDsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionIDsResponseKeySpecifier | (() => undefined | AuctionIDsResponseKeySpecifier),
		fields?: AuctionIDsResponseFieldPolicy,
	},
	AuctionInfosForAddressResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionInfosForAddressResponseKeySpecifier | (() => undefined | AuctionInfosForAddressResponseKeySpecifier),
		fields?: AuctionInfosForAddressResponseFieldPolicy,
	},
	AuctionStateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuctionStateResponseKeySpecifier | (() => undefined | AuctionStateResponseKeySpecifier),
		fields?: AuctionStateResponseFieldPolicy,
	},
	BaseAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseAdoKeySpecifier | (() => undefined | BaseAdoKeySpecifier),
		fields?: BaseAdoFieldPolicy,
	},
	Bech32Config?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Bech32ConfigKeySpecifier | (() => undefined | Bech32ConfigKeySpecifier),
		fields?: Bech32ConfigFieldPolicy,
	},
	Bid?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BidKeySpecifier | (() => undefined | BidKeySpecifier),
		fields?: BidFieldPolicy,
	},
	BidsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BidsResponseKeySpecifier | (() => undefined | BidsResponseKeySpecifier),
		fields?: BidsResponseFieldPolicy,
	},
	Bip44?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Bip44KeySpecifier | (() => undefined | Bip44KeySpecifier),
		fields?: Bip44FieldPolicy,
	},
	CW20Ado?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CW20AdoKeySpecifier | (() => undefined | CW20AdoKeySpecifier),
		fields?: CW20AdoFieldPolicy,
	},
	CW20ExchangeAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CW20ExchangeAdoKeySpecifier | (() => undefined | CW20ExchangeAdoKeySpecifier),
		fields?: CW20ExchangeAdoFieldPolicy,
	},
	CW20StakingAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CW20StakingAdoKeySpecifier | (() => undefined | CW20StakingAdoKeySpecifier),
		fields?: CW20StakingAdoFieldPolicy,
	},
	CW721Ado?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CW721AdoKeySpecifier | (() => undefined | CW721AdoKeySpecifier),
		fields?: CW721AdoFieldPolicy,
	},
	ChainConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainConfigKeySpecifier | (() => undefined | ChainConfigKeySpecifier),
		fields?: ChainConfigFieldPolicy,
	},
	ChainConfigQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainConfigQueryKeySpecifier | (() => undefined | ChainConfigQueryKeySpecifier),
		fields?: ChainConfigQueryFieldPolicy,
	},
	Coin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoinKeySpecifier | (() => undefined | CoinKeySpecifier),
		fields?: CoinFieldPolicy,
	},
	CoinAllowance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoinAllowanceKeySpecifier | (() => undefined | CoinAllowanceKeySpecifier),
		fields?: CoinAllowanceFieldPolicy,
	},
	Component?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComponentKeySpecifier | (() => undefined | ComponentKeySpecifier),
		fields?: ComponentFieldPolicy,
	},
	ConfigStructure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConfigStructureKeySpecifier | (() => undefined | ConfigStructureKeySpecifier),
		fields?: ConfigStructureFieldPolicy,
	},
	CrowdfundAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrowdfundAdoKeySpecifier | (() => undefined | CrowdfundAdoKeySpecifier),
		fields?: CrowdfundAdoFieldPolicy,
	},
	CrowdfundConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrowdfundConfigKeySpecifier | (() => undefined | CrowdfundConfigKeySpecifier),
		fields?: CrowdfundConfigFieldPolicy,
	},
	CrowdfundState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrowdfundStateKeySpecifier | (() => undefined | CrowdfundStateKeySpecifier),
		fields?: CrowdfundStateFieldPolicy,
	},
	Currency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrencyKeySpecifier | (() => undefined | CurrencyKeySpecifier),
		fields?: CurrencyFieldPolicy,
	},
	DownloadLogo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadLogoKeySpecifier | (() => undefined | DownloadLogoKeySpecifier),
		fields?: DownloadLogoFieldPolicy,
	},
	Escrow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EscrowKeySpecifier | (() => undefined | EscrowKeySpecifier),
		fields?: EscrowFieldPolicy,
	},
	EscrowCondition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EscrowConditionKeySpecifier | (() => undefined | EscrowConditionKeySpecifier),
		fields?: EscrowConditionFieldPolicy,
	},
	FactoryAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactoryAdoKeySpecifier | (() => undefined | FactoryAdoKeySpecifier),
		fields?: FactoryAdoFieldPolicy,
	},
	GasPriceStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GasPriceStepKeySpecifier | (() => undefined | GasPriceStepKeySpecifier),
		fields?: GasPriceStepFieldPolicy,
	},
	IBaseAdoQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IBaseAdoQueryKeySpecifier | (() => undefined | IBaseAdoQueryKeySpecifier),
		fields?: IBaseAdoQueryFieldPolicy,
	},
	IWasmContract?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IWasmContractKeySpecifier | (() => undefined | IWasmContractKeySpecifier),
		fields?: IWasmContractFieldPolicy,
	},
	IconUrl?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IconUrlKeySpecifier | (() => undefined | IconUrlKeySpecifier),
		fields?: IconUrlFieldPolicy,
	},
	KeplrConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeplrConfigKeySpecifier | (() => undefined | KeplrConfigKeySpecifier),
		fields?: KeplrConfigFieldPolicy,
	},
	KeplrConfigQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeplrConfigQueryKeySpecifier | (() => undefined | KeplrConfigQueryKeySpecifier),
		fields?: KeplrConfigQueryFieldPolicy,
	},
	LockdropAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockdropAdoKeySpecifier | (() => undefined | LockdropAdoKeySpecifier),
		fields?: LockdropAdoFieldPolicy,
	},
	LockdropConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockdropConfigKeySpecifier | (() => undefined | LockdropConfigKeySpecifier),
		fields?: LockdropConfigFieldPolicy,
	},
	LockdropState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockdropStateKeySpecifier | (() => undefined | LockdropStateKeySpecifier),
		fields?: LockdropStateFieldPolicy,
	},
	LockdropUserInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LockdropUserInfoKeySpecifier | (() => undefined | LockdropUserInfoKeySpecifier),
		fields?: LockdropUserInfoFieldPolicy,
	},
	MarketingInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketingInfoKeySpecifier | (() => undefined | MarketingInfoKeySpecifier),
		fields?: MarketingInfoFieldPolicy,
	},
	MarketplaceAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceAdoKeySpecifier | (() => undefined | MarketplaceAdoKeySpecifier),
		fields?: MarketplaceAdoFieldPolicy,
	},
	MerkleAirdropAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MerkleAirdropAdoKeySpecifier | (() => undefined | MerkleAirdropAdoKeySpecifier),
		fields?: MerkleAirdropAdoFieldPolicy,
	},
	MerkleAirdropConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MerkleAirdropConfigKeySpecifier | (() => undefined | MerkleAirdropConfigKeySpecifier),
		fields?: MerkleAirdropConfigFieldPolicy,
	},
	MerkleRootResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MerkleRootResponseKeySpecifier | (() => undefined | MerkleRootResponseKeySpecifier),
		fields?: MerkleRootResponseFieldPolicy,
	},
	MetadataAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataAttributeKeySpecifier | (() => undefined | MetadataAttributeKeySpecifier),
		fields?: MetadataAttributeFieldPolicy,
	},
	Minter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MinterKeySpecifier | (() => undefined | MinterKeySpecifier),
		fields?: MinterFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	NftApproval?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftApprovalKeySpecifier | (() => undefined | NftApprovalKeySpecifier),
		fields?: NftApprovalFieldPolicy,
	},
	NftContractInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftContractInfoKeySpecifier | (() => undefined | NftContractInfoKeySpecifier),
		fields?: NftContractInfoFieldPolicy,
	},
	NftInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftInfoKeySpecifier | (() => undefined | NftInfoKeySpecifier),
		fields?: NftInfoFieldPolicy,
	},
	NftOwnerInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NftOwnerInfoKeySpecifier | (() => undefined | NftOwnerInfoKeySpecifier),
		fields?: NftOwnerInfoFieldPolicy,
	},
	PercentRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PercentRateKeySpecifier | (() => undefined | PercentRateKeySpecifier),
		fields?: PercentRateFieldPolicy,
	},
	PrimitiveAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrimitiveAdoKeySpecifier | (() => undefined | PrimitiveAdoKeySpecifier),
		fields?: PrimitiveAdoFieldPolicy,
	},
	PrimitiveResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrimitiveResponseKeySpecifier | (() => undefined | PrimitiveResponseKeySpecifier),
		fields?: PrimitiveResponseFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Rate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateKeySpecifier | (() => undefined | RateKeySpecifier),
		fields?: RateFieldPolicy,
	},
	RateInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateInfoKeySpecifier | (() => undefined | RateInfoKeySpecifier),
		fields?: RateInfoFieldPolicy,
	},
	RateLimitingWithdrawalsAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RateLimitingWithdrawalsAdoKeySpecifier | (() => undefined | RateLimitingWithdrawalsAdoKeySpecifier),
		fields?: RateLimitingWithdrawalsAdoFieldPolicy,
	},
	RatesAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatesAdoKeySpecifier | (() => undefined | RatesAdoKeySpecifier),
		fields?: RatesAdoFieldPolicy,
	},
	SaleIds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleIdsKeySpecifier | (() => undefined | SaleIdsKeySpecifier),
		fields?: SaleIdsFieldPolicy,
	},
	SaleInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleInfoKeySpecifier | (() => undefined | SaleInfoKeySpecifier),
		fields?: SaleInfoFieldPolicy,
	},
	SaleResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleResponseKeySpecifier | (() => undefined | SaleResponseKeySpecifier),
		fields?: SaleResponseFieldPolicy,
	},
	SaleStateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleStateResponseKeySpecifier | (() => undefined | SaleStateResponseKeySpecifier),
		fields?: SaleStateResponseFieldPolicy,
	},
	Splitter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SplitterKeySpecifier | (() => undefined | SplitterKeySpecifier),
		fields?: SplitterFieldPolicy,
	},
	SplitterAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SplitterAdoKeySpecifier | (() => undefined | SplitterAdoKeySpecifier),
		fields?: SplitterAdoFieldPolicy,
	},
	StakerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StakerResponseKeySpecifier | (() => undefined | StakerResponseKeySpecifier),
		fields?: StakerResponseFieldPolicy,
	},
	StateStructure?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StateStructureKeySpecifier | (() => undefined | StateStructureKeySpecifier),
		fields?: StateStructureFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	SummaryFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SummaryFieldsKeySpecifier | (() => undefined | SummaryFieldsKeySpecifier),
		fields?: SummaryFieldsFieldPolicy,
	},
	TimelockAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimelockAdoKeySpecifier | (() => undefined | TimelockAdoKeySpecifier),
		fields?: TimelockAdoFieldPolicy,
	},
	TokenExtension?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenExtensionKeySpecifier | (() => undefined | TokenExtensionKeySpecifier),
		fields?: TokenExtensionFieldPolicy,
	},
	TokenInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenInfoKeySpecifier | (() => undefined | TokenInfoKeySpecifier),
		fields?: TokenInfoFieldPolicy,
	},
	TransferAgreement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferAgreementKeySpecifier | (() => undefined | TransferAgreementKeySpecifier),
		fields?: TransferAgreementFieldPolicy,
	},
	TxEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TxEventKeySpecifier | (() => undefined | TxEventKeySpecifier),
		fields?: TxEventFieldPolicy,
	},
	TxEventAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TxEventAttributeKeySpecifier | (() => undefined | TxEventAttributeKeySpecifier),
		fields?: TxEventAttributeFieldPolicy,
	},
	TxInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TxInfoKeySpecifier | (() => undefined | TxInfoKeySpecifier),
		fields?: TxInfoFieldPolicy,
	},
	TxLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TxLogKeySpecifier | (() => undefined | TxLogKeySpecifier),
		fields?: TxLogFieldPolicy,
	},
	TxSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TxSearchResultKeySpecifier | (() => undefined | TxSearchResultKeySpecifier),
		fields?: TxSearchResultFieldPolicy,
	},
	UserWeightResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserWeightResponseKeySpecifier | (() => undefined | UserWeightResponseKeySpecifier),
		fields?: UserWeightResponseFieldPolicy,
	},
	VaultAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VaultAdoKeySpecifier | (() => undefined | VaultAdoKeySpecifier),
		fields?: VaultAdoFieldPolicy,
	},
	VestingAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VestingAdoKeySpecifier | (() => undefined | VestingAdoKeySpecifier),
		fields?: VestingAdoFieldPolicy,
	},
	VestingBatchInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VestingBatchInfoKeySpecifier | (() => undefined | VestingBatchInfoKeySpecifier),
		fields?: VestingBatchInfoFieldPolicy,
	},
	VestingConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VestingConfigKeySpecifier | (() => undefined | VestingConfigKeySpecifier),
		fields?: VestingConfigFieldPolicy,
	},
	WasmContract?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WasmContractKeySpecifier | (() => undefined | WasmContractKeySpecifier),
		fields?: WasmContractFieldPolicy,
	},
	WeightedDistributionSplitterAdo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeightedDistributionSplitterAdoKeySpecifier | (() => undefined | WeightedDistributionSplitterAdoKeySpecifier),
		fields?: WeightedDistributionSplitterAdoFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;