const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
    try {
        const { email, password, name, role } = req.body;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the user
        const newUser = new User({ email, password: hashedPassword, name, role });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Log in an existing user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Compare provided password with stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
};

module.exports = { registerUser, loginUser };
