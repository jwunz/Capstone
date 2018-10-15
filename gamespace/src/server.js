const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('../routes/api/users');
const clubs = require('../routes/api/clubs');
const chatrooms = require('../routes/api/chatrooms');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/clubs', clubs);
app.use('/api/chatrooms', chatrooms);


const port = process.env.PORT || 8080;


app.listen(port, () => console.log(`Server started on port ${port}`));