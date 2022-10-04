import { request, RequestDocument } from "graphql-request";

/**
 * The URI to send the GQL queries to
 */
let uri: string = "https://andr-graphql.herokuapp.com/graphql";

/**
 * Queries the GraphQL server
 * @param document The query document
 * @param variables The variables for the query
 * @returns
 */
export async function query<Input, Output>(
  document: RequestDocument,
  variables: Input
) {
  return await request<Output>(uri, document, variables);
}

/**
 * Sets the GQL Server URI
 * @param newUri The new GQL Server URI
 */
export function setGQLUri(newUri: string) {
  uri = newUri;
}
