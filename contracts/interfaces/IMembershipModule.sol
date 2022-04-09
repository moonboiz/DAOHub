//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;


interface IMembershipModule {    
    /**
     * @notice Gets whether an address (user wallet) is a member of daoName.
     * 
     * @param addr The wallet address of the user to check.
     * 
     * @return bool A boolean representing whether the user is a member of daoName.
     */
    function isMember(address addr) external view returns (bool);
}