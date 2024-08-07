const express = require("express");
const Router = express.Router();

const SignUp = require("../Controller/Signup");
const Login = require("../Controller/Login");
const authToken = require("../middleware/Authtoken");
const UserDetails = require("../Controller/Userdetails");
const { Users } = require("../Controller/Users");
const NewBooking = require("../Controller/Bookings/Booking");
const GetUserBookings = require("../Controller/Bookings/GetUserBookings");

Router.post("/Signup", SignUp);
Router.get("/Login/:username/:password", Login);
Router.get("/UserDetails",authToken, UserDetails)
Router.get("/Users", authToken, Users )

Router.post("/NewBooking",authToken,NewBooking);
Router.get('/bookings', authToken, GetUserBookings);
module.exports = Router