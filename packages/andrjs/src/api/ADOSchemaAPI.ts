import { Schema } from "jsonschema";
import ADOAPI from "./ADOAPI";
import AndromedaClient, { ContractSchema } from "index";
import axios from "axios";

export default class ADODSchemaAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string) {
    super(client, address);
  }

  /**
   * Gets the schema for the key in schemadb
   * @param key
   * @param address
   * @returns
   */
  private async getSchemaFromVersion<T = ContractSchema>(adoVersion: string, subSchema = 'default') {
    const [adoType, version] = adoVersion.split('@');
    const subPath = subSchema === 'default' ? adoType : subSchema;
    const schema: T = await axios.get(`https://andromeda-schema-api.vercel.app/api/raw/${adoType}/${version}/${subPath}`).then(res => res.data);
    return {
      schema,
      adoVersion: adoVersion
    }
  }


  /**
   * Gets the schema for the codeId
   * @param key
   * @param address
   * @returns
   */
  async getSchemaFromCodeId<T = ContractSchema>(codeId: number, subSchema = 'default') {
    let schema = await axios.get(`https://andromeda-schema-api.vercel.app/api/raw/${codeId}/${await this.client.chainClient?.queryClient?.getChainId()}/${subSchema}`).then(res => res.data as T).catch(() => undefined);
    if (!schema) {
      schema = await this.client.os.adoDB?.getAdoType(codeId).then(adoVersion => this.getSchemaFromVersion<T>(adoVersion, subSchema)).then(data => data.schema).catch(() => undefined);
    }
    if (!schema) throw new Error("Schema not found!");
    return {
      schema: schema!,
      codeId,
    }
  }


  /**
* Gets the sub schema, like receive schema, from the codeId. Similar to getSchemaFromCodeId
* @param key
* @param address
* @returns
*/
  async getSubSchemaFromCodeId(codeId: number, subKey: string) {
    return this.getSchemaFromCodeId<Schema>(codeId, subKey);
  }

}
