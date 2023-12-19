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
                {renderCampingplek("CAMPINGPLEK A", "€100", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                {renderCampingplek("CAMPINGPLEK B", "€95", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                {renderCampingplek("CAMPINGPLEK C", "€97", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                {renderCampingplek("CAMPINGPLEK D", "€96", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")}
                {renderCampingplek("CAMPINGPLEK E", "€103", "Nulla aliquam tempor odio, eget viverra nisi posuere sit.")}
                {renderCampingplek("CAMPINGPLEK F", "€99", "Nulla aliquam tempor odio, eget viverra nisi posuere sit.")}
                {renderCampingplek("CAMPINGPLEK G", "€107", "Nulla aliquam tempor odio, eget viverra nisi posuere sit.")}
                {renderCampingplek("CAMPINGPLEK H", "€105", "Nulla aliquam tempor odio, eget viverra nisi posuere sit.", "Stroom")}
            </div>
           
        </>
    );
}

function renderCampingplek(name, price, description, stroom) {
    return (
        <div className="campeerplek" key={name}>
            <img src="../images/Filler.png" alt="Filler" className="filler-photo" />
            <div className="campeerplek-info">
                <div className="campingplek-header">
                    <h4 className="campingplek-name">{name}</h4>
                    <p3 className="campingplek-stroom">{stroom}</p3>
                </div>
                <div className="camping-text">
                    <p3 className="campingplek-price">{price}</p3>
                    <p3 className="campingplek-description">{description}</p3>
                </div>
            </div>
        </div>
    );
}


