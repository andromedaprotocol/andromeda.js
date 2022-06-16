import convict from "convict";

const config = convict({
  chainid: {
    default: "",
    doc: "The ID of the chain to use",
    format: String,
    env: "CHAIN_ID",
    nullable: false,
  },
  chainurl: {
    default: "",
    doc: "The URL of the chain to use",
    format: "url",
    env: "CHAIN_URL",
    nullable: false,
  },
});

config.loadFile(`${__dirname}/default.json`);

export default config;
