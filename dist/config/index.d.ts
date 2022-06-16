import convict from "convict";
declare const config: convict.Config<{
    chainid: string;
    chainurl: string;
}>;
export default config;
