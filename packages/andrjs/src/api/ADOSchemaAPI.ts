import { Schema } from "jsonschema";
import AndromedaClient, { ContractSchema } from "index";
import axios from "axios";

export default class ADOSchemaAPI {
  constructor(public apiUrl: string, public client: AndromedaClient) { }

  /**
   * Gets the schema for the key in schemadb
   * @param adoVersion full adotype + version string
   * @param subSchema nested schema like execute or query schema
   * @returns
   */
  private async getSchemaFromVersion<T = ContractSchema>(
    adoVersion: string,
    subSchema = "default"
  ) {
    const [adoType, version] = adoVersion.split("@");
    const subPath = subSchema === "default" ? adoType : subSchema;
    const schema: T = await axios
      .get(`${this.apiUrl}/raw/${adoType}/${version}/${subPath}`)
      .then((res) => res.data);
    return {
      schema,
      adoVersion: adoVersion,
    };
  }

  /**
   * Gets the schema for the codeId
   * @param codeId
   * @param subSchema nested schema like execute or query schema
   * @returns schema json
   */
  async getSchemaFromCodeId<T = ContractSchema>(
    codeId: number,
    subSchema = "default",
    fallbackType?: string
  ) {
    let schema = await axios
      .get(
        `${this.apiUrl
        }/raw/code_id/${codeId}/${await this.client.chainClient?.queryClient?.getChainId()}/${subSchema}`
      )
      .then((res) => res.data as T)
      .catch(() => undefined);
    if (!schema) {
      schema = await this.client.os.adoDB
        ?.getAdoType(codeId)
        .then((adoVersion) =>
          this.getSchemaFromVersion<T>(adoVersion, subSchema)
        )
        .then((data) => data.schema)
        .catch(() => undefined);
    }
    // If we still don't have schema, try to get ado type from ado type query
    if (!schema && fallbackType) {
      schema = await this.getSchemaFromVersion<T>(fallbackType, subSchema)
        .then((data) => data.schema)
        .catch(() => undefined);
    }
    if (!schema) throw new Error("Schema not found!");
    return {
      schema: schema!,
      codeId,
    };
  }

  /**
   * Gets the sub schema, like receive schema, from the codeId. Similar to getSchemaFromCodeId
   * @param codeId
   * @returns schema json
   */
  async getSubSchemaFromCodeId(codeId: number, subKey: string) {
    return this.getSchemaFromCodeId<Schema>(codeId, subKey);
  }
}
