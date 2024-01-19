const express = require('express');
const router =  express.Router(); // Dit is een express router object
const { Boeking, Gast, Kampeerplek, LeeftijdsgroepAantal, Leeftijdsgroep, sequelize } = require('../models'); //Dit zal over de bestanden in de map ./server/models gaan

// gast + boeking maken
router.post('/gastboeking', async (req, res) => { // = http://localhost:3001/boeking/gastboeking
    const { gastInput , boekingInput, leeftijdsgroepAantalInput, kampeerplekInput} = req.body;

    const transaction = await sequelize.transaction();

    try {
        // gast gegevens
        const createdGast = await Gast.create(gastInput, { transaction });

        // boeking koppelen aan gast + kampeergegevens koppelen aan boeking
        const createdBoeking = await Boeking.create({ ...boekingInput, GastId: createdGast.id, KampeerplekId: kampeerplekInput.id }, { transaction });

        // leeftijdsgroepAantal gegevens
        const createdLeeftijdsgroepAantal = await LeeftijdsgroepAantal.create({ ...leeftijdsgroepAantalInput, BoekingId: createdBoeking.id }, { transaction });

        // kampeerplek gegevens
        const existingKampeerplek = await Kampeerplek.findByPk(kampeerplekInput.id, { transaction });
        
        // wanneer alle transacties succesvol zijn, commit je de transactie
        await transaction.commit();

        res.json({ gastInput: createdGast, boekingInput: createdBoeking, leeftijdsgroepAantalInput: createdLeeftijdsgroepAantal, kampeerplekInput: existingKampeerplek });

    } catch (error) {
        // wanneer een transactie fout is zal de transactie worden gerollbacked
        await transaction.rollback(); 

        res.status(500).json({ error: error.message });
    }
});

// volledige boekingen ophalen
router.get('/gastboeking', async (req, res) => { // = http://localhost:3001/boeking/gastboeking
    try {
        const gasten = await Gast.findAll({
            include: [{
                model: Boeking,
                include: [{
                    model: Kampeerplek
                }, {
                    model: LeeftijdsgroepAantal,
                    include: [{ model: Leeftijdsgroep }]
                }]
            }]
        });
        res.json(gasten);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//optioneel

    // boeking los aanmaken
    router.post('/', async (req, res) => { // = http://localhost:3001/boeking/
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