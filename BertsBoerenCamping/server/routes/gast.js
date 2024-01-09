const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { gast } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

router.get('/', async (req, res) => { // bij sequelize gebruik je await zodat de code wacht op de uitkomst van de functie
    const lijstVanGasten = await gast.findAll();
    res.json(lijstVanGasten);
});

router.get('/', async (req, res) => {
    const lijstVanGastenTotaal = await gast.findAll({
        include: [{
            model: gast,
            as: 'gast'
        }]
    });
    res.json(lijstVanGastenTotaal);
});

// Hier ben ik nu mee bezig -- Niek
// Ik wil graag in plaats van alleen de tabel boeking tegelijkertijd ook van gasten opvragen.
// Proberen meerdere gegevens te combineren als 1 output

// const { boeking, gast } = require('../models');

// router.get('/', async (req, res) => {
//     const lijstVanBoekingen = await boeking.findAll({
//         include: [{
//             model: gast,
//             as: 'gast' // replace with the alias you used in the relation
//         }]
//     });
//     res.json(lijstVanBoekingen);
// });

// Hier ben ik nu mee bezig -- Niek



router.post('/', async (req, res) => {
    const post = req.body;
    await gast.create(post);
    res.json(post);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await gast.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await gast.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
});

module.exports = router;