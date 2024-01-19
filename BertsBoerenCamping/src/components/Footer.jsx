import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <>
        <div className="footer-container">
            <div className="footer">
                <div className="footer-heading-1">
                    <h6 className="heading">BOEKEN</h6>
                    <Link to="/booking">Boeken</Link>
                    <Link to="/booking">Reserveren</Link>
                </div>

                <div className="footer-heading-2">
                    <h6 className="heading">OVER ONS</h6>
                    <Link to="/about">Over Ons</Link>
                </div>

                <div className="footer-heading-3">
                    <h6 className="heading">CONTACT</h6>
                    <div className="img-logo">
                        <img src="../images/footer-facebook.png" className="logo-indi"/>
                        <img src="../images/footer-instagram.png" className="logo-indi"/>
                        <img src="../images/footer-linkedin.png" className="logo-indi"/>
                    </div>
                    <br/>
                    <a href="#">Adres</a>
                    <a href="#">info@example.com</a>
                    <a href="#">+01 234 567 89</a>
                    <a href="#">+01 234 567 89</a>
                    <br/>
                    <label for="footer-email">Maandelijkse nieuwsbrief</label>
                    <input type="email" placeholder="Email" id="footer-email"/>
                    <br/>
                    <input type="submit" placholder="Verzenden" id="footer-email-btn"/>
                </div>
            </div>

            <div className="bottom-text">
                <p className="bottom-text-indi">©2024 BertsBoerenCamping</p>
                <a href="#" className="bottom-text-indi">Terms</a>
                <a href="#" className="bottom-text-indi">Privacy</a>
            </div>
        </div>
        </>
    );
};

export default Footer;