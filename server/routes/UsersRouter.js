const express = require('express');
const { registerUser, loginUser, updatedUser, deleteUser, changePassword } = require('../controllers/UserController');
const { authenticationToken } = require('../middleware/Auth');
const router = express.Router();

// ******** PUBLIC ROUTES ********
router.post('/', registerUser);
router.post('/login', loginUser);


// ******** PRIVATE ROUTES ********
router.put('/', authenticationToken, updatedUser);
router.delete('/', authenticationToken, deleteUser);
router.put('/password', authenticationToken, changePassword);

module.exports = router;
