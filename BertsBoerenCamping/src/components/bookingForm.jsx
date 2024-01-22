import React, { useState } from 'react';
import Calender from './Calender';
import './BookingForm.css';
import Wave from '../assets/about-banner-wave.svg';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    voornaam: '',
    tussenvoegsel: '',
    achternaam: '',
    email: '',
    telefoonnummer: '',
    volwassenen: 1,
    tieners: 0,
    kinderen: 0,
    accommodatieType: 'Selecteer',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="booking-form-container">
              <div className="banner">
            <p className="banner-title-cursive">reserveren</p>
            <h className="banner-title">RESERVEREN</h>
            <img src={Wave} alt="Wave" className="banner-wave"/>
            <img src="../images/Banner_Background.png" alt="Banner" className="banner-background"/>
        </div>
      <div className="info-box">
        <h2>Reserveer uw kampeerplaats en/of accommodatie. </h2>
        <p2>reserveer uw kampeerplaats en/of accommodatie. </p2>
        <a>
          Ontdek de charme van het platteland en reserveer uw onvergetelijke
          campingervaring bij ons. Wij zijn enthousiast om u te verwelkomen op
          onze sfeervolle boerderij. Vul het onderstaande formulier in om uw
          verblijf te boeken en geniet binnenkort van de rust en natuurlijke
          schoonheid die onze camping te bieden heeft. Bij vragen staan wij
          altijd voor u klaar. <br />
          <br></br>Tot snel op Berts Boeren Camping!
        </a>
      </div>
      
      <div className="boeking-box">
      <section className='customer-info'>
      <div className="form-section left-section">
        <form>
          <div>
            <label htmlFor="voornaam"></label>
            <input
              placeholder='Voornaam'
              type="text"
              id="voornaam"
              name="voornaam"
              value={formData.voornaam}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tussenvoegsel"></label>
            <input
              placeholder='Tussenvoegsel'
              type="text"
              id="tussenvoegsel"
              name="tussenvoegsel"
              value={formData.tussenvoegsel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="achternaam"></label>
            <input
              placeholder='Achternaam'
              type="text"
              id="achternaam"
              name="achternaam"
              value={formData.achternaam}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telefoonnummer"></label>
            <input
              placeholder='Telefoonnummer'
              type="tel"
              id="telefoonnummer"
              name="telefoonnummer"
              value={formData.telefoonnummer}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      <div className="form-section right-section">
        <form>
          <div className='right-side'>
            <div>
              <label htmlFor="volwassenen">Volwassene vanaf 16 jaar:</label>
              <select
                id="volwassenen"
                name="volwassenen"
                value={formData.volwassenen}
                onChange={handleSelectChange}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number + 1} value={number + 1}>
                    {number + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="tieners">Kinderen van 12 t/m 15 jaar:</label>
              <select
                id="tieners"
                name="tieners"
                value={formData.tieners}
                onChange={handleSelectChange}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="kinderen">Kinderen tot 11 jaar:</label>
              <select
                id="kinderen"
                name="kinderen"
                value={formData.kinderen}
                onChange={handleSelectChange}
              >
                {[...Array(10).keys()].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
</section>   

      <div className="form-section common-section">
      <label htmlFor="accommodatieType">Welke campingplek wilt u huren: </label>
        <select
          id="campingType"
          name="campingType"
          value={formData.campingType}
          onChange={handleSelectChange}
        >
          <option value="Selecteer">Selecteer</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
        </select>

        <label htmlFor="accommodatieType">Welke type accommodatie wilt u huren: </label>
        <select
          id="accommodatieType"
          name="accommodatieType"
          value={formData.accommodatieType}
          onChange={handleSelectChange}
        >
          <option value="Selecteer">Selecteer</option>
          <option value="Stacaravan">Stacaravan</option>
          <option value="Vakantiewoning">Vakantiewoning</option>
          <option value="Kampeerplaats">Kampeerplaats</option>
          <option value="Tent">Tent</option>
        </select>
      </div>

      <Calender />
      <button className='volgende'>Volgende</button>
    </div>
    <div className="total-box">
      <h2>Totaal</h2>
    </div>
  </div>
  );
};

export default BookingForm;