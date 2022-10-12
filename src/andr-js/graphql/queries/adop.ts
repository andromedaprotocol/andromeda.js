import type { PackageDefinition } from "../../ADOP";
import { gql } from "graphql-request";
import { query } from "../client";

export interface QueryADOPackageDefinition {
  adoType: string;
}
export interface QueryADOPackageDefinitionResponse {
  ADOP: PackageDefinition;
}

export const QUERY_ADO_PACKAGE_DEFINITION = gql`
  query QUERY_ADO_PACKAGE_DEFINITION($adoType: AdoType!) {
    ADOP(adoType: $adoType) {
      name
      schemas {
        execute
        instantiate
        query
        receive {
          cw721
          # cw20
        }
      }
    }
  }
`;

/**
 * Queries the package definition for a given ADO type
 * @param adoType
 * @returns
 */
export async function queryADOPackageDefinition(
  adoType: string
): Promise<PackageDefinition> {
  const resp = await query<
    QueryADOPackageDefinition,
    QueryADOPackageDefinitionResponse
  >(QUERY_ADO_PACKAGE_DEFINITION, { adoType });

  return resp.ADOP;
}
