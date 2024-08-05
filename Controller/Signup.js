const { UserModel } = require("../Model/UserModel");


const SignUp = async (req, res) => {
    try {
        const { username, password, phoneNumber, email } = req.body;
        console.log(req.body);

        if (!username || !password  || !phoneNumber) {
            return res.status(400).json({
                message: "Missing required fields",
                success: false,
                error: true
            });
        }


        const user = new UserModel({ username, email:req.body.emailaddress, password, phoneNumber });
        const dbResponse = await user.save();

        return res.status(201).json({
            data: dbResponse,
            success: true,
            error: false
        });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || "Internal Server Error",
            success: false,
            error: true
        });
    }
};

module.exports = SignUp;
