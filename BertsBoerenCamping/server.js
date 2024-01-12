require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();

// -M
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//

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


//Baliemedewerker registreren
app.post('/api/register', async (req, res) => {
  const { voornaam, tussenvoegsel, achternaam, email, rol, wachtwoord } = req.body;

  // Het wachtwoord wordt gehashed voordat het opgeslagen wordt in de database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(wachtwoord, salt);

  //
  const query = `
  INSERT INTO baliemedewerker (voornaam, tussenvoegsel, achternaam, email, rol, wachtwoord)
  VALUES (?, ?, ?, ?, ?, ?)
  `;

  // Stopt baliemedewerker gegevens in de database
  db.query(query, [voornaam, tussenvoegsel, achternaam, email, rol, hashedPassword], (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('User registered successfully');
    }
  });
});
/*
// Baliemedewerker login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM baliemedewerker WHERE email = ?', [email], async (err, result) => {
    
    // Indien error -> log + status 500
    if (err) { 
      console.error('Error retrieving user:', err);
      res.status(500).json('Internal Server Error');

      //Indien opgevraagde email klopt -> door met gehashte wachtwoord checken
    } else { 
      if (result.length > 0) {
        const match = await bcrypt.compare(password, result[0].wachtwoord);
        if (match) {
          res.status(200).json({ message: 'Login successful' });
          

          // Hier ben ik mee bezig - Niek
          // db.query('SELECT * FROM baliemedewerker WHERE rol = ?', [rol], (err, result) => {
          // })
          
          // -M
          const user = { emailid: email }
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
          res.cookie('jwt', accessToken, {httpOnly: true, sameSite: 'None', secure: true});
          
          console.log('cookie set:', accessToken);
          //

        } else {
          res.status(401).json({ error: 'Invalid password' });
        }
      } else {
        res.status(404).json('User not found');
      }
    }
  });
});*/


// -M
// Baliemedewerker Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // const result = await db.QueryPromise('SELECT * FROM baliemedewerker WHERE email = ?', [email]);
    const result = db.query('SELECT * FROM baliemedewerker WHERE email = ?', [email]);

    if (result.length > 0) {
      const match = await bcrypt.compare(password, result[0].wachtwoord);
      if (match) {
        const user = { emailid: email }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.cookie('jwt', accessToken, { httpOnly: true, sameSite: 'None', secure: true });
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    console.error('Error retrieving user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//



// Invoeren gast gegevens
app.post('/api/gast', (req, res) => {
  const formData = req.body;

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

// Ophalen gast gegevens
app.get('/api/gast', (req, res) => {
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

  const query = `UPDATE gast
                 SET voornaam=?, tussenvoegsel=?, achternaam=?, email=?, telefoonnummer=?, voorkeuren=?
                 WHERE idgast=?`;

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

// Verwijderen gegevens gast
app.delete('/api/gast/:id', (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM gast WHERE idgast=?';

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

  const query = `INSERT INTO boeking (idgast, aankosmtdatum, vertrekdatum, accomodatietype)
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
                 SET idgast=?, aankomstdatum=?, vertrekdatum=?
                 WHERE idbooking=?`;

  const values = [
    formData.idgast,
    formData.aankosmtdatum,
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

  const query = 'DELETE FROM boeking WHERE idboeking=?';

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


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
