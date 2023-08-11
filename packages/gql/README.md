# Andromeda GQL (Typescript)
GQL Functions and hooks generator which can be used in andrjs and cli

## Auto generate all queries
We have a powerful custom plugin inside `plugins` directory. Its a type of ast which visit each node and create a special query for it if it satisfy these requirements:
1. Its a node which needs arguments like isOperator node needs address as argument.
2. If its an object node which has sub fields like andr query, app config query, etc

These files are generated using `npm run codegen:master` script. This will always run befor codegen to generate all the operation node.

This is really powerfull and will generate almost all the queries you might need, even if its something specific like query only app config.

You can also add custom queries if needed. A simple use case for this will be to get app config and app components in a single query but you do not want addresses in the query. Adding new queries is also very simple and is described in next section.
## How to add new queries
Create .graphql files inside schema folder. These files will contain document node (query which you use in gql playground). After you have created all the queries, run `npm run codegen` and codegen will produce three files:
- apollo-helper.ts - This file contain field policy types which will be used to define key fielfs for the arguments
- node.ts - This file contains graphql-request functions. Use this for non-react applications like cli.
- react.ts - This file produces apollo-client hooks which can directly be used in your react projects
- types.d.ts - This file contain all the Base Types declared in graphql schema like IAndrSearchOptions, IAdoType, etc

Few guidelines will help keep the project streamlined:
1. Give a descriptive names to each query
2. Check if there is no duplicate query or query with same name is present
3. Try not to modify existing queries. For example, if there is a query name already present but you want to use the name for a new query, do not modify existing one. Try to use another name.
4. Do not bloat queries with unneccesary data. If you think there might be a future use case, create two queries, one with specific fields and other with extra fields which you think might be useful. This way you do not have to come back and add new query as all the fields will probably be added in you master query


## How to test integrations
As a monorepo, its easy to test local changes in the cli and andrjs. Make sure your changes do not break other packages in the repo.
For external projects like a react project, you can go inside gql package and run `npm run build && pnpm pack`. This will create a local package which you can then use in you react project without having to deploy package to registry.

We can probably reference this package using githib link. This is not tested yet and hence not recommended for now.