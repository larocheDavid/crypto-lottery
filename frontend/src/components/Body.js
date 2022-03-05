import React from "react";
import Connection from "./Connection";
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
    <div id="body">
      <CreateLottery
        createLottery={handleCreateLottery}
        disabled={walletAddress.length === 0}
      />
    </div>
  );
};

export default Body;
