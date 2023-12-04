import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    voornaam: '',
    tussenvoegsel: '',
    achternaam: '',
    email: '',
    telefoonnummer: '',
    voorkeuren: '',
    dateRange: [null, null],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateRange: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Step 1: Insert guest information into the "Gast" table
      const guestResponse = await fetch('http://localhost:3001/api/gast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voornaam: formData.voornaam,
          tussenvoegsel: formData.tussenvoegsel,
          achternaam: formData.achternaam,
          email: formData.email,
          telefoonnummer: formData.telefoonnummer,
          voorkeuren: formData.voorkeuren,
        }),
      });
  
      const guestData = await guestResponse.json();
  
      // Step 2: Insert booking information into the "Booking" table
      const bookingResponse = await fetch('http://localhost:3001/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          IdGast: guestData.insertId,
          Aankomstdatum: formData.dateRange[0],
          Vertrekdatum: formData.dateRange[1],
        }),
      });
  
      const bookingResult = await bookingResponse.json();
  
      console.log('Guest Response:', guestData);
      console.log('Booking Response:', bookingResult);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Voornaam:
        <input type="text" name="voornaam" value={formData.voornaam} onChange={handleChange} />
      </label>
      <label>
        tussenvoegsel:
        <input type="text" name="tussenvoegsel" value={formData.tussenvoegsel} onChange={handleChange} />
      </label>
      <label>
        Achternaam:
        <input type="text" name="achternaam" value={formData.achternaam} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Telefoonnummer:
        <input type="tel" name="telefoonnummer" value={formData.telefoonnummer} onChange={handleChange} />
      </label>
      <label>
        Voorkeuren:
        <input type="text" name="voorkeuren" value={formData.voorkeuren} onChange={handleChange} />
      </label>
      {/* Datepicker */}
      <div>
          <label>Datum:</label>
          <DatePicker
            selectsRange={true}
            startDate={formData.dateRange[0]}
            endDate={formData.dateRange[1]}
            onChange={(update) => {
              handleDateChange(update);
            }}
            isClearable={true}
          />
        </div>
        
        <button type="submit">Klik hier om te boeken!</button>
      </form>
    </div>
  );
}

export default BookingForm;
  