const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Boeking, Gast, Kampeerplek, sequelize } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// koppeling gast + boeking + kampeerplek -> http://localhost:3001/boeking/gastboeking
// koppeling boeking los -> http://localhost:3001/boeking

// gast + boeking maken + kampeerplek koppelen
router.post('/gastboeking', async (req, res) => {
    const { gastInput , boekingInput, kampeerplekInput } = req.body;

    const transaction = await sequelize.transaction();

    try {
        // gast gegevens
        const createdGast = await Gast.create(gastInput, { transaction });
        // boeking koppelen aan gast + kampeergegevens koppelen aan boeking
        const createdBoeking = await Boeking.create({ ...boekingInput, GastId: createdGast.id, KampeerplekId: kampeerplekInput.id }, { transaction });
        // wanneer beide transacties succesvol zijn, commit je de transactie
        await transaction.commit();

        res.json({ gastInput: createdGast, boekingInput: createdBoeking});

    } catch (error) {
        // wanneer een transactie fout is zal de transactie worden gerollbacked
        await transaction.rollback(); 

        res.status(500).json({ error: error.message });
    }
});

// alle gasten + boekingen + kampeerplekken info ophalen
router.get('/gastboeking', async (req, res) => { 
    const boekingen = await Gast.findAll({ // await, zodat de code wacht op de uitkomst van de functie
        include: [{
            model: Boeking, // Include Boeking + Kampeerplek data
            include: Kampeerplek
        }]
    });
    res.json(boekingen);
});

// boeking aanmaken
router.post('/', async (req, res) => {
    const boekingInput = req.body;
    await Boeking.create(boekingInput);
    res.json(boekingInput);
});

// alle boekingen ophalen
router.get('/', async (req, res) => { 
    const boekingen = await Boeking.findAll({ // await, zodat de code wacht op de uitkomst van de functie
    });
    res.json(boekingen);
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

module.exports = router;