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
        <p3 className="boeken-uitleg-tekst">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis metus magna, nec congue eros placerat sed. Vestibulum quis fermentum enim, nec mattis ex. Vivamus malesuada lectus molestie elementum sagittis. Mauris commodo, ligula quis faucibus efficitur, nisl neque pretium tortor, ultricies pulvinar quam mi ac orci. Maecenas velit purus, lobortis pretium arcu non, hendrerit sodales felis. Donec iaculis mauris eu nulla porta, in maximus lacus volutpat. Nam eu mattis nunc. Pellentesque et ipsum id est condimentum hendrerit in et augue. Morbi convallis mauris eget ipsum venenatis, ac rutrum tellus malesuada.</p3>
        </div>
        </>
    );
};
export default Banner;