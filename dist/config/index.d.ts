import convict from "convict";
declare const config: convict.Config<{
    chain: {
        chainId: string;
        chainUrl: string;
        registryAddress: string;
        nullable: {
            valueOf: any;
        };
    };
}>;
export default config;
