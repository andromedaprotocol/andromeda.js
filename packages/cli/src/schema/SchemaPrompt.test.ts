// import { Schema } from "jsonschema";
// import SchemaPrompt from "./SchemaPrompt";


// const SCHEMA_ADO_TYPE = 'cw721';

// describe("The Schema Prompt class...", () => {
//   let schema: Schema;
//   beforeAll(async () => {
//     schema = await fetchSchema(SCHEMA_URL);
//   });

//   it("should replace references correctly", async () => {
//     const prompter = new SchemaPrompt(schema, "test");
//     const toReplace = {
//       minter: {
//         description:
//           "The minter is the only one who can create new NFTs. This is designed for a base NFT that is controlled by an external program or contract. You will likely replace this with custom logic in custom NFTs",
//         allOf: [
//           {
//             $ref: "#/definitions/AndrAddress",
//           },
//         ],
//       },
//     };
//     const expected = {
//       minter: {
//         description:
//           "The minter is the only one who can create new NFTs. This is designed for a base NFT that is controlled by an external program or contract. You will likely replace this with custom logic in custom NFTs",
//         allOf: [
//           {
//             ...schema.definitions!["AndrAddress"],
//           },
//         ],
//       },
//     };
//     const parsed = await prompter.replaceRefs(toReplace!);

//     console.log(parsed);

//     expect(parsed).toEqual(expected);
//   });
// });
