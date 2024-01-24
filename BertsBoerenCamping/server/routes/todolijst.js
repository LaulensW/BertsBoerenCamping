const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { TodoLijst } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

router.post('/', async (req, res) => { // = http://localhost:3001/todolijst/
    const post = req.body;
    await TodoLijst.create(post);
    res.json(post);
});

router.get('/', async (req, res) => {
    const lijstTodoLijst = await TodoLijst.findAll({ 
    });
    res.json(lijstTodoLijst);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await TodoLijst.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
});

module.exports = router;