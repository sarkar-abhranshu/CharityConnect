require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes'); // Import routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
app.use('/api', router);

// Serve React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/home`);
});
