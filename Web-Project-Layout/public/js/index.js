const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
require('dotenv').config();

const app = express();
app.use(express.json());

const uri = process.env.MONGODB_URI;

app.get('/getUsers', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
