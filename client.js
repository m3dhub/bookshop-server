const axios = require('axios');

// Task 10: Get all books using async callback function
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:3000/books');
        console.log('All books:', response.data);
    } catch (error) {
        console.error('Error fetching all books:', error);
    }
}

// Task 11: Search by ISBN using Promises
function getBookByISBN(isbn) {
    axios.get(`http://localhost:3000/books/isbn/${isbn}`)
        .then(response => {
            console.log(`Book with ISBN ${isbn}:`, response.data);
        })
        .catch(error => {
            console.error(`Error fetching book with ISBN ${isbn}:`, error);
        });
}

// Task 12: Search by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:3000/books/author/${author}`);
        console.log(`Books by author ${author}:`, response.data);
    } catch (error) {
        console.error(`Error fetching books by author ${author}:`, error);
    }
}

// Task 13: Search by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:3000/books/title/${title}`);
        console.log(`Books with title ${title}:`, response.data);
    } catch (error) {
        console.error(`Error fetching books with title ${title}:`, error);
    }
}

// Testing the functions
getAllBooks();
getBookByISBN('1234567890');
getBooksByAuthor('J.K. Rowling');
getBooksByTitle('Harry Potter');
