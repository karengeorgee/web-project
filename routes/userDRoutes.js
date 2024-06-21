// routes/userDRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware'); // Import authentication middleware
const { getUserDashboard, getUserReservations, getUserBookingHistory } = require('../controllers/userDController'); // Import user dashboard controllers

const authRoutes = require('./authRoutes'); // Import authentication routes

const router = express.Router();

// Use authentication routes under '/auth' path
router.use('/auth', authRoutes);

// Route to render the user dashboard if authenticated and after redirection from the middleware
router.get('/', authMiddleware.isAuthenticated, getUserDashboard);

// Route to fetch user reservations if authenticated
router.get('/reservations', authMiddleware.isAuthenticated, getUserReservations);


router.get('/reservations', authMiddleware.isAuthenticated, getUserBookingHistory);


module.exports = router;
