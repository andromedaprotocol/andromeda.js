import { CodegenConfig } from '@graphql-codegen/cli'

const commonConfig = {
  pureMagicComment: true,
  experimentalFragmentVariables: true,
  useTypeImports: true,
  namingConvention: {
    typeNames: 'change-case-all#pascalCase',
    enumValues: 'change-case-all#upperCase',
    transformUnderscore: true,
  },
  typesPrefix: 'I',
  avoidOptionals: {
    field: true,
    inputValue: false,
    object: false,
    defaultValue: false
  },
  onlyOperationTypes: true,
  maybeValue: 'T',
  inputMaybeValue: 'T | undefined',
  strictScalars: true,
  scalars: {
    JSON: '{ [key: string]: any }',
  },
}

const config: CodegenConfig = {
  schema: 'https://gql.testnet.andromedaprotocol.io/graphql',
  documents: 'src/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/node.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        ...commonConfig
      },
    },
    'src/react.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withRefetchFn: true,
        ...commonConfig
      },
    },
    'src/apollo-helpers.ts': {
      plugins: ['typescript-apollo-client-helpers']
    }
  },
}

export default config