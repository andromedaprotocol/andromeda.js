import { Schema } from "jsonschema";
import ADOAPI from "./ADOAPI";
import AndromedaClient, { ContractSchema } from "index";

export default class ADODSchemaAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string) {
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
   * Gets the schema for the key in schemadb
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
    const schema = JSON.parse(res.value.string) as T;
    return {
      schema, key
    }
  }


  /**
   * Gets the schema for the codeId
   * @param key
   * @param address
   * @returns
   */
  async getSchemaFromCodeId(codeId: number, address?: string) {
    return this.getSchemaFromKey(codeId.toString(), address);
  }

  /**
 * Gets the schema for the adoType. First fetch the codeId from adodb and then use the codeId to get the schema
 * @param key
 * @param address
 * @returns
 */
  async getSchemaFromAdoType(adoType: string, address?: string) {
    const codeId = await this.client.os.adoDB!.getCodeId(adoType);
    return this.getSchemaFromCodeId(codeId, address);
  }

  /**
  * Gets the sub schema, like receive schema, from the codeId. Similar to getSchemaFromCodeId
  * @param key
  * @param address
  * @returns
  */
  async getSubSchemaFromCodeId(codeId: number, subKey: string, address?: string) {
    const key = `${codeId}-${subKey}`
    return this.getSchemaFromKey<Schema>(key, address);
  }

  /**
  * Get the sub schema, like receive schema, from adoType. Similar to getSchemaFromAdoType
  * @param key
  * @param address
  * @returns
  */
  async getSubSchemaFromAdoType(adoType: string, subKey: string, address?: string) {
    const codeId = await this.client.os.adoDB!.getCodeId(adoType);
    return this.getSubSchemaFromCodeId(codeId, subKey, address);
  }
}
