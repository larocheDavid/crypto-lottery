require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {ethers} = require ("hardhat");
const contract = require("../artifacts/contracts/Lotherum.sol/Lotherum.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const lotherumContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


export const createLottery = async (address, {name, ticketPrice, duration}) => {
    console.log("creating lottery ...")
    const transactionParameters = {
      from: address, // must match user's active address.
      to: CONTRACT_ADDRESS, // Required except during contract publications.
      data: lotherumContract.methods.create_lottery(name).encodeABI(),
    }
};
