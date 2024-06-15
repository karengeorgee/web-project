const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  preferredSeating: String,
  numberOfSeats: Number
});
const Reservation = mongoose.model('Reservation', reservationSchema);

//Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Handle form submission
app.post('/submit-form', (req, res) => {
  const newReservation = new Reservation({
    firstName: req.body.guest_name,
    lastName: req.body.guest_surname,
    email: req.body.email,
    preferredSeating: req.body.table,
    numberOfSeats: req.body['No-seats']
  });

  newReservation.save((err) => {
    if (err) {
      res.send('Error saving reservation.');
    } else {
      res.send('Reservation saved successfully!');
    }
  });
});


