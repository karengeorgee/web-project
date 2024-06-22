function currentreservations() {
  var Viewcurrentreservations = document.getElementById(
    "Viewcurrentreservtaions"
  );
  var currentTableBody = document.getElementById("currentTableBody");
  Viewcurrentreservations.style.display = "block";
  menuItems.classList.remove("show");

  fetch("/reservations") // This path should match the route defined in the backend
    .then((response) => response.json())
    .then((reservations) => {
      currentTableBody.innerHTML = "";
      reservations.forEach((reservation) => {
        var reservationRow = `
                    <tr>
                        <td>${reservation.firstName} ${reservation.lastName}</td>
                        <td>${reservation._id}</td>
                        <td>${reservation.seatNumber}</td>
                        <td>${reservation.preferredSeating}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                `;
        currentTableBody.innerHTML += reservationRow;
      });
    })
    .catch((err) => console.error(err));

  Viewcurrentreservations.scrollIntoView({ behavior: "smooth" });
}

function reservationshistory() {
  var bookinghis = document.getElementById("bookinghis");
  var historyTableBody = document.getElementById("bookinghistable");
  bookinghis.style.display = "block";
  menuItems.classList.remove("show");

  fetch("/reservations") // This path should match the route defined in the backend
    .then((response) => response.json())
    .then((reservations) => {
      currentTableBody.innerHTML = "";
      reservations.forEach((reservation) => {
        var reservationRow = `
                <tr>
                    <td>${reservation.firstName} ${reservation.lastName}</td>
                    <td>${reservation._id}</td>
                    <td>${reservation.seatNumber}</td>
                    <td>${reservation.preferredSeating}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            `;
        historyTableBody.innerHTML += reservationRow;
      });
    })
    .catch((err) => console.error(err));

  bookinghis.scrollIntoView({ behavior: "smooth" });
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

function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}
