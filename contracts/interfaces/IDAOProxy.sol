//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;


interface IDAOProxy {
    
    function initialize(
        uint8 chainId,
        address contractAddress,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        address membershipModule, 
        address treasury
    ) external;

    function getChainId() external view returns (uint8);

    function getContractAddress() external view returns (address);

    function getName() external view returns (string memory);

    function getDescription() external view returns (string memory);

    function getLogoURI() external view returns (string memory);

    function getMembershipModuleAddress() external view returns (address); 

    function getTreasuryAddress() external view returns (address);

    /**
     * @notice Gets whether an address (user wallet) is a member of daoName.
     * 
     * @param addr The wallet address of the user to check.
     * 
     * @return bool A boolean representing whether the user is a member of daoName.
     */
    function isMember(address addr) external view returns (bool);
}
