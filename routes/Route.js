const express = require('express')
const router = express.Router();
const spaceThings = require('../schema.js')

require('dotenv').config()

router.get('/space', async (req, res) => {
    try {
        const spaceData = await spaceThings.find();
        res.json(spaceData)
    } catch (err) {
        res.json({ error: " An Error occured while getting the data ." + err })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: "space not found " })
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send('Error: ' + err)
    }
})





router.post('/add-space', async (req, res) => {
    // const isValid = checkValidation(req.body, userSchema);
    // if (!isValid) {
    //     return res.status(400).json({ error: 'Invalid input data' });
    // }
    const newspace = new spaceThings(req.body);

    try {
        const savespaceThings = await newspace.save();
        res.json(savespaceThings);
    } catch (err) {
        console.error('Error adding space:', err);
        res.status(500).json({ error: 'An error occurred while saving the space' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: "space not found " })
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send('Error: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const spaceFound = await spaceThings.findByIdAndDelete(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: "space not found " })
        }
        res.json('space deleted');
    } catch (err) {
        res.status(500).send('Error:' + err)
    }
})


module.exports = router