const express = require('express');
const { User } = require('../loginscema');
const SpaceThings = require('../schema.js');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const spaceSchema = Joi.object({
    Name: Joi.string().required(),
    Description: Joi.string().required(),
    Size: Joi.string().required(),
    Color: Joi.string().required(),
    Shape: Joi.array().items(Joi.string()),
    created_by: Joi.array().items(Joi.string()),
});

const validateInput = (req, res, next) => {
    console.log(req.body);
    const { error } = spaceSchema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ error: error.details.map(detail => detail.message) });
    }
    next();
};

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('username _id');
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

router.get('/user/:filter', async (req, res) => {
    const user = req.params.filter;
    try {
        console.log(user);
        const filteredInventions = await SpaceThings.find({ created_by: user });
        res.json(filteredInventions);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching filtered inventions' });
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: 'User already registered.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password.' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid email or password.' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });
    res.json({ message: 'Login successful' });
});

router.get('/logout', (req, res) => {
    res.clearCookie('token', { path: '/' });
    res.json({ message: 'Logout successful' });
});

router.get('/space', async (req, res) => {
    try {
        const spaceData = await SpaceThings.find();
        res.json({ spaceData });
    } catch (err) {
        res.status(500).json({ error: `An error occurred while getting the data: ${err}` });
    }
});

router.patch('/:id', validateInput, async (req, res) => {
    try {
        const spaceFound = await SpaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
});

router.post('/add-space', async (req, res) => {
    try {
        console.log(req.body);
        const newSpace = new SpaceThings(req.body);
        const saveSpace = await newSpace.save();
        res.json(saveSpace);
    } catch (err) {
        console.error('Error adding space:', err);
        res.status(500).json({ error: 'An error occurred while saving the space' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);
        const spaceFound = await SpaceThings.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!spaceFound) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json(spaceFound);
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
});

router.delete('/:id', authenticate, async (req, res) => {
    try {
        const spaceFound = await SpaceThings.findByIdAndDelete(req.params.id);
        if (!spaceFound) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json('Space deleted');
    } catch (err) {
        res.status(500).send(`Error: ${err}`);
    }
});

module.exports = router;
