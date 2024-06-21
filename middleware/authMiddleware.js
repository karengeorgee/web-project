// middleware/authMiddleware.js

const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        // If the user is authenticated, redirect them to user dashboard
        next();
        } else {
        // If not authenticated, proceed to the next middleware or route
        return res.redirect('/menu');
    }
};
  
  module.exports = { isAuthenticated };
