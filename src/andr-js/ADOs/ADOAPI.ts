import AndromedaClient from "..";
import PrimitiveAPI from "./PrimitiveAPI";
import FactoryAPI from "./FactoryAPI";
import RegistryAPI from "./RegistryAPI";

export default class ADOAPI {
  primitive: PrimitiveAPI;
  factory: FactoryAPI;
  registry: RegistryAPI;

  constructor(public client: AndromedaClient, public registryAddress: string) {
    this.primitive = new PrimitiveAPI(client);
    this.factory = new FactoryAPI(client);
    this.registry = new RegistryAPI(registryAddress, client);
  }

  async setRegistryAddress(address: string) {
    this.registry = new RegistryAPI(address, this.client);
    try {
      const factoryAddress = await this.registry.getAddress("factory");
      this.factory = new FactoryAPI(this.client, factoryAddress);
    } catch (error) {
      console.error(error);
      console.warn();
      console.warn("Provided registry does not have a Factory address stored");
    }
  }
}
