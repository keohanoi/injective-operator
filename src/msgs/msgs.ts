import {
  MsgExecuteContract as _MsgExecuteContract,
  MsgInstantiateContract as _MsgInstantiateContract,
  MsgMigrateContract as _MsgMigrateContract,
  MsgUpdateAdmin as _MsgUpdateAdmin,
  MsgStoreCode as _MsgStoreCode,
  MsgPrivilegedExecuteContract as _MsgPrivilegedExecuteContract,
  MsgExecuteContractCompat as _MsgExecuteContractCompat, 
} from "@injectivelabs/sdk-ts";

export class MsgStoreCode extends _MsgStoreCode {}
export class MsgExecuteContract extends _MsgExecuteContract {}
export class MsgMigrateContract extends _MsgMigrateContract {}
export class MsgUpdateAdmin extends _MsgUpdateAdmin {}
export class MsgInstantiateContract extends _MsgInstantiateContract {}
// Path: chains/injective/src/index.ts
