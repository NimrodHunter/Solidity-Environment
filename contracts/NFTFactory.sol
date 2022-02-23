// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "./CardNFT.sol";
import "./Clones.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


//solhint-disable-line
contract NFTFactory is ReentrancyGuard {

    // nft counter
    uint256 public nftCounter;

    constructor() {}

    // Main Function

    function mintNFT(address implementation_, string memory cardName, string memory cardSymbol) external virtual nonReentrant {
        require(implementation_ != address(0));
        address clone = Clones.clone(implementation_);
        CardNFT(clone).initialize(cardName, cardSymbol);
        nftCounter = ++nftCounter;
        emit Cloned(clone);
    }

    // Event
    event Cloned(address indexed clone);
} 