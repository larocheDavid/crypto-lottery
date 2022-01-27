// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.7.3;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract Lotherum {
    struct Lottery {
        string Name;
        // uint EntryPrice;
        // uint Duration;
    }
    event createdLottered(string new_lottery_name);

    // Declares a state variable `message` of type `string`.
    // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
    Lottery[] public lotteries;

    // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
    // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
    constructor() {}

    // function create_lottery(string memory name, uint entry_price, uint duration) public {
    //     Lottery memory new_lottery = Lottery(name, entry_price, duration);
    //     lotteries.push(new_lottery);
    //     emit createdLottered(new_lottery.Name);
    // }
    function create_lottery(string memory name) public {
        Lottery memory new_lottery = Lottery(name);
        lotteries.push(new_lottery);
        emit createdLottered(new_lottery.Name);
    }
}

