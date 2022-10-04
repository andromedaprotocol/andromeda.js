import type AndromedaClient from "../AndromedaClient";
import type { Module } from "../types";

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
  protected andromedaQuery(msg: Record<string, any>) {
    return { andr_query: msg };
  }

  /**
   * Returns an operators query message
   * @returns
   */
  operatorsQuery() {
    return this.andromedaQuery({ operators: [] });
  }

  /**
   * Gets all operators for the provided ADO
   * @param addr
   * @returns
   */
  async getOperators(addr: string = this.address) {
    const query = this.operatorsQuery();
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
  ownerQuery() {
    return this.andromedaQuery({ owner: {} });
  }

  /**
   * Gets the owner address for a provided ADO
   * @param addr
   * @returns
   */
  async getOwner(addr: string = this.address) {
    const query = this.ownerQuery();
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

  /**
   * Returns an ADO type query message
   * @returns
   */
  typeQuery() {
    return this.andromedaQuery({ type: {} });
  }

  /**
   * Gets the ADO type for the provided ADO
   * @param addr
   * @returns
   */
  async getType(addr: string = this.address) {
    const query = this.typeQuery();
    const resp = await this.client.queryContract<{ type: string }>(addr, query);

    return resp.type;
  }

  /**
   * Returns a publisher query message
   * @returns
   */
  publisherQuery() {
    return this.andromedaQuery({ original_publisher: {} });
  }

  /**
   * Gets the original publisher of the given ADO
   * @param addr
   * @returns
   */
  async getPublisher(addr: string = this.address) {
    const query = this.publisherQuery();
    const resp = await this.client.queryContract<{
      original_publisher: string;
    }>(addr, query);

    return resp.original_publisher;
  }

  /**
   * Returns a block height creation query
   * @returns
   */
  createdHeightQuery() {
    return this.andromedaQuery({ block_height_upon_creation: {} });
  }

  /**
   * Gets the block height at which the given ADO was created
   * @param addr
   * @returns
   */
  async getCreatedHeight(addr: string = this.address) {
    const query = this.createdHeightQuery();
    const resp = await this.client.queryContract<{ block_height: number }>(
      addr,
      query
    );

    return resp.block_height;
  }

  /**
   * Returns a version query
   * @returns
   */
  versionQuery() {
    return this.andromedaQuery({ version: {} });
  }

  /**
   * Gets the version for a given ADO
   * @param addr
   * @returns
   */
  async getVersion(addr: string = this.address) {
    const query = this.versionQuery();
    const resp = await this.client.queryContract<{ version: string }>(
      addr,
      query
    );

    return resp.version;
  }

  /**
   * Returns a module query
   * @param id
   * @returns
   */
  moduleQuery(id: string | number) {
    return this.andromedaQuery({ module: { id } });
  }

  /**
   * Gets the modules for a given ADO
   * **Will error if the ADO does not implement modules**
   * @param id
   * @param addr
   * @returns
   */
  async getModule(id: string | number, addr: string = this.address) {
    const query = this.moduleQuery(id);
    const resp = await this.client.queryContract<Module>(addr, query);

    return resp;
  }

  /**
   * Returns a module IDs query
   * @returns
   */
  moduleIdsQuery() {
    return this.andromedaQuery({ module_ids: {} });
  }

  /**
   * Gets all module IDs for a given ADO.
   * **Will error if the ADO does not implement modules**
   * @param addr
   * @returns
   */
  async getModuleIds(addr: string = this.address) {
    const query = this.moduleIdsQuery();
    const resp = await this.client.queryContract<string[]>(addr, query);

    return resp;
  }

  /**
   * Gets all modules for a given ADO. Uses several queries so response may be slow.
   * **Will error if the ADO does not implement modules**
   * @param addr
   * @returns
   */
  async getModules(addr: string = this.address) {
    const ids = await this.getModuleIds(addr);
    const modulePromises = [];

    for (let i = 0; i < ids.length; i++) {
      modulePromises.push(this.getModule(ids[i], addr));
    }

    const modules = await Promise.all(modulePromises);

    return modules;
  }
}
