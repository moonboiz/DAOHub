//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;


interface IDAOProxy {
    
    function initialize(address _membershipModule, address _treasury) external;
    
    function setMembershipModule(address _module) external;
    
    /**
     * @notice Gets whether an address (user wallet) is a member of daoName.
     * 
     * @param addr The wallet address of the user to check.
     * 
     * @return bool A boolean representing whether the user is a member of daoName.
     */
    function isMember(address addr) external view returns (bool);

    /**
     * @notice Gets the amount of a members in daoName.
     * 
     * @return uint An integer representing the amount of members in daoName.
     */
    function getMemberCount() external view returns (uint);

    /**
     * @notice Gets a list of DAO members addresses.
     * 
     * @return address[] An array of address of the members of the DAO.
     */
    function getMembers() external view returns (address[] memory);

    /**
    * @notice Gets the amount of specific ERC20 tokens in the DAO's treasury.
    *
    * @param token The contract address of the ERC20 token to retrieve the balance for.
    * 
    * @return uint An integer representing the amount of specific token in the DAO's treasury.
    */
    function balanceOf(address token) external view returns (uint);
}
