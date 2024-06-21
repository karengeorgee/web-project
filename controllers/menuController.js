// controllers/menuController.js

// Function to render the menu page
const showMenuPage = (req, res) => {
    
    res.render("menu", {
        currentPage: "menu",
        user: req.session.user || ''
    });
};

module.exports = {
    showMenuPage
};
