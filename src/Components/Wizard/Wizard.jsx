import React from 'react'
import './Wizard.css'

const Wizard = () => {
  return (
    <div className="main-1">
        <div className="insidem">
            <div className="ofa">
                <div className="left01">
                    <span>⏰</span>
                </div>
                <div className="right01">
                    <span>Save time </span>
                <span>Increase your sales by targeting in right location.</span>
                </div>
            </div>

            <div className="ofa">
                <div className="left01">
                    <span>💡</span>
                </div>
                <div className="right01">
                    <span>Data insights </span>
                <span>Learn about your customer and your product data.</span>
                </div>
            </div>

            <div className="ofa">
                <div className="left01">
                    <span>🌎</span>
                </div>
                <div className="right01">
                    <span>Location driven </span>
                <span>Sales comes from the best locations learn through it. </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wizard
