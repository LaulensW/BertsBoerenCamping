const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { boeking } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// vraag alle boekingen op
router.get('/', async (req, res) => { // bij sequelize gebruik je await zodat de code wacht op de uitkomst van de functie
    const lijstVanBoekingen = await boeking.findAll();
    res.json(lijstVanBoekingen);
});

// gastId is de id van de gast die bij de boeking hoort
router.get('/:gastId', async (req, res) => {
    const lijstVanBoekingen = await boeking.findAll();
    res.json(lijstVanBoekingen);
});

// maak een nieuwe boeking aan
router.post('/', async (req, res) => {
    const post = req.body;
    await boeking.create(post);
    res.json(post);
});

// update een boeking
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await boeking.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});

// verwijder een boeking
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await boeking.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
}); 

module.exports = router;