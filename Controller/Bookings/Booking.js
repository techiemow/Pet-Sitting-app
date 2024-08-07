const BookingModel = require("../../Model/BookingModel");

const NewBooking = async (req, res) => {
  try {
    // Log the entire request body
    console.log(req.body);

    // Create a new booking using the data from the request body
    const booking = new BookingModel({
      ...req.body, // Use req.body directly
      user: req.userId 
    });

    // Save the booking to the database
    const bookings = await booking.save();
    console.log(bookings);

    // Send a success response
    res.status(201).json({
      success: true,
      message: "New Booking Created Successfully",
      data: bookings
    });

  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({
      message: err.message || "Internal Server Error",
      success: false,
      error: true
    });
  }
}

module.exports = NewBooking;
