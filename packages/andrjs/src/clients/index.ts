import ChainClient from "./ChainClient";
import CosmClient from "./CosmClient";

export { default as CosmClient } from "./CosmClient";
export { default as ChainClient } from "./ChainClient";

export default function createClient(addressPrefix: string, options?: Partial<ChainClient['config']>): ChainClient {
  switch (addressPrefix) {
    case "inj":
      return new CosmClient({ ...options, storeCodeEvent: 'cosmwasm.wasm.v1.EventCodeStored', 'accountPubKeyTypeUrl': '/injective.crypto.v1beta1.ethsecp256k1.PubKey' });
    case "titan":
    case "uptick":
      return new CosmClient({ ...options, 'accountPubKeyTypeUrl': '/ethermint.crypto.v1.ethsecp256k1.PubKey' });
    default:
      return new CosmClient({ ...options });
  }
}
