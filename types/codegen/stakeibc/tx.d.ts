import { ICAAccountType } from "./ica_account";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgLiquidStake {
    creator: string;
    amount: Long;
    /** TODO(TEST-86): Update Denom -> HostDenom */
    host_denom: string;
}
export interface MsgLiquidStakeResponse {
}
export interface MsgClearBalance {
    creator: string;
    chain_id: string;
    amount: Long;
    channel: string;
}
export interface MsgClearBalanceResponse {
}
export interface MsgRedeemStake {
    creator: string;
    amount: Long;
    hostZone: string;
    receiver: string;
}
export interface MsgRedeemStakeResponse {
}
/** next: 13 */
export interface MsgRegisterHostZone {
    connection_id: string;
    bech32prefix: string;
    host_denom: string;
    ibc_denom: string;
    creator: string;
    transfer_channel_id: string;
    unbonding_frequency: Long;
}
/** TODO(TEST-53): Remove this pre-launch (no need for clients to create / interact with ICAs) */
export interface MsgRegisterHostZoneResponse {
}
export interface MsgClaimUndelegatedTokens {
    creator: string;
    /** UserUnbondingRecords are keyed on {chain_id}.{epoch}.{sender} */
    hostZoneId: string;
    epoch: Long;
    sender: string;
}
export interface MsgClaimUndelegatedTokensResponse {
}
export interface MsgRebalanceValidators {
    creator: string;
    hostZone: string;
    numRebalance: Long;
}
export interface MsgRebalanceValidatorsResponse {
}
export interface MsgAddValidator {
    creator: string;
    hostZone: string;
    name: string;
    address: string;
    commission: Long;
    weight: Long;
}
export interface MsgAddValidatorResponse {
}
export interface MsgChangeValidatorWeight {
    creator: string;
    hostZone: string;
    valAddr: string;
    weight: Long;
}
export interface MsgChangeValidatorWeightResponse {
}
export interface MsgDeleteValidator {
    creator: string;
    hostZone: string;
    valAddr: string;
}
export interface MsgDeleteValidatorResponse {
}
export interface MsgRestoreInterchainAccount {
    creator: string;
    chainId: string;
    accountType: ICAAccountType;
}
export interface MsgRestoreInterchainAccountResponse {
}
export interface MsgUpdateValidatorSharesExchRate {
    creator: string;
    chainId: string;
    valoper: string;
}
export interface MsgUpdateValidatorSharesExchRateResponse {
}
export declare const MsgLiquidStake: {
    encode(message: MsgLiquidStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStake;
    fromJSON(object: any): MsgLiquidStake;
    toJSON(message: MsgLiquidStake): unknown;
    fromPartial(object: DeepPartial<MsgLiquidStake>): MsgLiquidStake;
};
export declare const MsgLiquidStakeResponse: {
    encode(_: MsgLiquidStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidStakeResponse;
    fromJSON(_: any): MsgLiquidStakeResponse;
    toJSON(_: MsgLiquidStakeResponse): unknown;
    fromPartial(_: DeepPartial<MsgLiquidStakeResponse>): MsgLiquidStakeResponse;
};
export declare const MsgClearBalance: {
    encode(message: MsgClearBalance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalance;
    fromJSON(object: any): MsgClearBalance;
    toJSON(message: MsgClearBalance): unknown;
    fromPartial(object: DeepPartial<MsgClearBalance>): MsgClearBalance;
};
export declare const MsgClearBalanceResponse: {
    encode(_: MsgClearBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearBalanceResponse;
    fromJSON(_: any): MsgClearBalanceResponse;
    toJSON(_: MsgClearBalanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgClearBalanceResponse>): MsgClearBalanceResponse;
};
export declare const MsgRedeemStake: {
    encode(message: MsgRedeemStake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStake;
    fromJSON(object: any): MsgRedeemStake;
    toJSON(message: MsgRedeemStake): unknown;
    fromPartial(object: DeepPartial<MsgRedeemStake>): MsgRedeemStake;
};
export declare const MsgRedeemStakeResponse: {
    encode(_: MsgRedeemStakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemStakeResponse;
    fromJSON(_: any): MsgRedeemStakeResponse;
    toJSON(_: MsgRedeemStakeResponse): unknown;
    fromPartial(_: DeepPartial<MsgRedeemStakeResponse>): MsgRedeemStakeResponse;
};
export declare const MsgRegisterHostZone: {
    encode(message: MsgRegisterHostZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZone;
    fromJSON(object: any): MsgRegisterHostZone;
    toJSON(message: MsgRegisterHostZone): unknown;
    fromPartial(object: DeepPartial<MsgRegisterHostZone>): MsgRegisterHostZone;
};
export declare const MsgRegisterHostZoneResponse: {
    encode(_: MsgRegisterHostZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostZoneResponse;
    fromJSON(_: any): MsgRegisterHostZoneResponse;
    toJSON(_: MsgRegisterHostZoneResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterHostZoneResponse>): MsgRegisterHostZoneResponse;
};
export declare const MsgClaimUndelegatedTokens: {
    encode(message: MsgClaimUndelegatedTokens, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokens;
    fromJSON(object: any): MsgClaimUndelegatedTokens;
    toJSON(message: MsgClaimUndelegatedTokens): unknown;
    fromPartial(object: DeepPartial<MsgClaimUndelegatedTokens>): MsgClaimUndelegatedTokens;
};
export declare const MsgClaimUndelegatedTokensResponse: {
    encode(_: MsgClaimUndelegatedTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUndelegatedTokensResponse;
    fromJSON(_: any): MsgClaimUndelegatedTokensResponse;
    toJSON(_: MsgClaimUndelegatedTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgClaimUndelegatedTokensResponse>): MsgClaimUndelegatedTokensResponse;
};
export declare const MsgRebalanceValidators: {
    encode(message: MsgRebalanceValidators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidators;
    fromJSON(object: any): MsgRebalanceValidators;
    toJSON(message: MsgRebalanceValidators): unknown;
    fromPartial(object: DeepPartial<MsgRebalanceValidators>): MsgRebalanceValidators;
};
export declare const MsgRebalanceValidatorsResponse: {
    encode(_: MsgRebalanceValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRebalanceValidatorsResponse;
    fromJSON(_: any): MsgRebalanceValidatorsResponse;
    toJSON(_: MsgRebalanceValidatorsResponse): unknown;
    fromPartial(_: DeepPartial<MsgRebalanceValidatorsResponse>): MsgRebalanceValidatorsResponse;
};
export declare const MsgAddValidator: {
    encode(message: MsgAddValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidator;
    fromJSON(object: any): MsgAddValidator;
    toJSON(message: MsgAddValidator): unknown;
    fromPartial(object: DeepPartial<MsgAddValidator>): MsgAddValidator;
};
export declare const MsgAddValidatorResponse: {
    encode(_: MsgAddValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddValidatorResponse;
    fromJSON(_: any): MsgAddValidatorResponse;
    toJSON(_: MsgAddValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddValidatorResponse>): MsgAddValidatorResponse;
};
export declare const MsgChangeValidatorWeight: {
    encode(message: MsgChangeValidatorWeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeight;
    fromJSON(object: any): MsgChangeValidatorWeight;
    toJSON(message: MsgChangeValidatorWeight): unknown;
    fromPartial(object: DeepPartial<MsgChangeValidatorWeight>): MsgChangeValidatorWeight;
};
export declare const MsgChangeValidatorWeightResponse: {
    encode(_: MsgChangeValidatorWeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeValidatorWeightResponse;
    fromJSON(_: any): MsgChangeValidatorWeightResponse;
    toJSON(_: MsgChangeValidatorWeightResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeValidatorWeightResponse>): MsgChangeValidatorWeightResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidator;
    fromJSON(object: any): MsgDeleteValidator;
    toJSON(message: MsgDeleteValidator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromJSON(_: any): MsgDeleteValidatorResponse;
    toJSON(_: MsgDeleteValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
export declare const MsgRestoreInterchainAccount: {
    encode(message: MsgRestoreInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccount;
    fromJSON(object: any): MsgRestoreInterchainAccount;
    toJSON(message: MsgRestoreInterchainAccount): unknown;
    fromPartial(object: DeepPartial<MsgRestoreInterchainAccount>): MsgRestoreInterchainAccount;
};
export declare const MsgRestoreInterchainAccountResponse: {
    encode(_: MsgRestoreInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountResponse;
    fromJSON(_: any): MsgRestoreInterchainAccountResponse;
    toJSON(_: MsgRestoreInterchainAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgRestoreInterchainAccountResponse>): MsgRestoreInterchainAccountResponse;
};
export declare const MsgUpdateValidatorSharesExchRate: {
    encode(message: MsgUpdateValidatorSharesExchRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRate;
    fromJSON(object: any): MsgUpdateValidatorSharesExchRate;
    toJSON(message: MsgUpdateValidatorSharesExchRate): unknown;
    fromPartial(object: DeepPartial<MsgUpdateValidatorSharesExchRate>): MsgUpdateValidatorSharesExchRate;
};
export declare const MsgUpdateValidatorSharesExchRateResponse: {
    encode(_: MsgUpdateValidatorSharesExchRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateValidatorSharesExchRateResponse;
    fromJSON(_: any): MsgUpdateValidatorSharesExchRateResponse;
    toJSON(_: MsgUpdateValidatorSharesExchRateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateValidatorSharesExchRateResponse>): MsgUpdateValidatorSharesExchRateResponse;
};
