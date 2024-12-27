const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Links to User
    points: { type: Number, required: true },
    rewardType: { type: String, enum: ['Badge', 'Monetary', 'Recognition'], required: true },
    awardedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reward', rewardSchema);
