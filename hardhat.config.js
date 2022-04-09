require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");


// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "IQamlHj8oTb99VTjFTkvZiqvY_NeV10p";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";


// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.13",
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      account: [process.env.PRIVATE_KEY]
    },
    rinkeby: {
        url: process.env.RINKEBY_URL,
        accounts: [process.env.PRIVATE_KEY]
      },
    kovan: {
      url: process.env.KOVAN_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHER_SCAN_API_KEY // TODO: verify contract
  }
};
