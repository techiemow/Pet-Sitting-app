const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const connectdb = require("./DB/DB");
const authToken = require("./middleware/Authtoken");
const Router = require("./Routes/Routes");


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(Router);
app.use(authToken);

const port = 4000;

app.get('/', (req, res) => {
    res.send('Welcome to Paws and Claws!');
});

connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

