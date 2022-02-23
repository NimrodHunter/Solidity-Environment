import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { CardNFT } from "../../src/types/CardNFT";
import { CardNFT__factory } from "../../src/types/factories/CardNFT__factory";

import { NFTFactory } from "../../src/types/NFTFactory";
import { NFTFactory__factory } from "../../src/types/factories/NFTFactory__factory";

task("deploy:NFTFactory")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    
    const nFTFactoryFactory: NFTFactory__factory = <NFTFactory__factory>await ethers.getContractFactory("NFTFactory");
    const nFTFactory: NFTFactory = <NFTFactory>await nFTFactoryFactory.deploy();
    await nFTFactory.deployed();
    console.log("NFT Factory deployed to: ", nFTFactory.address);

    const cardNFTFactory: CardNFT__factory = <CardNFT__factory>await ethers.getContractFactory("CardNFT");
    const cardNFT: CardNFT = <CardNFT>await cardNFTFactory.deploy();
    await cardNFT.deployed();
    console.log("Card NFT deployed to: ", cardNFT.address);

    

    
    
  });
