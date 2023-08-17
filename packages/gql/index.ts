import { StrictTypedTypePolicies } from './__generated/apollo-helpers'
export * from './__generated/apollo-helpers'

/**
 * Typed Field Policy will be used with apollo client to provide information about key fields.
 * Keys fields are important from cache perspective and default key field (id) is missing from our results.
 * This field policy object is easy to create because of codegen policy type generated and also provides a
 * reusable object which can easily be integrated in different projects.
 */
export const TypedFieldPolicy: StrictTypedTypePolicies = {
    BaseAdo: {
        keyFields: ['address'],
    },
    AppAdo: {
        keyFields: ['address'],
    },
    Ado: {
        keyFields: ['address'],
    },
    AdoQuery: {
        merge: true
    },
    TxSearchResult: {
        merge: true
    },
    TxInfo: {
        keyFields: ['hash']
    },
    AssetResult: {
        keyFields: ['address', 'name']
    },
    AccountsQuery: {
        fields: {
            assets: {
                // Don't cache separate results based on
                // any of this field's arguments.
                keyArgs: ['walletAddress'],

                // Concatenate the incoming list items with
                // the existing list items.
                merge(existing, incoming, { args }) {
                    const offset = args?.offset ?? 0;
                    // Slicing is necessary because the existing data is
                    // immutable, and frozen in development.
                    const merged = existing ? existing.slice(0) : [];
                    for (let i = 0; i < incoming.length; ++i) {
                        merged[offset + i] = incoming[i];
                    }
                    return merged;
                },
            }
        }
    }
}