const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Employee', 'Manager', 'Admin'], default: 'Employee' },
    region: { type: String }
});

module.exports = mongoose.model('User', userSchema);
