import React from 'react'
import './Contactus.css'
import NW from '../../assets/newsletter.png'

const Contactus = () => {
  return (
    <div className="contactm">
        <div className="contactchild">
            <h1 className="contacth">Contact us</h1>
        </div>

        <div className="mainbox">
            <div className="forshape">
            <div className="contactsection">
                <form action="Subscribe" className="contactform">
                    <div className="firstlastname">
                    <input type="text" id="#firstname"   placeholder="First Name" className="formstyle"/>
                    <input type="text" id="#lastname" placeholder="Last Name" className="formstyle"/>
                    </div>
                    <input type="phone" id="phone" placeholder="Phone Number" className="phone"/>
                    <input type="email" id="email" placeholder="Email" className="formstyle"/>
                    <textarea name="" id="" cols="30" rows="5" className='inputstyle' placeholder="Tell us about your concern"></textarea>
                    <button type="submit" className="submit">Send us</button>


                </form>

            </div>
            <div className="circle01"></div>
            </div>
            <div className="imagecontact">
                <img src={NW} alt="" className='Nw-image'/>
            </div>
        </div>
    </div>
  )
}

export default Contactus
