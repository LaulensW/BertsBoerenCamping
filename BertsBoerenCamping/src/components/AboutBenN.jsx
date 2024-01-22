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
        <div className="bedrijven-nominaties-total">
            {renderBedrijfofNominatie("","")}
            {renderBedrijfofNominatie("","Filler.png")}
            {renderBedrijfofNominatie("","Filler.png")}
        </div>
    </div>


    <div className="bedrijven-nominaties">
        <div className="title-combo">
            <h className="subtitle-title">NOMINATIES DIE WIJ GEWONNEN HEBBEN </h>
            <p className="subtitle-title-cursive">nominaties die wij hebben gewonnen</p> 
        </div>
        <div className="bedrijven-nominaties-total">
            {renderBedrijfofNominatie("","Filler.png")}
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

