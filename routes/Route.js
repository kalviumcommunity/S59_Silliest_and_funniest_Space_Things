const express = require('express');
const router = express.Router();
const spaceThings = require('../schema.js');
const Joi = require('joi');


const schema = Joi.object({
    Name: Joi.string().required(),
    Description: Joi.string().required(),
    Size: Joi.string().required(),
    Color: Joi.string().required(),
    Shape: Joi.array().items(Joi.string()).required(),
});


const validateInput = (req, res, next) => {
    const { error } = schema.validate(req.body, {abortEarly: false});
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


router.get('/space', async (req, res) => {
    try {
        const spaceData = await spaceThings.find();
        res.json({ spaceData });
    } catch (err) {
        res.status(500).json({ error: "An Error occurred while getting the data: " + err });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: "Space not found" });
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


router.post('/add-space', validateInput, async (req, res) => {
    try {
        const newspace = new spaceThings(req.body);
        const savespaceThings = await newspace.save();
        res.json(savespaceThings);
    } catch (err) {
        console.error('Error adding space:', err);
        res.status(500).json({ error: 'An error occurred while saving the space' });
    }
});


router.put('/:id', validateInput, async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: "Space not found" });
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndDelete(req.params.id);
        if (!spaceFound) {
            return res.status(404).json({ error: "Space not found" });
        }
        res.json('Space deleted');
    } catch (err) {
        res.status(500).send('Error:' + err);
    }
});

module.exports = router;
