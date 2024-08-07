const PaymentModel = require("../../Model/PaymentModel");

const PaymentSucess = async(req,res) =>{
    try {
        const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

         
       console.log(req.body);
       
         

        const payment = await PaymentModel.create({
            userId: req.userId, // Ensure user ID is available
            email: req.body.email,
            paymentDetails: {
                razorpayPaymentId,
                razorpayOrderId,
                razorpaySignature,
                status:'success'
            },
            totalAmount: req.body.amount, // Pass the total amount
            petDetails: req.body.petDetails // Pass pet details from the frontend
        });
        
        console.log(payment)
        res.json({ success: true, data:payment });
    } catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}
module.exports = PaymentSucess