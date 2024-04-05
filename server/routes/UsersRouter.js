const express = require('express');
const { updatedUser } = require('../controllers/UserController');
const { registerUser } = require('../controllers/UserController');
const { loginUser } = require('../controllers/UserController');
const { authenticationToken } = require('../middleware/Auth');
const router = express.Router();

router.post('/', registerUser);
router.get('/login', loginUser);
router.put('/', authenticationToken, updatedUser);

module.exports = router;
