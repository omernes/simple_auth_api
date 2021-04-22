const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    procedure: String,
    value: Number,
    timestamp: Date,
    createdDate: { type: Date, default: Date.now }
}, { collection: 'data' });

module.exports = mongoose.model('Data', dataSchema);