import { Link } from "react-router-dom";
import Logo from "./Logo(1).png";
import '../css/landingpage.css'
import React from 'react'


function LandingPage  () {
    return ( 
        <>
            <div className="landing-page">
                <div className="nav-bar">
                    <h2 className="name">P<div className="logo-mic"><img src="logoimg.png" alt="" /></div>D<span>CLUB</span></h2>
                    <img src={Logo} alt="The company Logo"/>
                    <Link to='/Login' className='login-link'>Login</Link>
                </div>


                <div className="body">

                    <div className="landing-title">
                        <h1><span className="connect">Connect</span> and Get the best <span className="podcast">Podcast</span> experience <br /> Today.</h1>
                            <p> <span className="num1">Connect</span> <span className="num2">and Get the best</span><br/> <span className="num3"> Podcast</span> <span className="num4">experience</span> <br/><span className="num5">Today</span></p>
                        <Link to='/Signup' className="signup-link">Get Started</Link>
                    </div>

                    <div className="image">
                        <div className="circle">
                            <div className="div">
                            </div>
                            <img className="micimg" src="mic.png" alt="" />
                            <img className="playimg" src="play.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;