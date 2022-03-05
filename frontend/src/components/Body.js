import React from "react";
import Connection from "./Connection";
import CreateLottery from "./CreateLottery";
import { createLottery } from "../util/interact.js";

const Body = () => {
  const handleCreateLottery = async (lottery) => {
    try {
      await createLottery(Connection.walletAddress, lottery);
      console.log("lotteryCreated :", lottery);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="body">
      <CreateLottery
        createLottery={handleCreateLottery}
        disabled={Connection.walletAddress.length === 0}
      />
    </div>
  );
};

export default Body;
