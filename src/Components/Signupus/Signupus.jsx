import React, {useState} from 'react'
import './Signupus.css'
import NWS from '../../assets/newshalfcut.png'

const Signupus = () => {
    const [user, setUser] = useState({
        firstName:"",lastName:"",urlStore:"",emails:"",passwords:"",
    })

const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
}
  return (
<div className="signm">
        <div className="signchild">
            <h1 className="sign-h">Signup</h1>
        </div>

        <div className="mainbox-sign">
            <div className="forshape">
            <div className="signsection">
                <form action="Signup" className="contactform">
                    <div className="firstlastname">
                    <input type="text"   name="firstName" 
                    value={user.firstName}
                    onChange={handleInputs}
                    placeholder="First Name" className="formstyle"/>
                    <input type="text" name="lastName" 
                    value={user.lastName}
                    onChange={handleInputs}
                    placeholder="Last Name" className="formstyle"/>
                    </div>
                    <input type="url"  name="urlStore" 
                    value={user.urlStore}
                    onChange={handleInputs}
                    placeholder="Store Url" className="StoreUrl"/>
                    <input type="email"  name="emails" 
                    value={user.emails}
                    onChange={handleInputs}
                    placeholder="Email" className="formstyle"/>
                    <input type="password"  name="passwords" 
                    value={user.passwords}
                    onChange={handleInputs}
                    placeholder="Password" className="formstyle"/>
                    <button type="Signup" className="signup">Signup</button>
                    <div className="styleforsignin"><span className="signin-link">Signin</span></div>
                    


                </form>

            </div>
            <div className="circle011"></div>
            </div>

            <div className="imagecontact">
                <img src={NWS} alt="" className='Nws-image'/>
            </div>
        </div>
    </div>
  )
}

export default Signupus
