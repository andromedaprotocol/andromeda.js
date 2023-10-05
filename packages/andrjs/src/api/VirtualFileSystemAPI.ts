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
   * @returns
   */
  registerUserMsg(username: string) {
    return {
      register_user: {
        username,
      },
    };
  }

  /**
   * Registers a username for the currently used signing address
   * @param username
   * @param msgParams
   * @returns
   */
  async registerUser(
    username: string,
    msgParams?: OptionalExecuteParams
  ) {
    this.preMessage();
    if (!username || username.length === 0)
      throw new Error("Cannot register an empty username");

    return this.client.execute(
      this.address,
      this.registerUserMsg(username),
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

  /**
   * Generates a 'GetUsername' query message for the VFS
   * @param address
   * @returns
   */
  getUsernameMsg(address: string) {
    return {
      get_username: {
        address,
      },
    };
  }

  /**
   * Resolves the username for the given address
   * @param address
   * @returns
   */
  async getUsername(address: string) {
    this.preMessage();
    return this.client.queryContract(this.address, this.getUsernameMsg(address));
  }

  /**
   * Generates a 'SubDir' query message for the VFS
   * @param path
   * @returns
   */
  subDirMsg(path: string) {
    return {
      sub_dir: {
        path,
      },
    };
  }

  /**
   * Resolves the sub dir for a given path
   * @param path
   * @returns
   */
  async subDir(path: string) {
    this.preMessage();
    if (!path || path.length === 0)
      throw new Error("Cannot resolve an empty path using the VFS");
    return this.client.queryContract(this.address, this.subDirMsg(path));
  }

  /**
   * Generates a 'paths' query message for the VFS
   * @param addr
   * @returns
   */
  pathsMsg(addr: string) {
    return {
      paths: {
        addr,
      },
    };
  }

  /**
   * Resolves the paths for a given address
   * @param addr
   * @returns
   */
  async paths(addr: string) {
    this.preMessage();
    if (
      !addr ||
      addr.length === 0 ||
      !validateAddress(addr)
    )
      throw new Error(
        "Cannot resolve an invalid address using the VFS"
      );
    return this.client.queryContract(this.address, this.pathsMsg(addr));
  }
}
