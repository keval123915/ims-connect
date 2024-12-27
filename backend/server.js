const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;


// Import routes
const ideaRoutes = require('./routes/ideaRoutes');
const voteRoutes = require('./routes/voteRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/ideas', ideaRoutes);
app.use('/api/votes', voteRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/auth', authRoutes);

app.get('/api', (req, res) => {
    res.send('Welcome to the IMS-Connect API. Use the /ideas, /votes, /rewards, or /auth endpoints.');
});


// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err.message);
    });
