import type AndromedaClient from "../AndromedaClient";
import type { Fee, Milliseconds, Module } from "../types";

export default class ADOAPI {

  constructor(
    protected client: AndromedaClient,
    protected address: string = ""
  ) { }

  /**
   * Execute Messages
   */

  /**
   * Returns an update owner message
   * @param newOwner
   * @returns
   */
  updateOwnerMsg(newOwner: string, expiration?: Milliseconds) {
    // TODO: Add expiration?
    return {
      ownership: {
        update_owner: {
          new_owner: newOwner,
          expiration
        }
      }
    };
  }

  /**
   * Updates the owner for the given ADO.
   * **Only accessible to the current owner**
   * @param newOwner
   * @param addr
   * @param fee
   * @param memo
   * @returns
   */
  async updateOwner(
    newOwner: string,
    addr: string = this.address,
    expiration?: Milliseconds,
    fee?: Fee,
    memo?: string
  ) {
    const msg = this.updateOwnerMsg(newOwner, expiration);
    const resp = await this.client.execute(addr, msg, fee, memo);

    return resp;
  }

  /**
   * Returns an update app contract message
   * @param appContract
   * @returns
   */
  updateAppContractMsg(appContract: string) {
    return {
      update_app_contract: { address: appContract },
    };
  }

  /**
   * Updates the app contract for a given ADO.
   *  **Only accessible to the current owner**
   * @param appContract
   * @param addr
   * @param fee
   * @param memo
   * @returns
   */
  async updateAppContract(
    appContract: string,
    addr: string = this.address,
    fee?: Fee,
    memo?: string
  ) {
    const msg = this.updateAppContractMsg(appContract);
    const resp = await this.client.execute(addr, msg, fee, memo);

    return resp;
  }

  /**
   * Returns a register module message
   * @param module
   * @returns
   */
  registerModuleMsg(module: Module) {
    return { register_module: { module } };
  }

  /**
   * Register a module with an ADO.
   * **Only accessible by the contract owner.**
   * **Will error if the ADO does not implement modules.**
   * @param module
   * @param addr
   * @param fee
   * @param memo
   * @returns
   */
  async registerModule(
    module: Module,
    addr: string = this.address,
    fee?: Fee,
    memo?: string
  ) {
    const msg = this.registerModuleMsg(module);
    const resp = await this.client.execute(addr, msg, fee, memo);

    return resp;
  }

  /**
   * Returns a deregister module message
   * @param id The module idx
   * @returns
   */
  deregisterModuleMsg(id: number) {
    return {
      deregister_module: { module_idx: `${id}` },
    };
  }

  /**
   * Deregisters a module with an ADO.
   * **Only accessible by the contract owner.**
   * **Will error if the ADO does not implement modules.**
   * @param id The module idx
   * @param addr
   * @param fee
   * @param memo
   * @returns
   */
  async deregisterModule(
    id: number,
    addr: string = this.address,
    fee?: Fee,
    memo?: string
  ) {
    const msg = this.deregisterModuleMsg(id);
    const resp = await this.client.execute(addr, msg, fee, memo);

    return resp;
  }

  /**
   * Returns am alter module message
   * @param id The module idx
   * @param module
   * @returns
   */
  alterModuleMsg(id: number, module: Module) {
    return {
      alter_module: { module, module_idx: `${id}` },
    };
  }

  /**
   * Alters a module within an ADO.
   * **Only accessible by the contract owner.**
   * **Will error if the ADO does not implement modules.**
   * @param id The module idx
   * @param module
   * @param addr
   * @param fee
   * @param memo
   * @returns
   */
  async alterModule(
    id: number,
    module: Module,
    addr: string = this.address,
    fee?: Fee,
    memo?: string
  ) {
    const msg = this.alterModuleMsg(id, module);
    const resp = await this.client.execute(addr, msg, fee, memo);

    return resp;
  }

  /**
   * Returns an owner query message
   * @returns
   */
  ownerQuery() {
    return { owner: {} };
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
  async isOwner(addr: string, contractAddr: string = this.address) {
    // const operators = await this.getOperators(contractAddr);
    const owner = await this.getOwner(contractAddr);
    return owner === addr;
  }

  /**
   * Returns an ADO type query message
   * @returns
   */
  typeQuery() {
    return { type: {} };
  }

  /**
   * Gets the ADO type for the provided ADO
   * @param addr
   * @returns
   */
  async getType(addr: string = this.address) {
    const query = this.typeQuery();
    const resp = await this.client.queryContract<{ ado_type: string }>(
      addr,
      query
    );

    return resp.ado_type;
  }

  /**
   * Returns a publisher query message
   * @returns
   */
  publisherQuery() {
    return { original_publisher: {} };
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
    return { block_height_upon_creation: {} };
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
    return { version: {} };
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
    return { module: { id } };
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

    return { ...resp, idx: parseInt(`${id}`) };
  }

  /**
   * Returns a module IDs query
   * @returns
   */
  moduleIdsQuery() {
    return { module_ids: {} };
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

    const modules = await Promise.all(ids.map(async (moduleId) => {
      return this.getModule(moduleId, addr)
    }));

    return modules;
  }
}
