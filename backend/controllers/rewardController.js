const Reward = require('../models/Reward');

// Fetch all rewards
const getRewards = async (req, res) => {
    try {
        const rewards = await Reward.find();
        res.status(200).json(rewards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Award a new reward
const awardReward = async (req, res) => {
    try {
        const newReward = new Reward(req.body);
        await newReward.save();
        res.status(201).json(newReward);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getRewards, awardReward };
