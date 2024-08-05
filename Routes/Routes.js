const express = require("express");
const Router = express.Router();

const SignUp = require("../Controller/Signup");
const Login = require("../Controller/Login");
const authToken = require("../middleware/Authtoken");

Router.post("/Signup", SignUp);
Router.get("/Login/:username/:password", Login);

module.exports = Router