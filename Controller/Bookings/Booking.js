const BookingModel = require("../../Model/BookingModel");

const NewBooking = async(req,res) =>{
try{
    console.log(req.body)
    const booking = new BookingModel(req.body.values);
    const bookings = await booking.save();
    console.log(bookings);
    
    res.status(201).json(
        {
            success: true,
            message: "New Booking Created Successfully",
            data: bookings

        }
     )

}catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || "Internal Server Error",
            success: false,
            error: true
        });
    }

}

module.exports = NewBooking;