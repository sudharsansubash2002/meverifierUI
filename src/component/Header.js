import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import header_logo from '../assets/images/HomePage/header_logo.svg';
import header_logo from '../assets/images/HomePage/mercurylogonew.svg';

//import header_logob from '../assets/images/HomePage/Blacknewlogo.svg';
import LaunchAppModal from '../DashboardComponent/Launchapppop.js';


const Header = () => {

    const [active, setactive] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleClose4 = () => setOpen4(false);

    const onactive = () => {
        setactive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }

    const remove_menu = () => {
        const doc = document.querySelector(".header_main_block");
        doc.classList.remove("open_menu");
        document.documentElement.classList.remove("cm_overflow");
      }

    const handleOpen4 = () => { setOpen4(true) };
    
    return (
        <div className={active ? "open_menu" : ""}>
            <header className="sticky">
                <Container>
                    <div className="in_header_block">
                        <div className="logo_hold">
                            <a href="#0">
                                <img src={header_logo} alt="logo" className="img-fluid" />
                            </a>
                        </div>
                        <div className="menu_block">
                            <div className="menu_list">
                                <ul className="navbar_nav">
                                    <li className="active nav-btn" data-row-id="banner_wrapper">
                                        <a href="https://docs.mecollateral.com/" target="_blank" rel="noreferrer" className="scroll_trigger">
                                            Docs
                                        </a>
                                    </li>
                                    <li className="nav-btn">
                                        {/* <a href="https://github.com/MercuryFi/Whitepaper/blob/main/Mercury%20Stableswap%20Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            WhitePaper
                                        </a> */}
                                        <a href="https://github.com/mecollateral/Whitepaper/blob/main/ME_Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li className="nav-btn">
                                        {/* <a href="https://github.com/MercuryFi/Whitepaper/blob/main/Mercury%20Stableswap%20Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            WhitePaper
                                        </a> */}
                                      <Link to="/dashboard" style={{"margin-top": "0.5rem!important"}}>LaunchApp</Link>

                                        {/* <a href="#0"  onClick={handleOpen4}>
                                            LaunchApp
                                        </a> */}
                                    </li>
                                    {/* <li>
                                        <Link to="/dashboard" onClick={remove_menu}> */}
                                        {/* <Link to="#0" onClick={remove_menu}> */}
{/* 
                                            LaunchApp
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="menu_btn"></div>
                        </div>
                        <div className="menu_toggle_btn" onClick={onactive}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>
                      
                    </div>
                    <LaunchAppModal open={open4} handleclose={handleClose4} />
                </Container>
            </header>
        </div>
    )
}

export default Header;