import React from 'react';
import './AboutBanner.css';
import Wave from '../assets/about-banner-wave.svg';

const Banner = () => {
    return(  
        <>
        <div className="banner">
            <p className="banner-title-cursive">over ons</p>
            <h className="banner-title">OVER ONS</h>
            <img src={Wave} alt="Wave" className="banner-wave"/>
            <img src="../images/Banner_Background.png" alt="Banner" className="banner-background"/>
        </div>
        
        <img src="../images/Filler.png" className="wie-zijn-wij-photo"/>
        </>
    );
};

export default Banner;