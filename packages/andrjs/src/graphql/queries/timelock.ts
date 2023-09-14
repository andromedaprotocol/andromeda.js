import { IAndrSearchOptions } from "@andromedaprotocol/gql/dist/__generated/node";
import { querySdk } from "../client";


/**
 * Queries a timelock contract for locked funds given an owner/recipient tuple
 * @param contractAddress
 * @param owner
 * @param recipient
 * @returns
 */
export async function queryTimelockLockedFunds(
  contractAddress: string,
  owner: string,
  recipient: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDS({
    'ADO_timelock_address': contractAddress,
    'ADO_timelock_timelock_getLockedFunds_owner': owner,
    'ADO_timelock_timelock_getLockedFunds_recipient': recipient
  })

  return resp.ADO.timelock.getLockedFunds;
}

/**
 * Queries a timelock contract for all locked funds for a given recipient
 * @param contractAddress
 * @param recipient
 * @param options
 * @returns
 */
export async function queryRecipientLockedFunds(
  contractAddress: string,
  recipient: string,
  options: IAndrSearchOptions
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_TIMELOCK_GETLOCKEDFUNDSFORRECIPIENT({
    'ADO_timelock_address': contractAddress,
    'ADO_timelock_timelock_getLockedFundsForRecipient_recipient': recipient,
    'ADO_timelock_timelock_getLockedFundsForRecipient_options': options
  })

  return resp.ADO.timelock.getLockedFundsForRecipient;
}
