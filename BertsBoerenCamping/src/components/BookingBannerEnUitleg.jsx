import React from 'react';
import './BookingBannerEnUitleg.css';
import BookingWave from '../assets/booking-banner-wave.svg';

const Banner = () => {
    return(
        <>
        <div className="banner">
            <p className="banner-boeken-title-cursive">boeken</p>
            <h className="banner-boeken-title">BOEKEN</h>
            <img src={BookingWave} alt="banner wave" className="banner-wave"/>
            <img src="../images/Booking_Banner.png" className="booking-banner"/>
        </div>

        <div className="boeken-uitleg">
        <h3 className="hoe-moet-je-boeken-title">HOE MOET JE BOEKEN</h3>
        <p3 className="hoe-moet-je-boeken-title-cursive">hoe moet je boeken</p3>
        <p3 className="boeken-uitleg-tekst">Onze boekingspagina heeft een simpele, klikbare plattegrond. Deze plattegrond is voor het creëren van een visueel van onze camping. Naast deze plattegrond is er ook een legenda afgebeeld, waardoor u kunt zien welke kleuren er zijn en wat ze betekenen. De campingplekken die te reserveren zijn zijn gelabeld van A tot G. Als u op een campingplek of het donkergroene vlak klikt, dan kunt u een reservering aanmaken voor die gekozen campingplek. De informatie, zoals beschikbare dagen en foto’s zijn toegevoegd voor die campingplek en veranderen elke keer wanneer een nieuwe campingplek is geselecteerd.</p3>
        </div>
        </>
    );
};
export default Banner;