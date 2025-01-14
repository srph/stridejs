import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum Validator_ValidatorStatus {
    Active = 0,
    Inactive = 1,
    UNRECOGNIZED = -1
}
export declare enum Validator_ValidatorStatusSDKType {
    Active = 0,
    Inactive = 1,
    UNRECOGNIZED = -1
}
export declare function validator_ValidatorStatusFromJSON(object: any): Validator_ValidatorStatus;
export declare function validator_ValidatorStatusToJSON(object: Validator_ValidatorStatus): string;
export interface ValidatorExchangeRate {
    internalTokensToSharesRate: string;
    epochNumber: Long;
}
export interface ValidatorExchangeRateSDKType {
    internalTokensToSharesRate: string;
    epochNumber: Long;
}
export interface Validator {
    name: string;
    address: string;
    status: Validator_ValidatorStatus;
    commissionRate: Long;
    delegationAmt: Long;
    weight: Long;
    internalExchangeRate: ValidatorExchangeRate;
}
export interface ValidatorSDKType {
    name: string;
    address: string;
    status: Validator_ValidatorStatusSDKType;
    commissionRate: Long;
    delegationAmt: Long;
    weight: Long;
    internalExchangeRate: ValidatorExchangeRateSDKType;
}
export declare const ValidatorExchangeRate: {
    encode(message: ValidatorExchangeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorExchangeRate;
    fromPartial(object: DeepPartial<ValidatorExchangeRate>): ValidatorExchangeRate;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
