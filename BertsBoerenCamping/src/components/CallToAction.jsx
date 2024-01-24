import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
    return(
        <>
        <div className="call-to-action">
            <p1 className="cta-title-cursive">Van boerderij naar camping </p1>
            <h1 className="cta-title">Van boerderij naar camping</h1>
            <p>Een ontspanning voor alle leeftijden</p>
            <Link to="/booking"><button className="boeken-button">NU BOEKEN</button></Link>
            <img src="../images/CTA_Achtergrond.png" alt="Call To Action Achtergrond" className="cta-achtergrond"/>   
            <img src="../images/CTA_Achtergrond_Responsive.png" alt="Call To Action" className="cta-achtergrond-responsive"/>
        </div>
        <img src="../images/CTA_Achtergrond.png" alt="Call To Action Achtergrond" className="cta-achtergrond"/>  
        </>
    );
};

export default CallToAction;