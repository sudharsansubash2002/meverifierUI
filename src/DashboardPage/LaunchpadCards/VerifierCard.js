import React, { useState, useEffect, useRef } from 'react';
import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge, ProgressBar } from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import Box from '@mui/material/Box';
import Vemercury_page_logo from '../../assets/images/Dashboard/Vemercury_page_logo.svg';
import tick from '../../assets/images/HomePage/tick.png'
import cross from '../../assets/images/HomePage/cross.png'
import Modal from '@mui/material/Modal';
import { ethers } from 'ethers';
import auctionABI from '../LaunchpadContracts/DutchAuction/ABI.json';
import contractDetails from '../LaunchpadContracts/DutchAuction/contractDetails.json';
import CountdownWrapper from './snippets/CountdownWrapper';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';
// import { toast } from 'react-toastify';
import { DutchAuctionAddress } from '../../abi/abi';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import "../../toast-style-override.css";
import { createTxn , recordUserVisits, hasCompletedAllActivities} from "../../abi/firebasecode";
import { saveAs } from 'file-saver';
import { fetchPort3Data } from './snippets/ApiFetch';
import { Input } from '@mui/material';

const VerifierCard = ({ balanceOfTokens }) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider();
  const url = "https://base-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(url);

    const[bidLoader, setBidLoader] = useState(false);
    const[claimLoader, setClaimLoader] = useState(false);
    const[loader, setLoader] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [campaignId, setCampaignId] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleBidLoad = () => setBidLoader(true);
    const handleBidHide = () => setBidLoader(false);
    const handleClaimLoad = () => setClaimLoader(true);
    const handleClaimHide = () => setClaimLoader(false);
    const [avaxBalance, setAvaxBalance] = useState("");
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [address1, setadress1] = useState("");
    const [state1, setState1] = useState("");
    const [state11, setState11] = useState("");
    const [state22, setState22] = useState("");
    const [state33, setState33] = useState("");
    const [state44, setState44] = useState("");
    const [state55, setState55] = useState("");
    const [state66, setState66] = useState("");
    

 
const toastDiv = (txId,type) =>
(
    <div>
       <p> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer"><br/>View in Base Sepolia Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
</svg></a></p> 
    </div>
);

const changeAddress = (e) => {
  setadress1(e);
  setState1("");
}

const checkAddress = async () => {
  try {
    const [state, state1, state2, state3, state4, state5, state6] = await hasCompletedAllActivities(address1);
    setState1(state);
    setState11(state1);
    setState22(state2);
    setState33(state3);
    setState44(state4);
    setState55(state5);
    setState66(state6);
    console.log("state2:", state);
    toast.success(`Status is ${state}`);
  } catch (error) {
    console.error("Error checking address status:", error);
    toast.error("Error checking address status");
  }
};


  return (
    <>
    <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

    <div className='' >
    <Row >
      {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}> */}
        <div className='Pool_Page_main Vemercury_page_main' style={{ maxWidth: '480px', width: '100%' }}>
            <div className='Vemercury_page_main'>
                <div className='box_main_border'>
                  <div className='trade_now_block'>
                      <div>
                          <div className='Vemercury_box_logo'>
                              <img src={Vemercury_page_logo} height="35px" alt="" />
                              <h4>Verify Testers</h4>
                          </div>
                          
                      </div>
                    
                      <br/>
                      <div className='trade_now_max'>
                      <div className='trade_now_row_row'>
                      <div className='from_text_block'>
                                            <span className='Market_text_p'>ADDRESS</span>
                                            <input type="text" placeholder='' onChange={(e) => changeAddress(e.target.value)} value={address1} style={{"color": "white", "border-bottom": "1px solid white", "max-width" : "none"}}/>
                                        </div>
                                        </div>
                                        </div>
                        {/* <div>ADDRESS: <Input onChange={(e) => setadress1(e.target.value)} value={address1} style={{"color": "white"}}/></div> */}
                      {/* <div className='Confirm_btn_show' style={{"max-width": "none"}}> */}
                          <div className='hero_btn'>
                              <Button onClick={checkAddress}>Verify</Button>
                          {/* </div> */}
                          
                          {/* <Button onClick={DownloadWinners}>Download</Button>                */}
                      </div>
                  </div>
                </div>
            </div>
        </div>
        {/* </Col> */}
        {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}> */}
        <div className='Pool_Page_main Vemercury_page_main' style={{ maxWidth: '480px', width: '100%' }}>
            <div className='Vemercury_page_main'>
                <div className='box_main_border'>
                  <div className='trade_now_block'>
                      <div>
                          <div className='Vemercury_box_logo'>
                              <img src={Vemercury_page_logo} height="35px" alt="" />
                              <h4>Tester Status</h4>
                          </div>
                          
                      </div>
                    
                      <br/>
                      {/* <div className='trade_now_max'>
                      <div className='trade_now_row_row'>
                      <div className='from_text_block'>
                                            <span className='Market_text_p'>ADDRESS</span>
                                            <input type="text" placeholder='' onChange={(e) => changeAddress(e.target.value)} value={address1} style={{"color": "white", "border-bottom": "1px solid white", "max-width" : "none"}}/>
                                        </div>
                                        </div>
                                        </div> */}
                        {/* <div>ADDRESS: <Input onChange={(e) => setadress1(e.target.value)} value={address1} style={{"color": "white"}}/></div> */}
                      {/* <div className='Confirm_btn_show' style={{"max-width": "none"}}> */}
                          {/* <div className='hero_btn'>
                              <Button onClick={checkAddress}>Verify</Button> */}
                          {/* </div> */}
                          
                          {/* <Button onClick={DownloadWinners}>Download</Button>                */}
                      {/* </div> */}
                      {/* Status content */}
          {(state1 === true || state1 === false) && (
            <>
              {state11 === true ? <><img src={tick} height="25px" alt="" /> Swap<br/></> 
              : <><img src={cross} height="25px" alt="" /> Swap<br/></>}
              {state22 === true ? <><img src={tick} height="25px" alt="" /> Add Liquidity<br/></> 
              : <><img src={cross} height="25px" alt="" />Add Liquidity<br/></>}
              {state33 === true ? <><img src={tick} height="25px" alt="" />Stake ME<br/></> 
              : <><img src={cross} height="25px" alt="" />Stake ME<br/></>}
              {state44 === true ? <><img src={tick} height="25px" alt="" />Stake LP<br/></> 
              : <><img src={cross} height="25px" alt="" />Stake LP<br/></>}
              {state55 === true ? <><img src={tick} height="25px" alt="" />Burn ME<br/></> 
              : <><img src={cross} height="25px" alt="" />Burn ME<br/></>}
              {state66 === true ? <><img src={tick} height="25px" alt="" />Launchpad Contribution<br/></> 
              : <><img src={cross} height="25px" alt="" />Launchpad Contribution<br/></>}
            </>
          )}
                      
                  </div>
                </div>
            </div>
        </div>
        {/* </Col> */}
        </Row>
    </div>
  </>
  );
};
export default VerifierCard;