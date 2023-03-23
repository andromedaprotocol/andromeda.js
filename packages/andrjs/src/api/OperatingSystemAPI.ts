import { validateAddress } from "..";
import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";
import ADODBAPI from "./ADODatabaseAPI";
import VirtualFileSystemAPI from "./VirtualFileSystemAPI";

export default class OperatingSystemAPI extends ADOAPI {
  public vfs?: VirtualFileSystemAPI;
  public adoDB?: ADODBAPI;

  constructor(client: AndromedaClient, public kernelAddress: string = "") {
    super(client, kernelAddress);
  }

  /**
   * Check to ensure the registry has a valid address
   */
  private preMessage() {
    if (
      !this.kernelAddress ||
      this.kernelAddress.length === 0 ||
      !validateAddress(this.kernelAddress)
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
    this.adoDB = new ADODBAPI(this.client, adoDBAddress);
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
      this.kernelAddress,
      this.getKeyAddressMessage(key)
    );
  }
}
