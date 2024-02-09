import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../../assets/logo.png';
import Profile from '../../assets/left.svg';
const Header = () => {
  return (
    <div className="header">

      <div className="logo"><img src={Logo} alt="" className='logo'/></div>
      
      <div className="menu">
        <ul className='menu-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Ai Tools</li>
        </ul>
      </div>

    <div className="profile">
      <div className="right">
        <img src={Profile} alt="" className='profile'/>
      </div>
      <div className="left">
        <h2 className="maintext">Hello Mate 👋</h2>
        <h3 className="subheading01">Welcome Home</h3>
        <div className="sidebyside">
          <ul>
            <li><Link to="/signup">SignUp</Link></li>
            <li>/</li>
            <li><Link to="/signin">SignIn</Link></li>
          </ul>
        </div>
      </div>
      </div>      
        
    </div>
  )
}

export default Header
