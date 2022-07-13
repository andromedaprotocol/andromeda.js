import AndromedaClient, { Fee } from "..";
import BaseADOAPI from "./BaseADOAPI";

export default class FactoryAPI extends BaseADOAPI {
  name = "factory";
  constructor(public client: AndromedaClient, public address?: string) {
    super(client);
    this.address = address;
  }

  updateCodeIdMsg(code_id_key: string, code_id: number) {
    return {
      update_code_id: {
        code_id,
        code_id_key,
      },
    };
  }

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

  getCodeIdQuery(name: string) {
    return {
      code_id: {
        key: name,
      },
    };
  }

  async getCodeId(name: string, address?: string) {
    if (!this.address && !address)
      throw new Error("No provided factory address to retrieve code ID");

    const msg = this.getCodeIdQuery(name);

    return this.client.queryContract<number>(this.address ?? address!, msg);
  }
}
