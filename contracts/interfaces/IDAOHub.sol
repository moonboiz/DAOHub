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

    /**
    * @dev Helper function to emit a detailed register DAOPRoxy event from the hub, to be consumed by frontends.
    *
    * @param daoProxy The contract address of a contract implementing IDAOProxy.
    * @param daoName The name of the DAO.
    * @param submitter The address the sumbitter of the DAO registeration.
    */
    function emitDAOProxyRegistered(
        address daoProxy,
        string memory daoName,
        address submitter
    ) external;

    /**
    * @notice Unregisters a DAO proxy contract in the hub.
    * 
    * @param daoProxy The contract address of a contract implementing IDAOProxy.
    */
    function unregisterDAOProxy(address daoProxy) external;

    /**
    * @dev Helper function to emit a detailed register DAOPRoxy event from the hub, to be consumed by frontends.
    *
    * @param daoProxy The contract address of a contract implementing IDAOProxy.
    * @param daoName The name of the DAO.
    * @param submitter The address the sumbitter of the DAO registeration.
    */
    function emitDAOProxyUnregistered(
        address daoProxy,
        string memory daoName,
        address submitter
    ) external;
}