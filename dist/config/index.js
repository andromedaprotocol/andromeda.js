"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convict_1 = __importDefault(require("convict"));
const config = (0, convict_1.default)({
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
exports.default = config;
