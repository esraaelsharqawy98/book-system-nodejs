const express = require('express')
const router = express.Router()  // module
const booksController = require('../Controllers/books')
const authentication = require('../middleware/auth')
// Get All Books (login user)
router.get('/api/books',authentication, booksController.getAllBooks)
// Get one Book (login user)
router.get('/api/books/:id',authentication, booksController.getOneBook )
// Update a Book (login user)
router.put('/api/books/:id',authentication, booksController.updateBook)
// Delete a Book (Admin)
router.delete('/api/books/:id',authentication, booksController.deleteBook)
// Add a Book (Admin)
router.post('/api/books',authentication, booksController.createBook)



module.exports = router