//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract ERC20MembershipModule is AccessControl, IMembershipModule {

    address private _token;

    constructor(address token) {
        _token = token;
    }
    
    function isMember(address addr) external view returns (bool) {
        return false;
    }
}