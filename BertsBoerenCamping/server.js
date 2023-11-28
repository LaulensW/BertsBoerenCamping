const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'DjHsXXpxRyT89&',
  // C#1996@pins
  database: 'bertsboerencamping',
  // bertscamping
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Handle form submission
app.post('/api/gast', (req, res) => {
  const formData = req.body;

  // Assuming "Gast" is your table name
  const query = `INSERT INTO Gast (Voornaam, TussenVoegsel, Achternaam, Email, Telefoonnummer, Voorkeuren)
                  VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [
    formData.voornaam,
    formData.tussenVoegsel,
    formData.achternaam,
    formData.email,
    formData.telefoonnummer,
    formData.voorkeuren,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data inserted successfully:', result);
      res.json({ message: 'Booking form submitted successfully!' });
    }
  });
});

app.get('/api/gast', (req, res) => {
  // Assuming "Gast" is your table name
  const query = 'SELECT * FROM Gast';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data retrieved successfully:', result);
      res.json(result);
    }
  });
});

app.put('/api/gast/:id', (req, res) => {
  const formData = req.body;
  const id = req.params.id;

  // Assuming "Gast" is your table name
  const query = `UPDATE Gast
                 SET Voornaam=?, TussenVoegsel=?, Achternaam=?, Email=?, Telefoonnummer=?, Voorkeuren=?
                 WHERE IdGast=?`;

  const values = [
    formData.voornaam,
    formData.tussenVoegsel,
    formData.achternaam,
    formData.email,
    formData.telefoonnummer,
    formData.voorkeuren,
    id,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data updated successfully:', result);
      res.json({ message: 'Data updated successfully!' });
    }
  });
});

app.delete('/api/gast/:id', (req, res) => {
  const id = req.params.id;

  // Assuming "Gast" is your table name
  const query = 'DELETE FROM Gast WHERE IdGast=?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data deleted successfully:', result);
      res.json({ message: 'Data deleted successfully!' });
    }
  });
});


// Boeking Plaatsen (van front-end naar back-end)
app.post('/api/Booking', (req, res) => {
  const formData = req.body;

  const query = `INSERT INTO Booking (IdGast, Aankosmtdatum, Vertrekdatum, Accomodatietype)
                  VALUES (?, ?, ?, ?)`;

  const values = [
    formData.IdGast,
    formData.Aankosmtdatum,
    formData.Vertrekdatum,
    formData.AccomodatieType,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting booking data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Booking data inserted successfully:', result);
      res.json({ message: 'Booking form submitted successfully!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
