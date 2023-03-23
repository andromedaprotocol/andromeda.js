import { OptionalExecuteParams, validateAddress } from "..";
import type AndromedaClient from "../AndromedaClient";
import ADOAPI from "./ADOAPI";

export default class VirtualFileSystemAPI extends ADOAPI {
  constructor(public client: AndromedaClient, public address: string) {
    super(client, address);
  }

  /**
   * Check to ensure the vfs has a valid address
   */
  private preMessage() {
    if (
      !this.address ||
      this.address.length === 0 ||
      !validateAddress(this.address)
    )
      throw new Error("VFS has no assigned address");
  }

  /**
   * Generates a 'ResolvePath' query message for the VFS
   * @param path
   * @returns
   */
  resolvePathMsg(path: string) {
    return {
      resolve_path: {
        path,
      },
    };
  }

  /**
   * Resolves the address for a given path
   * @param path
   * @returns
   */
  async resolvePath(path: string) {
    this.preMessage();
    if (!path || path.length === 0)
      throw new Error("Cannot resolve an empty path using the VFS");
    return this.client.queryContract(this.address, this.resolvePathMsg(path));
  }

  /**
   * Generates a 'RegisterUser' message for the VFS
   * @param username
   * @param address The address to assign the username to. Used when transferring ownership of a username.
   * @returns
   */
  registerUserMsg(username: string, address?: string) {
    return {
      register_user: {
        username,
        address,
      },
    };
  }

  /**
   * Registers a username for the currently used signing address
   * @param username
   * @param address The address to assign the username to. Used when transferring ownership of a username.
   * @param msgParams
   * @returns
   */
  async registerUser(
    username: string,
    address?: string,
    msgParams?: OptionalExecuteParams
  ) {
    this.preMessage();
    if (!username || username.length === 0)
      throw new Error("Cannot register an empty username");

    return this.client.execute(
      this.address,
      this.registerUserMsg(username, address),
      msgParams?.fee,
      msgParams?.memo,
      msgParams?.funds
    );
  }

  /**
   * Generates a 'AddPath' message for the VFS
   * @param name
   * @param address
   * @returns
   */
  addPathMsg(name: string, address: string) {
    return {
      add_path: {
        name,
        address,
      },
    };
  }

  /**
   * Registers a path for the currently used signing address
   * @param name
   * @param address
   * @param msgParams
   * @returns
   */
  async addPath(
    name: string,
    address: string,
    msgParams?: OptionalExecuteParams
  ) {
    this.preMessage();
    if (!name || name.length === 0)
      throw new Error("Cannot register an empty path");
    if (!address || address.length === 0 || !validateAddress(address))
      throw new Error(
        "Cannot register an invalid address for a path within the VFS"
      );

    return this.client.execute(
      this.address,
      this.addPathMsg(name, address),
      msgParams?.fee,
      msgParams?.memo,
      msgParams?.funds
    );
  }

  /**
   * Generates a 'AddParentPath' message for the VFS
   * @param name
   * @param parent_address
   * @returns
   */
  addParentPathMsg(name: string, parent_address: string) {
    return {
      add_path: {
        name,
        parent_address,
      },
    };
  }

  /**
   * Registers a parent path for the currently used signing address
   * @param name
   * @param parent_address
   * @param msgParams
   * @returns
   */
  async addParentPath(
    name: string,
    parent_address: string,
    msgParams?: OptionalExecuteParams
  ) {
    this.preMessage();
    if (!name || name.length === 0)
      throw new Error("Cannot register an empty path");
    if (
      !parent_address ||
      parent_address.length === 0 ||
      !validateAddress(parent_address)
    )
      throw new Error(
        "Cannot register an invalid address for a path within the VFS"
      );

    return this.client.execute(
      this.address,
      this.addParentPathMsg(name, parent_address),
      msgParams?.fee,
      msgParams?.memo,
      msgParams?.funds
    );
  }
}
