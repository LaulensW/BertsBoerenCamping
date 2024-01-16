const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Gast } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

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

// verwijder een gast (+ boeking wordt automatisch verwijderd)
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Gast.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
});

// update een gast
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await Gast.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});



module.exports = router;