import React from 'react';
import './IndividueleCampingplek.css';

export default function IndividueleCampingplek(props) {
    return(
        <div className="campeerplek">
            <img src="../images/Filler.png" alt="Filler" className="filler-photo"/>
            <h4 className="campingplek-name">{props.name}</h4>
            <p3 className="campingplek-price">{props.price}</p3>
            <p3 className="campingplek-description">{props.description}</p3>
        </div>
    );
};
