//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IDAOProxy} from "../interfaces/IDAOProxy.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract DAOProxy is AccessControl, IDAOProxy {
    
    address private _hub;
    address private _membershipModule;
    address private _treasury;

    constructor(address hub) {
        _hub = hub;
    }

    function initialize(address membershipModule, address treasury) external {
        _membershipModule = membershipModule;
        _treasury = treasury;
    }

    function setMembershipModule(address membershipModule) external {
        _membershipModule = membershipModule;
    }

    function isMember(address addr) external view returns (bool) {
        return IMembershipModule(_membershipModule).isMember(addr);
    }

    function getMemberCount() external view returns (uint) {
        return IMembershipModule(_membershipModule).getMemberCount();
    }

    function getMembers() external view returns (address[] memory){
        return IMembershipModule(_membershipModule).getMembers();
    }

    function balanceOf(address token) external view returns (uint) {
        return IERC20(token).balanceOf(_treasury);
    }
}
