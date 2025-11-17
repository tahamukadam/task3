import express from 'express';
import bodyParser from 'body-parser';
import {
    getAllbook,
    getbookById,
    createbook,
    updatebook,
    deletebook
} from './bookmodule.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Get all books
app.get('/books', (req, res) => {
    const books = getAllbook();
    res.json(books);
});

// Get a book by ID
app.get('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const book = getbookById(bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Create a new book
app.post('/books', (req, res) => {
    const { title, author, genre, publicationYear } = req.body;

    if (!title || !author || !genre || !publicationYear) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = createbook(title, author, genre, publicationYear);
    res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const { title, author, genre, publicationYear } = req.body;

    const updatedBook = updatebook(bookId, title, author, genre, publicationYear);

    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const deletedBook = deletebook(bookId);

    if (deletedBook) {
        res.json(deletedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
