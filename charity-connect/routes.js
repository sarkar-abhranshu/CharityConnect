const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { User, Contact } = require('./db'); // Import the User and Contact models

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to the database
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            // Check which field caused the duplicate key error
            const field = Object.keys(err.keyPattern)[0];
            res.status(400).json({ 
                error: `${field === 'username' ? 'Username' : 'Email'} already exists`
            });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare passwords
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Contact form route
router.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        // Save contact form data to MongoDB
        const contact = new Contact({ name, email, phone, message });
        await contact.save();

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error('Email credentials not configured');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            debug: true
        });
        
        const mailOptions = {
            from: process.env.EMAIL_USER, // Use environment variable
            to: email,
            subject: 'Thank you for contacting CharityConnect',
            text: `Hi ${name},\n\nThank you for reaching out to us. Your message was: "${message}".\nA member of our team will follow up with you shortly.\n\nBest regards,\nCharityConnect Team`
        };

        // Verify transporter configuration
        await transporter.verify();
        
        // Send email with Promise wrapper
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    reject(error);
                } else {
                    console.log('Email sent:', info.response);
                    resolve(info);
                }
            });
        });

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: err.message || 'Server error' });
    }
});

module.exports = router;
