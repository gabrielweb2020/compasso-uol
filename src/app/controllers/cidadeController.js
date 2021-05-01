const express = require('express');

const Cidade = require('../models/Cidade');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cities = await Cidade.find();

        return res.send({ cities });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading cities!' });
    }
});

router.get('/:name/cidade', async (req, res) => { 
    try {
        const city = await Cidade.find({ nome: req.params.name });

        return res.send({ city });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading cities!' });
    }
});

router.get('/:state/estado', async (req, res) => {
    try {
        const cities = await Cidade.find({ estado: req.params.state });

        return res.send({ cities });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading cities!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const city = await Cidade.create(req.body);

        return res.send({ city });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new city!' });
    }
});

module.exports = app => app.use('/cidades', router);