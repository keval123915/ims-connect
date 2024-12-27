const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    ideaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Idea', required: true }, // Links to Idea
    voterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Links to User
    score: { type: Number, required: true, min: 1, max: 5 },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', voteSchema);
