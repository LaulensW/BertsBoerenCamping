const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { kampeerplek } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

router.get('/', async (req, res) => { // bij sequelize gebruik je await zodat de code wacht op de uitkomst van de functie
    const lijstVanKampeerplekken = await kampeerplek.findAll();
    res.json(lijstVanKampeerplekken);
});

router.post('/', async (req, res) => {
    const post = req.body;
    await kampeerplek.create(post);
    res.json(post);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await kampeerplek.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await kampeerplek.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
}); 

module.exports = router;