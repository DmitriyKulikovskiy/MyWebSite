import React from 'react';
import logo from '../../assets/logo.png'
import { useState } from 'react';
import './header.sass'
import Banner from '../main-page/body/body';

const Header = () => {
    const [navBar, showNavBar] = useState(false)

    const useNavBar = () => {
        showNavBar(!navBar)
    }

    return (
        <header className="header-area main-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo-area">
                            <a href='#'><img src={logo} alt="logo"/></a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div onClick={useNavBar} className="custom-navbar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>  
                        <div className="main-menu">
                            <ul className={navBar === false ? 'hide-main-menu' : 'open-main-menu'}>
                                <li className="active"><a href="index.html">home</a></li>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">schedule</a></li>
                                <li><a href="#">trainers</a></li>
                                <li><a href="#">blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="#">Blog Home</a></li>
                                        <li><a href="#">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">contact</a></li>
                                <li><a href="#">pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="s#">Service</a></li>
                                        <li><a href="#">Elements</a></li>
                                    </ul>
                                </li>
                                <li className="menu-btn">
                                    <a href="#" className="template-btn">book now</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;