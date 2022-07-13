export function encode(data: any): string {
  return Buffer.from(JSON.stringify(data)).toString("base64");
}
