const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController');
const router = express.Router();

// POST login
router.post('/login', loginUser);

// POST register
router.post('/register', registerUser);

module.exports = router;
