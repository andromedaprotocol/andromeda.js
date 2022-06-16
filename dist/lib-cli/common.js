"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTableConfig = exports.sleep = void 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
exports.sleep = sleep;
exports.logTableConfig = {
    chars: {
        top: "",
        "top-mid": "",
        "top-left": "",
        "top-right": "",
        bottom: "",
        "bottom-mid": "",
        "bottom-left": "",
        "bottom-right": "",
        left: "",
        "left-mid": "",
        mid: "",
        "mid-mid": "",
        right: "",
        "right-mid": "",
        middle: " ",
    },
    style: { "padding-left": 0, "padding-right": 0 },
};
