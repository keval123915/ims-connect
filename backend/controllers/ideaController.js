const Idea = require('../models/Idea');

const getIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.status(200).json(ideas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createIdea = async (req, res) => {
    try {
        const newIdea = new Idea(req.body);
        await newIdea.save();
        res.status(201).json(newIdea);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getIdeas, createIdea };
