

function validate() {
  // Basic validation (add more checks as needed)
  const firstName = document.getElementById('fn').value;
  const lastName = document.getElementById('ln').value;
  const email = document.getElementById('em').value;
  const seating = document.querySelector('select[name="table"]').value;
  const numSeats = document.getElementById('sn').value;

  if (firstName === '' || lastName === '' || email === '' || numSeats === '') {
    alert('Please fill out all required fields.');
    return false;
  }

  // Assuming the form is in your HTML file
  const form = document.querySelector('form');

  // Send the reservation data to your backend
  fetch('/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      seating: seating,
      numSeats: numSeats
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to create reservation');
    }
  })
  .then(data => {
    // Display success message or redirect
    alert(`Reservation created successfully! ID: ${data.reservationId}`);
  })
  .catch(error => {
    console.error('Error creating reservation:', error);
    alert('Error creating reservation. Please try again.');
  });

  // Prevent default form submission
  return false;
}