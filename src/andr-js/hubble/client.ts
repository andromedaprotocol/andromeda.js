import { request, RequestDocument } from "graphql-request";

let uri: string = "https://andr-graphql.herokuapp.com/graphql";

export async function query<Input, Output>(
  document: RequestDocument,
  variables: Input
) {
  return await request<Output>(uri, document, variables);
}

export function setGQLUri(newUri: string) {
  uri = newUri;
}
