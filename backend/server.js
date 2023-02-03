const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const BookRoute = require("./routes/BookRoute");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the homepage!!!")
});

mongoose.connect('mongodb://127.0.0.1:27017/books_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database!')
}).catch((error) => {
    console.log(error)
});

app.listen(5000, ()=> {console.log("Server up and running!")});

app.use(BookRoute);





