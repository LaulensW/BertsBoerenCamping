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
    datum: null,
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
      datum: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/gast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
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
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
      </div>
        <button className="booking-submit" type="submit">Klik hier om te boeken!</button>
      </form>
    </div>
  );
}

export default BookingForm;
  