import type AndromedaClient from "../AndromedaClient";
import type { Fee } from "../types";
import type RegistryAPI from "./RegistryAPI";
import ADOAPI from "./ADOAPI";

export default class FactoryAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string = "") {
    super(client, address);
  }

  /**
   * Fetches the factory address from the on chain registry
   * @param registryAPI
   */
  async getAddressFromRegistry(registryAPI: RegistryAPI) {
    try {
      const factoryAddress = await registryAPI.getAddress("factory");
      this.address = factoryAddress;
    } catch (e) {
      console.warn("Could not fetch factory address");
    }
  }

  /**
   * Provides a message object for the factory's `UpdateCodeId` message
   * @param code_id_key
   * @param code_id
   * @returns
   */
  updateCodeIdMsg(code_id_key: string, code_id: number) {
    return {
      update_code_id: {
        code_id,
        code_id_key,
      },
    };
  }

  /**
   * Updates the Code ID for a given key within the factory
   * @param code_id_key
   * @param code_id
   * @param fee
   * @param address
   * @param memo
   * @returns
   */
  async updateCodeId(
    code_id_key: string,
    code_id: number,
    fee: Fee,
    address?: string,
    memo?: string
  ) {
    const msg = this.updateCodeIdMsg(code_id_key, code_id);
    if (!address && !this.address)
      throw new Error("Please provide a valid factory address");

    return this.client.execute(
      address ?? this.address!,
      msg,
      fee,
      memo ?? `Update Code ID (${code_id_key}, ${code_id})`
    );
  }

  /**
   * Provides a message object for the factory's `GetCodeId` query
   * @param name
   * @returns
   */
  getCodeIdQuery(name: string) {
    return {
      code_id: {
        key: name,
      },
    };
  }

  /**
   * Gets the code ID for an ADO type from the factory
   * @param name
   * @param address
   * @returns
   */
  async getCodeId(name: string, address?: string) {
    if (!this.address && !address)
      throw new Error("No provided factory address to retrieve code ID");

    const msg = this.getCodeIdQuery(name);

    return this.client.queryContract<number>(this.address ?? address!, msg);
  }
}
