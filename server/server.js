const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./config/mongoose.config');
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));
require('./routes/user.routes')(app);
require('./routes/pirate.routes')(app);

app.listen(8000, () => console.log("Successful connection to port 8000"));