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
  // await deployContract(deployer, "DAOHub");
  await deployContract(deployer, "DAOProxy");
}

async function deployContract(deployer, contractName) {
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const hub = await deployHub();
  const proxyFactory = await deployProxyFactory(hub.address);

  saveFrontendFiles({
    DAOHub: hub,
    DAOProxyFactory: proxyFactory,
  });
}

async function deployHub() {
  const DAOHub = await ethers.getContractFactory("DAOHub");
  const daoHub = await DAOHub.deploy();
  await daoHub.deployed();

  console.log(`Contract DAOHub address:`, daoHub.address);

  return daoHub;
}

async function deployProxyFactory(hubAddress) {
  const DAOProxyFactory = await ethers.getContractFactory("DAOProxyFactory");
  const daoProxyFactory = await DAOProxyFactory.deploy(hubAddress);
  await daoProxyFactory.deployed();

  console.log("Contract ProxyFactory address:", daoProxyFactory.address);

  return daoProxyFactory;
}

function saveFrontendFiles(deployedContracts) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  let contractAddresses = {};
  Object.keys(deployedContracts).forEach((contractName) => {
    contractAddresses[contractName] = deployedContracts[contractName].address;
  });

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(contractAddresses, undefined, 2)
  );

  Object.keys(deployedContracts).forEach((contractName) => {
    const contractArtifact = artifacts.readArtifactSync(contractName);

    fs.writeFileSync(
      contractsDir + `/${contractName}.json`,
      JSON.stringify(contractArtifact, null, 2)
    );
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
