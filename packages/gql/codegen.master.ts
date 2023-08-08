import { CodegenConfig } from '@graphql-codegen/cli'


const config: CodegenConfig = {
  schema: 'https://gql.testnet.andromedaprotocol.io/graphql',
  documents: 'src/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/master-schema.graphql': {
      plugins: ['./dist/plugins/generate-queries/index.js']
    },
    'src/schema-ast.graphql': {
      plugins: ['schema-ast']
    },
  },
}

export default config