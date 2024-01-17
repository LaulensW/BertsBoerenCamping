// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();
const { appendFile } = require('fs');

// -M
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//

const port = 3001;

app.use(cors());
app.use(express.json());


const db = require('./server/models') // Dit zal over de bestanden in de map ./server/models gaan 
  /*// Stopt baliemedewerker gegevens in de database
  db.query(query, [voornaam, tussenvoegsel, achternaam, email, rol, hashedPassword], (err, results) => {
    if (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('User registered successfully');
    }
  });*/

  // -M
  // Stopt baliemedewerker gegevens in de database
  try {
    const newWerknemer = await Werknemer.create({
      voornaam,
      tussenvoegsel,
      achternaam,
      email,
      rol,
      hashedPassword
    });
    res.status(201).send('User registered successfully');
  } catch {
    console.error('Error registering user:', err);
    res.status(500).send('Internal Server Error');
  }
  //

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

// Routers
const gastRouter = require('./server/routes/gast');
app.use('/gast', gastRouter);
const boekingRouter = require('./server/routes/boeking');
app.use('/boeking', boekingRouter);
const kampeerplekRouter = require('./server/routes/kampeerplek');
app.use('/kampeerplek', kampeerplekRouter);
const werknemerRouter = require('./server/routes/werknemer');
app.use('/werknemer', werknemerRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
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


// -M   - maybe just try to implement this code in the new code with a fresh start without all the downloads, just a small reset since the merge wasn't going well either
//        maybe there is something inherently wrong. It should work but doesn't even work after the "const {email ..." part.
// Baliemedewerker Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  //
  console.log('Attempt to log in with email', email);

  try {
    console.log("1");
    // const result = db.query('SELECT * FROM baliemedewerker WHERE email = ?', [email]);
    //const existingwerknemer = await werknemer.findOne({where: {email}});
    const result = await baliemedewerker.fineOne({where: {email}});
    console.log("some text to not confuse me");
    console.log(result.length);

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







