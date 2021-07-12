var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSales = artifacts.require("./MyTokenSale.sol");
require('dotenv').config({path: '../.env'});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(KycContract);
    await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);
    let instance = await MyToken.deployed();
    //await tokenInstance.transfer(MyTokenSales.address, 1000000000);
    await instance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
};