const express = require('express');
const app = express();
const port = 3001; // Zelf port kiezen

const mysql2 = require ('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DjHsXXpxRyT89&',
    database: 'bertsboerencamping'
})

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});



app.get('/api/gast', (req, res) => { // de '/' moet matchen met die van front end (in app.jsx?).
    res.send('Hoi');
  });
  
  
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
