const assert = require("assert");
const ganache = require("ganache-cli"); //this is going to serve as our local Ethereum test network.
const Web3 = require("web3"); //Whenever we make use of web three, we are always going to be requiring in or importing a constructor function
const web3 = new Web3(ganache.provider()); //here is what creates an instance of web three and tells that instance to attempt to connect to this local test network

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

let car;
beforeEach(() => {
    car = new Car();
}) // code inside will be called before each it function

describe("Car Class", () => {
  it("can park", () => {
    // const car = new Car();
    assert.equal(car.park(), "stopped");
  });

  it('can drive', () => {
    // const car = new Car();
    assert.equal(car.drive(), "vroom");
  })
});
