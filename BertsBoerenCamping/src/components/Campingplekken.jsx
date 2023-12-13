import React from 'react';
import './Campingplekken.css';
import IndividueleCampingplek from './IndividueleCampingplek.jsx'


export default function Campingplekken() {
    return(
    <>
        <h3 className="onze-campingplekken">ONZE CAMPINGPLEKKEN</h3>
        <p3 className="onze-campingplekken-cursive">onze campingplekken</p3>
        <div className="campingplekken-total">
            < IndividueleCampingplek 
            name="CAMPINGPLEK A"
            price="€100"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK B"
            price="€95"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK C"
            price="€97"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK D"
            price="€96"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK E"
            price="€103"
            description="Nulla aliquam tempor odio, eget viverra nisi posuere sit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK F"
            price="€99"
            description="Nulla aliquam tempor odio, eget viverra nisi posuere sit."
            /> 
            < IndividueleCampingplek 
            name="CAMPINGPLEK G"
            price="€107"
            description="Nulla aliquam tempor odio, eget viverra nisi posuere sit."
            /> 
        </div>
    </>
    );
};
