const BookingModel = require("../../Model/BookingModel");

const updateBooking =  async(req ,res) =>{
    try{
        const bookingId = req.params.id;
        const updateData = req.body;
        const updatedBooking = await BookingModel.findByIdAndUpdate(bookingId, updateData, { new: true });
        console.log(updatedBooking);
        res.status(200).json({ success: true, message: 'Booking updated successfully', data: updatedBooking });
        

    }catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({
      message: err.message || "Internal Server Error",
      success: false,
      error: true
    });
  }

}

module.exports = updateBooking