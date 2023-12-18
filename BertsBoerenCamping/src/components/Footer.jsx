import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <div className="footer-container">
            <div className="footer">
                <div className="footer-heading-1">
                    <h6 className="heading">BOEKEN</h6>
                    <p className="heading-cursive">boeken</p>
                    <a href="#">Boeken</a>
                </div>
                <div className="footer-heading-2">
                    <h6 className="heading">OVER ONS</h6>
                    <p className="heading-cursive">over ons</p>
                    <a href="#">Over ons</a>
                </div>
                <div className="footer-heading-3">
                    <h6 className="heading">CONTACT</h6>
                    <p className="heading-cursive">contact</p>
                    <img src="../images/footer-facebook.png" width="40px"/>
                    <br></br>
                    <a href="#">info@example.com</a>
                    <p className="'heading-email"></p>
                    <label for="footer-email">Maandelijkse nieuwsbrief</label><br></br>
                    <input type="email" placeholder="Email" id="footer-email"/>
                    <br></br>
                    <input type="submit" placholder="Verzenden" id="footer-email-btn"/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;