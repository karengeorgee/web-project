// controllers/bgrbController.js
module.exports = {
    getBgrbPage: (req, res) => {
      console.log("Controller: Rendering bgrb page");
  
      // Sample data to render
      const content = {
        message: "Welcome to the bgrb page!",
      };
  
      res.render("bgrb", {
        content,
      });
    },
  };
  