const BookingModel = require("../../Model/BookingModel");

const deletebooking = async(req,res) =>{
    try{
            const { id }= req.params;

            const response = await BookingModel.findByIdAndDelete(id);

          console.log(response);

          res.json({
            success: true,
            error:false,
            data: response,
            message: "Booking deleted successfully"
          })
          





    }catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({
      message: err.message || "Internal Server Error",
      success: false,
      error: true
    });
  }

}

module.exports = deletebooking;