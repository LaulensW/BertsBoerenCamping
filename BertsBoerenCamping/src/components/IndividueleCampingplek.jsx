import React from 'react';
import './IndividueleCampingplek.css';

export default function IndividueleCampingplek(props) {
    return(
        <div className="campeerplek">
            <img src="../images/Filler.png" alt="Filler" className="filler-photo"/>
            <h4 className="campingplek-name">{props.name}</h4>
        </div>
    );
};
