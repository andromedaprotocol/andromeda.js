<p>&nbsp;</p>
<p align="center">
<img src="https://github.com/andromedaprotocol/andromeda.js/blob/development/image/andromeda-js-logo.png" width=800>
</p>

## About

The Andromeda.js repository contains three packages: 

- [andrjs](https://github.com/andromedaprotocol/andromeda.js/tree/development/packages/andrjs): JavaScript SDK for writing applications that interact with the Andromeda ecosystem.
- [cli](https://github.com/andromedaprotocol/andromeda.js/tree/development/packages/cli): Used to interact with the Andromeda ecosystem and any of the chains Andromeda is deployed on.
- [gql](https://github.com/andromedaprotocol/andromeda.js/tree/development/packages/gql): GQL tool used to auto generate gql functions and hooks from gql schema using gql-codegen

## PNPM

We use pnpm to manage packages. Most of the commands for pnpm are same as npm but make sure you use `pnpm` (not `npm`).

## How to Build
 
 1. Install dependencies by `pnpm i`.
 2. Each package has build function. To build all package run `npm run build` in root directory.
 3. To Build each package indepedently, make sure the dependencies are already build (they have `dist/` folder). Then go inside that package directory and run `npm run build`.

 ## Publish

 1. Commit your changes
 2. Run `pnpm changeset` in root directory
 3. Select the packages changed. All packages are linked using `fixed` config in `.changesets/config.json` so all will be bumped but make sure you specify correct packages
 4. Run `pnpm changeset version` and choose correct version.
 5. Add commit message and tag for the new version with proper messages.

Now packages are ready for publish. Use `pnpm publish` to publish them to npm. Good Luck!

