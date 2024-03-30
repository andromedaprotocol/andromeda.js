import { request, GraphQLClient, RequestDocument } from "graphql-request";
import { getSdk } from "@andromedaprotocol/gql/dist/__generated/node";
/**
 * The URI to send the GQL queries to
 */
let uri: string =
  process.env.GQL_URL ?? "https://gql.testnet.andromedaprotocol.io/graphql";

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
  return await request<Output>(uri, document, variables ?? {});
}

/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 * @deprecated
 */
export function setGQLUri(newUri: string) {
  uri = newUri;
}

/**
 * The URI to send the GQL queries to
*/
const URI: Readonly<string> = process.env.GQL_URL ?? "https://gql.testnet.andromedaprotocol.io/graphql";
const gqlClient = new GraphQLClient(URI);

export const querySdk: ReturnType<typeof getSdk> = getSdk(gqlClient);

/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 */
export function setGQLSdkUri(newUri: string) {
  gqlClient.setEndpoint(newUri);
}
