import React from 'react';
import './AboutTeam.css';
import Wave from '../assets/team-wave.svg';

const OnsTeam = () => {
    return(  
        <>
        <img src={Wave} alt="ons-team-wave" className="ons-team-wave"/> 
        <div className="ons-team">
            <div className="ons-team-title-combo">
                <h className="ons-team-title">ONS TEAM</h>
                <p className="ons-team-title-cursive">ons team</p> 
            </div>
            <img src="../images/Filler.png" alt="profile" className="ons-team-profile-photo"/>
            <img src="../images/Filler.png" alt="profile" className="ons-team-profile-photo"/>
            <img src="../images/Filler.png" alt="profile" className="ons-team-profile-photo"/>
            <img src="../images/Filler.png" alt="profile" className="ons-team-profile-photo"/>
            <img src="../images/Filler.png" alt="profile" className="ons-team-profile-photo"/>
        </div>
        
        </>
    );
};

export default OnsTeam;