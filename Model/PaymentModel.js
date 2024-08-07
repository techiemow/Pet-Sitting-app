const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    petDetails: [
        {
            petId: String,
            petName: String,
            ServiceAmount: Number,
            careType: String,
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
            
        
        }
    ],
    paymentDetails: {
        razorpayPaymentId: String,
        razorpayOrderId: String,
        razorpaySignature: String,
        orderCreationId: String,
        status:String

    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const PaymentModel = mongoose.model('Orders', PaymentSchema);

module.exports = PaymentModel;