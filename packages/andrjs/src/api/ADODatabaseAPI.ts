import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";
import { AdodbContractTsQueryMsgBuilder, AdodbContractTsExecuteMsgBuilder } from './codegen/AdodbContractTs.message-builder'
export default class ADODatabaseAPI extends ADOAPI {
  public queryMsgs = AdodbContractTsQueryMsgBuilder;
  public executeMsgs = AdodbContractTsExecuteMsgBuilder;

  constructor(client: AndromedaClient, public address: string = "") {
    super(client, address);
  }

  /**
   * Provides a message object for the ADO DB's `GetCodeId` query
   * @param name
   * @returns
   */
  getCodeIdQuery(name: string) {
    return this.queryMsgs.codeId({ key: name })
  }

  /**
   * Provides a message object for the ADO DB's `GetCodeId` query
   * @param name
   * @returns
   */
  getAdoTypeQuery(codeId: number) {
    return this.queryMsgs.adoType({ codeId })
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
  getAllADOQuery(startAfter = '', limit = 100) {
    return this.queryMsgs.allAdoTypes({ limit, startAfter })
  }

  /**
   * Gets the code ID for an ADO type from the ADO DB
   * @param name
   * @param address
   * @returns
   */
  async getAllADO(startAfter = '', limit = 100, address?: string) {
    if (!this.address && !address)
      throw new Error("No provided ADO DB address to retrieve code ID");

    const msg = this.getAllADOQuery(startAfter, limit);

    return this.client.queryContract<string[]>(address ?? this.address, msg);
  }
}
