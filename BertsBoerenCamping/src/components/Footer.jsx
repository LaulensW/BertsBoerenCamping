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
                    <a href="#">Reserveren</a>
                </div>

                <div className="footer-heading-2">
                    <h6 className="heading">OVER ONS</h6>
                    <p className="heading-cursive">over ons</p>
                    <a href="#">Wie zijn wij</a>
                </div>

                <div className="footer-heading-3">
                    <h6 className="heading">CONTACT</h6> <p className="heading-cursive">contact</p>
                    <div className="img-logo">
                        <img src="../images/footer-facebook.png" className="logo-indi" width="40px"/>
                        <img src="../images/footer-instagram.png" className="logo-indi" width="40px"/>
                        <img src="../images/footer-linkedin.png" className="logo-indi" width="40px"/>
                    </div>
                    <br/>
                    <a href="#">Adres</a>
                    <a href="#">info@example.com</a>
                    <a href="#">+01 234 567 89</a>
                    <a href="#">+01 234 567 89</a>
                    <p className="'heading-email"></p>
                    <br/>
                    <label for="footer-email">Maandelijkse nieuwsbrief</label>
                    <input type="email" placeholder="Email" id="footer-email"/>
                    <br></br>
                    <input type="submit" placholder="Verzenden" id="footer-email-btn"/>
                </div>
            </div>
            <p className="bottom-text">©2023 BertsBoerenCamping</p>
            <p className="bottom-text">Terms</p>
            <p className="bottom-text">Privacy</p>
        </div>
        </>
    );
};

export default Footer;