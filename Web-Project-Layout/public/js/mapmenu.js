// Define coordinates and culinary experiences
const locations = [
    { name: 'Turkey', latlng: [39.9334, 32.8597], menu: 'Turkish Menu' },
    { name: 'Lebanon', latlng: [33.8547, 35.8623], menu: 'Lebanese Menu' },
    { name: 'Greece', latlng: [37.9838, 23.7275], menu: 'Greek Menu' }
  ];
  
  const map = L.map('map').setView([39.9334, 32.8597], 5); 
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add markers for each location
  locations.forEach(location => {
    const marker = L.marker(location.latlng).addTo(map);
    marker.bindPopup(`<b>Guess the Country!</b><br><a href="#" onclick="startGuessing('${location.name}', '${location.menu}')">Guess the Country!</a>`);
  });
  
  function showMenu(menu) {
    const menuContainer = document.getElementById('menuContainer');
    const menuTitle = document.getElementById('menuTitle');
    menuTitle.textContent = menu;
    menuContainer.style.display = 'block';
  }
  
  function startGuessing(countryName, menu) {
    const guessContainer = document.getElementById('guessContainer');
    guessContainer.style.display = 'block';
  
    
    const guessInput = document.getElementById('guessInput');
    guessInput.setAttribute('data-correct-country', countryName);
    guessInput.setAttribute('data-menu', menu);
  }
  
  function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim().toLowerCase();
    const correctCountry = guessInput.getAttribute('data-correct-country').toLowerCase();
    
    if (guess === correctCountry) {
      alert('Congratulations! You guessed it right. You get a 20% discount coupon!.');
      window.location.href = "/menu"; // Redirect to another page after correct guess
    } else {
      alert('Sorry, that\'s not correct. Try again!');
    }
  }
  
  
  function skipGuess() {
    // const guessInput = document.getElementById('guessInput');
    // const menu = guessInput.getAttribute('data-menu');
    // showMenu(menu);
    window.location.href = "/menu";
  }
  
  function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
  }
  