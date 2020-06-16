import React, {useState} from 'react';
import { Link } from "react-router-dom";

import '../components/general.css';
import { MenuButton } from './layer.js'

function Menu() {
    const [scrolled, setScrolled] = useState(false);
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
           
            </div>
           
        </div>
    )
}

export default Menu;