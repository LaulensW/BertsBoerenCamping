require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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

  // Assuming "gast" is your table name
  const query = `INSERT INTO gast (voornaam, tussenvoegsel, achternaam, email, telefoonnummer, voorkeuren)
                  VALUES (?, ?, ?, ?, ?, ?)`;

  const values = [
    formData.voornaam,
    formData.tussenvoegsel,
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
  // Assuming "gast" is your table name
  const query = 'SELECT * FROM gast';

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

  // Assuming "gast" is your table name
  const query = `UPDATE gast
                 SET voornaam=?, tussenvoegsel=?, achternaam=?, email=?, telefoonnummer=?, voorkeuren=?
                 WHERE idGast=?`;

  const values = [
    formData.voornaam,
    formData.tussenvoegsel,
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

  // Assuming "gast" is your table name
  const query = 'DELETE FROM gast WHERE idGast=?';

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
app.post('/api/boeking', (req, res) => {
  const formData = req.body;

  const query = `INSERT INTO boeking (idGast, aankomstdatum, vertrekdatum, accomodatietype)
                  VALUES (?, ?, ?, ?)`;

  const values = [
    formData.idgast,
    formData.aankosmtdatum,
    formData.vertrekdatum,
    formData.accomodatietype,
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

// Alle boekingen ophalen
app.get('/api/boeking', (req, res) => {
  const query = 'SELECT * FROM boeking';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error retrieving booking data:' , err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Booking data recieved successfully:', result);
      res.json(result);
    }
  });
});

// Boeking informatie updaten
app.put('/api/boeking/:id', (req, res) => {
  const formData = req.body;
  const id = req.params.id;

  const query = `UPDATE boeking
                 SET idGast=?, aankomstdatum=?, vertrekdatum=?
                 WHERE idBooking=?`;

  const values = [
    formData.Idgast,
    formData.Aankosmtdatum,
    formData.vertrekdatum,
    id,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating booking data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Booking data updated successfully:', result);
      res.json({ message: 'Booking data updated successfully!' });
    }
  });
});

// Boeking verwijderen
app.delete('/api/boeking/:id', (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM boeking WHERE idBooking=?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting booking data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Booking data deleted successfully:', result);
      res.json({ message: 'Booking data deleted successfully!' });
    }
  });
});


// Baliemedewerker login
<<<<<<< Updated upstream
app.get('/users'), (req, res) => {
  
}

app.post('/dashboard', (req, res) => {
  const {username, password } = req.body; // req.body maakt de data beschikbaar van de front-end

  db.query('SELECT * FROM baliemedewerker WHERE idMedewerker = ? AND wachtwoord = ?', [username, password], (err, result) => {
      if (err) {
          res.status(500).send('Error authenticating user');
      } else if (result.length > 0) {
          res.status(200).send('Login successful');
=======
app.post('http://localhost:3001/api/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM baliemedewerker WHERE idMedewerker = ? AND wachtwoord = ?';
  const values = [username, password];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error retrieving login data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
>>>>>>> Stashed changes
      } else {
        res.json({ message: 'Login successful' });
      }
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
