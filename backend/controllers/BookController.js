const Book = require("../models/BookModel.js");

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch {
        res.status(500).json({message: error.message});
    }
};

module.exports = getBooks;

