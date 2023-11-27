import React, { useState, useEffect } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking data when the component mounts
    fetch('http://localhost:3001/api/gast')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.IdGast}>
            <strong>Name:</strong> {booking.Voornaam} {booking.TussenVoegsel} {booking.Achternaam}<br />
            <strong>Email:</strong> {booking.Email}<br />
            <strong>Phone:</strong> {booking.Telefoonnummer}<br />
            <strong>Preferences:</strong> {booking.Voorkeuren}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;