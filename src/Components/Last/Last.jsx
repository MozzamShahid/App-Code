import React from 'react'
import './Last.css'
import VideoShow from '../../assets/workingofcode.mp4'
import Imagebin from '../../assets/imgbin.png'
import Imagebtn from '../../assets/img-btn.svg'

const Last = () => {
  return (
    <div className="bin">
    <div className="lastmain">

        <div className="lastl">
        <div className="lastlchild">
                <span className="head">3 Simple Steps SSDK</span>
                <div className="bullets">
                    <span>✅ Go to Order Page select all Orders</span>
                    <span>✅ Click on Export and download csv</span>
                    <span>✅ Upload the csv file</span>
                </div>
                <img src={Imagebtn} alt="" className='Image-btn'/>
            </div>
        </div>
        <div className="lastr">
            <div className="lastrchild">
                <video src={VideoShow} autoPlay muted loop controls></video>
            </div>
        </div>
    </div>
    <img src={Imagebin} alt="" className='Imagebin'/>
    </div>
  )
}

export default Last
