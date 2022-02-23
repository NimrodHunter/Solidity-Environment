// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "./NFT.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract CardNFT is ReentrancyGuard, NFT {

    bool public initialized;

    // Initializer
    function initialize(string memory cardName, string memory cardSymbol) external {   
        require(!initialized, "contract already initialized");
        _name = cardName;
        _symbol = cardSymbol;
        initialized = !initialized;
    }
    

} 