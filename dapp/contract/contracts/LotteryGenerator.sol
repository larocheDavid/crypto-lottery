//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0;


contract Lottery {
    address payable private generator;
    address payable public owner;
    address payable[] public buyers;
    uint public endTime;
    uint public ticketPriceWei;
    bool private winnerIsPaid;

    function randInt() private view returns(uint) {
        return uint(block.difficulty+block.gaslimit+block.number+block.timestamp);
    }

    function isWinnerPaid() external returns(bool) {
        if (winnerIsPaid==false && endTime<block.timestamp) {
            winnerIsPaid = true;
            if (buyers.length==0) {
                owner.transfer(address(this).balance);
            } else {
                buyers[randInt() % buyers.length].transfer(address(this).balance);
            }
        }
        return winnerIsPaid;
    }

    function checkRewardWei() external view returns(uint) {
        return address(this).balance;
    }

    function buyTicket() payable external {
        require(msg.value>=ticketPriceWei);
        buyers.push(payable(msg.sender));
    }

    function getMyTicketCount() external view returns(uint) {
        uint count = 0;
        for (uint i=0;i<buyers.length;i++) {
            if (buyers[i] == payable(msg.sender)) {
                count++;
            }
        }
        return count;
    }

    constructor(address payable _owner, uint _durationSeconds, uint _ticketPriceWei) payable {
        generator = payable(msg.sender);
        owner = _owner;
        delete buyers;// empty the array
        ticketPriceWei = _ticketPriceWei;
        endTime = block.timestamp + _durationSeconds;
        winnerIsPaid = false;
    }

    // special functions
    receive() external payable {}
    fallback() external payable {}
}


contract LotteryGenerator {
    address payable[] public lotteryList;

    function createLottery(uint _durationSeconds, uint _ticketPriceWei) payable external returns(address payable) {
        address payable lottery = payable(new Lottery{value: msg.value}(payable(msg.sender), _durationSeconds, _ticketPriceWei));
        lotteryList.push(lottery);
        return lottery;
    }

    constructor() {}

    // special functions
    receive() external payable {}
    fallback() external payable {}
}
