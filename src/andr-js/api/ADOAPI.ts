import AndromedaClient from "../AndromedaClient";

export default class ADOAPI {
  constructor(
    protected client: AndromedaClient,
    protected address: string = ""
  ) {}

  /**
   * Converts a message object to an Andromeda Query message
   * @param msg
   * @returns
   */
  andromedaQuery(msg: Record<string, any>) {
    return { andr_query: msg };
  }

  /**
   * Returns an operators query message
   * @returns
   */
  operatorsMsg() {
    return this.andromedaQuery({ operators: [] });
  }

  /**
   * Gets all operators for the provided ADO
   * @param addr
   * @returns
   */
  async getOperators(addr: string = this.address) {
    const query = this.operatorsMsg();
    const resp = await this.client.queryContract<{ operators: string[] }>(
      addr,
      query
    );

    return resp.operators;
  }

  /**
   * Returns an owner query message
   * @returns
   */
  ownerMsg() {
    return this.andromedaQuery({ owner: {} });
  }

  /**
   * Gets the owner address for a provided ADO
   * @param addr
   * @returns
   */
  async getOwner(addr: string = this.address) {
    const query = this.ownerMsg();
    const resp = await this.client.queryContract<{ owner: string }>(
      addr,
      query
    );
    return resp.owner;
  }

  /**
   * Validates if a given address is an owner or operator for the given ADO
   * @param addr
   * @param contractAddr
   * @returns
   */
  async isOperatorOrOwner(addr: string, contractAddr: string = this.address) {
    const operators = await this.getOperators(contractAddr);
    const owner = await this.getOwner(contractAddr);
    return operators.includes(addr) || owner === addr;
  }
}
