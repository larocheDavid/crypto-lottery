import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

function App() {

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_durationSeconds",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_ticketPriceWei",
          "type": "uint256"
        }
      ],
      "name": "createLottery",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lotteryList",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];


  async function createLottery(durationSeconds, ticketPriceEther, initialPotEther) {
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const ticketPriceWei = ethers.utils.parseEther(ticketPriceEther);
    const initialPotWei = ethers.utils.parseEther(initialPotEther);
    const overrides = {value: initialPotWei};
    const reciept = await contract.createLottery(durationSeconds, ticketPriceWei, overrides);
    console.log(reciept);
  }


  let createLotteryText = 'empty';
  let durationSecondsText = '0';
  let ticketPriceEtherText = '0';
  let initialPotEtherText = '0';
  const handleCreateLotteryChange = (e) => {
    createLotteryText = e.target.value;
  }
  const handleDurationSecondsChange = (e) => {
    durationSecondsText = e.target.value;
  }
  const handleTicketPriceEtherChange = (e) => {
    ticketPriceEtherText = e.target.value;
  }
  const handleInitialPotEtherChange = (e) => {
    initialPotEtherText = e.target.value;
  }
  async function handleCreateLotterySubmit() {
    createLottery(durationSecondsText, ticketPriceEtherText, initialPotEtherText)
    .then(createLotteryText='created')
    .catch(console.error);
  }


  return (
    <div>
      <div>
        <form onSubmit={handleCreateLotterySubmit}>
          <div className="mb-3">
            <pre>createLotteryText <b>{createLotteryText}</b></pre>
            <input type="number" className="form-control" placeholder="0" onChange={handleDurationSecondsChange} value={durationSecondsText}/>
            <input type="number" className="form-control" placeholder="0" onChange={handleTicketPriceEtherChange} value={ticketPriceEtherText}/>
            <input type="number" className="form-control" placeholder="0" onChange={handleInitialPotEtherChange} value={initialPotEtherText}/>
            <button type="submit" className="btn btn-dark">createLottery()</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
