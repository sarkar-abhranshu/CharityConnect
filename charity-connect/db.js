const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/charityConnect', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Contact form schema and model
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    message: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = { User, Contact };
