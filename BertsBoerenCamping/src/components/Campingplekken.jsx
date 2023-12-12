import React from 'react';
import './Campingplekken.css';
import IndividueleCampingplek from './IndividueleCampingplek.jsx'


export default function Campingplekken() {
    return(
    <>
        <h3 className="onze-campingplekken">ONZE CAMPINGPLEKKEN</h3>
        <p3 className="onze-campingplekken-cursive">onze campingplekken</p3>
        < IndividueleCampingplek 
            name="CAMPINGPLEK A"
        /> 
        < IndividueleCampingplek 
            name="CAMPINGPLEK B"
        /> 
    </>
    );
};
