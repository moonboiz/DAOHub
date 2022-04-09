// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const DAOHub = await ethers.getContractFactory("DAOHub");
  const daoHub = await DAOHub.deploy();
  await daoHub.deployed();

  console.log("DAOHub address:", daoHub.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(daoHub);
}

function saveFrontendFiles(daoHub) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ DAOHub: daoHub.address }, undefined, 2)
  );

  const DAOHubArtifact = artifacts.readArtifactSync("DAOHub");

  fs.writeFileSync(
    contractsDir + "/DAOHub.json",
    JSON.stringify(DAOHubArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
