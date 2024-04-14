import { GraphQLClient, RequestDocument } from "graphql-request";
import { getSdk } from "@andromedaprotocol/gql/dist/__generated/node";


export const GQL_URLS = {
  TESTNET: 'https://api.andromedaprotocol.io/graphql/testnet',
  MAINNET: 'https://gql.andromedaprotocol.io/graphql',
  DEVNET: 'https://api.andromedaprotocol.io/graphql/dev'
} as const;

/**
 * The URI to send the GQL queries to
 * NOTE - Update this URL for production deployments
 * PROD - gql.andromedaprotocol.io/graphql
 * TESTNET - api.andromedaprotocol.io/graphql/testnet
*/
let URI: Readonly<string> = GQL_URLS[process.env.GQL_URL as keyof typeof GQL_URLS] || process.env.GQL_URL || GQL_URLS.TESTNET;
const gqlClient = new GraphQLClient(URI);

/**
 * Queries the GraphQL server
 * @param document The query document
 * @param variables The variables for the query
 * @returns
 * @deprecated
 */
export async function query<Input, Output>(
  document: RequestDocument,
  variables?: Input
) {
  return await gqlClient.request<Output>(document, variables ?? {});
}

export const querySdk: ReturnType<typeof getSdk> = getSdk(gqlClient);

/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 */
export function setGQLSdkUri(newUri: string) {
  URI = newUri;
  gqlClient.setEndpoint(newUri);
}


/**
 * Gets the GQL Server URI
 */
export function getGQLSdkUri() {
  return Object.freeze(URI) as Readonly<string>;
}
