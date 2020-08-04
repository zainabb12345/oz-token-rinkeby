const { accounts, contract } = require('@openzeppelin/test-environment');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')
// Use the different accounts, which are unlocked and funded with Ether
const [ owner, deployer, user ] = accounts;
// Create a contract object from a compilation artifact
const AbcToken = contract.fromArtifact('AbcToken');
const { expect } = require('chai');
// const AbcToken = artifacts.require("./AbcToken.sol");
// describe('AbcToken', function () {
//     const [ owner, other ] = accounts;
  
//     // Use large integers ('big numbers')
//     const value = new BN('42');
  
//     beforeEach(async function () {
//       this.contract = await AbcToken.new({ from: owner });
//     });
  
//     it('', async function () {
//       await this.contract.totalSupply(value, { from: owner });
  
//       // Use large integer comparisons
//       expect(await this.contract.retrieve()).to.be.bignumber.equal(value);
//     });
  
  
//     it('non owner cannot store a value', async function () {
//       // Test a transaction reverts
//       await expectRevert(
//         this.contract.store(value, { from: other }),
//         'Ownable: caller is not the owner'
//       );
//     });
//   });

describe('AbcToken', accounts => {
    beforeEach(async function () {
              this.contract = await AbcToken.new({ from: owner });
        const tokenInstance = await AbcToken.deployed()
            });
        
  it('sets the total supply upon deployment', async () => {
    
         initSupply    = 600000000
        , totalSupply   = await tokenInstance.totalSupply()
        , adminBalance  = await tokenInstance.balanceOf(accounts[0])
    assert.equal(totalSupply.toNumber(), initSupply, `Total supply should be ${initSupply}!`)
    assert.equal(adminBalance.toNumber(), initSupply, 'Initial supply should be allocated to admin account!')
  })
})