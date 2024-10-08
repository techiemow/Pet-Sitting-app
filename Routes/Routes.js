const express = require("express");
const Router = express.Router();

const SignUp = require("../Controller/Signup");
const Login = require("../Controller/Login");
const authToken = require("../middleware/Authtoken");
const UserDetails = require("../Controller/Userdetails");
const { Users } = require("../Controller/Users");
const NewBooking = require("../Controller/Bookings/Booking");
const GetUserBookings = require("../Controller/Bookings/GetUserBookings");
const newpayment = require("../Controller/Payment/NewPayment");
const PaymentSucess = require("../Controller/Payment/PaymentSucess");
const deletebooking = require("../Controller/Bookings/DeleteBooking");
const updateBooking = require("../Controller/Bookings/UpdateBooking");
const patchpayment = require("../Controller/Bookings/PatchPayment");
const profile = require("../Controller/Profile");
const contact = require("../Controller/Contact/Contact");

Router.post("/Signup", SignUp);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)
Router.get("/Users", authToken, Users )
Router.get("/profile",authToken, profile)

Router.post("/NewBooking",authToken,NewBooking);
Router.get('/bookings', authToken, GetUserBookings);
Router.delete("/DeleteBooking/:id" , authToken, deletebooking);
Router.put("/UpdateBooking/:id" , authToken, updateBooking);
Router.put("/Status/:id/payment", authToken, patchpayment)


Router.post("/checkout",  authToken, newpayment);
Router.post("/payment/success", authToken, PaymentSucess);

Router.post("/contact",contact)

module.exports = Router