import React from "react";
import CreateLottery from "./CreateLottery";
import { createLottery } from "../util/interact.js";

const Body = ({walletAddress}) => {
  const handleCreateLottery = async (lottery) => {
    try {
      await createLottery(walletAddress, lottery);
      console.log("lotteryCreated :", lottery);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateLottery
      createLottery={handleCreateLottery}
      disabled={walletAddress.length === 0}
    />     
  );
};

export default Body;
