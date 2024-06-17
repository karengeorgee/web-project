function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
}

function showManageUsers() {
    var manageUsersTable = document.getElementById("manageUsersTable");
    var menuItems = document.getElementById("menuItems");
    manageUsersTable.style.display = "block";
    menuItems.classList.remove("show"); 
    var usersTableBody = document.getElementById("usersTableBody");
    var tableBodyHTML = ''; 
    for (var i = 1; i <= 10; i++) {
        tableBodyHTML += `<tr>
            <td>User ${i}</td>
            <td>Admin/User</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>`;
    }
    usersTableBody.innerHTML = tableBodyHTML; 
     manageUsersTable.scrollIntoView({ behavior: 'smooth' });
}

function showManageReservations() {
  var manageUsersTable = document.getElementById("manageUsersTable");
  var manageReservationsTable = document.getElementById("manageReservationsTable");
  manageUsersTable.style.display = "none";
  manageReservationsTable.style.display = "block";
  menuItems.classList.remove("show"); 

  
  var reservationsTableBody = document.getElementById("reservationsTableBody");
  reservationsTableBody.innerHTML = ''; 
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
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    `;
    reservationsTableBody.innerHTML += reservationRow;
  }


  
  
  manageReservationsTable.scrollIntoView({ behavior: 'smooth' });
}
  
    

function showManageItems() {
    var manageUsersTable = document.getElementById("manageUsersTable");
    var manageReservationsTable = document.getElementById("manageReservationsTable");
    var manageItemsTable = document.getElementById("manageItemsTable");
    manageUsersTable.style.display = "none";
    manageReservationsTable.style.display = "none";
    manageItemsTable.style.display = "block";
    menuItems.classList.remove("show"); 

    
    var itemsTableBody = document.getElementById("itemsTableBody");
    itemsTableBody.innerHTML = ''; 
    var cuisines = ["Lebanese", "Greek", "Turkish"];
    for (var i = 1; i <= 10; i++) {
        var cuisineIndex = i % cuisines.length;
        var itemRow = `
          <tr>
            <td>Item ${i}</td>
            <td>${cuisines[cuisineIndex]}</td>
            <td>$10.00</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
              <button>Add</button>
            </td>
          </tr>
        `;
        itemsTableBody.innerHTML += itemRow;
      }
  
      manageItemsTable.scrollIntoView({ behavior: 'smooth' });
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
  setTimeout(showSlides, 2000); // every 2 seconds
}



