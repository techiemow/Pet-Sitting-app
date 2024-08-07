const razorpay = require("../../Razorpay");

const newpayment = async(req,res) =>{
    try {
        const { amount, currency } = req.body;
     


        const options = {
            amount: amount * 100, // Amount in paise
            currency: currency,
            receipt: `receipt_${new Date().getTime()}`
        };

        const order = await razorpay.orders.create(options);

        res.json({
            order_id: order.id,
            amount: order.amount
        });
    } catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }



}


module.exports = newpayment