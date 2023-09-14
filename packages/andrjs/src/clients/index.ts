import ArchwayClient from "./ArchwayClient";
import ChainClient from "./ChainClient";
import CosmClient from "./CosmClient";
import InjectiveClient from "./InjectiveClient";
// import TerraClient from "./TerraClient";

export { default as CosmClient } from "./CosmClient";
export { default as ChainClient } from "./ChainClient";

export default function createClient(addressPrefix: string): ChainClient {
  switch (addressPrefix) {
    // case "terra":
    //   return new TerraClient();
    case "archway":
      return new ArchwayClient();
    case "inj":
      return new InjectiveClient();
    default:
      return new CosmClient();
  }
}
