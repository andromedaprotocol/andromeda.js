import { IAndrOrderBy } from "@andromedaprotocol/gql/dist/__generated/node";
import { querySdk } from "../client";
import { IAdoType } from "@andromedaprotocol/gql";

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
    search?: string,
    adoType?: IAdoType
) {
    const resp = await querySdk.ASSETS({
        walletAddress,
        limit,
        offset,
        orderBy,
        search,
        adoType
    })

    return resp.accounts.assets;
}
