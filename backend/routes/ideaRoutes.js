const express = require('express');
const { getIdeas, createIdea } = require('../controllers/ideaController');
const router = express.Router();

router.get('/', getIdeas);
router.post('/', createIdea);

module.exports = router;
