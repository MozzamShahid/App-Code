import React from 'react'
import './Signinus.css'
import NWSI from '../../assets/newsfirst.png'

const Signinus = () => {
  return (
    <div className="signm">
        <div className="signchild">
            <h1 className="sign-h">Sign in</h1>
        </div>

        <div className="mainbox-sign">
            <div className="forshape">
            <div className="signsection">
                <form action="Signup" className="contactform">
                    <input type="email" id="email" placeholder="Email" className="formstyle"/>
                    <input type="password" id="password" placeholder="Password" className="formstyle"/>
                    <button type="Signup" className="signup">Sign in</button>
                    <div className="styleforsignin"><span className="signin-link">Signup</span></div>
                    


                </form>

            </div>
            <div className="circle011"></div>
            </div>

            <div className="imagecontact">
                <img src={NWSI} alt="" className='Nwsi-image'/>
            </div>
        </div>
    </div>
  )
}

export default Signinus
