const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    book:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Books', bookSchema);