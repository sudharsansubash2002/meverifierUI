import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import './DashboardCss/Dashboard.css';
import Dashboard from './DashboardComponent/Dashboard';
import SwapPage from '../src/DashboardPage/SwapPage';
import PoolPage from '../src/DashboardPage/PoolPage';
import VeMercuryPage from '../src/DashboardPage/VeMercuryPage';
import FaucetPage from '../src/DashboardPage/FaucetPage';
import Sidebar from './DashboardComponent/Sidebar';
import Header from './DashboardComponent/Header';
import Launchpad from '../src/DashboardPage/Launchpad';
import Verifier from '../src/DashboardPage/Verifier';
import SettingsPage from '../src/DashboardPage/SettingsPage';
import DashboardFooter from './DashboardComponent/DashboardFooter';

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress } from './abi/abi';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';

const projectId = 'a0566b417a74c151a64e8e2f9c911652'



const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}
const testnet = {
  chainId: 84532,
  name: 'Base Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.basescan.org/',
  rpcUrl: 'https://base-sepolia-rpc.publicnode.com/'
}
createWeb3Modal({
  ethersConfig: defaultConfig({ 
    metadata,
    defaultChainId: 84532,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: 'https://base-sepolia-rpc.publicnode.com/' // used for the Coinbase SDK
  }),
  chains: [testnet],
  projectId
})

function App() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  console.log("app.js",localStorage.getItem("walletAddress"))
  if(isConnected){
    localStorage.setItem("walletAddress",address);
  }else{
    localStorage.setItem("walletAddress","");
  }

  const [balances, setBalances] = useState({
    me: 0.00,
    eth: 0.00
  });

  const balanceOfTokens = async () => {
    if (isConnected) {
      try {
        const url = "https://sepolia.base.org";
        const provider = new ethers.providers.JsonRpcProvider(url);
        const MEContract =  new ethers.Contract(BLACKTokenAddress,BLACKTokenABI,provider);
        const eth = await provider.getBalance(address);
        
        let MEBalance = ethers.utils.formatUnits(await MEContract.balanceOf(localStorage.getItem("walletAddress")),9);
        setBalances({
          me : MEBalance,
          eth: eth
        });

        console.log("Balances updated:", balances);
      } catch (error) {
        console.error("Error fetching token balances:", error);
      }
    }
    else{
      setBalances({
        me: 0.00,
        eth: 0.00
      });
    }
  };

  useEffect(() => {
      balanceOfTokens();
  }, [isConnected, address]);
  
  return (
    <div className='main_wrapper'>
     <Header gbalances={balances} balanceOfTokens={balanceOfTokens}/>
     <Sidebar/>
      <Routes>
        {/* <Route index path="/" element={<Launchpad balanceOfTokens={balanceOfTokens}/>} />  */}
        <Route index path="/" element={<Verifier balanceOfTokens={balanceOfTokens}/>} /> 
        {/* <Route path="/settingspage" element={<SettingsPage />} /> */}
      </Routes>
     <DashboardFooter />
    </div>
  );
}

export default App;
