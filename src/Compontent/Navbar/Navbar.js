import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { Button } from "../Button/Button";
import { SiCodepen } from "react-icons/si";
import "./Navbar.css";
import "../../App.js";

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick (false);

    const showButton =() => {
        if (window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect (()=>{
        showButton();
    },[]);
    window.addEventListener("resize",showButton)
    return (
      <>
      <nav className="navbar">
          <div className="navbar-container">
              <Link to="/Portfolio" className="navbar-logo" onClick={closeMobileMenu}>
                 HI, THIS IS A PORTFOLIO <SiCodepen className='fab fa-typo3'/>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click?"fas fa-times":"fas fa-bars"}/>
              </div>
              <ul className={click ? "nav-menu active":"nav-menu"}>
                  <li className='nav-item'>
                      <Link to="/Home" className='nav-links' onClick={closeMobileMenu}>
                          Travel Page
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                        DashBoard
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                          Sales
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                          Sign Up
                      </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
      </nav>
      </>
    )
}

export default Navbar
