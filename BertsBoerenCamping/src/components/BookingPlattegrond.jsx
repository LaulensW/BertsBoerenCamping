import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPlattegrond.css';

const BookingPlattegrond = () => {
    return(
        <>
        <h1 className="plattegrond-title">PLATTEGROND</h1>
        <div className="booking-plattegrond">
            <div className="rectangle">
                <Link to="/about"><div className="rectangle-plekken" style={{width:"287px", height:"134px", margin: "32px 0 0 223px"}}>A</div></Link>
            </div>
        </div>      

        <div className="booking-legenda">
            <div className="rectangle-legenda">

            </div>
        </div>    
        
        </>
    )
};

export default BookingPlattegrond;