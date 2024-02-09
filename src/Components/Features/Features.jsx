import React from 'react'
import './Features.css'
import Map2 from '../../assets/map1.png'

const Features = () => {
  return (
    <div className="main3">
        <div className="child3">
            <span className="heading">You know what people wanna know what when<br></br> they ask about your brand.</span>
            <div className="buttons">
                <div className="main-btn">
                    <span>Customer Demographics</span>
                </div>
                <div className="main-btn">
                    <span>Purchase Behavior</span>
                </div>
                <div className="main-btn">
                    <span>Best Time to Buy</span>
                </div>
                <div className="main-btn">
                    <span>Average Sales per Customer</span>
                </div>
                <div className="main-btn">
                    <span>Average Profit Margin</span>
                </div>
                <div className="main-btn">
                    <span>Return Rates</span>
                </div>
                <div className="main-btn">
                    <span>Customer Lifetime Value (CLV)</span>
                </div>
                <div className="main-btn">
                    <span>Popular Products</span>
                </div>
                <div className="main-btn">
                    <span>Areas with High Returns</span>
                </div>
                <div className="main-btn">
                    <span>+</span>
                </div>
            </div>
        </div>
        <div className="circle"></div>

    </div>
  )
}

export default Features
