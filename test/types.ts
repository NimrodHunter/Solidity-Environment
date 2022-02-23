import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { NFTFactory } from "../src/types/NFTFactory";
import type { CardNFT } from "../src/types/CardNFT";

declare module "mocha" {
    export interface Context {
        nFTFactory: NFTFactory;
        loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
        signers: Signers;
    }
}

declare module "mocha" {
    export interface Context {
        cardNFT: CardNFT;
        loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
        signers: Signers;
    }
}

export interface Signers {
    admin: SignerWithAddress;
}