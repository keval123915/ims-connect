const Idea = require('../models/Idea');

const voteOnIdea = async (req, res) => {
    const { ideaId } = req.params;
    const { score } = req.body; // Score can be a number between 1 and 5

    try {
        const idea = await Idea.findById(ideaId);
        if (!idea) {
            return res.status(404).json({ message: 'Idea not found' });
        }

        // Update the total votes and calculate the average score
        idea.totalVotes += 1;
        idea.totalScore += score;
        idea.averageScore = idea.totalScore / idea.totalVotes;

        await idea.save();

        res.status(200).json({ message: 'Vote submitted successfully', idea });
    } catch (error) {
        console.error('Error voting on idea:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { voteOnIdea };
