// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/Lotherum.sol/Lotherum.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const lotherumContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const lotteries = await lotherumContract.lotteries(1);
    console.log("The lotteries are: " + lotteries);

    const tx = await lotherumContract.create_lottery("lottery_test_1")
    await tx.wait()

//    console.log("Updating the message...");
//    const tx = await helloWorldContract.update("this is the new message");
//    await tx.wait();

//    const newMessage = await helloWorldContract.message();
//    console.log("The new message is: " + newMessage); 
}

main();
