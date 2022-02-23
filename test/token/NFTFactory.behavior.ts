import { expect } from "chai";
import { increaseTime } from "../utils/utils";

export function shouldBehaveLikeNFTFactory(): void {
    it("Successful Deployment", async function () { 

    });

    it("Create NFT", async function () {
        let owner = this.signers.admin;
        let name = "long swords";
        let sysmbol = "LS";

        let mintNFTTx = await this.nFTFactory.connect(owner).mintNFT(this.nFTCard.address, name, sysmbol);
        let minted = await mintNFTTx.wait();

        let eventParams = minted.events?.filter((x) => {
            return (x.event == "Cloned")
        })[0].args

        let NFTAddress = eventParams?.clone.toString();

        let NFTBalance = await this.nFTFactory.connect(owner).nftCounter();
        expect(NFTBalance.toNumber()).to.equal(1);

        let NFT = this.nFTCard.attach(NFTAddress);
        expect((await NFT.name()).toString()).to.equal(name);
        expect((await NFT.symbol()).toString()).to.equal(sysmbol);
    });

    it("Create two NFT", async function () {
        let owner = this.signers.admin;
        let name1 = "long swords";
        let sysmbol1 = "LS";

        let name2 = "regular shield";
        let sysmbol2 = "RS";

        let mintNFTTx = await this.nFTFactory.connect(owner).mintNFT(this.nFTCard.address, name1, sysmbol1);
        await mintNFTTx.wait();

        mintNFTTx = await this.nFTFactory.connect(owner).mintNFT(this.nFTCard.address, name2, sysmbol2);
        await mintNFTTx.wait();


        let NFTBalance = await this.nFTFactory.connect(owner).nftCounter();
        expect(NFTBalance.toNumber()).to.equal(2);
    });

    it("Revert, Initialize two times the same NFT", async function () {
        let owner = this.signers.admin;
        let name = "long swords";
        let sysmbol = "LS";

        let name2 = "regular shield";
        let sysmbol2 = "RS";

        let mintNFTTx = await this.nFTFactory.connect(owner).mintNFT(this.nFTCard.address, name, sysmbol);
        let minted = await mintNFTTx.wait();

        let eventParams = minted.events?.filter((x) => {
            return (x.event == "Cloned")
        })[0].args

        let NFTAddress = eventParams?.clone.toString();

        let NFTBalance = await this.nFTFactory.connect(owner).nftCounter();
        expect(NFTBalance.toNumber()).to.equal(1);

        let NFT = this.nFTCard.attach(NFTAddress);
        
        await expect(NFT.initialize(name2, sysmbol2)).to.be.revertedWith("contract already initialized");
    });
/*
    it("Successful Token Transfer To Vesting Contract", async function () { 
        let owner = this.signers.admin;
        let initialBalance = await this.vestedToken.connect(owner).balanceOf(owner.getAddress());
        expect(initialBalance.toNumber()).to.be.a('number');
        expect(initialBalance.toNumber()).to.equal(1000);

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(600);
    
    });

    it("Successful First Token Release", async function () {
        let owner = this.signers.admin;

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        await increaseTime(10);

        let releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(540);
        
        //console.log(a.events?.filter((x) => {return x.event == "ERC20Released"}));
    });

    it("Successful Second Token Release after 180 seconds", async function () {
        let owner = this.signers.admin;

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        await increaseTime(10);

        let releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(540);

        await increaseTime(190);

        releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();
        expect(contractBalance.toNumber()).to.be.a('number');        
        
    });

    it("Revert if the release is before 180 seconds", async function () {
        let owner = this.signers.admin;

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        await increaseTime(10);

        let releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(540);

        await increaseTime(30);

        await expect(this.vesting.connect(owner)["release(address)"](this.vestedToken.address)).to.be.revertedWith("already vested")     
        
    });
*/
}