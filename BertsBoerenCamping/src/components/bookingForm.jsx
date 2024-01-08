import React, { useState } from 'react';
import Calender from './Calender';
import './BookingForm.css'

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
      <div className="info-box">
        {/* Your information box content goes here */}
        <h2>Additional Information</h2>
        <h4>Ontdek de charme van het platteland en reserveer uw onvergetelijke campingervaring bij ons. Wij zijn enthousiast om u te verwelkomen op onze sfeervolle boerderij. Vul het onderstaande formulier in om uw verblijf te boeken en geniet binnenkort van de rust en natuurlijke schoonheid die onze camping te bieden heeft. Bij vragen staan wij altijd voor u klaar. <br />Tot snel op Berts Boeren Camping!</h4>
      </div>
      <div className="campeerplek">
      <section className='customer-info'>
      <div className="form-section left-section">
        <form>
          <div>
            <label htmlFor="voornaam">Voornaam:</label>
            <input
              type="text"
              id="voornaam"
              name="voornaam"
              value={formData.voornaam}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tussenvoegsel">Tussenvoegsel:</label>
            <input
              type="text"
              id="tussenvoegsel"
              name="tussenvoegsel"
              value={formData.tussenvoegsel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="achternaam">Achternaam:</label>
            <input
              type="text"
              id="achternaam"
              name="achternaam"
              value={formData.achternaam}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telefoonnummer">Telefoonnummer:</label>
            <input
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
        <label htmlFor="accommodatieType">Welke type accommodatie wilt u huren:</label>
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
    </div>
  </div>
  );
};

export default BookingForm;