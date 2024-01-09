// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();
const { appendFile } = require('fs');

const port = 3001;

app.use(cors());
app.use(express.json());


const db = require('./server/models') // Dit zal over de bestanden in de map ./server/models gaan 

// Routers
const gastRouter = require('./server/routes/gast');
app.use('/gast', gastRouter);
const boekingRouter = require('./server/routes/boeking');
app.use('/boeking', boekingRouter);
const kampeerplekRouter = require('./server/routes/kampeerplek');
app.use('/kampeerplek', kampeerplekRouter);
const werknemerRouter = require('./server/routes/werknemer');
app.use('/api', werknemerRouter);


db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});






