"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convict_1 = __importDefault(require("convict"));
const config = (0, convict_1.default)({
    chain: {
        chainId: {
            default: "",
            doc: "The ID of the chain to use",
            format: String,
            env: "CHAIN_ID",
            nullable: false,
        },
        chainUrl: {
            default: "",
            doc: "The URL of the chain to use",
            format: "url",
            env: "CHAIN_URL",
            nullable: false,
        },
        registryAddress: {
            default: "",
            doc: "The contract address of the Andromeda Registry",
            format: "string",
            env: "REGISTRY_ADDRESS",
            nullable: true,
        },
        nullable: false,
    },
});
config.loadFile(`${__dirname}/default.json`);
exports.default = config;
