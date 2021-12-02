# crypto-lottery
crypto-lottery is an ethereum decentralized application project

##### features
- buy lottery ticket
- make your own lottery with custom rules
- earn money (cryptocurrency gambling)

##### how it works
- wallets are used in place of user accounts
- smart-contract is deployed to blockchain to serve as backend
- frontend exposes the web user interface

![fig1][1]

##### how to run backend
TODO

##### how to run frontend
```bash
node --version
v16.0.0
npm --version
7.10.0
yarn --version
1.22.17
```
be sure to replace ```<key>``` with your Alchemy API Key
```bash
cd frontend
echo 'REACT_APP_ALCHEMY_KEY = "wss://eth-ropsten.alchemyapi.io/v2/<key>"' > .env
yarn add @alch/alchemy-web3
yarn install
yarn upgrade
yarn start
```

##### development tools
- Hardhat (ethereum development environment)
- Alchemy (blockchain developer platform)
- Ropsten (test-net for live testing with fake ETH)
- Metamask (cryptocurrency wallet as browser extension)
- Vue.js (JavaScript framework)

##### languages
- HTML
- CSS
- JavaScript
- Solidity

##### team
- damien.fangous@etu.hesge.ch
- david.laroche@etu.hesge.ch
- deniz.koprulu@etu.hesge.ch
- besmir.silka@etu.hesge.ch
- vincent.naf@etu.hesge.ch

##### ressources
- [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)


[1]: https://user-images.githubusercontent.com/12046663/38449785-ad633be8-39d9-11e8-995e-f9e947a6f35e.png
