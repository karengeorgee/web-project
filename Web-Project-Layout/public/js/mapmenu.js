// Define coordinates and culinary experiences
const locations = {
  'Turkey': { latlng: [39.9334, 32.8597], menu: 'Turkish Menu' },
  'Lebanon': { latlng: [33.8547, 35.8623], menu: 'Lebanese Menu' },
  'Greece': { latlng: [37.9838, 23.7275], menu: 'Greek Menu' }
};

// Initialize map
const map = L.map('map').setView([39.9334, 32.8597], 5);

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each location
for (const country in locations) {
  const { latlng, menu } = locations[country];
  const marker = L.marker(latlng).addTo(map);
  marker.bindPopup(`<b>Guess the Country!</b><br><a href="#" onclick="startGuessing('${country}')">Guess the Country!</a>`);
}

// Function to start guessing
function startGuessing(countryName) {
  // Fetch menu item from locations data
  const menu = locations[countryName].menu;
  // Show guess container and set correct country
  const guessContainer = document.getElementById('guessContainer');
  guessContainer.style.display = 'block';
  const guessInput = document.getElementById('guessInput');
  guessInput.dataset.correctCountry = countryName;
}

// Function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value.trim().toLowerCase();
  const correctCountry = guessInput.dataset.correctCountry.toLowerCase();
  
  if (guess === correctCountry) {
      alert('Congratulations! You guessed it right. You get a 20% discount coupon!.');
      window.location.href = "/menu"; // Redirect to another page after correct guess
  } else {
      alert('Sorry, Try again!');
  }
}

// Function to skip guessing and show menu
function skipGuess() {
  window.location.href = "/menu";
}

function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}
