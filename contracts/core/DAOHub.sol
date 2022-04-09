//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IDAOHub} from "../interfaces/IDAOHub.sol";

contract DAOHub is AccessControl, IDAOHub {

    address[] private _registeredProxies;

    event DAOProxyRegistered(
        address indexed daoProxy, 
        address indexed submitter
    );

    function registerDAOProxy(address daoProxy) external {
        _registeredProxies.push(daoProxy);

        emit DAOProxyRegistered(daoProxy, msg.sender);
    }

    function getDAOProxies() external view returns (address[] memory) {
        return _registeredProxies;
    }
}
