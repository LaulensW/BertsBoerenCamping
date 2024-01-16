const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Kampeerplek } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

router.get('/', async (req, res) => {
    const lijstVanKampeerplekken = await Kampeerplek.findAll();
    res.json(lijstVanKampeerplekken);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await Kampeerplek.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Kampeerplek.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
}); 

module.exports = router;