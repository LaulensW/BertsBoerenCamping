const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Boeking, Gast, sequelize } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// gast + boeking aanmaken
router.post('/gastboeking', async (req, res) => {
    const { gastInput , boekingInput } = req.body; // destructuring

    const transaction = await sequelize.transaction();

    try {
        const createdGast = await Gast.create(gastInput, { transaction });

        const createdBoeking = await Boeking.create({ ...boekingInput, GastId: createdGast.id }, { transaction });

        await transaction.commit(); // wanneer beide transacties succesvol zijn, commit je de transactie

        res.json({ gastInput: createdGast, boekingInput: createdBoeking});

    } catch (error) {
        await transaction.rollback(); // wanneer een transactie fout is zal de transactie worden gerollbacked

        res.status(500).json({ error: error.message });
    }
});

// boeking aanmaken
router.post('/', async (req, res) => {
    const boekingInput = req.body;
    await Boeking.create(boekingInput);
    res.json(boekingInput);
});

// alle boeking + gast info opvragen
router.get('/gastboeking', async (req, res) => { 
    const boekingen = await Gast.findAll({ // await, zodat de code wacht op de uitkomst van de functie
        include: Boeking // Include Gast data
    });
    res.json(boekingen);
});

// alle boekingen ophalen
router.get('/', async (req, res) => { 
    const boekingen = await Boeking.findAll({ // await, zodat de code wacht op de uitkomst van de functie
    });
    res.json(boekingen);
});

// verwijder een boeking
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Boeking.destroy({
        where: {
            id: id
        }
    });
    res.json(id);
});

// update een boeking
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const post = req.body;
    await Boeking.update(post, {
        where: {
            id: id
        }
    });
    res.json(post);
});

module.exports = router;