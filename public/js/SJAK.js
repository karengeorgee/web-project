// Close the menu list when Contact Us or About Us is clicked
document.querySelectorAll(".menu-items a").forEach(function (link) {
  link.addEventListener("click", function () {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.classList.contains("show")) {
      toggleMenu();
    }
  });
});

var calendar = flatpickr("#calendar", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  minDate: "today",
  maxDate: new Date().fp_incr(30),
});

// Show the calendar when the "BOOK YOUR TABLE" button is clicked
document.querySelector(".book-button").addEventListener("click", function () {
  calendar.open();
});

var doneButton = document.createElement("button");
doneButton.innerHTML = "Done";
doneButton.id = "done-button";

doneButton.addEventListener("click", function () {
  calendar.close();
  var selectedDateTime = calendar.input.value; // Get the selected date and time
  var [date, time] = selectedDateTime.split(" ");
  window.location.href = `/reservation?date=${date}&time=${time}`;
});

calendar.calendarContainer.appendChild(doneButton);

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".images-container img");

  function fadeInImages() {
    images.forEach((image, index) => {
      if (isElementInViewport(image)) {
        setTimeout(() => {
          image.style.opacity = 1;
        }, index * 300);
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", fadeInImages);
});
