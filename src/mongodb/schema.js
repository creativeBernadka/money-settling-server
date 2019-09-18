const mongoose = require('mongoose');

const historyItemSchema = new mongoose.Schema({
    name: String,
    nickNames: [String],
    payments: [{
        whoPayed: String,
        forWhom: [String],
        howMany: Number
    }],
    summary: [{
        whoPays: String,
        whomPays: String,
        howMany: Number
    }]
});

module.exports = mongoose.model('HistoryItem', historyItemSchema);
