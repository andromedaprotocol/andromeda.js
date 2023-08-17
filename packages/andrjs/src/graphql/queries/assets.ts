import { IAndrOrderBy } from "@andromedaprotocol/gql/__generated/node";
import { querySdk } from "../client";

/**
 * Queries all assets owned by a wallet address
 * @param walletAddress
 * @param limit
 * @param offset
 * @returns
 */
export async function queryAssets(
    walletAddress: string,
    limit: number,
    offset: number,
    orderBy?: IAndrOrderBy,
    search?: string
) {
    const resp = await querySdk.ASSETS({
        walletAddress,
        limit,
        offset,
        orderBy,
        search
    })

    return resp.accounts.assets;
}
