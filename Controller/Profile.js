const BookingModel = require("../Model/BookingModel");
const { UserModel } = require("../Model/UserModel");

const profile = async(req,res) =>{
    try {
        console.log(req.userId);
        
        const userId = req.userId; // Assuming you have user info in req.user
        const user = await UserModel.findById(userId);
        const bookings = await BookingModel.find({ user: userId });
        console.log(user,"USer");
        
    
        res.json({ user, bookings });
      }   catch (err) {
            res.status(400).json({
                message: err.message || err,
                error: true,
                success: false
            });
        }
    

}

module.exports =profile;