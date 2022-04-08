//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract ERC20MembershipModule is AccessControl, IMembershipModule {
    
    function isMember(address addr) external view returns (bool) {
        return false;
    }

    function getMemberCount() external view returns (uint) {
        return 0;
    }

    function getMembers() external view returns (address[] memory) {
        return address[];
    }
}