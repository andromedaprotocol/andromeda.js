import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://gql.testnet.andromedaprotocol.io/graphql',
  documents: 'src/**/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'src/node.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        experimentalFragmentVariables: true,
        useTypeImports: true,
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
          transformUnderscore: true,
        },
        typesPrefix: 'I',
        strictScalars: true,
        scalars: {
          JSON: '{ [key: string]: any }',
        },
        avoidOptionals: true,
        onlyOperationTypes: true,
        maybeValue: 'T'
      },
    },
    'src/react.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: false,
        withRefetchFn: true,
        pureMagicComment: true,
        experimentalFragmentVariables: true,
        useTypeImports: true,
        namingConvention: {
          typeNames: 'change-case-all#pascalCase',
          enumValues: 'change-case-all#upperCase',
          transformUnderscore: true,
        },
        typesPrefix: 'I',
        avoidOptionals: true,
        onlyOperationTypes: true,
        maybeValue: 'T'
      },
    },
    'src/apollo-helpers.ts': {
      plugins: ['typescript-apollo-client-helpers']
    },
    // 'src/': {
    //   preset: 'near-operation-file',
    //   presetConfig: { extension: '.ts', baseTypesPath: 'types.ts' },
    //   plugins: ['typescript-operations'],
    //   config: {
    //     withHooks: false,
    //     withRefetchFn: true,
    //     pureMagicComment: true,
    //     experimentalFragmentVariables: true,
    //     useTypeImports: true,
    //     namingConvention: {
    //       typeNames: 'change-case-all#pascalCase',
    //       enumValues: 'change-case-all#upperCase',
    //       transformUnderscore: true,
    //     },
    //     typesPrefix: 'I',
    //     rawRequest: true,
    //   },
    // }
  },
}

export default config