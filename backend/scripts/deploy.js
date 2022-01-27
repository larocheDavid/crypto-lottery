async function main() {
   const Lotherum = await ethers.getContractFactory("Lotherum");

   // Start deployment, returning a promise that resolves to a contract object
   const lotherum_contract = await Lotherum.deploy();   
   console.log("Contract deployed to address:", lotherum_contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
