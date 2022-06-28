import { Fee } from "..";
import ADO from "./ADO";

export default class Factory extends ADO {
  async updateCodeId(
    code_id_key: string,
    code_id: number,
    fee: Fee,
    memo?: string
  ) {
    this.preMessage();
    const msg = {
      update_code_id: {
        code_id,
        code_id_key,
      },
    };
    return this.client.execute(
      this.address,
      msg,
      fee,
      memo ?? `Update Code ID (${code_id_key}, ${code_id})`
    );
  }
}
