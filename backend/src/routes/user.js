const express = require('express');
const router = express.Router();


const userConstoller = require('../controllers/userController');

router.get('/api/users/:id', userConstoller.getUserById);

module.exports = router;