// SPDX-License-Identifier: HEPIA
pragma solidity >=0.7.3;

contract Lotherum {
    address public owner;
    uint weiUnit = 1 wei;

    Lottery[] public lotteries;

    struct Lottery {
    
        uint id;
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
    event createdLottered(uint lottery_id);

    function create_lottery(uint  id, uint ticketPrice, uint ticketsNumber, uint duration) public {
        Lottery memory new_lottery = Lottery(id, ticketPrice, ticketsNumber, duration);
        //Lottery[] lottery = new 
        lotteries.push(new_lottery);
        emit createdLottered(new_lottery.id);
    }

    function find_lottery_index(uint id) public view returns (uint) {
        for (uint i=0; i<lotteries.length; i++) {
            if(lotteries[i].id == id){
                return i;
            }
        }
        return 1000; 
    }

    function getTicketPrice(uint id) public view returns (uint)  {
        //require(find_lottery(id) == id, "Lottery not find.");
        return lotteries[find_lottery_index(id)].ticketPrice;
    }

    function getTicketsNumber(uint id) public view returns (uint)  {
        return lotteries[find_lottery_index(id)].ticketsNumber;
    }

    function getDuration(uint id) public view returns (uint)  {
        return lotteries[find_lottery_index(id)].duration;
    }
   
    function buyTickets(uint id, uint amount) public payable {

        uint index = find_lottery_index(id);
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
