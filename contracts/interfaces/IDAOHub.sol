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
    * @notice Gets the DAO address for a given DAO name.
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
     * @notice Gets whether an address (user wallet) is a member of daoName.
     * 
     * @param daoName The name of the DAO.
     * @param addr The wallet address of the user to check.
     * 
     * @return bool A boolean representing whether the user is a member of daoName.
     */
    function isMember(
        string calldata daoName,
        address addr
    ) external view returns (bool);

    /**
     * @notice Gets the amount of a members in daoName.
     * 
     * @param daoName The name of the DAO.
     * 
     * @return uint An integer representing the amount of members in daoName.
     */
    function getMemberCount(
        string calldata daoName
    ) external view returns (uint);

    /**
     * @notice Gets a list of DAO members addresses.
     * 
     * @param daoName The name of the DAO.
     * 
     * @return address[] An array of address of the members of the DAO.
     */
    function getMembers(
        string calldata daoName
    ) external view returns (address[] memory);

    /**
    * @notice Gets the amount of DAOs in the system.
    *
    * @param daoName The name of the DAO.
    * @param token The contract address of the ERC20 token to retrieve the balance for.
    * 
    * @return uint An integer representing the amount of specific token in the DAO's treasury.
    */
    function balanceOf(
        string calldata daoName,
        address token
    ) external view returns (uint);
}