const express = require('express');
const router =  express.Router(); // Dit is een express router object
const bcrypt = require('bcrypt'); // Add this line
const { Werknemer } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// -M
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
//

// Baliemedewerker registreren
router.post('/register', async (req, res) => {
    const { voornaam, tussenvoegsel, achternaam, email, rol, wachtwoord } = req.body;
  
    // Het wachtwoord wordt gehashed voordat het opgeslagen wordt in de database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(wachtwoord, salt);
  
    // Stopt baliemedewerker gegevens in de database
    try {
      const newWerknemer = await Werknemer.create({
        voornaam,
        tussenvoegsel,
        achternaam,
        email,
        rol,
        wachtwoord: hashedPassword
      });
      res.status(201).send('User registered successfully');
    } catch (err) {
      console.error('Error registering user:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  
  /*// Baliemedewerker login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingWerknemer = await Werknemer.findOne({ where: { email } });
      if (existingWerknemer) {
        const match = await bcrypt.compare(password, existingWerknemer.wachtwoord);
        if (match) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid password' });
        }
      } else {
        res.status(404).json('User not found');
      }
    } catch (err) {
      console.error('Error retrieving user:', err);
      res.status(500).json('Internal Server Error');
    }
  });*/


  // -M   - maybe just try to implement this code in the new code with a fresh start without all the downloads, just a small reset since the merge wasn't going well either
  //        maybe there is something inherently wrong. It should work but doesn't even work after the "const {email ..." part.
  // Baliemedewerker Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingWerknemer = await Werknemer.findOne({ where: { email } });
      if (existingWerknemer) {
        const match = await bcrypt.compare(password, existingWerknemer.wachtwoord);
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


module.exports = router;