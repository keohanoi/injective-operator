import {
  Address,
  ChainGrpcAuthApi,
  ChainGrpcTendermintApi,
  createTransaction,
  MsgExecuteContractCompat,
  MsgPrivilegedExecuteContract,
  PrivateKey,
  TxGrpcApi
} from "@injectivelabs/sdk-ts";
import { StdFee } from "@cosmjs/amino";
import { getNetworkEndpoints, Network, NetworkEndpoints } from "./config/endpoints";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin } from "./msgs/msgs";

export class InjectiveOperator {
  private privateKey: PrivateKey;
  private endpoint: NetworkEndpoints;
  private tenderminApi: ChainGrpcTendermintApi;
  private authApi: ChainGrpcAuthApi;
  private api: TxGrpcApi;
  primaryAccount: Address;

  constructor(privateKey: string, endpoint: Network) {
    this.privateKey = PrivateKey.fromHex(privateKey);
    this.endpoint = getNetworkEndpoints(endpoint);
    this.tenderminApi = new ChainGrpcTendermintApi(this.endpoint.grpc);
    this.authApi = new ChainGrpcAuthApi(this.endpoint.grpc);
    this.api = new TxGrpcApi(this.endpoint.grpc);
    this.primaryAccount = this.privateKey.toAddress();
  }

  async storeCode(msg: MsgStoreCode, fee: StdFee) {
    const [latestBlock, accountDetail] = await Promise.all([
      this.tenderminApi.fetchLatestBlock(),
      this.authApi.fetchAccount(this.primaryAccount.address)
    ]);

    const { signBytes, txRaw } = await createTransaction({
      chainId: latestBlock?.header?.chainId ?? "",
      message: msg,
      pubKey: accountDetail.baseAccount.pubKey?.key ?? "",
      sequence: accountDetail.baseAccount.sequence,
      accountNumber: accountDetail.baseAccount.accountNumber,
      fee
    });

    const signature = await this.privateKey.sign(Buffer.from(signBytes));
    txRaw.signatures = [signature];

    return this.api.broadcast(txRaw);
  }

  async instantiate(msg: MsgInstantiateContract, fee: StdFee) {
    const [latestBlock, accountDetail] = await Promise.all([
      this.tenderminApi.fetchLatestBlock(),
      this.authApi.fetchAccount(this.primaryAccount.address)
    ]);

    const { signBytes, txRaw } = await createTransaction({
      chainId: latestBlock?.header?.chainId ?? "",
      message: msg,
      pubKey: accountDetail.baseAccount.pubKey?.key ?? "",
      sequence: accountDetail.baseAccount.sequence,
      accountNumber: accountDetail.baseAccount.accountNumber,
      fee
    });

    const signature = await this.privateKey.sign(Buffer.from(signBytes));
    txRaw.signatures = [signature];

    return this.api.broadcast(txRaw);
  }

  async execute(msg: MsgExecuteContract | MsgMigrateContract | MsgUpdateAdmin | MsgExecuteContractCompat | MsgPrivilegedExecuteContract, fee: StdFee) {
    const [latestBlock, accountDetail] = await Promise.all([
      this.tenderminApi.fetchLatestBlock(),
      this.authApi.fetchAccount(this.primaryAccount.address)
    ]);

    const { signBytes, txRaw } = await createTransaction({
      chainId: latestBlock?.header?.chainId ?? "",
      message: msg,
      pubKey: accountDetail.baseAccount.pubKey?.key ?? "",
      sequence: accountDetail.baseAccount.sequence,
      accountNumber: accountDetail.baseAccount.accountNumber,
      fee
    });

    const signature = await this.privateKey.sign(Buffer.from(signBytes));
    txRaw.signatures = [signature];

    return this.api.broadcast(txRaw);
  }

  async query(contractAddress: string, msg: any) {
    const client = await CosmWasmClient.connect(this.endpoint.rpc ?? "");
    return client.queryContractSmart(contractAddress, msg);
  }
}

export * from "./config/endpoints"
export * from "./msgs/msgs"