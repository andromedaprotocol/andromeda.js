import { fetchSchema } from "../../andr-js";
import { Schema } from "jsonschema";
import SchemaPrompt from "./SchemaPrompt";

const SCHEMA_URL =
  "https://raw.githubusercontent.com/andromedaprotocol/andromeda-core/8e13265c47de82d7a87ef4a0c42b4003c78353fe/contracts/non-fungible-tokens/andromeda-cw721/schema/instantiate_msg.json";

describe("The Schema Prompt class...", () => {
  let schema: Schema;
  beforeAll(async () => {
    schema = await fetchSchema(SCHEMA_URL);
  });

  it("should replace references correctly", async () => {
    const prompter = new SchemaPrompt(schema, "test");
    const toReplace = {
      minter: {
        description:
          "The minter is the only one who can create new NFTs. This is designed for a base NFT that is controlled by an external program or contract. You will likely replace this with custom logic in custom NFTs",
        allOf: [
          {
            $ref: "#/definitions/AndrAddress",
          },
        ],
      },
    };
    const expected = {
      minter: {
        description:
          "The minter is the only one who can create new NFTs. This is designed for a base NFT that is controlled by an external program or contract. You will likely replace this with custom logic in custom NFTs",
        allOf: [
          {
            ...schema.definitions!["AndrAddress"],
          },
        ],
      },
    };
    const parsed = await prompter.replaceRefs(toReplace!);

    console.log(parsed);

    expect(parsed).toEqual(expected);
  });
});
