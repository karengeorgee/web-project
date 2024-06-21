// controllers/menuController.js

// Function to render the menu page
const showCouponPage = (req, res) => {
    
    res.render("mycoupons", {
        currentPage: "mycoupons",
        user: req.session.user || ''
    });
};

module.exports = {
    showCouponPage
};
