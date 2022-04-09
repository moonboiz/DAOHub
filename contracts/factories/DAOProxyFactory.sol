//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {DAOProxy} from "../dao/DAOProxy.sol";
import {IDAOHub} from "../interfaces/IDAOHub.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";


contract DAOProxyFactory is AccessControl {

    address private  _hub;

    constructor(address hub) {
        _hub = hub;
    }

    function newDAOProxy(
        uint8 chainId,
        address contractAddress,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        address membershipModule,
        address treasury
    ) external returns(address) {
        DAOProxy daoProxy = new DAOProxy();

        daoProxy.initialize(
            chainId,
            contractAddress,
            name,
            description,
            logoURI,
            membershipModule,
            treasury
        );

        IDAOHub(_hub).registerDAOProxy(address(daoProxy));
        
        return address(daoProxy);
    }
}
