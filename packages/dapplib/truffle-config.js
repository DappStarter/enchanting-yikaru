require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss just ensure success tongue'; 
let testAccounts = [
"0x3cee768be8282d0bba068e02b748eed8773329d75cada71b2975cdff18be15b1",
"0x6f2747f6776016da025030264a1375de0ae191fbd9164138143fb20e57f84572",
"0xa32cd211f286667495f3d6b6c80c9a2b9534c526738adc91ad2fa5a62fb8f131",
"0x363685a61ca0297531c0d012c66996af55452ce61f6d738445ab14432fa8193a",
"0xff8c63fb2d5a33cab35991d184865d0b0a084930f7e88c849ca1b38caa9ebfdd",
"0x76009e3507b14102ddea11a37f7eaec692c10757795108c736d815f8da0135b0",
"0xbe38dc101a908c2992cda8c5b35bfb89ccad0864b4552dc325e6d7e1149998b9",
"0x9db0c4854488bb0caecfa3c6e8bf2be12a5f1c4adf0e7827cacaf94fc37a24c0",
"0x8f63469f260cb0900577b741dfe8c2d082bb715e5701998e2f2ac1cad7ae85fc",
"0x4e575c2e1d8b2d0ec9a7041b6666abe3adf61ac6a4e29b797cc2ed504d9db414"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
