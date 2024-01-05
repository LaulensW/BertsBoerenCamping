import React from 'react';
import './AboutTeam.css';
import Wave from '../assets/team-wave.svg';

export default function OnsTeam() {
    return(  
        <>
        <img src={Wave} alt="ons-team-wave" className="ons-team-wave"/> 
        <div className="ons-team">
            <div className="title-combo">
                <h className="ons-team-title">ONS TEAM</h>
                <p className="ons-team-title-cursive">ons team</p> 
            </div>
            <div className="team-total">
                {renderProfiel('Filler.png', "Sakura", "Manager")}
                {renderProfiel('Filler.png', "Chaewon", "Manager")}
                {renderProfiel('Filler.png', "Yunjin", "Manager")}
                {renderProfiel('Filler.png', "Kazuha", "Manager")}
                {renderProfiel('Filler.png', "Eunchae", "CEO")}
            </div>
        </div>
        
        </>
    );
};

function renderProfiel(photo, name, position){
    return(
    <div className="team-profile" key={name}>
         <div className="team-info">
            <img src={`/images/${photo}`} alt="profiel" className="team-image" />
            <p3 className="team-employee">{name}</p3>
            <p3 className="team-position">{position}</p3>
        </div>
    </div>
    );
}
