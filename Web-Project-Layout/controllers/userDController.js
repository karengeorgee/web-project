const path = require('path');

exports.getUserDashboard = (req, res) => {
  res.render('userdash', {
    username: req.session.username || 'Guest' // Pass the username from session if available
  });
};