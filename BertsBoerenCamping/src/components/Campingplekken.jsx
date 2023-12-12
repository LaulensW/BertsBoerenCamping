import React from 'react';
import './Campingplekken.css';

export default function Campingplekken(props) {
    return(
        <div className="campingplek">
                <img src="../images/Filler.png" alt="Filler" className="filler-photo"/> 
                <h4>{props.name}</h4>
        </div>
    )  
}