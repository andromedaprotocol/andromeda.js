export namespace V_1_0_0_WalletStore {
    export interface StoredData {
        wallets: StoredWalletData[];
        defaults: Record<string, string>;
    }

    export interface StoredWalletData {
        name: string;
        key: string;
        address: string;
        chainId: string;
    }
}