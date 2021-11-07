const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();
//Middleware that lets us accept json data into our API
app.use(express.json());

// Define Routes
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));