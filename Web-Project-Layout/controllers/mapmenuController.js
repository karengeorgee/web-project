const locations = [
  { name: 'Turkey', latlng: [39.9334, 32.8597], menu: 'Turkish Menu' },
  { name: 'Lebanon', latlng: [33.8547, 35.8623], menu: 'Lebanese Menu' },
  { name: 'Greece', latlng: [37.9838, 23.7275], menu: 'Greek Menu' }
];

function showMenu(req, res, menu) {
  res.render("mapmenu", {
    currentPage: "Menu",
    menuTitle: menu,
    user: req.session.user === undefined ? "" : req.session.user,
  });
}

function startGuessing(req, res, countryName, menu) {
  res.render("guessCountry", {
    currentPage: "Guess Country",
    user: req.session.user === undefined ? "" : req.session.user,
    countryName: countryName,
    menu: menu
  });
}

function checkGuess(req, res, guess) {
  const correctCountry = req.params.countryName.toLowerCase();

  if (guess.toLowerCase() === correctCountry) {
    res.redirect("/menu"); // Redirect to another page after correct guess
  } else {
    res.render("guessCountry", {
      currentPage: "Guess Country",
      user: req.session.user === undefined ? "" : req.session.user,
      errorMessage: "Sorry, that’s not correct. Try again!"
    });
  }
}

function skipGuess(req, res, menu) {
  res.redirect("/menu");
}

module.exports = {
  showMenu,
  startGuessing,
  checkGuess,
  skipGuess
};