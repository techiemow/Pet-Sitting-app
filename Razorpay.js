const Razorpay = require('razorpay');


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Access environment variable
    key_secret: process.env.RAZORPAY_SECERT_KEY // Access environment variable
});

module.exports = razorpay;
