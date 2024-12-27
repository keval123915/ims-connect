const express = require('express');
const { getRewards, awardReward } = require('../controllers/rewardController');
const router = express.Router();

// GET all rewards
router.get('/', getRewards);

// POST a new reward
router.post('/', awardReward);

module.exports = router;
