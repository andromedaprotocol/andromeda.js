<p>&nbsp;</p>
<p align="center">
<img src="https://github.com/andromedaprotocol/andromeda.js/blob/development/image/andromeda-js-logo.png" width=800>
</p>

## About
Andr.js is a JavaScript SDK for writing applications that interact with the Andromeda ecosystem.

## Features

- **Written in TypeScript**
- Supports multi-chain connections
- Supports offline signing
- Supports GraphQL queries
- Custom clients for each chain
- Wallet generation and management for each chain

## Installation

Grab the latest version off [NPM](https://www.npmjs.com/package/@andromedaprotocol/andromeda.js):

```sh
sudo npm i -g @andromedaprotocol/andromeda.js
```

## Usage

Please check the [docs](https://docs.andromedaprotocol.io/andromeda.js/) for notes on how to get set up and running.

## Classes

|Class| Description | Docs|
|----------------------------------------------------------|-------------------------------------------------|------------------------------|
| AndromedaClient | A helper class to interact with the Andromeda ecosystem | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/clients/andromedaclient-class) |
| TerraClient| A helper class to interact with the Terra chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/clients/terraclient) |
| InjectiveClient | A helper class to interact with the Injective chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/clients/injectiveclient) |
| CosmClient | A helper class to interact with the Cosmos hub chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/clients/cosmclient) |
| BaseChainClient | Generate and interact wallets for the connected chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/clients/basechainclient) |
| ADOAPI | API to interact with Andromeda ADOs | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/api-classes) |
| ADODBAPI | API for ADODB specific messages| [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/api-classes/adodbapi) |
| RegistryAPI | API for registry specific messages| [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/api-classes/registryapi) |
| Wallet | Generate a client wallet by mnemonic | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/wallets/wallet-class) |
| EtherWallet | Generate an etherium wallet to be used on the Injective chain|[Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/wallets/etherwallet)|
| TerraWallet | Generate a wallet to be used on the Terra chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/wallets/terrawallet)|

## GraphQL Queries

Queries that can be performed on Andromeda ADOs using GraphQL. Documentation on the different queries can be found [here](https://docs.andromedaprotocol.io/andromeda.js/queries/graphql-queries).

