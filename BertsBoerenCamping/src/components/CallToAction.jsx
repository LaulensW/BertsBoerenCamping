import React from 'react';
import './CallToAction.css';
import Campingplekken from './Campingplekken';

const CallToAction = () => {
    return(
        <>
        <p1>Van boerderij naar camping </p1>
        <h1>Van boerderij naar camping</h1>
        <p>Een ontspanning voor alle leeftijden</p>
        <button className="boeken-button">NU BOEKEN</button>
        <img src="../images/CTA_Achtergrond.png" alt="Call To Action Achtergrond" className="cta-achtergrond"/>  

          <h3>ONZE CAMPINGPLEKKEN</h3>
          <p2>onze campingplekken</p2>
        
          <Campingplekken 
                name="Campingplek A"
          />
          <Campingplekken 
                name="Campingplek B"  
          />
          <Campingplekken 
                name="Campingplek C"
          />
        </>
    );
};

export default CallToAction;