import React from 'react';
import './BookingPlattegrond.css';

const BookingPlattegrond = () => {
    return(
        <>
        <div className="plattegrond-en-legenda">
            <div className="plattegrond-total">
                    <h1 className="plattegrond-title">PLATTEGROND</h1> 
                    <p1 className="plattegrond-title-cursive">plattegrond</p1>  
     
                <div className="booking-plattegrond">
                    <div className="rectangle">
                        <div className="rectangle-plekken" style={{width:"174px", height:"180px", margin: "0 0 0 0px", backgroundColor: "#4A4034"}}></div>
                        <div className="rectangle-plekken" style={{width:"128px", height:"226px", margin: "0 0 0 840px", backgroundColor: "#4A4034"}}></div>
                        <div className="rectangle-plekken" style={{width:"174px", height:"271px", margin: "196px 0 0 0px", backgroundColor: "#4A4034"}}></div>
                        <div className="rectangle-plekken" style={{width:"128px", height:"166px", margin: "242px 0 0 840px", backgroundColor: "#4A4034"}}></div>
                        <div className="rectangle-plekken" style={{width:"190px", height:"194px", margin: "549px 0 0 775px", backgroundColor: "#4A4034"}}></div>
                        <div className="rectangle-plekken" style={{width:"166px", height:"219px", margin: "524px 0 0 0px", backgroundColor: "#A0AD9E"}}></div>
                        <div className="rectangle-plekken" style={{width:"72px", height:"32px", margin: "8px 0 0 94px", backgroundColor: "#DCADA8", borderRadius: "10px"}}></div>

                        <div className="rectangle-plekken" style={{width:"287px", height:"134px", margin: "0 0 0 223px"}}>A</div>
                        <div className="rectangle-plekken" style={{width:"267px", height:"134px", margin: "0 0 0 525px"}}>B</div>
                        <div className="rectangle-plekken" style={{width:"149px", height:"271px", margin: "228px 0 0 401px"}}>C</div>
                        <div className="rectangle-plekken" style={{width:"185px", height:"271px", margin: "228px 0 0 566px"}}>D</div>
                        <div className="rectangle-plekken" style={{width:"164px", height:"182px", margin: "561px 0 0 216px"}}>E</div>
                        <div className="rectangle-plekken" style={{width:"172px", height:"182px", margin: "561px 0 0 396px"}}>F</div>
                        <div className="rectangle-plekken" style={{width:"146px", height:"182px", margin: "561px 0 0 584px"}}>G</div>

                    </div>  
                </div>
            </div>

            <div className="legenda-total">
            <h1 className="legenda-title" style={{margin: "0 0 0 6%"}}>LEGENDA</h1>
            <p1 className="legenda-title-cursive">legenda</p1>  
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