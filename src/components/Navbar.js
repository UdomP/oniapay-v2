import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard , FaBars, FaTimes } from "react-icons/fa";
import { Button } from './Button';
import './Navbar.css';
import './Button.css';
import { IconContext } from 'react-icons/lib';

function NavBar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button, setButton] = useState(true);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize' , showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className = "navbar">
                <div className = "navbar-container container">
                    <Link to = '/' className = "navbar-logo" onClick = {closeMobileMenu}>
                        <FaCreditCard className = "navbar-icon"/>
                        Oniapay
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        {click ? <FaTimes/> : <FaBars/> }
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/services' className = 'nav-links' onClick = {closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to = '/about' className = 'nav-links' onClick = {closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className = 'nav-btn'>
                            { button ? (
                              <Link to = '/sign-up' className = 'btn-link'>
                                  <Button buttonStyle = 'btn--outline'>Signup</Button>
                              </Link>  
                            ) : (
                                <Link to = '/sign-up' className = 'btn-link' onClick = {closeMobileMenu}>
                                    <Button buttonStyle = 'btn--outline' buttonSize = 'btn--mobile'>Signup</Button>
                                </Link>
                            )}
                        </li>
                        <li className = 'nav-btn'>
                            { button ? (
                              <Link to = '/log-in' className = 'btn-link'>
                                  <Button buttonStyle = 'btn--outline'>Login</Button>
                              </Link>  
                            ) : (
                                <Link to = '/log-in' className = 'btn-link' onClick = {closeMobileMenu}>
                                    <Button buttonStyle = 'btn--outline' buttonSize = 'btn--mobile'>Login</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
        </>
    );
}

export default NavBar
