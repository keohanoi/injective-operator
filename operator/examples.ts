import dotenv from "dotenv";
import fs from "fs";

import { InjectiveOperator } from "./src/index";
import { Network } from "../config/endpoints";
import { MsgExecuteContract, MsgInstantiateContract, MsgStoreCode } from "@injectivelabs/sdk-ts";
import { InstantiateMsg } from "./../constants/types/Cw20Base.types";

dotenv.config({
  path: ".env"
});

const storeCode = async () => {
  const operator = new InjectiveOperator(process.env.INJ_PRIV ?? "", Network.TestnetSentry);
  const code = fs.readFileSync("./artifacts/cw20_base.wasm");
  const msg = MsgStoreCode.fromJSON({
    sender: operator.primaryAccount.address,
    wasmBytes: code
  });
  const txResponse = await operator.storeCode(msg, {
    gas: "5000000",
    amount: [
      {
        denom: "inj",
        amount: "800000000000000"
      }
    ]
  });

  console.log(" ---> txResponse: ", txResponse)
};

const instantiate = async () => {
  const operator = new InjectiveOperator(process.env.INJ_PRIV ?? "", Network.TestnetSentry);
  const codeId = 8557;


  const msg = MsgInstantiateContract.fromJSON({
    sender: operator.primaryAccount.address,
    admin: operator.primaryAccount.address,
    codeId,
    label: "cw20_base",
    msg: <InstantiateMsg>{
      name: "CW20 Base",
      symbol: "CWWW",
      initial_balances: [
        {
          address: operator.primaryAccount.address,
          amount: "10000000000000"
        }
      ],
      decimals: 18,
      mint: {
        minter: operator.primaryAccount.address,
        cap: "100000000000000000000000"
      }
    }
  })

  const txResponse = await operator.instantiate(msg, {
    gas: "5000000",
    amount: [
      {
        denom: "inj",
        amount: "800000000000000"
      }
    ]
  });

  console.log(" ---> txResponse: ", txResponse)
}

const execute = async () => {
  const operator = new InjectiveOperator(process.env.INJ_PRIV ?? "", Network.TestnetSentry);
  const contractAddress = "inj13aklpywegw4n2nlnew8xc97lla4f3sqs5s8fh4";

  const msg = MsgExecuteContract.fromJSON({
    contractAddress,
    sender: operator.primaryAccount.address,
    exec: {
      action: "mint",
      msg: {
          amount: "10000000000000",
          recipient: operator.primaryAccount.address
      }
    }
  })

  const txResponse = await operator.execute(msg, {
    gas: "5000000",
    amount: [
      {
        denom: "inj",
        amount: "800000000000000"
      }
    ]
  });

  console.log(" ---> txResponse: ", txResponse)
}

const query = async () => {
  const operator = new InjectiveOperator(process.env.INJ_PRIV ?? "", Network.TestnetSentry);
  const contractAddress = "inj13aklpywegw4n2nlnew8xc97lla4f3sqs5s8fh4";

  const msg = {
    balance: {
      address: operator.primaryAccount.address
    }
  }

  const response = await operator.query(contractAddress, msg);

  console.log(" ---> response: ", response)
}

query();