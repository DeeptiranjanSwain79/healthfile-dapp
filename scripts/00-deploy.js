const hre = require("hardhat");

async function main() {
  console.log("Deploying Smart Contract...");

  const HealthFile = await hre.ethers.getContractFactory("HealthFile");

  const healthFile = await HealthFile.deploy({ gasLimit: 3000000 });

  await healthFile.deployed();

  console.log(`HealthFile deployed to ${healthFile.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exitCode = 1;
  });
