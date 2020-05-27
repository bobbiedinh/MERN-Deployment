const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/MERN-deployment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("Unable to connect to DB", err));