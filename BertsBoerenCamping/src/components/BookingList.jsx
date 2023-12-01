import React, { useState, useEffect } from 'react';
import './BookingList.css';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking data when the component mounts
    fetch('http://localhost:3001/api/gast')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    // Update the local state (remove the booking from the list)
    setBookings(prevBookings => prevBookings.filter(booking => booking.IdGast !== id));

    // Make a request to delete the booking from the database
    fetch(`http://localhost:3001/api/gast/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div className="booking-list-container">
      <h2>Reserveringen</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.IdGast} className="booking-item">
            <div className="booking-details">
              <strong>Name:</strong> {booking.Voornaam} {booking.TussenVoegsel} {booking.Achternaam}<br />
              <strong>Email:</strong> {booking.Email}<br />
              <strong>Phone:</strong> {booking.Telefoonnummer}<br />
              <strong>Preferences:</strong> {booking.Voorkeuren}<br />
            </div>
            <button className="booking-delete-button" onClick={() => handleDelete(booking.IdGast)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;