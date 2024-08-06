import { Link } from 'react-router-dom';
import Logo from './Logo(1).png';
import '../css/landingpage.css';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="nav-bar">
        <h2 className="name">
          P<div className="logo-mic"><img src="logoimg.png" alt="Logo" /></div>D<span>CLUB</span>
        </h2>
        <img src={Logo} alt="The company Logo" />
        <Link to='/login' className='login-link'>Login</Link>
      </div>
      <div className="body">
        <div className="landing-title">
          <h1>
            <span className="connect">Connect</span> and Get the best <span className="podcast">Podcast</span> experience <br /> Today.
          </h1>
          <p>
            <span className="num1">Connect</span> <span className="num2">and Get the best</span><br />
            <span className="num3"> Podcast</span> <span className="num4">experience</span> <br /><span className="num5">Today</span>
          </p>
          <Link to='/signup' className="signup-link">Get Started</Link>
        </div>
        <div className="information">
          <h2>Welcome to Forex Trading and Investment</h2>
          <p>Discover the world of forex trading and investment. Learn how to trade currencies, manage risks, and maximize your returns with our expert guidance and resources.</p>
          <h3>Why Invest in Forex?</h3>
          <ul>
            <li>24/5 Market Access</li>
            <li>High Liquidity</li>
            <li>Diverse Trading Options</li>
            <li>Potential for High Returns</li>
          </ul>
          <p>Join us today and start your journey towards financial independence with forex trading and investment.</p>
        </div>
        <div className="image">
          <div className="circle">
            <div className="div"></div>
            <img className="micimg" src="mic.png" alt="Mic" />
            <img className="playimg" src="play.png" alt="Play" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
