const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Gast } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// koppeling maken gast -> http://localhost:3001/gast

// gast aanmaken
router.post('/', async (req, res) => {
    const post = req.body;
    await Gast.create(post);
    res.json(post);
});

// alle gasten ophalen
router.get('/', async (req, res) => {
    const lijstGasten = await Gast.findAll({
    });
    res.json(lijstGasten);
});

// verwijder een gast (+ gekoppelde boekingen worden automatisch ook verwijderd)
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Gast.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
});

module.exports = router;