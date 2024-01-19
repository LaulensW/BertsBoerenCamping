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
        <p3 className="boeken-uitleg-tekst">Onze boekingspagina heeft een simpele plattegrond. Deze plattegrond is voor het creëren van een visueel van onze camping. Naast deze plattegrond is er ook een legenda afgebeeld, waardoor u kunt zien welke kleuren er zijn en wat ze betekenen. De campingplekken die te reserveren zijn zijn gelabeld van A tot G. Onder de plattegrond staat het reserveren. Het enige wat u hierbij hoeft in te vullen zijn uw persoonlijke gegevens, zoals uw naam, email telefoonnummer etc. Daarnaast kunt uw ook invullen welk soort accommodatie uw wilt huren en op welke plek uw dat wilt. Als laatst staat er een kalender met data waar uw uit kunt kiezen. </p3>
        </div>
        </>
    );
};
export default Banner;