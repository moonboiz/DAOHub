//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;


/**
 * @title IDAOHub
 * @author Moonboiz
 *
 * @notice This is the interface for the DAOHub contract, a hub for DAOs data retrieval.
 */
interface IDAOHub {
    /**
    * @notice Registers a DAO proxy contract in the hub.
    * 
    * @param daoProxy The contract address of a contract implementing IDAOProxy.
    */
    function registerDAOProxy(address daoProxy) external;
}