import { querySdk } from "../client";

/**
 * Queries a rates contract for its stored rate info
 * @param contractAddress
 * @returns
 */
export async function queryPayments(
  contractAddress: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_RATES_PAYMENTS({
    'ADO_rates_address': contractAddress
  })

  return resp.ADO.rates.payments;
}
