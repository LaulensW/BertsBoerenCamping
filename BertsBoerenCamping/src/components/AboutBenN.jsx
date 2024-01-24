import React from 'react';
import './AboutBenN.css';

export default function BedrijvenEnNominaties(){
    return(
    <>
    <div className="bedrijven-nominaties">
        <div className="title-combo">
            <h className="subtitle-title">BEDRIJVEN DIE MET ONS WERKEN</h>
            <p className="subtitle-title-cursive">bedrijven die met ons werken</p> 
        </div>
        <div className="rectangle-achtergrond">
        <div className="bedrijven-nominaties-total">
            {renderBedrijfofNominatie("","Fake-logo-SFE.png")}
            {renderBedrijfofNominatie("","Fake-logo-GH.png")}
            {renderBedrijfofNominatie("","Fake-logo-ETT.png")}
        </div>
        </div>
    </div>


    <div className="bedrijven-nominaties">
        <div className="title-combo">
            <h className="subtitle-title">NOMINATIES DIE WIJ GEWONNEN HEBBEN </h>
            <p className="subtitle-title-cursive">nominaties die wij hebben gewonnen</p> 
        </div>
        <div className="rectangle-achtergrond">
        <div className="bedrijven-nominaties-total">
            {renderBedrijfofNominatie("","Fake-logo-SH.png")}
        </div>
        </div>
    </div>
    </>
    );
}

function renderBedrijfofNominatie(circle, logo){
    return(
    <>
    <div className="bedrijf-logo">
        <div className="bedrijf-nominatie-info">
            <div className="circle">{circle}</div>
            <img src={`/images/${logo}`} className="logo-image" />
        </div>
    </div>
    </>
    );
}

