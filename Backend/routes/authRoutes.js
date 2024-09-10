const express = require('express');
const { register, login , verify_jwt_token} = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-token' , verify_jwt_token)
module.exports = router;
