import React from 'react'
import './Footer.css'
import Logo from '../../assets/logomain.png'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footerchild">
        <img src={Logo} alt="" className='Logo'/>
        <div className="center">
            <div className="btn-001">
        <div className="main-btn">
                    <span>Built with love by Mozzam 😍 </span>
                </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Footer
