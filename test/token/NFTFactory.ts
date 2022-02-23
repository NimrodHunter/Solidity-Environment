import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { NFTFactory } from "../../src/types/NFTFactory";
import type { CardNFT } from "../../src/types/CardNFT";
import { Signers } from "../types";
import { shouldBehaveLikeNFTFactory } from "./NFTFactory.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0]; //0xBAEea0217BeE969D05b0d80002753d6926e4db4f
    this.maxUint256 = ethers.constants.MaxUint256;
    this.ethers = ethers;
  });

  describe("NFT Factory", function () {
    beforeEach(async function () {

      const nFTFactoryArtifact: Artifact = await artifacts.readArtifact("NFTFactory");
      this.nFTFactory = <NFTFactory>await waffle.deployContract(this.signers.admin, nFTFactoryArtifact, []);

      const nFTCardArtifact: Artifact = await artifacts.readArtifact("CardNFT");
      this.nFTCard = <CardNFT>await waffle.deployContract(this.signers.admin, nFTCardArtifact, []);

    });

    shouldBehaveLikeNFTFactory();
  });
});