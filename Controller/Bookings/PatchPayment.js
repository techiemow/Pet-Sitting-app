const BookingModel = require("../../Model/BookingModel");


const patchpayment =  async(req,res) =>{

    try {
        const bookingId = req.params.id;
        const updatedBooking = await BookingModel.findByIdAndUpdate(
          bookingId,
          { payment: req.body.payment },
          { new: true }
        );
    
        if (!updatedBooking) {
          return res.status(404).json({ message: 'Booking not found' });
        }
    
        res.json({
            success: true,
            error: false,
            booking: updatedBooking,
            message: 'Payment status updated successfully'
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

    module.exports = patchpayment;
