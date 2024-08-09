const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Task 1: Get the book list available in the shop
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Task 2: Get the books based on ISBN
router.get('/isbn/:isbn', async (req, res) => {
    const book = await Book.findOne({ isbn: req.params.isbn });
    res.json(book);
});

// Task 3: Get all books by Author
router.get('/author/:author', async (req, res) => {
    const books = await Book.find({ author: req.params.author });
    res.json(books);
});

// Task 4: Get all books based on Title
router.get('/title/:title', async (req, res) => {
    const books = await Book.find({ title: new RegExp(req.params.title, 'i') });
    res.json(books);
});

module.exports = router;
