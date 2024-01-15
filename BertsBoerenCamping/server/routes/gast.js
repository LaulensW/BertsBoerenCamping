const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Gast } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

router.post('/', async (req, res) => {
    const post = req.body;
    await Gast.create(post);
    res.json(post);
});

router.get('/', async (req, res) => {
    const lijstGastenBoeking = await Gast.findAll({
        include: [{
            model: Boeking,
            as: 'Boekings' // replace with the alias you used in the relation
        }]
    });
    res.json(lijstGastenBoeking);
});

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