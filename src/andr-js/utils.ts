export function encode(data: any): string {
  return Buffer.from(JSON.stringify(data)).toString("base64");
}

export function getTxExplorerURL(hash: string, url: string) {
  if (!url.includes("${txHash}"))
    throw new Error("Provided URL does not include '${txHash}'");

  return url.replace("${txHash}", hash);
}
