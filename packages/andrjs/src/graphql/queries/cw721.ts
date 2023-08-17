import { IAndrSearchOptions } from "@andromedaprotocol/gql/__generated/node";
import { querySdk } from "../client";

/**
 * Queries a CW721 contract for all info for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryAllNFTInfo(
  contractAddress: string,
  tokenId: string,
  includeExpired: boolean = false
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_ALLNFTINFO({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_allNftInfo_tokenId': tokenId,
    'ADO_cw721_cw721_allNftInfo_includeExpired': includeExpired
  })

  return resp.ADO.cw721.allNftInfo;
}


/**
 * Queries a CW721 contract for all approved operators for a given token owner
 * @param contractAddress
 * @param owner
 * @param includeExpired
 * @param options
 * @returns
 */
export async function queryAllOperators(
  contractAddress: string,
  owner: string,
  includeExpired: boolean = false,
  options?: IAndrSearchOptions
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_ALLOPERATORS({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_allOperators_owner': owner,
    'ADO_cw721_cw721_allOperators_includeExpired': includeExpired,
    'ADO_cw721_cw721_allOperators_options': options
  })

  return resp.ADO.cw721.allOperators;
}

/**
 * Queries a CW721 contract for all tokens
 * @param contractAddress
 * @param options
 * @returns
 */
export async function queryAllTokens(
  contractAddress: string,
  options?: IAndrSearchOptions
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_ALLTOKENS({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_allTokens_options': options
  })

  return resp.ADO.cw721.allTokens;
}

/**
 * Queries a CW721 contract for whether a given address is an assigned operator for a given token
 * @param contractAddress
 * @param spender
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryApproval(
  contractAddress: string,
  spender: string,
  tokenId: string,
  includeExpired: boolean = false
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_APPROVAL({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_approval_spender': spender,
    'ADO_cw721_cw721_approval_tokenId': tokenId,
    'ADO_cw721_cw721_approval_includeExpired': includeExpired
  })

  return resp.ADO.cw721.approval;
}

/**
 * Queries a CW721 contract for all approvals for a given token ID
 * @param contractAddress
 * @param tokenId
 * @param includeExpired
 * @returns
 */
export async function queryApprovals(
  contractAddress: string,
  tokenId: string,
  includeExpired: boolean = false
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_APPROVALS({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_approvals_tokenId': tokenId,
    'ADO_cw721_cw721_approvals_includeExpired': includeExpired
  })

  return resp.ADO.cw721.approvals;
}

/**
 * Queries a CW721 contract for its contract info
 * @param contractAddress
 * @returns
 */
export async function queryContractInfo(
  contractAddress: string
) {
  const resp = await querySdk.CW721_INFO({
    contractAddress
  })

  return resp.ADO.cw721.contractInfo;
}

/**
 * Queries a CW721 contract whether a given token ID is archived
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryIsArchived(
  contractAddress: string,
  tokenId: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_ISARCHIVED({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_isArchived_tokenId': tokenId
  })
  return resp.ADO.cw721.isArchived;
}


/**
 * Queries a CW721 contract for a given token IDs NFT info
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryNFTInfo(
  contractAddress: string,
  tokenId: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_NFTINFO({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_nftInfo_tokenId': tokenId
  })

  return resp.ADO.cw721.nftInfo;
}


/**
 * Queries a CW721 contract for the owner of a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryOwnerOf(
  contractAddress: string,
  tokenId: string,
  includeExpired = false
): Promise<string> {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_OWNEROF({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_ownerOf_tokenId': tokenId,
    'ADO_cw721_cw721_ownerOf_includeExpired': includeExpired
  })

  return resp.ADO.cw721.ownerOf.owner;
}


/**
 * Queries a CW721 contract for all tokens owned by a given address
 * @param contractAddress
 * @param owner
 * @param options
 * @returns
 */
export async function queryTokens(
  contractAddress: string,
  owner: string,
  options?: IAndrSearchOptions
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_TOKENS({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_tokens_owner': owner,
    'ADO_cw721_cw721_tokens_options': options
  })

  return resp.ADO.cw721.tokens;
}

/**
 * Queries a CW721 contract for the transfer agreement for a given token ID
 * @param contractAddress
 * @param tokenId
 * @returns
 */
export async function queryTransferAgreement(
  contractAddress: string,
  tokenId: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_CW721_TRANSFERAGREEMENT({
    'ADO_cw721_address': contractAddress,
    'ADO_cw721_cw721_transferAgreement_tokenId': tokenId
  })

  return resp.ADO.cw721.transferAgreement;
}
