export enum Network {
    MainnetK8s = "mainnetK8s",
    MainnetLB = "mainnetLB",
    Mainnet = "mainnet",
    MainnetSentry = "mainnetSentry",
    MainnetOld = "mainnetOld",
    Staging = "staging",
    Internal = "internal",
    TestnetK8s = "testnetK8s",
    TestnetOld = "testnetOld",
    TestnetSentry = "testnetSentry",
    Testnet = "testnet",
    Devnet1 = "devnet1",
    Devnet2 = "devnet2",
    Devnet = "devnet",
    Local = "local"
}

export type NetworkEndpoints = {
    indexer: string;
    grpc: string;
    rest: string;
    rpc?: string;
    cacheGrpc?: string;
    cacheRest?: string;
    chronos?: string;
    web3gw?: string;
    explorer?: string;
};
export type UrlEndpoints = NetworkEndpoints; /** Deprecated */

const endpointsMainnetSentry = {
    indexer: 'https://sentry.exchange.grpc-web.injective.network',
    grpc: 'https://sentry.chain.grpc-web.injective.network',
    rpc: 'https://sentry.tm.injective.network',
    rest: 'https://sentry.lcd.injective.network',
    chronos: 'https://sentry.exchange.grpc-web.injective.network',
    explorer: 'https://sentry.exchange.grpc-web.injective.network',
    cacheGrpc: 'https://sentry.chain.grpc-web.injective.network',
    cacheRest: 'https://staging.gateway.grpc-web.injective.network',
    web3gw: 'https://sentry.exchange.grpc-web.injective.network',
};
const endpointsMainnet = Object.assign({}, exports.endpointsMainnetSentry);
const endpointsStaging = {
    indexer: 'https://staging.api.injective.network',
    grpc: 'https://staging.grpc.injective.network',
    rpc: 'https://staging.tm.injective.network',
    rest: 'https://staging.lcd.injective.network',
    chronos: 'https://staging.api.injective.network',
    explorer: 'https://staging.api.injective.network',
    cacheGrpc: 'https://staging.grpc.injective.network',
    cacheRest: 'https://staging.gateway.grpc-web.injective.network',
    web3gw: 'https://staging.api.injective.network',
};
const endpointsInternal = {
    indexer: 'https://products.exchange.grpc-web.injective.network',
    grpc: 'https://products.chain.grpc-web.injective.network',
    rpc: 'https://products.tm.injective.network',
    rest: 'https://products.lcd.injective.network',
    chronos: 'https://products.chronos.grpc-web.injective.network',
    explorer: 'https://products.explorer.grpc-web.injective.network',
    cacheGrpc: 'https://products.chain.grpc-web.injective.network',
    cacheRest: 'https://staging.gateway.grpc-web.injective.network',
    web3gw: 'https://products.web3-gateway.injective.network',
};
const endpointsTestnetSentry = {
    indexer: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    grpc: 'https://testnet.sentry.chain.grpc-web.injective.network',
    rpc: 'https://testnet.sentry.tm.injective.network',
    rest: 'https://testnet.sentry.lcd.injective.network',
    chronos: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    explorer: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    cacheGrpc: 'https://testnet.sentry.chain.grpc-web.injective.network',
    cacheRest: 'https://testnet.sentry.exchange.grpc-web.injective.network',
    web3gw: 'https://testnet.sentry.exchange.grpc-web.injective.network',
};
const endpointsTestnet = Object.assign({}, endpointsTestnetSentry);
const endpointsDevnet = {
    indexer: 'https://devnet.api.injective.dev',
    grpc: 'https://devnet.grpc.injective.dev',
    rpc: 'https://devnet.tm.injective.dev',
    rest: 'https://devnet.lcd.injective.dev',
    chronos: 'https://devnet.api.injective.dev',
    explorer: 'https://devnet.api.injective.dev',
    cacheGrpc: 'https://devnet.grpc.injective.dev',
    cacheRest: 'https://devnet.api.injective.dev',
    web3gw: 'https://devnet.api.injective.dev',
};
const endpointsDevnet1 = {
    indexer: 'https://devnet-1.api.injective.dev',
    grpc: 'https://devnet-1.grpc.injective.dev',
    rpc: 'https://devnet-1.tm.injective.dev',
    rest: 'https://devnet-1.lcd.injective.dev',
    chronos: 'https://devnet-1.api.injective.dev',
    explorer: 'https://devnet-1.api.injective.dev',
    cacheGrpc: 'https://devnet-1.grpc.injective.dev',
    cacheRest: 'https://devnet-1.api.injective.dev',
    web3gw: 'https://devnet-1.api.injective.dev',
};
const endpointsDevnet2 = {
    indexer: 'https://devnet-2.api.injective.dev',
    grpc: 'https://devnet-2.grpc.injective.dev',
    rpc: 'https://devnet-2.tm.injective.dev',
    rest: 'https://devnet-2.lcd.injective.dev',
    chronos: 'https://devnet-2.api.injective.dev',
    explorer: 'https://devnet-2.api.injective.dev',
    cacheGrpc: 'https://devnet-2.grpc.injective.dev',
    cacheRest: 'https://devnet-2.api.injective.dev',
    web3gw: 'https://devnet-2.api.injective.dev',
};
const endpointsLocal = {
    indexer: 'https://localhost:4444',
    grpc: 'http://localhost:9091',
    rpc: 'http://localhost:9091',
    rest: 'http://localhost:9091',
    chronos: 'https://localhost:4445',
    explorer: 'http://localhost:4446',
    cacheGrpc: 'http://localhost:9091',
    cacheRest: 'https://localhost:4444',
    web3gw: 'https://localhost:4444',
};
/**
 * @deprecated use TestnetSentry instead
 */
const endpointsTestnetOld = {
    indexer: 'https://testnet.exchange.grpc-web.injective.network',
    grpc: 'https://testnet.chain.grpc-web.injective.network',
    rpc: 'https://testnet.tm.injective.network',
    rest: 'https://testnet.lcd.injective.network',
    chronos: 'https://testnet.exchange.grpc-web.injective.network',
    explorer: 'https://testnet.exchange.grpc-web.injective.network',
    web3gw: 'https://testnet.exchange.grpc-web.injective.network',
    cacheGrpc: 'https://testnet.exchange.grpc-web.injective.network/',
    cacheRest: 'https://testnet.exchange.grpc-web.injective.network',
};
/**
 * @deprecated use TestnetSentry instead
 */
const endpointsTestnetK8s = {
    indexer: 'https://k8s.testnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.testnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.testnet.tm.injective.network',
    rest: 'https://k8s.testnet.lcd.injective.network',
    chronos: 'https://k8s.testnet.exchange.grpc-web.injective.network',
    explorer: 'https://k8s.testnet.explorer.grpc-web.injective.network',
    cacheGrpc: 'https://k8s.testnet.gateway.grpc.injective.network',
    cacheRest: 'https://k8s.testnet.gateway.grpc-web.injective.network',
    web3gw: 'https://k8s.testnet.exchange.grpc-web.injective.network',
};
/**
 * @deprecated use MainnetSentry instead
 */
const endpointsMainnetLB = {
    indexer: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.global.mainnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.global.mainnet.tm.injective.network',
    rest: 'https://k8s.global.mainnet.lcd.injective.network',
    chronos: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
    explorer: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
    cacheGrpc: 'https://k8s.global.mainnet.chain.grpc-web.injective.network',
    cacheRest: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
    web3gw: 'https://k8s.global.mainnet.exchange.grpc-web.injective.network',
};
/**
 * @deprecated use MainnetSentry instead
 */
const endpointsMainnetOld = {
    indexer: 'https://api.injective.network',
    grpc: 'https://grpc.injective.network',
    cacheGrpc: 'https://grpc.injective.network',
    rpc: 'https://tm.injective.network',
    rest: 'https://lcd.injective.network',
    cacheRest: 'https://api.injective.network',
    chronos: 'https://api.injective.network',
    explorer: 'https://api.injective.network',
    web3gw: 'https://api.injective.network',
};
/**
 * @deprecated use MainnetSentry instead
 */
const endpointsMainnetK8s = {
    indexer: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
    grpc: 'https://k8s.mainnet.chain.grpc-web.injective.network',
    rpc: 'https://k8s.mainnet.tm.injective.network',
    rest: 'https://k8s.mainnet.lcd.injective.network',
    chronos: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
    explorer: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
    cacheGrpc: 'https://k8s.mainnet.chain.grpc-web.injective.network',
    cacheRest: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
    web3gw: 'https://k8s.mainnet.exchange.grpc-web.injective.network',
};
//# sourceMappingURL=endpoints.js.map

exports.networkEndpoints = {
    [Network.MainnetLB]: endpointsMainnetLB,
    [Network.MainnetK8s]: endpointsMainnetK8s,
    [Network.MainnetSentry]: endpointsMainnetSentry,
    [Network.MainnetOld]: endpointsMainnetOld,
    [Network.Staging]: endpointsStaging,
    [Network.Mainnet]: endpointsMainnet,
    [Network.Internal]: endpointsInternal,
    [Network.Devnet]: endpointsDevnet,
    [Network.Devnet1]: endpointsDevnet1,
    [Network.Devnet2]: endpointsDevnet2,
    [Network.Testnet]: endpointsTestnet,
    [Network.TestnetK8s]: endpointsTestnetK8s,
    [Network.TestnetOld]: endpointsTestnetOld,
    [Network.TestnetSentry]: endpointsTestnetSentry,
    [Network.Local]: endpointsLocal,
};

export const getNetworkEndpoints = (network: Network) => exports.networkEndpoints[network];


// exports.chainInfos = {
//     [Network.MainnetLB]: mainnetChainInfo,
//     [Network.MainnetK8s]: mainnetChainInfo,
//     [Network.MainnetSentry]: mainnetChainInfo,
//     [Network.MainnetOld]: mainnetChainInfo,
//     [Network.Staging]: mainnetChainInfo,
//     [Network.Mainnet]: mainnetChainInfo,
//     [Network.Internal]: mainnetChainInfo,
//     [Network.Devnet]: devnetChainInfo,
//     [Network.Devnet1]: devnetChainInfo,
//     [Network.Devnet2]: devnetChainInfo,
//     [Network.Testnet]: testnetChainInfo,
//     [Network.TestnetOld]: testnetChainInfo,
//     [Network.TestnetK8s]: testnetChainInfo,
//     [Network.TestnetSentry]: testnetChainInfo,
//     [Network.Local]: localChainInfo,
// };