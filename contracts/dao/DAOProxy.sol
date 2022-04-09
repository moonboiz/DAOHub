//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IDAOProxy} from "../interfaces/IDAOProxy.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract DAOProxy is AccessControl, IDAOProxy {
    
    address private _hub;
    uint8 private _chainId;
    address private _contractAddress;
    string private _name;
    string private _description;
    string private _logoURI;
    address private _membershipModule;
    address private _treasury;

    constructor(address hub) {
        _hub = hub;
    }

    function initialize(
        uint8 chainId,
        address contractAddress,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        address membershipModule, 
        address treasury
    ) external {
        _chainId = chainId;
        _contractAddress = contractAddress;
        _name = name;
        _description = description;
        _logoURI = logoURI;
        _membershipModule = membershipModule;
        _treasury = treasury;
    }

    function isMember(address addr) external view returns (bool) {
        return IMembershipModule(_membershipModule).isMember(addr);
    }

    function getChainId() external view returns (uint8) {
        return 0;
    }

    function getContractAddress() external view returns (address) {
        return address(this);
    }

    function getName() external view returns (string memory) {
        return "DAO Name";
    }

    function getDescription() external view returns (string memory) {
        return "DAO Description";
    }

    function getLogoURI() external view returns (string memory) {
        return "https://ipfs.io/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG";
    }

    function getMembershipModuleAddress() external view returns (address) {
        return _membershipModule;
    }

    function getTreasuryAddress() external view returns (address) {
        return _treasury;
    }
}
