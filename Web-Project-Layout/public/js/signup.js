document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    console.log("Form submission prevented");

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorDiv = document.getElementById("errorDiv");

    errorDiv.innerHTML = ""; // Clear previous errors
    errorDiv.style.display = "none"; // Hide errorDiv initially

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (!username || !password || !confirmPassword) {
      displayError("Please enter both username and password.");
      console.log("Error: Missing username or password");
      return;
    }

    if (password !== confirmPassword) {
      displayError("Passwords do not match.");
      console.log("Error: Passwords do not match");
      return;
    }

    if (password.length < 8) {
      displayError("Password must be at least 8 characters long.");
      console.log("Error: Password too short");
      return;
    }

    console.log("Form submitted successfully");
    this.submit();
  });

function displayError(message) {
  var errorMessage = document.createElement("div");
  errorMessage.classList.add("alert", "alert-danger");
  errorMessage.textContent = message;
  errorDiv.appendChild(errorMessage);

  console.log("Displaying error:", message);

  errorDiv.style.display = "block"; // Make errorDiv visible
  return;
}


function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.classList.toggle("show");
}