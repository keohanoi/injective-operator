# First Step
## Install
```bash
npm install @keohanoi/injective-operator@latest
```

# Example
These examples are using for an CW20 contract whose msg is defined here: [CW20 Msg](https://github.com/CosmWasm/cw-plus/blob/main/contracts/cw20-base/src/msg.rs)
## Injective Protocol
### Store Code
```typescript
import { InjectiveOperator, Network, MsgStoreCode } from "@keohanoi/injective-operator";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({
  path: ".env"
})

const storeCode = async () => {
  const operator = new InjectiveOperator(process.env.PRIVATE_KEY ?? "", Network.TestnetSentry);
  const code = fs.readFileSync("./artifacts/cw20_base.wasm");
  const msg = MsgStoreCode.fromJSON({
    sender: operator.primaryAccount.address,
    wasmBytes: code
  });
  const txResponse = await operator.storeCode(
    msg,
    {
      gas: "5000000",
      amount: [
        {
          denom: "inj",
          amount: "800000000000000"
        }
      ]
    }
  );

  console.log(" ---> txResponse: ", txResponse);
};

storeCode()
```

### Instantiate Contract
```typescript
const instantiate = async () => {
  const operator = new InjectiveOperator(process.env.PRIVATE_KEY ?? "", Network.TestnetSentry);
  const codeId = 8557;

  const msg = MsgInstantiateContract.fromJSON({
    sender: operator.primaryAccount.address,
    admin: operator.primaryAccount.address,
    codeId,
    label: "cw20_base",
    msg: {
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
  });

  const txResponse = await operator.instantiate(msg, {
    gas: "5000000",
    amount: [
      {
        denom: "inj",
        amount: "800000000000000"
      }
    ]
  });

  console.log(" ---> txResponse: ", txResponse);
};
```

### Execute Contract
```typescript
const execute = async () => {
  const operator = new InjectiveOperator(process.env.PRIVATE_KEY ?? "", Network.TestnetSentry);
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
  });

  const txResponse = await operator.execute(msg, {
    gas: "5000000",
    amount: [
      {
        denom: "inj",
        amount: "800000000000000"
      }
    ]
  });

  console.log(" ---> txResponse: ", txResponse);
};
```

### Query Contract
```typescript
const query = async () => {
  const operator = new InjectiveOperator(process.env.PRIVATE_KEY ?? "", Network.TestnetSentry);
  const contractAddress = "inj13aklpywegw4n2nlnew8xc97lla4f3sqs5s8fh4";

  const msg = {
    balance: {
      address: operator.primaryAccount.address
    }
  };

  const response = await operator.query(contractAddress, msg);

  console.log(" ---> response: ", response);
};

query();
```