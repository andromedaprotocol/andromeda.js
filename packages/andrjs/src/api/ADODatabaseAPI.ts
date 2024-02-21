import type AndromedaClient from "../AndromedaClient";
import type { Fee } from "../types";
import ADOAPI from "./ADOAPI";

export default class ADODatabaseAPI extends ADOAPI {
  constructor(client: AndromedaClient, public address: string = "") {
    super(client, address);
  }

  /**
   * Provides a message object for the ADO DB's `UpdateCodeId` message
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
   * Updates the Code ID for a given key within the ADO DB
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
      throw new Error("Please provide a valid ADO DB address");

    return this.client.execute(
      address ?? this.address!,
      msg,
      fee,
      memo ?? `Update Code ID (${code_id_key}, ${code_id})`
    );
  }

  /**
   * Provides a message object for the ADO DB's `GetCodeId` query
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
   * Provides a message object for the ADO DB's `GetCodeId` query
   * @param name
   * @returns
   */
  getAdoTypeQuery(codeId: number) {
    return {
      ado_type: {
        code_id: codeId,
      },
    };
  }

  /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param name
   * @param address
   * @returns
   */
  async getCodeId(name: string, address?: string) {
    if (!this.address && !address)
      throw new Error("No provided ADO DB address to retrieve code ID");

    const msg = this.getCodeIdQuery(name);

    return this.client.queryContract<number>(address ?? this.address, msg);
  }

  /**
 * Gets the code ID for an ADO type from the ADO DB
 * @param name
 * @param address
 * @returns
 */
  async getAdoType(codeId: number, address?: string) {
    if (!this.address && !address)
      throw new Error("No provided ADO DB address to retrieve code ID");

    const msg = this.getAdoTypeQuery(codeId);

    return this.client.queryContract<string>(address ?? this.address, msg);
  }

  /**
   * Provides a message object for the ADO DB's `GetCodeId` query
   * @param name
   * @returns
   */
  getAllADOQuery() {
    return {
      all_ado_types: {},
    };
  }

  /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param name
   * @param address
   * @returns
   */
  async getAllADO(address?: string) {
    if (!this.address && !address)
      throw new Error("No provided ADO DB address to retrieve code ID");

    const msg = this.getAllADOQuery();

    return this.client.queryContract<string[]>(address ?? this.address, msg);
  }
}
