const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const spaceSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Size: String,
    Color: String,
    Shape: [String],
});

const User = mongoose.model('User', userSchema);
const SpaceThings = mongoose.model('SpaceThings', spaceSchema);

module.exports = { User, SpaceThings };
