import { Schema } from "jsonschema";
import ADOAPI from "./ADOAPI";
import AndromedaClient, { ContractSchema } from "index";

export default class ADODSchemaAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string = "stars1fwe74pty6yg4jx8p53vd7w8v3km6sklv0w2pty50v7z4eucxykpsajseuh") {
    super(client, address);
  }

  /**
   * Provides a message object for the Primitive DB's `GetKeyValue` query
   * @param key
   * @returns
   */
  getValueQuery(key: string) {
    return {
      get_value: {
        key: key,
      },
    };
  }

  /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param key
   * @param address
   * @returns
   */
  async getSchemaFromKey<T = ContractSchema>(key: string, address?: string) {
    const msg = this.getValueQuery(key);
    const res = await this.client.queryContract<{
      key: string;
      value: {
        string: string;
      }
    }>(address ?? this.address, msg);
    return JSON.parse(res.value.string) as T;
  }


  /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param key
   * @param address
   * @returns
   */
  async getSchemaFromCodeId(codeId: number, address?: string) {
    return this.getSchemaFromKey(codeId.toString(), address);
  }

  /**
 * Gets the code ID for an ADO type from the ADO DB
 * @param key
 * @param address
 * @returns
 */
  async getSchemaFromAdoType(adoType: string, address?: string) {
    const codeId = await this.client.os.adoDB!.getCodeId(adoType);
    return this.getSchemaFromCodeId(codeId, address);
  }

  /**
  * Gets the code ID for an ADO type from the ADO DB
  * @param key
  * @param address
  * @returns
  */
  async getSubSchemaFromCodeId(codeId: number, subKey: string, address?: string) {
    const key = `${codeId}-${subKey}`
    return this.getSchemaFromKey<Schema>(key, address);
  }

  /**
  * Gets the code ID for an ADO type from the ADO DB
  * @param key
  * @param address
  * @returns
  */
  async getSubSchemaFromAdoType(adoType: string, subKey: string, address?: string) {
    const codeId = await this.client.os.adoDB!.getCodeId(adoType);
    return this.getSubSchemaFromCodeId(codeId, subKey, address);
  }
}
