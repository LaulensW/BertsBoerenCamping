import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return(
        <>
        <div className="call-to-action">
            <p1>Van boerderij naar camping </p1>
            <h1>Van boerderij naar camping</h1>
            <p>Een ontspanning voor alle leeftijden</p>
            <button className="boeken-button">NU BOEKEN</button>
            <img src="../images/CTA_Achtergrond.png" alt="Call To Action Achtergrond" className="cta-achtergrond"/> 
            <img src="../images/CTA_Achtergrond_Responsive.png" alt="Call To Action" className="cta-achtergrond-responsive"/>
        </div>
        </>
    );
};

export default CallToAction;