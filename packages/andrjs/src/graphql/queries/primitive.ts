import { querySdk } from "../client";

/**
 * Queries details about a primitive given its contract address
 * @param contractAddress The contract address of the primitive
 * @returns
 */
export async function queryPrimitive(contractAddress: string) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_PRIMITIVE_ANDR({
    'ADO_primitive_address': contractAddress
  })
  return resp.ADO.primitive.andr.owner;
}

/**
 * Queries the value of a given key from a given primitie contract
 * @param contractAddress The contract address of the primitive
 * @param key The key to query
 * @returns
 */
export async function queryPrimitiveValue(
  contractAddress: string,
  key: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_PRIMITIVE_GETVALUE({
    'ADO_primitive_address': contractAddress,
    ADO_primitive_primitive_getValue_key: key
  })
  return resp.ADO.primitive.getValue;
}
