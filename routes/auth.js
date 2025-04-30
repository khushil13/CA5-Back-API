const express = require('express');
const router = express.Router();
const { registerUser, welcomeUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.get('/welcome', welcomeUser);

module.exports = router;
