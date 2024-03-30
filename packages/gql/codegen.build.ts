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
  documentsPrefix: 'D',
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
    JSON: 'any',
  }
}

const config: CodegenConfig = {
  schema: './schema/schema-ast.graphql',
  documents: 'schema/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    '__generated/node.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        ...commonConfig
      },
    },
    '__generated/react.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withRefetchFn: true,
        ...commonConfig
      },
    },
    '__generated/apollo-helpers.ts': {
      plugins: ['typescript-apollo-client-helpers']
    },
    '__generated/types.ts': {
      plugins: ['typescript'],
      config: {
        ...commonConfig,
        onlyOperationTypes: false,
      }
    }
  },
}

export default config