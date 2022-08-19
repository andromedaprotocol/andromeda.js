<p>&nbsp;</p>
<p align="center">
<img src="https://github.com/andromedaprotocol/andromeda.js/blob/readme/image/andromeda-js-logo-light.png" width=800>
</p>

## About

Andr.js is a JavaScript SDK for writing applications that interact with the cosmos blockchains.

## Features

- **Written in TypeScript**
- Supports multi-chain connections
- Supports offline signing
- Includes the Andromeda CLI package

## Installation

Grab the latest version off [NPM](https://www.npmjs.com/package/@andromedaprotocol/andromeda.js):

```sh
npm i @andromedaprotocol/andromeda.js
```

## Usage

Please check the [docs](https://docs.andromedaprotocol.io/andromeda.js/) for notes on how to get up and running.

## Classes

|Class| Description | Docs|
|----------------------------------------------------------|-------------------------------------------------|------------------------------|
| AndromedaClient | A helper class to interact with the Andromeda ecosystem | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/andromedaclient-class) |
| Wallet | Generate and interact wallets for the connected chain | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/wallet-class) |
| WalletStore | Used to store wallets based on chain id and mnemonics |[Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/walletstore-class)|
| ADO | Used to create and interact with andromeda ADOs | [Gitbook](https://docs.andromedaprotocol.io/andromeda.js/classes/ado-class)|

# CLI

The andromeda CLI can be used to interact with the andromeda ecosytem on any of the chains andromeda is deployed on.

Run  `andr`  to start the CLI. 

Documentation on the CLI commands is coming soon.

## Supported Chains

These are the chains currently supperted by andromeda.js and the CLI.

- [Juno](https://docs.junonetwork.io/juno/readme)
- [Stargaze](https://www.stargaze.zone)
- Andromeda (Docs coming soon)

Many more chains will be added soon. 