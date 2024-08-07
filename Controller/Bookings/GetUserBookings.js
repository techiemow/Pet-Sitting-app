const BookingModel = require("../../Model/BookingModel");


const GetUserBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find({ user: req.userId });
   
    
    res.status(200).json({
      success: true,
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

module.exports = GetUserBookings;
