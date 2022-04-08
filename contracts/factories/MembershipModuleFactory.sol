//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20MembershipModule} from "../modules/ERC20MembershipModule.sol";
import {ERC721MembershipModule} from "../modules/ERC721MembershipModule.sol";


contract MembershipModuleFactory is AccessControl {
    
    function newERC20MembershipModule(address token) external returns (address) {
        ERC20MembershipModule module = new ERC20MembershipModule();
        
        module.initialize(token);
        
        return address(module);
    }

    function newERC721MembershipModule(address collection) external returns (address) {
        ERC721MembershipModule module = new ERC721MembershipModule();
        
        module.initialize(collection);
        
        return address(module);
    }
}