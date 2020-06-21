import React, {useState} from 'react';
import { Link } from "react-router-dom";

import '../components/general.css';
import { MenuButton } from './layer.js'

function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const droppingdown = ()  => {
        setDropdown(!dropdown)
      };
    return(
        <div className='navMenu-container'>
            <div className='navMenu-group'>
                <div className='navMenu-options'>
                    <div className='logo'>
                        <Link to={'/'}>
                        <img src={require('../images/logo.png')} alt='Logo'/>
                        </Link>
                    </div>
                    
                    <Link>
                    <p>Features</p>
                    </Link>
                    <Link to={"/"}>
                    <p>Pricing</p>
                    </Link>
                    <Link to={"/"}>
                    <p>Blog</p>
                    </Link>
                    <Link to={"/login"}>
                    <MenuButton primary className="login-button-menu">Login</MenuButton>
                    </Link>
                    <Link to={"/register"}>
                    <MenuButton secondary className="register-button-menu">Register</MenuButton>
                    </Link>
                </div>
                <div className="narrow">
            <div className="icon-burger">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src={require("../images/logo.png")}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div onClick={droppingdown}>
                <img
                  alt="open-burger"
                  className={dropdown ? 'hide-menu' : "menu-icon"}
                  src={require("../images/burger-coral.png")}
                />
                <img
                  alt="close-burger"
                  className={dropdown ? "close-icon " : 'hide-menu'}
                  src={require("../images/nav-hamburger-close.png")}
                />
              </div>
            </div>
            <div
              className={
                dropdown ? " narrow-responsive" : "hide-menu"
              }
            >
              <Link to={"/"} className='menu-option'>
                <p>Features</p>
              </Link>
              <Link to={"/"} className='menu-option'>
                <p>Pricing</p>
              </Link>
              <Link to={"/"} className='menu-option'>
                <p>Blog</p>
              </Link>
              <Link to={"/login"} className='menu-option'>
                <p>Login</p>
              </Link>
              <Link to={"/register"} className='last-option'>
                <p>Register</p>
              </Link>
            </div>
          </div>          
            </div>           
        </div>
    )
}

export default Menu;