const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Kampeerplek } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// koppeling maken http://localhost:3001/kampeerplek

// Haal alle kampeerplekken op
router.get('/', async (req, res) => {
    const lijstVanKampeerplekken = await Kampeerplek.findAll();
    res.json(lijstVanKampeerplekken);
});

module.exports = router;