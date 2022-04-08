//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20MembershipModule} from "../modules/ERC20MembershipModule.sol";
import {ERC721MembershipModule} from "../modules/ERC721MembershipModule.sol";


contract MembershipModuleFactory is AccessControl {
    
    function newERC20MembershipModule(address token) external returns (address) {
        return address(new ERC20MembershipModule(token));
    }

    function newERC721MembershipModule(address collection) external returns (address) {
        return address(new ERC721MembershipModule(collection));
    }
}