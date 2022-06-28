import AndromedaClient from "..";

export default class ADO {
  address: string;
  client: AndromedaClient;

  constructor(address: string, client: AndromedaClient) {
    this.address = address;
    this.client = client;
  }

  preMessage() {
    if (!this.address || this.address.length === 0)
      throw new Error("Invalid ADO Contract Address");
    if (!this.client) throw new Error("No Client provided for ADO to use");
  }
}
