function showTable(tableName) {
  var manageUsersTable = document.getElementById("manageUsersTable");
  var manageReservationsTable = document.getElementById(
    "manageReservationsTable"
  );
  var manageItemsTable = document.getElementById("manageItemsTable");
  var menuItems = document.getElementById("menuItems");

  // Hide all tables
  manageUsersTable.style.display = "none";
  manageReservationsTable.style.display = "none";
  manageItemsTable.style.display = "none";

  // Remove "show" class from menu items
  menuItems.classList.remove("show");

  // Show the selected table and perform specific actions if needed
  if (tableName === "users") {
    manageUsersTable.style.display = "block";
    var usersTableBody = document.getElementById("usersTableBody");
    usersTableBody.innerHTML = tableBodyHTML;
    manageUsersTable.scrollIntoView({ behavior: "smooth" });
  } else if (tableName === "reservations") {
    manageReservationsTable.style.display = "block";
    var reservationsTableBody = document.getElementById(
      "reservationsTableBody"
    );
    reservationsTableBody.innerHTML += reservationRow;
    manageReservationsTable.scrollIntoView({ behavior: "smooth" });
  } else if (tableName === "items") {
    manageItemsTable.style.display = "block";
    var itemsTableBody = document.getElementById("itemsTableBody");
    manageItemsTable.scrollIntoView({ behavior: "smooth" });
  }
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
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
