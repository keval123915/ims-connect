const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    submissionDate: { type: Date, default: Date.now },
    status: { type: String, default: 'Draft' },
    submitter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalVotes: { type: Number, default: 0 },
    totalScore: { type: Number, default: 0 },
    averageScore: { type: Number, default: 0 }
});

module.exports = mongoose.model('Idea', ideaSchema);
