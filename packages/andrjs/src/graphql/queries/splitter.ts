import { querySdk } from "../client";


/**
 * Queries a splitter contract for its config
 * @param contractAddress
 * @returns
 */
export async function queryConfig(
  contractAddress: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_SPLITTER_CONFIG({
    'ADO_splitter_address': contractAddress
  })

  return resp.ADO.splitter.config;
}
