require("dotenv").config();

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const web3 = createAlchemyWeb3(alchemyKey);

//const contractABI = require("../contract-abi.json");
//const contractAddress = "0xB65D2d02C64fc721131aCcB0E03a1Fa4c145FA93";

const contractABI = require("../Lotherum.json").abi;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const lotherumContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// export const loadCurrentMessage = async () => {
//   const message = await helloWorldContract.methods.message().call();
//   return message;
// };

export const createLottery = async (
  address,
  { name, ticketPrice, duration }
) => {
  console.log("creating lottery ...");
  const transactionParameters = {
    from: address, // must match user's active address.
    to: contractAddress, // Required except during contract publications.
    data: lotherumContract.methods
      .create_lottery(name, ticketPrice, 200, duration)
      .encodeABI(),
  };

  console.log("sending transaction :", transactionParameters);

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: (
        <span>
          ✅{" "}
          <a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>
            View the status of your transaction on Etherscan!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getLotteries = async () => {
  const lotteries = await lotherumContract.methods.lotteries(0).duration;
  console.log("This is the result ", lotteries);
  return lotteries;
};

// export const updateMessage = async (address, message) => {
//   //input error handling
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain.",
//     };
//   }

//   if (message.trim() === "") {
//     return {
//       status: "❌ Your message cannot be an empty string.",
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: helloWorldContract.methods.update(message).encodeABI(),
//   };

//   //sign the transaction
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       ),
//     };
//   } catch (error) {
//     return {
//       status: "😥 " + error.message,
//     };
//   }
// };
