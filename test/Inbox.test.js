const assert = require("assert");
const ganache = require("ganache-cli"); //this is going to serve as our local Ethereum test network.
const Web3 = require("web3"); //Whenever we make use of web three, we are always going to be requiring in or importing a constructor function
const web3 = new Web3(ganache.provider()); //here is what creates an instance of web three and tells that instance to attempt to connect to this local test network
const {interface, bytecode} = require("../compile");

let accounts;
let inbox;
before(async () => {
    // Get a list of all accounts
    // Every function we call with web3 is asynchronous in nature which means it's going to return Promise
    accounts = await web3.eth.getAccounts()
    
    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ["Hi there!"]})
        .send({from: accounts[0], gas: '1000000' })
});

describe("Inbox", () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
})