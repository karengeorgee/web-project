// app.js
const express = require('express');
const mongoose = require('mongoose');
const reservationRoutes = require('./routes/ReservationRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing application/json

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', reservationRoutes); // Example: routes are accessible via /api/reservation

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
