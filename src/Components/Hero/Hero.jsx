import React from 'react'
import './Hero.css'
import IH from '../../assets/bg-imagehero.png'
import DC from '../../assets/Document.svg'
import AC from '../../assets/Frame2023.svg'
const Hero = () => {
  return (
    <div className="main">
      <div className="child">
        <h1 className="heading001">SAVE YOUR 💰</h1>
        <h2 className="subheading">With your data, get insights about your weak areas.</h2>

        <div className="childupload">
          <div className="right">
            <img src={DC} alt="not working" className='icon-1'/>
          </div>
          <div className="left">
            <span>Upload your csv file</span>
          <span>Shopify csv </span>
          </div>
        </div>

        <div className="review">
          <img src={AC} alt="" className="images" />
          <span>5.0 Star rated by e-com sellers</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
