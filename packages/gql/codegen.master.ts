import { CodegenConfig } from '@graphql-codegen/cli'


const config: CodegenConfig = {
  schema: 'https://api.andromedaprotocol.io/graphql/mainnet',
  // schema: 'http://localhost:8085/graphql',
  documents: 'schema/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'schema/master-schema.graphql': {
      plugins: ['./plugins/dist/index.js']
    },
    'schema/schema-ast.graphql': {
      plugins: ['schema-ast']
    }
  },
}

export default config