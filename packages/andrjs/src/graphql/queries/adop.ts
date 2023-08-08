import type { PackageDefinition } from "../../ADOP";
import { querySdk } from "../client";


/**
 * Queries all valid ADO types
 * @returns
 */
export async function queryADOTypes(): Promise<string[]> {
  const resp = await querySdk.MASTER_ADOP()

  return resp.ADOP.adoTypes;
}

/**
 * Queries the package definition for a given ADO type
 * @param adoType
 * @returns
 */
export async function queryADOPackageDefinition(
  adoType: string
): Promise<PackageDefinition> {
  const resp = await querySdk.MASTER_ADOP_PACKAGE({
    ADOP_package_adoType: adoType
  })

  return resp.ADOP.package;
}
