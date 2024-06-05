# CLI

The andromeda CLI can be used to interact with the andromeda ecosystem on any of the chains Andromeda is deployed on.

Grab the latest version off [NPM](https://www.npmjs.com/package/@andromedaprotocol/cli):

```sh
sudo npm i -g @andromedaprotocol/cli
```

Run `andr` to start the CLI.

Please check the [docs](https://docs.andromedaprotocol.io/andromeda/andromeda-cli/introduction) for the list of available commands.

## Supported Chains

These are the chains currently supperted by andromeda.js and the CLI.

- [Andromeda](https://docs.andromedaprotocol.io/andromeda/platform-and-framework/introduction)
- [Stargaze](https://www.stargaze.zone)
- [Sei](https://docs.seinetwork.io/learn/about-sei)
- [Injective](https://docs.injective.network)
- [Juno](https://junonetwork.io)
- [Terra-2](https://docs.terra.money)

## Running CLI for Mainnet, Testnet, and Devnet

For Devnet -

```bash
GQL_URL='DEVNET' npm run dev
```

For Testnet -

```bash
GQL_URL='TESTNET' npm run dev
```

For Mainnet -

```bash
GQL_URL='MAINNET' npm run dev
```

For Custom URL -

```bash
GQL_URL='https://your_gql_url' npm run dev
```

You can also use gql commands to get and update gql url. run `gql url --help` to learn more about the commands.

## Terms and Conditions

[Terms and Conditions](/TERMS_AND_CONDITIONS.md)
