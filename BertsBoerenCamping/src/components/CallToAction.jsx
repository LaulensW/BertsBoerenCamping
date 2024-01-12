import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return(
        <>
        <div className="call-to-action">
            <h1 className="cta-title">Van boerderij naar camping</h1>
            <p1 className="cta-title-cursive">Van boerderij naar camping </p1>
            <p className="cta-beschrijving">Een ontspanning voor alle leeftijden</p>
            <button className="boeken-button">NU BOEKEN</button>  
        </div>
        <img src="../images/CTA_Achtergrond.png" alt="Call To Action Achtergrond" className="cta-achtergrond"/>  
        </>
    );
};

export default CallToAction;