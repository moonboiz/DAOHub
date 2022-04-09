//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract ERC721MembershipModule is AccessControl, IMembershipModule {
    
    address private _collection;

    constructor(address collection) {
        _collection = collection;
    }

    function getTokenAddress() external view returns (address) {
        return _collection;
    }

    function isMember(address addr) external view returns (bool) {
        return false;
    }
}