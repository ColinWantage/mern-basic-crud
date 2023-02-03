const express = require("express");
const getBooks = require("../controllers/BookController.js");
const router = express.Router();

router.get('/books', getBooks);

module.exports = router;