import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPlattegrond.css';

const BookingPlattegrond = () => {
    return(
        <>
        <h1 className="plattegrond-title">PLATTEGROND</h1>        
        <h1 className="legenda-title" style={{margin:"0 0 0 1161px"}}>LEGENDA</h1>
        <div className="booking-plattegrond">
            <div className="rectangle">
                <Link to="/about"><div className="rectangle-plekken" style={{width:"287px", height:"134px", margin: "32px 0 0 223px"}}>A</div></Link>
            </div>                  
        </div>
        
        <div className="rectangle-legenda">
                    <div className="rectangle-legenda-inside" style={{backgroundColor: "#A0AD9E"}}>Ingang</div>
                    <div className="rectangle-legenda-inside"style={{backgroundColor: "#DCADA8"}}>Toiletten</div>
                    <div className="rectangle-legenda-inside" style={{backgroundColor: "#828A66"}}>Campingplekken</div>
                </div>
        </>
    )
};

export default BookingPlattegrond;