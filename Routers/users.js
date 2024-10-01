const express = require('express')
const router = express.Router()  // module
const userController = require('../Controllers/users') //module


router.post('/api/users/register', userController.register)
router.post('/api/users/login', userController.login)

module.exports = router