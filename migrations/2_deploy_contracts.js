var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSales = artifacts.require("./MyTokenSale.sol");
require('dotenv').config({path: '../.env'});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
    //await deployer.deploy(MyToken, 1000000000);
    await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address);
    let tokenInstance = await MyToken.deployed();
    //await tokenInstance.transfer(MyTokenSales.address, 1000000000);
    await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
};