export declare class Reload {
    history: string[];
    newInput(input: string): void;
    print(): void;
    pick(): Promise<{
        selection: any;
    }>;
}
declare const reload: Reload;
export default reload;
