import React from 'react';
import Connection from './Connection';


const Header = () => {

  const {render, walletAddress} = Connection()

  return {
      walletAddress,
      render:(
    <header className='header'>
        <h1>Crypto Lottery</h1>
        {render}
    </header>
  )}
}

export default Header
