//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {IDAOHub} from "../interfaces/IDAOHub.sol";

contract DAOHub is AccessControl, IDAOHub {

    function registerDAOProxy(address daoProxy) external {

    }

    function emitDAOProxyRegistered(
        address daoProxy,
        string memory daoName,
        address submitter
    ) external {

    }

    function unregisterDAOProxy(address daoProxy) external {

    }

    function emitDAOProxyUnregistered(
        address daoProxy,
        string memory daoName,
        address submitter
    ) external {
        
    }
}
