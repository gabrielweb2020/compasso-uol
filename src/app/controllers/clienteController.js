const express = require('express');

const Cliente = require('../models/Cliente');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const clients = await Cliente.find();

        return res.send({ clients });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading posts!' });
    }
});

router.get('/:clientId', async (req, res) => {
    try {
        const client = await Cliente.findById(req.params.clientId);

        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading client!' });
    }
});

router.get('/:name/cliente', async (req, res) => { 
    try {
        const client = await Cliente.find({ nome: req.params.name });

        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading client!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const client = await Cliente.create(req.body);

        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new client!' });
    }
});

router.patch('/:clientId', async (req, res) => {
    try {
        const { nome } = req.body;

        const client = await Cliente.findByIdAndUpdate(req.params.clientId, { 
            nome
        }, { new: true });

        await client.save();

        return res.send({ client });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating client!' });
    }
});

router.delete('/:clientId', async (req, res) => {
    try {
        await Cliente.findByIdAndRemove(req.params.clientId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting client!' });
    }
});

module.exports = app => app.use('/clientes', router);