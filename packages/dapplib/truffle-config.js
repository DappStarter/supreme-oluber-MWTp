require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note sad modify give clog metal genuine'; 
let testAccounts = [
"0xc25cd9a2fa1481a647421b90134042ef6bf44ec3de6763636e0f06446fd5ec1c",
"0x0a154c82ec515a4ed87a45745e6ba2a0394970c819f48a0f3bc27ce806df19d1",
"0x93ec954f5d1c671d8e732aa37a9396a8328fde0cfa547a022239691c5cd0f67c",
"0xb4f926b7f2aa1028c78ce6d98de1c95589a0459d0e0f457de241c400af007956",
"0xc8a40cc67b7b45941e7f7fc1e26dbf5d60e452b4c7694820849db6b5fd688ad2",
"0x757d88b295e6f39566535821a831376d0623c676cf5c8344d84a021987a0f666",
"0xb8eda3c8e4fb5b67b727042043c802662329ac90013ae6372d6caf808817f75a",
"0x02d77855a499c3235375e1ec1b4af5b1bb3249bebed25d0d0975aee42eef7fa7",
"0xa534d2cfdbd74e93c283982ff7e7968c336ccc6cc5ca3240ceb9f5d5886cdf8a",
"0x0b5d472939c3e976280e116f2ef7b9f426895e8bdc742efb1e256088511c3a62"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


