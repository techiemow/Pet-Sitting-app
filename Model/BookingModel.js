
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingSchema = new Schema({
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  careType: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  specialRequests: { type: String },
  petImages:{ type: Array, required: true},
  price:{ type: Number, required: true},
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
