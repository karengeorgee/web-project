
function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}
function currentreservations() {
    var Viewcurrentreservations = document.getElementById("Viewcurrentreservtaions");
    var current = document.getElementById("current");
    Viewcurrentreservations.style.display = "block";
    menuItems.classList.remove("show"); 
    
    
    var currentTableBody = document.getElementById("currentTableBody");
    currentTableBody.innerHTML = ''; 
    
    var reservationsData = [
        { name: "John Doe", reservationNumber: "001", seats: 4, preferredSeating: "Indoor" },
        { name: "Jane Smith", reservationNumber: "002", seats: 2, preferredSeating: "Outdoor" },
        { name: "Michael Johnson", reservationNumber: "003", seats: 3, preferredSeating: "Indoor" },
        { name: "Ahmed Tamer", reservationNumber: "004", seats: 5, preferredSeating: "Outdoor" },
        { name: "Karen", reservationNumber: "005", seats: 6, preferredSeating: "Indoor" },
        { name: "Jane ", reservationNumber: "006", seats: 2, preferredSeating: "Outdoor" },
        { name: "Michael ", reservationNumber: "007", seats: 3, preferredSeating: "Indoor" },
        { name: " Tamer", reservationNumber: "008", seats: 5, preferredSeating: "Outdoor" },
        
    ];

    for (var i = 0; i < reservationsData.length; i++) {
        var reservation = reservationsData[i];
        
        var reservationRow = `
            <tr>
                <td>${reservation.name}</td>
                <td>${reservation.reservationNumber}</td>
                <td>${reservation.seats}</td>
                <td>${reservation.preferredSeating}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        `;
        
        currentTableBody.innerHTML += reservationRow;
    }
    
    Viewcurrentreservations.scrollIntoView({ behavior: 'smooth' });
}

function reservationshistory() {
    var bookinghis = document.getElementById("bookinghis");
    var history = document.getElementById("history");
    bookinghis.style.display = "block";
    menuItems.classList.remove("show"); 
    
    
    var historyTableBody = document.getElementById("historyTableBody"); 
    historyTableBody.innerHTML = ''; 
    var reservationsData = [
        { reservationNumber: "001", name: "John Doe" },
        { reservationNumber: "002", name: "Jane Smith" },
        { reservationNumber: "003", name: "Michael Johnson" },
        { reservationNumber: "004", name: "Ahmed Tamer" },
        { reservationNumber: "005", name: "Karen" },
        { reservationNumber: "006", name: "Tamer" },
        { reservationNumber: "007", name: "Selvia" },
        { reservationNumber: "008", name: "Jumana" },
    ];

    for (var i = 0; i < reservationsData.length; i++) {
        var randomNumber = Math.floor(Math.random() * 2); 
        var s = Math.floor(Math.random() * 20) + 1; 
        var reservation = reservationsData[i];
        var location = randomNumber === 0 ? "indoor" : "outdoor";
        
        var reservationRow = `
            <tr>
                <td>${reservation.reservationNumber}</td>
                <td>${reservation.name}</td>
                <td>${location}</td>
                <td>Number of seats: ${s}</td>
              
            </tr>
        `;
        historyTableBody.innerHTML += reservationRow; 
    }

    bookinghis.scrollIntoView({ behavior: 'smooth' });
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}




  
    
