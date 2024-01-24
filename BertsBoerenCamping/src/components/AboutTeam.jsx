import React from 'react';
import './AboutTeam.css';
import Wave from '../assets/team-wave.svg';

export default function OnsTeam() {
    return(  
        <>
        <img src={Wave} alt="ons-team-wave" className="ons-team-wave"/> 
        <div className="ons-team">
            <div className="title-combo">
                <h className="subtitle-title">ONS TEAM</h>
                <p className="subtitle-title-cursive">ons team</p> 
            </div>
            <div className="team-total">
                {renderProfiel('Boer-Bert-profile.png', "Boer Bert", "Eigenaar van de camping")}
                {renderProfiel('Baliemedewerker-profile-Sophie.png', "Sophie van der Linden", "Baliemedewerker")}
                {renderProfiel('Baliemedewerker-profile-Daan.png', "Daan van den Berg", "Baliemedewerker")}
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
