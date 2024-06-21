// routes/authRoutes.js
const express = require('express');
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');
const { sign } = require("crypto");
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', {
    currentPage: 'login',
    user: req.session.user === undefined ? '' : req.session.user,
  });
});

router.post('/login', loginController.loginProcess);

router.get('/signup', (req, res) => {
  res.render('signup', {
    currentPage: 'signup',
    user: req.session.user === undefined ? '' : req.session.user,
  });
});

router.post('/signup', signupController.registrationProcess);

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/');
    }
    res.clearCookie('connect.sid');
    res.redirect('/auth/login');
  });
});

module.exports = router;
