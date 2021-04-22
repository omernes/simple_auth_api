const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true, min: 0, max: 5 },
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);