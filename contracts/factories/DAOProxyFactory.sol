//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {DAOProxy} from "../core/DAOProxy.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract DAOProxyFactory is AccessControl {

    // TODO: change to env variable
    address private immutable DAO_HUB_ADDRESS = 0x0000000000000000000000000000000000000000;
    
    function newDAOProxy(address _membershipModule) external returns(address) {
        IMembershipModule membershipModule = IMembershipModule(_membershipModule);
        DAOProxy daoProxy = new DAOProxy(DAO_HUB_ADDRESS);
        
        daoProxy.initialize(membershipModule);
        
        return address(daoProxy);
    }
}
