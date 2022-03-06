// SPDX-License-Identifier: HEPIA
pragma solidity ^0.8.12;

contract Lottery {

    address public owner;

    uint32 ticketPrice;
    uint32 ticketsNumber;
    address[] ticket;
    uint32 duration;

    constructor(uint32 _ticketPrice, uint32 _ticketsNumber, uint32 _duration) {
        owner = msg.sender;
        ticketPrice = _ticketPrice;
        ticketsNumber = _ticketsNumber;
        duration = _duration;
    }

    function getTicketPrice() public view returns (uint32)  {
        return ticketPrice;
    }

    function getTicketsNumber() public view returns (uint32)  {
        return ticketsNumber;
    }

    function getDuration() public view returns (uint32)  {
        return duration;
    }
    
    function buy(address buyer, uint32 n ) public returns (uint32) {

        while (n != 0 && ticketsNumber != 0) {
            ticket.push(buyer);
            ticketsNumber--;
            n--;
        }
        return ticketsNumber;
    }
}