import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLiquidStake, MsgRedeemStake, MsgRegisterHostZone, MsgClaimUndelegatedTokens, MsgRebalanceValidators, MsgAddValidator, MsgChangeValidatorWeight, MsgDeleteValidator, MsgRestoreInterchainAccount, MsgUpdateValidatorSharesExchRate, MsgClearBalance } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/Stridelabs.stride.stakeibc.MsgLiquidStake", MsgLiquidStake], ["/Stridelabs.stride.stakeibc.MsgRedeemStake", MsgRedeemStake], ["/Stridelabs.stride.stakeibc.MsgRegisterHostZone", MsgRegisterHostZone], ["/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens", MsgClaimUndelegatedTokens], ["/Stridelabs.stride.stakeibc.MsgRebalanceValidators", MsgRebalanceValidators], ["/Stridelabs.stride.stakeibc.MsgAddValidator", MsgAddValidator], ["/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight", MsgChangeValidatorWeight], ["/Stridelabs.stride.stakeibc.MsgDeleteValidator", MsgDeleteValidator], ["/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount", MsgRestoreInterchainAccount], ["/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate", MsgUpdateValidatorSharesExchRate], ["/Stridelabs.stride.stakeibc.MsgClearBalance", MsgClearBalance]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.encode(value).finish()
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.encode(value).finish()
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.encode(value).finish()
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.encode(value).finish()
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.encode(value).finish()
      };
    },

    addValidator(value: MsgAddValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgAddValidator",
        value: MsgAddValidator.encode(value).finish()
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight",
        value: MsgChangeValidatorWeight.encode(value).finish()
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.encode(value).finish()
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.encode(value).finish()
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.encode(value).finish()
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgLiquidStake",
        value
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRedeemStake",
        value
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRegisterHostZone",
        value
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens",
        value
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRebalanceValidators",
        value
      };
    },

    addValidator(value: MsgAddValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgAddValidator",
        value
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight",
        value
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgDeleteValidator",
        value
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount",
        value
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClearBalance",
        value
      };
    }

  },
  fromPartial: {
    liquidStake(value: MsgLiquidStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgLiquidStake",
        value: MsgLiquidStake.fromPartial(value)
      };
    },

    redeemStake(value: MsgRedeemStake) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRedeemStake",
        value: MsgRedeemStake.fromPartial(value)
      };
    },

    registerHostZone(value: MsgRegisterHostZone) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRegisterHostZone",
        value: MsgRegisterHostZone.fromPartial(value)
      };
    },

    claimUndelegatedTokens(value: MsgClaimUndelegatedTokens) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClaimUndelegatedTokens",
        value: MsgClaimUndelegatedTokens.fromPartial(value)
      };
    },

    rebalanceValidators(value: MsgRebalanceValidators) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRebalanceValidators",
        value: MsgRebalanceValidators.fromPartial(value)
      };
    },

    addValidator(value: MsgAddValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgAddValidator",
        value: MsgAddValidator.fromPartial(value)
      };
    },

    changeValidatorWeight(value: MsgChangeValidatorWeight) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgChangeValidatorWeight",
        value: MsgChangeValidatorWeight.fromPartial(value)
      };
    },

    deleteValidator(value: MsgDeleteValidator) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgDeleteValidator",
        value: MsgDeleteValidator.fromPartial(value)
      };
    },

    restoreInterchainAccount(value: MsgRestoreInterchainAccount) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgRestoreInterchainAccount",
        value: MsgRestoreInterchainAccount.fromPartial(value)
      };
    },

    updateValidatorSharesExchRate(value: MsgUpdateValidatorSharesExchRate) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgUpdateValidatorSharesExchRate",
        value: MsgUpdateValidatorSharesExchRate.fromPartial(value)
      };
    },

    clearBalance(value: MsgClearBalance) {
      return {
        typeUrl: "/Stridelabs.stride.stakeibc.MsgClearBalance",
        value: MsgClearBalance.fromPartial(value)
      };
    }

  }
};