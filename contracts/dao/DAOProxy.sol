//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IDAOProxy} from "../interfaces/IDAOProxy.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";

contract DAOProxy is AccessControl, IDAOProxy {
    address private _hub;
    uint8 private _chainId;
    string private _name;
    string private _description;
    string private _logoURI;
    address private _membershipModule;
    address private _treasury;

    function initialize(
        uint8 chainId,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        address membershipModule,
        address treasury
    ) external {
        _chainId = chainId;
        _name = name;
        _description = description;
        _logoURI = logoURI;
        _membershipModule = membershipModule;
        _treasury = treasury;
    }

    function getChainId() external view returns (uint8) {
        return _chainId;
    }

    function setChainId(uint8 chainId) external {
        _chainId = chainId;
    }

    function getName() external view returns (string memory) {
        return _name;
    }

    function setName(string calldata name) external {
        _name = name;
    }

    function getLogoURI() external view returns (string memory) {
        return _logoURI;
    }

    function setLogoURI(string calldata logoURI) external {
        _logoURI = logoURI;
    }

    function getMembershipModuleAddress() external view returns (address) {
        return _membershipModule;
    }

    function setMembershipModuleAddress(address membershipModule) external {
        _membershipModule = membershipModule;
    }

    function getTreasuryAddress() external view returns (address) {
        return _treasury;
    }

    function setTreasuryAddress(address treasury) external {
        _treasury = treasury;
    }

    function isMember(address addr) external view returns (bool) {
        return IMembershipModule(_membershipModule).isMember(addr);
    }

    function getTokenAddress() external view returns (address) {
        return IMembershipModule(_membershipModule).getTokenAddress();
    }
}
