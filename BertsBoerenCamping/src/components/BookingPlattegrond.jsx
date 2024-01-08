import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPlattegrond.css';

const BookingPlattegrond = () => {
    return(
        <>
        <div className="plattegrond-en-legenda">
            <div className="plattegrond-total">
            <h1 className="plattegrond-title">PLATTEGROND</h1>        
                <div className="booking-plattegrond">
                    <div className="rectangle">
                        <Link to="/about"><div className="rectangle-plekken" style={{width:"287px", height:"134px", margin: "32px 0 0 223px"}}>A</div></Link>
                    </div>  
                </div>
            </div>

            <div className="legenda-total">
            <h1 className="legenda-title">LEGENDA</h1>
                <div className="rectangle-legenda">
                    <div className="rectangle-legenda-inside" style={{backgroundColor: "#A0AD9E"}}>Ingang</div>
                    <div className="rectangle-legenda-inside"style={{backgroundColor: "#DCADA8"}}>Toiletten</div>
                    <div className="rectangle-legenda-inside" style={{backgroundColor: "#828A66"}}>Campingplekken</div>
                </div>   
            </div>  
        </div>
        </>
    )
};

export default BookingPlattegrond;