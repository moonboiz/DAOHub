//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;


interface IDAOProxy {
    
    function initialize(
        uint8 chainId,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        address membershipModule, 
        address treasury
    ) external;

    function getChainId() external view returns (uint8);

    function setChainId(uint8) external;

    function getName() external view returns (string memory);

    function setName(string calldata) external;

    function getLogoURI() external view returns (string memory);

    function setLogoURI(string calldata) external;

    function getMembershipModuleAddress() external view returns (address);

    function setMembershipModuleAddress(address) external;

    function getTreasuryAddress() external view returns (address);

    function setTreasuryAddress(address) external;

    function isMember(address) external view returns (bool);
}
