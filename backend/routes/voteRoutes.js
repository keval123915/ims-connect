const express = require('express');
const Idea = require('../models/Idea');

const router = express.Router();

// Vote on an idea
router.post('/:ideaId', async (req, res) => {
    const { ideaId } = req.params;
    const { score } = req.body; // Score (e.g., 1–5)

    if (!score || score < 1 || score > 5) {
        return res.status(400).json({ message: 'Invalid score. Must be between 1 and 5.' });
    }

    try {
        const idea = await Idea.findById(ideaId);
        if (!idea) {
            return res.status(404).json({ message: 'Idea not found' });
        }

        // Update votes and calculate average score
        idea.totalVotes += 1;
        idea.totalScore += score;
        idea.averageScore = idea.totalScore / idea.totalVotes;

        await idea.save();

        res.status(200).json({ message: 'Vote submitted successfully!', idea });
    } catch (error) {
        console.error('Error submitting vote:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
