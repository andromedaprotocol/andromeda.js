import { IAndrStrategyType } from "@andromedaprotocol/gql";
import { querySdk } from "../client";

export async function queryBalance(
  contractAddress: string,
  address: string
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_VAULT_BALANCE({
    'ADO_vault_address': contractAddress,
    'ADO_vault_vault_balance_address': address
  })

  return resp.ADO.vault.balance;
}

export async function queryStrategyAddress(
  contractAddress: string,
  strategy: IAndrStrategyType
) {
  const resp = await querySdk.CODEGEN_GENERATED_ADO_VAULT_STRATEGYADDRESS({
    'ADO_vault_address': contractAddress,
    'ADO_vault_vault_strategyAddress_strategy': strategy
  })

  return resp.ADO.vault.strategyAddress;
}
