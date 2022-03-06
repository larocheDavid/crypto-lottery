// SPDX-License-Identifier: HEPIA
pragma solidity ^0.8.12;

contract Lottery {

    address public owner;
    address payable[] public players;
    address payable public pot;

    uint256 ticketPrice;
    uint weiPrice = 1 wei;
    uint32 ticketsNumber;
    uint32 duration;

    constructor(uint256 _ticketPrice, uint32 _ticketsNumber, uint32 _duration) {
        owner = msg.sender;
        ticketPrice = _ticketPrice;
        ticketsNumber = _ticketsNumber;
        duration = _duration;
    }

    function getTicketPrice() public view returns (uint256)  {
        return ticketPrice;
    }

    function getTicketsNumber() public view returns (uint32)  {
        return ticketsNumber;
    }

    function getDuration() public view returns (uint32)  {
        return duration;
    }
    
    function buyTickets(uint256 amount) public payable {

        require(msg.value >= amount * ticketPrice * weiPrice);
        require(ticketsNumber >= amount, "Not enough tickets to complete this purchase.");
        while (amount != 0) {
            players.push(payable(msg.sender));
            ticketsNumber--;
            amount--;
        }
        //players[index].transfer(...);
    }
}