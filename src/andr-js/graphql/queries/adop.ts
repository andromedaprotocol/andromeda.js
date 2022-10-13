import type { PackageDefinition } from "../../ADOP";
import { gql } from "graphql-request";
import { query } from "../client";

export interface QueryADOTypes {}
export interface QueryADOTypesResponse {
  ADOP: { adoTypes: string[] };
}

export const QUERY_ADO_TYPES = gql`
  query QUERY_ADO_TYPES {
    ADOP {
      adoTypes
    }
  }
`;

/**
 * Queries all valid ADO types
 * @returns
 */
export async function queryADOTypes(): Promise<string[]> {
  const resp = await query<QueryADOTypes, QueryADOTypesResponse>(
    QUERY_ADO_TYPES
  );

  return resp.ADOP.adoTypes;
}

export interface QueryADOPackageDefinition {
  adoType: string;
}
export interface QueryADOPackageDefinitionResponse {
  ADOP: { package: PackageDefinition };
}

export const QUERY_ADO_PACKAGE_DEFINITION = gql`
  query QUERY_ADO_PACKAGE_DEFINITION($adoType: AdoType!) {
    ADOP {
      package(adoType: $adoType) {
        name
        schemas {
          execute
          instantiate
          query
          receive {
            cw721
            cw20
          }
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

  return resp.ADOP.package;
}
