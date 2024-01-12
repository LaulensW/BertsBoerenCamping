import React from 'react';
import './Campingplekken.css';
import CampingWave from '../assets/campingplek-wave.svg';

export default function Campingplekken() {
    return (
        <>
            <h3 className="onze-campingplekken">ONZE CAMPINGPLEKKEN</h3>
            <p3 className="onze-campingplekken-cursive">onze campingplekken</p3> 
            <img src={CampingWave}  alt='campingwave' className='wave'/>
            <div className="campingplekken-total">
                {renderCampingplek("CAMPINGPLEK A", "Filler.png", "€45 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK B", "Filler.png", "€36 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK C", "Filler.png", "€51 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK D", "Filler.png", "€30 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK E", "Filler.png", "€58 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK F", "Filler.png", "€42 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK G", "Filler.png", "€53 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
                {renderCampingplek("CAMPINGPLEK H", "Filler.png", "€48 per nacht", "Een campingplek geschikt voor campers, caravans en tenten. Beschikt ook stroom en drinkwater.")}
            </div>
           
        </>
    );
}

function renderCampingplek(name, filler, price, description, stroom) {
    return (
        <div className="campeerplek" key={name}>
            <img src={`/images/${filler}`} alt="campingplek" className="filler-photo" />
            <div className="campeerplek-info">
                <div className="campingplek-header">
                    <h4 className="campingplek-name">{name}</h4>
                </div>
                <div className="camping-text">
                    <p3 className="campingplek-price">{price}</p3>
                    <p3 className="campingplek-description">{description}</p3>
                </div>
            </div>
        </div>
    );
}


