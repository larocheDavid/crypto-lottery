const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const LotteryGenerator = await hre.ethers.getContractFactory("LotteryGenerator");
  const lotteryGenerator = await LotteryGenerator.deploy();

  await lotteryGenerator.deployed();

  console.log("LotteryGenerator deployed to:", lotteryGenerator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
