import { validateAddress } from "..";
import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";
import ADODatabaseAPI from "./ADODatabaseAPI";
import ADODSchemaAPI from "./ADOSchemaAPI";
import VirtualFileSystemAPI from "./VirtualFileSystemAPI";

export default class OperatingSystemAPI extends ADOAPI {
  public vfs?: VirtualFileSystemAPI;
  public adoDB?: ADODatabaseAPI;
  // API for shared SCHEMA messages
  public schema?: ADODSchemaAPI;

  constructor(client: AndromedaClient, public address: string = "") {
    super(client, address);
  }

  /**
   * Check to ensure the registry has a valid address
   */
  private preMessage() {
    if (
      !this.address ||
      this.address.length === 0 ||
      !validateAddress(this.address)
    )
      throw new Error("Kernel has no assigned address");
  }

  /**
   * Assigns the kernel address before fetching any key addresses
   * @param address
   */
  async assignKernelAddress(address: string) {
    this.address = address;
    await this.fetchVFSAddress();
    await this.fetchADODBAddress();
    await this.fetchSchemaAddress();
  }

  /**
   * Fetches the current VFS address from the kernel
   */
  async fetchVFSAddress() {
    const vfsKey = "vfs";
    const vfsAddress = await this.fetchKeyAddress(vfsKey);

    this.vfs = new VirtualFileSystemAPI(this.client, vfsAddress);
  }

  /**
   * Fetches the current ADODB address from the kernel
   */
  async fetchADODBAddress() {
    const adoDBKey = "adodb";
    const adoDBAddress = await this.fetchKeyAddress(adoDBKey);
    this.adoDB = new ADODatabaseAPI(this.client, adoDBAddress);
  }

  /**
 * Fetches the current ADOP Schema address from the kernel
 */
  async fetchSchemaAddress() {
    // const key = "schema";
    // const address = await this.fetchKeyAddress(key);
    this.schema = new ADODSchemaAPI(this.client, "stars1fwe74pty6yg4jx8p53vd7w8v3km6sklv0w2pty50v7z4eucxykpsajseuh");
  }

  /**
   * Generates a 'KeyAddress' kernel query for a given key
   * @param key
   * @returns
   */
  getKeyAddressMessage(key: string) {
    return {
      key_address: {
        key,
      },
    };
  }

  /**
   * Fetches a key address for a given key from the currently assigned kernel
   * @param key
   * @returns
   */
  async fetchKeyAddress(key: string) {
    this.preMessage();
    if (!key || key.length === 0)
      throw new Error("Cannot fetch empty key address from kernel");

    return this.client.queryContract(
      this.address,
      this.getKeyAddressMessage(key)
    );
  }
}
