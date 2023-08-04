# Andromeda GQL (Typescript)
GQL Functions and hooks generator which can be used in andrjs and cli

## How to add new queries
Create .graphql files inside src folder. These files will contain document node (query which you use in gql playground). After you have created all the queries, run `npm run codegen` and codegen will produce three files:
- apollo-helper.ts - This file contain field policy types which will be used to define key fielfs for the arguments
- node.ts - This file contains graphql-request functions. Use this for non-react applications like cli.
- react.ts - This file produces apollo-client hooks which can directly be used in your react projects

Few guidelines will help keep the project streamlined:
1. Give a descriptive names to each query
2. Check if there is no duplicate query or query with same name is present
3. Try not to modify existing queries. For example, if there is a query name already present but you want to use the name for a new query, do not modify existing one. Try to use another name.
4. Do not bload queries with unneccesary data. If you think there might be a future use case, create two queries, one with specific fields and other with extra fields which you think might be useful. This way you do not have to come back and add new query as all the fields will probably be added in you master query


## How to test integrations
As a monorepo, its easy to test local changes in the cli and andrjs. Make sure your changes do not break other packages in the repo.
For external projects like a react project, you can go inside gql package and run `npm run build && pnpm pack`. This will create a local package which you can then use in you react project without having to deploy package to registry.