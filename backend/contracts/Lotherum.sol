// SPDX-License-Identifier: HEPIA
pragma solidity >=0.7.3;
pragma experimental ABIEncoderV2;

contract Lotherum {
    address public owner;
    uint weiUnit = 1 wei;

    Lottery[] public lotteries;

    struct Lottery {
    
        string name;
        uint ticketPrice;
        uint ticketsNumber;
        uint duration;
        /*
        address creator;
        address payable[] players;
        address payable pot;
        */
    }

    constructor() {
        owner = msg.sender;
    }
    event createdLottered(string lottery_id);

    function create_lottery(string memory name, uint ticketPrice, uint ticketsNumber, uint duration) public {
        Lottery memory new_lottery = Lottery(name, ticketPrice, ticketsNumber, duration);
        //Lottery[] lottery = new 
        lotteries.push(new_lottery);
        emit createdLottered( new_lottery.name);
    }

    function find_lottery_index(string memory name) public view returns (uint) {
        for (uint i=0; i<lotteries.length; i++) {
            if(keccak256(bytes(lotteries[i].name)) == keccak256(bytes(name))) {
                return i;
            }
        }
        return 1000; 
    }

    /*function get_lottery(string memory name) public view returns (Lottery) {
        return lotteries[find_lottery_index(name)];
    }*/

    function get_lotteries() public view returns (Lottery[] memory) {
        return lotteries;
    }

    function getTicketPrice(string memory name) public view returns (uint)  {
        //require(find_lottery(id) == id, "Lottery not find.");
        return lotteries[find_lottery_index(name)].ticketPrice;
    }

    function getTicketsNumber(string memory name) public view returns (uint)  {
        return lotteries[find_lottery_index(name)].ticketsNumber;
    }

    function getDuration(string memory name) public view returns (uint)  {
        return lotteries[find_lottery_index(name)].duration;
    }
   
    function buyTickets(string memory name, uint amount) public payable {

        uint index = find_lottery_index(name);
        require(msg.value >= amount * lotteries[index].ticketPrice * weiUnit);
        require(lotteries[index].ticketsNumber >= amount, "Not enough tickets to complete this purchase.");
        while (amount != 0) {
            //lotteries[index].players.push(payable(msg.sender));
            lotteries[index].ticketsNumber--;
            amount--;
        }
        //players[index].transfer(...);
    }
}
