const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'DjHsXXpxRyT89&',
  database: 'bertsboerencamping'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Handle form submission
app.post('/api/gast', (req, res) => {
  const formData = req.body;

  // Assuming "gast" is your table name
  const query = 'INSERT INTO gast (voornaam, achternaam, email, telefoonnummer, voorkeuren, datum) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [
    formData.voornaam,
    formData.achternaam,
    formData.email,
    formData.telefoonnummer,
    formData.voorkeuren,
    formData.datum,
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

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});