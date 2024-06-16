const showSJAKPage = (req, res) => {
    res.render("SJAK", {
      currentPage: "home",
      user: req.session.user === undefined ? "" : req.session.user,
    });
  };
  
  module.exports = {
    showSJAKPage,
  };
  