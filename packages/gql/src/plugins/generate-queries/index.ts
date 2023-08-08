import { DocumentNode, GraphQLField, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, Kind, OperationDefinitionNode, OperationTypeNode, print } from 'graphql';
import { PluginFunction, PluginValidateFn, Types } from '@graphql-codegen/plugin-helpers';
import { OperationsDocumentConfig } from './config';
import { buildOperationNodeForField } from '@graphql-tools/utils';

export const plugin: PluginFunction<OperationsDocumentConfig> = async (
    schema: GraphQLSchema,
    documents: Types.DocumentFile[],
    config: OperationsDocumentConfig
): Promise<Types.PluginOutput> => {
    const definitions: OperationDefinitionNode[] = [];
    const maxDepth = config.recurDepth ?? 2;

    type Selection = Record<string, any>;
    const fieldsToBuild: {
        queryName: string,
        selection: Selection
    }[] = [];
    // const operationDefinitionNode: OperationDefinitionNode = buildOperationNodeForField({
    //     schema,
    //     kind: OperationTypeNode.QUERY,
    //     field: rootName,
    //     depthLimit: config.depthLimit,
    //     circularReferenceDepth: config.circularReferenceDepth,
    //     selectedFields: getSelection({
    //         [field.name]:
    //     })
    // });
    // definitions.push(operationDefinitionNode);

    const buildForField = (field: GraphQLField<any, any, any>, getSelection: (nested: Selection) => Selection, fieldName: string) => {
        if (!field || !!field.deprecationReason) return;
        let nestedField = field.type;
        if (nestedField instanceof GraphQLNonNull) {
            nestedField = nestedField.ofType;
        }
        // If Scalar type, return true to include this field
        if (!(nestedField instanceof GraphQLObjectType)) {
            return field.args.length > 0 ? undefined : true;
        }

        // If its an object type then create a nestedKeys struct and return it
        let nestedKeys: Selection = {}
        for (const subField in nestedField.getFields()) {
            let subFieldBuild = buildForField(nestedField.getFields()[subField], (_nested) => {
                return getSelection({
                    [field.name]: _nested
                })
            }, `${fieldName}_${field.name}`)
            if (subFieldBuild)
                nestedKeys[subField] = subFieldBuild;
        }
        if (field.args.length > 0) {
            fieldsToBuild.push({
                selection: getSelection({
                    [field.name]: nestedKeys
                }),
                queryName: `${fieldName}_${field.name}`
            })
            return undefined;
        }
        return nestedKeys
    }
    for (const fieldName in schema.getQueryType()?.getFields()) {
        const field = schema.getQueryType()?.getFields()[fieldName];
        if (!field) continue;
        const res = buildForField(field, (_nested) => {
            return _nested
        }, 'MASTER')
        if (res) {
            fieldsToBuild.push({
                selection: {
                    [fieldName]: res
                },
                queryName: `MASTER_${fieldName}`
            })
        }
    }

    fieldsToBuild.forEach(build => {
        const fieldName = Object.keys(build.selection)[0];
        const definition = buildOperationNodeForField({
            'field': fieldName,
            'kind': OperationTypeNode.QUERY,
            'depthLimit': config.depthLimit,
            'schema': schema,
            'circularReferenceDepth': config.circularReferenceDepth,
            'selectedFields': build.selection[fieldName]
        })
        const newDef = {
            ...definition
        }
        newDef.name = {
            kind: Kind.NAME,
            value: build.queryName.toUpperCase()
        }
        definitions.push(newDef)
    })

    const document: DocumentNode = {
        kind: Kind.DOCUMENT,
        definitions,
    };
    const content = print(document);
    return {
        content,
    };
};

export const validate: PluginValidateFn<OperationsDocumentConfig> = async (
    _schema: GraphQLSchema,
    _documents: Types.DocumentFile[],
    config: OperationsDocumentConfig,
    outputFile: string
) => {
    if (!outputFile.endsWith('.graphql')) {
        throw new Error(`Plugin "operations-document" requires extension to be '.graphql' !`);
    }
};

export default { plugin, validate };