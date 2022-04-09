//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/AccessControl.sol";
import {DAOProxy} from "../dao/DAOProxy.sol";
import {IDAOHub} from "../interfaces/IDAOHub.sol";
import {IMembershipModule} from "../interfaces/IMembershipModule.sol";
import {ERC20MembershipModule} from "../modules/ERC20MembershipModule.sol";
import {ERC721MembershipModule} from "../modules/ERC721MembershipModule.sol";


contract DAOProxyFactory is AccessControl {

    enum MembershipModuleType {
        ERC20,
        ERC721
    }

    address private  _hub;

    constructor(address hub) {
        _hub = hub;
    }

    function newDAOProxy(
        uint8 chainId,
        string calldata name,
        string calldata description,
        string calldata logoURI,
        MembershipModuleType membershipModuleType,
        address tokenAddress,
        address treasury
    ) external returns(address) {
        DAOProxy daoProxy = new DAOProxy();

        IMembershipModule membershipModule;

        if (membershipModuleType == MembershipModuleType.ERC20) {
            membershipModule = new ERC20MembershipModule(tokenAddress);
        } else if (membershipModuleType == MembershipModuleType.ERC721) {
            membershipModule = new ERC721MembershipModule(tokenAddress);
        }

        daoProxy.initialize(
            chainId,
            name,
            description,
            logoURI,
            address(membershipModule),
            treasury
        );

        IDAOHub(_hub).registerDAOProxy(address(daoProxy));
        
        return address(daoProxy);
    }
}
