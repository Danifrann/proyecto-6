const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../auth');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/verifytoken', auth, userController.verifyToken);
router.put('/update', auth, userController.updateUser);

module.exports = router;
