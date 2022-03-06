import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";

function App() {
  const {render, walletAddress} = Header()

  return (
    <div>
      {render}
      <div id="container">
      <Body walletAddress = {walletAddress} />
      
      </div>
    </div>
  );
}

export default App;
